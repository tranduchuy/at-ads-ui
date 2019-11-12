import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { FusePerfectScrollbarDirective } from '@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { ChatPanelService } from './chat-panel.service';
import { ChatService } from 'app/shared/services/chat.service';
import { SessionService } from 'app/shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';

@Component({
    selector: 'chat-panel',
    templateUrl: './chat-panel.component.html',
    styleUrls: ['./chat-panel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ChatPanelComponent extends PageBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    contacts: any[];
    chat: any;
    selectedContact: any;
    sidebarFolded: boolean;
    user: any;
    loggedInUser: any;

    @ViewChild('replyForm', { static: false })
    private _replyForm: NgForm;

    @ViewChild('replyInput', { static: false })
    private _replyInput: ElementRef;

    @ViewChildren(FusePerfectScrollbarDirective)
    private _fusePerfectScrollbarDirectives: QueryList<FusePerfectScrollbarDirective>;

    // Private
    private _chatViewScrollbar: FusePerfectScrollbarDirective;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ChatPanelService} _chatPanelService
     * @param {HttpClient} _httpClient
     * @param {FuseSidebarService} _fuseSidebarService
     */
    constructor(
        private _chatPanelService: ChatPanelService,
        private _httpClient: HttpClient,
        private _fuseSidebarService: FuseSidebarService,
        private _chatService: ChatService,
        private _sessionService: SessionService
    ) {

        super();

        // Set the defaults
        this.selectedContact = null;
        this.sidebarFolded = true;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Load the contacts
        this._chatPanelService.loadContacts().then(() => {

            //this.contacts = this._chatPanelService.contacts;
            this.contacts = [
                {
                    'id': '5725a680b3249760ea21de52',
                    'name': 'Mr. Long (Hỗ trợ viên)',
                    'avatar': 'assets/images/avatars/Long.jpeg',
                    'status': 'online',
                    'mood': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
                },
            ];
            this.user = this._chatPanelService.user;
        });

        // Subscribe to the foldedChanged observable
        this._fuseSidebarService.getSidebar('chatPanel').foldedChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((folded) => {
                this.sidebarFolded = folded;
            });

        this.getLoggedInUser();
        this.onShowingChatPanel();
    }

    onShowingChatPanel() {
        const sub = this._sessionService.onShowingChatPanel()
            .subscribe((isShown: boolean) => {
                if (isShown) {
                    this.toggleChat(this.contacts[0]);
                }
            });
        this.subscriptions.push(sub);
    }

    getLoggedInUser() {
        const getUserSub = this._sessionService.getUser()
            .subscribe(user => {
                if (user) {
                    this.loggedInUser = user;
                }
            });
        this.subscriptions.push(getUserSub);
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void {
        this._chatViewScrollbar = this._fusePerfectScrollbarDirectives.find((directive) => {
            return directive.elementRef.nativeElement.id === 'messages';
        });

        this._chatService
            .getMessages()
            .subscribe((message) => {
                if (message.who === this.loggedInUser._id) {
                    // Add the message to the chat
                    this.chat.dialog.push(message);

                    // Reset the reply form
                    this._replyForm.reset();

                    // Update the server
                    this._chatPanelService.updateChat(this.chat.id, this.chat.dialog).then(response => {

                        // Prepare the chat for the replies
                        this._prepareChatForReplies();
                    });
                }
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Prepare the chat for the replies
     */
    private _prepareChatForReplies(): void {
        setTimeout(() => {

            // Focus to the reply input
            // this._replyInput.nativeElement.focus();

            // Scroll to the bottom of the messages list
            if (this._chatViewScrollbar) {
                this._chatViewScrollbar.update();

                setTimeout(() => {
                    this._chatViewScrollbar.scrollToBottom(0);
                });
            }
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Fold the temporarily unfolded sidebar back
     */
    foldSidebarTemporarily(): void {
        this._fuseSidebarService.getSidebar('chatPanel').foldTemporarily();
    }

    /**
     * Unfold the sidebar temporarily
     */
    unfoldSidebarTemporarily(): void {
        // Set the selected contact
        this.selectedContact = this.contacts[0];

        // Load the chat
        this._chatPanelService.getChat(this.contacts[0].id).then((chat) => {

            // Set the chat
            this.chat = chat;

            // Prepare the chat for the replies
            this._prepareChatForReplies();
        });
        
        this._fuseSidebarService.getSidebar('chatPanel').unfoldTemporarily();
    }

    /**
     * Toggle sidebar opened status
     */
    toggleSidebarOpen(): void {
        this._fuseSidebarService.getSidebar('chatPanel').toggleOpen();
    }

    /**
     * Decide whether to show or not the contact's avatar in the message row
     *
     * @param message
     * @param i
     * @returns {boolean}
     */
    shouldShowContactAvatar(message, i): boolean {
        // return (
        //     message.who === this.selectedContact.id &&
        //     ((this.chat.dialog[i + 1] && this.chat.dialog[i + 1].who !== this.selectedContact.id) || !this.chat.dialog[i + 1])
        // );
        return (
            message.who === this.loggedInUser._id &&
            ((this.chat.dialog[i + 1] && this.chat.dialog[i + 1].who !== this.loggedInUser._id) || !this.chat.dialog[i + 1])
        );
    }

    /**
     * Check if the given message is the first message of a group
     *
     * @param message
     * @param i
     * @returns {boolean}
     */
    isFirstMessageOfGroup(message, i): boolean {
        return (i === 0 || this.chat.dialog[i - 1] && this.chat.dialog[i - 1].who !== message.who);
    }

    /**
     * Check if the given message is the last message of a group
     *
     * @param message
     * @param i
     * @returns {boolean}
     */
    isLastMessageOfGroup(message, i): boolean {
        return (i === this.chat.dialog.length - 1 || this.chat.dialog[i + 1] && this.chat.dialog[i + 1].who !== message.who);
    }

    /**
     * Toggle chat with the contact
     *
     * @param contact
     */
    toggleChat(contact): void {
        // If the contact equals to the selectedContact,
        // that means we will deselect the contact and
        // unload the chat
        if (this.selectedContact && contact.id === this.selectedContact.id) {
            // Reset
            this.resetChat();
        }
        // Otherwise, we will select the contact, open
        // the sidebar and start the chat
        else {
            // Unfold the sidebar temporarily
            this.unfoldSidebarTemporarily();

            // Set the selected contact
            this.selectedContact = contact;

            // Load the chat
            this._chatPanelService.getChat(contact.id).then((chat) => {

                // Set the chat
                this.chat = chat;

                // Prepare the chat for the replies
                this._prepareChatForReplies();
            });
        }
    }

    /**
     * Remove the selected contact and unload the chat
     */
    resetChat(): void {
        // Set the selected contact as null
        this.selectedContact = null;

        // Set the chat as null
        this.chat = null;
    }

    /**
     * Reply
     */
    reply(event): void {
        event.preventDefault();

        if (!this._replyForm.form.value.message) {
            return;
        }

        // Message
        const message = {
            who: this.user.id,
            message: this._replyForm.form.value.message,
            time: new Date().toISOString(),
            sender: {
                id: this.loggedInUser._id,
                name: this.loggedInUser.name,
                email: this.loggedInUser.email,
                avatar: this.loggedInUser.avatar
            }
        };

        // Add the message to the chat
        this.chat.dialog.push(message);

        // Reset the reply form
        this._replyForm.reset();

        // Update the server
        this._chatPanelService.updateChat(this.chat.id, this.chat.dialog).then(response => {

            // Prepare the chat for the replies
            this._prepareChatForReplies();
        });

        this._chatService.sendMessage(message);
    }
}
