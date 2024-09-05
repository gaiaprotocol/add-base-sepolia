      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${(0,sl.J)(this.address)}
        profileName=${(0,sl.J)(this.profileName)}
        networkSrc=${(0,sl.J)(e)}
        avatarSrc=${(0,sl.J)(this.profileImage)}
        balance=${t?nl.wE.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?nl.W3.open({view:"UnsupportedChain"}):nl.W3.open()}};al([(0,ol.MZ)({type:Boolean})],cl.prototype,"disabled",void 0),al([(0,ol.MZ)()],cl.prototype,"balance",void 0),al([(0,ol.MZ)()],cl.prototype,"charsStart",void 0),al([(0,ol.MZ)()],cl.prototype,"charsEnd",void 0),al([(0,ol.wk)()],cl.prototype,"address",void 0),al([(0,ol.wk)()],cl.prototype,"balanceVal",void 0),al([(0,ol.wk)()],cl.prototype,"balanceSymbol",void 0),al([(0,ol.wk)()],cl.prototype,"profileName",void 0),al([(0,ol.wk)()],cl.prototype,"profileImage",void 0),al([(0,ol.wk)()],cl.prototype,"network",void 0),al([(0,ol.wk)()],cl.prototype,"isUnsupportedChain",void 0),cl=al([(0,rl.customElement)("w3m-account-button")],cl);const ll=il.AH`
  :host {
    display: block;
    width: max-content;
  }
`;var ul=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let dl=class extends il.WF{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=nl.Uj.state.isConnected,this.isLoading=nl.W3.state.loading}firstUpdated(){this.unsubscribe.push(nl.Uj.subscribeKey("isConnected",(e=>{this.isAccount=e})),nl.W3.subscribeKey("loading",(e=>{this.isLoading=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.isAccount&&!this.isLoading?il.qy`
          <w3m-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${(0,sl.J)(this.balance)}
            .charsStart=${(0,sl.J)(this.charsStart)}
            .charsEnd=${(0,sl.J)(this.charsEnd)}
          >
          </w3m-account-button>
        `:il.qy`
          <w3m-connect-button
            size=${(0,sl.J)(this.size)}
            label=${(0,sl.J)(this.label)}
            loadingLabel=${(0,sl.J)(this.loadingLabel)}
          ></w3m-connect-button>
        `}};dl.styles=ll,ul([(0,ol.MZ)({type:Boolean})],dl.prototype,"disabled",void 0),ul([(0,ol.MZ)()],dl.prototype,"balance",void 0),ul([(0,ol.MZ)()],dl.prototype,"size",void 0),ul([(0,ol.MZ)()],dl.prototype,"label",void 0),ul([(0,ol.MZ)()],dl.prototype,"loadingLabel",void 0),ul([(0,ol.MZ)()],dl.prototype,"charsStart",void 0),ul([(0,ol.MZ)()],dl.prototype,"charsEnd",void 0),ul([(0,ol.wk)()],dl.prototype,"isAccount",void 0),ul([(0,ol.wk)()],dl.prototype,"isLoading",void 0),dl=ul([(0,rl.customElement)("w3m-button")],dl);var hl=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let fl=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=nl.W3.state.open,this.loading=nl.W3.state.loading,this.unsubscribe.push(nl.W3.subscribe((e=>{this.open=e.open,this.loading=e.loading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.loading||this.open;return il.qy`
      <wui-connect-button
        size=${(0,sl.J)(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?nl.W3.close():this.loading||nl.W3.open()}};hl([(0,ol.MZ)()],fl.prototype,"size",void 0),hl([(0,ol.MZ)()],fl.prototype,"label",void 0),hl([(0,ol.MZ)()],fl.prototype,"loadingLabel",void 0),hl([(0,ol.wk)()],fl.prototype,"open",void 0),hl([(0,ol.wk)()],fl.prototype,"loading",void 0),fl=hl([(0,rl.customElement)("w3m-connect-button")],fl);const pl=il.AH`
  :host {
    display: block;
    width: max-content;
  }
`;var gl=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let ml=class extends il.WF{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.network=nl.p_.state.caipNetwork,this.connected=nl.Uj.state.isConnected,this.loading=nl.W3.state.loading,this.isUnsupportedChain=nl.p_.state.isUnsupportedChain}firstUpdated(){this.unsubscribe.push(nl.p_.subscribeKey("caipNetwork",(e=>this.network=e)),nl.Uj.subscribeKey("isConnected",(e=>this.connected=e)),nl.W3.subscribeKey("loading",(e=>this.loading=e)),nl.p_.subscribeKey("isUnsupportedChain",(e=>this.isUnsupportedChain=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return il.qy`
      <wui-network-button
        data-testid="w3m-network-button"
        .disabled=${Boolean(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${(0,sl.J)(nl.$m.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.label?this.label:this.isUnsupportedChain?"Switch Network":this.network?this.network.name:this.connected?"Unknown Network":"Select Network"}onClick(){this.loading||(nl.En.sendEvent({type:"track",event:"CLICK_NETWORKS"}),nl.W3.open({view:"Networks"}))}};ml.styles=pl,gl([(0,ol.MZ)({type:Boolean})],ml.prototype,"disabled",void 0),gl([(0,ol.MZ)({type:String})],ml.prototype,"label",void 0),gl([(0,ol.wk)()],ml.prototype,"network",void 0),gl([(0,ol.wk)()],ml.prototype,"connected",void 0),gl([(0,ol.wk)()],ml.prototype,"loading",void 0),gl([(0,ol.wk)()],ml.prototype,"isUnsupportedChain",void 0),ml=gl([(0,rl.customElement)("w3m-network-button")],ml);const yl=il.AH`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var vl=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let bl=class extends il.WF{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=nl.IN.state.view,this.unsubscribe.push(nl.IN.subscribeKey("view",(e=>this.onViewChange(e))))}firstUpdated(){this.resizeObserver=new ResizeObserver((async([e])=>{const t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t})),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach((e=>e()))}render(){return il.qy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"AccountSettings":return il.qy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return il.qy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return il.qy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return il.qy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return il.qy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return il.qy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return il.qy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return il.qy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return il.qy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return il.qy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return il.qy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return il.qy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return il.qy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return il.qy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return il.qy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return il.qy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return il.qy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return il.qy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return il.qy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return il.qy`<w3m-profile-view></w3m-profile-view>`;case"SelectAddresses":return il.qy`<w3m-select-addresses-view></w3m-select-addresses-view>`;case"SwitchAddress":return il.qy`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return il.qy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return il.qy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return il.qy`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return il.qy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return il.qy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return il.qy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return il.qy`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return il.qy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return il.qy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return il.qy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return il.qy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return il.qy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return il.qy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return il.qy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return il.qy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return il.qy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return il.qy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return il.qy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return il.qy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return il.qy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return il.qy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return il.qy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`}}async onViewChange(e){nl.Ib.hide();const{history:t}=nl.IN.state;let n=-10,r=10;t.length<this.prevHistoryLength&&(n=10,r=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${n}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${r}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};bl.styles=yl,vl([(0,ol.wk)()],bl.prototype,"view",void 0),bl=vl([(0,rl.customElement)("w3m-router")],bl);const wl=il.AH`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var Al=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};const _l={USD:"$",EUR:"€",GBP:"£"},El=[100,250,500,1e3];let Cl=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.connected=nl.Uj.state.isConnected,this.loading=nl.W3.state.loading,this.paymentCurrency=nl.aG.state.paymentCurrency,this.paymentAmount=nl.aG.state.paymentAmount,this.purchaseAmount=nl.aG.state.purchaseAmount,this.quoteLoading=nl.aG.state.quotesLoading,this.unsubscribe.push(nl.Uj.subscribeKey("isConnected",(e=>{this.connected=e})),nl.W3.subscribeKey("loading",(e=>{this.loading=e})),nl.aG.subscribe((e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return il.qy`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${El.map((e=>il.qy`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${_l[this.paymentCurrency?.id||"USD"]} ${e}`}</wui-button
                >`))}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.connected?il.qy`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:il.qy`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||nl.W3.open({view:"OnRampProviders"})}openModal(){nl.W3.open({view:"Connect"})}async onPaymentAmountChange(e){nl.aG.setPaymentAmount(Number(e.detail)),await nl.aG.getQuote()}async selectPresetAmount(e){nl.aG.setPaymentAmount(e),await nl.aG.getQuote()}};Cl.styles=wl,Al([(0,ol.MZ)({type:Boolean})],Cl.prototype,"disabled",void 0),Al([(0,ol.wk)()],Cl.prototype,"connected",void 0),Al([(0,ol.wk)()],Cl.prototype,"loading",void 0),Al([(0,ol.wk)()],Cl.prototype,"paymentCurrency",void 0),Al([(0,ol.wk)()],Cl.prototype,"paymentAmount",void 0),Al([(0,ol.wk)()],Cl.prototype,"purchaseAmount",void 0),Al([(0,ol.wk)()],Cl.prototype,"quoteLoading",void 0),Cl=Al([(0,rl.customElement)("w3m-onramp-widget")],Cl);var kl=n(5980),Sl=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let xl=class extends il.WF{constructor(){super(),this.usubscribe=[],this.networkImages=nl.jQ.state.networkImages,this.address=nl.Uj.state.address,this.profileImage=nl.Uj.state.profileImage,this.profileName=nl.Uj.state.profileName,this.network=nl.p_.state.caipNetwork,this.preferredAccountType=nl.Uj.state.preferredAccountType,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(nl.Uj.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):nl.W3.close()})),nl.Uj.subscribeKey("preferredAccountType",(e=>this.preferredAccountType=e)),nl.p_.subscribeKey("caipNetwork",(e=>{e?.id&&(this.network=e)})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[this.network?.imageId??""],t=this.profileName?.split(".")[0];return il.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,sl.J)(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${t?rl.UiHelperUtil.getTruncateString({string:t,charsStart:20,charsEnd:0,truncate:"end"}):rl.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${(0,sl.J)(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){const e=nl.iT.getConnectedConnector();return!nl.aK.getAuthConnector()||"AUTH"!==e||this.profileName?null:il.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){const e=nl.iT.getConnectedConnector(),t=nl.aK.getAuthConnector(),{origin:n}=location;return!t||"AUTH"!==e||n.includes(nl.oU.SECURE_SITE)?null:il.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=nl.p_.getRequestedCaipNetworks(),t=!!e&&e.length>1,n=e?.find((({id:e})=>e===this.network?.id));return t||!n}onCopyAddress(){try{this.profileName?(nl.wE.copyToClopboard(this.profileName),nl.Pt.showSuccess("Name copied")):this.address&&(nl.wE.copyToClopboard(this.address),nl.Pt.showSuccess("Address copied"))}catch{nl.Pt.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){const e=nl.p_.checkIfSmartAccountEnabled(),t=nl.iT.getConnectedConnector();return nl.aK.getAuthConnector()&&"AUTH"===t&&e?(this.switched||(this.text=this.preferredAccountType===kl.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),il.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `):null}onChooseName(){nl.IN.push("ChooseAccountName")}async changePreferredAccountType(){const e=nl.p_.checkIfSmartAccountEnabled(),t=this.preferredAccountType!==kl.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&e?kl.Vl.ACCOUNT_TYPES.SMART_ACCOUNT:kl.Vl.ACCOUNT_TYPES.EOA;nl.aK.getAuthConnector()&&(this.loading=!0,await nl.x4.setPreferredAccountType(t),this.text=t===kl.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,nl.Rv.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&nl.IN.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await nl.x4.disconnect(),nl.En.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),nl.W3.close()}catch{nl.En.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),nl.Pt.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){nl.En.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),nl.IN.push("UpgradeEmailWallet")}};Sl([(0,ol.wk)()],xl.prototype,"address",void 0),Sl([(0,ol.wk)()],xl.prototype,"profileImage",void 0),Sl([(0,ol.wk)()],xl.prototype,"profileName",void 0),Sl([(0,ol.wk)()],xl.prototype,"network",void 0),Sl([(0,ol.wk)()],xl.prototype,"preferredAccountType",void 0),Sl([(0,ol.wk)()],xl.prototype,"disconnecting",void 0),Sl([(0,ol.wk)()],xl.prototype,"loading",void 0),Sl([(0,ol.wk)()],xl.prototype,"switched",void 0),Sl([(0,ol.wk)()],xl.prototype,"text",void 0),xl=Sl([(0,rl.customElement)("w3m-account-settings-view")],xl);var Ml=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Il=class extends il.WF{render(){const e=nl.iT.getConnectedConnector(),t=nl.aK.getAuthConnector();return il.qy`
      ${t?.walletFeatures&&"AUTH"===e?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return il.qy`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return il.qy`<w3m-account-default-widget></w3m-account-default-widget>`}};Il=Ml([(0,rl.customElement)("w3m-account-view")],Il);var Tl=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Rl=class extends il.WF{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=nl.wE.debounce((e=>{this.search=e}))}render(){const e=this.search.length>=2;return il.qy`
      <wui-flex .padding=${["0","s","s","s"]} gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?il.qy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:il.qy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return nl.wE.isMobile()?il.qy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){nl.IN.push("ConnectingWalletConnect")}};Tl([(0,ol.wk)()],Rl.prototype,"search",void 0),Rl=Tl([(0,rl.customElement)("w3m-all-wallets-view")],Rl);const Pl=il.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var Ol=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Nl=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=nl.aG.state.selectedProvider,this.uri=nl.x4.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(nl.aG.subscribeKey("selectedProvider",(e=>{this.selectedOnRampProvider=e}))),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${this.selectedOnRampProvider?.label}`);const t=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return il.qy`
      <wui-flex
        data-error=${(0,sl.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${(0,sl.J)(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(this.selectedOnRampProvider&&"coinbase"===this.selectedOnRampProvider.name)this.startTime=Date.now(),this.initializeCoinbaseTransactions()}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval((()=>this.watchCoinbaseTransactions()),4e3)}async watchCoinbaseTransactions(){try{const e=nl.Uj.state.address,t=nl.Hd.state.projectId;if(!e)throw new Error("No address found");const n=await nl.TP.fetchTransactions({account:e,onramp:"coinbase",projectId:t});n.data.filter((e=>new Date(e.metadata.minedAt)>new Date(this.startTime)||"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status)).length?(clearInterval(this.intervalId),nl.IN.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){nl.Pt.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,nl.wE.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?il.qy`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=nl.Wn.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return il.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url)return nl.Pt.showError("No link found"),void nl.IN.goBack();try{nl.wE.copyToClopboard(this.selectedOnRampProvider.url),nl.Pt.showSuccess("Link copied")}catch{nl.Pt.showError("Failed to copy")}}};Nl.styles=Pl,Ol([(0,ol.wk)()],Nl.prototype,"intervalId",void 0),Ol([(0,ol.wk)()],Nl.prototype,"selectedOnRampProvider",void 0),Ol([(0,ol.wk)()],Nl.prototype,"uri",void 0),Ol([(0,ol.wk)()],Nl.prototype,"ready",void 0),Ol([(0,ol.wk)()],Nl.prototype,"showRetry",void 0),Ol([(0,ol.wk)()],Nl.prototype,"buffering",void 0),Ol([(0,ol.wk)()],Nl.prototype,"error",void 0),Ol([(0,ol.wk)()],Nl.prototype,"startTime",void 0),Ol([(0,ol.MZ)({type:Boolean})],Nl.prototype,"isMobile",void 0),Ol([(0,ol.MZ)()],Nl.prototype,"onRetry",void 0),Nl=Ol([(0,rl.customElement)("w3m-buy-in-progress-view")],Nl);const Ll=il.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }
`;var Dl=n(768),Bl=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Ul=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.connectors=nl.aK.state.connectors,this.unsubscribe.push(nl.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return il.qy`
      <wui-flex flexDirection="column" .padding=${["3xs","s","s","s"]}>
        <w3m-email-login-widget></w3m-email-login-widget>
        <w3m-social-login-widget></w3m-social-login-widget>
        ${this.walletListTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletListTemplate(){const e=this.connectors.find((e=>"AUTH"===e.type));return e?.socials?e?.showWallets?il.qy`
          <wui-flex flexDirection="column" gap="xs" .margin=${["xs","0","0","0"]}>
            <w3m-connector-list></w3m-connector-list>
            <wui-flex class="all-wallets" .margin=${["xs","0","0","0"]}>
              <w3m-all-wallets-widget></w3m-all-wallets-widget>
            </wui-flex>
          </wui-flex>
        `:il.qy` <wui-list-button
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:il.qy`<w3m-wallet-login-list></w3m-wallet-login-list>`}onContinueWalletClick(){nl.IN.push("ConnectWallets")}};Ul.styles=Ll,Bl([(0,Dl.w)()],Ul.prototype,"connectors",void 0),Ul=Bl([(0,rl.customElement)("w3m-connect-view")],Ul);const jl=il.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Fl=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};class zl extends il.WF{constructor(){super(),this.wallet=nl.IN.state.data?.wallet,this.connector=nl.IN.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=nl.$m.getWalletImage(this.wallet)??nl.$m.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=nl.x4.state.wcUri,this.error=nl.x4.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(nl.x4.subscribeKey("wcUri",(e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())})),nl.x4.subscribeKey("wcError",(e=>this.error=e)),nl.x4.subscribeKey("buffering",(e=>this.buffering=e)))}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),il.qy`
      <wui-flex
        data-error=${(0,sl.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,sl.J)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          size="md"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?il.qy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(nl.x4.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){const e=nl.Wn.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return il.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(nl.wE.copyToClopboard(this.uri),nl.Pt.showSuccess("Link copied"))}catch{nl.Pt.showError("Failed to copy")}}}zl.styles=jl,Fl([(0,ol.wk)()],zl.prototype,"uri",void 0),Fl([(0,ol.wk)()],zl.prototype,"error",void 0),Fl([(0,ol.wk)()],zl.prototype,"ready",void 0),Fl([(0,ol.wk)()],zl.prototype,"showRetry",void 0),Fl([(0,ol.wk)()],zl.prototype,"buffering",void 0),Fl([(0,ol.MZ)({type:Boolean})],zl.prototype,"isMobile",void 0),Fl([(0,ol.MZ)()],zl.prototype,"onRetry",void 0);const $l="walletConnect",ql="injected",Hl="coinbaseWallet",Wl="coinbaseWalletSDK",Vl="safe",Kl="ledger",Zl="eip6963",Gl="w3mAuth",Yl="eip155",Ql="wallet_addEthereumChain",Jl="eip6963:announceProvider",Xl="eip6963:requestProvider",eu={coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},tu="5.0.7",nu={ConnectorExplorerIds:{[Hl]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[Wl]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[Vl]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[Kl]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700"},ConnectorImageIds:{[Hl]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Wl]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Vl]:"461db637-8616-43ce-035a-d89b8a1d5800",[Kl]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[$l]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[ql]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[ql]:"Browser Wallet",[$l]:"WalletConnect",[Hl]:"Coinbase",[Wl]:"Coinbase",[Kl]:"Ledger",[Vl]:"Safe"},ConnectorTypesMap:{[ql]:"INJECTED",[$l]:"WALLET_CONNECT",[Zl]:"ANNOUNCED",[Gl]:"AUTH"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},ru={getCaipTokens(e){if(!e)return;const t={};return Object.entries(e).forEach((([e,n])=>{t[`${Yl}:${e}`]=n})),t}};var iu=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let ou=class extends zl{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");nl.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&nl.iT.setConnectedWalletImageUrl(this.connector.imageUrl),this.connector.id===Wl&&this.error||(await nl.x4.connectExternal(this.connector),nl.Hd.state.isSiweEnabled?nl.IN.push("ConnectingSiwe"):nl.W3.close(),nl.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}})))}catch(e){nl.En.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};ou=iu([(0,rl.customElement)("w3m-connecting-external-view")],ou);var su=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let au=class extends il.WF{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=nl.IN.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),nl.oU.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),il.qy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):il.qy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:t}=nl.x4.state;if(e||nl.wE.isPairingExpired(t)){if(this.wallet){const e=nl.$m.getWalletImage(this.wallet);e&&nl.iT.setConnectedWalletImageUrl(e)}else{const e=nl.aK.state.connectors.find((e=>"WALLET_CONNECT"===e.type)),t=nl.$m.getConnectorImage(e);t&&nl.iT.setConnectedWalletImageUrl(t)}if(await nl.x4.connectWalletConnect(),this.finalizeConnection(),"AUTH"===nl.iT.getConnectedConnector()&&nl.Hd.state.hasMultipleAddresses)nl.IN.push("SelectAddresses");else if(nl.Hd.state.isSiweEnabled){const{SIWEController:e}=await n.e(293).then(n.bind(n,6293));"success"===e.state.status?nl.W3.close():nl.IN.push("ConnectingSiwe")}else nl.W3.close()}}catch(e){nl.En.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),nl.x4.setWcError(!0),nl.wE.isAllowedRetry(this.lastRetry)&&(nl.Pt.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:t}=nl.x4.state;e&&nl.iT.setWalletConnectDeepLink(e),t&&nl.iT.setWeb3ModalRecent(t),nl.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:this.wallet?.name||"Unknown"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:n,injected:r,rdns:i}=this.wallet,o=r?.map((({injected_id:e})=>e)).filter(Boolean),s=i?[i]:o??[],a=!nl.Hd.state.isUniversalProvider&&s.length,c=e,l=n,u=nl.x4.checkInstalled(s),d=a&&u,h=t&&!nl.wE.isMobile();d&&this.platforms.push("browser"),c&&this.platforms.push(nl.wE.isMobile()?"mobile":"qrcode"),l&&this.platforms.push("web"),h&&this.platforms.push("desktop"),!d&&a&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return il.qy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return il.qy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return il.qy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return il.qy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return il.qy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return il.qy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?il.qy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};su([(0,ol.wk)()],au.prototype,"platform",void 0),su([(0,ol.wk)()],au.prototype,"platforms",void 0),au=su([(0,rl.customElement)("w3m-connecting-wc-view")],au);const cu=il.AH`
  .continue-button-container {
    width: 100%;
  }
`;var lu=n(2538),uu=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let du=class extends il.WF{constructor(){super(...arguments),this.loading=!1}render(){return il.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{nl.wE.openHref(lu.TC.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return il.qy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return il.qy`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){nl.IN.push("RegisterAccountName"),nl.En.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:nl.Uj.state.preferredAccountType===kl.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}};du.styles=cu,uu([(0,ol.wk)()],du.prototype,"loading",void 0),du=uu([(0,rl.customElement)("w3m-choose-account-name-view")],du);var hu=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let fu=class extends il.WF{constructor(){super(...arguments),this.wallet=nl.IN.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return il.qy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?il.qy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?il.qy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?il.qy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?il.qy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&nl.wE.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&nl.wE.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&nl.wE.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&nl.wE.openHref(this.wallet.homepage,"_blank")}};fu=hu([(0,rl.customElement)("w3m-downloads-view")],fu);var pu=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let gu=class extends il.WF{render(){return il.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{nl.wE.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=nl.Np.state,{customWallets:n}=nl.Hd.state;return[...t,...n??[],...e].slice(0,4).map((e=>il.qy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,sl.J)(nl.$m.getWalletImage(e))}
          @click=${()=>{nl.wE.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `))}};gu=pu([(0,rl.customElement)("w3m-get-wallet-view")],gu);const mu=il.AH`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-color-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`;var yu=n(6568),vu=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let bu=class extends il.WF{constructor(){super(),this.formRef=(0,yu._)(),this.usubscribe=[],this.name="",this.error="",this.loading=nl.f.state.loading,this.suggestions=nl.f.state.suggestions,this.registered=!1,this.profileName=nl.Uj.state.profileName,this.onDebouncedNameInputChange=nl.wE.debounce((e=>{nl.f.validateName(e)?(this.error="",this.name=e,nl.f.getSuggestions(e),nl.f.isNameRegistered(e).then((e=>{this.registered=e}))):e.length<4?this.error="Name must be at least 4 characters long":this.error="Can only contain letters, numbers and - characters"})),this.usubscribe.push(nl.f.subscribe((e=>{this.suggestions=e.suggestions,this.loading=e.loading})),nl.Uj.subscribeKey("profileName",(e=>{this.profileName=e,e&&(this.error="You already own a name")})))}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach((e=>e())),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return il.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0","s","m","s"]}
      >
        <form ${(0,yu.K)(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){return this.isAllowedToSubmit()?il.qy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        `:null}onSelectSuggestion(e){return()=>{this.name=e,this.registered=!1,this.requestUpdate()}}onNameInputChange(e){this.onDebouncedNameInputChange(e.detail)}nameSuggestionTagTemplate(){return this.loading?il.qy`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`:this.registered?il.qy`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:il.qy`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){if(!this.name||this.name.length<4||this.error)return null;const e=this.registered?this.suggestions.filter((e=>e.name!==this.name)):[];return il.qy`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        .padding=${["m","m","m","m"]}
        justifyContent="space-between"
        class="suggestion"
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${e.map((e=>this.availableNameTemplate(e.name)))}
    </wui-flex>`}availableNameTemplate(e){return il.qy` <wui-flex
      .padding=${["m","m","m","m"]}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(e)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${e}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`}isAllowedToSubmit(){return!this.loading&&!this.registered&&!this.error&&!this.profileName&&nl.f.validateName(this.name)}async onSubmitName(){try{if(!this.isAllowedToSubmit())return;nl.En.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:nl.Uj.state.preferredAccountType===kl.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:this.name}}),await nl.f.registerName(this.name),nl.En.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:nl.Uj.state.preferredAccountType===kl.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:this.name}})}catch(e){nl.Pt.showError(e.message),nl.En.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:nl.Uj.state.preferredAccountType===kl.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:this.name,error:e?.message||"Unknown error"}})}}onEnterKey(e){"Enter"===e.key&&this.isAllowedToSubmit()&&this.onSubmitName()}};bu.styles=mu,vu([(0,ol.MZ)()],bu.prototype,"errorMessage",void 0),vu([(0,ol.wk)()],bu.prototype,"name",void 0),vu([(0,ol.wk)()],bu.prototype,"error",void 0),vu([(0,ol.wk)()],bu.prototype,"loading",void 0),vu([(0,ol.wk)()],bu.prototype,"suggestions",void 0),vu([(0,ol.wk)()],bu.prototype,"registered",void 0),vu([(0,ol.wk)()],bu.prototype,"profileName",void 0),bu=vu([(0,rl.customElement)("w3m-register-account-name-view")],bu);const wu=il.AH`
  .continue-button-container {
    width: 100%;
  }
`;var Au=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let _u=class extends il.WF{render(){return il.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{nl.wE.openHref(lu.TC.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return il.qy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return il.qy`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){nl.IN.replace("Account")}};_u.styles=wu,_u=Au([(0,rl.customElement)("w3m-register-account-name-success-view")],_u);const Eu=il.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,Cu=async()=>{if(nl.Hd.state.isSiweEnabled){const{SIWEController:e}=await n.e(293).then(n.bind(n,6293));e.state._client?.options?.signOutOnNetworkChange?await e.signOut():nl.aS.navigateAfterNetworkSwitch()}else nl.aS.navigateAfterNetworkSwitch()};var ku=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Su=class extends il.WF{constructor(){super(),this.network=nl.IN.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),t=this.getSubLabel();return il.qy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,sl.J)(nl.$m.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:il.qy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=nl.iT.getConnectedConnector();return nl.aK.getAuthConnector()&&"AUTH"===e?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){const e=nl.iT.getConnectedConnector();return nl.aK.getAuthConnector()&&"AUTH"===e?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await nl.p_.switchActiveNetwork(this.network),await Cu())}catch{this.error=!0}}};Su.styles=Eu,ku([(0,ol.wk)()],Su.prototype,"showRetry",void 0),ku([(0,ol.wk)()],Su.prototype,"error",void 0),Su=ku([(0,rl.customElement)("w3m-network-switch-view")],Su);const xu=il.AH`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var Mu=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Iu=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.caipNetwork=nl.p_.state.caipNetwork,this.requestedCaipNetworks=nl.p_.getRequestedCaipNetworks(),this.unsubscribe.push(nl.p_.subscribeKey("caipNetwork",(e=>this.caipNetwork=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return il.qy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){nl.En.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),nl.IN.push("WhatIsANetwork")}networksTemplate(){const e=nl.p_.getRequestedCaipNetworks(),t=nl.p_.state.approvedCaipNetworkIds,n=nl.p_.state.supportsAllNetworks,r=nl.wE.sortRequestedNetworks(t,e);return r?.map((e=>il.qy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===e.id}
          imageSrc=${(0,sl.J)(nl.$m.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${!n&&!t?.includes(e.id)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-card-select>
      `))}async onSwitchNetwork(e){const t=nl.Uj.state.isConnected,n=nl.p_.state.approvedCaipNetworkIds,r=nl.p_.state.supportsAllNetworks,i=nl.p_.state.caipNetwork,o=nl.IN.state.data;t&&i?.id!==e.id?n?.includes(e.id)?(await nl.p_.switchActiveNetwork(e),await Cu()):r&&nl.IN.push("SwitchNetwork",{...o,network:e}):t||(nl.p_.setCaipNetwork(e),nl.IN.push("Connect"))}};Iu.styles=xu,Mu([(0,ol.wk)()],Iu.prototype,"caipNetwork",void 0),Mu([(0,ol.wk)()],Iu.prototype,"requestedCaipNetworks",void 0),Iu=Mu([(0,rl.customElement)("w3m-networks-view")],Iu);const Tu=il.AH`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var Ru=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Pu=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=nl.aG.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=nl.WC.state.coinbaseTransactions,this.tokenImages=nl.jQ.state.tokenImages,this.unsubscribe.push(nl.aG.subscribeKey("selectedProvider",(e=>{this.selectedOnRampProvider=e})),nl.jQ.subscribeKey("tokenImages",(e=>this.tokenImages=e)),(()=>{clearTimeout(this.refetchTimeout)}),nl.WC.subscribe((e=>{this.coinbaseTransactions={...e.coinbaseTransactions}}))),nl.WC.clearCursor(),this.fetchTransactions()}render(){return il.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e?.map((e=>{const t=lu.rL.formatDate(e?.metadata?.minedAt),n=e.transfers[0],r=n?.fungible_info;if(!r)return null;const i=r?.icon?.url||this.tokenImages?.[r.symbol||""];return il.qy`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${"ONRAMP_TRANSACTION_STATUS_SUCCESS"===e.metadata.status}
          .inProgress=${"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status}
          .failed=${"ONRAMP_TRANSACTION_STATUS_FAILED"===e.metadata.status}
          purchaseCurrency=${(0,sl.J)(r.symbol)}
          purchaseValue=${n.quantity.numeric}
          date=${t}
          icon=${(0,sl.J)(i)}
          symbol=${(0,sl.J)(r.symbol)}
        ></w3m-onramp-activity-item>
      `}))}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map((e=>{const t=parseInt(e,10);return new Array(12).fill(null).map(((e,t)=>t)).reverse().map((e=>{const n=rl.TransactionUtil.getTransactionGroupTitle(t,e),r=this.coinbaseTransactions[t]?.[e];return r?il.qy`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${n}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(r)}
            </wui-flex>
          </wui-flex>
        `:null}))}))}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=nl.Uj.state.address,t=nl.Hd.state.projectId;if(!e)throw new Error("No address found");if(!t)throw new Error("No projectId found");this.loading=!0,await nl.WC.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){const e=new Date;0!==(this.coinbaseTransactions[e.getFullYear()]?.[e.getMonth()]||[]).filter((e=>"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status)).length?this.refetchTimeout=setTimeout((async()=>{const e=nl.Uj.state.address;await nl.WC.fetchTransactions(e,"coinbase"),this.refetchLoadingTransactions()}),3e3):clearTimeout(this.refetchTimeout)}templateLoading(){return Array(7).fill(il.qy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((e=>e))}};Pu.styles=Tu,Ru([(0,ol.wk)()],Pu.prototype,"selectedOnRampProvider",void 0),Ru([(0,ol.wk)()],Pu.prototype,"loading",void 0),Ru([(0,ol.wk)()],Pu.prototype,"coinbaseTransactions",void 0),Ru([(0,ol.wk)()],Pu.prototype,"tokenImages",void 0),Pu=Ru([(0,rl.customElement)("w3m-onramp-activity-view")],Pu);const Ou=il.AH`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var Nu=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Lu=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=nl.aG.state.paymentCurrency,this.currencies=nl.aG.state.paymentCurrencies,this.currencyImages=nl.jQ.state.currencyImages,this.unsubscribe.push(nl.aG.subscribe((e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies})),nl.jQ.subscribeKey("currencyImages",(e=>this.currencyImages=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return il.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map((e=>il.qy`
        <wui-list-item
          imageSrc=${(0,sl.J)(this.currencyImages?.[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `))}selectCurrency(e){e&&(nl.aG.setPaymentCurrency(e),nl.W3.close())}};Lu.styles=Ou,Nu([(0,ol.wk)()],Lu.prototype,"selectedCurrency",void 0),Nu([(0,ol.wk)()],Lu.prototype,"currencies",void 0),Nu([(0,ol.wk)()],Lu.prototype,"currencyImages",void 0),Lu=Nu([(0,rl.customElement)("w3m-onramp-fiat-select-view")],Lu);var Du=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Bu=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.providers=nl.aG.state.providers,this.unsubscribe.push(nl.aG.subscribeKey("providers",(e=>{this.providers=e})))}firstUpdated(){const e=this.providers.map((async e=>"coinbase"===e.name?await this.getCoinbaseOnRampURL():Promise.resolve(e?.url)));Promise.all(e).then((e=>{this.providers=this.providers.map(((t,n)=>({...t,url:e[n]||""})))}))}render(){return il.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.map((e=>il.qy`
        <w3m-onramp-provider-item
          label=${e.label}
          name=${e.name}
          feeRange=${e.feeRange}
          @click=${()=>{this.onClickProvider(e)}}
          ?disabled=${!e.url}
        ></w3m-onramp-provider-item>
      `))}onClickProvider(e){nl.aG.setSelectedProvider(e),nl.IN.push("BuyInProgress"),nl.wE.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes"),nl.En.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:nl.Uj.state.preferredAccountType===kl.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}async getCoinbaseOnRampURL(){const e=nl.Uj.state.address,t=nl.p_.state.caipNetwork;if(!e)throw new Error("No address found");if(!t?.name)throw new Error("No network found");const n=nl.oU.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??nl.oU.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,r=nl.aG.state.purchaseCurrency,i=r?[r.symbol]:nl.aG.state.purchaseCurrencies.map((e=>e.symbol));return await nl.TP.generateOnRampURL({defaultNetwork:n,destinationWallets:[{address:e,blockchains:nl.oU.WC_COINBASE_PAY_SDK_CHAINS,assets:i}],partnerUserId:e,purchaseAmount:nl.aG.state.purchaseAmount})}};Du([(0,ol.wk)()],Bu.prototype,"providers",void 0),Bu=Du([(0,rl.customElement)("w3m-onramp-providers-view")],Bu);const Uu=il.AH`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var ju=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Fu=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=nl.aG.state.purchaseCurrencies,this.tokens=nl.aG.state.purchaseCurrencies,this.tokenImages=nl.jQ.state.tokenImages,this.unsubscribe.push(nl.aG.subscribe((e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies})),nl.jQ.subscribeKey("tokenImages",(e=>this.tokenImages=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return il.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map((e=>il.qy`
        <wui-list-item
          imageSrc=${(0,sl.J)(this.tokenImages?.[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `))}selectToken(e){e&&(nl.aG.setPurchaseCurrency(e),nl.W3.close())}};Fu.styles=Uu,ju([(0,ol.wk)()],Fu.prototype,"selectedCurrency",void 0),ju([(0,ol.wk)()],Fu.prototype,"tokens",void 0),ju([(0,ol.wk)()],Fu.prototype,"tokenImages",void 0),Fu=ju([(0,rl.customElement)("w3m-onramp-token-select-view")],Fu);const zu=il.AH`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var $u=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let qu=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!1,this.caipNetworkId=nl.p_.state.caipNetwork?.id,this.initialized=nl.GN.state.initialized,this.loadingQuote=nl.GN.state.loadingQuote,this.loadingPrices=nl.GN.state.loadingPrices,this.loadingTransaction=nl.GN.state.loadingTransaction,this.sourceToken=nl.GN.state.sourceToken,this.sourceTokenAmount=nl.GN.state.sourceTokenAmount,this.sourceTokenPriceInUSD=nl.GN.state.sourceTokenPriceInUSD,this.toToken=nl.GN.state.toToken,this.toTokenAmount=nl.GN.state.toTokenAmount,this.toTokenPriceInUSD=nl.GN.state.toTokenPriceInUSD,this.inputError=nl.GN.state.inputError,this.gasPriceInUSD=nl.GN.state.gasPriceInUSD,this.fetchError=nl.GN.state.fetchError,this.onDebouncedGetSwapCalldata=nl.wE.debounce((async()=>{await nl.GN.swapTokens()}),200),nl.p_.subscribeKey("caipNetwork",(e=>{this.caipNetworkId!==e?.id&&(this.caipNetworkId=e?.id,nl.GN.resetState(),nl.GN.initializeState())})),this.unsubscribe.push(nl.W3.subscribeKey("open",(e=>{e||nl.GN.resetState()})),nl.IN.subscribeKey("view",(e=>{e.includes("Swap")||nl.GN.resetValues()})),nl.GN.subscribe((e=>{this.initialized=e.initialized,this.loadingQuote=e.loadingQuote,this.loadingPrices=e.loadingPrices,this.loadingTransaction=e.loadingTransaction,this.sourceToken=e.sourceToken,this.sourceTokenAmount=e.sourceTokenAmount,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError,this.gasPriceInUSD=e.gasPriceInUSD,this.fetchError=e.fetchError})))}firstUpdated(){nl.GN.initializeState(),this.watchTokensAndValues()}disconnectedCallback(){this.unsubscribe.forEach((e=>e?.())),clearInterval(this.interval)}render(){return il.qy`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval((()=>{nl.GN.getNetworkTokenPrice(),nl.GN.getMyTokensWithBalance(),nl.GN.swapTokens()}),1e4)}templateSwap(){return il.qy`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":this.sourceToken&&this.toToken?this.sourceTokenAmount?this.inputError?this.inputError:"Review swap":"Enter amount":"Select token"}templateReplaceTokensButton(){return il.qy`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return il.qy`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(e,t){const n=nl.GN.state.myTokensWithBalance?.find((e=>e?.address===t?.address)),r="toToken"===e?this.toTokenAmount:this.sourceTokenAmount,i="toToken"===e?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD;let o=parseFloat(r)*i;return"toToken"===e&&(o-=this.gasPriceInUSD||0),il.qy`<w3m-swap-input
      .value=${"toToken"===e?this.toTokenAmount:this.sourceTokenAmount}
      ?disabled=${this.loadingQuote&&"toToken"===e}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${e}
      .token=${t}
      .balance=${n?.quantity?.numeric}
      .price=${n?.price}
      .marketValue=${o}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(e,t){const n="sourceToken"===e?this.sourceToken:this.toToken,r=n?.address===nl.oU.NATIVE_TOKEN_ADDRESS;let i="0";if(!t)return i="0",void this.handleChangeAmount(e,i);if(!this.gasPriceInUSD)return i=t,void this.handleChangeAmount(e,i);const o=lu.Se.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.sourceTokenPriceInUSD),s=r?lu.Se.bigNumber(t).minus(o):lu.Se.bigNumber(t);this.handleChangeAmount(e,s.isGreaterThan(0)?s.toFixed(20):"0")}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?il.qy`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}handleChangeAmount(e,t){nl.GN.clearError(),"sourceToken"===e?nl.GN.setSourceTokenAmount(t):nl.GN.setToTokenAmount(t),this.onDebouncedGetSwapCalldata()}templateActionButton(){const e=!this.toToken||!this.sourceToken,t=!this.sourceTokenAmount,n=this.loadingQuote||this.loadingPrices||this.loadingTransaction,r=n||e||t||this.inputError;return il.qy` <wui-flex gap="xs">
      <wui-button
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${e?"neutral":"main"}
        .loading=${n}
        .disabled=${r}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){nl.GN.switchTokens()}onSwapPreview(){this.fetchError?nl.GN.swapTokens():(nl.En.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:this.sourceToken?.symbol||"",swapToToken:this.toToken?.symbol||"",swapfromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:nl.Uj.state.preferredAccountType===kl.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),nl.IN.push("SwapPreview"))}};qu.styles=zu,$u([(0,ol.wk)()],qu.prototype,"interval",void 0),$u([(0,ol.wk)()],qu.prototype,"detailsOpen",void 0),$u([(0,ol.wk)()],qu.prototype,"caipNetworkId",void 0),$u([(0,ol.wk)()],qu.prototype,"initialized",void 0),$u([(0,ol.wk)()],qu.prototype,"loadingQuote",void 0),$u([(0,ol.wk)()],qu.prototype,"loadingPrices",void 0),$u([(0,ol.wk)()],qu.prototype,"loadingTransaction",void 0),$u([(0,ol.wk)()],qu.prototype,"sourceToken",void 0),$u([(0,ol.wk)()],qu.prototype,"sourceTokenAmount",void 0),$u([(0,ol.wk)()],qu.prototype,"sourceTokenPriceInUSD",void 0),$u([(0,ol.wk)()],qu.prototype,"toToken",void 0),$u([(0,ol.wk)()],qu.prototype,"toTokenAmount",void 0),$u([(0,ol.wk)()],qu.prototype,"toTokenPriceInUSD",void 0),$u([(0,ol.wk)()],qu.prototype,"inputError",void 0),$u([(0,ol.wk)()],qu.prototype,"gasPriceInUSD",void 0),$u([(0,ol.wk)()],qu.prototype,"fetchError",void 0),qu=$u([(0,rl.customElement)("w3m-swap-view")],qu);const Hu=il.AH`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var Wu=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Vu=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=nl.GN.state.approvalTransaction,this.swapTransaction=nl.GN.state.swapTransaction,this.sourceToken=nl.GN.state.sourceToken,this.sourceTokenAmount=nl.GN.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=nl.GN.state.sourceTokenPriceInUSD,this.toToken=nl.GN.state.toToken,this.toTokenAmount=nl.GN.state.toTokenAmount??"",this.toTokenPriceInUSD=nl.GN.state.toTokenPriceInUSD,this.caipNetwork=nl.p_.state.caipNetwork,this.balanceSymbol=nl.Uj.state.balanceSymbol,this.gasPriceInUSD=nl.GN.state.gasPriceInUSD,this.inputError=nl.GN.state.inputError,this.loadingQuote=nl.GN.state.loadingQuote,this.loadingApprovalTransaction=nl.GN.state.loadingApprovalTransaction,this.loadingBuildTransaction=nl.GN.state.loadingBuildTransaction,this.loadingTransaction=nl.GN.state.loadingTransaction,this.unsubscribe.push(nl.Uj.subscribeKey("balanceSymbol",(e=>{this.balanceSymbol!==e&&nl.IN.goBack()})),nl.p_.subscribeKey("caipNetwork",(e=>{this.caipNetwork!==e&&(this.caipNetwork=e)})),nl.GN.subscribe((e=>{this.approvalTransaction=e.approvalTransaction,this.swapTransaction=e.swapTransaction,this.sourceToken=e.sourceToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toToken=e.toToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.sourceTokenAmount=e.sourceTokenAmount??"",this.toTokenAmount=e.toTokenAmount??"",this.inputError=e.inputError,e.inputError&&nl.IN.goBack(),this.loadingQuote=e.loadingQuote,this.loadingApprovalTransaction=e.loadingApprovalTransaction,this.loadingBuildTransaction=e.loadingBuildTransaction,this.loadingTransaction=e.loadingTransaction})))}firstUpdated(){nl.GN.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach((e=>e?.())),clearInterval(this.interval)}render(){return il.qy`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval((()=>{nl.GN.getApprovalLoadingState()||nl.GN.getTransaction()}),1e4)}templateSwap(){const e=`${rl.UiHelperUtil.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${this.sourceToken?.symbol}`,t=`${rl.UiHelperUtil.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${this.toToken?.symbol}`,n=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,r=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD-(this.gasPriceInUSD||0),i=rl.UiHelperUtil.formatNumberToLocalString(n),o=rl.UiHelperUtil.formatNumberToLocalString(r),s=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return il.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${i}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${e}
              imageSrc=${this.sourceToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${o}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${this.toToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${s}
            ?disabled=${s}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?il.qy`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){nl.IN.goBack()}onSendTransaction(){this.approvalTransaction?nl.GN.sendTransactionForApproval(this.approvalTransaction):nl.GN.sendTransactionForSwap(this.swapTransaction)}};Vu.styles=Hu,Wu([(0,ol.wk)()],Vu.prototype,"interval",void 0),Wu([(0,ol.wk)()],Vu.prototype,"detailsOpen",void 0),Wu([(0,ol.wk)()],Vu.prototype,"approvalTransaction",void 0),Wu([(0,ol.wk)()],Vu.prototype,"swapTransaction",void 0),Wu([(0,ol.wk)()],Vu.prototype,"sourceToken",void 0),Wu([(0,ol.wk)()],Vu.prototype,"sourceTokenAmount",void 0),Wu([(0,ol.wk)()],Vu.prototype,"sourceTokenPriceInUSD",void 0),Wu([(0,ol.wk)()],Vu.prototype,"toToken",void 0),Wu([(0,ol.wk)()],Vu.prototype,"toTokenAmount",void 0),Wu([(0,ol.wk)()],Vu.prototype,"toTokenPriceInUSD",void 0),Wu([(0,ol.wk)()],Vu.prototype,"caipNetwork",void 0),Wu([(0,ol.wk)()],Vu.prototype,"balanceSymbol",void 0),Wu([(0,ol.wk)()],Vu.prototype,"gasPriceInUSD",void 0),Wu([(0,ol.wk)()],Vu.prototype,"inputError",void 0),Wu([(0,ol.wk)()],Vu.prototype,"loadingQuote",void 0),Wu([(0,ol.wk)()],Vu.prototype,"loadingApprovalTransaction",void 0),Wu([(0,ol.wk)()],Vu.prototype,"loadingBuildTransaction",void 0),Wu([(0,ol.wk)()],Vu.prototype,"loadingTransaction",void 0),Vu=Wu([(0,rl.customElement)("w3m-swap-preview-view")],Vu);const Ku=il.AH`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var Zu=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Gu=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.targetToken=nl.IN.state.data?.target,this.sourceToken=nl.GN.state.sourceToken,this.sourceTokenAmount=nl.GN.state.sourceTokenAmount,this.toToken=nl.GN.state.toToken,this.myTokensWithBalance=nl.GN.state.myTokensWithBalance,this.popularTokens=nl.GN.state.popularTokens,this.searchValue="",this.unsubscribe.push(nl.GN.subscribe((e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.myTokensWithBalance=e.myTokensWithBalance})))}updated(){const e=this.renderRoot?.querySelector(".suggested-tokens-container");e?.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));const t=this.renderRoot?.querySelector(".tokens");t?.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){super.disconnectedCallback();const e=this.renderRoot?.querySelector(".suggested-tokens-container"),t=this.renderRoot?.querySelector(".tokens");e?.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),t?.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return il.qy`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(e){"sourceToken"===this.targetToken?nl.GN.setSourceToken(e):(nl.GN.setToToken(e),this.sourceToken&&this.sourceTokenAmount&&nl.GN.swapTokens()),nl.IN.goBack()}templateSearchInput(){return il.qy`
      <wui-flex .padding=${["3xs","s","0","s"]} gap="xs">
        <wui-input-text
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const e=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],t=this.popularTokens?this.popularTokens:[],n=this.filterTokensWithText(e,this.searchValue),r=this.filterTokensWithText(t,this.searchValue);return il.qy`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${n?.length>0?il.qy`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${n.map((e=>{const t=e.symbol===this.sourceToken?.symbol||e.symbol===this.toToken?.symbol;return il.qy`
                    <wui-token-list-item
                      name=${e.name}
                      ?disabled=${t}
                      symbol=${e.symbol}
                      price=${e?.price}
                      amount=${e?.quantity?.numeric}
                      imageSrc=${e.logoUri}
                      @click=${()=>{t||this.onSelectToken(e)}}
                    >
                    </wui-token-list-item>
                  `}))}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${r?.length>0?r.map((e=>il.qy`
                  <wui-token-list-item
                    name=${e.name}
                    symbol=${e.symbol}
                    imageSrc=${e.logoUri}
                    @click=${()=>this.onSelectToken(e)}
                  >
                  </wui-token-list-item>
                `)):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const e=nl.GN.state.suggestedTokens?nl.GN.state.suggestedTokens.slice(0,8):null;return e?il.qy`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${e.map((e=>il.qy`
            <wui-token-button
              text=${e.symbol}
              imageSrc=${e.logoUri}
              @click=${()=>this.onSelectToken(e)}
            >
            </wui-token-button>
          `))}
      </wui-flex>
    `:null}onSearchInputChange(e){this.searchValue=e.detail}handleSuggestedTokensScroll(){const e=this.renderRoot?.querySelector(".suggested-tokens-container");e&&(e.style.setProperty("--suggested-tokens-scroll--left-opacity",rl.MathUtil.interpolate([0,100],[0,1],e.scrollLeft).toString()),e.style.setProperty("--suggested-tokens-scroll--right-opacity",rl.MathUtil.interpolate([0,100],[0,1],e.scrollWidth-e.scrollLeft-e.offsetWidth).toString()))}handleTokenListScroll(){const e=this.renderRoot?.querySelector(".tokens");e&&(e.style.setProperty("--tokens-scroll--top-opacity",rl.MathUtil.interpolate([0,100],[0,1],e.scrollTop).toString()),e.style.setProperty("--tokens-scroll--bottom-opacity",rl.MathUtil.interpolate([0,100],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString()))}filterTokensWithText(e,t){return e.filter((e=>`${e.symbol} ${e.name} ${e.address}`.toLowerCase().includes(t.toLowerCase())))}};Gu.styles=Ku,Zu([(0,ol.wk)()],Gu.prototype,"interval",void 0),Zu([(0,ol.wk)()],Gu.prototype,"targetToken",void 0),Zu([(0,ol.wk)()],Gu.prototype,"sourceToken",void 0),Zu([(0,ol.wk)()],Gu.prototype,"sourceTokenAmount",void 0),Zu([(0,ol.wk)()],Gu.prototype,"toToken",void 0),Zu([(0,ol.wk)()],Gu.prototype,"myTokensWithBalance",void 0),Zu([(0,ol.wk)()],Gu.prototype,"popularTokens",void 0),Zu([(0,ol.wk)()],Gu.prototype,"searchValue",void 0),Gu=Zu([(0,rl.customElement)("w3m-swap-select-token-view")],Gu);const Yu=il.AH`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var Qu=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Ju=class extends il.WF{render(){return il.qy`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};Ju.styles=Yu,Ju=Qu([(0,rl.customElement)("w3m-transactions-view")],Ju);var Xu=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};const ed=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let td=class extends il.WF{render(){return il.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ed}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{nl.wE.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};td=Xu([(0,rl.customElement)("w3m-what-is-a-network-view")],td);var nd=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};const rd=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let id=class extends il.WF{render(){return il.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${rd}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){nl.En.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),nl.IN.push("GetWallet")}};id=nd([(0,rl.customElement)("w3m-what-is-a-wallet-view")],id);var od=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let sd=class extends il.WF{render(){return il.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${nl.IN.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};sd=od([(0,rl.customElement)("w3m-what-is-a-buy-view")],sd);const ad=il.AH`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var cd=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let ld=class extends il.WF{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=kl.QH.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=nl.IN.state.data?.email,this.authConnector=nl.aK.getAuthConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=Boolean(this.timeoutTimeLeft),t=this.getFooterLabels(e);return il.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","xl","0","xl"]}
        >
          <wui-text variant="paragraph-400" color="fg-100" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="paragraph-500" color="fg-100" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?il.qy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:il.qy` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?il.qy`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=kl.QH.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval((()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=kl.QH.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)}),1e3)}async onOtpInputChange(e){try{this.loading||(this.otp=e.detail,this.authConnector&&6===this.otp.length&&(this.loading=!0,await(this.onOtpSubmit?.(this.otp))))}catch(e){this.error=nl.wE.parseError(e),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){this.error="",this.otp="";if(!nl.aK.getAuthConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),nl.Pt.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){nl.Pt.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:"Try again "+(e?`in ${this.timeoutTimeLeft}s`:"")}:{title:"Didn't receive it?",action:"Resend "+(e?`in ${this.timeoutTimeLeft}s`:"Code")}}};ld.styles=ad,cd([(0,ol.wk)()],ld.prototype,"loading",void 0),cd([(0,ol.wk)()],ld.prototype,"timeoutTimeLeft",void 0),cd([(0,ol.wk)()],ld.prototype,"error",void 0),ld=cd([(0,rl.customElement)("w3m-email-otp-widget")],ld);var ud=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let dd=class extends ld{constructor(){super(),this.unsubscribe=[],this.smartAccountDeployed=nl.Uj.state.smartAccountDeployed,this.onOtpSubmit=async e=>{try{if(this.authConnector){const t=nl.p_.checkIfSmartAccountEnabled();await this.authConnector.provider.connectOtp({otp:e}),nl.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await nl.x4.connectExternal(this.authConnector),nl.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown"}}),nl.Uj.state.allAccounts.length>1?nl.IN.push("SelectAddresses"):t&&!this.smartAccountDeployed?nl.IN.push("UpgradeToSmartAccount"):nl.W3.close()}}catch(e){throw nl.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),nl.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))},this.unsubscribe.push(nl.Uj.subscribeKey("smartAccountDeployed",(e=>{this.smartAccountDeployed=e})))}};ud([(0,ol.wk)()],dd.prototype,"smartAccountDeployed",void 0),dd=ud([(0,rl.customElement)("w3m-email-verify-otp-view")],dd);const hd=il.AH`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var fd=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let pd=class extends il.WF{constructor(){super(),this.email=nl.IN.state.data?.email,this.authConnector=nl.aK.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No auth connector provided");return il.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),nl.En.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),nl.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),nl.IN.replace("EmailVerifyOtp",{email:this.email})}catch(e){nl.IN.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),nl.Pt.showSuccess("Code email resent")}}catch(e){nl.Pt.showError(e)}finally{this.loading=!1}}};pd.styles=hd,fd([(0,ol.wk)()],pd.prototype,"loading",void 0),pd=fd([(0,rl.customElement)("w3m-email-verify-device-view")],pd);const gd=il.AH`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var md=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let yd=class extends il.WF{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(nl.W3.subscribeKey("open",(e=>{e||(this.onHideIframe(),nl.IN.popTransactionStack())})))}disconnectedCallback(){this.onHideIframe(),this.unsubscribe.forEach((e=>e())),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block",this.bodyObserver=new ResizeObserver((e=>{const t=e?.[0]?.contentBoxSize,n=t?.[0]?.inlineSize;this.iframe.style.height="400px",n&&n<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset"):(this.iframe.style.width="360px",this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top="calc(50% - 200px + 32px)",this.iframe.style.bottom="unset"),this.ready=!0})),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),il.qy`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards"})}async onHideIframe(){this.iframe.style.display="none",await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished}async syncTheme(){const e=nl.aK.getAuthConnector();if(e){const t=nl.Wn.getSnapshot().themeMode,n=nl.Wn.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:n,w3mThemeVariables:(0,lu.o_)(n,t)})}}};yd.styles=gd,md([(0,ol.wk)()],yd.prototype,"ready",void 0),yd=md([(0,rl.customElement)("w3m-approve-transaction-view")],yd);var vd=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let bd=class extends il.WF{render(){return il.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${nl.oU.SECURE_SITE_DASHBOARD}
          imageSrc=${nl.oU.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};bd=vd([(0,rl.customElement)("w3m-upgrade-wallet-view")],bd);var wd=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Ad=class extends il.WF{constructor(){super(...arguments),this.authConnector=nl.aK.getAuthConnector(),this.loading=!1,this.setPreferSmartAccount=async()=>{if(this.authConnector)try{this.loading=!0,await nl.x4.setPreferredAccountType(kl.Vl.ACCOUNT_TYPES.SMART_ACCOUNT),this.loading=!1,nl.aS.navigateAfterPreferredAccountTypeSelect()}catch(e){nl.Pt.showError("Error upgrading to smart account")}}}render(){return il.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{nl.wE.openHref(lu.TC.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return il.qy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return il.qy`<wui-flex .padding=${["0","2l","0","2l"]} gap="s">
      <wui-button
        variant="accent"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`}redirectToAccount(){nl.IN.push("Account")}};wd([(0,ol.wk)()],Ad.prototype,"authConnector",void 0),wd([(0,ol.wk)()],Ad.prototype,"loading",void 0),Ad=wd([(0,rl.customElement)("w3m-upgrade-to-smart-account-view")],Ad);const _d=il.AH`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var Ed=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Cd=class extends il.WF{constructor(){super(...arguments),this.formRef=(0,yu._)(),this.initialEmail=nl.IN.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return il.qy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${(0,yu.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="neutral" fullWidth @click=${nl.IN.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="main"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=nl.aK.getAuthConnector();if(!t)throw new Error("w3m-update-email-wallet: Auth connector not found");const n=await t.provider.updateEmail({email:this.email});nl.En.sendEvent({type:"track",event:"EMAIL_EDIT"}),"VERIFY_SECONDARY_OTP"===n.action?nl.IN.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email}):nl.IN.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(e){nl.Pt.showError(e),this.loading=!1}}};Cd.styles=_d,Ed([(0,ol.wk)()],Cd.prototype,"email",void 0),Ed([(0,ol.wk)()],Cd.prototype,"loading",void 0),Cd=Ed([(0,rl.customElement)("w3m-update-email-wallet-view")],Cd);var kd=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Sd=class extends ld{constructor(){super(),this.email=nl.IN.state.data?.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),nl.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),nl.IN.replace("UpdateEmailSecondaryOtp",nl.IN.state.data))}catch(e){throw nl.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onStartOver=()=>{nl.IN.replace("UpdateEmailWallet",nl.IN.state.data)}}};Sd=kd([(0,rl.customElement)("w3m-update-email-primary-otp-view")],Sd);var xd=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Md=class extends ld{constructor(){super(),this.email=nl.IN.state.data?.newEmail,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),nl.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),nl.IN.reset("Account"))}catch(e){throw nl.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onStartOver=()=>{nl.IN.replace("UpdateEmailWallet",nl.IN.state.data)}}};Md=xd([(0,rl.customElement)("w3m-update-email-secondary-otp-view")],Md);const Id=il.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Td=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Rd=class extends il.WF{constructor(){super(...arguments),this.swapUnsupportedChain=nl.IN.state.data?.swapUnsupportedChain,this.disconecting=!1}render(){return il.qy`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?il.qy`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:il.qy`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=nl.p_.getRequestedCaipNetworks(),t=nl.p_.state.approvedCaipNetworkIds,n=nl.wE.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?n.filter((e=>nl.oU.SWAP_SUPPORTED_NETWORKS.includes(e.id))):n).map((e=>il.qy`
        <wui-list-network
          imageSrc=${(0,sl.J)(nl.$m.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `))}async onDisconnect(){try{this.disconecting=!0,await nl.x4.disconnect(),nl.En.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),nl.W3.close()}catch{nl.En.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),nl.Pt.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const t=nl.Uj.state.isConnected,n=nl.p_.state.approvedCaipNetworkIds,r=nl.p_.state.supportsAllNetworks,i=nl.p_.state.caipNetwork,o=nl.IN.state.data;t&&i?.id!==e.id?n?.includes(e.id)?(await nl.p_.switchActiveNetwork(e),await Cu()):r&&nl.IN.push("SwitchNetwork",{...o,network:e}):t||(nl.p_.setCaipNetwork(e),nl.IN.push("Connect"))}};Rd.styles=Id,Td([(0,ol.wk)()],Rd.prototype,"disconecting",void 0),Rd=Td([(0,rl.customElement)("w3m-unsupported-chain-view")],Rd);const Pd=il.AH`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var Od=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Nd=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.address=nl.Uj.state.address,this.profileName=nl.Uj.state.profileName,this.network=nl.p_.state.caipNetwork,this.preferredAccountType=nl.Uj.state.preferredAccountType,this.unsubscribe.push(nl.Uj.subscribe((e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):nl.Pt.showError("Account not found")})),nl.p_.subscribeKey("caipNetwork",(e=>{e?.id&&(this.network=e)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=nl.$m.getNetworkImage(this.network);return il.qy` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        @click=${this.onCopyClick.bind(this)}
        text=${rl.UiHelperUtil.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${nl.Wn.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=nl.p_.getRequestedCaipNetworks(),t=nl.p_.checkIfSmartAccountEnabled(),n=nl.p_.state.caipNetwork;if(this.preferredAccountType===kl.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return n?il.qy`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[nl.$m.getNetworkImage(n)??""]}
      ></wui-compatible-network>`:null;const r=e?.filter((e=>e?.imageId))?.slice(0,5),i=r.map(nl.$m.getNetworkImage).filter(Boolean);return il.qy`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${i}
    ></wui-compatible-network>`}onReceiveClick(){nl.IN.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(nl.wE.copyToClopboard(this.address),nl.Pt.showSuccess("Address copied"))}catch{nl.Pt.showError("Failed to copy")}}};Nd.styles=Pd,Od([(0,ol.wk)()],Nd.prototype,"address",void 0),Od([(0,ol.wk)()],Nd.prototype,"profileName",void 0),Od([(0,ol.wk)()],Nd.prototype,"network",void 0),Od([(0,ol.wk)()],Nd.prototype,"preferredAccountType",void 0),Nd=Od([(0,rl.customElement)("w3m-wallet-receive-view")],Nd);const Ld=il.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Dd=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Bd=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.preferredAccountType=nl.Uj.state.preferredAccountType,this.unsubscribe.push(nl.Uj.subscribeKey("preferredAccountType",(e=>{this.preferredAccountType=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return il.qy` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=nl.p_.getRequestedCaipNetworks(),t=nl.p_.state.approvedCaipNetworkIds,n=nl.p_.state.caipNetwork,r=nl.p_.checkIfSmartAccountEnabled();let i=nl.wE.sortRequestedNetworks(t,e);if(r&&this.preferredAccountType===kl.Vl.ACCOUNT_TYPES.SMART_ACCOUNT){if(!n)return null;i=[n]}return i.map((e=>il.qy`
        <wui-list-network
          imageSrc=${(0,sl.J)(nl.$m.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `))}};Bd.styles=Ld,Dd([(0,ol.wk)()],Bd.prototype,"preferredAccountType",void 0),Bd=Dd([(0,rl.customElement)("w3m-wallet-compatible-networks-view")],Bd);const Ud=il.AH`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var jd=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Fd=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.token=nl.Rv.state.token,this.sendTokenAmount=nl.Rv.state.sendTokenAmount,this.receiverAddress=nl.Rv.state.receiverAddress,this.receiverProfileName=nl.Rv.state.receiverProfileName,this.loading=nl.Rv.state.loading,this.gasPriceInUSD=nl.Rv.state.gasPriceInUSD,this.message="Preview Send",this.fetchNetworkPrice(),this.unsubscribe.push(nl.Rv.subscribe((e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.getMessage(),il.qy` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPriceInUSD=${this.gasPriceInUSD}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}async fetchNetworkPrice(){await nl.GN.getNetworkTokenPrice();const e=await nl.GN.getInitialGasPrice();e?.gasPrice&&e?.gasPriceInUSD&&(nl.Rv.setGasPrice(e.gasPrice),nl.Rv.setGasPriceInUsd(e.gasPriceInUSD))}onButtonClick(){nl.IN.push("WalletSendPreview")}getMessage(){if(this.message="Preview Send",this.receiverAddress&&!nl.wE.isAddress(this.receiverAddress)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.sendTokenAmount&&this.token?.price){this.sendTokenAmount*this.token.price||(this.message="Incorrect Value")}this.token||(this.message="Select Token")}};Fd.styles=Ud,jd([(0,ol.wk)()],Fd.prototype,"token",void 0),jd([(0,ol.wk)()],Fd.prototype,"sendTokenAmount",void 0),jd([(0,ol.wk)()],Fd.prototype,"receiverAddress",void 0),jd([(0,ol.wk)()],Fd.prototype,"receiverProfileName",void 0),jd([(0,ol.wk)()],Fd.prototype,"loading",void 0),jd([(0,ol.wk)()],Fd.prototype,"gasPriceInUSD",void 0),jd([(0,ol.wk)()],Fd.prototype,"message",void 0),Fd=jd([(0,rl.customElement)("w3m-wallet-send-view")],Fd);const zd=il.AH`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;var $d=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let qd=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.tokenBalance=nl.Uj.state.tokenBalance,this.search="",this.onDebouncedSearch=nl.wE.debounce((e=>{this.search=e})),this.unsubscribe.push(nl.Uj.subscribe((e=>{this.tokenBalance=e.tokenBalance})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return il.qy`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return il.qy`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.tokens=this.tokenBalance?.filter((e=>e.chainId===nl.p_.state.caipNetwork?.id)),this.search?this.filteredTokens=this.tokenBalance?.filter((e=>e.name.toLowerCase().includes(this.search.toLowerCase()))):this.filteredTokens=this.tokens,il.qy`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map((e=>il.qy`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`)):il.qy`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){nl.IN.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){nl.Rv.setToken(e),nl.Rv.setTokenAmount(void 0),nl.IN.goBack()}};qd.styles=zd,$d([(0,ol.wk)()],qd.prototype,"tokenBalance",void 0),$d([(0,ol.wk)()],qd.prototype,"tokens",void 0),$d([(0,ol.wk)()],qd.prototype,"filteredTokens",void 0),$d([(0,ol.wk)()],qd.prototype,"search",void 0),qd=$d([(0,rl.customElement)("w3m-wallet-send-select-token-view")],qd);const Hd=il.AH`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;var Wd=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Vd=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.token=nl.Rv.state.token,this.sendTokenAmount=nl.Rv.state.sendTokenAmount,this.receiverAddress=nl.Rv.state.receiverAddress,this.receiverProfileName=nl.Rv.state.receiverProfileName,this.receiverProfileImageUrl=nl.Rv.state.receiverProfileImageUrl,this.gasPriceInUSD=nl.Rv.state.gasPriceInUSD,this.caipNetwork=nl.p_.state.caipNetwork,this.unsubscribe.push(nl.Rv.subscribe((e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl})),nl.p_.subscribeKey("caipNetwork",(e=>this.caipNetwork=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return il.qy` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?rl.UiHelperUtil.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?rl.UiHelperUtil.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):rl.UiHelperUtil.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
          .networkFee=${this.gasPriceInUSD}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const e=this.token.price*this.sendTokenAmount;return il.qy`<wui-text variant="paragraph-400" color="fg-100"
        >$${e.toFixed(2)}</wui-text
      >`}return null}onSendClick(){nl.Rv.sendToken()}onCancelClick(){nl.IN.goBack()}};Vd.styles=Hd,Wd([(0,ol.wk)()],Vd.prototype,"token",void 0),Wd([(0,ol.wk)()],Vd.prototype,"sendTokenAmount",void 0),Wd([(0,ol.wk)()],Vd.prototype,"receiverAddress",void 0),Wd([(0,ol.wk)()],Vd.prototype,"receiverProfileName",void 0),Wd([(0,ol.wk)()],Vd.prototype,"receiverProfileImageUrl",void 0),Wd([(0,ol.wk)()],Vd.prototype,"gasPriceInUSD",void 0),Wd([(0,ol.wk)()],Vd.prototype,"caipNetwork",void 0),Vd=Wd([(0,rl.customElement)("w3m-wallet-send-preview-view")],Vd);const Kd=il.AH`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Zd=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Gd=class extends il.WF{render(){return il.qy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-wallet-login-list></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};Gd.styles=Kd,Gd=Zd([(0,rl.customElement)("w3m-connect-wallets-view")],Gd);const Yd=il.AH`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Qd=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Jd=class extends il.WF{render(){return il.qy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-social-login-list></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};Jd.styles=Yd,Jd=Qd([(0,rl.customElement)("w3m-connect-socials-view")],Jd);const Xd=il.AH`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;var eh=n(5606);const th=[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],nh=eh.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN||"https://secure.walletconnect.com";var rh=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let ih=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.socialProvider=nl.Uj.state.socialProvider,this.socialWindow=nl.Uj.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.authConnector=nl.aK.getAuthConnector(),this.handleSocialConnection=async e=>{if(e.data?.resultUri)if(e.origin===nh){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),nl.Uj.setSocialWindow(void 0,nl.WB.state.activeChain)),this.connecting=!0,this.updateMessage();const t=e.data.resultUri;await this.authConnector.provider.connectSocial(t),this.socialProvider&&(nl.iT.setConnectedSocialProvider(this.socialProvider),await nl.x4.connectExternal(this.authConnector),nl.En.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch(e){this.error=!0,this.updateMessage(),this.socialProvider&&nl.En.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else nl.IN.goBack(),nl.Pt.showError("Untrusted Origin"),this.socialProvider&&nl.En.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})},this.unsubscribe.push(nl.Uj.subscribe((e=>{e.socialProvider&&(this.socialProvider=e.socialProvider),e.socialWindow&&(this.socialWindow=e.socialWindow),e.address&&nl.W3.state.open&&nl.W3.close()}))),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),window.removeEventListener("message",this.handleSocialConnection,!1)}render(){return il.qy`
      <wui-flex
        data-error=${(0,sl.J)(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${(0,sl.J)(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const e=nl.Wn.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return il.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}connectSocial(){const e=setInterval((()=>{this.socialWindow?.closed&&(this.connecting||"ConnectingSocial"!==nl.IN.state.view||nl.IN.goBack(),clearInterval(e))}),1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};ih.styles=Xd,rh([(0,ol.wk)()],ih.prototype,"socialProvider",void 0),rh([(0,ol.wk)()],ih.prototype,"socialWindow",void 0),rh([(0,ol.wk)()],ih.prototype,"error",void 0),rh([(0,ol.wk)()],ih.prototype,"connecting",void 0),rh([(0,ol.wk)()],ih.prototype,"message",void 0),ih=rh([(0,rl.customElement)("w3m-connecting-social-view")],ih);const oh=il.AH`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`;var sh=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let ah=class extends il.WF{constructor(){super(),this.usubscribe=[],this.address=nl.Uj.state.address,this.profileImage=nl.Uj.state.profileImage,this.profileName=nl.Uj.state.profileName,this.accounts=nl.Uj.state.allAccounts,this.usubscribe.push(nl.Uj.subscribeKey("address",(e=>{e?this.address=e:nl.W3.close()}))),this.usubscribe.push(nl.Uj.subscribeKey("profileImage",(e=>{this.profileImage=e}))),this.usubscribe.push(nl.Uj.subscribeKey("profileName",(e=>{this.profileName=e})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-profile-view: No account provided");const e=this.profileName?.split(".")[0];return il.qy`
      <wui-flex flexDirection="column" gap="l" .padding=${["0","xl","m","xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${(0,sl.J)(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${e?rl.UiHelperUtil.getTruncateString({string:e,charsStart:20,charsEnd:0,truncate:"end"}):rl.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${()=>nl.IN.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `}accountsTemplate(){return il.qy`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs","m","s","s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map((e=>this.accountTemplate(e)))}
      </wui-flex>
    </wui-flex>`}async onSwitchAccount(e){nl.Uj.setShouldUpdateToAddress(e.address);const t=nl.aK.getAuthConnector();t&&(await t.provider.setPreferredAccount(e.type),await t.provider.connect())}accountTemplate(e){return il.qy`<wui-list-account accountAddress=${e.address} accountType=${e.type}>
      ${e.address===this.address?"":il.qy`<wui-button
            slot="action"
            textVariant="small-600"
            size="sm"
            variant="accent"
            @click=${()=>this.onSwitchAccount(e)}
            >Switch</wui-button
          >`}
    </wui-list-account>`}onCopyAddress(){try{this.profileName?(nl.wE.copyToClopboard(this.profileName),nl.Pt.showSuccess("Name copied")):this.address&&(nl.wE.copyToClopboard(this.address),nl.Pt.showSuccess("Address copied"))}catch{nl.Pt.showError("Failed to copy")}}};ah.styles=oh,sh([(0,ol.wk)()],ah.prototype,"address",void 0),sh([(0,ol.wk)()],ah.prototype,"profileImage",void 0),sh([(0,ol.wk)()],ah.prototype,"profileName",void 0),sh([(0,ol.wk)()],ah.prototype,"accounts",void 0),ah=sh([(0,rl.customElement)("w3m-profile-view")],ah);const ch=il.AH`
  input[type='checkbox'] {
    all: revert;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    accent-color: var(--wui-color-accent-100);
  }
`;var lh=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let uh=class extends il.WF{constructor(){super(),this.metadata=nl.Hd.state.metadata,this.allAccounts=nl.Uj.state.allAccounts,this.selectedAccounts=nl.Uj.state.allAccounts,this.selectAll=!0,this.approved=!1,this.isApproving=!1,this.getAddressTemplate=e=>{const t=this.selectedAccounts.some((t=>t.address===e.address));return il.qy`<wui-list-account accountAddress="${e.address}" accountType="${e.type}">
      <input
        id="${e.address}"
        slot="action"
        type="checkbox"
        .checked="${t}"
        @change="${this.handleClick(e)}"
      />
    </wui-list-account>`},this.onSelectAll=e=>{const t=e.target.checked;this.selectAll=this.selectedAccounts.length===this.allAccounts.length,this.allAccounts.forEach((e=>{this.onSelect(e,t)}))},this.onSelect=(e,t)=>{t?this.selectedAccounts.push(e):this.selectedAccounts=this.selectedAccounts.filter((t=>t.address!==e.address)),this.selectedAccounts.length>0&&(this.selectAll=this.selectedAccounts.length===this.allAccounts.length)},nl.Uj.subscribeKey("allAccounts",(e=>{this.allAccounts=e}))}render(){return il.qy`
    <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
      <wui-banner-img imageSrc="${(0,sl.J)(this.metadata?.icons[0])}" text="${(0,sl.J)(this.metadata?.url)}" size="sm"></wui-banner>
    </wui-flex>
    <wui-flex .padding=${["0","xl","0","xl"]} flexDirection="row" justifyContent="space-between">
        <wui-text variant="paragraph-400" color="fg-200">Select all</wui-text>
        <input type="checkbox" .checked=${this.selectAll}  @click=${this.onSelectAll.bind(this)} />
    </wui-flex>
      <wui-flex flexDirection="column" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map((e=>this.getAddressTemplate(e)))}
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="neutral"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="main"
          .disabled=${0===this.selectedAccounts.length}
          @click=${this.onContinue.bind(this)}
          ?loading=${this.isApproving}
        >
          ${this.isApproving?"Signing...":"Continue"}
        </wui-button>
      </wui-flex>
    `}handleClick(e){return t=>{const n=t.target;this.onSelect?.({...e},n?.checked)}}onContinue(){this.selectedAccounts.length>0?(this.isApproving=!0,nl.Uj.setAllAccounts(this.selectedAccounts),nl.Uj.setShouldUpdateToAddress(this.selectedAccounts[0]?.address??""),this.approved=!0,this.isApproving=!1,nl.W3.close()):this.onCancel()}async onCancel(){const{isConnected:e}=nl.Uj.state;e?(await nl.x4.disconnect(),nl.W3.close()):nl.IN.push("Connect")}disconnectedCallback(){super.disconnectedCallback(),this.approved||this.onCancel()}};uh.styles=ch,lh([(0,ol.wk)()],uh.prototype,"allAccounts",void 0),lh([(0,ol.wk)()],uh.prototype,"selectedAccounts",void 0),lh([(0,ol.wk)()],uh.prototype,"selectAll",void 0),lh([(0,ol.wk)()],uh.prototype,"approved",void 0),lh([(0,ol.wk)()],uh.prototype,"isApproving",void 0),uh=lh([(0,rl.customElement)("w3m-select-addresses-view")],uh);const dh=il.AH`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var hh=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let fh=class extends il.WF{constructor(){super(),this.metadata=nl.Hd.state.metadata,this.allAccounts=nl.Uj.state.allAccounts||[],this.balances={},this.labels=nl.Uj.state.addressLabels,this.currentAddress=nl.Uj.state.address||"",this.connectedConnector=nl.iT.getConnectedConnector(),this.shouldShowIcon="AUTH"===this.connectedConnector,this.caipNetwork=nl.p_.state.caipNetwork,nl.Uj.subscribeKey("allAccounts",(e=>{this.allAccounts=e}))}connectedCallback(){super.connectedCallback(),this.allAccounts.forEach((e=>{nl.TP.getBalance(e.address,this.caipNetwork?.id).then((t=>{let n=this.balances[e.address]||0;t.balances.length>0&&(n=t.balances.reduce(((e,t)=>e+(t?.value||0)),0)),this.balances[e.address]=n,this.requestUpdate()}))}))}getAddressIcon(e){return"smartAccount"===e?"lightbulb":"mail"}render(){return il.qy`
      <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
        <wui-banner-img
          imageSrc=${(0,sl.J)(this.metadata?.icons[0])}
          text=${(0,sl.J)(this.metadata?.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map((e=>this.getAddressTemplate(e)))}
      </wui-flex>
    `}getAddressTemplate(e){const t=this.labels?.get(e.address);return il.qy`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${e.address}></wui-avatar>
          ${this.shouldShowIcon?il.qy`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(e.type)}"
                ?border=${!0}
              ></wui-icon-box>`:il.qy`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${t||rl.UiHelperUtil.getTruncateString({string:e.address,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${"number"==typeof this.balances[e.address]?`$${this.balances[e.address]?.toFixed(2)}`:il.qy`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${e.address?.toLowerCase()===this.currentAddress?.toLowerCase()?"":il.qy`
                <wui-button
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${()=>this.onSwitchAddress(e.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `}onSwitchAddress(e){nl.Uj.setShouldUpdateToAddress(e),nl.W3.close()}};fh.styles=dh,hh([(0,ol.wk)()],fh.prototype,"allAccounts",void 0),hh([(0,ol.wk)()],fh.prototype,"balances",void 0),fh=hh([(0,rl.customElement)("w3m-switch-address-view")],fh);const ph=il.AH`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function gh(e){const{connectors:t}=nl.aK.state,n=t.filter((e=>"ANNOUNCED"===e.type)).reduce(((e,t)=>t.info?.rdns?(e[t.info.rdns]=!0,e):e),{}),r=e.map((e=>({...e,installed:Boolean(e.rdns)&&Boolean(n[e.rdns??""])}))).sort(((e,t)=>Number(t.installed)-Number(e.installed)));return r}var mh=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};const yh="local-paginator";let vh=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!nl.Np.state.wallets.length,this.wallets=nl.Np.state.wallets,this.recommended=nl.Np.state.recommended,this.featured=nl.Np.state.featured,this.unsubscribe.push(nl.Np.subscribeKey("wallets",(e=>this.wallets=e)),nl.Np.subscribeKey("recommended",(e=>this.recommended=e)),nl.Np.subscribeKey("featured",(e=>this.featured=e)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.paginationObserver?.disconnect()}render(){return il.qy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){const e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await nl.Np.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map((()=>il.qy`
        <wui-card-select-loader type="wallet" id=${(0,sl.J)(t)}></wui-card-select-loader>
      `))}walletsTemplate(){return gh([...this.featured,...this.recommended,...this.wallets]).map((e=>il.qy`
        <wui-card-select
          imageSrc=${(0,sl.J)(nl.$m.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
          .installed=${e.installed}
        ></wui-card-select>
      `))}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:n,count:r}=nl.Np.state,i=window.innerWidth<352?3:4,o=e.length+t.length;let s=Math.ceil(o/i)*i-o+i;return s-=e.length?n.length%i:0,0===r&&n.length>0?null:0===r||[...n,...e,...t].length<r?this.shimmerTemplate(s,yh):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${yh}`);e&&(this.paginationObserver=new IntersectionObserver((([e])=>{if(e?.isIntersecting&&!this.initial){const{page:e,count:t,wallets:n}=nl.Np.state;n.length<t&&nl.Np.fetchWallets({page:e+1})}})),this.paginationObserver.observe(e))}onConnectWallet(e){const t=nl.aK.getConnector(e.id,e.rdns);t?nl.IN.push("ConnectingExternal",{connector:t}):nl.IN.push("ConnectingWalletConnect",{wallet:e})}};vh.styles=ph,mh([(0,ol.wk)()],vh.prototype,"initial",void 0),mh([(0,ol.wk)()],vh.prototype,"wallets",void 0),mh([(0,ol.wk)()],vh.prototype,"recommended",void 0),mh([(0,ol.wk)()],vh.prototype,"featured",void 0),vh=mh([(0,rl.customElement)("w3m-all-wallets-list")],vh);const bh=il.AH`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var wh=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Ah=class extends il.WF{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?il.qy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()!==this.prevQuery.trim()&&(this.prevQuery=this.query,this.loading=!0,await nl.Np.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=nl.Np.state,t=gh(e);return e.length?il.qy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map((e=>il.qy`
            <wui-card-select
              imageSrc=${(0,sl.J)(nl.$m.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
              .installed=${e.installed}
            ></wui-card-select>
          `))}
      </wui-grid>
    `:il.qy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const t=nl.aK.getConnector(e.id,e.rdns);t?nl.IN.push("ConnectingExternal",{connector:t}):nl.IN.push("ConnectingWalletConnect",{wallet:e})}};Ah.styles=bh,wh([(0,ol.wk)()],Ah.prototype,"loading",void 0),wh([(0,ol.MZ)()],Ah.prototype,"query",void 0),Ah=wh([(0,rl.customElement)("w3m-all-wallets-search")],Ah);var _h=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Eh=class extends il.WF{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(nl.x4.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.generateTabs();return il.qy`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map((e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=e.map((({platform:e})=>e)),e}onTabChange(e){const t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};_h([(0,ol.MZ)({type:Array})],Eh.prototype,"platforms",void 0),_h([(0,ol.MZ)()],Eh.prototype,"onSelectPlatfrom",void 0),_h([(0,ol.wk)()],Eh.prototype,"buffering",void 0),Eh=_h([(0,rl.customElement)("w3m-connecting-header")],Eh);var Ch=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let kh=class extends zl{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),nl.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=nl.aK.state,t=e.find((e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns)),n=e.find((e=>"INJECTED"===e.type));t?await nl.x4.connectExternal(t):n&&await nl.x4.connectExternal(n),nl.W3.close(),nl.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(e){nl.En.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};kh=Ch([(0,rl.customElement)("w3m-connecting-wc-browser")],kh);var Sh=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let xh=class extends zl{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),nl.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout((()=>{this.onConnect?.()}),200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:n,href:r}=nl.wE.formatNativeUrl(e,this.uri);nl.x4.setWcLinking({name:t,href:r}),nl.x4.setRecentWallet(this.wallet),nl.wE.openHref(n,"_blank")}catch{this.error=!0}}};xh=Sh([(0,rl.customElement)("w3m-connecting-wc-desktop")],xh);var Mh=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Ih=class extends zl{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),nl.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:t}=this.wallet,{redirect:n,href:r}=nl.wE.formatNativeUrl(e,this.uri);nl.x4.setWcLinking({name:t,href:r}),nl.x4.setRecentWallet(this.wallet),nl.wE.openHref(n,"_self")}catch{this.error=!0}}onBuffering(){const e=nl.wE.isIos();"visible"===document?.visibilityState&&!this.error&&e&&(nl.x4.setBuffering(!0),setTimeout((()=>{nl.x4.setBuffering(!1)}),5e3))}};Ih=Mh([(0,rl.customElement)("w3m-connecting-wc-mobile")],Ih);const Th=il.AH`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var Rh=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Ph=class extends zl{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),nl.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),il.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return nl.x4.setWcLinking(void 0),nl.x4.setRecentWallet(this.wallet),il.qy` <wui-qr-code
      size=${e}
      theme=${nl.Wn.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,sl.J)(nl.$m.getWalletImage(this.wallet))}
      alt=${(0,sl.J)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return il.qy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Ph.styles=Th,Ph=Rh([(0,rl.customElement)("w3m-connecting-wc-qrcode")],Ph);var Oh=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Nh=class extends il.WF{constructor(){if(super(),this.wallet=nl.IN.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");nl.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return il.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,sl.J)(nl.$m.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Nh=Oh([(0,rl.customElement)("w3m-connecting-wc-unsupported")],Nh);var Lh=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Dh=class extends zl{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",nl.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:n,href:r}=nl.wE.formatUniversalUrl(e,this.uri);nl.x4.setWcLinking({name:t,href:r}),nl.x4.setRecentWallet(this.wallet),nl.wE.openHref(n,"_blank")}catch{this.error=!0}}};Dh=Lh([(0,rl.customElement)("w3m-connecting-wc-web")],Dh);const Bh=il.AH`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`;var Uh=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};const jh=nl.oU.CONVERT_SLIPPAGE_TOLERANCE;let Fh=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.networkName=nl.p_.state.caipNetwork?.name,this.detailsOpen=!1,this.sourceToken=nl.GN.state.sourceToken,this.toToken=nl.GN.state.toToken,this.toTokenAmount=nl.GN.state.toTokenAmount,this.sourceTokenPriceInUSD=nl.GN.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=nl.GN.state.toTokenPriceInUSD,this.gasPriceInUSD=nl.GN.state.gasPriceInUSD,this.priceImpact=nl.GN.state.priceImpact,this.maxSlippage=nl.GN.state.maxSlippage,this.networkTokenSymbol=nl.GN.state.networkTokenSymbol,this.inputError=nl.GN.state.inputError,this.unsubscribe.push(nl.GN.subscribe((e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.gasPriceInUSD=e.gasPriceInUSD,this.priceImpact=e.priceImpact,this.maxSlippage=e.maxSlippage,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError})))}render(){const e=this.toTokenAmount&&this.maxSlippage?lu.Se.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;const t=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return il.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${rl.UiHelperUtil.formatNumberToLocalString(t,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${rl.UiHelperUtil.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?il.qy`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Network cost
                        </wui-text>
                        <w3m-tooltip-trigger
                          text=${`Network cost is paid in ${this.networkTokenSymbol} on the ${this.networkName} network in order to execute transaction.`}
                        >
                          <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                        </w3m-tooltip-trigger>
                      </wui-flex>
                      <wui-text variant="small-400" color="fg-100">
                        $${rl.UiHelperUtil.formatNumberToLocalString(this.gasPriceInUSD,3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact?il.qy` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${rl.UiHelperUtil.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?il.qy`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${"Max slippage sets the minimum amount you must receive for the transaction to proceed. "+(e?`Transaction will be reversed if you receive less than ${rl.UiHelperUtil.formatNumberToLocalString(e,6)} ${this.toToken.symbol} due to price changes.`:"")}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${rl.UiHelperUtil.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${jh}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};Fh.styles=[Bh],Uh([(0,ol.wk)()],Fh.prototype,"networkName",void 0),Uh([(0,ol.MZ)()],Fh.prototype,"detailsOpen",void 0),Uh([(0,ol.wk)()],Fh.prototype,"sourceToken",void 0),Uh([(0,ol.wk)()],Fh.prototype,"toToken",void 0),Uh([(0,ol.wk)()],Fh.prototype,"toTokenAmount",void 0),Uh([(0,ol.wk)()],Fh.prototype,"sourceTokenPriceInUSD",void 0),Uh([(0,ol.wk)()],Fh.prototype,"toTokenPriceInUSD",void 0),Uh([(0,ol.wk)()],Fh.prototype,"gasPriceInUSD",void 0),Uh([(0,ol.wk)()],Fh.prototype,"priceImpact",void 0),Uh([(0,ol.wk)()],Fh.prototype,"maxSlippage",void 0),Uh([(0,ol.wk)()],Fh.prototype,"networkTokenSymbol",void 0),Uh([(0,ol.wk)()],Fh.prototype,"inputError",void 0),Fh=Uh([(0,rl.customElement)("w3m-swap-details")],Fh);const zh=il.AH`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var $h=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let qh=class extends il.WF{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const e=this.marketValue||"0",t=lu.Se.bigNumber(e).isGreaterThan("0");return il.qy`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${t?`$${rl.UiHelperUtil.formatNumberToLocalString(this.marketValue,3)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(e){return lu.t$.numericInputKeyDown(e,this.value,(e=>this.onSetAmount?.(this.target,e)))}dispatchInputChangeEvent(e){if(!this.onSetAmount)return;const t=e.target.value.replace(/[^0-9.]/gu,"");","===t||"."===t?this.onSetAmount(this.target,"0."):t.endsWith(",")?this.onSetAmount(this.target,t.replace(",",".")):this.onSetAmount(this.target,t)}setMaxValueToInput(){this.onSetMaxValue?.(this.target,this.balance)}templateTokenSelectButton(){return this.token?il.qy`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:il.qy` <wui-button
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){const e=lu.Se.multiply(this.balance,this.price),t=!!e&&e?.isGreaterThan(5e-5);return il.qy`
      ${t?il.qy`<wui-text variant="small-400" color="fg-200">
            ${rl.UiHelperUtil.formatNumberToLocalString(this.balance,3)}
          </wui-text>`:null}
      ${"sourceToken"===this.target?this.tokenActionButtonTemplate(t):null}
    `}tokenActionButtonTemplate(e){return e?il.qy` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:il.qy` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(e){this.focused=e}onSelectToken(){nl.En.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),nl.IN.push("SwapSelectToken",{target:this.target})}onBuyToken(){nl.IN.push("OnRampProviders")}};qh.styles=[zh],$h([(0,ol.MZ)()],qh.prototype,"focused",void 0),$h([(0,ol.MZ)()],qh.prototype,"balance",void 0),$h([(0,ol.MZ)()],qh.prototype,"value",void 0),$h([(0,ol.MZ)()],qh.prototype,"price",void 0),$h([(0,ol.MZ)()],qh.prototype,"marketValue",void 0),$h([(0,ol.MZ)()],qh.prototype,"disabled",void 0),$h([(0,ol.MZ)()],qh.prototype,"target",void 0),$h([(0,ol.MZ)()],qh.prototype,"token",void 0),$h([(0,ol.MZ)()],qh.prototype,"onSetAmount",void 0),$h([(0,ol.MZ)()],qh.prototype,"onSetMaxValue",void 0),qh=$h([(0,rl.customElement)("w3m-swap-input")],qh);const Hh=il.AH`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`;var Wh=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Vh=class extends il.WF{constructor(){super(...arguments),this.target="sourceToken"}render(){return il.qy`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return il.qy`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};Vh.styles=[Hh],Wh([(0,ol.MZ)()],Vh.prototype,"target",void 0),Vh=Wh([(0,rl.customElement)("w3m-swap-input-skeleton")],Vh);const Kh=il.AH`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var Zh=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};const Gh=["Swap","SwapSelectToken","SwapPreview"];function Yh(){const e=nl.IN.state.data?.connector?.name,t=nl.IN.state.data?.wallet?.name,n=nl.IN.state.data?.network?.name,r=t??e,i=nl.aK.getConnectors();return{Connect:`Connect ${1===i.length&&"w3m-email"===i[0]?.id?"Email":""} Wallet`,ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:r?`Get ${r}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Profile:void 0,SelectAddresses:"Select accounts",SwitchNetwork:n??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpgradeToSmartAccount:void 0,UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:nl.Uj.state.socialProvider?nl.Uj.state.socialProvider:"Connect Social"}}let Qh=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.heading=Yh()[nl.IN.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(nl.IN.subscribeKey("view",(e=>{this.onViewChange(e),this.onHistoryChange()})),nl.x4.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){return il.qy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
    `}onWalletHelp(){nl.En.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),nl.IN.push("WhatIsAWallet")}async onClose(){if(nl.Hd.state.isSiweEnabled){const{SIWEController:e}=await n.e(293).then(n.bind(n,6293));"success"!==e.state.status&&await nl.x4.disconnect()}nl.W3.close()}titleTemplate(){const e=Gh.includes(nl.IN.state.view);return il.qy`
      <wui-flex class="w3m-header-title" alignItems="center" gap="xs">
        <wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>
        ${e?il.qy`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}dynamicButtonTemplate(){const{view:e}=nl.IN.state,t="Connect"===e,n="ApproveTransaction"===e||"UpgradeToSmartAccount"===e||"ConnectingSiwe"===e;return this.showBack&&!n?il.qy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:il.qy`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){const t=this.shadowRoot?.querySelector("wui-flex.w3m-header-title");if(t){const n=Yh()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=n,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){const{history:e}=nl.IN.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){nl.IN.goBack()}};Qh.styles=[Kh],Zh([(0,ol.wk)()],Qh.prototype,"heading",void 0),Zh([(0,ol.wk)()],Qh.prototype,"buffering",void 0),Zh([(0,ol.wk)()],Qh.prototype,"showBack",void 0),Qh=Zh([(0,rl.customElement)("w3m-header")],Qh);var Jh=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Xh=class extends il.WF{constructor(){super(...arguments),this.data=[]}render(){return il.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((e=>il.qy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map((e=>il.qy`<wui-visual name=${e}></wui-visual>`))}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `))}
      </wui-flex>
    `}};Jh([(0,ol.MZ)({type:Array})],Xh.prototype,"data",void 0),Xh=Jh([(0,rl.customElement)("w3m-help-widget")],Xh);const ef=il.AH`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var tf=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let nf=class extends il.WF{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return il.qy`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?il.qy`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:il.qy`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await nl.Np._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return il.qy`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return il.qy`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return il.qy`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};nf.styles=[ef],tf([(0,ol.MZ)({type:Boolean})],nf.prototype,"disabled",void 0),tf([(0,ol.MZ)()],nf.prototype,"color",void 0),tf([(0,ol.MZ)()],nf.prototype,"label",void 0),tf([(0,ol.MZ)()],nf.prototype,"purchaseValue",void 0),tf([(0,ol.MZ)()],nf.prototype,"purchaseCurrency",void 0),tf([(0,ol.MZ)()],nf.prototype,"date",void 0),tf([(0,ol.MZ)({type:Boolean})],nf.prototype,"completed",void 0),tf([(0,ol.MZ)({type:Boolean})],nf.prototype,"inProgress",void 0),tf([(0,ol.MZ)({type:Boolean})],nf.prototype,"failed",void 0),tf([(0,ol.MZ)()],nf.prototype,"onClick",void 0),tf([(0,ol.MZ)()],nf.prototype,"symbol",void 0),tf([(0,ol.MZ)()],nf.prototype,"icon",void 0),nf=tf([(0,rl.customElement)("w3m-onramp-activity-item")],nf);const rf=il.AH`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var of=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let sf=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=nl.jQ.state.currencyImages,this.tokenImages=nl.jQ.state.tokenImages,this.unsubscribe.push(nl.aG.subscribeKey("purchaseCurrency",(e=>{e&&"Fiat"!==this.type&&(this.selectedCurrency=this.formatPurchaseCurrency(e))})),nl.aG.subscribeKey("paymentCurrency",(e=>{e&&"Token"!==this.type&&(this.selectedCurrency=this.formatPaymentCurrency(e))})),nl.aG.subscribe((e=>{"Fiat"===this.type?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)})),nl.jQ.subscribe((e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}})))}firstUpdated(){nl.aG.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.selectedCurrency?.symbol||"",t=this.currencyImages[e]||this.tokenImages[e];return il.qy`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?il.qy` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>nl.W3.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${(0,sl.J)(t)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:il.qy`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};sf.styles=rf,of([(0,ol.MZ)({type:String})],sf.prototype,"type",void 0),of([(0,ol.MZ)({type:Number})],sf.prototype,"value",void 0),of([(0,ol.wk)()],sf.prototype,"currencies",void 0),of([(0,ol.wk)()],sf.prototype,"selectedCurrency",void 0),of([(0,ol.wk)()],sf.prototype,"currencyImages",void 0),of([(0,ol.wk)()],sf.prototype,"tokenImages",void 0),sf=of([(0,rl.customElement)("w3m-onramp-input")],sf);const af=il.AH`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var cf=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let lf=class extends il.WF{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return il.qy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${(0,sl.J)(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?il.qy`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:il.qy`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){const e=nl.p_.getRequestedCaipNetworks(),t=e?.filter((e=>e?.imageId))?.slice(0,5);return il.qy`
      <wui-flex class="networks">
        ${t?.map((e=>il.qy`
            <wui-flex class="network-icon">
              <wui-image src=${(0,sl.J)(nl.$m.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `))}
      </wui-flex>
    `}};lf.styles=[af],cf([(0,ol.MZ)({type:Boolean})],lf.prototype,"disabled",void 0),cf([(0,ol.MZ)()],lf.prototype,"color",void 0),cf([(0,ol.MZ)()],lf.prototype,"name",void 0),cf([(0,ol.MZ)()],lf.prototype,"label",void 0),cf([(0,ol.MZ)()],lf.prototype,"feeRange",void 0),cf([(0,ol.MZ)({type:Boolean})],lf.prototype,"loading",void 0),cf([(0,ol.MZ)()],lf.prototype,"onClick",void 0),lf=cf([(0,rl.customElement)("w3m-onramp-provider-item")],lf);const uf=il.AH`
  wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var df=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let hf=class extends il.WF{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=nl.Hd.state;return e||t?il.qy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=nl.Hd.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=nl.Hd.state;return e?il.qy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=nl.Hd.state;return e?il.qy`<a href=${e}>Privacy Policy</a>`:null}};hf.styles=[uf],hf=df([(0,rl.customElement)("w3m-legal-footer")],hf);const ff=il.AH`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var pf=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let gf=class extends il.WF{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:n,chrome_store:r,homepage:i}=this.wallet,o=nl.wE.isMobile(),s=nl.wE.isIos(),a=nl.wE.isAndroid(),c=[t,n,i,r].filter(Boolean).length>1,l=rl.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!o?il.qy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${()=>nl.IN.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&i?il.qy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?il.qy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:n&&a?il.qy`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&nl.wE.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&nl.wE.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&nl.wE.openHref(this.wallet.homepage,"_blank")}};gf.styles=[ff],pf([(0,ol.MZ)({type:Object})],gf.prototype,"wallet",void 0),gf=pf([(0,rl.customElement)("w3m-mobile-download-links")],gf);const mf=il.AH`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;var yf=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let vf=class extends il.WF{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=nl.Hd.state;return e||t?il.qy`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return il.qy` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){nl.En.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:nl.Uj.state.preferredAccountType===kl.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),nl.IN.push("WhatIsABuy")}};vf.styles=[mf],vf=yf([(0,rl.customElement)("w3m-onramp-providers-footer")],vf);const bf=il.AH`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var wf=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};const Af={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let _f=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=nl.Pt.state.open,this.unsubscribe.push(nl.Pt.subscribeKey("open",(e=>{this.open=e,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=nl.Pt.state,n=Af[t];return il.qy`
      <wui-snackbar
        message=${e}
        backgroundColor=${n?.backgroundColor}
        iconColor=${n?.iconColor}
        icon=${n?.icon}
        .loading=${"loading"===t}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout((()=>nl.Pt.hide()),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};_f.styles=bf,wf([(0,ol.wk)()],_f.prototype,"open",void 0),_f=wf([(0,rl.customElement)("w3m-snackbar")],_f);const Ef=il.AH`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`;var Cf=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let kf=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.formRef=(0,yu._)(),this.connectors=nl.aK.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(nl.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.formRef.value?.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){const e=this.connectors.find((e=>"AUTH"===e.type)),t=this.connectors.length>1;return e?.email?il.qy`
      <form ${(0,yu.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e.socials||!t?null:il.qy`<wui-flex .padding=${["xxs","0","0","0"]}>
            <wui-separator text="or"></wui-separator>
          </wui-flex>`}
    `:null}submitButtonTemplate(){return!this.loading&&this.email.length>3?il.qy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?il.qy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=nl.aK.getAuthConnector();if(!t)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:n}=await t.provider.connectEmail({email:this.email});nl.En.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===n?(nl.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),nl.IN.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===n&&nl.IN.push("EmailVerifyDevice",{email:this.email})}catch(e){const t=nl.wE.parseError(e);t?.includes("Invalid email")?this.error="Invalid email. Try again.":nl.Pt.showError(e)}finally{this.loading=!1}}onFocusEvent(){nl.En.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};kf.styles=Ef,Cf([(0,ol.wk)()],kf.prototype,"connectors",void 0),Cf([(0,ol.wk)()],kf.prototype,"email",void 0),Cf([(0,ol.wk)()],kf.prototype,"loading",void 0),Cf([(0,ol.wk)()],kf.prototype,"error",void 0),kf=Cf([(0,rl.customElement)("w3m-email-login-widget")],kf);const Sf=il.AH`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transaction: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var xf=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Mf=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.address=nl.Uj.state.address,this.profileImage=nl.Uj.state.profileImage,this.profileName=nl.Uj.state.profileName,this.network=nl.p_.state.caipNetwork,this.disconnecting=!1,this.balance=nl.Uj.state.balance,this.balanceSymbol=nl.Uj.state.balanceSymbol,this.unsubscribe.push(nl.Uj.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):this.disconnecting||nl.Pt.showError("Account not found")})),nl.p_.subscribeKey("caipNetwork",(e=>{e?.id&&(this.network=e)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=nl.$m.getNetworkImage(this.network),t=nl.Uj.state.allAccounts?.find((e=>e.address===this.address)),n=nl.Uj.state.addressLabels.get(this.address);return il.qy`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-profile-button-v2
          .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
          address=${(0,sl.J)(this.address)}
          icon="${"smartAccount"===t?.type?"lightbulb":"mail"}"
          avatarSrc=${(0,sl.J)(this.profileImage?this.profileImage:void 0)}
          profileName=${(0,sl.J)(n||this.profileName)}
          .onCopyClick=${this.onCopyAddress.bind(this)}
        ></wui-profile-button-v2>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200"
            >${nl.wE.formatBalance(this.balance,this.balanceSymbol)}</wui-text
          >
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${(0,sl.J)(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        ${this.onrampTemplate()}
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalMedium"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){const{enableOnramp:e}=nl.Hd.state;return e?il.qy`
      <wui-list-item
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const e=nl.iT.getConnectedConnector(),t=nl.aK.getAuthConnector(),{origin:n}=location;return!t||"AUTH"!==e||n.includes(nl.oU.SECURE_SITE)?null:il.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){nl.IN.push("SwitchAddress")}handleClickPay(){nl.IN.push("OnRampProviders")}explorerBtnTemplate(){return nl.Uj.state.addressExplorerUrl?il.qy`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const e=nl.p_.getRequestedCaipNetworks(),t=!!e&&e.length>1,n=e?.find((({id:e})=>e===this.network?.id));return t||!n}onCopyAddress(){try{this.address&&(nl.wE.copyToClopboard(this.address),nl.Pt.showSuccess("Address copied"))}catch{nl.Pt.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&(nl.En.sendEvent({type:"track",event:"CLICK_NETWORKS"}),nl.IN.push("Networks"))}onTransactions(){nl.En.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:nl.Uj.state.preferredAccountType===kl.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),nl.IN.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await nl.x4.disconnect(),nl.En.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),nl.W3.close()}catch{nl.En.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),nl.Pt.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const e=nl.Uj.state.addressExplorerUrl;e&&nl.wE.openHref(e,"_blank")}onGoToUpgradeView(){nl.En.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),nl.IN.push("UpgradeEmailWallet")}};Mf.styles=Sf,xf([(0,ol.wk)()],Mf.prototype,"address",void 0),xf([(0,ol.wk)()],Mf.prototype,"profileImage",void 0),xf([(0,ol.wk)()],Mf.prototype,"profileName",void 0),xf([(0,ol.wk)()],Mf.prototype,"network",void 0),xf([(0,ol.wk)()],Mf.prototype,"disconnecting",void 0),xf([(0,ol.wk)()],Mf.prototype,"balance",void 0),xf([(0,ol.wk)()],Mf.prototype,"balanceSymbol",void 0),Mf=xf([(0,rl.customElement)("w3m-account-default-widget")],Mf);const If=il.AH`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var Tf=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Rf=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.address=nl.Uj.state.address,this.profileImage=nl.Uj.state.profileImage,this.profileName=nl.Uj.state.profileName,this.smartAccountDeployed=nl.Uj.state.smartAccountDeployed,this.network=nl.p_.state.caipNetwork,this.currentTab=nl.Uj.state.currentTab,this.tokenBalance=nl.Uj.state.tokenBalance,this.preferredAccountType=nl.Uj.state.preferredAccountType,this.unsubscribe.push(nl.Uj.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance,this.smartAccountDeployed=e.smartAccountDeployed,this.preferredAccountType=e.preferredAccountType):nl.W3.close()})),nl.p_.subscribeKey("caipNetwork",(e=>{this.network=e}))),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearInterval(this.watchTokenBalance)}firstUpdated(){nl.Uj.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=nl.$m.getNetworkImage(this.network);return il.qy`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.network&&il.qy`<wui-network-icon .network=${this.network}></wui-network-icon>`}
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${(0,sl.J)(this.address)}
        networkSrc=${(0,sl.J)(e)}
        icon="chevronBottom"
        avatarSrc=${(0,sl.J)(this.profileImage?this.profileImage:void 0)}
        profileName=${this.profileName}
        data-testid="w3m-profile-button"
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <w3m-tooltip-trigger text="Buy">
          <wui-icon-button @click=${this.onBuyClick.bind(this)} icon="card"></wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Swap">
          <wui-icon-button @click=${this.onSwapClick.bind(this)} icon="recycleHorizontal">
          </wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Receive">
          <wui-icon-button @click=${this.onReceiveClick.bind(this)} icon="arrowBottomCircle">
          </wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Send">
          <wui-icon-button @click=${this.onSendClick.bind(this)} icon="send"></wui-icon-button>
        </w3m-tooltip-trigger>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth=${nl.wE.isMobile()&&window.innerWidth<430?(window.innerWidth-48)/3+"px":"104px"}
        .tabs=${th}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}watchSwapValues(){this.watchTokenBalance=setInterval((()=>nl.Uj.fetchTokenBalance()),1e4)}listContentTemplate(){return 0===this.currentTab?il.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?il.qy`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?il.qy`<w3m-account-activity-widget></w3m-account-activity-widget>`:il.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){const e=nl.wE.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:n="00"}=nl.wE.formatTokenBalance(e);return il.qy`<wui-balance dollars=${t} pennies=${n}></wui-balance>`}return il.qy`<wui-balance dollars="0" pennies="00"></wui-balance>`}activateAccountTemplate(){return!nl.p_.checkIfSmartAccountEnabled()||this.preferredAccountType!==kl.Vl.ACCOUNT_TYPES.EOA||this.smartAccountDeployed?null:il.qy` <wui-promo
      text=${"Activate your account"}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`}onTabChange(e){nl.Uj.setCurrentTab(e)}onProfileButtonClick(){nl.IN.push("Profile")}onBuyClick(){nl.IN.push("OnRampProviders")}onSwapClick(){this.network?.id&&!nl.oU.SWAP_SUPPORTED_NETWORKS.includes(this.network?.id)?nl.IN.push("UnsupportedChain",{swapUnsupportedChain:!0}):(nl.En.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.id||"",isSmartAccount:nl.Uj.state.preferredAccountType===kl.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),nl.IN.push("Swap"))}onReceiveClick(){nl.IN.push("WalletReceive")}onSendClick(){nl.En.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.id||"",isSmartAccount:nl.Uj.state.preferredAccountType===kl.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),nl.IN.push("WalletSend")}onUpdateToSmartAccount(){nl.IN.push("UpgradeToSmartAccount")}};Rf.styles=If,Tf([(0,ol.wk)()],Rf.prototype,"watchTokenBalance",void 0),Tf([(0,ol.wk)()],Rf.prototype,"address",void 0),Tf([(0,ol.wk)()],Rf.prototype,"profileImage",void 0),Tf([(0,ol.wk)()],Rf.prototype,"profileName",void 0),Tf([(0,ol.wk)()],Rf.prototype,"smartAccountDeployed",void 0),Tf([(0,ol.wk)()],Rf.prototype,"network",void 0),Tf([(0,ol.wk)()],Rf.prototype,"currentTab",void 0),Tf([(0,ol.wk)()],Rf.prototype,"tokenBalance",void 0),Tf([(0,ol.wk)()],Rf.prototype,"preferredAccountType",void 0),Rf=Tf([(0,rl.customElement)("w3m-account-wallet-features-widget")],Rf);const Pf=il.AH`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var Of=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Nf=class extends il.WF{render(){return il.qy`<w3m-activity-list page="account"></w3m-activity-list>`}};Nf.styles=Pf,Nf=Of([(0,rl.customElement)("w3m-account-activity-widget")],Nf);const Lf=il.AH`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var Df=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Bf=class extends il.WF{render(){return il.qy`${this.nftTemplate()}`}nftTemplate(){return il.qy` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">Coming soon</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive funds</wui-link>
    </wui-flex>`}onReceiveClick(){nl.IN.push("WalletReceive")}};Bf.styles=Lf,Bf=Df([(0,rl.customElement)("w3m-account-nfts-widget")],Bf);const Uf=il.AH`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var jf=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Ff=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.tokenBalance=nl.Uj.state.tokenBalance,this.unsubscribe.push(nl.Uj.subscribe((e=>{this.tokenBalance=e.tokenBalance})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return il.qy`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?il.qy`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:il.qy` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){return this.tokenBalance?.map((e=>il.qy`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`))}onReceiveClick(){nl.IN.push("WalletReceive")}onBuyClick(){nl.En.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:nl.Uj.state.preferredAccountType===kl.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),nl.IN.push("OnRampProviders")}};Ff.styles=Uf,jf([(0,ol.wk)()],Ff.prototype,"tokenBalance",void 0),Ff=jf([(0,rl.customElement)("w3m-account-tokens-widget")],Ff);const zf=il.AH`
  :host {
    min-height: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var $f=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};const qf="last-transaction";let Hf=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.address=nl.Uj.state.address,this.transactionsByYear=nl.WC.state.transactionsByYear,this.loading=nl.WC.state.loading,this.empty=nl.WC.state.empty,this.next=nl.WC.state.next,nl.WC.clearCursor(),this.unsubscribe.push(nl.Uj.subscribe((e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,nl.WC.resetTransactions(),nl.WC.fetchTransactions(e.address))})),nl.WC.subscribe((e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next})))}firstUpdated(){nl.WC.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return il.qy` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map(((t,n)=>{const r=n===e.length-1,i=parseInt(t,10);return new Array(12).fill(null).map(((e,t)=>t)).reverse().map((e=>{const t=rl.TransactionUtil.getTransactionGroupTitle(i,e),n=this.transactionsByYear[i]?.[e];return n?il.qy`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${t}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(n,r)}
            </wui-flex>
          </wui-flex>
        `:null}))}))}templateRenderTransaction(e,t){const{date:n,descriptions:r,direction:i,isAllNFT:o,images:s,status:a,transfers:c,type:l}=this.getTransactionListItemProps(e),u=c?.length>1;return 2===c?.length&&!o?il.qy`
        <wui-transaction-list-item
          date=${n}
          .direction=${i}
          id=${t&&this.next?qf:""}
          status=${a}
          type=${l}
          .images=${s}
          .descriptions=${r}
        ></wui-transaction-list-item>
      `:u?c.map(((e,r)=>{const i=rl.TransactionUtil.getTransferDescription(e),o=t&&r===c.length-1;return il.qy` <wui-transaction-list-item
          date=${n}
          direction=${e.direction}
          id=${o&&this.next?qf:""}
          status=${a}
          type=${l}
          .onlyDirectionIcon=${!0}
          .images=${[s[r]]}
          .descriptions=${[i]}
        ></wui-transaction-list-item>`})):il.qy`
      <wui-transaction-list-item
        date=${n}
        .direction=${i}
        id=${t&&this.next?qf:""}
        status=${a}
        type=${l}
        .images=${s}
        .descriptions=${r}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map(((n,r)=>{const i=t&&r===e.length-1;return il.qy`${this.templateRenderTransaction(n,i)}`}))}emptyStateActivity(){return il.qy`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return il.qy`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?il.qy`${this.emptyStateAccount()}`:il.qy`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill(il.qy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((e=>e)):null}onReceiveClick(){nl.IN.push("WalletReceive")}createPaginationObserver(){const{projectId:e}=nl.Hd.state;this.paginationObserver=new IntersectionObserver((([t])=>{t?.isIntersecting&&!this.loading&&(nl.WC.fetchTransactions(this.address),nl.En.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next,isSmartAccount:nl.Uj.state.preferredAccountType===kl.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}))}),{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const e=this.shadowRoot?.querySelector(`#${qf}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){const t=lu.rL.formatDate(e?.metadata?.minedAt),n=rl.TransactionUtil.getTransactionDescriptions(e),r=e?.transfers,i=e?.transfers?.[0],o=Boolean(i)&&e?.transfers?.every((e=>Boolean(e.nft_info))),s=rl.TransactionUtil.getTransactionImages(r);return{date:t,direction:i?.direction,descriptions:n,isAllNFT:o,images:s,status:e.metadata?.status,transfers:r,type:e.metadata?.operationType}}};Hf.styles=zf,$f([(0,ol.MZ)()],Hf.prototype,"page",void 0),$f([(0,ol.wk)()],Hf.prototype,"address",void 0),$f([(0,ol.wk)()],Hf.prototype,"transactionsByYear",void 0),$f([(0,ol.wk)()],Hf.prototype,"loading",void 0),$f([(0,ol.wk)()],Hf.prototype,"empty",void 0),$f([(0,ol.wk)()],Hf.prototype,"next",void 0),Hf=$f([(0,rl.customElement)("w3m-activity-list")],Hf);const Wf=il.AH`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;var Vf=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Kf=class extends il.WF{render(){return il.qy` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token&&!0}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?il.qy`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:il.qy`<wui-button
      size="md"
      variant="accent"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){nl.IN.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const e=this.token.price*this.sendTokenAmount;return il.qy`<wui-text class="totalValue" variant="small-400" color="fg-200"
        >${e?`$${rl.UiHelperUtil.formatNumberToLocalString(e,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?il.qy` <wui-text variant="small-400" color="error-100">
          ${rl.UiHelperUtil.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:il.qy` <wui-text variant="small-400" color="fg-200">
        ${rl.UiHelperUtil.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?il.qy`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:il.qy`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){nl.Rv.setTokenAmount(e.detail)}onMaxClick(){if(this.token&&this.gasPriceInUSD){const e=lu.Se.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.token.price),t=void 0===this.token.address?lu.Se.bigNumber(this.token.quantity.numeric).minus(e):lu.Se.bigNumber(this.token.quantity.numeric);nl.Rv.setTokenAmount(Number(t.toFixed(20)))}}onBuyClick(){nl.IN.push("OnRampProviders")}};Kf.styles=Wf,Vf([(0,ol.MZ)({type:Object})],Kf.prototype,"token",void 0),Vf([(0,ol.MZ)({type:Number})],Kf.prototype,"sendTokenAmount",void 0),Vf([(0,ol.MZ)({type:Number})],Kf.prototype,"gasPriceInUSD",void 0),Kf=Vf([(0,rl.customElement)("w3m-input-token")],Kf);const Zf=il.AH`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var Gf=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Yf=class extends il.WF{constructor(){super(...arguments),this.inputElementRef=(0,yu._)(),this.instructionElementRef=(0,yu._)(),this.instructionHidden=Boolean(this.value),this.pasting=!1,this.onDebouncedSearch=nl.wE.debounce((async e=>{const t=await nl.x4.getEnsAddress(e);if(nl.Rv.setLoading(!1),t){nl.Rv.setReceiverProfileName(e),nl.Rv.setReceiverAddress(t);const n=await nl.x4.getEnsAvatar(e);n&&nl.Rv.setReceiverProfileImageUrl(n)}else nl.Rv.setReceiverAddress(e),nl.Rv.setReceiverProfileName(void 0),nl.Rv.setReceiverProfileImageUrl(void 0)}))}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return il.qy` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${(0,yu.K)(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${(0,yu.K)(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??""}
        autocomplete="off"
      >
${this.value??""}</textarea
      >
    </wui-flex>`}async focusInput(){this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",this.inputElementRef.value?.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",this.inputElementRef.value?.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){this.value||this.instructionHidden||this.focusInput()}onBlur(){this.value||!this.instructionHidden||this.pasting||this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;const e=await navigator.clipboard.readText();nl.Rv.setReceiverAddress(e),this.focusInput()}onInputChange(e){this.pasting=!1;const t=e.target;t.value&&!this.instructionHidden&&this.focusInput(),nl.Rv.setLoading(!0),this.onDebouncedSearch(t.value)}};Yf.styles=Zf,Gf([(0,ol.MZ)()],Yf.prototype,"value",void 0),Gf([(0,ol.wk)()],Yf.prototype,"instructionHidden",void 0),Gf([(0,ol.wk)()],Yf.prototype,"pasting",void 0),Yf=Gf([(0,rl.customElement)("w3m-input-address")],Yf);const Qf=il.AH`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`;var Jf=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Xf=class extends il.WF{render(){return il.qy` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$${(0,sl.J)(rl.UiHelperUtil.formatNumberToLocalString(this.networkFee,2))}"></wui-list-content></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${rl.UiHelperUtil.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){return this.caipNetwork?.name?il.qy` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${(0,sl.J)(nl.$m.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&nl.IN.push("Networks",{network:e})}};Xf.styles=Qf,Jf([(0,ol.MZ)()],Xf.prototype,"receiverAddress",void 0),Jf([(0,ol.MZ)({type:Object})],Xf.prototype,"caipNetwork",void 0),Jf([(0,ol.MZ)({type:Number})],Xf.prototype,"networkFee",void 0),Xf=Jf([(0,rl.customElement)("w3m-wallet-send-details")],Xf);const ep=il.AH`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var tp=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let np=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.open=nl.Ib.state.open,this.message=nl.Ib.state.message,this.triggerRect=nl.Ib.state.triggerRect,this.variant=nl.Ib.state.variant,this.unsubscribe.push(nl.Ib.subscribe((e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${e}px;\n    --w3m-tooltip-left: ${t}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,il.qy`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};np.styles=[ep],tp([(0,ol.wk)()],np.prototype,"open",void 0),tp([(0,ol.wk)()],np.prototype,"message",void 0),tp([(0,ol.wk)()],np.prototype,"triggerRect",void 0),tp([(0,ol.wk)()],np.prototype,"variant",void 0),np=tp([(0,rl.customElement)("w3m-tooltip")],np);const rp=il.AH`
  :host {
    width: 100%;
    display: block;
  }
`;var ip=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let op=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.text="",this.open=nl.Ib.state.open,this.unsubscribe.push(nl.IN.subscribeKey("view",(()=>{nl.Ib.hide()})),nl.W3.subscribeKey("open",(e=>{e||nl.Ib.hide()})),nl.Ib.subscribeKey("open",(e=>{this.open=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),nl.Ib.hide()}render(){return il.qy`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return il.qy`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();this.open||nl.Ib.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||nl.Ib.hide()}};op.styles=[rp],ip([(0,ol.MZ)()],op.prototype,"text",void 0),ip([(0,ol.wk)()],op.prototype,"open",void 0),op=ip([(0,rl.customElement)("w3m-tooltip-trigger")],op);const sp=il.AH`
  :host > wui-flex:first-child {
    margin-top: var(--wui-spacing-s);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var ap=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let cp=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.connectors=nl.aK.state.connectors,this.connector=this.connectors.find((e=>"AUTH"===e.type)),this.unsubscribe.push(nl.aK.subscribeKey("connectors",(e=>{this.connectors=e,this.connector=this.connectors.find((e=>"AUTH"===e.type))})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.connector?.socials?il.qy`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        .padding=${["0","0","xs","0"]}
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
      ${this.separatorTemplate()}
    `:null}topViewTemplate(){return this.connector?.socials?2===this.connector.socials.length?il.qy` <wui-flex gap="xs">
        ${this.connector.socials.slice(0,2).map((e=>il.qy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
            ></wui-logo-select>`))}
      </wui-flex>`:il.qy` <wui-list-social
      data-testid=${`social-selector-${this.connector?.socials?.[0]}`}
      @click=${()=>{this.onSocialClick(this.connector?.socials?.[0])}}
      logo=${(0,sl.J)(this.connector.socials[0])}
      align="center"
      name=${`Continue with ${this.connector.socials[0]}`}
    ></wui-list-social>`:null}bottomViewTemplate(){return this.connector?.socials?this.connector?.socials.length<=2?null:this.connector?.socials.length>6?il.qy`<wui-flex gap="xs">
        ${this.connector.socials.slice(1,5).map((e=>il.qy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
            ></wui-logo-select>`))}
        <wui-logo-select logo="more" @click=${this.onMoreSocialsClick.bind(this)}></wui-logo-select>
      </wui-flex>`:il.qy`<wui-flex gap="xs">
      ${this.connector.socials.slice(1,this.connector.socials.length).map((e=>il.qy`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
          ></wui-logo-select>`))}
    </wui-flex>`:null}separatorTemplate(){const e=this.connectors.find((e=>"WALLET_CONNECT"===e.type));return e?il.qy`<wui-separator text="or"></wui-separator>`:null}onMoreSocialsClick(){nl.IN.push("ConnectSocials")}async onSocialClick(e){e&&(nl.Uj.setSocialProvider(e,nl.WB.state.activeChain),nl.En.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),nl.IN.push("ConnectingSocial"));const t=nl.aK.getAuthConnector();this.popupWindow=nl.wE.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes");try{if(t&&e){const{uri:n}=await t.provider.getSocialRedirectUri({provider:e});if(!this.popupWindow||!n)throw this.popupWindow?.close(),new Error("Something went wrong");nl.Uj.setSocialWindow(this.popupWindow,nl.WB.state.activeChain),this.popupWindow.location.href=n}}catch(e){this.popupWindow?.close(),nl.Pt.showError("Something went wrong")}}};cp.styles=sp,ap([(0,ol.wk)()],cp.prototype,"connectors",void 0),cp=ap([(0,rl.customElement)("w3m-social-login-widget")],cp);var lp=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let up=class extends il.WF{render(){return il.qy`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list></w3m-connector-list>
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>
    `}};up=lp([(0,rl.customElement)("w3m-wallet-login-list")],up);const dp=il.AH`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var hp=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let fp=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.connectors=nl.aK.state.connectors,this.connector=this.connectors.find((e=>"AUTH"===e.type)),this.unsubscribe.push(nl.aK.subscribeKey("connectors",(e=>{this.connectors=e,this.connector=this.connectors.find((e=>"AUTH"===e.type))})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.connector?.socials?il.qy` <wui-flex flexDirection="column" gap="xs">
      ${this.connector.socials.map((e=>il.qy`<wui-list-social name=${e} logo=${e}></wui-list-social>`))}
    </wui-flex>`:null}};fp.styles=dp,hp([(0,ol.wk)()],fp.prototype,"connectors",void 0),fp=hp([(0,rl.customElement)("w3m-social-login-list")],fp);var pp=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let gp=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.connectors=nl.aK.state.connectors,this.unsubscribe.push(nl.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"ANNOUNCED"===e.type));return e?.length?il.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>e.info?.rdns&&nl.Np.state.excludedRDNS&&nl.Np.state.excludedRDNS.includes(e?.info?.rdns)?null:il.qy`
            <wui-list-wallet
              imageSrc=${(0,sl.J)(nl.$m.getConnectorImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnector(e)}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              .installed=${!0}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){"WALLET_CONNECT"===e.type?nl.wE.isMobile()?nl.IN.push("AllWallets"):nl.IN.push("ConnectingWalletConnect"):nl.IN.push("ConnectingExternal",{connector:e})}};pp([(0,ol.wk)()],gp.prototype,"connectors",void 0),gp=pp([(0,rl.customElement)("w3m-connect-announced-widget")],gp);var mp=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let yp=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.connectors=nl.aK.state.connectors,this.unsubscribe.push(nl.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{customWallets:e}=nl.Hd.state;if(!e?.length)return this.style.cssText="display: none",null;const t=this.filterOutDuplicateWallets(e);return il.qy`<wui-flex flexDirection="column" gap="xs">
      ${t.map((e=>il.qy`
          <wui-list-wallet
            imageSrc=${(0,sl.J)(nl.$m.getWalletImage(e))}
            name=${e.name??"Unknown"}
            @click=${()=>this.onConnectWallet(e)}
            data-testid=${`wallet-selector-${e.id}`}
          >
          </wui-list-wallet>
        `))}
    </wui-flex>`}filterOutDuplicateWallets(e){const t=nl.iT.getRecentWallets(),n=this.connectors.map((e=>e.info?.rdns)).filter(Boolean),r=t.map((e=>e.rdns)).filter(Boolean),i=n.concat(r);if(i.includes("io.metamask.mobile")&&nl.wE.isMobile()){const e=i.indexOf("io.metamask.mobile");i[e]="io.metamask"}return e.filter((e=>!i.includes(String(e?.rdns))))}onConnectWallet(e){nl.IN.push("ConnectingWalletConnect",{wallet:e})}};mp([(0,ol.wk)()],yp.prototype,"connectors",void 0),yp=mp([(0,rl.customElement)("w3m-connect-custom-widget")],yp);const vp={filterOutDuplicatesByRDNS(e){const t=nl.Hd.state.enableEIP6963?nl.aK.state.connectors:[],n=nl.iT.getRecentWallets(),r=t.map((e=>e.info?.rdns)).filter(Boolean),i=n.map((e=>e.rdns)).filter(Boolean),o=r.concat(i);if(o.includes("io.metamask.mobile")&&nl.wE.isMobile()){const e=o.indexOf("io.metamask.mobile");o[e]="io.metamask"}return e.filter((e=>!o.includes(String(e?.rdns))))},filterOutDuplicatesByIds(e){const t=nl.aK.state.connectors,n=nl.iT.getRecentWallets(),r=t.map((e=>e.explorerId)),i=n.map((e=>e.id)),o=r.concat(i);return e.filter((e=>!o.includes(e?.id)))},filterOutDuplicateWallets(e){const t=this.filterOutDuplicatesByRDNS(e);return this.filterOutDuplicatesByIds(t)}};var bp=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let wp=class extends il.WF{constructor(){super(...arguments),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{featured:e}=nl.Np.state;if(!e.length)return this.style.cssText="display: none",null;const t=vp.filterOutDuplicateWallets(e);return il.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map((e=>il.qy`
            <wui-list-wallet
              imageSrc=${(0,sl.J)(nl.$m.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `}onConnectWallet(e){const t=nl.aK.getConnector(e.id,e.rdns);t?nl.IN.push("ConnectingExternal",{connector:t}):nl.IN.push("ConnectingWalletConnect",{wallet:e})}};wp=bp([(0,rl.customElement)("w3m-connect-featured-widget")],wp);var Ap=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let _p=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.connectors=nl.aK.state.connectors,this.unsubscribe.push(nl.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"INJECTED"===e.type));return!e?.length||1===e.length&&"Browser Wallet"===e[0]?.name&&!nl.wE.isMobile()?(this.style.cssText="display: none",null):il.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>nl.wE.isMobile()||"Browser Wallet"!==e.name?nl.x4.checkInstalled()?e.info?.rdns&&nl.Np.state.excludedRDNS&&nl.Np.state.excludedRDNS.includes(e?.info?.rdns)?null:il.qy`
            <wui-list-wallet
              imageSrc=${(0,sl.J)(nl.$m.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
            >
            </wui-list-wallet>
          `:(this.style.cssText="display: none",null):null))}
      </wui-flex>
    `}onConnector(e){nl.IN.push("ConnectingExternal",{connector:e})}};Ap([(0,ol.wk)()],_p.prototype,"connectors",void 0),_p=Ap([(0,rl.customElement)("w3m-connect-injected-widget")],_p);var Ep=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Cp=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.connectors=nl.aK.state.connectors,this.unsubscribe.push(nl.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.find((e=>"coinbaseWalletSDK"===e.id));return e?il.qy`
      <wui-flex flexDirection="column" gap="xs">
        <wui-list-wallet
          imageSrc=${(0,sl.J)(nl.$m.getConnectorImage(e))}
          .installed=${!0}
          name=${(0,sl.J)(e.name)}
          data-testid=${`wallet-selector-${e.id}`}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      </wui-flex>
    `:(this.style.cssText="display: none",null)}async onCoinbaseConnector(e){try{nl.x4.setWcError(!1),e.imageUrl&&nl.iT.setConnectedWalletImageUrl(e.imageUrl),await nl.x4.connectExternal(e),nl.Hd.state.isSiweEnabled?nl.IN.push("ConnectingSiwe"):nl.W3.close(),nl.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:e.name||"Unknown"}})}catch(e){nl.En.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),nl.x4.setWcError(!0)}}onConnector(e){nl.IN.push("ConnectingExternal",{connector:e}),e.id===Wl&&this.onCoinbaseConnector(e)}};Ep([(0,ol.wk)()],Cp.prototype,"connectors",void 0),Cp=Ep([(0,rl.customElement)("w3m-connect-coinbase-widget")],Cp);var kp=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Sp=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.connectors=nl.aK.state.connectors,this.unsubscribe.push(nl.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"EXTERNAL"===e.type));return e?.length?il.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>"coinbaseWalletSDK"===e.id?null:il.qy`
            <wui-list-wallet
              imageSrc=${(0,sl.J)(nl.$m.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){nl.IN.push("ConnectingExternal",{connector:e})}};kp([(0,ol.wk)()],Sp.prototype,"connectors",void 0),Sp=kp([(0,rl.customElement)("w3m-connect-external-widget")],Sp);var xp=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Mp=class extends il.WF{render(){const e=nl.iT.getRecentWallets();return e?.length?il.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>il.qy`
            <wui-list-wallet
              imageSrc=${(0,sl.J)(nl.$m.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){nl.IN.push("ConnectingWalletConnect",{wallet:e})}};Mp=xp([(0,rl.customElement)("w3m-connect-recent-widget")],Mp);var Ip=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Tp=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.connectors=nl.aK.state.connectors,this.unsubscribe.push(nl.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.find((e=>"WALLET_CONNECT"===e.type));if(!e)return null;const{recommended:t}=nl.Np.state,{customWallets:n,featuredWalletIds:r}=nl.Hd.state,{connectors:i}=nl.aK.state,o=nl.iT.getRecentWallets(),s=i.filter((e=>"INJECTED"===e.type||"ANNOUNCED"===e.type)),a=s.filter((e=>"Browser Wallet"!==e.name));if(r||n||!t.length)return this.style.cssText="display: none",null;const c=a.length+o.length,l=Math.max(0,2-c),u=vp.filterOutDuplicateWallets(t).slice(0,l);return u.length?il.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${u.map((e=>il.qy`
            <wui-list-wallet
              imageSrc=${(0,sl.J)(nl.$m.getWalletImage(e))}
              name=${e?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){const t=nl.aK.getConnector(e.id,e.rdns);t?nl.IN.push("ConnectingExternal",{connector:t}):nl.IN.push("ConnectingWalletConnect",{wallet:e})}};Ip([(0,ol.wk)()],Tp.prototype,"connectors",void 0),Tp=Ip([(0,rl.customElement)("w3m-connect-recommended-widget")],Tp);var Rp=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Pp=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.connectors=nl.aK.state.connectors,this.unsubscribe.push(nl.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(nl.wE.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find((e=>"WALLET_CONNECT"===e.type));return e?il.qy`
      <wui-list-wallet
        imageSrc=${(0,sl.J)(nl.$m.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:(this.style.cssText="display: none",null)}onConnector(e){"WALLET_CONNECT"===e.type?nl.wE.isMobile()?nl.IN.push("AllWallets"):nl.IN.push("ConnectingWalletConnect"):nl.IN.push("ConnectingExternal",{connector:e})}};Rp([(0,ol.wk)()],Pp.prototype,"connectors",void 0),Pp=Rp([(0,rl.customElement)("w3m-connect-walletconnect-widget")],Pp);const Op=il.AH`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Np=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Lp=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.connectors=nl.aK.state.connectors,this.unsubscribe.push(nl.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{custom:e,recent:t,announced:n,coinbase:r,injected:i,recommended:o,featured:s,external:a}=this.getConnectorsByType();return il.qy`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connect-walletconnect-widget></w3m-connect-walletconnect-widget>
        ${t.length?il.qy`<w3m-connect-recent-widget></w3m-connect-recent-widget>`:null}
        ${n.length?il.qy`<w3m-connect-announced-widget></w3m-connect-announced-widget>`:null}
        ${i.length?il.qy`<w3m-connect-injected-widget></w3m-connect-injected-widget>`:null}
        ${s.length?il.qy`<w3m-connect-featured-widget></w3m-connect-featured-widget>`:null}
        ${e?.length?il.qy`<w3m-connect-custom-widget></w3m-connect-custom-widget>`:null}
        ${r?il.qy`<w3m-connect-coinbase-widget></w3m-connect-coinbase-widget>`:null}
        ${a.length?il.qy`<w3m-connect-external-widget></w3m-connect-external-widget>`:null}
        ${o.length?il.qy`<w3m-connect-recommended-widget></w3m-connect-recommended-widget>`:null}
      </wui-flex>
    `}getConnectorsByType(){const{featured:e,recommended:t}=nl.Np.state,{customWallets:n}=nl.Hd.state,r=nl.iT.getRecentWallets(),i=vp.filterOutDuplicateWallets(t),o=vp.filterOutDuplicateWallets(e),s=this.connectors.filter((e=>"ANNOUNCED"===e.type)),a=this.connectors.filter((e=>"INJECTED"===e.type)),c=this.connectors.filter((e=>"EXTERNAL"===e.type)),l=this.connectors.find((e=>e.id===Wl)),u=!(nl.WB.state.activeChain===lu.oU.CHAIN.EVM)||nl.Hd.state.enableEIP6963;return{custom:n,recent:r,coinbase:l,external:c,announced:u?s:[],injected:u?a:[],recommended:i,featured:o}}};Lp.styles=Op,Np([(0,ol.wk)()],Lp.prototype,"connectors",void 0),Lp=Np([(0,rl.customElement)("w3m-connector-list")],Lp);var Dp=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let Bp=class extends il.WF{constructor(){super(),this.unsubscribe=[],this.connectors=nl.aK.state.connectors,this.count=nl.Np.state.count,this.unsubscribe.push(nl.aK.subscribeKey("connectors",(e=>this.connectors=e)),nl.Np.subscribeKey("count",(e=>this.count=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.find((e=>"WALLET_CONNECT"===e.type)),{allWallets:t}=nl.Hd.state;if(!e||"HIDE"===t)return null;if("ONLY_MOBILE"===t&&!nl.wE.isMobile())return null;const n=nl.Np.state.featured.length,r=this.count+n,i=r<10?r:10*Math.floor(r/10),o=i<r?`${i}+`:`${i}`;return il.qy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${o}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}onAllWallets(){nl.En.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),nl.IN.push("AllWallets")}};Dp([(0,ol.wk)()],Bp.prototype,"connectors",void 0),Dp([(0,ol.wk)()],Bp.prototype,"count",void 0),Bp=Dp([(0,rl.customElement)("w3m-all-wallets-widget")],Bp);var Up=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let jp=class extends il.WF{constructor(){super(...arguments),this.socialProvider=nl.iT.getConnectedSocialProvider(),this.socialUsername=nl.iT.getConnectedSocialUsername()}render(){const e=nl.iT.getConnectedConnector(),t=nl.aK.getAuthConnector();if(!t||"AUTH"!==e)return this.style.cssText="display: none",null;const n=t.provider.getEmail()??"";return il.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(n,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(n)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e,t){t||nl.IN.push("UpdateEmailWallet",{email:e})}getAuthName(e){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};jp=Up([(0,rl.customElement)("w3m-account-auth-button")],jp);let Fp=!1;class zp{constructor(e){this.initPromise=void 0,this.setIsConnected=(e,t)=>{nl.Uj.setIsConnected(e,t)},this.getIsConnectedState=()=>nl.Uj.state.isConnected,this.setAllAccounts=(e=[])=>{nl.Uj.setAllAccounts(e),nl.Hd.setHasMultipleAddresses(e?.length>1)},this.addAddressLabel=(e,t)=>{nl.Uj.addAddressLabel(e,t)},this.removeAddressLabel=e=>{nl.Uj.removeAddressLabel(e)},this.setCaipAddress=(e,t)=>{nl.Uj.setCaipAddress(e,t)},this.setBalance=(e,t,n)=>{nl.Uj.setBalance(e,t,n)},this.setProfileName=(e,t)=>{nl.Uj.setProfileName(e,t)},this.setProfileImage=(e,t)=>{nl.Uj.setProfileImage(e,t)},this.resetAccount=e=>{nl.Uj.resetAccount(e)},this.setCaipNetwork=e=>{nl.p_.setCaipNetwork(e)},this.getCaipNetwork=()=>nl.p_.state.caipNetwork,this.setRequestedCaipNetworks=(e,t)=>{nl.p_.setRequestedCaipNetworks(e,t)},this.getApprovedCaipNetworkIds=()=>nl.p_.getApprovedCaipNetworkIds(),this.setApprovedCaipNetworksData=()=>nl.p_.setApprovedCaipNetworksData(),this.resetNetwork=()=>{nl.p_.resetNetwork()},this.setConnectors=e=>{nl.aK.setConnectors(e)},this.addConnector=e=>{nl.aK.addConnector(e)},this.getConnectors=()=>nl.aK.getConnectors(),this.resetWcConnection=()=>{nl.x4.resetWcConnection()},this.fetchIdentity=e=>nl.TP.fetchIdentity(e),this.setAddressExplorerUrl=(e,t)=>{nl.Uj.setAddressExplorerUrl(e,t)},this.setSmartAccountDeployed=(e,t)=>{nl.Uj.setSmartAccountDeployed(e,t)},this.setConnectedWalletInfo=(e,t)=>{nl.Uj.setConnectedWalletInfo(e,t)},this.setSmartAccountEnabledNetworks=(e,t)=>{nl.p_.setSmartAccountEnabledNetworks(e,t)},this.setPreferredAccountType=(e,t)=>{nl.Uj.setPreferredAccountType(e,t)},this.getWalletConnectName=e=>nl.f.getNamesForAddress(e),this.resolveWalletConnectName=async e=>{const t=e.replace(lu.oU.WC_NAME_SUFFIX,""),n=await nl.f.resolveName(t),r=Object.values(n?.addresses)||[];return r[0]?.address||!1},this.setEIP6963Enabled=e=>{nl.Hd.setEIP6963Enabled(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),nl.W3.open(e)}async close(){await this.initOrContinue(),nl.W3.close()}setLoading(e){nl.W3.setLoading(e)}getThemeMode(){return nl.Wn.state.themeMode}getThemeVariables(){return nl.Wn.state.themeVariables}setThemeMode(e){nl.Wn.setThemeMode(e),(0,rl.setColorTheme)(nl.Wn.state.themeMode)}setThemeVariables(e){nl.Wn.setThemeVariables(e),(0,rl.setThemeVariables)(nl.Wn.state.themeVariables)}subscribeTheme(e){return nl.Wn.subscribe(e)}getWalletInfo(){return nl.Uj.state.connectedWalletInfo}subscribeWalletInfo(e){return nl.Uj.subscribeKey("connectedWalletInfo",e)}subscribeShouldUpdateToAddress(e){nl.Uj.subscribeKey("shouldUpdateToAddress",e)}subscribeCaipNetworkChange(e){nl.p_.subscribeKey("caipNetwork",e)}getState(){return nl.z3.state}subscribeState(e){return nl.z3.subscribe(e)}showErrorMessage(e){nl.Pt.showError(e)}showSuccessMessage(e){nl.Pt.showSuccess(e)}getEvent(){return{...nl.En.state}}subscribeEvents(e){return nl.En.subscribe(e)}replace(e){nl.IN.replace(e)}redirect(e){nl.IN.push(e)}popTransactionStack(e){nl.IN.popTransactionStack(e)}isOpen(){return nl.W3.state.open}isTransactionStackEmpty(){return 0===nl.IN.state.transactionStack.length}isTransactionShouldReplaceView(){return nl.IN.state.transactionStack[nl.IN.state.transactionStack.length-1]?.replace}async initControllers(e){if(nl.WB.initialize([{networkControllerClient:e.networkControllerClient,connectionControllerClient:e.connectionControllerClient,chain:e.chain}]),nl.p_.setDefaultCaipNetwork(e.defaultChain,e.chain),nl.Hd.setProjectId(e.projectId),nl.Hd.setAllWallets(e.allWallets),nl.Hd.setIncludeWalletIds(e.includeWalletIds),nl.Hd.setExcludeWalletIds(e.excludeWalletIds),nl.Hd.setFeaturedWalletIds(e.featuredWalletIds),nl.Hd.setTokens(e.tokens),nl.Hd.setTermsConditionsUrl(e.termsConditionsUrl),nl.Hd.setPrivacyPolicyUrl(e.privacyPolicyUrl),nl.Hd.setEnableAnalytics(e.enableAnalytics),nl.Hd.setCustomWallets(e.customWallets),nl.Hd.setIsUniversalProvider(e.isUniversalProvider),nl.Hd.setSdkVersion(e._sdkVersion),nl.Hd.setOnrampEnabled(!1!==e.enableOnramp),e.metadata&&nl.Hd.setMetadata(e.metadata),e.themeMode&&nl.Wn.setThemeMode(e.themeMode),e.themeVariables&&nl.Wn.setThemeVariables(e.themeVariables),e.disableAppend&&nl.Hd.setDisableAppend(Boolean(e.disableAppend)),e.allowUnsupportedChain&&nl.p_.setAllowUnsupportedChain(e.allowUnsupportedChain),e.siweControllerClient){const{SIWEController:t}=await n.e(293).then(n.bind(n,6293));t.setSIWEClient(e.siweControllerClient)}}async initOrContinue(){return this.initPromise||Fp||!nl.wE.isClient()||(Fp=!0,this.initPromise=new Promise((async e=>{await Promise.all([Promise.resolve().then(n.bind(n,7636)),n.e(787).then(n.bind(n,1787))]);const t=document.createElement("w3m-modal");nl.Hd.state.disableAppend||document.body.insertAdjacentElement("beforeend",t),e()}))),this.initPromise}}var $p=n(4678),qp=n.n($p),Hp=n(139),Wp=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},Vp=function(e,t,n){this.name=e,this.version=t,this.os=n,this.type="browser"},Kp=function(e){this.version=e,this.type="node",this.name="node",this.os=Hp.platform},Zp=function(e,t,n,r){this.name=e,this.version=t,this.os=n,this.bot=r,this.type="bot-device"},Gp=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},Yp=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},Qp=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,Jp=3,Xp=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],eg=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function tg(e){return e?rg(e):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new Yp:"undefined"!=typeof navigator?rg(navigator.userAgent):void 0!==Hp&&Hp.version?new Kp(Hp.version.slice(1)):null}function ng(e){return""!==e&&Xp.reduce((function(t,n){var r=n[0],i=n[1];if(t)return t;var o=i.exec(e);return!!o&&[r,o]}),!1)}function rg(e){var t=ng(e);if(!t)return null;var n=t[0],r=t[1];if("searchbot"===n)return new Gp;var i=r[1]&&r[1].split(".").join("_").split("_").slice(0,3);i?i.length<Jp&&(i=Wp(Wp([],i,!0),function(e){for(var t=[],n=0;n<e;n++)t.push("0");return t}(Jp-i.length),!0)):i=[];var o=i.join("."),s=function(e){for(var t=0,n=eg.length;t<n;t++){var r=eg[t],i=r[0];if(r[1].exec(e))return i}return null}(e),a=Qp.exec(e);return a&&a[1]?new Zp(n,o,s,a[1]):new Vp(n,o,s)}var ig=n(1259),og=n(1411),sg=n(1606),ag=n(9112),cg=n(2919),lg=n(2283),ug=n(1839),dg=n(3959),hg=n(5445);function fg(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?globalThis.Buffer.allocUnsafe(e):new Uint8Array(e)}function pg(e,t){t||(t=e.reduce(((e,t)=>e+t.length),0));const n=fg(t);let r=0;for(const t of e)n.set(t,r),r+=t.length;return n}var gg=n(1529);function mg(e,t,n,r){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:n},decoder:{decode:r}}}const yg=mg("utf8","u",(e=>"u"+new TextDecoder("utf8").decode(e)),(e=>(new TextEncoder).encode(e.substring(1)))),vg=mg("ascii","a",(e=>{let t="a";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t}),(e=>{const t=fg((e=e.substring(1)).length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t})),bg={utf8:yg,"utf-8":yg,hex:gg.Fo.base16,latin1:vg,ascii:vg,binary:vg,...gg.Fo};function wg(e,t="utf8"){const n=bg[t];if(!n)throw new Error(`Unsupported encoding "${t}"`);return"utf8"!==t&&"utf-8"!==t||null==globalThis.Buffer||null==globalThis.Buffer.from?n.decoder.decode(`${n.prefix}${e}`):globalThis.Buffer.from(e,"utf8")}function Ag(e,t="utf8"){const n=bg[t];if(!n)throw new Error(`Unsupported encoding "${t}"`);return"utf8"!==t&&"utf-8"!==t||null==globalThis.Buffer||null==globalThis.Buffer.from?n.encoder.encode(e).substring(1):globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8")}var _g=n(1151),Eg=n(139),Cg=n(2512).Buffer;const kg=":";function Sg(e){const[t,n]=e.split(kg);return{namespace:t,reference:n}}function xg(e,t=[]){const n=[];return Object.keys(e).forEach((r=>{if(t.length&&!t.includes(r))return;const i=e[r];n.push(...i.accounts)})),n}function Mg(e,t){return e.includes(":")?[e]:t.chains||[]}var Ig=Object.defineProperty,Tg=Object.getOwnPropertySymbols,Rg=Object.prototype.hasOwnProperty,Pg=Object.prototype.propertyIsEnumerable,Og=(e,t,n)=>t in e?Ig(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ng=(e,t)=>{for(var n in t||(t={}))Rg.call(t,n)&&Og(e,n,t[n]);if(Tg)for(var n of Tg(t))Pg.call(t,n)&&Og(e,n,t[n]);return e};const Lg="ReactNative",Dg={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},Bg="js";function Ug(){return typeof Eg<"u"&&typeof Eg.versions<"u"&&typeof Eg.versions.node<"u"}function jg(){return!(0,og.getDocument)()&&!!(0,og.getNavigator)()&&navigator.product===Lg}function Fg(){return!Ug()&&!!(0,og.getNavigator)()&&!!(0,og.getDocument)()}function zg(){return jg()?Dg.reactNative:Ug()?Dg.node:Fg()?Dg.browser:Dg.unknown}function $g(e,t,r){const i=function(){if(zg()===Dg.reactNative&&typeof n.g<"u"&&typeof(null==n.g?void 0:n.g.Platform)<"u"){const{OS:e,Version:t}=n.g.Platform;return[e,t].join("-")}const e=tg();if(null===e)return"unknown";const t=e.os?e.os.replace(" ","").toLowerCase():"unknown";return"browser"===e.type?[t,e.name,e.version].join("-"):[t,e.version].join("-")}(),o=function(){var e;const t=zg();return t===Dg.browser?[t,(null==(e=(0,og.getLocation)())?void 0:e.host)||"unknown"].join(":"):t}();return[[e,t].join("-"),[Bg,r].join("-"),i,o].join("/")}function qg({protocol:e,version:t,relayUrl:n,sdkVersion:r,auth:i,projectId:o,useOnCloseEvent:s,bundleId:a}){const c=n.split("?"),l={auth:i,ua:$g(e,t,r),projectId:o,useOnCloseEvent:s||void 0,origin:a||void 0},u=function(e,t){let n=ag.parse(e);return n=Ng(Ng({},n),t),ag.stringify(n)}(c[1]||"",l);return c[0]+"?"+u}function Hg(e,t){return e.filter((e=>t.includes(e))).length===e.length}function Wg(e){return Object.fromEntries(e.entries())}function Vg(e){return new Map(Object.entries(e))}function Kg(e=ig.FIVE_MINUTES,t){const n=(0,ig.toMiliseconds)(e||ig.FIVE_MINUTES);let r,i,o;return{resolve:e=>{o&&r&&(clearTimeout(o),r(e))},reject:e=>{o&&i&&(clearTimeout(o),i(e))},done:()=>new Promise(((e,s)=>{o=setTimeout((()=>{s(new Error(t))}),n),r=e,i=s}))}}function Zg(e,t,n){return new Promise((async(r,i)=>{const o=setTimeout((()=>i(new Error(n))),t);try{r(await e)}catch(e){i(e)}clearTimeout(o)}))}function Gg(e,t){if("string"==typeof t&&t.startsWith(`${e}:`))return t;if("topic"===e.toLowerCase()){if("string"!=typeof t)throw new Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}if("id"===e.toLowerCase()){if("number"!=typeof t)throw new Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw new Error(`Unknown expirer target type: ${e}`)}function Yg(e){const[t,n]=e.split(":"),r={id:void 0,topic:void 0};if("topic"===t&&"string"==typeof n)r.topic=n;else{if("id"!==t||!Number.isInteger(Number(n)))throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${n}`);r.id=Number(n)}return r}function Qg(e,t){return(0,ig.fromMiliseconds)((t||Date.now())+(0,ig.toMiliseconds)(e))}function Jg(e){return Date.now()>=(0,ig.toMiliseconds)(e)}function Xg(e,t){return`${e}${t?`:${t}`:""}`}function em(e=[],t=[]){return[...new Set([...e,...t])]}var tm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof n.g<"u"?n.g:typeof self<"u"?self:{};var nm={exports:{}};!function(e){!function(){var t="input is invalid type",n="object"==typeof window,r=n?window:{};r.JS_SHA3_NO_WINDOW&&(n=!1);var i=!n&&"object"==typeof self;!r.JS_SHA3_NO_NODE_JS&&"object"==typeof Eg&&Eg.versions&&Eg.versions.node?r=tm:i&&(r=self);var o=!r.JS_SHA3_NO_COMMON_JS&&e.exports,s=!r.JS_SHA3_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",a="0123456789abcdef".split(""),c=[4,1024,262144,67108864],l=[0,8,16,24],u=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],d=[224,256,384,512],h=[128,256],f=["hex","buffer","arrayBuffer","array","digest"],p={128:168,256:136};(r.JS_SHA3_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),s&&(r.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});for(var g=function(e,t,n){return function(r){return new T(e,t,e).update(r)[n]()}},m=function(e,t,n){return function(r,i){return new T(e,t,i).update(r)[n]()}},y=function(e,t,n){return function(t,r,i,o){return _["cshake"+e].update(t,r,i,o)[n]()}},v=function(e,t,n){return function(t,r,i,o){return _["kmac"+e].update(t,r,i,o)[n]()}},b=function(e,t,n,r){for(var i=0;i<f.length;++i){var o=f[i];e[o]=t(n,r,o)}return e},w=function(e,t){var n=g(e,t,"hex");return n.create=function(){return new T(e,t,e)},n.update=function(e){return n.create().update(e)},b(n,g,e,t)},A=[{name:"keccak",padding:[1,256,65536,16777216],bits:d,createMethod:w},{name:"sha3",padding:[6,1536,393216,100663296],bits:d,createMethod:w},{name:"shake",padding:[31,7936,2031616,520093696],bits:h,createMethod:function(e,t){var n=m(e,t,"hex");return n.create=function(n){return new T(e,t,n)},n.update=function(e,t){return n.create(t).update(e)},b(n,m,e,t)}},{name:"cshake",padding:c,bits:h,createMethod:function(e,t){var n=p[e],r=y(e,0,"hex");return r.create=function(r,i,o){return i||o?new T(e,t,r).bytepad([i,o],n):_["shake"+e].create(r)},r.update=function(e,t,n,i){return r.create(t,n,i).update(e)},b(r,y,e,t)}},{name:"kmac",padding:c,bits:h,createMethod:function(e,t){var n=p[e],r=v(e,0,"hex");return r.create=function(r,i,o){return new R(e,t,i).bytepad(["KMAC",o],n).bytepad([r],n)},r.update=function(e,t,n,i){return r.create(e,n,i).update(t)},b(r,v,e,t)}}],_={},E=[],C=0;C<A.length;++C)for(var k=A[C],S=k.bits,x=0;x<S.length;++x){var M=k.name+"_"+S[x];if(E.push(M),_[M]=k.createMethod(S[x],k.padding),"sha3"!==k.name){var I=k.name+S[x];E.push(I),_[I]=_[M]}}function T(e,t,n){this.blocks=[],this.s=[],this.padding=t,this.outputBits=n,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(e<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=n>>5,this.extraBytes=(31&n)>>3;for(var r=0;r<50;++r)this.s[r]=0}function R(e,t,n){T.call(this,e,t,n)}T.prototype.update=function(e){if(this.finalized)throw new Error("finalize already called");var n,r=typeof e;if("string"!==r){if("object"!==r)throw new Error(t);if(null===e)throw new Error(t);if(s&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||s&&ArrayBuffer.isView(e)))throw new Error(t);n=!0}for(var i,o,a=this.blocks,c=this.byteCount,u=e.length,d=this.blockCount,h=0,f=this.s;h<u;){if(this.reset)for(this.reset=!1,a[0]=this.block,i=1;i<d+1;++i)a[i]=0;if(n)for(i=this.start;h<u&&i<c;++h)a[i>>2]|=e[h]<<l[3&i++];else for(i=this.start;h<u&&i<c;++h)(o=e.charCodeAt(h))<128?a[i>>2]|=o<<l[3&i++]:o<2048?(a[i>>2]|=(192|o>>6)<<l[3&i++],a[i>>2]|=(128|63&o)<<l[3&i++]):o<55296||o>=57344?(a[i>>2]|=(224|o>>12)<<l[3&i++],a[i>>2]|=(128|o>>6&63)<<l[3&i++],a[i>>2]|=(128|63&o)<<l[3&i++]):(o=65536+((1023&o)<<10|1023&e.charCodeAt(++h)),a[i>>2]|=(240|o>>18)<<l[3&i++],a[i>>2]|=(128|o>>12&63)<<l[3&i++],a[i>>2]|=(128|o>>6&63)<<l[3&i++],a[i>>2]|=(128|63&o)<<l[3&i++]);if(this.lastByteIndex=i,i>=c){for(this.start=i-c,this.block=a[d],i=0;i<d;++i)f[i]^=a[i];P(f),this.reset=!0}else this.start=i}return this},T.prototype.encode=function(e,t){var n=255&e,r=1,i=[n];for(n=255&(e>>=8);n>0;)i.unshift(n),n=255&(e>>=8),++r;return t?i.push(r):i.unshift(r),this.update(i),i.length},T.prototype.encodeString=function(e){var n,r=typeof e;if("string"!==r){if("object"!==r)throw new Error(t);if(null===e)throw new Error(t);if(s&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||s&&ArrayBuffer.isView(e)))throw new Error(t);n=!0}var i=0,o=e.length;if(n)i=o;else for(var a=0;a<e.length;++a){var c=e.charCodeAt(a);c<128?i+=1:c<2048?i+=2:c<55296||c>=57344?i+=3:(c=65536+((1023&c)<<10|1023&e.charCodeAt(++a)),i+=4)}return i+=this.encode(8*i),this.update(e),i},T.prototype.bytepad=function(e,t){for(var n=this.encode(t),r=0;r<e.length;++r)n+=this.encodeString(e[r]);var i=t-n%t,o=[];return o.length=i,this.update(o),this},T.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex,n=this.blockCount,r=this.s;if(e[t>>2]|=this.padding[3&t],this.lastByteIndex===this.byteCount)for(e[0]=e[n],t=1;t<n+1;++t)e[t]=0;for(e[n-1]|=2147483648,t=0;t<n;++t)r[t]^=e[t];P(r)}},T.prototype.toString=T.prototype.hex=function(){this.finalize();for(var e,t=this.blockCount,n=this.s,r=this.outputBlocks,i=this.extraBytes,o=0,s=0,c="";s<r;){for(o=0;o<t&&s<r;++o,++s)e=n[o],c+=a[e>>4&15]+a[15&e]+a[e>>12&15]+a[e>>8&15]+a[e>>20&15]+a[e>>16&15]+a[e>>28&15]+a[e>>24&15];s%t==0&&(P(n),o=0)}return i&&(e=n[o],c+=a[e>>4&15]+a[15&e],i>1&&(c+=a[e>>12&15]+a[e>>8&15]),i>2&&(c+=a[e>>20&15]+a[e>>16&15])),c},T.prototype.arrayBuffer=function(){this.finalize();var e,t=this.blockCount,n=this.s,r=this.outputBlocks,i=this.extraBytes,o=0,s=0,a=this.outputBits>>3;e=i?new ArrayBuffer(r+1<<2):new ArrayBuffer(a);for(var c=new Uint32Array(e);s<r;){for(o=0;o<t&&s<r;++o,++s)c[s]=n[o];s%t==0&&P(n)}return i&&(c[o]=n[o],e=e.slice(0,a)),e},T.prototype.buffer=T.prototype.arrayBuffer,T.prototype.digest=T.prototype.array=function(){this.finalize();for(var e,t,n=this.blockCount,r=this.s,i=this.outputBlocks,o=this.extraBytes,s=0,a=0,c=[];a<i;){for(s=0;s<n&&a<i;++s,++a)e=a<<2,t=r[s],c[e]=255&t,c[e+1]=t>>8&255,c[e+2]=t>>16&255,c[e+3]=t>>24&255;a%n==0&&P(r)}return o&&(e=a<<2,t=r[s],c[e]=255&t,o>1&&(c[e+1]=t>>8&255),o>2&&(c[e+2]=t>>16&255)),c},R.prototype=new T,R.prototype.finalize=function(){return this.encode(this.outputBits,!0),T.prototype.finalize.call(this)};var P=function(e){var t,n,r,i,o,s,a,c,l,d,h,f,p,g,m,y,v,b,w,A,_,E,C,k,S,x,M,I,T,R,P,O,N,L,D,B,U,j,F,z,$,q,H,W,V,K,Z,G,Y,Q,J,X,ee,te,ne,re,ie,oe,se,ae,ce,le,ue;for(r=0;r<48;r+=2)i=e[0]^e[10]^e[20]^e[30]^e[40],o=e[1]^e[11]^e[21]^e[31]^e[41],s=e[2]^e[12]^e[22]^e[32]^e[42],a=e[3]^e[13]^e[23]^e[33]^e[43],c=e[4]^e[14]^e[24]^e[34]^e[44],l=e[5]^e[15]^e[25]^e[35]^e[45],d=e[6]^e[16]^e[26]^e[36]^e[46],h=e[7]^e[17]^e[27]^e[37]^e[47],t=(f=e[8]^e[18]^e[28]^e[38]^e[48])^(s<<1|a>>>31),n=(p=e[9]^e[19]^e[29]^e[39]^e[49])^(a<<1|s>>>31),e[0]^=t,e[1]^=n,e[10]^=t,e[11]^=n,e[20]^=t,e[21]^=n,e[30]^=t,e[31]^=n,e[40]^=t,e[41]^=n,t=i^(c<<1|l>>>31),n=o^(l<<1|c>>>31),e[2]^=t,e[3]^=n,e[12]^=t,e[13]^=n,e[22]^=t,e[23]^=n,e[32]^=t,e[33]^=n,e[42]^=t,e[43]^=n,t=s^(d<<1|h>>>31),n=a^(h<<1|d>>>31),e[4]^=t,e[5]^=n,e[14]^=t,e[15]^=n,e[24]^=t,e[25]^=n,e[34]^=t,e[35]^=n,e[44]^=t,e[45]^=n,t=c^(f<<1|p>>>31),n=l^(p<<1|f>>>31),e[6]^=t,e[7]^=n,e[16]^=t,e[17]^=n,e[26]^=t,e[27]^=n,e[36]^=t,e[37]^=n,e[46]^=t,e[47]^=n,t=d^(i<<1|o>>>31),n=h^(o<<1|i>>>31),e[8]^=t,e[9]^=n,e[18]^=t,e[19]^=n,e[28]^=t,e[29]^=n,e[38]^=t,e[39]^=n,e[48]^=t,e[49]^=n,g=e[0],m=e[1],K=e[11]<<4|e[10]>>>28,Z=e[10]<<4|e[11]>>>28,I=e[20]<<3|e[21]>>>29,T=e[21]<<3|e[20]>>>29,ae=e[31]<<9|e[30]>>>23,ce=e[30]<<9|e[31]>>>23,q=e[40]<<18|e[41]>>>14,H=e[41]<<18|e[40]>>>14,L=e[2]<<1|e[3]>>>31,D=e[3]<<1|e[2]>>>31,y=e[13]<<12|e[12]>>>20,v=e[12]<<12|e[13]>>>20,G=e[22]<<10|e[23]>>>22,Y=e[23]<<10|e[22]>>>22,R=e[33]<<13|e[32]>>>19,P=e[32]<<13|e[33]>>>19,le=e[42]<<2|e[43]>>>30,ue=e[43]<<2|e[42]>>>30,te=e[5]<<30|e[4]>>>2,ne=e[4]<<30|e[5]>>>2,B=e[14]<<6|e[15]>>>26,U=e[15]<<6|e[14]>>>26,b=e[25]<<11|e[24]>>>21,w=e[24]<<11|e[25]>>>21,Q=e[34]<<15|e[35]>>>17,J=e[35]<<15|e[34]>>>17,O=e[45]<<29|e[44]>>>3,N=e[44]<<29|e[45]>>>3,k=e[6]<<28|e[7]>>>4,S=e[7]<<28|e[6]>>>4,re=e[17]<<23|e[16]>>>9,ie=e[16]<<23|e[17]>>>9,j=e[26]<<25|e[27]>>>7,F=e[27]<<25|e[26]>>>7,A=e[36]<<21|e[37]>>>11,_=e[37]<<21|e[36]>>>11,X=e[47]<<24|e[46]>>>8,ee=e[46]<<24|e[47]>>>8,W=e[8]<<27|e[9]>>>5,V=e[9]<<27|e[8]>>>5,x=e[18]<<20|e[19]>>>12,M=e[19]<<20|e[18]>>>12,oe=e[29]<<7|e[28]>>>25,se=e[28]<<7|e[29]>>>25,z=e[38]<<8|e[39]>>>24,$=e[39]<<8|e[38]>>>24,E=e[48]<<14|e[49]>>>18,C=e[49]<<14|e[48]>>>18,e[0]=g^~y&b,e[1]=m^~v&w,e[10]=k^~x&I,e[11]=S^~M&T,e[20]=L^~B&j,e[21]=D^~U&F,e[30]=W^~K&G,e[31]=V^~Z&Y,e[40]=te^~re&oe,e[41]=ne^~ie&se,e[2]=y^~b&A,e[3]=v^~w&_,e[12]=x^~I&R,e[13]=M^~T&P,e[22]=B^~j&z,e[23]=U^~F&$,e[32]=K^~G&Q,e[33]=Z^~Y&J,e[42]=re^~oe&ae,e[43]=ie^~se&ce,e[4]=b^~A&E,e[5]=w^~_&C,e[14]=I^~R&O,e[15]=T^~P&N,e[24]=j^~z&q,e[25]=F^~$&H,e[34]=G^~Q&X,e[35]=Y^~J&ee,e[44]=oe^~ae&le,e[45]=se^~ce&ue,e[6]=A^~E&g,e[7]=_^~C&m,e[16]=R^~O&k,e[17]=P^~N&S,e[26]=z^~q&L,e[27]=$^~H&D,e[36]=Q^~X&W,e[37]=J^~ee&V,e[46]=ae^~le&te,e[47]=ce^~ue&ne,e[8]=E^~g&y,e[9]=C^~m&v,e[18]=O^~k&x,e[19]=N^~S&M,e[28]=q^~L&B,e[29]=H^~D&U,e[38]=X^~W&K,e[39]=ee^~V&Z,e[48]=le^~te&re,e[49]=ue^~ne&ie,e[0]^=u[r],e[1]^=u[r+1]};if(o)e.exports=_;else for(C=0;C<E.length;++C)r[E[C]]=_[E[C]]}()}(nm);var rm=nm.exports;let im=!1,om=!1;const sm={debug:1,default:2,info:2,warning:3,error:4,off:5};let am=sm.default,cm=null;const lm=function(){try{const e=[];if(["NFD","NFC","NFKD","NFKC"].forEach((t=>{try{if("test"!=="test".normalize(t))throw new Error("bad normalize")}catch{e.push(t)}})),e.length)throw new Error("missing "+e.join(", "));if(String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769))throw new Error("broken implementation")}catch(e){return e.message}return null}();var um,dm;!function(e){e.DEBUG="DEBUG",e.INFO="INFO",e.WARNING="WARNING",e.ERROR="ERROR",e.OFF="OFF"}(um||(um={})),function(e){e.UNKNOWN_ERROR="UNKNOWN_ERROR",e.NOT_IMPLEMENTED="NOT_IMPLEMENTED",e.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",e.NETWORK_ERROR="NETWORK_ERROR",e.SERVER_ERROR="SERVER_ERROR",e.TIMEOUT="TIMEOUT",e.BUFFER_OVERRUN="BUFFER_OVERRUN",e.NUMERIC_FAULT="NUMERIC_FAULT",e.MISSING_NEW="MISSING_NEW",e.INVALID_ARGUMENT="INVALID_ARGUMENT",e.MISSING_ARGUMENT="MISSING_ARGUMENT",e.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",e.CALL_EXCEPTION="CALL_EXCEPTION",e.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",e.NONCE_EXPIRED="NONCE_EXPIRED",e.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",e.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",e.TRANSACTION_REPLACED="TRANSACTION_REPLACED",e.ACTION_REJECTED="ACTION_REJECTED"}(dm||(dm={}));const hm="0123456789abcdef";class fm{constructor(e){Object.defineProperty(this,"version",{enumerable:!0,value:e,writable:!1})}_log(e,t){const n=e.toLowerCase();null==sm[n]&&this.throwArgumentError("invalid log level name","logLevel",e),!(am>sm[n])&&console.log.apply(console,t)}debug(...e){this._log(fm.levels.DEBUG,e)}info(...e){this._log(fm.levels.INFO,e)}warn(...e){this._log(fm.levels.WARNING,e)}makeError(e,t,n){if(om)return this.makeError("censored error",t,{});t||(t=fm.errors.UNKNOWN_ERROR),n||(n={});const r=[];Object.keys(n).forEach((e=>{const t=n[e];try{if(t instanceof Uint8Array){let n="";for(let e=0;e<t.length;e++)n+=hm[t[e]>>4],n+=hm[15&t[e]];r.push(e+"=Uint8Array(0x"+n+")")}else r.push(e+"="+JSON.stringify(t))}catch{r.push(e+"="+JSON.stringify(n[e].toString()))}})),r.push(`code=${t}`),r.push(`version=${this.version}`);const i=e;let o="";switch(t){case dm.NUMERIC_FAULT:{o="NUMERIC_FAULT";const t=e;switch(t){case"overflow":case"underflow":case"division-by-zero":o+="-"+t;break;case"negative-power":case"negative-width":o+="-unsupported";break;case"unbound-bitwise-result":o+="-unbound-result"}break}case dm.CALL_EXCEPTION:case dm.INSUFFICIENT_FUNDS:case dm.MISSING_NEW:case dm.NONCE_EXPIRED:case dm.REPLACEMENT_UNDERPRICED:case dm.TRANSACTION_REPLACED:case dm.UNPREDICTABLE_GAS_LIMIT:o=t}o&&(e+=" [ See: https://links.ethers.org/v5-errors-"+o+" ]"),r.length&&(e+=" ("+r.join(", ")+")");const s=new Error(e);return s.reason=i,s.code=t,Object.keys(n).forEach((function(e){s[e]=n[e]})),s}throwError(e,t,n){throw this.makeError(e,t,n)}throwArgumentError(e,t,n){return this.throwError(e,fm.errors.INVALID_ARGUMENT,{argument:t,value:n})}assert(e,t,n,r){e||this.throwError(t,n,r)}assertArgument(e,t,n,r){e||this.throwArgumentError(t,n,r)}checkNormalize(e){lm&&this.throwError("platform missing String.prototype.normalize",fm.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:lm})}checkSafeUint53(e,t){"number"==typeof e&&(null==t&&(t="value not safe"),(e<0||e>=9007199254740991)&&this.throwError(t,fm.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:e}),e%1&&this.throwError(t,fm.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:e}))}checkArgumentCount(e,t,n){n=n?": "+n:"",e<t&&this.throwError("missing argument"+n,fm.errors.MISSING_ARGUMENT,{count:e,expectedCount:t}),e>t&&this.throwError("too many arguments"+n,fm.errors.UNEXPECTED_ARGUMENT,{count:e,expectedCount:t})}checkNew(e,t){(e===Object||null==e)&&this.throwError("missing new",fm.errors.MISSING_NEW,{name:t.name})}checkAbstract(e,t){e===t?this.throwError("cannot instantiate abstract class "+JSON.stringify(t.name)+" directly; use a sub-class",fm.errors.UNSUPPORTED_OPERATION,{name:e.name,operation:"new"}):(e===Object||null==e)&&this.throwError("missing new",fm.errors.MISSING_NEW,{name:t.name})}static globalLogger(){return cm||(cm=new fm("logger/5.7.0")),cm}static setCensorship(e,t){if(!e&&t&&this.globalLogger().throwError("cannot permanently disable censorship",fm.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),im){if(!e)return;this.globalLogger().throwError("error censorship permanent",fm.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}om=!!e,im=!!t}static setLogLevel(e){const t=sm[e.toLowerCase()];null!=t?am=t:fm.globalLogger().warn("invalid log level - "+e)}static from(e){return new fm(e)}}fm.errors=dm,fm.levels=um;const pm=new fm("bytes/5.7.0");function gm(e){return!!e.toHexString}function mm(e){return e.slice||(e.slice=function(){const t=Array.prototype.slice.call(arguments);return mm(new Uint8Array(Array.prototype.slice.apply(e,t)))}),e}function ym(e){return"number"==typeof e&&e==e&&e%1==0}function vm(e){if(null==e)return!1;if(e.constructor===Uint8Array)return!0;if("string"==typeof e||!ym(e.length)||e.length<0)return!1;for(let t=0;t<e.length;t++){const n=e[t];if(!ym(n)||n<0||n>=256)return!1}return!0}function bm(e,t){if(t||(t={}),"number"==typeof e){pm.checkSafeUint53(e,"invalid arrayify value");const t=[];for(;e;)t.unshift(255&e),e=parseInt(String(e/256));return 0===t.length&&t.push(0),mm(new Uint8Array(t))}if(t.allowMissingPrefix&&"string"==typeof e&&"0x"!==e.substring(0,2)&&(e="0x"+e),gm(e)&&(e=e.toHexString()),wm(e)){let n=e.substring(2);n.length%2&&("left"===t.hexPad?n="0"+n:"right"===t.hexPad?n+="0":pm.throwArgumentError("hex data is odd-length","value",e));const r=[];for(let e=0;e<n.length;e+=2)r.push(parseInt(n.substring(e,e+2),16));return mm(new Uint8Array(r))}return vm(e)?mm(new Uint8Array(e)):pm.throwArgumentError("invalid arrayify value","value",e)}function wm(e,t){return!("string"!=typeof e||!e.match(/^0x[0-9A-Fa-f]*$/)||t&&e.length!==2+2*t)}const Am="0123456789abcdef";function _m(e,t){if(t||(t={}),"number"==typeof e){pm.checkSafeUint53(e,"invalid hexlify value");let t="";for(;e;)t=Am[15&e]+t,e=Math.floor(e/16);return t.length?(t.length%2&&(t="0"+t),"0x"+t):"0x00"}if("bigint"==typeof e)return(e=e.toString(16)).length%2?"0x0"+e:"0x"+e;if(t.allowMissingPrefix&&"string"==typeof e&&"0x"!==e.substring(0,2)&&(e="0x"+e),gm(e))return e.toHexString();if(wm(e))return e.length%2&&("left"===t.hexPad?e="0x0"+e.substring(2):"right"===t.hexPad?e+="0":pm.throwArgumentError("hex data is odd-length","value",e)),e.toLowerCase();if(vm(e)){let t="0x";for(let n=0;n<e.length;n++){let r=e[n];t+=Am[(240&r)>>4]+Am[15&r]}return t}return pm.throwArgumentError("invalid hexlify value","value",e)}function Em(e,t,n){return"string"!=typeof e?e=_m(e):(!wm(e)||e.length%2)&&pm.throwArgumentError("invalid hexData","value",e),t=2+2*t,null!=n?"0x"+e.substring(t,2+2*n):"0x"+e.substring(t)}function Cm(e,t){for("string"!=typeof e?e=_m(e):wm(e)||pm.throwArgumentError("invalid hex string","value",e),e.length>2*t+2&&pm.throwArgumentError("value out of range","value",arguments[1]);e.length<2*t+2;)e="0x0"+e.substring(2);return e}function km(e){const t={r:"0x",s:"0x",_vs:"0x",recoveryParam:0,v:0,yParityAndS:"0x",compact:"0x"};if(function(e){return wm(e)&&!(e.length%2)||vm(e)}(e)){let n=bm(e);64===n.length?(t.v=27+(n[32]>>7),n[32]&=127,t.r=_m(n.slice(0,32)),t.s=_m(n.slice(32,64))):65===n.length?(t.r=_m(n.slice(0,32)),t.s=_m(n.slice(32,64)),t.v=n[64]):pm.throwArgumentError("invalid signature string","signature",e),t.v<27&&(0===t.v||1===t.v?t.v+=27:pm.throwArgumentError("signature invalid v byte","signature",e)),t.recoveryParam=1-t.v%2,t.recoveryParam&&(n[32]|=128),t._vs=_m(n.slice(32,64))}else{if(t.r=e.r,t.s=e.s,t.v=e.v,t.recoveryParam=e.recoveryParam,t._vs=e._vs,null!=t._vs){const n=function(e,t){(e=bm(e)).length>t&&pm.throwArgumentError("value out of range","value",arguments[0]);const n=new Uint8Array(t);return n.set(e,t-e.length),mm(n)}(bm(t._vs),32);t._vs=_m(n);const r=n[0]>=128?1:0;null==t.recoveryParam?t.recoveryParam=r:t.recoveryParam!==r&&pm.throwArgumentError("signature recoveryParam mismatch _vs","signature",e),n[0]&=127;const i=_m(n);null==t.s?t.s=i:t.s!==i&&pm.throwArgumentError("signature v mismatch _vs","signature",e)}if(null==t.recoveryParam)null==t.v?pm.throwArgumentError("signature missing v and recoveryParam","signature",e):0===t.v||1===t.v?t.recoveryParam=t.v:t.recoveryParam=1-t.v%2;else if(null==t.v)t.v=27+t.recoveryParam;else{const n=0===t.v||1===t.v?t.v:1-t.v%2;t.recoveryParam!==n&&pm.throwArgumentError("signature recoveryParam mismatch v","signature",e)}null!=t.r&&wm(t.r)?t.r=Cm(t.r,32):pm.throwArgumentError("signature missing or invalid r","signature",e),null!=t.s&&wm(t.s)?t.s=Cm(t.s,32):pm.throwArgumentError("signature missing or invalid s","signature",e);const n=bm(t.s);n[0]>=128&&pm.throwArgumentError("signature s out of range","signature",e),t.recoveryParam&&(n[0]|=128);const r=_m(n);t._vs&&(wm(t._vs)||pm.throwArgumentError("signature invalid _vs","signature",e),t._vs=Cm(t._vs,32)),null==t._vs?t._vs=r:t._vs!==r&&pm.throwArgumentError("signature _vs mismatch v and s","signature",e)}return t.yParityAndS=t._vs,t.compact=t.r+t.yParityAndS.substring(2),t}function Sm(e){return"0x"+rm.keccak_256(bm(e))}var xm={exports:{}},Mm=function(e){var t=e.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}(Object.freeze({__proto__:null,default:{}}));!function(e){!function(e,t){function n(e,t){if(!e)throw new Error(t||"Assertion failed")}function r(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}function i(e,t,n){if(i.isBN(e))return e;this.negative=0,this.words=null,this.length=0,this.red=null,null!==e&&(("le"===t||"be"===t)&&(n=t,t=10),this._init(e||0,t||10,n||"be"))}var o;"object"==typeof e?e.exports=i:t.BN=i,i.BN=i,i.wordSize=26;try{o=typeof window<"u"&&typeof window.Buffer<"u"?window.Buffer:Mm.Buffer}catch{}function s(e,t){var r=e.charCodeAt(t);return r>=48&&r<=57?r-48:r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:void n(!1,"Invalid character in "+e)}function a(e,t,n){var r=s(e,n);return n-1>=t&&(r|=s(e,n-1)<<4),r}function c(e,t,r,i){for(var o=0,s=0,a=Math.min(e.length,r),c=t;c<a;c++){var l=e.charCodeAt(c)-48;o*=i,s=l>=49?l-49+10:l>=17?l-17+10:l,n(l>=0&&s<i,"Invalid character"),o+=s}return o}function l(e,t){e.words=t.words,e.length=t.length,e.negative=t.negative,e.red=t.red}if(i.isBN=function(e){return e instanceof i||null!==e&&"object"==typeof e&&e.constructor.wordSize===i.wordSize&&Array.isArray(e.words)},i.max=function(e,t){return e.cmp(t)>0?e:t},i.min=function(e,t){return e.cmp(t)<0?e:t},i.prototype._init=function(e,t,r){if("number"==typeof e)return this._initNumber(e,t,r);if("object"==typeof e)return this._initArray(e,t,r);"hex"===t&&(t=16),n(t===(0|t)&&t>=2&&t<=36);var i=0;"-"===(e=e.toString().replace(/\s+/g,""))[0]&&(i++,this.negative=1),i<e.length&&(16===t?this._parseHex(e,i,r):(this._parseBase(e,t,i),"le"===r&&this._initArray(this.toArray(),t,r)))},i.prototype._initNumber=function(e,t,r){e<0&&(this.negative=1,e=-e),e<67108864?(this.words=[67108863&e],this.length=1):e<4503599627370496?(this.words=[67108863&e,e/67108864&67108863],this.length=2):(n(e<9007199254740992),this.words=[67108863&e,e/67108864&67108863,1],this.length=3),"le"===r&&this._initArray(this.toArray(),t,r)},i.prototype._initArray=function(e,t,r){if(n("number"==typeof e.length),e.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(e.length/3),this.words=new Array(this.length);for(var i=0;i<this.length;i++)this.words[i]=0;var o,s,a=0;if("be"===r)for(i=e.length-1,o=0;i>=0;i-=3)s=e[i]|e[i-1]<<8|e[i-2]<<16,this.words[o]|=s<<a&67108863,this.words[o+1]=s>>>26-a&67108863,(a+=24)>=26&&(a-=26,o++);else if("le"===r)for(i=0,o=0;i<e.length;i+=3)s=e[i]|e[i+1]<<8|e[i+2]<<16,this.words[o]|=s<<a&67108863,this.words[o+1]=s>>>26-a&67108863,(a+=24)>=26&&(a-=26,o++);return this._strip()},i.prototype._parseHex=function(e,t,n){this.length=Math.ceil((e.length-t)/6),this.words=new Array(this.length);for(var r=0;r<this.length;r++)this.words[r]=0;var i,o=0,s=0;if("be"===n)for(r=e.length-1;r>=t;r-=2)i=a(e,t,r)<<o,this.words[s]|=67108863&i,o>=18?(o-=18,s+=1,this.words[s]|=i>>>26):o+=8;else for(r=(e.length-t)%2==0?t+1:t;r<e.length;r+=2)i=a(e,t,r)<<o,this.words[s]|=67108863&i,o>=18?(o-=18,s+=1,this.words[s]|=i>>>26):o+=8;this._strip()},i.prototype._parseBase=function(e,t,n){this.words=[0],this.length=1;for(var r=0,i=1;i<=67108863;i*=t)r++;r--,i=i/t|0;for(var o=e.length-n,s=o%r,a=Math.min(o,o-s)+n,l=0,u=n;u<a;u+=r)l=c(e,u,u+r,t),this.imuln(i),this.words[0]+l<67108864?this.words[0]+=l:this._iaddn(l);if(0!==s){var d=1;for(l=c(e,u,e.length,t),u=0;u<s;u++)d*=t;this.imuln(d),this.words[0]+l<67108864?this.words[0]+=l:this._iaddn(l)}this._strip()},i.prototype.copy=function(e){e.words=new Array(this.length);for(var t=0;t<this.length;t++)e.words[t]=this.words[t];e.length=this.length,e.negative=this.negative,e.red=this.red},i.prototype._move=function(e){l(e,this)},i.prototype.clone=function(){var e=new i(null);return this.copy(e),e},i.prototype._expand=function(e){for(;this.length<e;)this.words[this.length++]=0;return this},i.prototype._strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--;return this._normSign()},i.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},typeof Symbol<"u"&&"function"==typeof Symbol.for)try{i.prototype[Symbol.for("nodejs.util.inspect.custom")]=u}catch{i.prototype.inspect=u}else i.prototype.inspect=u;function u(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"}var d=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],h=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],f=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];i.prototype.toString=function(e,t){var r;if(t=0|t||1,16===(e=e||10)||"hex"===e){r="";for(var i=0,o=0,s=0;s<this.length;s++){var a=this.words[s],c=(16777215&(a<<i|o)).toString(16);o=a>>>24-i&16777215,(i+=2)>=26&&(i-=26,s--),r=0!==o||s!==this.length-1?d[6-c.length]+c+r:c+r}for(0!==o&&(r=o.toString(16)+r);r.length%t!=0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}if(e===(0|e)&&e>=2&&e<=36){var l=h[e],u=f[e];r="";var p=this.clone();for(p.negative=0;!p.isZero();){var g=p.modrn(u).toString(e);r=(p=p.idivn(u)).isZero()?g+r:d[l-g.length]+g+r}for(this.isZero()&&(r="0"+r);r.length%t!=0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}n(!1,"Base should be between 2 and 36")},i.prototype.toNumber=function(){var e=this.words[0];return 2===this.length?e+=67108864*this.words[1]:3===this.length&&1===this.words[2]?e+=4503599627370496+67108864*this.words[1]:this.length>2&&n(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-e:e},i.prototype.toJSON=function(){return this.toString(16,2)},o&&(i.prototype.toBuffer=function(e,t){return this.toArrayLike(o,e,t)}),i.prototype.toArray=function(e,t){return this.toArrayLike(Array,e,t)};function p(e,t,n){n.negative=t.negative^e.negative;var r=e.length+t.length|0;n.length=r,r=r-1|0;var i=0|e.words[0],o=0|t.words[0],s=i*o,a=67108863&s,c=s/67108864|0;n.words[0]=a;for(var l=1;l<r;l++){for(var u=c>>>26,d=67108863&c,h=Math.min(l,t.length-1),f=Math.max(0,l-e.length+1);f<=h;f++){var p=l-f|0;u+=(s=(i=0|e.words[p])*(o=0|t.words[f])+d)/67108864|0,d=67108863&s}n.words[l]=0|d,c=0|u}return 0!==c?n.words[l]=0|c:n.length--,n._strip()}i.prototype.toArrayLike=function(e,t,r){this._strip();var i=this.byteLength(),o=r||Math.max(1,i);n(i<=o,"byte array longer than desired length"),n(o>0,"Requested array length <= 0");var s=function(e,t){return e.allocUnsafe?e.allocUnsafe(t):new e(t)}(e,o);return this["_toArrayLike"+("le"===t?"LE":"BE")](s,i),s},i.prototype._toArrayLikeLE=function(e,t){for(var n=0,r=0,i=0,o=0;i<this.length;i++){var s=this.words[i]<<o|r;e[n++]=255&s,n<e.length&&(e[n++]=s>>8&255),n<e.length&&(e[n++]=s>>16&255),6===o?(n<e.length&&(e[n++]=s>>24&255),r=0,o=0):(r=s>>>24,o+=2)}if(n<e.length)for(e[n++]=r;n<e.length;)e[n++]=0},i.prototype._toArrayLikeBE=function(e,t){for(var n=e.length-1,r=0,i=0,o=0;i<this.length;i++){var s=this.words[i]<<o|r;e[n--]=255&s,n>=0&&(e[n--]=s>>8&255),n>=0&&(e[n--]=s>>16&255),6===o?(n>=0&&(e[n--]=s>>24&255),r=0,o=0):(r=s>>>24,o+=2)}if(n>=0)for(e[n--]=r;n>=0;)e[n--]=0},Math.clz32?i.prototype._countBits=function(e){return 32-Math.clz32(e)}:i.prototype._countBits=function(e){var t=e,n=0;return t>=4096&&(n+=13,t>>>=13),t>=64&&(n+=7,t>>>=7),t>=8&&(n+=4,t>>>=4),t>=2&&(n+=2,t>>>=2),n+t},i.prototype._zeroBits=function(e){if(0===e)return 26;var t=e,n=0;return 8191&t||(n+=13,t>>>=13),127&t||(n+=7,t>>>=7),15&t||(n+=4,t>>>=4),3&t||(n+=2,t>>>=2),1&t||n++,n},i.prototype.bitLength=function(){var e=this.words[this.length-1],t=this._countBits(e);return 26*(this.length-1)+t},i.prototype.zeroBits=function(){if(this.isZero())return 0;for(var e=0,t=0;t<this.length;t++){var n=this._zeroBits(this.words[t]);if(e+=n,26!==n)break}return e},i.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},i.prototype.toTwos=function(e){return 0!==this.negative?this.abs().inotn(e).iaddn(1):this.clone()},i.prototype.fromTwos=function(e){return this.testn(e-1)?this.notn(e).iaddn(1).ineg():this.clone()},i.prototype.isNeg=function(){return 0!==this.negative},i.prototype.neg=function(){return this.clone().ineg()},i.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},i.prototype.iuor=function(e){for(;this.length<e.length;)this.words[this.length++]=0;for(var t=0;t<e.length;t++)this.words[t]=this.words[t]|e.words[t];return this._strip()},i.prototype.ior=function(e){return n(!(this.negative|e.negative)),this.iuor(e)},i.prototype.or=function(e){return this.length>e.length?this.clone().ior(e):e.clone().ior(this)},i.prototype.uor=function(e){return this.length>e.length?this.clone().iuor(e):e.clone().iuor(this)},i.prototype.iuand=function(e){var t;t=this.length>e.length?e:this;for(var n=0;n<t.length;n++)this.words[n]=this.words[n]&e.words[n];return this.length=t.length,this._strip()},i.prototype.iand=function(e){return n(!(this.negative|e.negative)),this.iuand(e)},i.prototype.and=function(e){return this.length>e.length?this.clone().iand(e):e.clone().iand(this)},i.prototype.uand=function(e){return this.length>e.length?this.clone().iuand(e):e.clone().iuand(this)},i.prototype.iuxor=function(e){var t,n;this.length>e.length?(t=this,n=e):(t=e,n=this);for(var r=0;r<n.length;r++)this.words[r]=t.words[r]^n.words[r];if(this!==t)for(;r<t.length;r++)this.words[r]=t.words[r];return this.length=t.length,this._strip()},i.prototype.ixor=function(e){return n(!(this.negative|e.negative)),this.iuxor(e)},i.prototype.xor=function(e){return this.length>e.length?this.clone().ixor(e):e.clone().ixor(this)},i.prototype.uxor=function(e){return this.length>e.length?this.clone().iuxor(e):e.clone().iuxor(this)},i.prototype.inotn=function(e){n("number"==typeof e&&e>=0);var t=0|Math.ceil(e/26),r=e%26;this._expand(t),r>0&&t--;for(var i=0;i<t;i++)this.words[i]=67108863&~this.words[i];return r>0&&(this.words[i]=~this.words[i]&67108863>>26-r),this._strip()},i.prototype.notn=function(e){return this.clone().inotn(e)},i.prototype.setn=function(e,t){n("number"==typeof e&&e>=0);var r=e/26|0,i=e%26;return this._expand(r+1),this.words[r]=t?this.words[r]|1<<i:this.words[r]&~(1<<i),this._strip()},i.prototype.iadd=function(e){var t,n,r;if(0!==this.negative&&0===e.negative)return this.negative=0,t=this.isub(e),this.negative^=1,this._normSign();if(0===this.negative&&0!==e.negative)return e.negative=0,t=this.isub(e),e.negative=1,t._normSign();this.length>e.length?(n=this,r=e):(n=e,r=this);for(var i=0,o=0;o<r.length;o++)t=(0|n.words[o])+(0|r.words[o])+i,this.words[o]=67108863&t,i=t>>>26;for(;0!==i&&o<n.length;o++)t=(0|n.words[o])+i,this.words[o]=67108863&t,i=t>>>26;if(this.length=n.length,0!==i)this.words[this.length]=i,this.length++;else if(n!==this)for(;o<n.length;o++)this.words[o]=n.words[o];return this},i.prototype.add=function(e){var t;return 0!==e.negative&&0===this.negative?(e.negative=0,t=this.sub(e),e.negative^=1,t):0===e.negative&&0!==this.negative?(this.negative=0,t=e.sub(this),this.negative=1,t):this.length>e.length?this.clone().iadd(e):e.clone().iadd(this)},i.prototype.isub=function(e){if(0!==e.negative){e.negative=0;var t=this.iadd(e);return e.negative=1,t._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(e),this.negative=1,this._normSign();var n,r,i=this.cmp(e);if(0===i)return this.negative=0,this.length=1,this.words[0]=0,this;i>0?(n=this,r=e):(n=e,r=this);for(var o=0,s=0;s<r.length;s++)o=(t=(0|n.words[s])-(0|r.words[s])+o)>>26,this.words[s]=67108863&t;for(;0!==o&&s<n.length;s++)o=(t=(0|n.words[s])+o)>>26,this.words[s]=67108863&t;if(0===o&&s<n.length&&n!==this)for(;s<n.length;s++)this.words[s]=n.words[s];return this.length=Math.max(this.length,s),n!==this&&(this.negative=1),this._strip()},i.prototype.sub=function(e){return this.clone().isub(e)};var g=function(e,t,n){var r,i,o,s=e.words,a=t.words,c=n.words,l=0,u=0|s[0],d=8191&u,h=u>>>13,f=0|s[1],p=8191&f,g=f>>>13,m=0|s[2],y=8191&m,v=m>>>13,b=0|s[3],w=8191&b,A=b>>>13,_=0|s[4],E=8191&_,C=_>>>13,k=0|s[5],S=8191&k,x=k>>>13,M=0|s[6],I=8191&M,T=M>>>13,R=0|s[7],P=8191&R,O=R>>>13,N=0|s[8],L=8191&N,D=N>>>13,B=0|s[9],U=8191&B,j=B>>>13,F=0|a[0],z=8191&F,$=F>>>13,q=0|a[1],H=8191&q,W=q>>>13,V=0|a[2],K=8191&V,Z=V>>>13,G=0|a[3],Y=8191&G,Q=G>>>13,J=0|a[4],X=8191&J,ee=J>>>13,te=0|a[5],ne=8191&te,re=te>>>13,ie=0|a[6],oe=8191&ie,se=ie>>>13,ae=0|a[7],ce=8191&ae,le=ae>>>13,ue=0|a[8],de=8191&ue,he=ue>>>13,fe=0|a[9],pe=8191&fe,ge=fe>>>13;n.negative=e.negative^t.negative,n.length=19;var me=(l+(r=Math.imul(d,z))|0)+((8191&(i=(i=Math.imul(d,$))+Math.imul(h,z)|0))<<13)|0;l=((o=Math.imul(h,$))+(i>>>13)|0)+(me>>>26)|0,me&=67108863,r=Math.imul(p,z),i=(i=Math.imul(p,$))+Math.imul(g,z)|0,o=Math.imul(g,$);var ye=(l+(r=r+Math.imul(d,H)|0)|0)+((8191&(i=(i=i+Math.imul(d,W)|0)+Math.imul(h,H)|0))<<13)|0;l=((o=o+Math.imul(h,W)|0)+(i>>>13)|0)+(ye>>>26)|0,ye&=67108863,r=Math.imul(y,z),i=(i=Math.imul(y,$))+Math.imul(v,z)|0,o=Math.imul(v,$),r=r+Math.imul(p,H)|0,i=(i=i+Math.imul(p,W)|0)+Math.imul(g,H)|0,o=o+Math.imul(g,W)|0;var ve=(l+(r=r+Math.imul(d,K)|0)|0)+((8191&(i=(i=i+Math.imul(d,Z)|0)+Math.imul(h,K)|0))<<13)|0;l=((o=o+Math.imul(h,Z)|0)+(i>>>13)|0)+(ve>>>26)|0,ve&=67108863,r=Math.imul(w,z),i=(i=Math.imul(w,$))+Math.imul(A,z)|0,o=Math.imul(A,$),r=r+Math.imul(y,H)|0,i=(i=i+Math.imul(y,W)|0)+Math.imul(v,H)|0,o=o+Math.imul(v,W)|0,r=r+Math.imul(p,K)|0,i=(i=i+Math.imul(p,Z)|0)+Math.imul(g,K)|0,o=o+Math.imul(g,Z)|0;var be=(l+(r=r+Math.imul(d,Y)|0)|0)+((8191&(i=(i=i+Math.imul(d,Q)|0)+Math.imul(h,Y)|0))<<13)|0;l=((o=o+Math.imul(h,Q)|0)+(i>>>13)|0)+(be>>>26)|0,be&=67108863,r=Math.imul(E,z),i=(i=Math.imul(E,$))+Math.imul(C,z)|0,o=Math.imul(C,$),r=r+Math.imul(w,H)|0,i=(i=i+Math.imul(w,W)|0)+Math.imul(A,H)|0,o=o+Math.imul(A,W)|0,r=r+Math.imul(y,K)|0,i=(i=i+Math.imul(y,Z)|0)+Math.imul(v,K)|0,o=o+Math.imul(v,Z)|0,r=r+Math.imul(p,Y)|0,i=(i=i+Math.imul(p,Q)|0)+Math.imul(g,Y)|0,o=o+Math.imul(g,Q)|0;var we=(l+(r=r+Math.imul(d,X)|0)|0)+((8191&(i=(i=i+Math.imul(d,ee)|0)+Math.imul(h,X)|0))<<13)|0;l=((o=o+Math.imul(h,ee)|0)+(i>>>13)|0)+(we>>>26)|0,we&=67108863,r=Math.imul(S,z),i=(i=Math.imul(S,$))+Math.imul(x,z)|0,o=Math.imul(x,$),r=r+Math.imul(E,H)|0,i=(i=i+Math.imul(E,W)|0)+Math.imul(C,H)|0,o=o+Math.imul(C,W)|0,r=r+Math.imul(w,K)|0,i=(i=i+Math.imul(w,Z)|0)+Math.imul(A,K)|0,o=o+Math.imul(A,Z)|0,r=r+Math.imul(y,Y)|0,i=(i=i+Math.imul(y,Q)|0)+Math.imul(v,Y)|0,o=o+Math.imul(v,Q)|0,r=r+Math.imul(p,X)|0,i=(i=i+Math.imul(p,ee)|0)+Math.imul(g,X)|0,o=o+Math.imul(g,ee)|0;var Ae=(l+(r=r+Math.imul(d,ne)|0)|0)+((8191&(i=(i=i+Math.imul(d,re)|0)+Math.imul(h,ne)|0))<<13)|0;l=((o=o+Math.imul(h,re)|0)+(i>>>13)|0)+(Ae>>>26)|0,Ae&=67108863,r=Math.imul(I,z),i=(i=Math.imul(I,$))+Math.imul(T,z)|0,o=Math.imul(T,$),r=r+Math.imul(S,H)|0,i=(i=i+Math.imul(S,W)|0)+Math.imul(x,H)|0,o=o+Math.imul(x,W)|0,r=r+Math.imul(E,K)|0,i=(i=i+Math.imul(E,Z)|0)+Math.imul(C,K)|0,o=o+Math.imul(C,Z)|0,r=r+Math.imul(w,Y)|0,i=(i=i+Math.imul(w,Q)|0)+Math.imul(A,Y)|0,o=o+Math.imul(A,Q)|0,r=r+Math.imul(y,X)|0,i=(i=i+Math.imul(y,ee)|0)+Math.imul(v,X)|0,o=o+Math.imul(v,ee)|0,r=r+Math.imul(p,ne)|0,i=(i=i+Math.imul(p,re)|0)+Math.imul(g,ne)|0,o=o+Math.imul(g,re)|0;var _e=(l+(r=r+Math.imul(d,oe)|0)|0)+((8191&(i=(i=i+Math.imul(d,se)|0)+Math.imul(h,oe)|0))<<13)|0;l=((o=o+Math.imul(h,se)|0)+(i>>>13)|0)+(_e>>>26)|0,_e&=67108863,r=Math.imul(P,z),i=(i=Math.imul(P,$))+Math.imul(O,z)|0,o=Math.imul(O,$),r=r+Math.imul(I,H)|0,i=(i=i+Math.imul(I,W)|0)+Math.imul(T,H)|0,o=o+Math.imul(T,W)|0,r=r+Math.imul(S,K)|0,i=(i=i+Math.imul(S,Z)|0)+Math.imul(x,K)|0,o=o+Math.imul(x,Z)|0,r=r+Math.imul(E,Y)|0,i=(i=i+Math.imul(E,Q)|0)+Math.imul(C,Y)|0,o=o+Math.imul(C,Q)|0,r=r+Math.imul(w,X)|0,i=(i=i+Math.imul(w,ee)|0)+Math.imul(A,X)|0,o=o+Math.imul(A,ee)|0,r=r+Math.imul(y,ne)|0,i=(i=i+Math.imul(y,re)|0)+Math.imul(v,ne)|0,o=o+Math.imul(v,re)|0,r=r+Math.imul(p,oe)|0,i=(i=i+Math.imul(p,se)|0)+Math.imul(g,oe)|0,o=o+Math.imul(g,se)|0;var Ee=(l+(r=r+Math.imul(d,ce)|0)|0)+((8191&(i=(i=i+Math.imul(d,le)|0)+Math.imul(h,ce)|0))<<13)|0;l=((o=o+Math.imul(h,le)|0)+(i>>>13)|0)+(Ee>>>26)|0,Ee&=67108863,r=Math.imul(L,z),i=(i=Math.imul(L,$))+Math.imul(D,z)|0,o=Math.imul(D,$),r=r+Math.imul(P,H)|0,i=(i=i+Math.imul(P,W)|0)+Math.imul(O,H)|0,o=o+Math.imul(O,W)|0,r=r+Math.imul(I,K)|0,i=(i=i+Math.imul(I,Z)|0)+Math.imul(T,K)|0,o=o+Math.imul(T,Z)|0,r=r+Math.imul(S,Y)|0,i=(i=i+Math.imul(S,Q)|0)+Math.imul(x,Y)|0,o=o+Math.imul(x,Q)|0,r=r+Math.imul(E,X)|0,i=(i=i+Math.imul(E,ee)|0)+Math.imul(C,X)|0,o=o+Math.imul(C,ee)|0,r=r+Math.imul(w,ne)|0,i=(i=i+Math.imul(w,re)|0)+Math.imul(A,ne)|0,o=o+Math.imul(A,re)|0,r=r+Math.imul(y,oe)|0,i=(i=i+Math.imul(y,se)|0)+Math.imul(v,oe)|0,o=o+Math.imul(v,se)|0,r=r+Math.imul(p,ce)|0,i=(i=i+Math.imul(p,le)|0)+Math.imul(g,ce)|0,o=o+Math.imul(g,le)|0;var Ce=(l+(r=r+Math.imul(d,de)|0)|0)+((8191&(i=(i=i+Math.imul(d,he)|0)+Math.imul(h,de)|0))<<13)|0;l=((o=o+Math.imul(h,he)|0)+(i>>>13)|0)+(Ce>>>26)|0,Ce&=67108863,r=Math.imul(U,z),i=(i=Math.imul(U,$))+Math.imul(j,z)|0,o=Math.imul(j,$),r=r+Math.imul(L,H)|0,i=(i=i+Math.imul(L,W)|0)+Math.imul(D,H)|0,o=o+Math.imul(D,W)|0,r=r+Math.imul(P,K)|0,i=(i=i+Math.imul(P,Z)|0)+Math.imul(O,K)|0,o=o+Math.imul(O,Z)|0,r=r+Math.imul(I,Y)|0,i=(i=i+Math.imul(I,Q)|0)+Math.imul(T,Y)|0,o=o+Math.imul(T,Q)|0,r=r+Math.imul(S,X)|0,i=(i=i+Math.imul(S,ee)|0)+Math.imul(x,X)|0,o=o+Math.imul(x,ee)|0,r=r+Math.imul(E,ne)|0,i=(i=i+Math.imul(E,re)|0)+Math.imul(C,ne)|0,o=o+Math.imul(C,re)|0,r=r+Math.imul(w,oe)|0,i=(i=i+Math.imul(w,se)|0)+Math.imul(A,oe)|0,o=o+Math.imul(A,se)|0,r=r+Math.imul(y,ce)|0,i=(i=i+Math.imul(y,le)|0)+Math.imul(v,ce)|0,o=o+Math.imul(v,le)|0,r=r+Math.imul(p,de)|0,i=(i=i+Math.imul(p,he)|0)+Math.imul(g,de)|0,o=o+Math.imul(g,he)|0;var ke=(l+(r=r+Math.imul(d,pe)|0)|0)+((8191&(i=(i=i+Math.imul(d,ge)|0)+Math.imul(h,pe)|0))<<13)|0;l=((o=o+Math.imul(h,ge)|0)+(i>>>13)|0)+(ke>>>26)|0,ke&=67108863,r=Math.imul(U,H),i=(i=Math.imul(U,W))+Math.imul(j,H)|0,o=Math.imul(j,W),r=r+Math.imul(L,K)|0,i=(i=i+Math.imul(L,Z)|0)+Math.imul(D,K)|0,o=o+Math.imul(D,Z)|0,r=r+Math.imul(P,Y)|0,i=(i=i+Math.imul(P,Q)|0)+Math.imul(O,Y)|0,o=o+Math.imul(O,Q)|0,r=r+Math.imul(I,X)|0,i=(i=i+Math.imul(I,ee)|0)+Math.imul(T,X)|0,o=o+Math.imul(T,ee)|0,r=r+Math.imul(S,ne)|0,i=(i=i+Math.imul(S,re)|0)+Math.imul(x,ne)|0,o=o+Math.imul(x,re)|0,r=r+Math.imul(E,oe)|0,i=(i=i+Math.imul(E,se)|0)+Math.imul(C,oe)|0,o=o+Math.imul(C,se)|0,r=r+Math.imul(w,ce)|0,i=(i=i+Math.imul(w,le)|0)+Math.imul(A,ce)|0,o=o+Math.imul(A,le)|0,r=r+Math.imul(y,de)|0,i=(i=i+Math.imul(y,he)|0)+Math.imul(v,de)|0,o=o+Math.imul(v,he)|0;var Se=(l+(r=r+Math.imul(p,pe)|0)|0)+((8191&(i=(i=i+Math.imul(p,ge)|0)+Math.imul(g,pe)|0))<<13)|0;l=((o=o+Math.imul(g,ge)|0)+(i>>>13)|0)+(Se>>>26)|0,Se&=67108863,r=Math.imul(U,K),i=(i=Math.imul(U,Z))+Math.imul(j,K)|0,o=Math.imul(j,Z),r=r+Math.imul(L,Y)|0,i=(i=i+Math.imul(L,Q)|0)+Math.imul(D,Y)|0,o=o+Math.imul(D,Q)|0,r=r+Math.imul(P,X)|0,i=(i=i+Math.imul(P,ee)|0)+Math.imul(O,X)|0,o=o+Math.imul(O,ee)|0,r=r+Math.imul(I,ne)|0,i=(i=i+Math.imul(I,re)|0)+Math.imul(T,ne)|0,o=o+Math.imul(T,re)|0,r=r+Math.imul(S,oe)|0,i=(i=i+Math.imul(S,se)|0)+Math.imul(x,oe)|0,o=o+Math.imul(x,se)|0,r=r+Math.imul(E,ce)|0,i=(i=i+Math.imul(E,le)|0)+Math.imul(C,ce)|0,o=o+Math.imul(C,le)|0,r=r+Math.imul(w,de)|0,i=(i=i+Math.imul(w,he)|0)+Math.imul(A,de)|0,o=o+Math.imul(A,he)|0;var xe=(l+(r=r+Math.imul(y,pe)|0)|0)+((8191&(i=(i=i+Math.imul(y,ge)|0)+Math.imul(v,pe)|0))<<13)|0;l=((o=o+Math.imul(v,ge)|0)+(i>>>13)|0)+(xe>>>26)|0,xe&=67108863,r=Math.imul(U,Y),i=(i=Math.imul(U,Q))+Math.imul(j,Y)|0,o=Math.imul(j,Q),r=r+Math.imul(L,X)|0,i=(i=i+Math.imul(L,ee)|0)+Math.imul(D,X)|0,o=o+Math.imul(D,ee)|0,r=r+Math.imul(P,ne)|0,i=(i=i+Math.imul(P,re)|0)+Math.imul(O,ne)|0,o=o+Math.imul(O,re)|0,r=r+Math.imul(I,oe)|0,i=(i=i+Math.imul(I,se)|0)+Math.imul(T,oe)|0,o=o+Math.imul(T,se)|0,r=r+Math.imul(S,ce)|0,i=(i=i+Math.imul(S,le)|0)+Math.imul(x,ce)|0,o=o+Math.imul(x,le)|0,r=r+Math.imul(E,de)|0,i=(i=i+Math.imul(E,he)|0)+Math.imul(C,de)|0,o=o+Math.imul(C,he)|0;var Me=(l+(r=r+Math.imul(w,pe)|0)|0)+((8191&(i=(i=i+Math.imul(w,ge)|0)+Math.imul(A,pe)|0))<<13)|0;l=((o=o+Math.imul(A,ge)|0)+(i>>>13)|0)+(Me>>>26)|0,Me&=67108863,r=Math.imul(U,X),i=(i=Math.imul(U,ee))+Math.imul(j,X)|0,o=Math.imul(j,ee),r=r+Math.imul(L,ne)|0,i=(i=i+Math.imul(L,re)|0)+Math.imul(D,ne)|0,o=o+Math.imul(D,re)|0,r=r+Math.imul(P,oe)|0,i=(i=i+Math.imul(P,se)|0)+Math.imul(O,oe)|0,o=o+Math.imul(O,se)|0,r=r+Math.imul(I,ce)|0,i=(i=i+Math.imul(I,le)|0)+Math.imul(T,ce)|0,o=o+Math.imul(T,le)|0,r=r+Math.imul(S,de)|0,i=(i=i+Math.imul(S,he)|0)+Math.imul(x,de)|0,o=o+Math.imul(x,he)|0;var Ie=(l+(r=r+Math.imul(E,pe)|0)|0)+((8191&(i=(i=i+Math.imul(E,ge)|0)+Math.imul(C,pe)|0))<<13)|0;l=((o=o+Math.imul(C,ge)|0)+(i>>>13)|0)+(Ie>>>26)|0,Ie&=67108863,r=Math.imul(U,ne),i=(i=Math.imul(U,re))+Math.imul(j,ne)|0,o=Math.imul(j,re),r=r+Math.imul(L,oe)|0,i=(i=i+Math.imul(L,se)|0)+Math.imul(D,oe)|0,o=o+Math.imul(D,se)|0,r=r+Math.imul(P,ce)|0,i=(i=i+Math.imul(P,le)|0)+Math.imul(O,ce)|0,o=o+Math.imul(O,le)|0,r=r+Math.imul(I,de)|0,i=(i=i+Math.imul(I,he)|0)+Math.imul(T,de)|0,o=o+Math.imul(T,he)|0;var Te=(l+(r=r+Math.imul(S,pe)|0)|0)+((8191&(i=(i=i+Math.imul(S,ge)|0)+Math.imul(x,pe)|0))<<13)|0;l=((o=o+Math.imul(x,ge)|0)+(i>>>13)|0)+(Te>>>26)|0,Te&=67108863,r=Math.imul(U,oe),i=(i=Math.imul(U,se))+Math.imul(j,oe)|0,o=Math.imul(j,se),r=r+Math.imul(L,ce)|0,i=(i=i+Math.imul(L,le)|0)+Math.imul(D,ce)|0,o=o+Math.imul(D,le)|0,r=r+Math.imul(P,de)|0,i=(i=i+Math.imul(P,he)|0)+Math.imul(O,de)|0,o=o+Math.imul(O,he)|0;var Re=(l+(r=r+Math.imul(I,pe)|0)|0)+((8191&(i=(i=i+Math.imul(I,ge)|0)+Math.imul(T,pe)|0))<<13)|0;l=((o=o+Math.imul(T,ge)|0)+(i>>>13)|0)+(Re>>>26)|0,Re&=67108863,r=Math.imul(U,ce),i=(i=Math.imul(U,le))+Math.imul(j,ce)|0,o=Math.imul(j,le),r=r+Math.imul(L,de)|0,i=(i=i+Math.imul(L,he)|0)+Math.imul(D,de)|0,o=o+Math.imul(D,he)|0;var Pe=(l+(r=r+Math.imul(P,pe)|0)|0)+((8191&(i=(i=i+Math.imul(P,ge)|0)+Math.imul(O,pe)|0))<<13)|0;l=((o=o+Math.imul(O,ge)|0)+(i>>>13)|0)+(Pe>>>26)|0,Pe&=67108863,r=Math.imul(U,de),i=(i=Math.imul(U,he))+Math.imul(j,de)|0,o=Math.imul(j,he);var Oe=(l+(r=r+Math.imul(L,pe)|0)|0)+((8191&(i=(i=i+Math.imul(L,ge)|0)+Math.imul(D,pe)|0))<<13)|0;l=((o=o+Math.imul(D,ge)|0)+(i>>>13)|0)+(Oe>>>26)|0,Oe&=67108863;var Ne=(l+(r=Math.imul(U,pe))|0)+((8191&(i=(i=Math.imul(U,ge))+Math.imul(j,pe)|0))<<13)|0;return l=((o=Math.imul(j,ge))+(i>>>13)|0)+(Ne>>>26)|0,Ne&=67108863,c[0]=me,c[1]=ye,c[2]=ve,c[3]=be,c[4]=we,c[5]=Ae,c[6]=_e,c[7]=Ee,c[8]=Ce,c[9]=ke,c[10]=Se,c[11]=xe,c[12]=Me,c[13]=Ie,c[14]=Te,c[15]=Re,c[16]=Pe,c[17]=Oe,c[18]=Ne,0!==l&&(c[19]=l,n.length++),n};function m(e,t,n){n.negative=t.negative^e.negative,n.length=e.length+t.length;for(var r=0,i=0,o=0;o<n.length-1;o++){var s=i;i=0;for(var a=67108863&r,c=Math.min(o,t.length-1),l=Math.max(0,o-e.length+1);l<=c;l++){var u=o-l,d=(0|e.words[u])*(0|t.words[l]),h=67108863&d;a=67108863&(h=h+a|0),i+=(s=(s=s+(d/67108864|0)|0)+(h>>>26)|0)>>>26,s&=67108863}n.words[o]=a,r=s,s=i}return 0!==r?n.words[o]=r:n.length--,n._strip()}function y(e,t,n){return m(e,t,n)}Math.imul||(g=p),i.prototype.mulTo=function(e,t){var n=this.length+e.length;return 10===this.length&&10===e.length?g(this,e,t):n<63?p(this,e,t):n<1024?m(this,e,t):y(this,e,t)},i.prototype.mul=function(e){var t=new i(null);return t.words=new Array(this.length+e.length),this.mulTo(e,t)},i.prototype.mulf=function(e){var t=new i(null);return t.words=new Array(this.length+e.length),y(this,e,t)},i.prototype.imul=function(e){return this.clone().mulTo(e,this)},i.prototype.imuln=function(e){var t=e<0;t&&(e=-e),n("number"==typeof e),n(e<67108864);for(var r=0,i=0;i<this.length;i++){var o=(0|this.words[i])*e,s=(67108863&o)+(67108863&r);r>>=26,r+=o/67108864|0,r+=s>>>26,this.words[i]=67108863&s}return 0!==r&&(this.words[i]=r,this.length++),t?this.ineg():this},i.prototype.muln=function(e){return this.clone().imuln(e)},i.prototype.sqr=function(){return this.mul(this)},i.prototype.isqr=function(){return this.imul(this.clone())},i.prototype.pow=function(e){var t=function(e){for(var t=new Array(e.bitLength()),n=0;n<t.length;n++){var r=n/26|0,i=n%26;t[n]=e.words[r]>>>i&1}return t}(e);if(0===t.length)return new i(1);for(var n=this,r=0;r<t.length&&0===t[r];r++,n=n.sqr());if(++r<t.length)for(var o=n.sqr();r<t.length;r++,o=o.sqr())0!==t[r]&&(n=n.mul(o));return n},i.prototype.iushln=function(e){n("number"==typeof e&&e>=0);var t,r=e%26,i=(e-r)/26,o=67108863>>>26-r<<26-r;if(0!==r){var s=0;for(t=0;t<this.length;t++){var a=this.words[t]&o,c=(0|this.words[t])-a<<r;this.words[t]=c|s,s=a>>>26-r}s&&(this.words[t]=s,this.length++)}if(0!==i){for(t=this.length-1;t>=0;t--)this.words[t+i]=this.words[t];for(t=0;t<i;t++)this.words[t]=0;this.length+=i}return this._strip()},i.prototype.ishln=function(e){return n(0===this.negative),this.iushln(e)},i.prototype.iushrn=function(e,t,r){var i;n("number"==typeof e&&e>=0),i=t?(t-t%26)/26:0;var o=e%26,s=Math.min((e-o)/26,this.length),a=67108863^67108863>>>o<<o,c=r;if(i-=s,i=Math.max(0,i),c){for(var l=0;l<s;l++)c.words[l]=this.words[l];c.length=s}if(0!==s)if(this.length>s)for(this.length-=s,l=0;l<this.length;l++)this.words[l]=this.words[l+s];else this.words[0]=0,this.length=1;var u=0;for(l=this.length-1;l>=0&&(0!==u||l>=i);l--){var d=0|this.words[l];this.words[l]=u<<26-o|d>>>o,u=d&a}return c&&0!==u&&(c.words[c.length++]=u),0===this.length&&(this.words[0]=0,this.length=1),this._strip()},i.prototype.ishrn=function(e,t,r){return n(0===this.negative),this.iushrn(e,t,r)},i.prototype.shln=function(e){return this.clone().ishln(e)},i.prototype.ushln=function(e){return this.clone().iushln(e)},i.prototype.shrn=function(e){return this.clone().ishrn(e)},i.prototype.ushrn=function(e){return this.clone().iushrn(e)},i.prototype.testn=function(e){n("number"==typeof e&&e>=0);var t=e%26,r=(e-t)/26,i=1<<t;return!(this.length<=r)&&!!(this.words[r]&i)},i.prototype.imaskn=function(e){n("number"==typeof e&&e>=0);var t=e%26,r=(e-t)/26;if(n(0===this.negative,"imaskn works only with positive numbers"),this.length<=r)return this;if(0!==t&&r++,this.length=Math.min(r,this.length),0!==t){var i=67108863^67108863>>>t<<t;this.words[this.length-1]&=i}return this._strip()},i.prototype.maskn=function(e){return this.clone().imaskn(e)},i.prototype.iaddn=function(e){return n("number"==typeof e),n(e<67108864),e<0?this.isubn(-e):0!==this.negative?1===this.length&&(0|this.words[0])<=e?(this.words[0]=e-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(e),this.negative=1,this):this._iaddn(e)},i.prototype._iaddn=function(e){this.words[0]+=e;for(var t=0;t<this.length&&this.words[t]>=67108864;t++)this.words[t]-=67108864,t===this.length-1?this.words[t+1]=1:this.words[t+1]++;return this.length=Math.max(this.length,t+1),this},i.prototype.isubn=function(e){if(n("number"==typeof e),n(e<67108864),e<0)return this.iaddn(-e);if(0!==this.negative)return this.negative=0,this.iaddn(e),this.negative=1,this;if(this.words[0]-=e,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var t=0;t<this.length&&this.words[t]<0;t++)this.words[t]+=67108864,this.words[t+1]-=1;return this._strip()},i.prototype.addn=function(e){return this.clone().iaddn(e)},i.prototype.subn=function(e){return this.clone().isubn(e)},i.prototype.iabs=function(){return this.negative=0,this},i.prototype.abs=function(){return this.clone().iabs()},i.prototype._ishlnsubmul=function(e,t,r){var i,o=e.length+r;this._expand(o);var s,a=0;for(i=0;i<e.length;i++){s=(0|this.words[i+r])+a;var c=(0|e.words[i])*t;a=((s-=67108863&c)>>26)-(c/67108864|0),this.words[i+r]=67108863&s}for(;i<this.length-r;i++)a=(s=(0|this.words[i+r])+a)>>26,this.words[i+r]=67108863&s;if(0===a)return this._strip();for(n(-1===a),a=0,i=0;i<this.length;i++)a=(s=-(0|this.words[i])+a)>>26,this.words[i]=67108863&s;return this.negative=1,this._strip()},i.prototype._wordDiv=function(e,t){var n=(this.length,e.length),r=this.clone(),o=e,s=0|o.words[o.length-1];0!==(n=26-this._countBits(s))&&(o=o.ushln(n),r.iushln(n),s=0|o.words[o.length-1]);var a,c=r.length-o.length;if("mod"!==t){(a=new i(null)).length=c+1,a.words=new Array(a.length);for(var l=0;l<a.length;l++)a.words[l]=0}var u=r.clone()._ishlnsubmul(o,1,c);0===u.negative&&(r=u,a&&(a.words[c]=1));for(var d=c-1;d>=0;d--){var h=67108864*(0|r.words[o.length+d])+(0|r.words[o.length+d-1]);for(h=Math.min(h/s|0,67108863),r._ishlnsubmul(o,h,d);0!==r.negative;)h--,r.negative=0,r._ishlnsubmul(o,1,d),r.isZero()||(r.negative^=1);a&&(a.words[d]=h)}return a&&a._strip(),r._strip(),"div"!==t&&0!==n&&r.iushrn(n),{div:a||null,mod:r}},i.prototype.divmod=function(e,t,r){return n(!e.isZero()),this.isZero()?{div:new i(0),mod:new i(0)}:0!==this.negative&&0===e.negative?(a=this.neg().divmod(e,t),"mod"!==t&&(o=a.div.neg()),"div"!==t&&(s=a.mod.neg(),r&&0!==s.negative&&s.iadd(e)),{div:o,mod:s}):0===this.negative&&0!==e.negative?(a=this.divmod(e.neg(),t),"mod"!==t&&(o=a.div.neg()),{div:o,mod:a.mod}):this.negative&e.negative?(a=this.neg().divmod(e.neg(),t),"div"!==t&&(s=a.mod.neg(),r&&0!==s.negative&&s.isub(e)),{div:a.div,mod:s}):e.length>this.length||this.cmp(e)<0?{div:new i(0),mod:this}:1===e.length?"div"===t?{div:this.divn(e.words[0]),mod:null}:"mod"===t?{div:null,mod:new i(this.modrn(e.words[0]))}:{div:this.divn(e.words[0]),mod:new i(this.modrn(e.words[0]))}:this._wordDiv(e,t);var o,s,a},i.prototype.div=function(e){return this.divmod(e,"div",!1).div},i.prototype.mod=function(e){return this.divmod(e,"mod",!1).mod},i.prototype.umod=function(e){return this.divmod(e,"mod",!0).mod},i.prototype.divRound=function(e){var t=this.divmod(e);if(t.mod.isZero())return t.div;var n=0!==t.div.negative?t.mod.isub(e):t.mod,r=e.ushrn(1),i=e.andln(1),o=n.cmp(r);return o<0||1===i&&0===o?t.div:0!==t.div.negative?t.div.isubn(1):t.div.iaddn(1)},i.prototype.modrn=function(e){var t=e<0;t&&(e=-e),n(e<=67108863);for(var r=(1<<26)%e,i=0,o=this.length-1;o>=0;o--)i=(r*i+(0|this.words[o]))%e;return t?-i:i},i.prototype.modn=function(e){return this.modrn(e)},i.prototype.idivn=function(e){var t=e<0;t&&(e=-e),n(e<=67108863);for(var r=0,i=this.length-1;i>=0;i--){var o=(0|this.words[i])+67108864*r;this.words[i]=o/e|0,r=o%e}return this._strip(),t?this.ineg():this},i.prototype.divn=function(e){return this.clone().idivn(e)},i.prototype.egcd=function(e){n(0===e.negative),n(!e.isZero());var t=this,r=e.clone();t=0!==t.negative?t.umod(e):t.clone();for(var o=new i(1),s=new i(0),a=new i(0),c=new i(1),l=0;t.isEven()&&r.isEven();)t.iushrn(1),r.iushrn(1),++l;for(var u=r.clone(),d=t.clone();!t.isZero();){for(var h=0,f=1;!(t.words[0]&f)&&h<26;++h,f<<=1);if(h>0)for(t.iushrn(h);h-- >0;)(o.isOdd()||s.isOdd())&&(o.iadd(u),s.isub(d)),o.iushrn(1),s.iushrn(1);for(var p=0,g=1;!(r.words[0]&g)&&p<26;++p,g<<=1);if(p>0)for(r.iushrn(p);p-- >0;)(a.isOdd()||c.isOdd())&&(a.iadd(u),c.isub(d)),a.iushrn(1),c.iushrn(1);t.cmp(r)>=0?(t.isub(r),o.isub(a),s.isub(c)):(r.isub(t),a.isub(o),c.isub(s))}return{a,b:c,gcd:r.iushln(l)}},i.prototype._invmp=function(e){n(0===e.negative),n(!e.isZero());var t,r=this,o=e.clone();r=0!==r.negative?r.umod(e):r.clone();for(var s=new i(1),a=new i(0),c=o.clone();r.cmpn(1)>0&&o.cmpn(1)>0;){for(var l=0,u=1;!(r.words[0]&u)&&l<26;++l,u<<=1);if(l>0)for(r.iushrn(l);l-- >0;)s.isOdd()&&s.iadd(c),s.iushrn(1);for(var d=0,h=1;!(o.words[0]&h)&&d<26;++d,h<<=1);if(d>0)for(o.iushrn(d);d-- >0;)a.isOdd()&&a.iadd(c),a.iushrn(1);r.cmp(o)>=0?(r.isub(o),s.isub(a)):(o.isub(r),a.isub(s))}return(t=0===r.cmpn(1)?s:a).cmpn(0)<0&&t.iadd(e),t},i.prototype.gcd=function(e){if(this.isZero())return e.abs();if(e.isZero())return this.abs();var t=this.clone(),n=e.clone();t.negative=0,n.negative=0;for(var r=0;t.isEven()&&n.isEven();r++)t.iushrn(1),n.iushrn(1);for(;;){for(;t.isEven();)t.iushrn(1);for(;n.isEven();)n.iushrn(1);var i=t.cmp(n);if(i<0){var o=t;t=n,n=o}else if(0===i||0===n.cmpn(1))break;t.isub(n)}return n.iushln(r)},i.prototype.invm=function(e){return this.egcd(e).a.umod(e)},i.prototype.isEven=function(){return!(1&this.words[0])},i.prototype.isOdd=function(){return!(1&~this.words[0])},i.prototype.andln=function(e){return this.words[0]&e},i.prototype.bincn=function(e){n("number"==typeof e);var t=e%26,r=(e-t)/26,i=1<<t;if(this.length<=r)return this._expand(r+1),this.words[r]|=i,this;for(var o=i,s=r;0!==o&&s<this.length;s++){var a=0|this.words[s];o=(a+=o)>>>26,a&=67108863,this.words[s]=a}return 0!==o&&(this.words[s]=o,this.length++),this},i.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},i.prototype.cmpn=function(e){var t,r=e<0;if(0!==this.negative&&!r)return-1;if(0===this.negative&&r)return 1;if(this._strip(),this.length>1)t=1;else{r&&(e=-e),n(e<=67108863,"Number is too big");var i=0|this.words[0];t=i===e?0:i<e?-1:1}return 0!==this.negative?0|-t:t},i.prototype.cmp=function(e){if(0!==this.negative&&0===e.negative)return-1;if(0===this.negative&&0!==e.negative)return 1;var t=this.ucmp(e);return 0!==this.negative?0|-t:t},i.prototype.ucmp=function(e){if(this.length>e.length)return 1;if(this.length<e.length)return-1;for(var t=0,n=this.length-1;n>=0;n--){var r=0|this.words[n],i=0|e.words[n];if(r!==i){r<i?t=-1:r>i&&(t=1);break}}return t},i.prototype.gtn=function(e){return 1===this.cmpn(e)},i.prototype.gt=function(e){return 1===this.cmp(e)},i.prototype.gten=function(e){return this.cmpn(e)>=0},i.prototype.gte=function(e){return this.cmp(e)>=0},i.prototype.ltn=function(e){return-1===this.cmpn(e)},i.prototype.lt=function(e){return-1===this.cmp(e)},i.prototype.lten=function(e){return this.cmpn(e)<=0},i.prototype.lte=function(e){return this.cmp(e)<=0},i.prototype.eqn=function(e){return 0===this.cmpn(e)},i.prototype.eq=function(e){return 0===this.cmp(e)},i.red=function(e){return new C(e)},i.prototype.toRed=function(e){return n(!this.red,"Already a number in reduction context"),n(0===this.negative,"red works only with positives"),e.convertTo(this)._forceRed(e)},i.prototype.fromRed=function(){return n(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},i.prototype._forceRed=function(e){return this.red=e,this},i.prototype.forceRed=function(e){return n(!this.red,"Already a number in reduction context"),this._forceRed(e)},i.prototype.redAdd=function(e){return n(this.red,"redAdd works only with red numbers"),this.red.add(this,e)},i.prototype.redIAdd=function(e){return n(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,e)},i.prototype.redSub=function(e){return n(this.red,"redSub works only with red numbers"),this.red.sub(this,e)},i.prototype.redISub=function(e){return n(this.red,"redISub works only with red numbers"),this.red.isub(this,e)},i.prototype.redShl=function(e){return n(this.red,"redShl works only with red numbers"),this.red.shl(this,e)},i.prototype.redMul=function(e){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.mul(this,e)},i.prototype.redIMul=function(e){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.imul(this,e)},i.prototype.redSqr=function(){return n(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},i.prototype.redISqr=function(){return n(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},i.prototype.redSqrt=function(){return n(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},i.prototype.redInvm=function(){return n(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},i.prototype.redNeg=function(){return n(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},i.prototype.redPow=function(e){return n(this.red&&!e.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,e)};var v={k256:null,p224:null,p192:null,p25519:null};function b(e,t){this.name=e,this.p=new i(t,16),this.n=this.p.bitLength(),this.k=new i(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function w(){b.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function A(){b.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function _(){b.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function E(){b.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function C(e){if("string"==typeof e){var t=i._prime(e);this.m=t.p,this.prime=t}else n(e.gtn(1),"modulus must be greater than 1"),this.m=e,this.prime=null}function k(e){C.call(this,e),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new i(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}b.prototype._tmp=function(){var e=new i(null);return e.words=new Array(Math.ceil(this.n/13)),e},b.prototype.ireduce=function(e){var t,n=e;do{this.split(n,this.tmp),t=(n=(n=this.imulK(n)).iadd(this.tmp)).bitLength()}while(t>this.n);var r=t<this.n?-1:n.ucmp(this.p);return 0===r?(n.words[0]=0,n.length=1):r>0?n.isub(this.p):void 0!==n.strip?n.strip():n._strip(),n},b.prototype.split=function(e,t){e.iushrn(this.n,0,t)},b.prototype.imulK=function(e){return e.imul(this.k)},r(w,b),w.prototype.split=function(e,t){for(var n=4194303,r=Math.min(e.length,9),i=0;i<r;i++)t.words[i]=e.words[i];if(t.length=r,e.length<=9)return e.words[0]=0,void(e.length=1);var o=e.words[9];for(t.words[t.length++]=o&n,i=10;i<e.length;i++){var s=0|e.words[i];e.words[i-10]=(s&n)<<4|o>>>22,o=s}o>>>=22,e.words[i-10]=o,0===o&&e.length>10?e.length-=10:e.length-=9},w.prototype.imulK=function(e){e.words[e.length]=0,e.words[e.length+1]=0,e.length+=2;for(var t=0,n=0;n<e.length;n++){var r=0|e.words[n];t+=977*r,e.words[n]=67108863&t,t=64*r+(t/67108864|0)}return 0===e.words[e.length-1]&&(e.length--,0===e.words[e.length-1]&&e.length--),e},r(A,b),r(_,b),r(E,b),E.prototype.imulK=function(e){for(var t=0,n=0;n<e.length;n++){var r=19*(0|e.words[n])+t,i=67108863&r;r>>>=26,e.words[n]=i,t=r}return 0!==t&&(e.words[e.length++]=t),e},i._prime=function(e){if(v[e])return v[e];var t;if("k256"===e)t=new w;else if("p224"===e)t=new A;else if("p192"===e)t=new _;else{if("p25519"!==e)throw new Error("Unknown prime "+e);t=new E}return v[e]=t,t},C.prototype._verify1=function(e){n(0===e.negative,"red works only with positives"),n(e.red,"red works only with red numbers")},C.prototype._verify2=function(e,t){n(!(e.negative|t.negative),"red works only with positives"),n(e.red&&e.red===t.red,"red works only with red numbers")},C.prototype.imod=function(e){return this.prime?this.prime.ireduce(e)._forceRed(this):(l(e,e.umod(this.m)._forceRed(this)),e)},C.prototype.neg=function(e){return e.isZero()?e.clone():this.m.sub(e)._forceRed(this)},C.prototype.add=function(e,t){this._verify2(e,t);var n=e.add(t);return n.cmp(this.m)>=0&&n.isub(this.m),n._forceRed(this)},C.prototype.iadd=function(e,t){this._verify2(e,t);var n=e.iadd(t);return n.cmp(this.m)>=0&&n.isub(this.m),n},C.prototype.sub=function(e,t){this._verify2(e,t);var n=e.sub(t);return n.cmpn(0)<0&&n.iadd(this.m),n._forceRed(this)},C.prototype.isub=function(e,t){this._verify2(e,t);var n=e.isub(t);return n.cmpn(0)<0&&n.iadd(this.m),n},C.prototype.shl=function(e,t){return this._verify1(e),this.imod(e.ushln(t))},C.prototype.imul=function(e,t){return this._verify2(e,t),this.imod(e.imul(t))},C.prototype.mul=function(e,t){return this._verify2(e,t),this.imod(e.mul(t))},C.prototype.isqr=function(e){return this.imul(e,e.clone())},C.prototype.sqr=function(e){return this.mul(e,e)},C.prototype.sqrt=function(e){if(e.isZero())return e.clone();var t=this.m.andln(3);if(n(t%2==1),3===t){var r=this.m.add(new i(1)).iushrn(2);return this.pow(e,r)}for(var o=this.m.subn(1),s=0;!o.isZero()&&0===o.andln(1);)s++,o.iushrn(1);n(!o.isZero());var a=new i(1).toRed(this),c=a.redNeg(),l=this.m.subn(1).iushrn(1),u=this.m.bitLength();for(u=new i(2*u*u).toRed(this);0!==this.pow(u,l).cmp(c);)u.redIAdd(c);for(var d=this.pow(u,o),h=this.pow(e,o.addn(1).iushrn(1)),f=this.pow(e,o),p=s;0!==f.cmp(a);){for(var g=f,m=0;0!==g.cmp(a);m++)g=g.redSqr();n(m<p);var y=this.pow(d,new i(1).iushln(p-m-1));h=h.redMul(y),d=y.redSqr(),f=f.redMul(d),p=m}return h},C.prototype.invm=function(e){var t=e._invmp(this.m);return 0!==t.negative?(t.negative=0,this.imod(t).redNeg()):this.imod(t)},C.prototype.pow=function(e,t){if(t.isZero())return new i(1).toRed(this);if(0===t.cmpn(1))return e.clone();var n=new Array(16);n[0]=new i(1).toRed(this),n[1]=e;for(var r=2;r<n.length;r++)n[r]=this.mul(n[r-1],e);var o=n[0],s=0,a=0,c=t.bitLength()%26;for(0===c&&(c=26),r=t.length-1;r>=0;r--){for(var l=t.words[r],u=c-1;u>=0;u--){var d=l>>u&1;(o!==n[0]&&(o=this.sqr(o)),0!==d||0!==s)?(s<<=1,s|=d,(4===++a||0===r&&0===u)&&(o=this.mul(o,n[s]),a=0,s=0)):a=0}c=26}return o},C.prototype.convertTo=function(e){var t=e.umod(this.m);return t===e?t.clone():t},C.prototype.convertFrom=function(e){var t=e.clone();return t.red=null,t},i.mont=function(e){return new k(e)},r(k,C),k.prototype.convertTo=function(e){return this.imod(e.ushln(this.shift))},k.prototype.convertFrom=function(e){var t=this.imod(e.mul(this.rinv));return t.red=null,t},k.prototype.imul=function(e,t){if(e.isZero()||t.isZero())return e.words[0]=0,e.length=1,e;var n=e.imul(t),r=n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=n.isub(r).iushrn(this.shift),o=i;return i.cmp(this.m)>=0?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},k.prototype.mul=function(e,t){if(e.isZero()||t.isZero())return new i(0)._forceRed(this);var n=e.mul(t),r=n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),o=n.isub(r).iushrn(this.shift),s=o;return o.cmp(this.m)>=0?s=o.isub(this.m):o.cmpn(0)<0&&(s=o.iadd(this.m)),s._forceRed(this)},k.prototype.invm=function(e){return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)}}(e,tm)}(xm);var Im=xm.exports;const Tm="bignumber/5.7.0";var Rm=Im.BN;const Pm=new fm(Tm),Om={},Nm=9007199254740991;let Lm=!1;class Dm{constructor(e,t){e!==Om&&Pm.throwError("cannot call constructor directly; use BigNumber.from",fm.errors.UNSUPPORTED_OPERATION,{operation:"new (BigNumber)"}),this._hex=t,this._isBigNumber=!0,Object.freeze(this)}fromTwos(e){return Um(jm(this).fromTwos(e))}toTwos(e){return Um(jm(this).toTwos(e))}abs(){return"-"===this._hex[0]?Dm.from(this._hex.substring(1)):this}add(e){return Um(jm(this).add(jm(e)))}sub(e){return Um(jm(this).sub(jm(e)))}div(e){return Dm.from(e).isZero()&&Fm("division-by-zero","div"),Um(jm(this).div(jm(e)))}mul(e){return Um(jm(this).mul(jm(e)))}mod(e){const t=jm(e);return t.isNeg()&&Fm("division-by-zero","mod"),Um(jm(this).umod(t))}pow(e){const t=jm(e);return t.isNeg()&&Fm("negative-power","pow"),Um(jm(this).pow(t))}and(e){const t=jm(e);return(this.isNegative()||t.isNeg())&&Fm("unbound-bitwise-result","and"),Um(jm(this).and(t))}or(e){const t=jm(e);return(this.isNegative()||t.isNeg())&&Fm("unbound-bitwise-result","or"),Um(jm(this).or(t))}xor(e){const t=jm(e);return(this.isNegative()||t.isNeg())&&Fm("unbound-bitwise-result","xor"),Um(jm(this).xor(t))}mask(e){return(this.isNegative()||e<0)&&Fm("negative-width","mask"),Um(jm(this).maskn(e))}shl(e){return(this.isNegative()||e<0)&&Fm("negative-width","shl"),Um(jm(this).shln(e))}shr(e){return(this.isNegative()||e<0)&&Fm("negative-width","shr"),Um(jm(this).shrn(e))}eq(e){return jm(this).eq(jm(e))}lt(e){return jm(this).lt(jm(e))}lte(e){return jm(this).lte(jm(e))}gt(e){return jm(this).gt(jm(e))}gte(e){return jm(this).gte(jm(e))}isNegative(){return"-"===this._hex[0]}isZero(){return jm(this).isZero()}toNumber(){try{return jm(this).toNumber()}catch{Fm("overflow","toNumber",this.toString())}return null}toBigInt(){try{return BigInt(this.toString())}catch{}return Pm.throwError("this platform does not support BigInt",fm.errors.UNSUPPORTED_OPERATION,{value:this.toString()})}toString(){return arguments.length>0&&(10===arguments[0]?Lm||(Lm=!0,Pm.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")):16===arguments[0]?Pm.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",fm.errors.UNEXPECTED_ARGUMENT,{}):Pm.throwError("BigNumber.toString does not accept parameters",fm.errors.UNEXPECTED_ARGUMENT,{})),jm(this).toString(10)}toHexString(){return this._hex}toJSON(e){return{type:"BigNumber",hex:this.toHexString()}}static from(e){if(e instanceof Dm)return e;if("string"==typeof e)return e.match(/^-?0x[0-9a-f]+$/i)?new Dm(Om,Bm(e)):e.match(/^-?[0-9]+$/)?new Dm(Om,Bm(new Rm(e))):Pm.throwArgumentError("invalid BigNumber string","value",e);if("number"==typeof e)return e%1&&Fm("underflow","BigNumber.from",e),(e>=Nm||e<=-Nm)&&Fm("overflow","BigNumber.from",e),Dm.from(String(e));const t=e;if("bigint"==typeof t)return Dm.from(t.toString());if(vm(t))return Dm.from(_m(t));if(t)if(t.toHexString){const e=t.toHexString();if("string"==typeof e)return Dm.from(e)}else{let e=t._hex;if(null==e&&"BigNumber"===t.type&&(e=t.hex),"string"==typeof e&&(wm(e)||"-"===e[0]&&wm(e.substring(1))))return Dm.from(e)}return Pm.throwArgumentError("invalid BigNumber value","value",e)}static isBigNumber(e){return!(!e||!e._isBigNumber)}}function Bm(e){if("string"!=typeof e)return Bm(e.toString(16));if("-"===e[0])return"-"===(e=e.substring(1))[0]&&Pm.throwArgumentError("invalid hex","value",e),"0x00"===(e=Bm(e))?e:"-"+e;if("0x"!==e.substring(0,2)&&(e="0x"+e),"0x"===e)return"0x00";for(e.length%2&&(e="0x0"+e.substring(2));e.length>4&&"0x00"===e.substring(0,4);)e="0x"+e.substring(4);return e}function Um(e){return Dm.from(Bm(e))}function jm(e){const t=Dm.from(e).toHexString();return"-"===t[0]?new Rm("-"+t.substring(3),16):new Rm(t.substring(2),16)}function Fm(e,t,n){const r={fault:e,operation:t};return null!=n&&(r.value=n),Pm.throwError(e,fm.errors.NUMERIC_FAULT,r)}const zm=new fm(Tm),$m={},qm=Dm.from(0),Hm=Dm.from(-1);function Wm(e,t,n,r){const i={fault:t,operation:n};return void 0!==r&&(i.value=r),zm.throwError(e,fm.errors.NUMERIC_FAULT,i)}let Vm="0";for(;Vm.length<256;)Vm+=Vm;function Km(e){if("number"!=typeof e)try{e=Dm.from(e).toNumber()}catch{}return"number"==typeof e&&e>=0&&e<=256&&!(e%1)?"1"+Vm.substring(0,e):zm.throwArgumentError("invalid decimal size","decimals",e)}function Zm(e,t){null==t&&(t=0);const n=Km(t),r=(e=Dm.from(e)).lt(qm);r&&(e=e.mul(Hm));let i=e.mod(n).toString();for(;i.length<n.length-1;)i="0"+i;i=i.match(/^([0-9]*[1-9]|0)(0*)/)[1];const o=e.div(n).toString();return e=1===n.length?o:o+"."+i,r&&(e="-"+e),e}function Gm(e,t){null==t&&(t=0);const n=Km(t);("string"!=typeof e||!e.match(/^-?[0-9.]+$/))&&zm.throwArgumentError("invalid decimal value","value",e);const r="-"===e.substring(0,1);r&&(e=e.substring(1)),"."===e&&zm.throwArgumentError("missing value","value",e);const i=e.split(".");i.length>2&&zm.throwArgumentError("too many decimal points","value",e);let o=i[0],s=i[1];for(o||(o="0"),s||(s="0");"0"===s[s.length-1];)s=s.substring(0,s.length-1);for(s.length>n.length-1&&Wm("fractional component exceeds decimals","underflow","parseFixed"),""===s&&(s="0");s.length<n.length-1;)s+="0";const a=Dm.from(o),c=Dm.from(s);let l=a.mul(n).add(c);return r&&(l=l.mul(Hm)),l}class Ym{constructor(e,t,n,r){e!==$m&&zm.throwError("cannot use FixedFormat constructor; use FixedFormat.from",fm.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=t,this.width=n,this.decimals=r,this.name=(t?"":"u")+"fixed"+String(n)+"x"+String(r),this._multiplier=Km(r),Object.freeze(this)}static from(e){if(e instanceof Ym)return e;"number"==typeof e&&(e=`fixed128x${e}`);let t=!0,n=128,r=18;if("string"==typeof e){if("fixed"!==e)if("ufixed"===e)t=!1;else{const i=e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);i||zm.throwArgumentError("invalid fixed format","format",e),t="u"!==i[1],n=parseInt(i[2]),r=parseInt(i[3])}}else if(e){const i=(t,n,r)=>null==e[t]?r:(typeof e[t]!==n&&zm.throwArgumentError("invalid fixed format ("+t+" not "+n+")","format."+t,e[t]),e[t]);t=i("signed","boolean",t),n=i("width","number",n),r=i("decimals","number",r)}return n%8&&zm.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",n),r>80&&zm.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",r),new Ym($m,t,n,r)}}class Qm{constructor(e,t,n,r){e!==$m&&zm.throwError("cannot use FixedNumber constructor; use FixedNumber.from",fm.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=r,this._hex=t,this._value=n,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(e){this.format.name!==e.format.name&&zm.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",e)}addUnsafe(e){this._checkFormat(e);const t=Gm(this._value,this.format.decimals),n=Gm(e._value,e.format.decimals);return Qm.fromValue(t.add(n),this.format.decimals,this.format)}subUnsafe(e){this._checkFormat(e);const t=Gm(this._value,this.format.decimals),n=Gm(e._value,e.format.decimals);return Qm.fromValue(t.sub(n),this.format.decimals,this.format)}mulUnsafe(e){this._checkFormat(e);const t=Gm(this._value,this.format.decimals),n=Gm(e._value,e.format.decimals);return Qm.fromValue(t.mul(n).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(e){this._checkFormat(e);const t=Gm(this._value,this.format.decimals),n=Gm(e._value,e.format.decimals);return Qm.fromValue(t.mul(this.format._multiplier).div(n),this.format.decimals,this.format)}floor(){const e=this.toString().split(".");1===e.length&&e.push("0");let t=Qm.from(e[0],this.format);const n=!e[1].match(/^(0*)$/);return this.isNegative()&&n&&(t=t.subUnsafe(Jm.toFormat(t.format))),t}ceiling(){const e=this.toString().split(".");1===e.length&&e.push("0");let t=Qm.from(e[0],this.format);const n=!e[1].match(/^(0*)$/);return!this.isNegative()&&n&&(t=t.addUnsafe(Jm.toFormat(t.format))),t}round(e){null==e&&(e=0);const t=this.toString().split(".");if(1===t.length&&t.push("0"),(e<0||e>80||e%1)&&zm.throwArgumentError("invalid decimal count","decimals",e),t[1].length<=e)return this;const n=Qm.from("1"+Vm.substring(0,e),this.format),r=Xm.toFormat(this.format);return this.mulUnsafe(n).addUnsafe(r).floor().divUnsafe(n)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(e){if(null==e)return this._hex;e%8&&zm.throwArgumentError("invalid byte width","width",e);return Cm(Dm.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString(),e/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(e){return Qm.fromString(this._value,e)}static fromValue(e,t,n){return null==n&&null!=t&&!function(e){return null!=e&&(Dm.isBigNumber(e)||"number"==typeof e&&e%1==0||"string"==typeof e&&!!e.match(/^-?[0-9]+$/)||wm(e)||"bigint"==typeof e||vm(e))}(t)&&(n=t,t=null),null==t&&(t=0),null==n&&(n="fixed"),Qm.fromString(Zm(e,t),Ym.from(n))}static fromString(e,t){null==t&&(t="fixed");const n=Ym.from(t),r=Gm(e,n.decimals);!n.signed&&r.lt(qm)&&Wm("unsigned value cannot be negative","overflow","value",e);let i=null;n.signed?i=r.toTwos(n.width).toHexString():(i=r.toHexString(),i=Cm(i,n.width/8));const o=Zm(r,n.decimals);return new Qm($m,i,o,n)}static fromBytes(e,t){null==t&&(t="fixed");const n=Ym.from(t);if(bm(e).length>n.width/8)throw new Error("overflow");let r=Dm.from(e);n.signed&&(r=r.fromTwos(n.width));const i=r.toTwos((n.signed?0:1)+n.width).toHexString(),o=Zm(r,n.decimals);return new Qm($m,i,o,n)}static from(e,t){if("string"==typeof e)return Qm.fromString(e,t);if(vm(e))return Qm.fromBytes(e,t);try{return Qm.fromValue(e,0,t)}catch(e){if(e.code!==fm.errors.INVALID_ARGUMENT)throw e}return zm.throwArgumentError("invalid FixedNumber value","value",e)}static isFixedNumber(e){return!(!e||!e._isFixedNumber)}}const Jm=Qm.from(1),Xm=Qm.from("0.5"),ey=new fm("strings/5.7.0");var ty,ny;function ry(e,t,n,r,i){if(e===ny.BAD_PREFIX||e===ny.UNEXPECTED_CONTINUE){let e=0;for(let r=t+1;r<n.length&&n[r]>>6==2;r++)e++;return e}return e===ny.OVERRUN?n.length-t-1:0}function iy(e,t=ty.current){t!=ty.current&&(ey.checkNormalize(),e=e.normalize(t));let n=[];for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);if(r<128)n.push(r);else if(r<2048)n.push(r>>6|192),n.push(63&r|128);else if(55296==(64512&r)){t++;const i=e.charCodeAt(t);if(t>=e.length||56320!=(64512&i))throw new Error("invalid utf-8 string");const o=65536+((1023&r)<<10)+(1023&i);n.push(o>>18|240),n.push(o>>12&63|128),n.push(o>>6&63|128),n.push(63&o|128)}else n.push(r>>12|224),n.push(r>>6&63|128),n.push(63&r|128)}return bm(n)}function oy(e,t){t||(t=function(e){return[parseInt(e,16)]});let n=0,r={};return e.split(",").forEach((e=>{let i=e.split(":");n+=parseInt(i[0],16),r[n]=t(i[1])})),r}function sy(e){let t=0;return e.split(",").map((e=>{let n=e.split("-");1===n.length?n[1]="0":""===n[1]&&(n[1]="1");let r=t+parseInt(n[0],16);return t=parseInt(n[1],16),{l:r,h:t}}))}!function(e){e.current="",e.NFC="NFC",e.NFD="NFD",e.NFKC="NFKC",e.NFKD="NFKD"}(ty||(ty={})),function(e){e.UNEXPECTED_CONTINUE="unexpected continuation byte",e.BAD_PREFIX="bad codepoint prefix",e.OVERRUN="string overrun",e.MISSING_CONTINUE="missing continuation byte",e.OUT_OF_RANGE="out of UTF-8 range",e.UTF16_SURROGATE="UTF-16 surrogate",e.OVERLONG="overlong representation"}(ny||(ny={})),Object.freeze({error:function(e,t,n,r,i){return ey.throwArgumentError(`invalid codepoint at offset ${t}; ${e}`,"bytes",n)},ignore:ry,replace:function(e,t,n,r,i){return e===ny.OVERLONG?(r.push(i),0):(r.push(65533),ry(e,t,n))}}),sy("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"),"ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((e=>parseInt(e,16))),oy("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"),oy("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"),oy("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",(function(e){if(e.length%4!=0)throw new Error("bad data");let t=[];for(let n=0;n<e.length;n+=4)t.push(parseInt(e.substring(n,n+4),16));return t})),sy("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");const ay="hash/5.7.0";function cy(e,t){null==t&&(t=1);const n=[],r=n.forEach,i=function(e,t){r.call(e,(function(e){t>0&&Array.isArray(e)?i(e,t-1):n.push(e)}))};return i(e,t),n}function ly(e){return function(e){let t=0;return()=>e[t++]}(function(e){let t=0;function n(){return e[t++]<<8|e[t++]}let r=n(),i=1,o=[0,1];for(let e=1;e<r;e++)o.push(i+=n());let s=n(),a=t;t+=s;let c=0,l=0;function u(){return 0==c&&(l=l<<8|e[t++],c=8),l>>--c&1}const d=Math.pow(2,31),h=d>>>1,f=h>>1,p=d-1;let g=0;for(let e=0;e<31;e++)g=g<<1|u();let m=[],y=0,v=d;for(;;){let e=Math.floor(((g-y+1)*i-1)/v),t=0,n=r;for(;n-t>1;){let r=t+n>>>1;e<o[r]?n=r:t=r}if(0==t)break;m.push(t);let s=y+Math.floor(v*o[t]/i),a=y+Math.floor(v*o[t+1]/i)-1;for(;!((s^a)&h);)g=g<<1&p|u(),s=s<<1&p,a=a<<1&p|1;for(;s&~a&f;)g=g&h|g<<1&p>>>1|u(),s=s<<1^h,a=(a^h)<<1|h|1;y=s,v=1+a-s}let b=r-4;return m.map((t=>{switch(t-b){case 3:return b+65792+(e[a++]<<16|e[a++]<<8|e[a++]);case 2:return b+256+(e[a++]<<8|e[a++]);case 1:return b+e[a++];default:return t-1}}))}(e))}function uy(e){return 1&e?~e>>1:e>>1}function dy(e,t){let n=Array(e);for(let r=0,i=-1;r<e;r++)n[r]=i+=1+t();return n}function hy(e,t){let n=Array(e);for(let r=0,i=0;r<e;r++)n[r]=i+=uy(t());return n}function fy(e,t){let n=dy(e(),e),r=e(),i=dy(r,e),o=function(e,t){let n=Array(e);for(let r=0;r<e;r++)n[r]=1+t();return n}(r,e);for(let e=0;e<r;e++)for(let t=0;t<o[e];t++)n.push(i[e]+t);return t?n.map((e=>t[e])):n}function py(e,t,n){let r=Array(e).fill(void 0).map((()=>[]));for(let i=0;i<t;i++)hy(e,n).forEach(((e,t)=>r[t].push(e)));return r}function gy(e,t){let n=1+t(),r=t(),i=function(e){let t=[];for(;;){let n=e();if(0==n)break;t.push(n)}return t}(t);return cy(py(i.length,1+e,t).map(((e,t)=>{const o=e[0],s=e.slice(1);return Array(i[t]).fill(void 0).map(((e,t)=>{let i=t*r;return[o+t*n,s.map((e=>e+i))]}))})))}function my(e,t){return py(1+t(),1+e,t).map((e=>[e[0],e.slice(1)]))}const yy=ly(function(e){e=atob(e);const t=[];for(let n=0;n<e.length;n++)t.push(e.charCodeAt(n));return bm(t)}("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="));new Set(fy(yy)),new Set(fy(yy)),function(e){let t=[];for(;;){let n=e();if(0==n)break;t.push(gy(n,e))}for(;;){let n=e()-1;if(n<0)break;t.push(my(n,e))}(function(e){const t={};for(let n=0;n<e.length;n++){const r=e[n];t[r[0]]=r[1]}})(cy(t))}(yy),function(e){let t=fy(e).sort(((e,t)=>e-t));(function n(){let r=[];for(;;){let i=fy(e,t);if(0==i.length)break;r.push({set:new Set(i),node:n()})}r.sort(((e,t)=>t.set.size-e.set.size));let i=e(),o=i%3;i=i/3|0;let s=!!(1&i);i>>=1;let a=1==i,c=2==i;return{branches:r,valid:o,fe0f:s,save:a,check:c}})()}(yy),new fm(ay);new Uint8Array(32).fill(0);const vy="Ethereum Signed Message:\n";function by(e){return"string"==typeof e&&(e=iy(e)),Sm(function(e){const t=e.map((e=>bm(e))),n=t.reduce(((e,t)=>e+t.length),0),r=new Uint8Array(n);return t.reduce(((e,t)=>(r.set(t,e),e+t.length)),0),mm(r)}([iy(vy),iy(String(e.length)),e]))}new fm("rlp/5.7.0");const wy=new fm("address/5.7.0");function Ay(e){wm(e,20)||wy.throwArgumentError("invalid address","address",e);const t=(e=e.toLowerCase()).substring(2).split(""),n=new Uint8Array(40);for(let e=0;e<40;e++)n[e]=t[e].charCodeAt(0);const r=bm(Sm(n));for(let e=0;e<40;e+=2)r[e>>1]>>4>=8&&(t[e]=t[e].toUpperCase()),(15&r[e>>1])>=8&&(t[e+1]=t[e+1].toUpperCase());return"0x"+t.join("")}const _y={};for(let e=0;e<10;e++)_y[String(e)]=String(e);for(let e=0;e<26;e++)_y[String.fromCharCode(65+e)]=String(10+e);const Ey=Math.floor(function(e){return Math.log10?Math.log10(e):Math.log(e)/Math.LN10}(9007199254740991));function Cy(e){let t=null;if("string"!=typeof e&&wy.throwArgumentError("invalid address","address",e),e.match(/^(0x)?[0-9a-fA-F]{40}$/))"0x"!==e.substring(0,2)&&(e="0x"+e),t=Ay(e),e.match(/([A-F].*[a-f])|([a-f].*[A-F])/)&&t!==e&&wy.throwArgumentError("bad address checksum","address",e);else if(e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){for(e.substring(2,4)!==function(e){let t=(e=(e=e.toUpperCase()).substring(4)+e.substring(0,2)+"00").split("").map((e=>_y[e])).join("");for(;t.length>=Ey;){let e=t.substring(0,Ey);t=parseInt(e,10)%97+t.substring(e.length)}let n=String(98-parseInt(t,10)%97);for(;n.length<2;)n="0"+n;return n}(e)&&wy.throwArgumentError("bad icap checksum","address",e),t=function(e){return new Rm(e,36).toString(16)}(e.substring(4));t.length<40;)t="0"+t;t=Ay("0x"+t)}else wy.throwArgumentError("invalid address","address",e);return t}function ky(e,t,n){Object.defineProperty(e,t,{enumerable:!0,value:n,writable:!1})}new fm("properties/5.7.0"),new fm(ay);new Uint8Array(32).fill(0),Dm.from(-1);const Sy=Dm.from(0),xy=Dm.from(1);Dm.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),Cm(xy.toHexString(),32),Cm(Sy.toHexString(),32);var My={},Iy={},Ty=Ry;function Ry(e,t){if(!e)throw new Error(t||"Assertion failed")}Ry.equal=function(e,t,n){if(e!=t)throw new Error(n||"Assertion failed: "+e+" != "+t)};var Py={exports:{}};"function"==typeof Object.create?Py.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:Py.exports=function(e,t){if(t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}};var Oy=Ty,Ny=Py.exports;function Ly(e,t){return!(55296!=(64512&e.charCodeAt(t))||t<0||t+1>=e.length)&&56320==(64512&e.charCodeAt(t+1))}function Dy(e){return(e>>>24|e>>>8&65280|e<<8&16711680|(255&e)<<24)>>>0}function By(e){return 1===e.length?"0"+e:e}function Uy(e){return 7===e.length?"0"+e:6===e.length?"00"+e:5===e.length?"000"+e:4===e.length?"0000"+e:3===e.length?"00000"+e:2===e.length?"000000"+e:1===e.length?"0000000"+e:e}Iy.inherits=Ny,Iy.toArray=function(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var n=[];if("string"==typeof e)if(t){if("hex"===t)for((e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e),i=0;i<e.length;i+=2)n.push(parseInt(e[i]+e[i+1],16))}else for(var r=0,i=0;i<e.length;i++){var o=e.charCodeAt(i);o<128?n[r++]=o:o<2048?(n[r++]=o>>6|192,n[r++]=63&o|128):Ly(e,i)?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++i)),n[r++]=o>>18|240,n[r++]=o>>12&63|128,n[r++]=o>>6&63|128,n[r++]=63&o|128):(n[r++]=o>>12|224,n[r++]=o>>6&63|128,n[r++]=63&o|128)}else for(i=0;i<e.length;i++)n[i]=0|e[i];return n},Iy.toHex=function(e){for(var t="",n=0;n<e.length;n++)t+=By(e[n].toString(16));return t},Iy.htonl=Dy,Iy.toHex32=function(e,t){for(var n="",r=0;r<e.length;r++){var i=e[r];"little"===t&&(i=Dy(i)),n+=Uy(i.toString(16))}return n},Iy.zero2=By,Iy.zero8=Uy,Iy.join32=function(e,t,n,r){var i=n-t;Oy(i%4==0);for(var o=new Array(i/4),s=0,a=t;s<o.length;s++,a+=4){var c;c="big"===r?e[a]<<24|e[a+1]<<16|e[a+2]<<8|e[a+3]:e[a+3]<<24|e[a+2]<<16|e[a+1]<<8|e[a],o[s]=c>>>0}return o},Iy.split32=function(e,t){for(var n=new Array(4*e.length),r=0,i=0;r<e.length;r++,i+=4){var o=e[r];"big"===t?(n[i]=o>>>24,n[i+1]=o>>>16&255,n[i+2]=o>>>8&255,n[i+3]=255&o):(n[i+3]=o>>>24,n[i+2]=o>>>16&255,n[i+1]=o>>>8&255,n[i]=255&o)}return n},Iy.rotr32=function(e,t){return e>>>t|e<<32-t},Iy.rotl32=function(e,t){return e<<t|e>>>32-t},Iy.sum32=function(e,t){return e+t>>>0},Iy.sum32_3=function(e,t,n){return e+t+n>>>0},Iy.sum32_4=function(e,t,n,r){return e+t+n+r>>>0},Iy.sum32_5=function(e,t,n,r,i){return e+t+n+r+i>>>0},Iy.sum64=function(e,t,n,r){var i=e[t],o=r+e[t+1]>>>0,s=(o<r?1:0)+n+i;e[t]=s>>>0,e[t+1]=o},Iy.sum64_hi=function(e,t,n,r){return(t+r>>>0<t?1:0)+e+n>>>0},Iy.sum64_lo=function(e,t,n,r){return t+r>>>0},Iy.sum64_4_hi=function(e,t,n,r,i,o,s,a){var c=0,l=t;return c+=(l=l+r>>>0)<t?1:0,c+=(l=l+o>>>0)<o?1:0,e+n+i+s+(c+=(l=l+a>>>0)<a?1:0)>>>0},Iy.sum64_4_lo=function(e,t,n,r,i,o,s,a){return t+r+o+a>>>0},Iy.sum64_5_hi=function(e,t,n,r,i,o,s,a,c,l){var u=0,d=t;return u+=(d=d+r>>>0)<t?1:0,u+=(d=d+o>>>0)<o?1:0,u+=(d=d+a>>>0)<a?1:0,e+n+i+s+c+(u+=(d=d+l>>>0)<l?1:0)>>>0},Iy.sum64_5_lo=function(e,t,n,r,i,o,s,a,c,l){return t+r+o+a+l>>>0},Iy.rotr64_hi=function(e,t,n){return(t<<32-n|e>>>n)>>>0},Iy.rotr64_lo=function(e,t,n){return(e<<32-n|t>>>n)>>>0},Iy.shr64_hi=function(e,t,n){return e>>>n},Iy.shr64_lo=function(e,t,n){return(e<<32-n|t>>>n)>>>0};var jy={},Fy=Iy,zy=Ty;function $y(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}jy.BlockHash=$y,$y.prototype.update=function(e,t){if(e=Fy.toArray(e,t),this.pending?this.pending=this.pending.concat(e):this.pending=e,this.pendingTotal+=e.length,this.pending.length>=this._delta8){var n=(e=this.pending).length%this._delta8;this.pending=e.slice(e.length-n,e.length),0===this.pending.length&&(this.pending=null),e=Fy.join32(e,0,e.length-n,this.endian);for(var r=0;r<e.length;r+=this._delta32)this._update(e,r,r+this._delta32)}return this},$y.prototype.digest=function(e){return this.update(this._pad()),zy(null===this.pending),this._digest(e)},$y.prototype._pad=function(){var e=this.pendingTotal,t=this._delta8,n=t-(e+this.padLength)%t,r=new Array(n+this.padLength);r[0]=128;for(var i=1;i<n;i++)r[i]=0;if(e<<=3,"big"===this.endian){for(var o=8;o<this.padLength;o++)r[i++]=0;r[i++]=0,r[i++]=0,r[i++]=0,r[i++]=0,r[i++]=e>>>24&255,r[i++]=e>>>16&255,r[i++]=e>>>8&255,r[i++]=255&e}else for(r[i++]=255&e,r[i++]=e>>>8&255,r[i++]=e>>>16&255,r[i++]=e>>>24&255,r[i++]=0,r[i++]=0,r[i++]=0,r[i++]=0,o=8;o<this.padLength;o++)r[i++]=0;return r};var qy={},Hy={},Wy=Iy.rotr32;function Vy(e,t,n){return e&t^~e&n}function Ky(e,t,n){return e&t^e&n^t&n}function Zy(e,t,n){return e^t^n}Hy.ft_1=function(e,t,n,r){return 0===e?Vy(t,n,r):1===e||3===e?Zy(t,n,r):2===e?Ky(t,n,r):void 0},Hy.ch32=Vy,Hy.maj32=Ky,Hy.p32=Zy,Hy.s0_256=function(e){return Wy(e,2)^Wy(e,13)^Wy(e,22)},Hy.s1_256=function(e){return Wy(e,6)^Wy(e,11)^Wy(e,25)},Hy.g0_256=function(e){return Wy(e,7)^Wy(e,18)^e>>>3},Hy.g1_256=function(e){return Wy(e,17)^Wy(e,19)^e>>>10};var Gy=Iy,Yy=jy,Qy=Hy,Jy=Gy.rotl32,Xy=Gy.sum32,ev=Gy.sum32_5,tv=Qy.ft_1,nv=Yy.BlockHash,rv=[1518500249,1859775393,2400959708,3395469782];function iv(){if(!(this instanceof iv))return new iv;nv.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}Gy.inherits(iv,nv);var ov=iv;iv.blockSize=512,iv.outSize=160,iv.hmacStrength=80,iv.padLength=64,iv.prototype._update=function(e,t){for(var n=this.W,r=0;r<16;r++)n[r]=e[t+r];for(;r<n.length;r++)n[r]=Jy(n[r-3]^n[r-8]^n[r-14]^n[r-16],1);var i=this.h[0],o=this.h[1],s=this.h[2],a=this.h[3],c=this.h[4];for(r=0;r<n.length;r++){var l=~~(r/20),u=ev(Jy(i,5),tv(l,o,s,a),c,n[r],rv[l]);c=a,a=s,s=Jy(o,30),o=i,i=u}this.h[0]=Xy(this.h[0],i),this.h[1]=Xy(this.h[1],o),this.h[2]=Xy(this.h[2],s),this.h[3]=Xy(this.h[3],a),this.h[4]=Xy(this.h[4],c)},iv.prototype._digest=function(e){return"hex"===e?Gy.toHex32(this.h,"big"):Gy.split32(this.h,"big")};var sv=Iy,av=jy,cv=Hy,lv=Ty,uv=sv.sum32,dv=sv.sum32_4,hv=sv.sum32_5,fv=cv.ch32,pv=cv.maj32,gv=cv.s0_256,mv=cv.s1_256,yv=cv.g0_256,vv=cv.g1_256,bv=av.BlockHash,wv=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function Av(){if(!(this instanceof Av))return new Av;bv.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=wv,this.W=new Array(64)}sv.inherits(Av,bv);var _v=Av;Av.blockSize=512,Av.outSize=256,Av.hmacStrength=192,Av.padLength=64,Av.prototype._update=function(e,t){for(var n=this.W,r=0;r<16;r++)n[r]=e[t+r];for(;r<n.length;r++)n[r]=dv(vv(n[r-2]),n[r-7],yv(n[r-15]),n[r-16]);var i=this.h[0],o=this.h[1],s=this.h[2],a=this.h[3],c=this.h[4],l=this.h[5],u=this.h[6],d=this.h[7];for(lv(this.k.length===n.length),r=0;r<n.length;r++){var h=hv(d,mv(c),fv(c,l,u),this.k[r],n[r]),f=uv(gv(i),pv(i,o,s));d=u,u=l,l=c,c=uv(a,h),a=s,s=o,o=i,i=uv(h,f)}this.h[0]=uv(this.h[0],i),this.h[1]=uv(this.h[1],o),this.h[2]=uv(this.h[2],s),this.h[3]=uv(this.h[3],a),this.h[4]=uv(this.h[4],c),this.h[5]=uv(this.h[5],l),this.h[6]=uv(this.h[6],u),this.h[7]=uv(this.h[7],d)},Av.prototype._digest=function(e){return"hex"===e?sv.toHex32(this.h,"big"):sv.split32(this.h,"big")};var Ev=Iy,Cv=_v;function kv(){if(!(this instanceof kv))return new kv;Cv.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}Ev.inherits(kv,Cv);var Sv=kv;kv.blockSize=512,kv.outSize=224,kv.hmacStrength=192,kv.padLength=64,kv.prototype._digest=function(e){return"hex"===e?Ev.toHex32(this.h.slice(0,7),"big"):Ev.split32(this.h.slice(0,7),"big")};var xv=Iy,Mv=jy,Iv=Ty,Tv=xv.rotr64_hi,Rv=xv.rotr64_lo,Pv=xv.shr64_hi,Ov=xv.shr64_lo,Nv=xv.sum64,Lv=xv.sum64_hi,Dv=xv.sum64_lo,Bv=xv.sum64_4_hi,Uv=xv.sum64_4_lo,jv=xv.sum64_5_hi,Fv=xv.sum64_5_lo,zv=Mv.BlockHash,$v=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function qv(){if(!(this instanceof qv))return new qv;zv.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=$v,this.W=new Array(160)}xv.inherits(qv,zv);var Hv=qv;function Wv(e,t,n,r,i){var o=e&n^~e&i;return o<0&&(o+=4294967296),o}function Vv(e,t,n,r,i,o){var s=t&r^~t&o;return s<0&&(s+=4294967296),s}function Kv(e,t,n,r,i){var o=e&n^e&i^n&i;return o<0&&(o+=4294967296),o}function Zv(e,t,n,r,i,o){var s=t&r^t&o^r&o;return s<0&&(s+=4294967296),s}function Gv(e,t){var n=Tv(e,t,28)^Tv(t,e,2)^Tv(t,e,7);return n<0&&(n+=4294967296),n}function Yv(e,t){var n=Rv(e,t,28)^Rv(t,e,2)^Rv(t,e,7);return n<0&&(n+=4294967296),n}function Qv(e,t){var n=Tv(e,t,14)^Tv(e,t,18)^Tv(t,e,9);return n<0&&(n+=4294967296),n}function Jv(e,t){var n=Rv(e,t,14)^Rv(e,t,18)^Rv(t,e,9);return n<0&&(n+=4294967296),n}function Xv(e,t){var n=Tv(e,t,1)^Tv(e,t,8)^Pv(e,t,7);return n<0&&(n+=4294967296),n}function eb(e,t){var n=Rv(e,t,1)^Rv(e,t,8)^Ov(e,t,7);return n<0&&(n+=4294967296),n}function tb(e,t){var n=Tv(e,t,19)^Tv(t,e,29)^Pv(e,t,6);return n<0&&(n+=4294967296),n}function nb(e,t){var n=Rv(e,t,19)^Rv(t,e,29)^Ov(e,t,6);return n<0&&(n+=4294967296),n}qv.blockSize=1024,qv.outSize=512,qv.hmacStrength=192,qv.padLength=128,qv.prototype._prepareBlock=function(e,t){for(var n=this.W,r=0;r<32;r++)n[r]=e[t+r];for(;r<n.length;r+=2){var i=tb(n[r-4],n[r-3]),o=nb(n[r-4],n[r-3]),s=n[r-14],a=n[r-13],c=Xv(n[r-30],n[r-29]),l=eb(n[r-30],n[r-29]),u=n[r-32],d=n[r-31];n[r]=Bv(i,o,s,a,c,l,u,d),n[r+1]=Uv(i,o,s,a,c,l,u,d)}},qv.prototype._update=function(e,t){this._prepareBlock(e,t);var n=this.W,r=this.h[0],i=this.h[1],o=this.h[2],s=this.h[3],a=this.h[4],c=this.h[5],l=this.h[6],u=this.h[7],d=this.h[8],h=this.h[9],f=this.h[10],p=this.h[11],g=this.h[12],m=this.h[13],y=this.h[14],v=this.h[15];Iv(this.k.length===n.length);for(var b=0;b<n.length;b+=2){var w=y,A=v,_=Qv(d,h),E=Jv(d,h),C=Wv(d,h,f,p,g),k=Vv(d,h,f,p,g,m),S=this.k[b],x=this.k[b+1],M=n[b],I=n[b+1],T=jv(w,A,_,E,C,k,S,x,M,I),R=Fv(w,A,_,E,C,k,S,x,M,I);w=Gv(r,i),A=Yv(r,i),_=Kv(r,i,o,s,a),E=Zv(r,i,o,s,a,c);var P=Lv(w,A,_,E),O=Dv(w,A,_,E);y=g,v=m,g=f,m=p,f=d,p=h,d=Lv(l,u,T,R),h=Dv(u,u,T,R),l=a,u=c,a=o,c=s,o=r,s=i,r=Lv(T,R,P,O),i=Dv(T,R,P,O)}Nv(this.h,0,r,i),Nv(this.h,2,o,s),Nv(this.h,4,a,c),Nv(this.h,6,l,u),Nv(this.h,8,d,h),Nv(this.h,10,f,p),Nv(this.h,12,g,m),Nv(this.h,14,y,v)},qv.prototype._digest=function(e){return"hex"===e?xv.toHex32(this.h,"big"):xv.split32(this.h,"big")};var rb=Iy,ib=Hv;function ob(){if(!(this instanceof ob))return new ob;ib.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}rb.inherits(ob,ib);var sb=ob;ob.blockSize=1024,ob.outSize=384,ob.hmacStrength=192,ob.padLength=128,ob.prototype._digest=function(e){return"hex"===e?rb.toHex32(this.h.slice(0,12),"big"):rb.split32(this.h.slice(0,12),"big")},qy.sha1=ov,qy.sha224=Sv,qy.sha256=_v,qy.sha384=sb,qy.sha512=Hv;var ab={},cb=Iy,lb=jy,ub=cb.rotl32,db=cb.sum32,hb=cb.sum32_3,fb=cb.sum32_4,pb=lb.BlockHash;function gb(){if(!(this instanceof gb))return new gb;pb.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}function mb(e,t,n,r){return e<=15?t^n^r:e<=31?t&n|~t&r:e<=47?(t|~n)^r:e<=63?t&r|n&~r:t^(n|~r)}function yb(e){return e<=15?0:e<=31?1518500249:e<=47?1859775393:e<=63?2400959708:2840853838}function vb(e){return e<=15?1352829926:e<=31?1548603684:e<=47?1836072691:e<=63?2053994217:0}cb.inherits(gb,pb),ab.ripemd160=gb,gb.blockSize=512,gb.outSize=160,gb.hmacStrength=192,gb.padLength=64,gb.prototype._update=function(e,t){for(var n=this.h[0],r=this.h[1],i=this.h[2],o=this.h[3],s=this.h[4],a=n,c=r,l=i,u=o,d=s,h=0;h<80;h++){var f=db(ub(fb(n,mb(h,r,i,o),e[bb[h]+t],yb(h)),Ab[h]),s);n=s,s=o,o=ub(i,10),i=r,r=f,f=db(ub(fb(a,mb(79-h,c,l,u),e[wb[h]+t],vb(h)),_b[h]),d),a=d,d=u,u=ub(l,10),l=c,c=f}f=hb(this.h[1],i,u),this.h[1]=hb(this.h[2],o,d),this.h[2]=hb(this.h[3],s,a),this.h[3]=hb(this.h[4],n,c),this.h[4]=hb(this.h[0],r,l),this.h[0]=f},gb.prototype._digest=function(e){return"hex"===e?cb.toHex32(this.h,"little"):cb.split32(this.h,"little")};var bb=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],wb=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],Ab=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],_b=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],Eb=Iy,Cb=Ty;function kb(e,t,n){if(!(this instanceof kb))return new kb(e,t,n);this.Hash=e,this.blockSize=e.blockSize/8,this.outSize=e.outSize/8,this.inner=null,this.outer=null,this._init(Eb.toArray(t,n))}var Sb=kb;function xb(e,t,n){return n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(t??n.path)}},e(n,n.exports),n.exports}kb.prototype._init=function(e){e.length>this.blockSize&&(e=(new this.Hash).update(e).digest()),Cb(e.length<=this.blockSize);for(var t=e.length;t<this.blockSize;t++)e.push(0);for(t=0;t<e.length;t++)e[t]^=54;for(this.inner=(new this.Hash).update(e),t=0;t<e.length;t++)e[t]^=106;this.outer=(new this.Hash).update(e)},kb.prototype.update=function(e,t){return this.inner.update(e,t),this},kb.prototype.digest=function(e){return this.outer.update(this.inner.digest()),this.outer.digest(e)},function(e){var t=e;t.utils=Iy,t.common=jy,t.sha=qy,t.ripemd=ab,t.hmac=Sb,t.sha1=t.sha.sha1,t.sha256=t.sha.sha256,t.sha224=t.sha.sha224,t.sha384=t.sha.sha384,t.sha512=t.sha.sha512,t.ripemd160=t.ripemd.ripemd160}(My);var Mb=Ib;function Ib(e,t){if(!e)throw new Error(t||"Assertion failed")}Ib.equal=function(e,t,n){if(e!=t)throw new Error(n||"Assertion failed: "+e+" != "+t)};var Tb=xb((function(e,t){var n=t;function r(e){return 1===e.length?"0"+e:e}function i(e){for(var t="",n=0;n<e.length;n++)t+=r(e[n].toString(16));return t}n.toArray=function(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var n=[];if("string"!=typeof e){for(var r=0;r<e.length;r++)n[r]=0|e[r];return n}if("hex"===t){(e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e);for(r=0;r<e.length;r+=2)n.push(parseInt(e[r]+e[r+1],16))}else for(r=0;r<e.length;r++){var i=e.charCodeAt(r),o=i>>8,s=255&i;o?n.push(o,s):n.push(s)}return n},n.zero2=r,n.toHex=i,n.encode=function(e,t){return"hex"===t?i(e):e}})),Rb=xb((function(e,t){var n=t;n.assert=Mb,n.toArray=Tb.toArray,n.zero2=Tb.zero2,n.toHex=Tb.toHex,n.encode=Tb.encode,n.getNAF=function(e,t,n){var r=new Array(Math.max(e.bitLength(),n)+1);r.fill(0);for(var i=1<<t+1,o=e.clone(),s=0;s<r.length;s++){var a,c=o.andln(i-1);o.isOdd()?(a=c>(i>>1)-1?(i>>1)-c:c,o.isubn(a)):a=0,r[s]=a,o.iushrn(1)}return r},n.getJSF=function(e,t){var n=[[],[]];e=e.clone(),t=t.clone();for(var r,i=0,o=0;e.cmpn(-i)>0||t.cmpn(-o)>0;){var s,a,c=e.andln(3)+i&3,l=t.andln(3)+o&3;3===c&&(c=-1),3===l&&(l=-1),1&c?s=3!==(r=e.andln(7)+i&7)&&5!==r||2!==l?c:-c:s=0,n[0].push(s),1&l?a=3!==(r=t.andln(7)+o&7)&&5!==r||2!==c?l:-l:a=0,n[1].push(a),2*i===s+1&&(i=1-i),2*o===a+1&&(o=1-o),e.iushrn(1),t.iushrn(1)}return n},n.cachedProperty=function(e,t,n){var r="_"+t;e.prototype[t]=function(){return void 0!==this[r]?this[r]:this[r]=n.call(this)}},n.parseBytes=function(e){return"string"==typeof e?n.toArray(e,"hex"):e},n.intFromLE=function(e){return new Im(e,"hex","le")}})),Pb=Rb.getNAF,Ob=Rb.getJSF,Nb=Rb.assert;function Lb(e,t){this.type=e,this.p=new Im(t.p,16),this.red=t.prime?Im.red(t.prime):Im.mont(this.p),this.zero=new Im(0).toRed(this.red),this.one=new Im(1).toRed(this.red),this.two=new Im(2).toRed(this.red),this.n=t.n&&new Im(t.n,16),this.g=t.g&&this.pointFromJSON(t.g,t.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4),this._bitLength=this.n?this.n.bitLength():0;var n=this.n&&this.p.div(this.n);!n||n.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}var Db=Lb;function Bb(e,t){this.curve=e,this.type=t,this.precomputed=null}Lb.prototype.point=function(){throw new Error("Not implemented")},Lb.prototype.validate=function(){throw new Error("Not implemented")},Lb.prototype._fixedNafMul=function(e,t){Nb(e.precomputed);var n=e._getDoubles(),r=Pb(t,1,this._bitLength),i=(1<<n.step+1)-(n.step%2==0?2:1);i/=3;var o,s,a=[];for(o=0;o<r.length;o+=n.step){s=0;for(var c=o+n.step-1;c>=o;c--)s=(s<<1)+r[c];a.push(s)}for(var l=this.jpoint(null,null,null),u=this.jpoint(null,null,null),d=i;d>0;d--){for(o=0;o<a.length;o++)(s=a[o])===d?u=u.mixedAdd(n.points[o]):s===-d&&(u=u.mixedAdd(n.points[o].neg()));l=l.add(u)}return l.toP()},Lb.prototype._wnafMul=function(e,t){var n=4,r=e._getNAFPoints(n);n=r.wnd;for(var i=r.points,o=Pb(t,n,this._bitLength),s=this.jpoint(null,null,null),a=o.length-1;a>=0;a--){for(var c=0;a>=0&&0===o[a];a--)c++;if(a>=0&&c++,s=s.dblp(c),a<0)break;var l=o[a];Nb(0!==l),s="affine"===e.type?l>0?s.mixedAdd(i[l-1>>1]):s.mixedAdd(i[-l-1>>1].neg()):l>0?s.add(i[l-1>>1]):s.add(i[-l-1>>1].neg())}return"affine"===e.type?s.toP():s},Lb.prototype._wnafMulAdd=function(e,t,n,r,i){var o,s,a,c=this._wnafT1,l=this._wnafT2,u=this._wnafT3,d=0;for(o=0;o<r;o++){var h=(a=t[o])._getNAFPoints(e);c[o]=h.wnd,l[o]=h.points}for(o=r-1;o>=1;o-=2){var f=o-1,p=o;if(1===c[f]&&1===c[p]){var g=[t[f],null,null,t[p]];0===t[f].y.cmp(t[p].y)?(g[1]=t[f].add(t[p]),g[2]=t[f].toJ().mixedAdd(t[p].neg())):0===t[f].y.cmp(t[p].y.redNeg())?(g[1]=t[f].toJ().mixedAdd(t[p]),g[2]=t[f].add(t[p].neg())):(g[1]=t[f].toJ().mixedAdd(t[p]),g[2]=t[f].toJ().mixedAdd(t[p].neg()));var m=[-3,-1,-5,-7,0,7,5,1,3],y=Ob(n[f],n[p]);for(d=Math.max(y[0].length,d),u[f]=new Array(d),u[p]=new Array(d),s=0;s<d;s++){var v=0|y[0][s],b=0|y[1][s];u[f][s]=m[3*(v+1)+(b+1)],u[p][s]=0,l[f]=g}}else u[f]=Pb(n[f],c[f],this._bitLength),u[p]=Pb(n[p],c[p],this._bitLength),d=Math.max(u[f].length,d),d=Math.max(u[p].length,d)}var w=this.jpoint(null,null,null),A=this._wnafT4;for(o=d;o>=0;o--){for(var _=0;o>=0;){var E=!0;for(s=0;s<r;s++)A[s]=0|u[s][o],0!==A[s]&&(E=!1);if(!E)break;_++,o--}if(o>=0&&_++,w=w.dblp(_),o<0)break;for(s=0;s<r;s++){var C=A[s];0!==C&&(C>0?a=l[s][C-1>>1]:C<0&&(a=l[s][-C-1>>1].neg()),w="affine"===a.type?w.mixedAdd(a):w.add(a))}}for(o=0;o<r;o++)l[o]=null;return i?w:w.toP()},Lb.BasePoint=Bb,Bb.prototype.eq=function(){throw new Error("Not implemented")},Bb.prototype.validate=function(){return this.curve.validate(this)},Lb.prototype.decodePoint=function(e,t){e=Rb.toArray(e,t);var n=this.p.byteLength();if((4===e[0]||6===e[0]||7===e[0])&&e.length-1==2*n)return 6===e[0]?Nb(e[e.length-1]%2==0):7===e[0]&&Nb(e[e.length-1]%2==1),this.point(e.slice(1,1+n),e.slice(1+n,1+2*n));if((2===e[0]||3===e[0])&&e.length-1===n)return this.pointFromX(e.slice(1,1+n),3===e[0]);throw new Error("Unknown point format")},Bb.prototype.encodeCompressed=function(e){return this.encode(e,!0)},Bb.prototype._encode=function(e){var t=this.curve.p.byteLength(),n=this.getX().toArray("be",t);return e?[this.getY().isEven()?2:3].concat(n):[4].concat(n,this.getY().toArray("be",t))},Bb.prototype.encode=function(e,t){return Rb.encode(this._encode(t),e)},Bb.prototype.precompute=function(e){if(this.precomputed)return this;var t={doubles:null,naf:null,beta:null};return t.naf=this._getNAFPoints(8),t.doubles=this._getDoubles(4,e),t.beta=this._getBeta(),this.precomputed=t,this},Bb.prototype._hasDoubles=function(e){if(!this.precomputed)return!1;var t=this.precomputed.doubles;return!!t&&t.points.length>=Math.ceil((e.bitLength()+1)/t.step)},Bb.prototype._getDoubles=function(e,t){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var n=[this],r=this,i=0;i<t;i+=e){for(var o=0;o<e;o++)r=r.dbl();n.push(r)}return{step:e,points:n}},Bb.prototype._getNAFPoints=function(e){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var t=[this],n=(1<<e)-1,r=1===n?null:this.dbl(),i=1;i<n;i++)t[i]=t[i-1].add(r);return{wnd:e,points:t}},Bb.prototype._getBeta=function(){return null},Bb.prototype.dblp=function(e){for(var t=this,n=0;n<e;n++)t=t.dbl();return t};var Ub=xb((function(e){"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}})),jb=Rb.assert;function Fb(e){Db.call(this,"short",e),this.a=new Im(e.a,16).toRed(this.red),this.b=new Im(e.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(e),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}Ub(Fb,Db);var zb=Fb;function $b(e,t,n,r){Db.BasePoint.call(this,e,"affine"),null===t&&null===n?(this.x=null,this.y=null,this.inf=!0):(this.x=new Im(t,16),this.y=new Im(n,16),r&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}function qb(e,t,n,r){Db.BasePoint.call(this,e,"jacobian"),null===t&&null===n&&null===r?(this.x=this.curve.one,this.y=this.curve.one,this.z=new Im(0)):(this.x=new Im(t,16),this.y=new Im(n,16),this.z=new Im(r,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}Fb.prototype._getEndomorphism=function(e){if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){var t,n,r;if(e.beta)t=new Im(e.beta,16).toRed(this.red);else{var i=this._getEndoRoots(this.p);t=(t=i[0].cmp(i[1])<0?i[0]:i[1]).toRed(this.red)}if(e.lambda)n=new Im(e.lambda,16);else{var o=this._getEndoRoots(this.n);0===this.g.mul(o[0]).x.cmp(this.g.x.redMul(t))?n=o[0]:(n=o[1],jb(0===this.g.mul(n).x.cmp(this.g.x.redMul(t))))}return r=e.basis?e.basis.map((function(e){return{a:new Im(e.a,16),b:new Im(e.b,16)}})):this._getEndoBasis(n),{beta:t,lambda:n,basis:r}}},Fb.prototype._getEndoRoots=function(e){var t=e===this.p?this.red:Im.mont(e),n=new Im(2).toRed(t).redInvm(),r=n.redNeg(),i=new Im(3).toRed(t).redNeg().redSqrt().redMul(n);return[r.redAdd(i).fromRed(),r.redSub(i).fromRed()]},Fb.prototype._getEndoBasis=function(e){for(var t,n,r,i,o,s,a,c,l,u=this.n.ushrn(Math.floor(this.n.bitLength()/2)),d=e,h=this.n.clone(),f=new Im(1),p=new Im(0),g=new Im(0),m=new Im(1),y=0;0!==d.cmpn(0);){var v=h.div(d);c=h.sub(v.mul(d)),l=g.sub(v.mul(f));var b=m.sub(v.mul(p));if(!r&&c.cmp(u)<0)t=a.neg(),n=f,r=c.neg(),i=l;else if(r&&2==++y)break;a=c,h=d,d=c,g=f,f=l,m=p,p=b}o=c.neg(),s=l;var w=r.sqr().add(i.sqr());return o.sqr().add(s.sqr()).cmp(w)>=0&&(o=t,s=n),r.negative&&(r=r.neg(),i=i.neg()),o.negative&&(o=o.neg(),s=s.neg()),[{a:r,b:i},{a:o,b:s}]},Fb.prototype._endoSplit=function(e){var t=this.endo.basis,n=t[0],r=t[1],i=r.b.mul(e).divRound(this.n),o=n.b.neg().mul(e).divRound(this.n),s=i.mul(n.a),a=o.mul(r.a),c=i.mul(n.b),l=o.mul(r.b);return{k1:e.sub(s).sub(a),k2:c.add(l).neg()}},Fb.prototype.pointFromX=function(e,t){(e=new Im(e,16)).red||(e=e.toRed(this.red));var n=e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),r=n.redSqrt();if(0!==r.redSqr().redSub(n).cmp(this.zero))throw new Error("invalid point");var i=r.fromRed().isOdd();return(t&&!i||!t&&i)&&(r=r.redNeg()),this.point(e,r)},Fb.prototype.validate=function(e){if(e.inf)return!0;var t=e.x,n=e.y,r=this.a.redMul(t),i=t.redSqr().redMul(t).redIAdd(r).redIAdd(this.b);return 0===n.redSqr().redISub(i).cmpn(0)},Fb.prototype._endoWnafMulAdd=function(e,t,n){for(var r=this._endoWnafT1,i=this._endoWnafT2,o=0;o<e.length;o++){var s=this._endoSplit(t[o]),a=e[o],c=a._getBeta();s.k1.negative&&(s.k1.ineg(),a=a.neg(!0)),s.k2.negative&&(s.k2.ineg(),c=c.neg(!0)),r[2*o]=a,r[2*o+1]=c,i[2*o]=s.k1,i[2*o+1]=s.k2}for(var l=this._wnafMulAdd(1,r,i,2*o,n),u=0;u<2*o;u++)r[u]=null,i[u]=null;return l},Ub($b,Db.BasePoint),Fb.prototype.point=function(e,t,n){return new $b(this,e,t,n)},Fb.prototype.pointFromJSON=function(e,t){return $b.fromJSON(this,e,t)},$b.prototype._getBeta=function(){if(this.curve.endo){var e=this.precomputed;if(e&&e.beta)return e.beta;var t=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(e){var n=this.curve,r=function(e){return n.point(e.x.redMul(n.endo.beta),e.y)};e.beta=t,t.precomputed={beta:null,naf:e.naf&&{wnd:e.naf.wnd,points:e.naf.points.map(r)},doubles:e.doubles&&{step:e.doubles.step,points:e.doubles.points.map(r)}}}return t}},$b.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},$b.fromJSON=function(e,t,n){"string"==typeof t&&(t=JSON.parse(t));var r=e.point(t[0],t[1],n);if(!t[2])return r;function i(t){return e.point(t[0],t[1],n)}var o=t[2];return r.precomputed={beta:null,doubles:o.doubles&&{step:o.doubles.step,points:[r].concat(o.doubles.points.map(i))},naf:o.naf&&{wnd:o.naf.wnd,points:[r].concat(o.naf.points.map(i))}},r},$b.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},$b.prototype.isInfinity=function(){return this.inf},$b.prototype.add=function(e){if(this.inf)return e;if(e.inf)return this;if(this.eq(e))return this.dbl();if(this.neg().eq(e))return this.curve.point(null,null);if(0===this.x.cmp(e.x))return this.curve.point(null,null);var t=this.y.redSub(e.y);0!==t.cmpn(0)&&(t=t.redMul(this.x.redSub(e.x).redInvm()));var n=t.redSqr().redISub(this.x).redISub(e.x),r=t.redMul(this.x.redSub(n)).redISub(this.y);return this.curve.point(n,r)},$b.prototype.dbl=function(){if(this.inf)return this;var e=this.y.redAdd(this.y);if(0===e.cmpn(0))return this.curve.point(null,null);var t=this.curve.a,n=this.x.redSqr(),r=e.redInvm(),i=n.redAdd(n).redIAdd(n).redIAdd(t).redMul(r),o=i.redSqr().redISub(this.x.redAdd(this.x)),s=i.redMul(this.x.redSub(o)).redISub(this.y);return this.curve.point(o,s)},$b.prototype.getX=function(){return this.x.fromRed()},$b.prototype.getY=function(){return this.y.fromRed()},$b.prototype.mul=function(e){return e=new Im(e,16),this.isInfinity()?this:this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve.endo?this.curve._endoWnafMulAdd([this],[e]):this.curve._wnafMul(this,e)},$b.prototype.mulAdd=function(e,t,n){var r=[this,t],i=[e,n];return this.curve.endo?this.curve._endoWnafMulAdd(r,i):this.curve._wnafMulAdd(1,r,i,2)},$b.prototype.jmulAdd=function(e,t,n){var r=[this,t],i=[e,n];return this.curve.endo?this.curve._endoWnafMulAdd(r,i,!0):this.curve._wnafMulAdd(1,r,i,2,!0)},$b.prototype.eq=function(e){return this===e||this.inf===e.inf&&(this.inf||0===this.x.cmp(e.x)&&0===this.y.cmp(e.y))},$b.prototype.neg=function(e){if(this.inf)return this;var t=this.curve.point(this.x,this.y.redNeg());if(e&&this.precomputed){var n=this.precomputed,r=function(e){return e.neg()};t.precomputed={naf:n.naf&&{wnd:n.naf.wnd,points:n.naf.points.map(r)},doubles:n.doubles&&{step:n.doubles.step,points:n.doubles.points.map(r)}}}return t},$b.prototype.toJ=function(){return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)},Ub(qb,Db.BasePoint),Fb.prototype.jpoint=function(e,t,n){return new qb(this,e,t,n)},qb.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var e=this.z.redInvm(),t=e.redSqr(),n=this.x.redMul(t),r=this.y.redMul(t).redMul(e);return this.curve.point(n,r)},qb.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},qb.prototype.add=function(e){if(this.isInfinity())return e;if(e.isInfinity())return this;var t=e.z.redSqr(),n=this.z.redSqr(),r=this.x.redMul(t),i=e.x.redMul(n),o=this.y.redMul(t.redMul(e.z)),s=e.y.redMul(n.redMul(this.z)),a=r.redSub(i),c=o.redSub(s);if(0===a.cmpn(0))return 0!==c.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var l=a.redSqr(),u=l.redMul(a),d=r.redMul(l),h=c.redSqr().redIAdd(u).redISub(d).redISub(d),f=c.redMul(d.redISub(h)).redISub(o.redMul(u)),p=this.z.redMul(e.z).redMul(a);return this.curve.jpoint(h,f,p)},qb.prototype.mixedAdd=function(e){if(this.isInfinity())return e.toJ();if(e.isInfinity())return this;var t=this.z.redSqr(),n=this.x,r=e.x.redMul(t),i=this.y,o=e.y.redMul(t).redMul(this.z),s=n.redSub(r),a=i.redSub(o);if(0===s.cmpn(0))return 0!==a.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var c=s.redSqr(),l=c.redMul(s),u=n.redMul(c),d=a.redSqr().redIAdd(l).redISub(u).redISub(u),h=a.redMul(u.redISub(d)).redISub(i.redMul(l)),f=this.z.redMul(s);return this.curve.jpoint(d,h,f)},qb.prototype.dblp=function(e){if(0===e)return this;if(this.isInfinity())return this;if(!e)return this.dbl();var t;if(this.curve.zeroA||this.curve.threeA){var n=this;for(t=0;t<e;t++)n=n.dbl();return n}var r=this.curve.a,i=this.curve.tinv,o=this.x,s=this.y,a=this.z,c=a.redSqr().redSqr(),l=s.redAdd(s);for(t=0;t<e;t++){var u=o.redSqr(),d=l.redSqr(),h=d.redSqr(),f=u.redAdd(u).redIAdd(u).redIAdd(r.redMul(c)),p=o.redMul(d),g=f.redSqr().redISub(p.redAdd(p)),m=p.redISub(g),y=f.redMul(m);y=y.redIAdd(y).redISub(h);var v=l.redMul(a);t+1<e&&(c=c.redMul(h)),o=g,a=v,l=y}return this.curve.jpoint(o,l.redMul(i),a)},qb.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},qb.prototype._zeroDbl=function(){var e,t,n;if(this.zOne){var r=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),s=this.x.redAdd(i).redSqr().redISub(r).redISub(o);s=s.redIAdd(s);var a=r.redAdd(r).redIAdd(r),c=a.redSqr().redISub(s).redISub(s),l=o.redIAdd(o);l=(l=l.redIAdd(l)).redIAdd(l),e=c,t=a.redMul(s.redISub(c)).redISub(l),n=this.y.redAdd(this.y)}else{var u=this.x.redSqr(),d=this.y.redSqr(),h=d.redSqr(),f=this.x.redAdd(d).redSqr().redISub(u).redISub(h);f=f.redIAdd(f);var p=u.redAdd(u).redIAdd(u),g=p.redSqr(),m=h.redIAdd(h);m=(m=m.redIAdd(m)).redIAdd(m),e=g.redISub(f).redISub(f),t=p.redMul(f.redISub(e)).redISub(m),n=(n=this.y.redMul(this.z)).redIAdd(n)}return this.curve.jpoint(e,t,n)},qb.prototype._threeDbl=function(){var e,t,n;if(this.zOne){var r=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),s=this.x.redAdd(i).redSqr().redISub(r).redISub(o);s=s.redIAdd(s);var a=r.redAdd(r).redIAdd(r).redIAdd(this.curve.a),c=a.redSqr().redISub(s).redISub(s);e=c;var l=o.redIAdd(o);l=(l=l.redIAdd(l)).redIAdd(l),t=a.redMul(s.redISub(c)).redISub(l),n=this.y.redAdd(this.y)}else{var u=this.z.redSqr(),d=this.y.redSqr(),h=this.x.redMul(d),f=this.x.redSub(u).redMul(this.x.redAdd(u));f=f.redAdd(f).redIAdd(f);var p=h.redIAdd(h),g=(p=p.redIAdd(p)).redAdd(p);e=f.redSqr().redISub(g),n=this.y.redAdd(this.z).redSqr().redISub(d).redISub(u);var m=d.redSqr();m=(m=(m=m.redIAdd(m)).redIAdd(m)).redIAdd(m),t=f.redMul(p.redISub(e)).redISub(m)}return this.curve.jpoint(e,t,n)},qb.prototype._dbl=function(){var e=this.curve.a,t=this.x,n=this.y,r=this.z,i=r.redSqr().redSqr(),o=t.redSqr(),s=n.redSqr(),a=o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),c=t.redAdd(t),l=(c=c.redIAdd(c)).redMul(s),u=a.redSqr().redISub(l.redAdd(l)),d=l.redISub(u),h=s.redSqr();h=(h=(h=h.redIAdd(h)).redIAdd(h)).redIAdd(h);var f=a.redMul(d).redISub(h),p=n.redAdd(n).redMul(r);return this.curve.jpoint(u,f,p)},qb.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var e=this.x.redSqr(),t=this.y.redSqr(),n=this.z.redSqr(),r=t.redSqr(),i=e.redAdd(e).redIAdd(e),o=i.redSqr(),s=this.x.redAdd(t).redSqr().redISub(e).redISub(r),a=(s=(s=(s=s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),c=r.redIAdd(r);c=(c=(c=c.redIAdd(c)).redIAdd(c)).redIAdd(c);var l=i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(c),u=t.redMul(l);u=(u=u.redIAdd(u)).redIAdd(u);var d=this.x.redMul(a).redISub(u);d=(d=d.redIAdd(d)).redIAdd(d);var h=this.y.redMul(l.redMul(c.redISub(l)).redISub(s.redMul(a)));h=(h=(h=h.redIAdd(h)).redIAdd(h)).redIAdd(h);var f=this.z.redAdd(s).redSqr().redISub(n).redISub(a);return this.curve.jpoint(d,h,f)},qb.prototype.mul=function(e,t){return e=new Im(e,t),this.curve._wnafMul(this,e)},qb.prototype.eq=function(e){if("affine"===e.type)return this.eq(e.toJ());if(this===e)return!0;var t=this.z.redSqr(),n=e.z.redSqr();if(0!==this.x.redMul(n).redISub(e.x.redMul(t)).cmpn(0))return!1;var r=t.redMul(this.z),i=n.redMul(e.z);return 0===this.y.redMul(i).redISub(e.y.redMul(r)).cmpn(0)},qb.prototype.eqXToP=function(e){var t=this.z.redSqr(),n=e.toRed(this.curve.red).redMul(t);if(0===this.x.cmp(n))return!0;for(var r=e.clone(),i=this.curve.redN.redMul(t);;){if(r.iadd(this.curve.n),r.cmp(this.curve.p)>=0)return!1;if(n.redIAdd(i),0===this.x.cmp(n))return!0}},qb.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},qb.prototype.isInfinity=function(){return 0===this.z.cmpn(0)};var Hb=xb((function(e,t){var n=t;n.base=Db,n.short=zb,n.mont=null,n.edwards=null})),Wb=xb((function(e,t){var n,r=t,i=Rb.assert;function o(e){"short"===e.type?this.curve=new Hb.short(e):"edwards"===e.type?this.curve=new Hb.edwards(e):this.curve=new Hb.mont(e),this.g=this.curve.g,this.n=this.curve.n,this.hash=e.hash,i(this.g.validate(),"Invalid curve"),i(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}function s(e,t){Object.defineProperty(r,e,{configurable:!0,enumerable:!0,get:function(){var n=new o(t);return Object.defineProperty(r,e,{configurable:!0,enumerable:!0,value:n}),n}})}r.PresetCurve=o,s("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:My.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),s("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:My.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),s("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:My.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),s("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:My.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),s("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:My.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),s("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:My.sha256,gRed:!1,g:["9"]}),s("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:My.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});try{n=null.crash()}catch{n=void 0}s("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:My.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",n]})}));function Vb(e){if(!(this instanceof Vb))return new Vb(e);this.hash=e.hash,this.predResist=!!e.predResist,this.outLen=this.hash.outSize,this.minEntropy=e.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var t=Tb.toArray(e.entropy,e.entropyEnc||"hex"),n=Tb.toArray(e.nonce,e.nonceEnc||"hex"),r=Tb.toArray(e.pers,e.persEnc||"hex");Mb(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(t,n,r)}var Kb=Vb;Vb.prototype._init=function(e,t,n){var r=e.concat(t).concat(n);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var i=0;i<this.V.length;i++)this.K[i]=0,this.V[i]=1;this._update(r),this._reseed=1,this.reseedInterval=281474976710656},Vb.prototype._hmac=function(){return new My.hmac(this.hash,this.K)},Vb.prototype._update=function(e){var t=this._hmac().update(this.V).update([0]);e&&(t=t.update(e)),this.K=t.digest(),this.V=this._hmac().update(this.V).digest(),e&&(this.K=this._hmac().update(this.V).update([1]).update(e).digest(),this.V=this._hmac().update(this.V).digest())},Vb.prototype.reseed=function(e,t,n,r){"string"!=typeof t&&(r=n,n=t,t=null),e=Tb.toArray(e,t),n=Tb.toArray(n,r),Mb(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(e.concat(n||[])),this._reseed=1},Vb.prototype.generate=function(e,t,n,r){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required");"string"!=typeof t&&(r=n,n=t,t=null),n&&(n=Tb.toArray(n,r||"hex"),this._update(n));for(var i=[];i.length<e;)this.V=this._hmac().update(this.V).digest(),i=i.concat(this.V);var o=i.slice(0,e);return this._update(n),this._reseed++,Tb.encode(o,t)};var Zb=Rb.assert;function Gb(e,t){this.ec=e,this.priv=null,this.pub=null,t.priv&&this._importPrivate(t.priv,t.privEnc),t.pub&&this._importPublic(t.pub,t.pubEnc)}var Yb=Gb;Gb.fromPublic=function(e,t,n){return t instanceof Gb?t:new Gb(e,{pub:t,pubEnc:n})},Gb.fromPrivate=function(e,t,n){return t instanceof Gb?t:new Gb(e,{priv:t,privEnc:n})},Gb.prototype.validate=function(){var e=this.getPublic();return e.isInfinity()?{result:!1,reason:"Invalid public key"}:e.validate()?e.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},Gb.prototype.getPublic=function(e,t){return"string"==typeof e&&(t=e,e=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),t?this.pub.encode(t,e):this.pub},Gb.prototype.getPrivate=function(e){return"hex"===e?this.priv.toString(16,2):this.priv},Gb.prototype._importPrivate=function(e,t){this.priv=new Im(e,t||16),this.priv=this.priv.umod(this.ec.curve.n)},Gb.prototype._importPublic=function(e,t){if(e.x||e.y)return"mont"===this.ec.curve.type?Zb(e.x,"Need x coordinate"):("short"===this.ec.curve.type||"edwards"===this.ec.curve.type)&&Zb(e.x&&e.y,"Need both x and y coordinate"),void(this.pub=this.ec.curve.point(e.x,e.y));this.pub=this.ec.curve.decodePoint(e,t)},Gb.prototype.derive=function(e){return e.validate()||Zb(e.validate(),"public point not validated"),e.mul(this.priv).getX()},Gb.prototype.sign=function(e,t,n){return this.ec.sign(e,this,t,n)},Gb.prototype.verify=function(e,t){return this.ec.verify(e,t,this)},Gb.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"};var Qb=Rb.assert;function Jb(e,t){if(e instanceof Jb)return e;this._importDER(e,t)||(Qb(e.r&&e.s,"Signature without r or s"),this.r=new Im(e.r,16),this.s=new Im(e.s,16),void 0===e.recoveryParam?this.recoveryParam=null:this.recoveryParam=e.recoveryParam)}var Xb=Jb;function ew(){this.place=0}function tw(e,t){var n=e[t.place++];if(!(128&n))return n;var r=15&n;if(0===r||r>4)return!1;for(var i=0,o=0,s=t.place;o<r;o++,s++)i<<=8,i|=e[s],i>>>=0;return!(i<=127)&&(t.place=s,i)}function nw(e){for(var t=0,n=e.length-1;!e[t]&&!(128&e[t+1])&&t<n;)t++;return 0===t?e:e.slice(t)}function rw(e,t){if(t<128)e.push(t);else{var n=1+(Math.log(t)/Math.LN2>>>3);for(e.push(128|n);--n;)e.push(t>>>(n<<3)&255);e.push(t)}}Jb.prototype._importDER=function(e,t){e=Rb.toArray(e,t);var n=new ew;if(48!==e[n.place++])return!1;var r=tw(e,n);if(!1===r||r+n.place!==e.length||2!==e[n.place++])return!1;var i=tw(e,n);if(!1===i)return!1;var o=e.slice(n.place,i+n.place);if(n.place+=i,2!==e[n.place++])return!1;var s=tw(e,n);if(!1===s||e.length!==s+n.place)return!1;var a=e.slice(n.place,s+n.place);if(0===o[0]){if(!(128&o[1]))return!1;o=o.slice(1)}if(0===a[0]){if(!(128&a[1]))return!1;a=a.slice(1)}return this.r=new Im(o),this.s=new Im(a),this.recoveryParam=null,!0},Jb.prototype.toDER=function(e){var t=this.r.toArray(),n=this.s.toArray();for(128&t[0]&&(t=[0].concat(t)),128&n[0]&&(n=[0].concat(n)),t=nw(t),n=nw(n);!(n[0]||128&n[1]);)n=n.slice(1);var r=[2];rw(r,t.length),(r=r.concat(t)).push(2),rw(r,n.length);var i=r.concat(n),o=[48];return rw(o,i.length),o=o.concat(i),Rb.encode(o,e)};var iw=function(){throw new Error("unsupported")},ow=Rb.assert;function sw(e){if(!(this instanceof sw))return new sw(e);"string"==typeof e&&(ow(Object.prototype.hasOwnProperty.call(Wb,e),"Unknown curve "+e),e=Wb[e]),e instanceof Wb.PresetCurve&&(e={curve:e}),this.curve=e.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=e.curve.g,this.g.precompute(e.curve.n.bitLength()+1),this.hash=e.hash||e.curve.hash}var aw=sw;sw.prototype.keyPair=function(e){return new Yb(this,e)},sw.prototype.keyFromPrivate=function(e,t){return Yb.fromPrivate(this,e,t)},sw.prototype.keyFromPublic=function(e,t){return Yb.fromPublic(this,e,t)},sw.prototype.genKeyPair=function(e){e||(e={});for(var t=new Kb({hash:this.hash,pers:e.pers,persEnc:e.persEnc||"utf8",entropy:e.entropy||iw(this.hash.hmacStrength),entropyEnc:e.entropy&&e.entropyEnc||"utf8",nonce:this.n.toArray()}),n=this.n.byteLength(),r=this.n.sub(new Im(2));;){var i=new Im(t.generate(n));if(!(i.cmp(r)>0))return i.iaddn(1),this.keyFromPrivate(i)}},sw.prototype._truncateToN=function(e,t){var n=8*e.byteLength()-this.n.bitLength();return n>0&&(e=e.ushrn(n)),!t&&e.cmp(this.n)>=0?e.sub(this.n):e},sw.prototype.sign=function(e,t,n,r){"object"==typeof n&&(r=n,n=null),r||(r={}),t=this.keyFromPrivate(t,n),e=this._truncateToN(new Im(e,16));for(var i=this.n.byteLength(),o=t.getPrivate().toArray("be",i),s=e.toArray("be",i),a=new Kb({hash:this.hash,entropy:o,nonce:s,pers:r.pers,persEnc:r.persEnc||"utf8"}),c=this.n.sub(new Im(1)),l=0;;l++){var u=r.k?r.k(l):new Im(a.generate(this.n.byteLength()));if(!((u=this._truncateToN(u,!0)).cmpn(1)<=0||u.cmp(c)>=0)){var d=this.g.mul(u);if(!d.isInfinity()){var h=d.getX(),f=h.umod(this.n);if(0!==f.cmpn(0)){var p=u.invm(this.n).mul(f.mul(t.getPrivate()).iadd(e));if(0!==(p=p.umod(this.n)).cmpn(0)){var g=(d.getY().isOdd()?1:0)|(0!==h.cmp(f)?2:0);return r.canonical&&p.cmp(this.nh)>0&&(p=this.n.sub(p),g^=1),new Xb({r:f,s:p,recoveryParam:g})}}}}}},sw.prototype.verify=function(e,t,n,r){e=this._truncateToN(new Im(e,16)),n=this.keyFromPublic(n,r);var i=(t=new Xb(t,"hex")).r,o=t.s;if(i.cmpn(1)<0||i.cmp(this.n)>=0||o.cmpn(1)<0||o.cmp(this.n)>=0)return!1;var s,a=o.invm(this.n),c=a.mul(e).umod(this.n),l=a.mul(i).umod(this.n);return this.curve._maxwellTrick?!(s=this.g.jmulAdd(c,n.getPublic(),l)).isInfinity()&&s.eqXToP(i):!(s=this.g.mulAdd(c,n.getPublic(),l)).isInfinity()&&0===s.getX().umod(this.n).cmp(i)},sw.prototype.recoverPubKey=function(e,t,n,r){ow((3&n)===n,"The recovery param is more than two bits"),t=new Xb(t,r);var i=this.n,o=new Im(e),s=t.r,a=t.s,c=1&n,l=n>>1;if(s.cmp(this.curve.p.umod(this.curve.n))>=0&&l)throw new Error("Unable to find sencond key candinate");s=l?this.curve.pointFromX(s.add(this.curve.n),c):this.curve.pointFromX(s,c);var u=t.r.invm(i),d=i.sub(o).mul(u).umod(i),h=a.mul(u).umod(i);return this.g.mulAdd(d,s,h)},sw.prototype.getKeyRecoveryParam=function(e,t,n,r){if(null!==(t=new Xb(t,r)).recoveryParam)return t.recoveryParam;for(var i=0;i<4;i++){var o;try{o=this.recoverPubKey(e,t,i)}catch{continue}if(o.eq(n))return i}throw new Error("Unable to find valid recovery factor")};var cw=xb((function(e,t){var n=t;n.version="6.5.4",n.utils=Rb,n.rand=function(){throw new Error("unsupported")},n.curve=Hb,n.curves=Wb,n.ec=aw,n.eddsa=null})),lw=cw.ec;const uw=new fm("signing-key/5.7.0");let dw=null;function hw(){return dw||(dw=new lw("secp256k1")),dw}class fw{constructor(e){ky(this,"curve","secp256k1"),ky(this,"privateKey",_m(e)),32!==function(e){if("string"!=typeof e)e=_m(e);else if(!wm(e)||e.length%2)return null;return(e.length-2)/2}(this.privateKey)&&uw.throwArgumentError("invalid private key","privateKey","[[ REDACTED ]]");const t=hw().keyFromPrivate(bm(this.privateKey));ky(this,"publicKey","0x"+t.getPublic(!1,"hex")),ky(this,"compressedPublicKey","0x"+t.getPublic(!0,"hex")),ky(this,"_isSigningKey",!0)}_addPoint(e){const t=hw().keyFromPublic(bm(this.publicKey)),n=hw().keyFromPublic(bm(e));return"0x"+t.pub.add(n.pub).encodeCompressed("hex")}signDigest(e){const t=hw().keyFromPrivate(bm(this.privateKey)),n=bm(e);32!==n.length&&uw.throwArgumentError("bad digest length","digest",e);const r=t.sign(n,{canonical:!0});return km({recoveryParam:r.recoveryParam,r:Cm("0x"+r.r.toString(16),32),s:Cm("0x"+r.s.toString(16),32)})}computeSharedSecret(e){const t=hw().keyFromPrivate(bm(this.privateKey)),n=hw().keyFromPublic(bm(pw(e)));return Cm("0x"+t.derive(n.getPublic()).toString(16),32)}static isSigningKey(e){return!(!e||!e._isSigningKey)}}function pw(e,t){const n=bm(e);if(32===n.length){const e=new fw(n);return t?"0x"+hw().keyFromPrivate(n).getPublic(!0,"hex"):e.publicKey}return 33===n.length?t?_m(n):"0x"+hw().keyFromPublic(n).getPublic(!1,"hex"):65===n.length?t?"0x"+hw().keyFromPublic(n).getPublic(!0,"hex"):_m(n):uw.throwArgumentError("invalid public or private key","key","[REDACTED]")}var gw;function mw(e,t){return function(e){return Cy(Em(Sm(Em(pw(e),1)),12))}(function(e,t){const n=km(t),r={r:bm(n.r),s:bm(n.s)};return"0x"+hw().recoverPubKey(bm(e),r,n.recoveryParam).encode("hex",!1)}(bm(e),t))}new fm("transactions/5.7.0"),function(e){e[e.legacy=0]="legacy",e[e.eip2930=1]="eip2930",e[e.eip1559=2]="eip1559"}(gw||(gw={}));const yw="https://rpc.walletconnect.com/v1";async function vw(e,t,n,r,i,o){switch(n.t){case"eip191":return function(e,t,n){return mw(by(t),n).toLowerCase()===e.toLowerCase()}(e,t,n.s);case"eip1271":return await async function(e,t,n,r,i,o){try{const s="0x1626ba7e",a="0000000000000000000000000000000000000000000000000000000000000040",c="0000000000000000000000000000000000000000000000000000000000000041",l=n.substring(2),u=s+by(t).substring(2)+a+c+l,d=await fetch(`${o||yw}/?chainId=${r}&projectId=${i}`,{method:"POST",body:JSON.stringify({id:bw(),jsonrpc:"2.0",method:"eth_call",params:[{to:e,data:u},"latest"]})}),{result:h}=await d.json();return!!h&&h.slice(0,s.length).toLowerCase()===s.toLowerCase()}catch(e){return console.error("isValidEip1271Signature: ",e),!1}}(e,t,n.s,r,i,o);default:throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${n.t}`)}}function bw(){return Date.now()+Math.floor(1e3*Math.random())}var ww=Object.defineProperty,Aw=Object.defineProperties,_w=Object.getOwnPropertyDescriptors,Ew=Object.getOwnPropertySymbols,Cw=Object.prototype.hasOwnProperty,kw=Object.prototype.propertyIsEnumerable,Sw=(e,t,n)=>t in e?ww(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xw=(e,t)=>{for(var n in t||(t={}))Cw.call(t,n)&&Sw(e,n,t[n]);if(Ew)for(var n of Ew(t))kw.call(t,n)&&Sw(e,n,t[n]);return e},Mw=(e,t)=>Aw(e,_w(t));const Iw=e=>e?.split(":"),Tw=e=>{const t=e&&Iw(e);if(t)return e.includes("did:pkh:")?t[3]:t[1]},Rw=e=>{const t=e&&Iw(e);if(t)return t[2]+":"+t[3]},Pw=e=>{const t=e&&Iw(e);if(t)return t.pop()};async function Ow(e){const{cacao:t,projectId:n}=e,{s:r,p:i}=t,o=Nw(i,i.iss),s=Pw(i.iss);return await vw(s,o,r,Tw(i.iss),n)}const Nw=(e,t)=>{const n=`${e.domain} wants you to sign in with your Ethereum account:`,r=Pw(t);if(!e.aud&&!e.uri)throw new Error("Either `aud` or `uri` is required to construct the message");let i=e.statement||void 0;const o=`URI: ${e.aud||e.uri}`,s=`Version: ${e.version}`,a=`Chain ID: ${Tw(t)}`,c=`Nonce: ${e.nonce}`,l=`Issued At: ${e.iat}`,u=e.resources?`Resources:${e.resources.map((e=>`\n- ${e}`)).join("")}`:void 0,d=Ww(e.resources);if(d){i=$w(i,Uw(d))}return[n,r,"",i,"",o,s,a,c,l,u].filter((e=>null!=e)).join("\n")};function Lw(e){if(!e)throw new Error("No recap provided, value is undefined");if(!e.att)throw new Error("No `att` property found");const t=Object.keys(e.att);if(null==t||!t.length)throw new Error("No resources found in `att` property");t.forEach((t=>{const n=e.att[t];if(Array.isArray(n))throw new Error(`Resource must be an object: ${t}`);if("object"!=typeof n)throw new Error(`Resource must be an object: ${t}`);if(!Object.keys(n).length)throw new Error(`Resource object is empty: ${t}`);Object.keys(n).forEach((e=>{const t=n[e];if(!Array.isArray(t))throw new Error(`Ability limits ${e} must be an array of objects, found: ${t}`);if(!t.length)throw new Error(`Value of ${e} is empty array, must be an array with objects`);t.forEach((t=>{if("object"!=typeof t)throw new Error(`Ability limits (${e}) must be an array of objects, found: ${t}`)}))}))}))}function Dw(e,t,n={}){t=t?.sort(((e,t)=>e.localeCompare(t)));const r=t.map((t=>({[`${e}/${t}`]:[n]})));return Object.assign({},...r)}function Bw(e){return Lw(e),`urn:recap:${function(e){return Cg.from(JSON.stringify(e)).toString("base64")}(e).replace(/=/g,"")}`}function Uw(e){const t=function(e){return JSON.parse(Cg.from(e,"base64").toString("utf-8"))}(e.replace("urn:recap:",""));return Lw(t),t}function jw(e,t,n){const r=function(e,t,n,r={}){return n?.sort(((e,t)=>e.localeCompare(t))),{att:{[e]:Dw(t,n,r)}}}(e,t,n);return Bw(r)}function Fw(e){return e&&e.includes("urn:recap:")}function zw(e,t){const n=function(e,t){Lw(e),Lw(t);const n=Object.keys(e.att).concat(Object.keys(t.att)).sort(((e,t)=>e.localeCompare(t))),r={att:{}};return n.forEach((n=>{var i,o;Object.keys((null==(i=e.att)?void 0:i[n])||{}).concat(Object.keys((null==(o=t.att)?void 0:o[n])||{})).sort(((e,t)=>e.localeCompare(t))).forEach((i=>{var o,s;r.att[n]=Mw(xw({},r.att[n]),{[i]:(null==(o=e.att[n])?void 0:o[i])||(null==(s=t.att[n])?void 0:s[i])})}))})),r}(Uw(e),Uw(t));return Bw(n)}function $w(e="",t){Lw(t);const n="I further authorize the stated URI to perform the following actions on my behalf: ";if(e.includes(n))return e;const r=[];let i=0;Object.keys(t.att).forEach((e=>{const n=Object.keys(t.att[e]).map((e=>({ability:e.split("/")[0],action:e.split("/")[1]})));n.sort(((e,t)=>e.action.localeCompare(t.action)));const o={};n.forEach((e=>{o[e.ability]||(o[e.ability]=[]),o[e.ability].push(e.action)}));const s=Object.keys(o).map((t=>(i++,`(${i}) '${t}': '${o[t].join("', '")}' for '${e}'.`)));r.push(s.join(", ").replace(".,","."))}));return`${e?e+" ":""}${`${n}${r.join(" ")}`}`}function qw(e){var t;const n=Uw(e);Lw(n);const r=null==(t=n.att)?void 0:t.eip155;return r?Object.keys(r).map((e=>e.split("/")[1])):[]}function Hw(e){const t=Uw(e);Lw(t);const n=[];return Object.values(t.att).forEach((e=>{Object.values(e).forEach((e=>{var t;null!=(t=e?.[0])&&t.chains&&n.push(e[0].chains)}))})),[...new Set(n.flat())]}function Ww(e){if(!e)return;const t=e?.[e.length-1];return Fw(t)?t:void 0}const Vw="base10",Kw="base16",Zw="base64pad",Gw="utf8",Yw=0,Qw=1,Jw=0,Xw=1,eA=12,tA=32;function nA(){return Ag((0,ug.randomBytes)(tA),Kw)}function rA(e){return Ag((0,dg.tW)(wg(e,Kw)),Kw)}function iA(e){return Ag((0,dg.tW)(wg(e,Gw)),Kw)}function oA(e){return Number(Ag(e,Vw))}function sA(e){const t=function(e){return wg(`${e}`,Vw)}(typeof e.type<"u"?e.type:Yw);if(oA(t)===Qw&&typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const n=typeof e.senderPublicKey<"u"?wg(e.senderPublicKey,Kw):void 0,r=typeof e.iv<"u"?wg(e.iv,Kw):(0,ug.randomBytes)(eA);return function(e){if(oA(e.type)===Qw){if(typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return Ag(pg([e.type,e.senderPublicKey,e.iv,e.sealed]),Zw)}return Ag(pg([e.type,e.iv,e.sealed]),Zw)}({type:t,sealed:new cg.g6(wg(e.symKey,Kw)).seal(r,wg(e.message,Gw)),iv:r,senderPublicKey:n})}function aA(e){const t=wg(e,Zw),n=t.slice(Jw,Xw),r=Xw;if(oA(n)===Qw){const e=r+tA,i=e+eA,o=t.slice(r,e),s=t.slice(e,i);return{type:n,sealed:t.slice(i),iv:s,senderPublicKey:o}}const i=r+eA,o=t.slice(r,i);return{type:n,sealed:t.slice(i),iv:o}}function cA(e){const t=e?.type||Yw;if(t===Qw){if(typeof e?.senderPublicKey>"u")throw new Error("missing sender public key");if(typeof e?.receiverPublicKey>"u")throw new Error("missing receiver public key")}return{type:t,senderPublicKey:e?.senderPublicKey,receiverPublicKey:e?.receiverPublicKey}}function lA(e){return e.type===Qw&&"string"==typeof e.senderPublicKey&&"string"==typeof e.receiverPublicKey}function uA(e){return e?.relay||{protocol:"irn"}}function dA(e){const t=_g.CG[e];if(typeof t>"u")throw new Error(`Relay Protocol not supported: ${e}`);return t}var hA=Object.defineProperty,fA=Object.defineProperties,pA=Object.getOwnPropertyDescriptors,gA=Object.getOwnPropertySymbols,mA=Object.prototype.hasOwnProperty,yA=Object.prototype.propertyIsEnumerable,vA=(e,t,n)=>t in e?hA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bA=(e,t)=>{for(var n in t||(t={}))mA.call(t,n)&&vA(e,n,t[n]);if(gA)for(var n of gA(t))yA.call(t,n)&&vA(e,n,t[n]);return e};function wA(e,t="-"){const n={},r="relay"+t;return Object.keys(e).forEach((t=>{if(t.startsWith(r)){const i=t.replace(r,""),o=e[t];n[i]=o}})),n}function AA(e){const t=(e=(e=e.includes("wc://")?e.replace("wc://",""):e).includes("wc:")?e.replace("wc:",""):e).indexOf(":"),n=-1!==e.indexOf("?")?e.indexOf("?"):void 0,r=e.substring(0,t),i=e.substring(t+1,n).split("@"),o=typeof n<"u"?e.substring(n):"",s=ag.parse(o),a="string"==typeof s.methods?s.methods.split(","):void 0;return{protocol:r,topic:_A(i[0]),version:parseInt(i[1],10),symKey:s.symKey,relay:wA(s),methods:a,expiryTimestamp:s.expiryTimestamp?parseInt(s.expiryTimestamp,10):void 0}}function _A(e){return e.startsWith("//")?e.substring(2):e}function EA(e){return`${e.protocol}:${e.topic}@${e.version}?`+ag.stringify(bA(((e,t)=>fA(e,pA(t)))(bA({symKey:e.symKey},function(e,t="-"){const n={};return Object.keys(e).forEach((r=>{const i="relay"+t+r;e[r]&&(n[i]=e[r])})),n}(e.relay)),{expiryTimestamp:e.expiryTimestamp}),e.methods?{methods:e.methods.join(",")}:{}))}Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;function CA(e){const t=[];return e.forEach((e=>{const[n,r]=e.split(":");t.push(`${n}:${r}`)})),t}function kA(e){return e.includes(":")}function SA(e){return kA(e)?e.split(":")[0]:e}function xA(e,t){const n=function(e){const t={};return e?.forEach((e=>{const[n,r]=e.split(":");t[n]||(t[n]={accounts:[],chains:[],events:[]}),t[n].accounts.push(e),t[n].chains.push(`${n}:${r}`)})),t}(t=t.map((e=>e.replace("did:pkh:",""))));for(const[t,r]of Object.entries(n))r.methods?r.methods=em(r.methods,e):r.methods=e,r.events=["chainChanged","accountsChanged"];return n}const MA={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},IA={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function TA(e,t){const{message:n,code:r}=IA[e];return{message:t?`${n} ${t}`:n,code:r}}function RA(e,t){const{message:n,code:r}=MA[e];return{message:t?`${n} ${t}`:n,code:r}}function PA(e,t){return!!Array.isArray(e)&&(!(typeof t<"u"&&e.length)||e.every(t))}function OA(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function NA(e){return typeof e>"u"}function LA(e,t){return!(!t||!NA(e))||"string"==typeof e&&!!e.trim().length}function DA(e,t){return!(!t||!NA(e))||"number"==typeof e&&!isNaN(e)}function BA(e){return!(!LA(e,!1)||!e.includes(":"))&&2===e.split(":").length}function UA(e){let t=!0;return PA(e)?e.length&&(t=e.every((e=>LA(e,!1)))):t=!1,t}function jA(e,t,n){let r=null;return Object.entries(e).forEach((([e,i])=>{if(r)return;const o=function(e,t,n){let r=null;return PA(t)&&t.length?t.forEach((e=>{r||BA(e)||(r=RA("UNSUPPORTED_CHAINS",`${n}, chain ${e} should be a string and conform to "namespace:chainId" format`))})):BA(e)||(r=RA("UNSUPPORTED_CHAINS",`${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),r}(e,Mg(e,i),`${t} ${n}`);o&&(r=o)})),r}function FA(e,t){let n=null;return PA(e)?e.forEach((e=>{n||function(e){if(LA(e,!1)&&e.includes(":")){const t=e.split(":");if(3===t.length){const e=t[0]+":"+t[1];return!!t[2]&&BA(e)}}return!1}(e)||(n=RA("UNSUPPORTED_ACCOUNTS",`${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`))})):n=RA("UNSUPPORTED_ACCOUNTS",`${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),n}function zA(e,t){let n=null;return Object.values(e).forEach((e=>{if(n)return;const r=function(e,t){let n=null;return UA(e?.methods)?UA(e?.events)||(n=RA("UNSUPPORTED_EVENTS",`${t}, events should be an array of strings or empty array for no events`)):n=RA("UNSUPPORTED_METHODS",`${t}, methods should be an array of strings or empty array for no methods`),n}(e,`${t}, namespace`);r&&(n=r)})),n}function $A(e,t){let n=null;if(e&&OA(e)){const r=zA(e,t);r&&(n=r);const i=function(e,t){let n=null;return Object.values(e).forEach((e=>{if(n)return;const r=FA(e?.accounts,`${t} namespace`);r&&(n=r)})),n}(e,t);i&&(n=i)}else n=TA("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return n}function qA(e){return LA(e.protocol,!0)}function HA(e){return typeof e<"u"&&null!==typeof e}function WA(e,t){return!(!BA(t)||!function(e){const t=[];return Object.values(e).forEach((e=>{t.push(...CA(e.accounts))})),t}(e).includes(t))}function VA(e,t,n){return!!LA(n,!1)&&function(e,t){const n=[];return Object.values(e).forEach((e=>{CA(e.accounts).includes(t)&&n.push(...e.methods)})),n}(e,t).includes(n)}function KA(e,t,n){return!!LA(n,!1)&&function(e,t){const n=[];return Object.values(e).forEach((e=>{CA(e.accounts).includes(t)&&n.push(...e.events)})),n}(e,t).includes(n)}function ZA(e,t,n){let r=null;const i=function(e){const t={};return Object.keys(e).forEach((n=>{var r;n.includes(":")?t[n]=e[n]:null==(r=e[n].chains)||r.forEach((r=>{t[r]={methods:e[n].methods,events:e[n].events}}))})),t}(e),o=function(e){const t={};return Object.keys(e).forEach((n=>{if(n.includes(":"))t[n]=e[n];else{const r=CA(e[n].accounts);r?.forEach((r=>{t[r]={accounts:e[n].accounts.filter((e=>e.includes(`${r}:`))),methods:e[n].methods,events:e[n].events}}))}})),t}(t),s=Object.keys(i),a=Object.keys(o),c=GA(Object.keys(e)),l=GA(Object.keys(t)),u=c.filter((e=>!l.includes(e)));return u.length&&(r=TA("NON_CONFORMING_NAMESPACES",`${n} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${u.toString()}\n      Received: ${Object.keys(t).toString()}`)),Hg(s,a)||(r=TA("NON_CONFORMING_NAMESPACES",`${n} namespaces chains don't satisfy required namespaces.\n      Required: ${s.toString()}\n      Approved: ${a.toString()}`)),Object.keys(t).forEach((e=>{if(!e.includes(":")||r)return;const i=CA(t[e].accounts);i.includes(e)||(r=TA("NON_CONFORMING_NAMESPACES",`${n} namespaces accounts don't satisfy namespace accounts for ${e}\n        Required: ${e}\n        Approved: ${i.toString()}`))})),s.forEach((e=>{r||(Hg(i[e].methods,o[e].methods)?Hg(i[e].events,o[e].events)||(r=TA("NON_CONFORMING_NAMESPACES",`${n} namespaces events don't satisfy namespace events for ${e}`)):r=TA("NON_CONFORMING_NAMESPACES",`${n} namespaces methods don't satisfy namespace methods for ${e}`))})),r}function GA(e){return[...new Set(e.map((e=>e.includes(":")?e.split(":")[0]:e)))]}function YA(){const e=zg();return new Promise((t=>{switch(e){case Dg.browser:t(Fg()&&navigator?.onLine);break;case Dg.reactNative:t(async function(){if(jg()&&typeof n.g<"u"&&null!=n.g&&n.g.NetInfo){const e=await(null==n.g?void 0:n.g.NetInfo.fetch());return e?.isConnected}return!0}());break;case Dg.node:default:t(!0)}}))}function QA(e){switch(zg()){case Dg.browser:!function(e){!jg()&&Fg()&&(window.addEventListener("online",(()=>e(!0))),window.addEventListener("offline",(()=>e(!1))))}(e);break;case Dg.reactNative:!function(e){jg()&&typeof n.g<"u"&&null!=n.g&&n.g.NetInfo&&n.g?.NetInfo.addEventListener((t=>e(t?.isConnected)))}(e);case Dg.node:}}const JA={};class XA{static get(e){return JA[e]}static set(e,t){JA[e]=t}static delete(e){delete JA[e]}}const e_=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,t_=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,n_=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function r_(e,t){if(!("__proto__"===e||"constructor"===e&&t&&"object"==typeof t&&"prototype"in t))return t;!function(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}(e)}function i_(e,t={}){if("string"!=typeof e)return e;const n=e.trim();if('"'===e[0]&&e.endsWith('"')&&!e.includes("\\"))return n.slice(1,-1);if(n.length<=9){const e=n.toLowerCase();if("true"===e)return!0;if("false"===e)return!1;if("undefined"===e)return;if("null"===e)return null;if("nan"===e)return Number.NaN;if("infinity"===e)return Number.POSITIVE_INFINITY;if("-infinity"===e)return Number.NEGATIVE_INFINITY}if(!n_.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(e_.test(e)||t_.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,r_)}return JSON.parse(e)}catch(n){if(t.strict)throw n;return e}}var o_=n(2512).Buffer;function s_(e,...t){try{return(n=e(...t))&&"function"==typeof n.then?n:Promise.resolve(n)}catch(e){return Promise.reject(e)}var n}function a_(e){if(function(e){const t=typeof e;return null===e||"object"!==t&&"function"!==t}(e))return String(e);if(function(e){const t=Object.getPrototypeOf(e);return!t||t.isPrototypeOf(Object)}(e)||Array.isArray(e))return JSON.stringify(e);if("function"==typeof e.toJSON)return a_(e.toJSON());throw new Error("[unstorage] Cannot stringify value!")}function c_(){if(void 0===typeof o_)throw new TypeError("[unstorage] Buffer is not supported!")}const l_="base64:";function u_(e){return e?e.split("?")[0].replace(/[/\\]/g,":").replace(/:+/g,":").replace(/^:|:$/g,""):""}function d_(...e){return u_(e.join(":"))}function h_(e){return(e=u_(e))?e+":":""}const f_=()=>{const e=new Map;return{name:"memory",options:{},hasItem:t=>e.has(t),getItem:t=>e.get(t)??null,getItemRaw:t=>e.get(t)??null,setItem(t,n){e.set(t,n)},setItemRaw(t,n){e.set(t,n)},removeItem(t){e.delete(t)},getKeys:()=>Array.from(e.keys()),clear(){e.clear()},dispose(){e.clear()}}};function p_(e={}){const t={mounts:{"":e.driver||f_()},mountpoints:[""],watching:!1,watchListeners:[],unwatch:{}},n=e=>{for(const n of t.mountpoints)if(e.startsWith(n))return{base:n,relativeKey:e.slice(n.length),driver:t.mounts[n]};return{base:"",relativeKey:e,driver:t.mounts[""]}},r=(e,n)=>t.mountpoints.filter((t=>t.startsWith(e)||n&&e.startsWith(t))).map((n=>({relativeBase:e.length>n.length?e.slice(n.length):void 0,mountpoint:n,driver:t.mounts[n]}))),i=(e,n)=>{if(t.watching){n=u_(n);for(const r of t.watchListeners)r(e,n)}},o=async()=>{if(t.watching){for(const e in t.unwatch)await t.unwatch[e]();t.unwatch={},t.watching=!1}},s=(e,t,r)=>{const i=new Map,o=e=>{let t=i.get(e.base);return t||(t={driver:e.driver,base:e.base,items:[]},i.set(e.base,t)),t};for(const r of e){const e="string"==typeof r,i=u_(e?r:r.key),s=e?void 0:r.value,a=e||!r.options?t:{...t,...r.options},c=n(i);o(c).items.push({key:i,value:s,relativeKey:c.relativeKey,options:a})}return Promise.all([...i.values()].map((e=>r(e)))).then((e=>e.flat()))},a={hasItem(e,t={}){e=u_(e);const{relativeKey:r,driver:i}=n(e);return s_(i.hasItem,r,t)},getItem(e,t={}){e=u_(e);const{relativeKey:r,driver:i}=n(e);return s_(i.getItem,r,t).then((e=>i_(e)))},getItems:(e,t)=>s(e,t,(e=>e.driver.getItems?s_(e.driver.getItems,e.items.map((e=>({key:e.relativeKey,options:e.options}))),t).then((t=>t.map((t=>({key:d_(e.base,t.key),value:i_(t.value)}))))):Promise.all(e.items.map((t=>s_(e.driver.getItem,t.relativeKey,t.options).then((e=>({key:t.key,value:i_(e)})))))))),getItemRaw(e,t={}){e=u_(e);const{relativeKey:r,driver:i}=n(e);return i.getItemRaw?s_(i.getItemRaw,r,t):s_(i.getItem,r,t).then((e=>function(e){return"string"!=typeof e?e:e.startsWith(l_)?(c_(),o_.from(e.slice(l_.length),"base64")):e}(e)))},async setItem(e,t,r={}){if(void 0===t)return a.removeItem(e);e=u_(e);const{relativeKey:o,driver:s}=n(e);s.setItem&&(await s_(s.setItem,o,a_(t),r),s.watch||i("update",e))},async setItems(e,t){await s(e,t,(async e=>{if(e.driver.setItems)return s_(e.driver.setItems,e.items.map((e=>({key:e.relativeKey,value:a_(e.value),options:e.options}))),t);e.driver.setItem&&await Promise.all(e.items.map((t=>s_(e.driver.setItem,t.relativeKey,a_(t.value),t.options))))}))},async setItemRaw(e,t,r={}){if(void 0===t)return a.removeItem(e,r);e=u_(e);const{relativeKey:o,driver:s}=n(e);if(s.setItemRaw)await s_(s.setItemRaw,o,t,r);else{if(!s.setItem)return;await s_(s.setItem,o,function(e){if("string"==typeof e)return e;c_();const t=o_.from(e).toString("base64");return l_+t}(t),r)}s.watch||i("update",e)},async removeItem(e,t={}){"boolean"==typeof t&&(t={removeMeta:t}),e=u_(e);const{relativeKey:r,driver:o}=n(e);o.removeItem&&(await s_(o.removeItem,r,t),(t.removeMeta||t.removeMata)&&await s_(o.removeItem,r+"$",t),o.watch||i("remove",e))},async getMeta(e,t={}){"boolean"==typeof t&&(t={nativeOnly:t}),e=u_(e);const{relativeKey:r,driver:i}=n(e),o=Object.create(null);if(i.getMeta&&Object.assign(o,await s_(i.getMeta,r,t)),!t.nativeOnly){const e=await s_(i.getItem,r+"$",t).then((e=>i_(e)));e&&"object"==typeof e&&("string"==typeof e.atime&&(e.atime=new Date(e.atime)),"string"==typeof e.mtime&&(e.mtime=new Date(e.mtime)),Object.assign(o,e))}return o},setMeta(e,t,n={}){return this.setItem(e+"$",t,n)},removeMeta(e,t={}){return this.removeItem(e+"$",t)},async getKeys(e,t={}){e=h_(e);const n=r(e,!0);let i=[];const o=[];for(const e of n){const n=(await s_(e.driver.getKeys,e.relativeBase,t)).map((t=>e.mountpoint+u_(t))).filter((e=>!i.some((t=>e.startsWith(t)))));o.push(...n),i=[e.mountpoint,...i.filter((t=>!t.startsWith(e.mountpoint)))]}return e?o.filter((t=>t.startsWith(e)&&!t.endsWith("$"))):o.filter((e=>!e.endsWith("$")))},async clear(e,t={}){e=h_(e),await Promise.all(r(e,!1).map((async e=>{if(e.driver.clear)return s_(e.driver.clear,e.relativeBase,t);if(e.driver.removeItem){const n=await e.driver.getKeys(e.relativeBase||"",t);return Promise.all(n.map((n=>e.driver.removeItem(n,t))))}})))},async dispose(){await Promise.all(Object.values(t.mounts).map((e=>m_(e))))},watch:async e=>(await(async()=>{if(!t.watching){t.watching=!0;for(const e in t.mounts)t.unwatch[e]=await g_(t.mounts[e],i,e)}})(),t.watchListeners.push(e),async()=>{t.watchListeners=t.watchListeners.filter((t=>t!==e)),0===t.watchListeners.length&&await o()}),async unwatch(){t.watchListeners=[],await o()},mount(e,n){if((e=h_(e))&&t.mounts[e])throw new Error(`already mounted at ${e}`);return e&&(t.mountpoints.push(e),t.mountpoints.sort(((e,t)=>t.length-e.length))),t.mounts[e]=n,t.watching&&Promise.resolve(g_(n,i,e)).then((n=>{t.unwatch[e]=n})).catch(console.error),a},async unmount(e,n=!0){(e=h_(e))&&t.mounts[e]&&(t.watching&&e in t.unwatch&&(t.unwatch[e](),delete t.unwatch[e]),n&&await m_(t.mounts[e]),t.mountpoints=t.mountpoints.filter((t=>t!==e)),delete t.mounts[e])},getMount(e=""){e=u_(e)+":";const t=n(e);return{driver:t.driver,base:t.base}},getMounts(e="",t={}){e=u_(e);return r(e,t.parents).map((e=>({driver:e.driver,base:e.mountpoint})))}};return a}function g_(e,t,n){return e.watch?e.watch(((e,r)=>t(e,n+r))):()=>{}}async function m_(e){"function"==typeof e.dispose&&await s_(e.dispose)}function y_(e){return new Promise(((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)}))}function v_(e,t){const n=indexedDB.open(e);n.onupgradeneeded=()=>n.result.createObjectStore(t);const r=y_(n);return(e,n)=>r.then((r=>n(r.transaction(t,e).objectStore(t))))}let b_;function w_(){return b_||(b_=v_("keyval-store","keyval")),b_}function A_(e,t=w_()){return t("readonly",(t=>y_(t.get(e))))}function __(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},y_(e.transaction)}var E_=n(7855);var C_=(e={})=>{const t=e.base&&e.base.length>0?`${e.base}:`:"",n=e=>t+e;let r;return e.dbName&&e.storeName&&(r=v_(e.dbName,e.storeName)),{name:"idb-keyval",options:e,hasItem:async e=>!(typeof await A_(n(e),r)>"u"),getItem:async e=>await A_(n(e),r)??null,setItem:(e,t)=>function(e,t,n=w_()){return n("readwrite",(n=>(n.put(t,e),y_(n.transaction))))}(n(e),t,r),removeItem:e=>function(e,t=w_()){return t("readwrite",(t=>(t.delete(e),y_(t.transaction))))}(n(e),r),getKeys:()=>function(e=w_()){return e("readonly",(e=>{if(e.getAllKeys)return y_(e.getAllKeys());const t=[];return __(e,(e=>t.push(e.key))).then((()=>t))}))}(r),clear:()=>function(e=w_()){return e("readwrite",(e=>(e.clear(),y_(e.transaction))))}(r)}};class k_{constructor(){this.indexedDb=p_({driver:C_({dbName:"WALLET_CONNECT_V2_INDEXED_DB",storeName:"keyvaluestorage"})})}async getKeys(){return this.indexedDb.getKeys()}async getEntries(){return(await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((e=>[e.key,e.value]))}async getItem(e){const t=await this.indexedDb.getItem(e);if(null!==t)return t}async setItem(e,t){await this.indexedDb.setItem(e,(0,E_.h)(t))}async removeItem(e){await this.indexedDb.removeItem(e)}}var S_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof n.g<"u"?n.g:typeof self<"u"?self:{},x_={exports:{}};function M_(e){var t;return[e[0],(0,E_.j)(null!=(t=e[1])?t:"")]}!function(){let e;function t(){}e=t,e.prototype.getItem=function(e){return this.hasOwnProperty(e)?String(this[e]):null},e.prototype.setItem=function(e,t){this[e]=String(t)},e.prototype.removeItem=function(e){delete this[e]},e.prototype.clear=function(){const e=this;Object.keys(e).forEach((function(t){e[t]=void 0,delete e[t]}))},e.prototype.key=function(e){return e=e||0,Object.keys(this)[e]},e.prototype.__defineGetter__("length",(function(){return Object.keys(this).length})),typeof S_<"u"&&S_.localStorage?x_.exports=S_.localStorage:typeof window<"u"&&window.localStorage?x_.exports=window.localStorage:x_.exports=new t}();class I_{constructor(){this.localStorage=x_.exports}async getKeys(){return Object.keys(this.localStorage)}async getEntries(){return Object.entries(this.localStorage).map(M_)}async getItem(e){const t=this.localStorage.getItem(e);if(null!==t)return(0,E_.j)(t)}async setItem(e,t){this.localStorage.setItem(e,(0,E_.h)(t))}async removeItem(e){this.localStorage.removeItem(e)}}const T_=async(e,t)=>{t.length&&t.forEach((async t=>{await e.removeItem(t)}))};class R_{constructor(){this.initialized=!1,this.setInitialized=e=>{this.storage=e,this.initialized=!0};const e=new I_;this.storage=e;try{(async(e,t,n)=>{const r="wc_storage_version",i=await t.getItem(r);if(i&&i>=1)return void n(t);const o=await e.getKeys();if(!o.length)return void n(t);const s=[];for(;o.length;){const n=o.shift();if(!n)continue;const r=n.toLowerCase();if(r.includes("wc@")||r.includes("walletconnect")||r.includes("wc_")||r.includes("wallet_connect")){const r=await e.getItem(n);await t.setItem(n,r),s.push(n)}}await t.setItem(r,1),n(t),T_(e,s)})(e,new k_,this.setInitialized)}catch{this.initialized=!0}}async getKeys(){return await this.initialize(),this.storage.getKeys()}async getEntries(){return await this.initialize(),this.storage.getEntries()}async getItem(e){return await this.initialize(),this.storage.getItem(e)}async setItem(e,t){return await this.initialize(),this.storage.setItem(e,t)}async removeItem(e){return await this.initialize(),this.storage.removeItem(e)}async initialize(){this.initialized||await new Promise((e=>{const t=setInterval((()=>{this.initialized&&(clearInterval(t),e())}),20)}))}}class P_{}class O_ extends P_{constructor(e){super()}}const N_=ig.FIVE_SECONDS,L_="heartbeat_pulse";class D_ extends O_{constructor(e){super(e),this.events=new $p.EventEmitter,this.interval=N_,this.interval=e?.interval||N_}static async init(e){const t=new D_(e);return await t.init(),t}async init(){await this.initialize()}stop(){clearInterval(this.intervalRef)}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async initialize(){this.intervalRef=setInterval((()=>this.pulse()),(0,ig.toMiliseconds)(this.interval))}pulse(){this.events.emit(L_)}}var B_=n(8199);class U_ extends P_{constructor(e){super(),this.opts=e,this.protocol="wc",this.version=2}}class j_ extends P_{constructor(e,t){super(),this.core=e,this.logger=t,this.records=new Map}}class F_{constructor(e,t){this.logger=e,this.core=t}}class z_ extends P_{constructor(e,t){super(),this.relayer=e,this.logger=t}}class $_ extends P_{constructor(e){super()}}class q_{constructor(e,t,n,r){this.core=e,this.logger=t,this.name=n}}class H_ extends P_{constructor(e,t){super(),this.relayer=e,this.logger=t}}class W_ extends P_{constructor(e,t){super(),this.core=e,this.logger=t}}class V_{constructor(e,t){this.projectId=e,this.logger=t}}class K_{constructor(e,t){this.projectId=e,this.logger=t}}qp();class Z_{constructor(e){this.opts=e,this.protocol="wc",this.version=2}}$p.EventEmitter;class G_{constructor(e){this.client=e}}var Y_=n(5147);const Q_=".",J_="base64url",X_="utf8",eE="utf8",tE=":",nE="did",rE="key",iE="base58btc",oE="z",sE="K36";function aE(e){return null!=globalThis.Buffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}function cE(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?aE(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}function lE(e,t,n,r){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:n},decoder:{decode:r}}}const uE=lE("utf8","u",(e=>"u"+new TextDecoder("utf8").decode(e)),(e=>(new TextEncoder).encode(e.substring(1)))),dE=lE("ascii","a",(e=>{let t="a";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t}),(e=>{const t=cE((e=e.substring(1)).length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t})),hE={utf8:uE,"utf-8":uE,hex:gg.Fo.base16,latin1:dE,ascii:dE,binary:dE,...gg.Fo};function fE(e,t="utf8"){const n=hE[t];if(!n)throw new Error(`Unsupported encoding "${t}"`);return"utf8"!==t&&"utf-8"!==t||null==globalThis.Buffer||null==globalThis.Buffer.from?n.encoder.encode(e).substring(1):globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8")}function pE(e,t="utf8"){const n=hE[t];if(!n)throw new Error(`Unsupported encoding "${t}"`);return"utf8"!==t&&"utf-8"!==t||null==globalThis.Buffer||null==globalThis.Buffer.from?n.decoder.decode(`${n.prefix}${e}`):aE(globalThis.Buffer.from(e,"utf-8"))}function gE(e){return fE(pE((0,E_.h)(e),X_),J_)}function mE(e){const t=pE(sE,iE),n=oE+fE(function(e,t){t||(t=e.reduce(((e,t)=>e+t.length),0));const n=cE(t);let r=0;for(const t of e)n.set(t,r),r+=t.length;return aE(n)}([t,e]),iE);return[nE,rE,n].join(tE)}function yE(e){return fE(e,J_)}function vE(e=(0,ug.randomBytes)(32)){return Y_.K(e)}async function bE(e,t,n,r,i=(0,ig.fromMiliseconds)(Date.now())){const o={alg:"EdDSA",typ:"JWT"},s={iss:mE(r.publicKey),sub:e,aud:t,iat:i,exp:i+n},a=pE([gE((c={header:o,payload:s}).header),gE(c.payload)].join(Q_),eE);var c;return function(e){return[gE(e.header),gE(e.payload),yE(e.signature)].join(Q_)}({header:o,payload:s,signature:Y_._S(r.secretKey,a)})}n(8726);const wE="PARSE_ERROR",AE="INVALID_REQUEST",_E="METHOD_NOT_FOUND",EE="INVALID_PARAMS",CE="INTERNAL_ERROR",kE="SERVER_ERROR",SE=[-32700,-32600,-32601,-32602,-32603],xE={[wE]:{code:-32700,message:"Parse error"},[AE]:{code:-32600,message:"Invalid Request"},[_E]:{code:-32601,message:"Method not found"},[EE]:{code:-32602,message:"Invalid params"},[CE]:{code:-32603,message:"Internal error"},[kE]:{code:-32e3,message:"Server error"}},ME=kE;function IE(e){return SE.includes(e)}function TE(e){return Object.keys(xE).includes(e)?xE[e]:xE[ME]}function RE(e){const t=Object.values(xE).find((t=>t.code===e));return t||xE[ME]}function PE(e,t,n){return e.message.includes("getaddrinfo ENOTFOUND")||e.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${n} RPC url at ${t}`):e}var OE=n(6923);function NE(e=3){return Date.now()*Math.pow(10,e)+Math.floor(Math.random()*Math.pow(10,e))}function LE(e=6){return BigInt(NE(e))}function DE(e,t,n){return{id:n||NE(),jsonrpc:"2.0",method:e,params:t}}function BE(e,t){return{id:e,jsonrpc:"2.0",result:t}}function UE(e,t,n){return{id:e,jsonrpc:"2.0",error:jE(t,n)}}function jE(e,t){return void 0===e?TE(CE):("string"==typeof e&&(e=Object.assign(Object.assign({},TE(kE)),{message:e})),void 0!==t&&(e.data=t),IE(e.code)&&(e=RE(e.code)),e)}class FE{}class zE extends FE{constructor(){super()}}class $E extends zE{constructor(e){super()}}function qE(e,t){const n=function(e){const t=e.match(new RegExp(/^\w+:/,"gi"));if(t&&t.length)return t[0]}(e);return void 0!==n&&new RegExp(t).test(n)}function HE(e){return qE(e,"^https?:")}function WE(e){return qE(e,"^wss?:")}function VE(e){return"object"==typeof e&&"id"in e&&"jsonrpc"in e&&"2.0"===e.jsonrpc}function KE(e){return VE(e)&&"method"in e}function ZE(e){return VE(e)&&(GE(e)||YE(e))}function GE(e){return"result"in e}function YE(e){return"error"in e}class QE extends $E{constructor(e){super(e),this.events=new $p.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(e),this.connection.connected&&this.registerEventListeners()}async connect(e=this.connection){await this.open(e)}async disconnect(){await this.close()}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async request(e,t){return this.requestStrict(DE(e.method,e.params||[],e.id||LE().toString()),t)}async requestStrict(e,t){return new Promise((async(n,r)=>{if(!this.connection.connected)try{await this.open()}catch(e){r(e)}this.events.on(`${e.id}`,(e=>{YE(e)?r(e.error):n(e.result)}));try{await this.connection.send(e,t)}catch(e){r(e)}}))}setConnection(e=this.connection){return e}onPayload(e){this.events.emit("payload",e),ZE(e)?this.events.emit(`${e.id}`,e):this.events.emit("message",{type:e.method,data:e.params})}onClose(e){e&&3e3===e.code&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)),this.events.emit("disconnect")}async open(e=this.connection){this.connection===e&&this.connection.connected||(this.connection.connected&&this.close(),"string"==typeof e&&(await this.connection.open(e),e=this.connection),this.connection=this.setConnection(e),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",(e=>this.onPayload(e))),this.connection.on("close",(e=>this.onClose(e))),this.connection.on("error",(e=>this.events.emit("error",e))),this.connection.on("register_error",(e=>this.onClose())),this.hasRegisteredEventListeners=!0)}}const JE=e=>e.split("?")[0],XE=typeof WebSocket<"u"?WebSocket:typeof n.g<"u"&&typeof n.g.WebSocket<"u"?n.g.WebSocket:typeof window<"u"&&typeof window.WebSocket<"u"?window.WebSocket:typeof self<"u"&&typeof self.WebSocket<"u"?self.WebSocket:n(5628);class eC{constructor(e){if(this.url=e,this.events=new $p.EventEmitter,this.registering=!1,!WE(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);this.url=e}get connected(){return typeof this.socket<"u"}get connecting(){return this.registering}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async open(e=this.url){await this.register(e)}async close(){return new Promise(((e,t)=>{typeof this.socket>"u"?t(new Error("Connection already closed")):(this.socket.onclose=t=>{this.onClose(t),e()},this.socket.close())}))}async send(e){typeof this.socket>"u"&&(this.socket=await this.register());try{this.socket.send((0,E_.h)(e))}catch(t){this.onError(e.id,t)}}register(e=this.url){if(!WE(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);if(this.registering){const e=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=e||this.events.listenerCount("open")>=e)&&this.events.setMaxListeners(e+1),new Promise(((e,t)=>{this.events.once("register_error",(e=>{this.resetMaxListeners(),t(e)})),this.events.once("open",(()=>{if(this.resetMaxListeners(),typeof this.socket>"u")return t(new Error("WebSocket connection is missing or invalid"));e(this.socket)}))}))}return this.url=e,this.registering=!0,new Promise(((t,r)=>{const i=new URLSearchParams(e).get("origin"),o=(0,OE.isReactNative)()?{headers:{origin:i}}:{rejectUnauthorized:(a=e,!new RegExp("wss?://localhost(:d{2,5})?").test(a))},s=new XE(e,[],o);var a;typeof WebSocket<"u"||typeof n.g<"u"&&typeof n.g.WebSocket<"u"||typeof window<"u"&&typeof window.WebSocket<"u"||typeof self<"u"&&typeof self.WebSocket<"u"?s.onerror=e=>{const t=e;r(this.emitError(t.error))}:s.on("error",(e=>{r(this.emitError(e))})),s.onopen=()=>{this.onOpen(s),t(s)}}))}onOpen(e){e.onmessage=e=>this.onPayload(e),e.onclose=e=>this.onClose(e),this.socket=e,this.registering=!1,this.events.emit("open")}onClose(e){this.socket=void 0,this.registering=!1,this.events.emit("close",e)}onPayload(e){if(typeof e.data>"u")return;const t="string"==typeof e.data?(0,E_.j)(e.data):e.data;this.events.emit("payload",t)}onError(e,t){const n=this.parseError(t),r=UE(e,n.message||n.toString());this.events.emit("payload",r)}parseError(e,t=this.url){return PE(e,JE(t),"WS")}resetMaxListeners(){this.events.getMaxListeners()>10&&this.events.setMaxListeners(10)}emitError(e){const t=this.parseError(new Error(e?.message||`WebSocket connection failed for host: ${JE(this.url)}`));return this.events.emit("register_error",t),t}}var tC=n(7117),nC=n.n(tC),rC=n(9747),iC=n.n(rC),oC=n(139);var sC=function(e,t){if(e.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),r=0;r<n.length;r++)n[r]=255;for(var i=0;i<e.length;i++){var o=e.charAt(i),s=o.charCodeAt(0);if(255!==n[s])throw new TypeError(o+" is ambiguous");n[s]=i}var a=e.length,c=e.charAt(0),l=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function d(e){if("string"!=typeof e)throw new TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[t]){for(var r=0,i=0;e[t]===c;)r++,t++;for(var o=(e.length-t)*l+1>>>0,s=new Uint8Array(o);e[t];){var u=n[e.charCodeAt(t)];if(255===u)return;for(var d=0,h=o-1;(0!==u||d<i)&&-1!==h;h--,d++)u+=a*s[h]>>>0,s[h]=u%256>>>0,u=u/256>>>0;if(0!==u)throw new Error("Non-zero carry");i=d,t++}if(" "!==e[t]){for(var f=o-i;f!==o&&0===s[f];)f++;for(var p=new Uint8Array(r+(o-f)),g=r;f!==o;)p[g++]=s[f++];return p}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===t.length)return"";for(var n=0,r=0,i=0,o=t.length;i!==o&&0===t[i];)i++,n++;for(var s=(o-i)*u+1>>>0,l=new Uint8Array(s);i!==o;){for(var d=t[i],h=0,f=s-1;(0!==d||h<r)&&-1!==f;f--,h++)d+=256*l[f]>>>0,l[f]=d%a>>>0,d=d/a>>>0;if(0!==d)throw new Error("Non-zero carry");r=h,i++}for(var p=s-r;p!==s&&0===l[p];)p++;for(var g=c.repeat(n);p<s;++p)g+=e.charAt(l[p]);return g},decodeUnsafe:d,decode:function(e){var n=d(e);if(n)return n;throw new Error(`Non-${t} character`)}}},aC=sC;const cC=e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Unknown type, must be binary type")};class lC{constructor(e,t,n){this.name=e,this.prefix=t,this.baseEncode=n}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class uC{constructor(e,t,n){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw new Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=n}decode(e){if("string"==typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return hC(this,e)}}class dC{constructor(e){this.decoders=e}or(e){return hC(this,e)}decode(e){const t=e[0],n=this.decoders[t];if(n)return n.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const hC=(e,t)=>new dC({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class fC{constructor(e,t,n,r){this.name=e,this.prefix=t,this.baseEncode=n,this.baseDecode=r,this.encoder=new lC(e,t,n),this.decoder=new uC(e,t,r)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const pC=({name:e,prefix:t,encode:n,decode:r})=>new fC(e,t,n,r),gC=({prefix:e,name:t,alphabet:n})=>{const{encode:r,decode:i}=aC(n,t);return pC({prefix:e,name:t,encode:r,decode:e=>cC(i(e))})},mC=({name:e,prefix:t,bitsPerChar:n,alphabet:r})=>pC({prefix:t,name:e,encode:e=>((e,t,n)=>{const r="="===t[t.length-1],i=(1<<n)-1;let o="",s=0,a=0;for(let r=0;r<e.length;++r)for(a=a<<8|e[r],s+=8;s>n;)s-=n,o+=t[i&a>>s];if(s&&(o+=t[i&a<<n-s]),r)for(;o.length*n&7;)o+="=";return o})(e,r,n),decode:t=>((e,t,n,r)=>{const i={};for(let e=0;e<t.length;++e)i[t[e]]=e;let o=e.length;for(;"="===e[o-1];)--o;const s=new Uint8Array(o*n/8|0);let a=0,c=0,l=0;for(let t=0;t<o;++t){const o=i[e[t]];if(void 0===o)throw new SyntaxError(`Non-${r} character`);c=c<<n|o,a+=n,a>=8&&(a-=8,s[l++]=255&c>>a)}if(a>=n||255&c<<8-a)throw new SyntaxError("Unexpected end of data");return s})(t,r,n,e)}),yC=pC({prefix:"\0",name:"identity",encode:e=>(e=>(new TextDecoder).decode(e))(e),decode:e=>(e=>(new TextEncoder).encode(e))(e)});var vC=Object.freeze({__proto__:null,identity:yC});const bC=mC({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1});var wC=Object.freeze({__proto__:null,base2:bC});const AC=mC({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3});var _C=Object.freeze({__proto__:null,base8:AC});const EC=gC({prefix:"9",name:"base10",alphabet:"0123456789"});var CC=Object.freeze({__proto__:null,base10:EC});const kC=mC({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),SC=mC({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4});var xC=Object.freeze({__proto__:null,base16:kC,base16upper:SC});const MC=mC({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),IC=mC({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),TC=mC({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),RC=mC({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),PC=mC({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),OC=mC({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),NC=mC({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),LC=mC({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),DC=mC({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});var BC=Object.freeze({__proto__:null,base32:MC,base32upper:IC,base32pad:TC,base32padupper:RC,base32hex:PC,base32hexupper:OC,base32hexpad:NC,base32hexpadupper:LC,base32z:DC});const UC=gC({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),jC=gC({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"});var FC=Object.freeze({__proto__:null,base36:UC,base36upper:jC});const zC=gC({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),$C=gC({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});var qC=Object.freeze({__proto__:null,base58btc:zC,base58flickr:$C});const HC=mC({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),WC=mC({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),VC=mC({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),KC=mC({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});var ZC=Object.freeze({__proto__:null,base64:HC,base64pad:WC,base64url:VC,base64urlpad:KC});const GC=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),YC=GC.reduce(((e,t,n)=>(e[n]=t,e)),[]),QC=GC.reduce(((e,t,n)=>(e[t.codePointAt(0)]=n,e)),[]);const JC=pC({prefix:"🚀",name:"base256emoji",encode:function(e){return e.reduce(((e,t)=>e+=YC[t]),"")},decode:function(e){const t=[];for(const n of e){const e=QC[n.codePointAt(0)];if(void 0===e)throw new Error(`Non-base256emoji character: ${n}`);t.push(e)}return new Uint8Array(t)}});var XC=Object.freeze({__proto__:null,base256emoji:JC}),ek=function e(t,n,r){n=n||[];for(var i=r=r||0;t>=rk;)n[r++]=255&t|tk,t/=128;for(;t&nk;)n[r++]=255&t|tk,t>>>=7;return n[r]=0|t,e.bytes=r-i+1,n},tk=128,nk=-128,rk=Math.pow(2,31);var ik=function e(t,n){var r,i=0,o=0,s=n=n||0,a=t.length;do{if(s>=a)throw e.bytes=0,new RangeError("Could not decode varint");r=t[s++],i+=o<28?(r&sk)<<o:(r&sk)*Math.pow(2,o),o+=7}while(r>=ok);return e.bytes=s-n,i},ok=128,sk=127;var ak=Math.pow(2,7),ck=Math.pow(2,14),lk=Math.pow(2,21),uk=Math.pow(2,28),dk=Math.pow(2,35),hk=Math.pow(2,42),fk=Math.pow(2,49),pk=Math.pow(2,56),gk=Math.pow(2,63),mk={encode:ek,decode:ik,encodingLength:function(e){return e<ak?1:e<ck?2:e<lk?3:e<uk?4:e<dk?5:e<hk?6:e<fk?7:e<pk?8:e<gk?9:10}},yk=mk;const vk=(e,t,n=0)=>(yk.encode(e,t,n),t),bk=e=>yk.encodingLength(e),wk=(e,t)=>{const n=t.byteLength,r=bk(e),i=r+bk(n),o=new Uint8Array(i+n);return vk(e,o,0),vk(n,o,r),o.set(t,i),new Ak(e,n,t,o)};class Ak{constructor(e,t,n,r){this.code=e,this.size=t,this.digest=n,this.bytes=r}}const _k=({name:e,code:t,encode:n})=>new Ek(e,t,n);class Ek{constructor(e,t,n){this.name=e,this.code=t,this.encode=n}digest(e){if(e instanceof Uint8Array){const t=this.encode(e);return t instanceof Uint8Array?wk(this.code,t):t.then((e=>wk(this.code,e)))}throw Error("Unknown type, must be binary type")}}const Ck=e=>async t=>new Uint8Array(await crypto.subtle.digest(e,t)),kk=_k({name:"sha2-256",code:18,encode:Ck("SHA-256")}),Sk=_k({name:"sha2-512",code:19,encode:Ck("SHA-512")});Object.freeze({__proto__:null,sha256:kk,sha512:Sk});const xk=cC,Mk={code:0,name:"identity",encode:xk,digest:e=>wk(0,xk(e))};Object.freeze({__proto__:null,identity:Mk});new TextEncoder,new TextDecoder;const Ik={...vC,...wC,..._C,...CC,...xC,...BC,...FC,...qC,...ZC,...XC};function Tk(e,t,n,r){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:n},decoder:{decode:r}}}const Rk=Tk("utf8","u",(e=>"u"+new TextDecoder("utf8").decode(e)),(e=>(new TextEncoder).encode(e.substring(1)))),Pk=Tk("ascii","a",(e=>{let t="a";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t}),(e=>{const t=function(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?globalThis.Buffer.allocUnsafe(e):new Uint8Array(e)}((e=e.substring(1)).length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t})),Ok={utf8:Rk,"utf-8":Rk,hex:Ik.base16,latin1:Pk,ascii:Pk,binary:Pk,...Ik};const Nk="core",Lk=`wc@2:${Nk}:`,Dk="error",Bk={database:":memory:"},Uk="client_ed25519_seed",jk=ig.ONE_DAY,Fk=ig.SIX_HOURS,zk="wss://relay.walletconnect.com",$k="wss://relay.walletconnect.org",qk="relayer_message",Hk="relayer_message_ack",Wk="relayer_connect",Vk="relayer_disconnect",Kk="relayer_error",Zk="relayer_connection_stalled",Gk="relayer_publish",Yk="payload",Qk="connect",Jk="disconnect",Xk="error",eS=ig.ONE_SECOND,tS="subscription_created",nS="subscription_deleted",rS="subscription_sync",iS="subscription_resubscribed",oS=1e3*ig.FIVE_SECONDS,sS={wc_pairingDelete:{req:{ttl:ig.ONE_DAY,prompt:!1,tag:1e3},res:{ttl:ig.ONE_DAY,prompt:!1,tag:1001}},wc_pairingPing:{req:{ttl:ig.THIRTY_SECONDS,prompt:!1,tag:1002},res:{ttl:ig.THIRTY_SECONDS,prompt:!1,tag:1003}},unregistered_method:{req:{ttl:ig.ONE_DAY,prompt:!1,tag:0},res:{ttl:ig.ONE_DAY,prompt:!1,tag:0}}},aS="pairing_create",cS="pairing_expire",lS="pairing_delete",uS="pairing_ping",dS="history_created",hS="history_updated",fS="history_deleted",pS="history_sync",gS="expirer_created",mS="expirer_deleted",yS="expirer_expired",vS="expirer_sync",bS="verify-api",wS="https://verify.walletconnect.com",AS="https://verify.walletconnect.org",_S=[wS,AS];class ES{constructor(e,t){this.core=e,this.logger=t,this.keychain=new Map,this.name="keychain",this.version="0.3",this.initialized=!1,this.storagePrefix=Lk,this.init=async()=>{if(!this.initialized){const e=await this.getKeyChain();typeof e<"u"&&(this.keychain=e),this.initialized=!0}},this.has=e=>(this.isInitialized(),this.keychain.has(e)),this.set=async(e,t)=>{this.isInitialized(),this.keychain.set(e,t),await this.persist()},this.get=e=>{this.isInitialized();const t=this.keychain.get(e);if(typeof t>"u"){const{message:t}=TA("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(t)}return t},this.del=async e=>{this.isInitialized(),this.keychain.delete(e),await this.persist()},this.core=e,this.logger=(0,B_.U5)(t,this.name)}get context(){return(0,B_.oI)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}async setKeyChain(e){await this.core.storage.setItem(this.storageKey,Wg(e))}async getKeyChain(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?Vg(e):void 0}async persist(){await this.setKeyChain(this.keychain)}isInitialized(){if(!this.initialized){const{message:e}=TA("NOT_INITIALIZED",this.name);throw new Error(e)}}}class CS{constructor(e,t,n){this.core=e,this.logger=t,this.name="crypto",this.initialized=!1,this.init=async()=>{this.initialized||(await this.keychain.init(),this.initialized=!0)},this.hasKeys=e=>(this.isInitialized(),this.keychain.has(e)),this.getClientId=async()=>{this.isInitialized();return mE(vE(await this.getClientSeed()).publicKey)},this.generateKeyPair=()=>{this.isInitialized();const e=function(){const e=hg.TZ();return{privateKey:Ag(e.secretKey,Kw),publicKey:Ag(e.publicKey,Kw)}}();return this.setPrivateKey(e.publicKey,e.privateKey)},this.signJWT=async e=>{this.isInitialized();const t=vE(await this.getClientSeed()),n=nA(),r=jk;return await bE(n,e,r,t)},this.generateSharedKey=(e,t,n)=>{this.isInitialized();const r=function(e,t){const n=hg.Tc(wg(e,Kw),wg(t,Kw),!0);return Ag(new lg.i(dg.aD,n).expand(tA),Kw)}(this.getPrivateKey(e),t);return this.setSymKey(r,n)},this.setSymKey=async(e,t)=>{this.isInitialized();const n=t||rA(e);return await this.keychain.set(n,e),n},this.deleteKeyPair=async e=>{this.isInitialized(),await this.keychain.del(e)},this.deleteSymKey=async e=>{this.isInitialized(),await this.keychain.del(e)},this.encode=async(e,t,n)=>{this.isInitialized();const r=cA(n),i=(0,E_.h)(t);if(lA(r)){const t=r.senderPublicKey,n=r.receiverPublicKey;e=await this.generateSharedKey(t,n)}const o=this.getSymKey(e),{type:s,senderPublicKey:a}=r;return sA({type:s,symKey:o,message:i,senderPublicKey:a})},this.decode=async(e,t,n)=>{this.isInitialized();const r=function(e,t){const n=aA(e);return cA({type:oA(n.type),senderPublicKey:typeof n.senderPublicKey<"u"?Ag(n.senderPublicKey,Kw):void 0,receiverPublicKey:t?.receiverPublicKey})}(t,n);if(lA(r)){const t=r.receiverPublicKey,n=r.senderPublicKey;e=await this.generateSharedKey(t,n)}try{const n=function(e){const t=new cg.g6(wg(e.symKey,Kw)),{sealed:n,iv:r}=aA(e.encoded),i=t.open(r,n);if(null===i)throw new Error("Failed to decrypt");return Ag(i,Gw)}({symKey:this.getSymKey(e),encoded:t});return(0,E_.j)(n)}catch(t){this.logger.error(`Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`),this.logger.error(t)}},this.getPayloadType=e=>oA(aA(e).type),this.getPayloadSenderPublicKey=e=>{const t=aA(e);return t.senderPublicKey?Ag(t.senderPublicKey,Kw):void 0},this.core=e,this.logger=(0,B_.U5)(t,this.name),this.keychain=n||new ES(this.core,this.logger)}get context(){return(0,B_.oI)(this.logger)}async setPrivateKey(e,t){return await this.keychain.set(e,t),e}getPrivateKey(e){return this.keychain.get(e)}async getClientSeed(){let e="";try{e=this.keychain.get(Uk)}catch{e=nA(),await this.keychain.set(Uk,e)}return function(e,t="utf8"){const n=Ok[t];if(!n)throw new Error(`Unsupported encoding "${t}"`);return"utf8"!==t&&"utf-8"!==t||null==globalThis.Buffer||null==globalThis.Buffer.from?n.decoder.decode(`${n.prefix}${e}`):globalThis.Buffer.from(e,"utf8")}(e,"base16")}getSymKey(e){return this.keychain.get(e)}isInitialized(){if(!this.initialized){const{message:e}=TA("NOT_INITIALIZED",this.name);throw new Error(e)}}}class kS extends F_{constructor(e,t){super(e,t),this.logger=e,this.core=t,this.messages=new Map,this.name="messages",this.version="0.3",this.initialized=!1,this.storagePrefix=Lk,this.init=async()=>{if(!this.initialized){this.logger.trace("Initialized");try{const e=await this.getRelayerMessages();typeof e<"u"&&(this.messages=e),this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",size:this.messages.size})}catch(e){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(e)}finally{this.initialized=!0}}},this.set=async(e,t)=>{this.isInitialized();const n=iA(t);let r=this.messages.get(e);return typeof r>"u"&&(r={}),typeof r[n]<"u"||(r[n]=t,this.messages.set(e,r),await this.persist()),n},this.get=e=>{this.isInitialized();let t=this.messages.get(e);return typeof t>"u"&&(t={}),t},this.has=(e,t)=>{this.isInitialized();return typeof this.get(e)[iA(t)]<"u"},this.del=async e=>{this.isInitialized(),this.messages.delete(e),await this.persist()},this.logger=(0,B_.U5)(e,this.name),this.core=t}get context(){return(0,B_.oI)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}async setRelayerMessages(e){await this.core.storage.setItem(this.storageKey,Wg(e))}async getRelayerMessages(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?Vg(e):void 0}async persist(){await this.setRelayerMessages(this.messages)}isInitialized(){if(!this.initialized){const{message:e}=TA("NOT_INITIALIZED",this.name);throw new Error(e)}}}class SS extends z_{constructor(e,t){super(e,t),this.relayer=e,this.logger=t,this.events=new $p.EventEmitter,this.name="publisher",this.queue=new Map,this.publishTimeout=(0,ig.toMiliseconds)(ig.ONE_MINUTE),this.failedPublishTimeout=(0,ig.toMiliseconds)(ig.ONE_SECOND),this.needsTransportRestart=!1,this.publish=async(e,t,n)=>{var r;this.logger.debug("Publishing Payload"),this.logger.trace({type:"method",method:"publish",params:{topic:e,message:t,opts:n}});const i=n?.ttl||Fk,o=uA(n),s=n?.prompt||!1,a=n?.tag||0,c=n?.id||LE().toString(),l={topic:e,message:t,opts:{ttl:i,relay:o,prompt:s,tag:a,id:c}},u=`Failed to publish payload, please try again. id:${c} tag:${a}`,d=Date.now();let h,f=1;try{for(;void 0===h;){if(Date.now()-d>this.publishTimeout)throw new Error(u);this.logger.trace({id:c,attempts:f},`publisher.publish - attempt ${f}`),h=await await Zg(this.rpcPublish(e,t,i,o,s,a,c).catch((e=>this.logger.warn(e))),this.publishTimeout,u),f++,h||await new Promise((e=>setTimeout(e,this.failedPublishTimeout)))}this.relayer.events.emit(Gk,l),this.logger.debug("Successfully Published Payload"),this.logger.trace({type:"method",method:"publish",params:{id:c,topic:e,message:t,opts:n}})}catch(e){if(this.logger.debug("Failed to Publish Payload"),this.logger.error(e),null!=(r=n?.internal)&&r.throwOnFailedPublish)throw e;this.queue.set(c,l)}},this.on=(e,t)=>{this.events.on(e,t)},this.once=(e,t)=>{this.events.once(e,t)},this.off=(e,t)=>{this.events.off(e,t)},this.removeListener=(e,t)=>{this.events.removeListener(e,t)},this.relayer=e,this.logger=(0,B_.U5)(t,this.name),this.registerEventListeners()}get context(){return(0,B_.oI)(this.logger)}rpcPublish(e,t,n,r,i,o,s){var a,c,l,u;const d={method:dA(r.protocol).publish,params:{topic:e,message:t,ttl:n,prompt:i,tag:o},id:s};return NA(null==(a=d.params)?void 0:a.prompt)&&(null==(c=d.params)||delete c.prompt),NA(null==(l=d.params)?void 0:l.tag)&&(null==(u=d.params)||delete u.tag),this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"message",direction:"outgoing",request:d}),this.relayer.request(d)}removeRequestFromQueue(e){this.queue.delete(e)}checkQueue(){this.queue.forEach((async e=>{const{topic:t,message:n,opts:r}=e;await this.publish(t,n,r)}))}registerEventListeners(){this.relayer.core.heartbeat.on(L_,(()=>{if(this.needsTransportRestart)return this.needsTransportRestart=!1,void this.relayer.events.emit(Zk);this.checkQueue()})),this.relayer.on(Hk,(e=>{this.removeRequestFromQueue(e.id.toString())}))}}class xS{constructor(){this.map=new Map,this.set=(e,t)=>{const n=this.get(e);this.exists(e,t)||this.map.set(e,[...n,t])},this.get=e=>this.map.get(e)||[],this.exists=(e,t)=>this.get(e).includes(t),this.delete=(e,t)=>{if(typeof t>"u")return void this.map.delete(e);if(!this.map.has(e))return;const n=this.get(e);if(!this.exists(e,t))return;const r=n.filter((e=>e!==t));r.length?this.map.set(e,r):this.map.delete(e)},this.clear=()=>{this.map.clear()}}get topics(){return Array.from(this.map.keys())}}var MS=Object.defineProperty,IS=Object.defineProperties,TS=Object.getOwnPropertyDescriptors,RS=Object.getOwnPropertySymbols,PS=Object.prototype.hasOwnProperty,OS=Object.prototype.propertyIsEnumerable,NS=(e,t,n)=>t in e?MS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,LS=(e,t)=>{for(var n in t||(t={}))PS.call(t,n)&&NS(e,n,t[n]);if(RS)for(var n of RS(t))OS.call(t,n)&&NS(e,n,t[n]);return e},DS=(e,t)=>IS(e,TS(t));class BS extends H_{constructor(e,t){super(e,t),this.relayer=e,this.logger=t,this.subscriptions=new Map,this.topicMap=new xS,this.events=new $p.EventEmitter,this.name="subscription",this.version="0.3",this.pending=new Map,this.cached=[],this.initialized=!1,this.pendingSubscriptionWatchLabel="pending_sub_watch_label",this.pollingInterval=20,this.storagePrefix=Lk,this.subscribeTimeout=(0,ig.toMiliseconds)(ig.ONE_MINUTE),this.restartInProgress=!1,this.batchSubscribeTopicsLimit=500,this.pendingBatchMessages=[],this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),this.registerEventListeners(),this.clientId=await this.relayer.core.crypto.getClientId())},this.subscribe=async(e,t)=>{await this.restartToComplete(),this.isInitialized(),this.logger.debug("Subscribing Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:e,opts:t}});try{const n=uA(t),r={topic:e,relay:n};this.pending.set(e,r);const i=await this.rpcSubscribe(e,n);return"string"==typeof i&&(this.onSubscribe(i,r),this.logger.debug("Successfully Subscribed Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:e,opts:t}})),i}catch(e){throw this.logger.debug("Failed to Subscribe Topic"),this.logger.error(e),e}},this.unsubscribe=async(e,t)=>{await this.restartToComplete(),this.isInitialized(),typeof t?.id<"u"?await this.unsubscribeById(e,t.id,t):await this.unsubscribeByTopic(e,t)},this.isSubscribed=async e=>{if(this.topics.includes(e))return!0;const t=`${this.pendingSubscriptionWatchLabel}_${e}`;return await new Promise(((n,r)=>{const i=new ig.Watch;i.start(t);const o=setInterval((()=>{!this.pending.has(e)&&this.topics.includes(e)&&(clearInterval(o),i.stop(t),n(!0)),i.elapsed(t)>=oS&&(clearInterval(o),i.stop(t),r(new Error("Subscription resolution timeout")))}),this.pollingInterval)})).catch((()=>!1))},this.on=(e,t)=>{this.events.on(e,t)},this.once=(e,t)=>{this.events.once(e,t)},this.off=(e,t)=>{this.events.off(e,t)},this.removeListener=(e,t)=>{this.events.removeListener(e,t)},this.start=async()=>{await this.onConnect()},this.stop=async()=>{await this.onDisconnect()},this.restart=async()=>{this.restartInProgress=!0,await this.restore(),await this.reset(),this.restartInProgress=!1},this.relayer=e,this.logger=(0,B_.U5)(t,this.name),this.clientId=""}get context(){return(0,B_.oI)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.relayer.core.customStoragePrefix+"//"+this.name}get length(){return this.subscriptions.size}get ids(){return Array.from(this.subscriptions.keys())}get values(){return Array.from(this.subscriptions.values())}get topics(){return this.topicMap.topics}hasSubscription(e,t){let n=!1;try{n=this.getSubscription(e).topic===t}catch{}return n}onEnable(){this.cached=[],this.initialized=!0}onDisable(){this.cached=this.values,this.subscriptions.clear(),this.topicMap.clear()}async unsubscribeByTopic(e,t){const n=this.topicMap.get(e);await Promise.all(n.map((async n=>await this.unsubscribeById(e,n,t))))}async unsubscribeById(e,t,n){this.logger.debug("Unsubscribing Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:t,opts:n}});try{const r=uA(n);await this.rpcUnsubscribe(e,t,r);const i=RA("USER_DISCONNECTED",`${this.name}, ${e}`);await this.onUnsubscribe(e,t,i),this.logger.debug("Successfully Unsubscribed Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:t,opts:n}})}catch(e){throw this.logger.debug("Failed to Unsubscribe Topic"),this.logger.error(e),e}}async rpcSubscribe(e,t){const n={method:dA(t.protocol).subscribe,params:{topic:e}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:n});try{return await await Zg(this.relayer.request(n).catch((e=>this.logger.warn(e))),this.subscribeTimeout)?iA(e+this.clientId):null}catch{this.logger.debug("Outgoing Relay Subscribe Payload stalled"),this.relayer.events.emit(Zk)}return null}async rpcBatchSubscribe(e){if(!e.length)return;const t={method:dA(e[0].relay.protocol).batchSubscribe,params:{topics:e.map((e=>e.topic))}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:t});try{return await await Zg(this.relayer.request(t).catch((e=>this.logger.warn(e))),this.subscribeTimeout)}catch{this.relayer.events.emit(Zk)}}async rpcBatchFetchMessages(e){if(!e.length)return;const t={method:dA(e[0].relay.protocol).batchFetchMessages,params:{topics:e.map((e=>e.topic))}};let n;this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:t});try{n=await await Zg(this.relayer.request(t).catch((e=>this.logger.warn(e))),this.subscribeTimeout)}catch{this.relayer.events.emit(Zk)}return n}rpcUnsubscribe(e,t,n){const r={method:dA(n.protocol).unsubscribe,params:{topic:e,id:t}};return this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:r}),this.relayer.request(r)}onSubscribe(e,t){this.setSubscription(e,DS(LS({},t),{id:e})),this.pending.delete(t.topic)}onBatchSubscribe(e){e.length&&e.forEach((e=>{this.setSubscription(e.id,LS({},e)),this.pending.delete(e.topic)}))}async onUnsubscribe(e,t,n){this.events.removeAllListeners(t),this.hasSubscription(t,e)&&this.deleteSubscription(t,n),await this.relayer.messages.del(e)}async setRelayerSubscriptions(e){await this.relayer.core.storage.setItem(this.storageKey,e)}async getRelayerSubscriptions(){return await this.relayer.core.storage.getItem(this.storageKey)}setSubscription(e,t){this.logger.debug("Setting subscription"),this.logger.trace({type:"method",method:"setSubscription",id:e,subscription:t}),this.addSubscription(e,t)}addSubscription(e,t){this.subscriptions.set(e,LS({},t)),this.topicMap.set(t.topic,e),this.events.emit(tS,t)}getSubscription(e){this.logger.debug("Getting subscription"),this.logger.trace({type:"method",method:"getSubscription",id:e});const t=this.subscriptions.get(e);if(!t){const{message:t}=TA("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(t)}return t}deleteSubscription(e,t){this.logger.debug("Deleting subscription"),this.logger.trace({type:"method",method:"deleteSubscription",id:e,reason:t});const n=this.getSubscription(e);this.subscriptions.delete(e),this.topicMap.delete(n.topic,e),this.events.emit(nS,DS(LS({},n),{reason:t}))}async persist(){await this.setRelayerSubscriptions(this.values),this.events.emit(rS)}async reset(){if(this.cached.length){const e=Math.ceil(this.cached.length/this.batchSubscribeTopicsLimit);for(let t=0;t<e;t++){const e=this.cached.splice(0,this.batchSubscribeTopicsLimit);await this.batchFetchMessages(e),await this.batchSubscribe(e)}}this.events.emit(iS)}async restore(){try{const e=await this.getRelayerSubscriptions();if(typeof e>"u"||!e.length)return;if(this.subscriptions.size){const{message:e}=TA("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(e),this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),new Error(e)}this.cached=e,this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),this.logger.trace({type:"method",method:"restore",subscriptions:this.values})}catch(e){this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),this.logger.error(e)}}async batchSubscribe(e){if(!e.length)return;const t=await this.rpcBatchSubscribe(e);PA(t)&&this.onBatchSubscribe(t.map(((t,n)=>DS(LS({},e[n]),{id:t}))))}async batchFetchMessages(e){if(!e.length)return;this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);const t=await this.rpcBatchFetchMessages(e);t&&t.messages&&(this.pendingBatchMessages=this.pendingBatchMessages.concat(t.messages))}async onConnect(){await this.restart(),this.onEnable()}onDisconnect(){this.onDisable()}async checkPending(){if(!this.initialized||!this.relayer.connected)return;const e=[];this.pending.forEach((t=>{e.push(t)})),await this.batchSubscribe(e),this.pendingBatchMessages.length&&(await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages),this.pendingBatchMessages=[])}registerEventListeners(){this.relayer.core.heartbeat.on(L_,(async()=>{await this.checkPending()})),this.events.on(tS,(async e=>{const t=tS;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),await this.persist()})),this.events.on(nS,(async e=>{const t=nS;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),await this.persist()}))}isInitialized(){if(!this.initialized){const{message:e}=TA("NOT_INITIALIZED",this.name);throw new Error(e)}}async restartToComplete(){this.restartInProgress&&await new Promise((e=>{const t=setInterval((()=>{this.restartInProgress||(clearInterval(t),e())}),this.pollingInterval)}))}}var US=Object.defineProperty,jS=Object.getOwnPropertySymbols,FS=Object.prototype.hasOwnProperty,zS=Object.prototype.propertyIsEnumerable,$S=(e,t,n)=>t in e?US(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;class qS extends $_{constructor(e){super(e),this.protocol="wc",this.version=2,this.events=new $p.EventEmitter,this.name="relayer",this.transportExplicitlyClosed=!1,this.initialized=!1,this.connectionAttemptInProgress=!1,this.connectionStatusPollingInterval=20,this.staleConnectionErrors=["socket hang up","stalled","interrupted"],this.hasExperiencedNetworkDisruption=!1,this.requestsInFlight=new Map,this.heartBeatTimeout=(0,ig.toMiliseconds)(ig.THIRTY_SECONDS+ig.ONE_SECOND),this.request=async e=>{var t,n;this.logger.debug("Publishing Request Payload");const r=e.id||LE().toString();await this.toEstablishConnection();try{const i=this.provider.request(e);this.requestsInFlight.set(r,{promise:i,request:e}),this.logger.trace({id:r,method:e.method,topic:null==(t=e.params)?void 0:t.topic},"relayer.request - attempt to publish...");const o=await new Promise((async(e,t)=>{const n=()=>{t(new Error(`relayer.request - publish interrupted, id: ${r}`))};this.provider.on(Jk,n);const o=await i;this.provider.off(Jk,n),e(o)}));return this.logger.trace({id:r,method:e.method,topic:null==(n=e.params)?void 0:n.topic},"relayer.request - published"),o}catch(e){throw this.logger.debug(`Failed to Publish Request: ${r}`),e}finally{this.requestsInFlight.delete(r)}},this.resetPingTimeout=()=>{if(Ug())try{clearTimeout(this.pingTimeout),this.pingTimeout=setTimeout((()=>{var e,t,n;null==(n=null==(t=null==(e=this.provider)?void 0:e.connection)?void 0:t.socket)||n.terminate()}),this.heartBeatTimeout)}catch(e){this.logger.warn(e)}},this.onPayloadHandler=e=>{this.onProviderPayload(e),this.resetPingTimeout()},this.onConnectHandler=()=>{this.startPingTimeout(),this.events.emit(Wk)},this.onDisconnectHandler=()=>{this.onProviderDisconnect()},this.onProviderErrorHandler=e=>{this.logger.error(e),this.events.emit(Kk,e),this.logger.info("Fatal socket error received, closing transport"),this.transportClose()},this.registerProviderListeners=()=>{this.provider.on(Yk,this.onPayloadHandler),this.provider.on(Qk,this.onConnectHandler),this.provider.on(Jk,this.onDisconnectHandler),this.provider.on(Xk,this.onProviderErrorHandler)},this.core=e.core,this.logger=typeof e.logger<"u"&&"string"!=typeof e.logger?(0,B_.U5)(e.logger,this.name):(0,B_.h6)((0,B_.iP)({level:e.logger||"error"})),this.messages=new kS(this.logger,e.core),this.subscriber=new BS(this,this.logger),this.publisher=new SS(this,this.logger),this.relayUrl=e?.relayUrl||zk,this.projectId=e.projectId,this.bundleId=function(){var e;try{return jg()&&typeof n.g<"u"&&typeof(null==n.g?void 0:n.g.Application)<"u"?null==(e=n.g.Application)?void 0:e.applicationId:void 0}catch{return}}(),this.provider={}}async init(){this.logger.trace("Initialized"),this.registerEventListeners(),await Promise.all([this.messages.init(),this.subscriber.init()]);try{await this.transportOpen()}catch{this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${$k}...`),await this.restartTransport($k)}this.initialized=!0,setTimeout((async()=>{0===this.subscriber.topics.length&&0===this.subscriber.pending.size&&(this.logger.info("No topics subscribed to after init, closing transport"),await this.transportClose(),this.transportExplicitlyClosed=!1)}),1e4)}get context(){return(0,B_.oI)(this.logger)}get connected(){var e,t,n;return 1===(null==(n=null==(t=null==(e=this.provider)?void 0:e.connection)?void 0:t.socket)?void 0:n.readyState)}get connecting(){var e,t,n;return 0===(null==(n=null==(t=null==(e=this.provider)?void 0:e.connection)?void 0:t.socket)?void 0:n.readyState)}async publish(e,t,n){this.isInitialized(),await this.publisher.publish(e,t,n),await this.recordMessageEvent({topic:e,message:t,publishedAt:Date.now()})}async subscribe(e,t){var n;this.isInitialized();let r,i=(null==(n=this.subscriber.topicMap.get(e))?void 0:n[0])||"";const o=t=>{t.topic===e&&(this.subscriber.off(tS,o),r())};return await Promise.all([new Promise((e=>{r=e,this.subscriber.on(tS,o)})),new Promise((async n=>{i=await this.subscriber.subscribe(e,t)||i,n()}))]),i}async unsubscribe(e,t){this.isInitialized(),await this.subscriber.unsubscribe(e,t)}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async transportDisconnect(){if(!this.hasExperiencedNetworkDisruption&&this.connected&&this.requestsInFlight.size>0)try{await Promise.all(Array.from(this.requestsInFlight.values()).map((e=>e.promise)))}catch(e){this.logger.warn(e)}this.hasExperiencedNetworkDisruption||this.connected?await Zg(this.provider.disconnect(),2e3,"provider.disconnect()").catch((()=>this.onProviderDisconnect())):this.onProviderDisconnect()}async transportClose(){this.transportExplicitlyClosed=!0,await this.transportDisconnect()}async transportOpen(e){await this.confirmOnlineStateOrThrow(),e&&e!==this.relayUrl&&(this.relayUrl=e,await this.transportDisconnect()),await this.createProvider(),this.connectionAttemptInProgress=!0,this.transportExplicitlyClosed=!1;try{await new Promise((async(e,t)=>{const n=()=>{this.provider.off(Jk,n),t(new Error("Connection interrupted while trying to subscribe"))};this.provider.on(Jk,n),await Zg(this.provider.connect(),(0,ig.toMiliseconds)(ig.ONE_MINUTE),`Socket stalled when trying to connect to ${this.relayUrl}`).catch((e=>{t(e)})),await this.subscriber.start(),this.hasExperiencedNetworkDisruption=!1,e()}))}catch(e){this.logger.error(e);const t=e;if(this.hasExperiencedNetworkDisruption=!0,!this.isConnectionStalled(t.message))throw e}finally{this.connectionAttemptInProgress=!1}}async restartTransport(e){this.connectionAttemptInProgress||(this.relayUrl=e||this.relayUrl,await this.confirmOnlineStateOrThrow(),await this.transportClose(),await this.transportOpen())}async confirmOnlineStateOrThrow(){if(!await YA())throw new Error("No internet connection detected. Please restart your network and try again.")}async handleBatchMessageEvents(e){if(0===e?.length)return void this.logger.trace("Batch message events is empty. Ignoring...");const t=e.sort(((e,t)=>e.publishedAt-t.publishedAt));this.logger.trace(`Batch of ${t.length} message events sorted`);for(const e of t)try{await this.onMessageEvent(e)}catch(e){this.logger.warn(e)}this.logger.trace(`Batch of ${t.length} message events processed`)}startPingTimeout(){var e,t,n,r,i;if(Ug())try{null!=(t=null==(e=this.provider)?void 0:e.connection)&&t.socket&&(null==(i=null==(r=null==(n=this.provider)?void 0:n.connection)?void 0:r.socket)||i.once("ping",(()=>{this.resetPingTimeout()}))),this.resetPingTimeout()}catch(e){this.logger.warn(e)}}isConnectionStalled(e){return this.staleConnectionErrors.some((t=>e.includes(t)))}async createProvider(){this.provider.connection&&this.unregisterProviderListeners();const e=await this.core.crypto.signJWT(this.relayUrl);this.provider=new QE(new eC(qg({sdkVersion:"2.13.0",protocol:this.protocol,version:this.version,relayUrl:this.relayUrl,projectId:this.projectId,auth:e,useOnCloseEvent:!0,bundleId:this.bundleId}))),this.registerProviderListeners()}async recordMessageEvent(e){const{topic:t,message:n}=e;await this.messages.set(t,n)}async shouldIgnoreMessageEvent(e){const{topic:t,message:n}=e;if(!n||0===n.length)return this.logger.debug(`Ignoring invalid/empty message: ${n}`),!0;if(!await this.subscriber.isSubscribed(t))return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`),!0;const r=this.messages.has(t,n);return r&&this.logger.debug(`Ignoring duplicate message: ${n}`),r}async onProviderPayload(e){if(this.logger.debug("Incoming Relay Payload"),this.logger.trace({type:"payload",direction:"incoming",payload:e}),KE(e)){if(!e.method.endsWith("_subscription"))return;const t=e.params,{topic:n,message:r,publishedAt:i}=t.data,o={topic:n,message:r,publishedAt:i};this.logger.debug("Emitting Relayer Payload"),this.logger.trace(((e,t)=>{for(var n in t||(t={}))FS.call(t,n)&&$S(e,n,t[n]);if(jS)for(var n of jS(t))zS.call(t,n)&&$S(e,n,t[n]);return e})({type:"event",event:t.id},o)),this.events.emit(t.id,o),await this.acknowledgePayload(e),await this.onMessageEvent(o)}else ZE(e)&&this.events.emit(Hk,e)}async onMessageEvent(e){await this.shouldIgnoreMessageEvent(e)||(this.events.emit(qk,e),await this.recordMessageEvent(e))}async acknowledgePayload(e){const t=BE(e.id,!0);await this.provider.connection.send(t)}unregisterProviderListeners(){this.provider.off(Yk,this.onPayloadHandler),this.provider.off(Qk,this.onConnectHandler),this.provider.off(Jk,this.onDisconnectHandler),this.provider.off(Xk,this.onProviderErrorHandler),clearTimeout(this.pingTimeout)}async registerEventListeners(){let e=await YA();QA((async t=>{e!==t&&(e=t,t?await this.restartTransport().catch((e=>this.logger.error(e))):(this.hasExperiencedNetworkDisruption=!0,await this.transportDisconnect(),this.transportExplicitlyClosed=!1))}))}async onProviderDisconnect(){await this.subscriber.stop(),this.requestsInFlight.clear(),clearTimeout(this.pingTimeout),this.events.emit(Vk),this.connectionAttemptInProgress=!1,!this.transportExplicitlyClosed&&setTimeout((async()=>{await this.transportOpen().catch((e=>this.logger.error(e)))}),(0,ig.toMiliseconds)(eS))}isInitialized(){if(!this.initialized){const{message:e}=TA("NOT_INITIALIZED",this.name);throw new Error(e)}}async toEstablishConnection(){await this.confirmOnlineStateOrThrow(),!this.connected&&(this.connectionAttemptInProgress&&await new Promise((e=>{const t=setInterval((()=>{this.connected&&(clearInterval(t),e())}),this.connectionStatusPollingInterval)})),await this.transportOpen())}}var HS=Object.defineProperty,WS=Object.getOwnPropertySymbols,VS=Object.prototype.hasOwnProperty,KS=Object.prototype.propertyIsEnumerable,ZS=(e,t,n)=>t in e?HS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,GS=(e,t)=>{for(var n in t||(t={}))VS.call(t,n)&&ZS(e,n,t[n]);if(WS)for(var n of WS(t))KS.call(t,n)&&ZS(e,n,t[n]);return e};class YS extends q_{constructor(e,t,n,r=Lk,i=void 0){super(e,t,n,r),this.core=e,this.logger=t,this.name=n,this.map=new Map,this.version="0.3",this.cached=[],this.initialized=!1,this.storagePrefix=Lk,this.recentlyDeleted=[],this.recentlyDeletedLimit=200,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach((e=>{this.getKey&&null!==e&&!NA(e)?this.map.set(this.getKey(e),e):function(e){var t;return null==(t=e?.proposer)?void 0:t.publicKey}(e)?this.map.set(e.id,e):function(e){return e?.topic}(e)&&this.map.set(e.topic,e)})),this.cached=[],this.initialized=!0)},this.set=async(e,t)=>{this.isInitialized(),this.map.has(e)?await this.update(e,t):(this.logger.debug("Setting value"),this.logger.trace({type:"method",method:"set",key:e,value:t}),this.map.set(e,t),await this.persist())},this.get=e=>(this.isInitialized(),this.logger.debug("Getting value"),this.logger.trace({type:"method",method:"get",key:e}),this.getData(e)),this.getAll=e=>(this.isInitialized(),e?this.values.filter((t=>Object.keys(e).every((n=>nC()(t[n],e[n]))))):this.values),this.update=async(e,t)=>{this.isInitialized(),this.logger.debug("Updating value"),this.logger.trace({type:"method",method:"update",key:e,update:t});const n=GS(GS({},this.getData(e)),t);this.map.set(e,n),await this.persist()},this.delete=async(e,t)=>{this.isInitialized(),this.map.has(e)&&(this.logger.debug("Deleting value"),this.logger.trace({type:"method",method:"delete",key:e,reason:t}),this.map.delete(e),this.addToRecentlyDeleted(e),await this.persist())},this.logger=(0,B_.U5)(t,this.name),this.storagePrefix=r,this.getKey=i}get context(){return(0,B_.oI)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.map.size}get keys(){return Array.from(this.map.keys())}get values(){return Array.from(this.map.values())}addToRecentlyDeleted(e){this.recentlyDeleted.push(e),this.recentlyDeleted.length>=this.recentlyDeletedLimit&&this.recentlyDeleted.splice(0,this.recentlyDeletedLimit/2)}async setDataStore(e){await this.core.storage.setItem(this.storageKey,e)}async getDataStore(){return await this.core.storage.getItem(this.storageKey)}getData(e){const t=this.map.get(e);if(!t){if(this.recentlyDeleted.includes(e)){const{message:t}=TA("MISSING_OR_INVALID",`Record was recently deleted - ${this.name}: ${e}`);throw this.logger.error(t),new Error(t)}const{message:t}=TA("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.error(t),new Error(t)}return t}async persist(){await this.setDataStore(this.values)}async restore(){try{const e=await this.getDataStore();if(typeof e>"u"||!e.length)return;if(this.map.size){const{message:e}=TA("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(e),new Error(e)}this.cached=e,this.logger.debug(`Successfully Restored value for ${this.name}`),this.logger.trace({type:"method",method:"restore",value:this.values})}catch(e){this.logger.debug(`Failed to Restore value for ${this.name}`),this.logger.error(e)}}isInitialized(){if(!this.initialized){const{message:e}=TA("NOT_INITIALIZED",this.name);throw new Error(e)}}}class QS{constructor(e,t){this.core=e,this.logger=t,this.name="pairing",this.version="0.3",this.events=new(qp()),this.initialized=!1,this.storagePrefix=Lk,this.ignoredPayloadTypes=[Qw],this.registeredMethods=[],this.init=async()=>{this.initialized||(await this.pairings.init(),await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.initialized=!0,this.logger.trace("Initialized"))},this.register=({methods:e})=>{this.isInitialized(),this.registeredMethods=[...new Set([...this.registeredMethods,...e])]},this.create=async e=>{this.isInitialized();const t=nA(),n=await this.core.crypto.setSymKey(t),r=Qg(ig.FIVE_MINUTES),i={protocol:"irn"},o={topic:n,expiry:r,relay:i,active:!1},s=EA({protocol:this.core.protocol,version:this.core.version,topic:n,symKey:t,relay:i,expiryTimestamp:r,methods:e?.methods});return this.core.expirer.set(n,r),await this.pairings.set(n,o),await this.core.relayer.subscribe(n),{topic:n,uri:s}},this.pair=async e=>{this.isInitialized(),this.isValidPair(e);const{topic:t,symKey:n,relay:r,expiryTimestamp:i,methods:o}=AA(e.uri);let s;if(this.pairings.keys.includes(t)&&(s=this.pairings.get(t),s.active))throw new Error(`Pairing already exists: ${t}. Please try again with a new connection URI.`);const a=i||Qg(ig.FIVE_MINUTES),c={topic:t,relay:r,expiry:a,active:!1,methods:o};return this.core.expirer.set(t,a),await this.pairings.set(t,c),e.activatePairing&&await this.activate({topic:t}),this.events.emit(aS,c),this.core.crypto.keychain.has(t)||await this.core.crypto.setSymKey(n,t),await this.core.relayer.subscribe(t,{relay:r}),c},this.activate=async({topic:e})=>{this.isInitialized();const t=Qg(ig.THIRTY_DAYS);this.core.expirer.set(e,t),await this.pairings.update(e,{active:!0,expiry:t})},this.ping=async e=>{this.isInitialized(),await this.isValidPing(e);const{topic:t}=e;if(this.pairings.keys.includes(t)){const e=await this.sendRequest(t,"wc_pairingPing",{}),{done:n,resolve:r,reject:i}=Kg();this.events.once(Xg("pairing_ping",e),(({error:e})=>{e?i(e):r()})),await n()}},this.updateExpiry=async({topic:e,expiry:t})=>{this.isInitialized(),await this.pairings.update(e,{expiry:t})},this.updateMetadata=async({topic:e,metadata:t})=>{this.isInitialized(),await this.pairings.update(e,{peerMetadata:t})},this.getPairings=()=>(this.isInitialized(),this.pairings.values),this.disconnect=async e=>{this.isInitialized(),await this.isValidDisconnect(e);const{topic:t}=e;this.pairings.keys.includes(t)&&(await this.sendRequest(t,"wc_pairingDelete",RA("USER_DISCONNECTED")),await this.deletePairing(t))},this.sendRequest=async(e,t,n)=>{const r=DE(t,n),i=await this.core.crypto.encode(e,r),o=sS[t].req;return this.core.history.set(e,r),this.core.relayer.publish(e,i,o),r.id},this.sendResult=async(e,t,n)=>{const r=BE(e,n),i=await this.core.crypto.encode(t,r),o=await this.core.history.get(t,e),s=sS[o.request.method].res;await this.core.relayer.publish(t,i,s),await this.core.history.resolve(r)},this.sendError=async(e,t,n)=>{const r=UE(e,n),i=await this.core.crypto.encode(t,r),o=await this.core.history.get(t,e),s=sS[o.request.method]?sS[o.request.method].res:sS.unregistered_method.res;await this.core.relayer.publish(t,i,s),await this.core.history.resolve(r)},this.deletePairing=async(e,t)=>{await this.core.relayer.unsubscribe(e),await Promise.all([this.pairings.delete(e,RA("USER_DISCONNECTED")),this.core.crypto.deleteSymKey(e),t?Promise.resolve():this.core.expirer.del(e)])},this.cleanup=async()=>{const e=this.pairings.getAll().filter((e=>Jg(e.expiry)));await Promise.all(e.map((e=>this.deletePairing(e.topic))))},this.onRelayEventRequest=e=>{const{topic:t,payload:n}=e;switch(n.method){case"wc_pairingPing":return this.onPairingPingRequest(t,n);case"wc_pairingDelete":return this.onPairingDeleteRequest(t,n);default:return this.onUnknownRpcMethodRequest(t,n)}},this.onRelayEventResponse=async e=>{const{topic:t,payload:n}=e,r=(await this.core.history.get(t,n.id)).request.method;return"wc_pairingPing"===r?this.onPairingPingResponse(t,n):this.onUnknownRpcMethodResponse(r)},this.onPairingPingRequest=async(e,t)=>{const{id:n}=t;try{this.isValidPing({topic:e}),await this.sendResult(n,e,!0),this.events.emit(uS,{id:n,topic:e})}catch(t){await this.sendError(n,e,t),this.logger.error(t)}},this.onPairingPingResponse=(e,t)=>{const{id:n}=t;setTimeout((()=>{GE(t)?this.events.emit(Xg("pairing_ping",n),{}):YE(t)&&this.events.emit(Xg("pairing_ping",n),{error:t.error})}),500)},this.onPairingDeleteRequest=async(e,t)=>{const{id:n}=t;try{this.isValidDisconnect({topic:e}),await this.deletePairing(e),this.events.emit(lS,{id:n,topic:e})}catch(t){await this.sendError(n,e,t),this.logger.error(t)}},this.onUnknownRpcMethodRequest=async(e,t)=>{const{id:n,method:r}=t;try{if(this.registeredMethods.includes(r))return;const t=RA("WC_METHOD_UNSUPPORTED",r);await this.sendError(n,e,t),this.logger.error(t)}catch(t){await this.sendError(n,e,t),this.logger.error(t)}},this.onUnknownRpcMethodResponse=e=>{this.registeredMethods.includes(e)||this.logger.error(RA("WC_METHOD_UNSUPPORTED",e))},this.isValidPair=e=>{var t;if(!HA(e)){const{message:t}=TA("MISSING_OR_INVALID",`pair() params: ${e}`);throw new Error(t)}if(!function(e){if(LA(e,!1))try{return typeof new URL(e)<"u"}catch{return!1}return!1}(e.uri)){const{message:t}=TA("MISSING_OR_INVALID",`pair() uri: ${e.uri}`);throw new Error(t)}const n=AA(e.uri);if(null==(t=n?.relay)||!t.protocol){const{message:e}=TA("MISSING_OR_INVALID","pair() uri#relay-protocol");throw new Error(e)}if(null==n||!n.symKey){const{message:e}=TA("MISSING_OR_INVALID","pair() uri#symKey");throw new Error(e)}if(null!=n&&n.expiryTimestamp&&(0,ig.toMiliseconds)(n?.expiryTimestamp)<Date.now()){const{message:e}=TA("EXPIRED","pair() URI has expired. Please try again with a new connection URI.");throw new Error(e)}},this.isValidPing=async e=>{if(!HA(e)){const{message:t}=TA("MISSING_OR_INVALID",`ping() params: ${e}`);throw new Error(t)}const{topic:t}=e;await this.isValidPairingTopic(t)},this.isValidDisconnect=async e=>{if(!HA(e)){const{message:t}=TA("MISSING_OR_INVALID",`disconnect() params: ${e}`);throw new Error(t)}const{topic:t}=e;await this.isValidPairingTopic(t)},this.isValidPairingTopic=async e=>{if(!LA(e,!1)){const{message:t}=TA("MISSING_OR_INVALID",`pairing topic should be a string: ${e}`);throw new Error(t)}if(!this.pairings.keys.includes(e)){const{message:t}=TA("NO_MATCHING_KEY",`pairing topic doesn't exist: ${e}`);throw new Error(t)}if(Jg(this.pairings.get(e).expiry)){await this.deletePairing(e);const{message:t}=TA("EXPIRED",`pairing topic: ${e}`);throw new Error(t)}},this.core=e,this.logger=(0,B_.U5)(t,this.name),this.pairings=new YS(this.core,this.logger,this.name,this.storagePrefix)}get context(){return(0,B_.oI)(this.logger)}isInitialized(){if(!this.initialized){const{message:e}=TA("NOT_INITIALIZED",this.name);throw new Error(e)}}registerRelayerEvents(){this.core.relayer.on(qk,(async e=>{const{topic:t,message:n}=e;if(!this.pairings.keys.includes(t)||this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))return;const r=await this.core.crypto.decode(t,n);try{KE(r)?(this.core.history.set(t,r),this.onRelayEventRequest({topic:t,payload:r})):ZE(r)&&(await this.core.history.resolve(r),await this.onRelayEventResponse({topic:t,payload:r}),this.core.history.delete(t,r.id))}catch(e){this.logger.error(e)}}))}registerExpirerEvents(){this.core.expirer.on(yS,(async e=>{const{topic:t}=Yg(e.target);t&&this.pairings.keys.includes(t)&&(await this.deletePairing(t,!0),this.events.emit(cS,{topic:t}))}))}}class JS extends j_{constructor(e,t){super(e,t),this.core=e,this.logger=t,this.records=new Map,this.events=new $p.EventEmitter,this.name="history",this.version="0.3",this.cached=[],this.initialized=!1,this.storagePrefix=Lk,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach((e=>this.records.set(e.id,e))),this.cached=[],this.registerEventListeners(),this.initialized=!0)},this.set=(e,t,n)=>{if(this.isInitialized(),this.logger.debug("Setting JSON-RPC request history record"),this.logger.trace({type:"method",method:"set",topic:e,request:t,chainId:n}),this.records.has(t.id))return;const r={id:t.id,topic:e,request:{method:t.method,params:t.params||null},chainId:n,expiry:Qg(ig.THIRTY_DAYS)};this.records.set(r.id,r),this.persist(),this.events.emit(dS,r)},this.resolve=async e=>{if(this.isInitialized(),this.logger.debug("Updating JSON-RPC response history record"),this.logger.trace({type:"method",method:"update",response:e}),!this.records.has(e.id))return;const t=await this.getRecord(e.id);typeof t.response>"u"&&(t.response=YE(e)?{error:e.error}:{result:e.result},this.records.set(t.id,t),this.persist(),this.events.emit(hS,t))},this.get=async(e,t)=>(this.isInitialized(),this.logger.debug("Getting record"),this.logger.trace({type:"method",method:"get",topic:e,id:t}),await this.getRecord(t)),this.delete=(e,t)=>{this.isInitialized(),this.logger.debug("Deleting record"),this.logger.trace({type:"method",method:"delete",id:t}),this.values.forEach((n=>{if(n.topic===e){if(typeof t<"u"&&n.id!==t)return;this.records.delete(n.id),this.events.emit(fS,n)}})),this.persist()},this.exists=async(e,t)=>(this.isInitialized(),!!this.records.has(t)&&(await this.getRecord(t)).topic===e),this.on=(e,t)=>{this.events.on(e,t)},this.once=(e,t)=>{this.events.once(e,t)},this.off=(e,t)=>{this.events.off(e,t)},this.removeListener=(e,t)=>{this.events.removeListener(e,t)},this.logger=(0,B_.U5)(t,this.name)}get context(){return(0,B_.oI)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get size(){return this.records.size}get keys(){return Array.from(this.records.keys())}get values(){return Array.from(this.records.values())}get pending(){const e=[];return this.values.forEach((t=>{if(typeof t.response<"u")return;const n={topic:t.topic,request:DE(t.request.method,t.request.params,t.id),chainId:t.chainId};return e.push(n)})),e}async setJsonRpcRecords(e){await this.core.storage.setItem(this.storageKey,e)}async getJsonRpcRecords(){return await this.core.storage.getItem(this.storageKey)}getRecord(e){this.isInitialized();const t=this.records.get(e);if(!t){const{message:t}=TA("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(t)}return t}async persist(){await this.setJsonRpcRecords(this.values),this.events.emit(pS)}async restore(){try{const e=await this.getJsonRpcRecords();if(typeof e>"u"||!e.length)return;if(this.records.size){const{message:e}=TA("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(e),new Error(e)}this.cached=e,this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",records:this.values})}catch(e){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(e)}}registerEventListeners(){this.events.on(dS,(e=>{const t=dS;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})})),this.events.on(hS,(e=>{const t=hS;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})})),this.events.on(fS,(e=>{const t=fS;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})})),this.core.heartbeat.on(L_,(()=>{this.cleanup()}))}cleanup(){try{this.isInitialized();let e=!1;this.records.forEach((t=>{(0,ig.toMiliseconds)(t.expiry||0)-Date.now()<=0&&(this.logger.info(`Deleting expired history log: ${t.id}`),this.records.delete(t.id),this.events.emit(fS,t,!1),e=!0)})),e&&this.persist()}catch(e){this.logger.warn(e)}}isInitialized(){if(!this.initialized){const{message:e}=TA("NOT_INITIALIZED",this.name);throw new Error(e)}}}class XS extends W_{constructor(e,t){super(e,t),this.core=e,this.logger=t,this.expirations=new Map,this.events=new $p.EventEmitter,this.name="expirer",this.version="0.3",this.cached=[],this.initialized=!1,this.storagePrefix=Lk,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach((e=>this.expirations.set(e.target,e))),this.cached=[],this.registerEventListeners(),this.initialized=!0)},this.has=e=>{try{const t=this.formatTarget(e);return typeof this.getExpiration(t)<"u"}catch{return!1}},this.set=(e,t)=>{this.isInitialized();const n=this.formatTarget(e),r={target:n,expiry:t};this.expirations.set(n,r),this.checkExpiry(n,r),this.events.emit(gS,{target:n,expiration:r})},this.get=e=>{this.isInitialized();const t=this.formatTarget(e);return this.getExpiration(t)},this.del=e=>{if(this.isInitialized(),this.has(e)){const t=this.formatTarget(e),n=this.getExpiration(t);this.expirations.delete(t),this.events.emit(mS,{target:t,expiration:n})}},this.on=(e,t)=>{this.events.on(e,t)},this.once=(e,t)=>{this.events.once(e,t)},this.off=(e,t)=>{this.events.off(e,t)},this.removeListener=(e,t)=>{this.events.removeListener(e,t)},this.logger=(0,B_.U5)(t,this.name)}get context(){return(0,B_.oI)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.expirations.size}get keys(){return Array.from(this.expirations.keys())}get values(){return Array.from(this.expirations.values())}formatTarget(e){if("string"==typeof e)return function(e){return Gg("topic",e)}(e);if("number"==typeof e)return function(e){return Gg("id",e)}(e);const{message:t}=TA("UNKNOWN_TYPE","Target type: "+typeof e);throw new Error(t)}async setExpirations(e){await this.core.storage.setItem(this.storageKey,e)}async getExpirations(){return await this.core.storage.getItem(this.storageKey)}async persist(){await this.setExpirations(this.values),this.events.emit(vS)}async restore(){try{const e=await this.getExpirations();if(typeof e>"u"||!e.length)return;if(this.expirations.size){const{message:e}=TA("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(e),new Error(e)}this.cached=e,this.logger.debug(`Successfully Restored expirations for ${this.name}`),this.logger.trace({type:"method",method:"restore",expirations:this.values})}catch(e){this.logger.debug(`Failed to Restore expirations for ${this.name}`),this.logger.error(e)}}getExpiration(e){const t=this.expirations.get(e);if(!t){const{message:t}=TA("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.warn(t),new Error(t)}return t}checkExpiry(e,t){const{expiry:n}=t;(0,ig.toMiliseconds)(n)-Date.now()<=0&&this.expire(e,t)}expire(e,t){this.expirations.delete(e),this.events.emit(yS,{target:e,expiration:t})}checkExpirations(){this.core.relayer.connected&&this.expirations.forEach(((e,t)=>this.checkExpiry(t,e)))}registerEventListeners(){this.core.heartbeat.on(L_,(()=>this.checkExpirations())),this.events.on(gS,(e=>{const t=gS;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()})),this.events.on(yS,(e=>{const t=yS;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()})),this.events.on(mS,(e=>{const t=mS;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()}))}isInitialized(){if(!this.initialized){const{message:e}=TA("NOT_INITIALIZED",this.name);throw new Error(e)}}}class ex extends V_{constructor(e,t){super(e,t),this.projectId=e,this.logger=t,this.name=bS,this.initialized=!1,this.queue=[],this.verifyDisabled=!1,this.init=async e=>{if(this.verifyDisabled||jg()||!Fg())return;const t=this.getVerifyUrl(e?.verifyUrl);this.verifyUrl!==t&&this.removeIframe(),this.verifyUrl=t;try{await this.createIframe()}catch(e){this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),this.logger.info(e)}if(!this.initialized){this.removeIframe(),this.verifyUrl=AS;try{await this.createIframe()}catch(e){this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),this.logger.info(e),this.verifyDisabled=!0}}},this.register=async e=>{this.initialized?this.sendPost(e.attestationId):(this.addToQueue(e.attestationId),await this.init())},this.resolve=async e=>{if(this.isDevEnv)return"";const t=this.getVerifyUrl(e?.verifyUrl);let n;try{n=await this.fetchAttestation(e.attestationId,t)}catch(r){this.logger.info(`failed to resolve attestation: ${e.attestationId} from url: ${t}`),this.logger.info(r),n=await this.fetchAttestation(e.attestationId,AS)}return n},this.fetchAttestation=async(e,t)=>{this.logger.info(`resolving attestation: ${e} from url: ${t}`);const n=this.startAbortTimer(2*ig.ONE_SECOND),r=await fetch(`${t}/attestation/${e}`,{signal:this.abortController.signal});return clearTimeout(n),200===r.status?await r.json():void 0},this.addToQueue=e=>{this.queue.push(e)},this.processQueue=()=>{0!==this.queue.length&&(this.queue.forEach((e=>this.sendPost(e))),this.queue=[])},this.sendPost=e=>{var t;try{if(!this.iframe)return;null==(t=this.iframe.contentWindow)||t.postMessage(e,"*"),this.logger.info(`postMessage sent: ${e} ${this.verifyUrl}`)}catch{}},this.createIframe=async()=>{let e;const t=n=>{"verify_ready"===n.data&&(this.onInit(),window.removeEventListener("message",t),e())};await Promise.race([new Promise((n=>{const r=document.getElementById(bS);if(r)return this.iframe=r,this.onInit(),n();window.addEventListener("message",t);const i=document.createElement("iframe");i.id=bS,i.src=`${this.verifyUrl}/${this.projectId}`,i.style.display="none",document.body.append(i),this.iframe=i,e=n})),new Promise(((e,n)=>setTimeout((()=>{window.removeEventListener("message",t),n("verify iframe load timeout")}),(0,ig.toMiliseconds)(ig.FIVE_SECONDS))))])},this.onInit=()=>{this.initialized=!0,this.processQueue()},this.removeIframe=()=>{this.iframe&&(this.iframe.remove(),this.iframe=void 0,this.initialized=!1)},this.getVerifyUrl=e=>{let t=e||wS;return _S.includes(t)||(this.logger.info(`verify url: ${t}, not included in trusted list, assigning default: ${wS}`),t=wS),t},this.logger=(0,B_.U5)(t,this.name),this.verifyUrl=wS,this.abortController=new AbortController,this.isDevEnv=Ug()&&oC.env.IS_VITEST}get context(){return(0,B_.oI)(this.logger)}startAbortTimer(e){return this.abortController=new AbortController,setTimeout((()=>this.abortController.abort()),(0,ig.toMiliseconds)(e))}}class tx extends K_{constructor(e,t){super(e,t),this.projectId=e,this.logger=t,this.context="echo",this.registerDeviceToken=async e=>{const{clientId:t,token:n,notificationType:r,enableEncrypted:i=!1}=e,o=`https://echo.walletconnect.com/${this.projectId}/clients`;await iC()(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_id:t,type:r,token:n,always_raw:i})})},this.logger=(0,B_.U5)(t,this.context)}}var nx=Object.defineProperty,rx=Object.getOwnPropertySymbols,ix=Object.prototype.hasOwnProperty,ox=Object.prototype.propertyIsEnumerable,sx=(e,t,n)=>t in e?nx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ax=(e,t)=>{for(var n in t||(t={}))ix.call(t,n)&&sx(e,n,t[n]);if(rx)for(var n of rx(t))ox.call(t,n)&&sx(e,n,t[n]);return e};class cx extends U_{constructor(e){var t;super(e),this.protocol="wc",this.version=2,this.name=Nk,this.events=new $p.EventEmitter,this.initialized=!1,this.on=(e,t)=>this.events.on(e,t),this.once=(e,t)=>this.events.once(e,t),this.off=(e,t)=>this.events.off(e,t),this.removeListener=(e,t)=>this.events.removeListener(e,t),this.projectId=e?.projectId,this.relayUrl=e?.relayUrl||zk,this.customStoragePrefix=null!=e&&e.customStoragePrefix?`:${e.customStoragePrefix}`:"";const n=(0,B_.iP)({level:"string"==typeof e?.logger&&e.logger?e.logger:Dk}),{logger:r,chunkLoggerController:i}=(0,B_.D5)({opts:n,maxSizeInBytes:e?.maxLogBlobSizeInBytes,loggerOverride:e?.logger});this.logChunkController=i,null!=(t=this.logChunkController)&&t.downloadLogsBlobInBrowser&&(window.downloadLogsBlobInBrowser=async()=>{var e,t;null!=(e=this.logChunkController)&&e.downloadLogsBlobInBrowser&&(null==(t=this.logChunkController)||t.downloadLogsBlobInBrowser({clientId:await this.crypto.getClientId()}))}),this.logger=(0,B_.U5)(r,this.name),this.heartbeat=new D_,this.crypto=new CS(this,this.logger,e?.keychain),this.history=new JS(this,this.logger),this.expirer=new XS(this,this.logger),this.storage=null!=e&&e.storage?e.storage:new R_(ax(ax({},Bk),e?.storageOptions)),this.relayer=new qS({core:this,logger:this.logger,relayUrl:this.relayUrl,projectId:this.projectId}),this.pairing=new QS(this,this.logger),this.verify=new ex(this.projectId||"",this.logger),this.echoClient=new tx(this.projectId||"",this.logger)}static async init(e){const t=new cx(e);await t.initialize();const n=await t.crypto.getClientId();return await t.storage.setItem("WALLETCONNECT_CLIENT_ID",n),t}get context(){return(0,B_.oI)(this.logger)}async start(){this.initialized||await this.initialize()}async getLogsBlob(){var e;return null==(e=this.logChunkController)?void 0:e.logsToBlob({clientId:await this.crypto.getClientId()})}async initialize(){this.logger.trace("Initialized");try{await this.crypto.init(),await this.history.init(),await this.expirer.init(),await this.relayer.init(),await this.heartbeat.init(),await this.pairing.init(),this.initialized=!0,this.logger.info("Core Initialization Success")}catch(e){throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`,e),this.logger.error(e.message),e}}}const lx=cx,ux="client",dx=`wc@2:${ux}:`,hx=ux,fx="error",px="WALLETCONNECT_DEEPLINK_CHOICE",gx="Proposal expired",mx=ig.SEVEN_DAYS,yx={wc_sessionPropose:{req:{ttl:ig.FIVE_MINUTES,prompt:!0,tag:1100},res:{ttl:ig.FIVE_MINUTES,prompt:!1,tag:1101}},wc_sessionSettle:{req:{ttl:ig.FIVE_MINUTES,prompt:!1,tag:1102},res:{ttl:ig.FIVE_MINUTES,prompt:!1,tag:1103}},wc_sessionUpdate:{req:{ttl:ig.ONE_DAY,prompt:!1,tag:1104},res:{ttl:ig.ONE_DAY,prompt:!1,tag:1105}},wc_sessionExtend:{req:{ttl:ig.ONE_DAY,prompt:!1,tag:1106},res:{ttl:ig.ONE_DAY,prompt:!1,tag:1107}},wc_sessionRequest:{req:{ttl:ig.FIVE_MINUTES,prompt:!0,tag:1108},res:{ttl:ig.FIVE_MINUTES,prompt:!1,tag:1109}},wc_sessionEvent:{req:{ttl:ig.FIVE_MINUTES,prompt:!0,tag:1110},res:{ttl:ig.FIVE_MINUTES,prompt:!1,tag:1111}},wc_sessionDelete:{req:{ttl:ig.ONE_DAY,prompt:!1,tag:1112},res:{ttl:ig.ONE_DAY,prompt:!1,tag:1113}},wc_sessionPing:{req:{ttl:ig.ONE_DAY,prompt:!1,tag:1114},res:{ttl:ig.ONE_DAY,prompt:!1,tag:1115}},wc_sessionAuthenticate:{req:{ttl:ig.ONE_HOUR,prompt:!0,tag:1116},res:{ttl:ig.ONE_HOUR,prompt:!1,tag:1117}}},vx={min:ig.FIVE_MINUTES,max:ig.SEVEN_DAYS},bx="IDLE",wx="ACTIVE",Ax=["wc_sessionPropose","wc_sessionRequest","wc_authRequest"],_x="wc@1.5:auth:",Ex=`${_x}:PUB_KEY`;var Cx=Object.defineProperty,kx=Object.defineProperties,Sx=Object.getOwnPropertyDescriptors,xx=Object.getOwnPropertySymbols,Mx=Object.prototype.hasOwnProperty,Ix=Object.prototype.propertyIsEnumerable,Tx=(e,t,n)=>t in e?Cx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rx=(e,t)=>{for(var n in t||(t={}))Mx.call(t,n)&&Tx(e,n,t[n]);if(xx)for(var n of xx(t))Ix.call(t,n)&&Tx(e,n,t[n]);return e},Px=(e,t)=>kx(e,Sx(t));class Ox extends G_{constructor(e){super(e),this.name="engine",this.events=new(qp()),this.initialized=!1,this.requestQueue={state:bx,queue:[]},this.sessionRequestQueue={state:bx,queue:[]},this.requestQueueDelay=ig.ONE_SECOND,this.expectedPairingMethodMap=new Map,this.recentlyDeletedMap=new Map,this.recentlyDeletedLimit=200,this.init=async()=>{this.initialized||(await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.registerPairingEvents(),this.client.core.pairing.register({methods:Object.keys(yx)}),this.initialized=!0,setTimeout((()=>{this.sessionRequestQueue.queue=this.getPendingSessionRequests(),this.processSessionRequestQueue()}),(0,ig.toMiliseconds)(this.requestQueueDelay)))},this.connect=async e=>{await this.isInitialized();const t=Px(Rx({},e),{requiredNamespaces:e.requiredNamespaces||{},optionalNamespaces:e.optionalNamespaces||{}});await this.isValidConnect(t);const{pairingTopic:n,requiredNamespaces:r,optionalNamespaces:i,sessionProperties:o,relays:s}=t;let a,c=n,l=!1;try{c&&(l=this.client.core.pairing.pairings.get(c).active)}catch(e){throw this.client.logger.error(`connect() -> pairing.get(${c}) failed`),e}if(!c||!l){const{topic:e,uri:t}=await this.client.core.pairing.create();c=e,a=t}if(!c){const{message:e}=TA("NO_MATCHING_KEY",`connect() pairing topic: ${c}`);throw new Error(e)}const u=await this.client.core.crypto.generateKeyPair(),d=yx.wc_sessionPropose.req.ttl||ig.FIVE_MINUTES,h=Qg(d),f=Rx({requiredNamespaces:r,optionalNamespaces:i,relays:s??[{protocol:"irn"}],proposer:{publicKey:u,metadata:this.client.metadata},expiryTimestamp:h},o&&{sessionProperties:o}),{reject:p,resolve:g,done:m}=Kg(d,gx);this.events.once(Xg("session_connect"),(async({error:e,session:t})=>{if(e)p(e);else if(t){t.self.publicKey=u;const e=Px(Rx({},t),{requiredNamespaces:f.requiredNamespaces,optionalNamespaces:f.optionalNamespaces});await this.client.session.set(t.topic,e),await this.setExpiry(t.topic,t.expiry),c&&await this.client.core.pairing.updateMetadata({topic:c,metadata:t.peer.metadata}),g(e)}}));const y=await this.sendRequest({topic:c,method:"wc_sessionPropose",params:f,throwOnFailedPublish:!0});return await this.setProposal(y,Rx({id:y},f)),{uri:a,approval:m}},this.pair=async e=>{await this.isInitialized();try{return await this.client.core.pairing.pair(e)}catch(e){throw this.client.logger.error("pair() failed"),e}},this.approve=async e=>{await this.isInitialized();try{await this.isValidApprove(e)}catch(e){throw this.client.logger.error("approve() -> isValidApprove() failed"),e}const{id:t,relayProtocol:n,namespaces:r,sessionProperties:i,sessionConfig:o}=e;let s;try{s=this.client.proposal.get(t)}catch(e){throw this.client.logger.error(`approve() -> proposal.get(${t}) failed`),e}let{pairingTopic:a,proposer:c,requiredNamespaces:l,optionalNamespaces:u}=s;a=a||"";const d=await this.client.core.crypto.generateKeyPair(),h=c.publicKey,f=await this.client.core.crypto.generateSharedKey(d,h),p=Rx(Rx({relay:{protocol:n??"irn"},namespaces:r,pairingTopic:a,controller:{publicKey:d,metadata:this.client.metadata},expiry:Qg(mx)},i&&{sessionProperties:i}),o&&{sessionConfig:o});await this.client.core.relayer.subscribe(f);const g=Px(Rx({},p),{topic:f,requiredNamespaces:l,optionalNamespaces:u,pairingTopic:a,acknowledged:!1,self:p.controller,peer:{publicKey:c.publicKey,metadata:c.metadata},controller:d});await this.client.session.set(f,g);try{await this.sendResult({id:t,topic:a,result:{relay:{protocol:n??"irn"},responderPublicKey:d},throwOnFailedPublish:!0}),await this.sendRequest({topic:f,method:"wc_sessionSettle",params:p,throwOnFailedPublish:!0})}catch(e){throw this.client.logger.error(e),this.client.session.delete(f,RA("USER_DISCONNECTED")),await this.client.core.relayer.unsubscribe(f),e}return await this.client.core.pairing.updateMetadata({topic:a,metadata:c.metadata}),await this.client.proposal.delete(t,RA("USER_DISCONNECTED")),await this.client.core.pairing.activate({topic:a}),await this.setExpiry(f,Qg(mx)),{topic:f,acknowledged:()=>new Promise((e=>setTimeout((()=>e(this.client.session.get(f))),500)))}},this.reject=async e=>{await this.isInitialized();try{await this.isValidReject(e)}catch(e){throw this.client.logger.error("reject() -> isValidReject() failed"),e}const{id:t,reason:n}=e;let r;try{r=this.client.proposal.get(t).pairingTopic}catch(e){throw this.client.logger.error(`reject() -> proposal.get(${t}) failed`),e}r&&(await this.sendError({id:t,topic:r,error:n}),await this.client.proposal.delete(t,RA("USER_DISCONNECTED")))},this.update=async e=>{await this.isInitialized();try{await this.isValidUpdate(e)}catch(e){throw this.client.logger.error("update() -> isValidUpdate() failed"),e}const{topic:t,namespaces:n}=e,{done:r,resolve:i,reject:o}=Kg(),s=NE(),a=LE().toString(),c=this.client.session.get(t).namespaces;return this.events.once(Xg("session_update",s),(({error:e})=>{e?o(e):i()})),await this.client.session.update(t,{namespaces:n}),await this.sendRequest({topic:t,method:"wc_sessionUpdate",params:{namespaces:n},throwOnFailedPublish:!0,clientRpcId:s,relayRpcId:a}).catch((e=>{this.client.logger.error(e),this.client.session.update(t,{namespaces:c}),o(e)})),{acknowledged:r}},this.extend=async e=>{await this.isInitialized();try{await this.isValidExtend(e)}catch(e){throw this.client.logger.error("extend() -> isValidExtend() failed"),e}const{topic:t}=e,n=NE(),{done:r,resolve:i,reject:o}=Kg();return this.events.once(Xg("session_extend",n),(({error:e})=>{e?o(e):i()})),await this.setExpiry(t,Qg(mx)),this.sendRequest({topic:t,method:"wc_sessionExtend",params:{},clientRpcId:n,throwOnFailedPublish:!0}).catch((e=>{o(e)})),{acknowledged:r}},this.request=async e=>{await this.isInitialized();try{await this.isValidRequest(e)}catch(e){throw this.client.logger.error("request() -> isValidRequest() failed"),e}const{chainId:t,request:r,topic:i,expiry:o=yx.wc_sessionRequest.req.ttl}=e,s=this.client.session.get(i),a=NE(),c=LE().toString(),{done:l,resolve:u,reject:d}=Kg(o,"Request expired. Please try again.");return this.events.once(Xg("session_request",a),(({error:e,result:t})=>{e?d(e):u(t)})),await Promise.all([new Promise((async e=>{await this.sendRequest({clientRpcId:a,relayRpcId:c,topic:i,method:"wc_sessionRequest",params:{request:Px(Rx({},r),{expiryTimestamp:Qg(o)}),chainId:t},expiry:o,throwOnFailedPublish:!0}).catch((e=>d(e))),this.client.events.emit("session_request_sent",{topic:i,request:r,chainId:t,id:a}),e()})),new Promise((async e=>{var t;if(null==(t=s.sessionConfig)||!t.disableDeepLink){const e=await async function(e,t){try{return await e.getItem(t)||(Fg()?localStorage.getItem(t):void 0)}catch(e){console.error(e)}}(this.client.core.storage,px);!async function({id:e,topic:t,wcDeepLink:r}){try{if(!r)return;const i="string"==typeof r?JSON.parse(r):r;let o=i?.href;if("string"!=typeof o)return;o.endsWith("/")&&(o=o.slice(0,-1));const s=`${o}/wc?requestId=${e}&sessionTopic=${t}`,a=zg();a===Dg.browser?s.startsWith("https://")||s.startsWith("http://")?window.open(s,"_blank","noreferrer noopener"):window.open(s,"_self","noreferrer noopener"):a===Dg.reactNative&&typeof(null==n.g?void 0:n.g.Linking)<"u"&&await n.g.Linking.openURL(s)}catch(e){console.error(e)}}({id:a,topic:i,wcDeepLink:e})}e()})),l()]).then((e=>e[2]))},this.respond=async e=>{await this.isInitialized(),await this.isValidRespond(e);const{topic:t,response:n}=e,{id:r}=n;GE(n)?await this.sendResult({id:r,topic:t,result:n.result,throwOnFailedPublish:!0}):YE(n)&&await this.sendError({id:r,topic:t,error:n.error}),this.cleanupAfterResponse(e)},this.ping=async e=>{await this.isInitialized();try{await this.isValidPing(e)}catch(e){throw this.client.logger.error("ping() -> isValidPing() failed"),e}const{topic:t}=e;if(this.client.session.keys.includes(t)){const e=NE(),n=LE().toString(),{done:r,resolve:i,reject:o}=Kg();this.events.once(Xg("session_ping",e),(({error:e})=>{e?o(e):i()})),await Promise.all([this.sendRequest({topic:t,method:"wc_sessionPing",params:{},throwOnFailedPublish:!0,clientRpcId:e,relayRpcId:n}),r()])}else this.client.core.pairing.pairings.keys.includes(t)&&await this.client.core.pairing.ping({topic:t})},this.emit=async e=>{await this.isInitialized(),await this.isValidEmit(e);const{topic:t,event:n,chainId:r}=e,i=LE().toString();await this.sendRequest({topic:t,method:"wc_sessionEvent",params:{event:n,chainId:r},throwOnFailedPublish:!0,relayRpcId:i})},this.disconnect=async e=>{await this.isInitialized(),await this.isValidDisconnect(e);const{topic:t}=e;if(this.client.session.keys.includes(t))await this.sendRequest({topic:t,method:"wc_sessionDelete",params:RA("USER_DISCONNECTED"),throwOnFailedPublish:!0}),await this.deleteSession({topic:t,emitEvent:!1});else{if(!this.client.core.pairing.pairings.keys.includes(t)){const{message:e}=TA("MISMATCHED_TOPIC",`Session or pairing topic not found: ${t}`);throw new Error(e)}await this.client.core.pairing.disconnect({topic:t})}},this.find=e=>(this.isInitialized(),this.client.session.getAll().filter((t=>function(e,t){const{requiredNamespaces:n}=t,r=Object.keys(e.namespaces),i=Object.keys(n);let o=!0;return!!Hg(i,r)&&(r.forEach((t=>{const{accounts:r,methods:i,events:s}=e.namespaces[t],a=CA(r),c=n[t];Hg(Mg(t,c),a)&&Hg(c.methods,i)&&Hg(c.events,s)||(o=!1)})),o)}(t,e)))),this.getPendingSessionRequests=()=>this.client.pendingRequest.getAll(),this.authenticate=async e=>{this.isInitialized(),this.isValidAuthenticate(e);const{chains:t,statement:n="",uri:r,domain:i,nonce:o,type:s,exp:a,nbf:c,methods:l=[],expiry:u}=e,d=[...e.resources||[]],{topic:h,uri:f}=await this.client.core.pairing.create({methods:["wc_sessionAuthenticate"]});this.client.logger.info({message:"Generated new pairing",pairing:{topic:h,uri:f}});const p=await this.client.core.crypto.generateKeyPair(),g=rA(p);if(await Promise.all([this.client.auth.authKeys.set(Ex,{responseTopic:g,publicKey:p}),this.client.auth.pairingTopics.set(g,{topic:g,pairingTopic:h})]),await this.client.core.relayer.subscribe(g),this.client.logger.info(`sending request to new pairing topic: ${h}`),l.length>0){const{namespace:e}=Sg(t[0]);let n=jw(e,"request",l);Ww(d)&&(n=zw(n,d.pop())),d.push(n)}const m=u&&u>yx.wc_sessionAuthenticate.req.ttl?u:yx.wc_sessionAuthenticate.req.ttl,y={authPayload:{type:s??"caip122",chains:t,statement:n,aud:r,domain:i,version:"1",nonce:o,iat:(new Date).toISOString(),exp:a,nbf:c,resources:d},requester:{publicKey:p,metadata:this.client.metadata},expiryTimestamp:Qg(m)},v={requiredNamespaces:{},optionalNamespaces:{eip155:{chains:t,methods:[...new Set(["personal_sign",...l])],events:["chainChanged","accountsChanged"]}},relays:[{protocol:"irn"}],proposer:{publicKey:p,metadata:this.client.metadata},expiryTimestamp:Qg(yx.wc_sessionPropose.req.ttl)},{done:b,resolve:w,reject:A}=Kg(m,"Request expired"),_=async({error:e,session:t})=>{if(this.events.off(Xg("session_request",C),E),e)A(e);else if(t){t.self.publicKey=p,await this.client.session.set(t.topic,t),await this.setExpiry(t.topic,t.expiry),h&&await this.client.core.pairing.updateMetadata({topic:h,metadata:t.peer.metadata});const e=this.client.session.get(t.topic);await this.deleteProposal(k),w({session:e})}},E=async e=>{if(await this.deletePendingAuthRequest(C,{message:"fulfilled",code:0}),e.error){const t=RA("WC_METHOD_UNSUPPORTED","wc_sessionAuthenticate");return e.error.code===t.code?void 0:(this.events.off(Xg("session_connect"),_),A(e.error.message))}await this.deleteProposal(k),this.events.off(Xg("session_connect"),_);const{cacaos:t,responder:n}=e.result,r=[],i=[];for(const e of t){await Ow({cacao:e,projectId:this.client.core.projectId})||(this.client.logger.error(e,"Signature verification failed"),A(RA("SESSION_SETTLEMENT_FAILED","Signature verification failed")));const{p:t}=e,n=Ww(t.resources),o=[Rw(t.iss)],s=Pw(t.iss);if(n){const e=qw(n),t=Hw(n);r.push(...e),o.push(...t)}for(const e of o)i.push(`${e}:${s}`)}const o=await this.client.core.crypto.generateSharedKey(p,n.publicKey);let s;r.length>0&&(s={topic:o,acknowledged:!0,self:{publicKey:p,metadata:this.client.metadata},peer:n,controller:n.publicKey,expiry:Qg(mx),requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:h,namespaces:xA([...new Set(r)],[...new Set(i)])},await this.client.core.relayer.subscribe(o),await this.client.session.set(o,s),s=this.client.session.get(o)),w({auths:t,session:s})},C=NE(),k=NE();this.events.once(Xg("session_connect"),_),this.events.once(Xg("session_request",C),E);try{await Promise.all([this.sendRequest({topic:h,method:"wc_sessionAuthenticate",params:y,expiry:e.expiry,throwOnFailedPublish:!0,clientRpcId:C}),this.sendRequest({topic:h,method:"wc_sessionPropose",params:v,expiry:yx.wc_sessionPropose.req.ttl,throwOnFailedPublish:!0,clientRpcId:k})])}catch(e){throw this.events.off(Xg("session_connect"),_),this.events.off(Xg("session_request",C),E),e}return await this.setProposal(k,Rx({id:k},v)),await this.setAuthRequest(C,{request:Px(Rx({},y),{verifyContext:{}}),pairingTopic:h}),{uri:f,response:b}},this.approveSessionAuthenticate=async e=>{this.isInitialized();const{id:t,auths:n}=e,r=this.getPendingAuthRequest(t);if(!r)throw new Error(`Could not find pending auth request with id ${t}`);const i=r.requester.publicKey,o=await this.client.core.crypto.generateKeyPair(),s=rA(i),a={type:Qw,receiverPublicKey:i,senderPublicKey:o},c=[],l=[];for(const e of n){if(!await Ow({cacao:e,projectId:this.client.core.projectId})){const e=RA("SESSION_SETTLEMENT_FAILED","Signature verification failed");throw await this.sendError({id:t,topic:s,error:e,encodeOpts:a}),new Error(e.message)}const{p:n}=e,r=Ww(n.resources),i=[Rw(n.iss)],o=Pw(n.iss);if(r){const e=qw(r),t=Hw(r);c.push(...e),i.push(...t)}for(const e of i)l.push(`${e}:${o}`)}const u=await this.client.core.crypto.generateSharedKey(o,i);let d;return c?.length>0&&(d={topic:u,acknowledged:!0,self:{publicKey:o,metadata:this.client.metadata},peer:{publicKey:i,metadata:r.requester.metadata},controller:i,expiry:Qg(mx),authentication:n,requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:"",namespaces:xA([...new Set(c)],[...new Set(l)])},await this.client.core.relayer.subscribe(u),await this.client.session.set(u,d)),await this.sendResult({topic:s,id:t,result:{cacaos:n,responder:{publicKey:o,metadata:this.client.metadata}},encodeOpts:a,throwOnFailedPublish:!0}),await this.client.auth.requests.delete(t,{message:"fullfilled",code:0}),await this.client.core.pairing.activate({topic:r.pairingTopic}),{session:d}},this.rejectSessionAuthenticate=async e=>{await this.isInitialized();const{id:t,reason:n}=e,r=this.getPendingAuthRequest(t);if(!r)throw new Error(`Could not find pending auth request with id ${t}`);const i=r.requester.publicKey,o=await this.client.core.crypto.generateKeyPair(),s=rA(i),a={type:Qw,receiverPublicKey:i,senderPublicKey:o};await this.sendError({id:t,topic:s,error:n,encodeOpts:a}),await this.client.auth.requests.delete(t,{message:"rejected",code:0}),await this.client.proposal.delete(t,RA("USER_DISCONNECTED"))},this.formatAuthMessage=e=>{this.isInitialized();const{request:t,iss:n}=e;return Nw(t,n)},this.cleanupDuplicatePairings=async e=>{if(e.pairingTopic)try{const t=this.client.core.pairing.pairings.get(e.pairingTopic),n=this.client.core.pairing.pairings.getAll().filter((n=>{var r,i;return(null==(r=n.peerMetadata)?void 0:r.url)&&(null==(i=n.peerMetadata)?void 0:i.url)===e.peer.metadata.url&&n.topic&&n.topic!==t.topic}));if(0===n.length)return;this.client.logger.info(`Cleaning up ${n.length} duplicate pairing(s)`),await Promise.all(n.map((e=>this.client.core.pairing.disconnect({topic:e.topic})))),this.client.logger.info("Duplicate pairings clean up finished")}catch(e){this.client.logger.error(e)}},this.deleteSession=async e=>{const{topic:t,expirerHasDeleted:n=!1,emitEvent:r=!0,id:i=0}=e,{self:o}=this.client.session.get(t);await this.client.core.relayer.unsubscribe(t),await this.client.session.delete(t,RA("USER_DISCONNECTED")),this.addToRecentlyDeleted(t,"session"),this.client.core.crypto.keychain.has(o.publicKey)&&await this.client.core.crypto.deleteKeyPair(o.publicKey),this.client.core.crypto.keychain.has(t)&&await this.client.core.crypto.deleteSymKey(t),n||this.client.core.expirer.del(t),this.client.core.storage.removeItem(px).catch((e=>this.client.logger.warn(e))),this.getPendingSessionRequests().forEach((e=>{e.topic===t&&this.deletePendingSessionRequest(e.id,RA("USER_DISCONNECTED"))})),r&&this.client.events.emit("session_delete",{id:i,topic:t})},this.deleteProposal=async(e,t)=>{await Promise.all([this.client.proposal.delete(e,RA("USER_DISCONNECTED")),t?Promise.resolve():this.client.core.expirer.del(e)]),this.addToRecentlyDeleted(e,"proposal")},this.deletePendingSessionRequest=async(e,t,n=!1)=>{await Promise.all([this.client.pendingRequest.delete(e,t),n?Promise.resolve():this.client.core.expirer.del(e)]),this.addToRecentlyDeleted(e,"request"),this.sessionRequestQueue.queue=this.sessionRequestQueue.queue.filter((t=>t.id!==e)),n&&(this.sessionRequestQueue.state=bx,this.client.events.emit("session_request_expire",{id:e}))},this.deletePendingAuthRequest=async(e,t,n=!1)=>{await Promise.all([this.client.auth.requests.delete(e,t),n?Promise.resolve():this.client.core.expirer.del(e)])},this.setExpiry=async(e,t)=>{this.client.session.keys.includes(e)&&(this.client.core.expirer.set(e,t),await this.client.session.update(e,{expiry:t}))},this.setProposal=async(e,t)=>{this.client.core.expirer.set(e,Qg(yx.wc_sessionPropose.req.ttl)),await this.client.proposal.set(e,t)},this.setAuthRequest=async(e,t)=>{const{request:n,pairingTopic:r}=t;this.client.core.expirer.set(e,n.expiryTimestamp),await this.client.auth.requests.set(e,{authPayload:n.authPayload,requester:n.requester,expiryTimestamp:n.expiryTimestamp,id:e,pairingTopic:r,verifyContext:n.verifyContext})},this.setPendingSessionRequest=async e=>{const{id:t,topic:n,params:r,verifyContext:i}=e,o=r.request.expiryTimestamp||Qg(yx.wc_sessionRequest.req.ttl);this.client.core.expirer.set(t,o),await this.client.pendingRequest.set(t,{id:t,topic:n,params:r,verifyContext:i})},this.sendRequest=async e=>{const{topic:t,method:n,params:r,expiry:i,relayRpcId:o,clientRpcId:s,throwOnFailedPublish:a}=e,c=DE(n,r,s);if(Fg()&&Ax.includes(n)){const e=iA(JSON.stringify(c));this.client.core.verify.register({attestationId:e})}let l;try{l=await this.client.core.crypto.encode(t,c)}catch(e){throw await this.cleanup(),this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${t} failed`),e}const u=yx[n].req;return i&&(u.ttl=i),o&&(u.id=o),this.client.core.history.set(t,c),a?(u.internal=Px(Rx({},u.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(t,l,u)):this.client.core.relayer.publish(t,l,u).catch((e=>this.client.logger.error(e))),c.id},this.sendResult=async e=>{const{id:t,topic:n,result:r,throwOnFailedPublish:i,encodeOpts:o}=e,s=BE(t,r);let a,c;try{a=await this.client.core.crypto.encode(n,s,o)}catch(e){throw await this.cleanup(),this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${n} failed`),e}try{c=await this.client.core.history.get(n,t)}catch(e){throw this.client.logger.error(`sendResult() -> history.get(${n}, ${t}) failed`),e}const l=yx[c.request.method].res;i?(l.internal=Px(Rx({},l.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(n,a,l)):this.client.core.relayer.publish(n,a,l).catch((e=>this.client.logger.error(e))),await this.client.core.history.resolve(s)},this.sendError=async e=>{const{id:t,topic:n,error:r,encodeOpts:i}=e,o=UE(t,r);let s,a;try{s=await this.client.core.crypto.encode(n,o,i)}catch(e){throw await this.cleanup(),this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${n} failed`),e}try{a=await this.client.core.history.get(n,t)}catch(e){throw this.client.logger.error(`sendError() -> history.get(${n}, ${t}) failed`),e}const c=yx[a.request.method].res;this.client.core.relayer.publish(n,s,c),await this.client.core.history.resolve(o)},this.cleanup=async()=>{const e=[],t=[];this.client.session.getAll().forEach((t=>{let n=!1;Jg(t.expiry)&&(n=!0),this.client.core.crypto.keychain.has(t.topic)||(n=!0),n&&e.push(t.topic)})),this.client.proposal.getAll().forEach((e=>{Jg(e.expiryTimestamp)&&t.push(e.id)})),await Promise.all([...e.map((e=>this.deleteSession({topic:e}))),...t.map((e=>this.deleteProposal(e)))])},this.onRelayEventRequest=async e=>{this.requestQueue.queue.push(e),await this.processRequestsQueue()},this.processRequestsQueue=async()=>{if(this.requestQueue.state!==wx){for(this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`);this.requestQueue.queue.length>0;){this.requestQueue.state=wx;const e=this.requestQueue.queue.shift();if(e)try{this.processRequest(e),await new Promise((e=>setTimeout(e,300)))}catch(e){this.client.logger.warn(e)}}this.requestQueue.state=bx}else this.client.logger.info("Request queue already active, skipping...")},this.processRequest=e=>{const{topic:t,payload:n}=e,r=n.method;if(!this.shouldIgnorePairingRequest({topic:t,requestMethod:r}))switch(r){case"wc_sessionPropose":return this.onSessionProposeRequest(t,n);case"wc_sessionSettle":return this.onSessionSettleRequest(t,n);case"wc_sessionUpdate":return this.onSessionUpdateRequest(t,n);case"wc_sessionExtend":return this.onSessionExtendRequest(t,n);case"wc_sessionPing":return this.onSessionPingRequest(t,n);case"wc_sessionDelete":return this.onSessionDeleteRequest(t,n);case"wc_sessionRequest":return this.onSessionRequest(t,n);case"wc_sessionEvent":return this.onSessionEventRequest(t,n);case"wc_sessionAuthenticate":return this.onSessionAuthenticateRequest(t,n);default:return this.client.logger.info(`Unsupported request method ${r}`)}},this.onRelayEventResponse=async e=>{const{topic:t,payload:n}=e,r=(await this.client.core.history.get(t,n.id)).request.method;switch(r){case"wc_sessionPropose":return this.onSessionProposeResponse(t,n);case"wc_sessionSettle":return this.onSessionSettleResponse(t,n);case"wc_sessionUpdate":return this.onSessionUpdateResponse(t,n);case"wc_sessionExtend":return this.onSessionExtendResponse(t,n);case"wc_sessionPing":return this.onSessionPingResponse(t,n);case"wc_sessionRequest":return this.onSessionRequestResponse(t,n);case"wc_sessionAuthenticate":return this.onSessionAuthenticateResponse(t,n);default:return this.client.logger.info(`Unsupported response method ${r}`)}},this.onRelayEventUnknownPayload=e=>{const{topic:t}=e,{message:n}=TA("MISSING_OR_INVALID",`Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);throw new Error(n)},this.shouldIgnorePairingRequest=e=>{const{topic:t,requestMethod:n}=e,r=this.expectedPairingMethodMap.get(t);return!(!r||r.includes(n))&&!!(r.includes("wc_sessionAuthenticate")&&this.client.events.listenerCount("session_authenticate")>0)},this.onSessionProposeRequest=async(e,t)=>{const{params:n,id:r}=t;try{this.isValidConnect(Rx({},t.params));const i=n.expiryTimestamp||Qg(yx.wc_sessionPropose.req.ttl),o=Rx({id:r,pairingTopic:e,expiryTimestamp:i},n);await this.setProposal(r,o);const s=iA(JSON.stringify(t)),a=await this.getVerifyContext(s,o.proposer.metadata);this.client.events.emit("session_proposal",{id:r,params:o,verifyContext:a})}catch(t){await this.sendError({id:r,topic:e,error:t}),this.client.logger.error(t)}},this.onSessionProposeResponse=async(e,t)=>{const{id:n}=t;if(GE(t)){const{result:r}=t;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",result:r});const i=this.client.proposal.get(n);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",proposal:i});const o=i.proposer.publicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",selfPublicKey:o});const s=r.responderPublicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",peerPublicKey:s});const a=await this.client.core.crypto.generateSharedKey(o,s);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",sessionTopic:a});const c=await this.client.core.relayer.subscribe(a);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",subscriptionId:c}),await this.client.core.pairing.activate({topic:e})}else if(YE(t)){await this.client.proposal.delete(n,RA("USER_DISCONNECTED"));const e=Xg("session_connect");if(0===this.events.listenerCount(e))throw new Error(`emitting ${e} without any listeners, 954`);this.events.emit(Xg("session_connect"),{error:t.error})}},this.onSessionSettleRequest=async(e,t)=>{const{id:n,params:r}=t;try{this.isValidSessionSettleRequest(r);const{relay:n,controller:i,expiry:o,namespaces:s,sessionProperties:a,pairingTopic:c,sessionConfig:l}=t.params,u=Rx(Rx({topic:e,relay:n,expiry:o,namespaces:s,acknowledged:!0,pairingTopic:c,requiredNamespaces:{},optionalNamespaces:{},controller:i.publicKey,self:{publicKey:"",metadata:this.client.metadata},peer:{publicKey:i.publicKey,metadata:i.metadata}},a&&{sessionProperties:a}),l&&{sessionConfig:l});await this.sendResult({id:t.id,topic:e,result:!0,throwOnFailedPublish:!0});const d=Xg("session_connect");if(0===this.events.listenerCount(d))throw new Error(`emitting ${d} without any listeners 997`);this.events.emit(Xg("session_connect"),{session:u}),this.cleanupDuplicatePairings(u)}catch(t){await this.sendError({id:n,topic:e,error:t}),this.client.logger.error(t)}},this.onSessionSettleResponse=async(e,t)=>{const{id:n}=t;GE(t)?(await this.client.session.update(e,{acknowledged:!0}),this.events.emit(Xg("session_approve",n),{})):YE(t)&&(await this.client.session.delete(e,RA("USER_DISCONNECTED")),this.events.emit(Xg("session_approve",n),{error:t.error}))},this.onSessionUpdateRequest=async(e,t)=>{const{params:n,id:r}=t;try{const t=`${e}_session_update`,i=XA.get(t);if(i&&this.isRequestOutOfSync(i,r))return this.client.logger.info(`Discarding out of sync request - ${r}`),void this.sendError({id:r,topic:e,error:RA("INVALID_UPDATE_REQUEST")});this.isValidUpdate(Rx({topic:e},n));try{XA.set(t,r),await this.client.session.update(e,{namespaces:n.namespaces}),await this.sendResult({id:r,topic:e,result:!0,throwOnFailedPublish:!0})}catch(e){throw XA.delete(t),e}this.client.events.emit("session_update",{id:r,topic:e,params:n})}catch(t){await this.sendError({id:r,topic:e,error:t}),this.client.logger.error(t)}},this.isRequestOutOfSync=(e,t)=>parseInt(t.toString().slice(0,-3))<=parseInt(e.toString().slice(0,-3)),this.onSessionUpdateResponse=(e,t)=>{const{id:n}=t,r=Xg("session_update",n);if(0===this.events.listenerCount(r))throw new Error(`emitting ${r} without any listeners`);GE(t)?this.events.emit(Xg("session_update",n),{}):YE(t)&&this.events.emit(Xg("session_update",n),{error:t.error})},this.onSessionExtendRequest=async(e,t)=>{const{id:n}=t;try{this.isValidExtend({topic:e}),await this.setExpiry(e,Qg(mx)),await this.sendResult({id:n,topic:e,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_extend",{id:n,topic:e})}catch(t){await this.sendError({id:n,topic:e,error:t}),this.client.logger.error(t)}},this.onSessionExtendResponse=(e,t)=>{const{id:n}=t,r=Xg("session_extend",n);if(0===this.events.listenerCount(r))throw new Error(`emitting ${r} without any listeners`);GE(t)?this.events.emit(Xg("session_extend",n),{}):YE(t)&&this.events.emit(Xg("session_extend",n),{error:t.error})},this.onSessionPingRequest=async(e,t)=>{const{id:n}=t;try{this.isValidPing({topic:e}),await this.sendResult({id:n,topic:e,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_ping",{id:n,topic:e})}catch(t){await this.sendError({id:n,topic:e,error:t}),this.client.logger.error(t)}},this.onSessionPingResponse=(e,t)=>{const{id:n}=t,r=Xg("session_ping",n);if(0===this.events.listenerCount(r))throw new Error(`emitting ${r} without any listeners`);setTimeout((()=>{GE(t)?this.events.emit(Xg("session_ping",n),{}):YE(t)&&this.events.emit(Xg("session_ping",n),{error:t.error})}),500)},this.onSessionDeleteRequest=async(e,t)=>{const{id:n}=t;try{this.isValidDisconnect({topic:e,reason:t.params}),await Promise.all([new Promise((t=>{this.client.core.relayer.once(Gk,(async()=>{t(await this.deleteSession({topic:e,id:n}))}))})),this.sendResult({id:n,topic:e,result:!0,throwOnFailedPublish:!0}),this.cleanupPendingSentRequestsForTopic({topic:e,error:RA("USER_DISCONNECTED")})])}catch(e){this.client.logger.error(e)}},this.onSessionRequest=async(e,t)=>{var n;const{id:r,params:i}=t;try{await this.isValidRequest(Rx({topic:e},i));const t=iA(JSON.stringify(DE("wc_sessionRequest",i,r))),o=this.client.session.get(e),s={id:r,topic:e,params:i,verifyContext:await this.getVerifyContext(t,o.peer.metadata)};await this.setPendingSessionRequest(s),null!=(n=this.client.signConfig)&&n.disableRequestQueue?this.emitSessionRequest(s):(this.addSessionRequestToSessionRequestQueue(s),this.processSessionRequestQueue())}catch(t){await this.sendError({id:r,topic:e,error:t}),this.client.logger.error(t)}},this.onSessionRequestResponse=(e,t)=>{const{id:n}=t,r=Xg("session_request",n);if(0===this.events.listenerCount(r))throw new Error(`emitting ${r} without any listeners`);GE(t)?this.events.emit(Xg("session_request",n),{result:t.result}):YE(t)&&this.events.emit(Xg("session_request",n),{error:t.error})},this.onSessionEventRequest=async(e,t)=>{const{id:n,params:r}=t;try{const t=`${e}_session_event_${r.event.name}`,i=XA.get(t);if(i&&this.isRequestOutOfSync(i,n))return void this.client.logger.info(`Discarding out of sync request - ${n}`);this.isValidEmit(Rx({topic:e},r)),this.client.events.emit("session_event",{id:n,topic:e,params:r}),XA.set(t,n)}catch(t){await this.sendError({id:n,topic:e,error:t}),this.client.logger.error(t)}},this.onSessionAuthenticateResponse=(e,t)=>{const{id:n}=t;this.client.logger.trace({type:"method",method:"onSessionAuthenticateResponse",topic:e,payload:t}),GE(t)?this.events.emit(Xg("session_request",n),{result:t.result}):YE(t)&&this.events.emit(Xg("session_request",n),{error:t.error})},this.onSessionAuthenticateRequest=async(e,t)=>{const{requester:n,authPayload:r,expiryTimestamp:i}=t.params,o=iA(JSON.stringify(t)),s=await this.getVerifyContext(o,this.client.metadata),a={requester:n,pairingTopic:e,id:t.id,authPayload:r,verifyContext:s,expiryTimestamp:i};await this.setAuthRequest(t.id,{request:a,pairingTopic:e}),this.client.events.emit("session_authenticate",{topic:e,params:t.params,id:t.id})},this.addSessionRequestToSessionRequestQueue=e=>{this.sessionRequestQueue.queue.push(e)},this.cleanupAfterResponse=e=>{this.deletePendingSessionRequest(e.response.id,{message:"fulfilled",code:0}),setTimeout((()=>{this.sessionRequestQueue.state=bx,this.processSessionRequestQueue()}),(0,ig.toMiliseconds)(this.requestQueueDelay))},this.cleanupPendingSentRequestsForTopic=({topic:e,error:t})=>{const n=this.client.core.history.pending;n.length>0&&n.filter((t=>t.topic===e&&"wc_sessionRequest"===t.request.method)).forEach((e=>{const n=Xg("session_request",e.request.id);if(0===this.events.listenerCount(n))throw new Error(`emitting ${n} without any listeners`);this.events.emit(Xg("session_request",e.request.id),{error:t})}))},this.processSessionRequestQueue=()=>{if(this.sessionRequestQueue.state===wx)return void this.client.logger.info("session request queue is already active.");const e=this.sessionRequestQueue.queue[0];if(e)try{this.sessionRequestQueue.state=wx,this.emitSessionRequest(e)}catch(e){this.client.logger.error(e)}else this.client.logger.info("session request queue is empty.")},this.emitSessionRequest=e=>{this.client.events.emit("session_request",e)},this.onPairingCreated=e=>{if(e.methods&&this.expectedPairingMethodMap.set(e.topic,e.methods),e.active)return;const t=this.client.proposal.getAll().find((t=>t.pairingTopic===e.topic));t&&this.onSessionProposeRequest(e.topic,DE("wc_sessionPropose",{requiredNamespaces:t.requiredNamespaces,optionalNamespaces:t.optionalNamespaces,relays:t.relays,proposer:t.proposer,sessionProperties:t.sessionProperties},t.id))},this.isValidConnect=async e=>{if(!HA(e)){const{message:t}=TA("MISSING_OR_INVALID",`connect() params: ${JSON.stringify(e)}`);throw new Error(t)}const{pairingTopic:t,requiredNamespaces:n,optionalNamespaces:r,sessionProperties:i,relays:o}=e;if(NA(t)||await this.isValidPairingTopic(t),!function(e,t){let n=!1;return t&&!e?n=!0:e&&PA(e)&&e.length&&e.forEach((e=>{n=qA(e)})),n}(o,!0)){const{message:e}=TA("MISSING_OR_INVALID",`connect() relays: ${o}`);throw new Error(e)}!NA(n)&&0!==OA(n)&&this.validateNamespaces(n,"requiredNamespaces"),!NA(r)&&0!==OA(r)&&this.validateNamespaces(r,"optionalNamespaces"),NA(i)||this.validateSessionProps(i,"sessionProperties")},this.validateNamespaces=(e,t)=>{const n=function(e,t,n){let r=null;if(e&&OA(e)){const i=zA(e,t);i&&(r=i);const o=jA(e,t,n);o&&(r=o)}else r=TA("MISSING_OR_INVALID",`${t}, ${n} should be an object with data`);return r}(e,"connect()",t);if(n)throw new Error(n.message)},this.isValidApprove=async e=>{if(!HA(e))throw new Error(TA("MISSING_OR_INVALID",`approve() params: ${e}`).message);const{id:t,namespaces:n,relayProtocol:r,sessionProperties:i}=e;this.checkRecentlyDeleted(t),await this.isValidProposalId(t);const o=this.client.proposal.get(t),s=$A(n,"approve()");if(s)throw new Error(s.message);const a=ZA(o.requiredNamespaces,n,"approve()");if(a)throw new Error(a.message);if(!LA(r,!0)){const{message:e}=TA("MISSING_OR_INVALID",`approve() relayProtocol: ${r}`);throw new Error(e)}NA(i)||this.validateSessionProps(i,"sessionProperties")},this.isValidReject=async e=>{if(!HA(e)){const{message:t}=TA("MISSING_OR_INVALID",`reject() params: ${e}`);throw new Error(t)}const{id:t,reason:n}=e;if(this.checkRecentlyDeleted(t),await this.isValidProposalId(t),!function(e){return!!(e&&"object"==typeof e&&e.code&&DA(e.code,!1)&&e.message&&LA(e.message,!1))}(n)){const{message:e}=TA("MISSING_OR_INVALID",`reject() reason: ${JSON.stringify(n)}`);throw new Error(e)}},this.isValidSessionSettleRequest=e=>{if(!HA(e)){const{message:t}=TA("MISSING_OR_INVALID",`onSessionSettleRequest() params: ${e}`);throw new Error(t)}const{relay:t,controller:n,namespaces:r,expiry:i}=e;if(!qA(t)){const{message:e}=TA("MISSING_OR_INVALID","onSessionSettleRequest() relay protocol should be a string");throw new Error(e)}const o=function(e,t){let n=null;return LA(e?.publicKey,!1)||(n=TA("MISSING_OR_INVALID",`${t} controller public key should be a string`)),n}(n,"onSessionSettleRequest()");if(o)throw new Error(o.message);const s=$A(r,"onSessionSettleRequest()");if(s)throw new Error(s.message);if(Jg(i)){const{message:e}=TA("EXPIRED","onSessionSettleRequest()");throw new Error(e)}},this.isValidUpdate=async e=>{if(!HA(e)){const{message:t}=TA("MISSING_OR_INVALID",`update() params: ${e}`);throw new Error(t)}const{topic:t,namespaces:n}=e;this.checkRecentlyDeleted(t),await this.isValidSessionTopic(t);const r=this.client.session.get(t),i=$A(n,"update()");if(i)throw new Error(i.message);const o=ZA(r.requiredNamespaces,n,"update()");if(o)throw new Error(o.message)},this.isValidExtend=async e=>{if(!HA(e)){const{message:t}=TA("MISSING_OR_INVALID",`extend() params: ${e}`);throw new Error(t)}const{topic:t}=e;this.checkRecentlyDeleted(t),await this.isValidSessionTopic(t)},this.isValidRequest=async e=>{if(!HA(e)){const{message:t}=TA("MISSING_OR_INVALID",`request() params: ${e}`);throw new Error(t)}const{topic:t,request:n,chainId:r,expiry:i}=e;this.checkRecentlyDeleted(t),await this.isValidSessionTopic(t);const{namespaces:o}=this.client.session.get(t);if(!WA(o,r)){const{message:e}=TA("MISSING_OR_INVALID",`request() chainId: ${r}`);throw new Error(e)}if(!function(e){return!(NA(e)||!LA(e.method,!1))}(n)){const{message:e}=TA("MISSING_OR_INVALID",`request() ${JSON.stringify(n)}`);throw new Error(e)}if(!VA(o,r,n.method)){const{message:e}=TA("MISSING_OR_INVALID",`request() method: ${n.method}`);throw new Error(e)}if(i&&!function(e,t){return DA(e,!1)&&e<=t.max&&e>=t.min}(i,vx)){const{message:e}=TA("MISSING_OR_INVALID",`request() expiry: ${i}. Expiry must be a number (in seconds) between ${vx.min} and ${vx.max}`);throw new Error(e)}},this.isValidRespond=async e=>{var t;if(!HA(e)){const{message:t}=TA("MISSING_OR_INVALID",`respond() params: ${e}`);throw new Error(t)}const{topic:n,response:r}=e;try{await this.isValidSessionTopic(n)}catch(n){throw null!=(t=e?.response)&&t.id&&this.cleanupAfterResponse(e),n}if(!function(e){return!(NA(e)||NA(e.result)&&NA(e.error)||!DA(e.id,!1)||!LA(e.jsonrpc,!1))}(r)){const{message:e}=TA("MISSING_OR_INVALID",`respond() response: ${JSON.stringify(r)}`);throw new Error(e)}},this.isValidPing=async e=>{if(!HA(e)){const{message:t}=TA("MISSING_OR_INVALID",`ping() params: ${e}`);throw new Error(t)}const{topic:t}=e;await this.isValidSessionOrPairingTopic(t)},this.isValidEmit=async e=>{if(!HA(e)){const{message:t}=TA("MISSING_OR_INVALID",`emit() params: ${e}`);throw new Error(t)}const{topic:t,event:n,chainId:r}=e;await this.isValidSessionTopic(t);const{namespaces:i}=this.client.session.get(t);if(!WA(i,r)){const{message:e}=TA("MISSING_OR_INVALID",`emit() chainId: ${r}`);throw new Error(e)}if(!function(e){return!(NA(e)||!LA(e.name,!1))}(n)){const{message:e}=TA("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(n)}`);throw new Error(e)}if(!KA(i,r,n.name)){const{message:e}=TA("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(n)}`);throw new Error(e)}},this.isValidDisconnect=async e=>{if(!HA(e)){const{message:t}=TA("MISSING_OR_INVALID",`disconnect() params: ${e}`);throw new Error(t)}const{topic:t}=e;await this.isValidSessionOrPairingTopic(t)},this.isValidAuthenticate=e=>{const{chains:t,uri:n,domain:r,nonce:i}=e;if(!Array.isArray(t)||0===t.length)throw new Error("chains is required and must be a non-empty array");if(!LA(n,!1))throw new Error("uri is required parameter");if(!LA(r,!1))throw new Error("domain is required parameter");if(!LA(i,!1))throw new Error("nonce is required parameter");if([...new Set(t.map((e=>Sg(e).namespace)))].length>1)throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");const{namespace:o}=Sg(t[0]);if("eip155"!==o)throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")},this.getVerifyContext=async(e,t)=>{const n={verified:{verifyUrl:t.verifyUrl||wS,validation:"UNKNOWN",origin:t.url||""}};try{const r=await this.client.core.verify.resolve({attestationId:e,verifyUrl:t.verifyUrl});r&&(n.verified.origin=r.origin,n.verified.isScam=r.isScam,n.verified.validation=r.origin===new URL(t.url).origin?"VALID":"INVALID")}catch(e){this.client.logger.info(e)}return this.client.logger.info(`Verify context: ${JSON.stringify(n)}`),n},this.validateSessionProps=(e,t)=>{Object.values(e).forEach((e=>{if(!LA(e,!1)){const{message:n}=TA("MISSING_OR_INVALID",`${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);throw new Error(n)}}))},this.getPendingAuthRequest=e=>{const t=this.client.auth.requests.get(e);return"object"==typeof t?t:void 0},this.addToRecentlyDeleted=(e,t)=>{if(this.recentlyDeletedMap.set(e,t),this.recentlyDeletedMap.size>=this.recentlyDeletedLimit){let e=0;const t=this.recentlyDeletedLimit/2;for(const n of this.recentlyDeletedMap.keys()){if(e++>=t)break;this.recentlyDeletedMap.delete(n)}}},this.checkRecentlyDeleted=e=>{const t=this.recentlyDeletedMap.get(e);if(t){const{message:n}=TA("MISSING_OR_INVALID",`Record was recently deleted - ${t}: ${e}`);throw new Error(n)}}}async isInitialized(){if(!this.initialized){const{message:e}=TA("NOT_INITIALIZED",this.name);throw new Error(e)}await this.client.core.relayer.confirmOnlineStateOrThrow()}registerRelayerEvents(){this.client.core.relayer.on(qk,(async e=>{const{topic:t,message:n}=e,{publicKey:r}=this.client.auth.authKeys.keys.includes(Ex)?this.client.auth.authKeys.get(Ex):{responseTopic:void 0,publicKey:void 0},i=await this.client.core.crypto.decode(t,n,{receiverPublicKey:r});try{KE(i)?(this.client.core.history.set(t,i),this.onRelayEventRequest({topic:t,payload:i})):ZE(i)?(await this.client.core.history.resolve(i),await this.onRelayEventResponse({topic:t,payload:i}),this.client.core.history.delete(t,i.id)):this.onRelayEventUnknownPayload({topic:t,payload:i})}catch(e){this.client.logger.error(e)}}))}registerExpirerEvents(){this.client.core.expirer.on(yS,(async e=>{const{topic:t,id:n}=Yg(e.target);return n&&this.client.pendingRequest.keys.includes(n)?await this.deletePendingSessionRequest(n,TA("EXPIRED"),!0):n&&this.client.auth.requests.keys.includes(n)?await this.deletePendingAuthRequest(n,TA("EXPIRED"),!0):void(t?this.client.session.keys.includes(t)&&(await this.deleteSession({topic:t,expirerHasDeleted:!0}),this.client.events.emit("session_expire",{topic:t})):n&&(await this.deleteProposal(n,!0),this.client.events.emit("proposal_expire",{id:n})))}))}registerPairingEvents(){this.client.core.pairing.events.on(aS,(e=>this.onPairingCreated(e))),this.client.core.pairing.events.on(lS,(e=>{this.addToRecentlyDeleted(e.topic,"pairing")}))}isValidPairingTopic(e){if(!LA(e,!1)){const{message:t}=TA("MISSING_OR_INVALID",`pairing topic should be a string: ${e}`);throw new Error(t)}if(!this.client.core.pairing.pairings.keys.includes(e)){const{message:t}=TA("NO_MATCHING_KEY",`pairing topic doesn't exist: ${e}`);throw new Error(t)}if(Jg(this.client.core.pairing.pairings.get(e).expiry)){const{message:t}=TA("EXPIRED",`pairing topic: ${e}`);throw new Error(t)}}async isValidSessionTopic(e){if(!LA(e,!1)){const{message:t}=TA("MISSING_OR_INVALID",`session topic should be a string: ${e}`);throw new Error(t)}if(this.checkRecentlyDeleted(e),!this.client.session.keys.includes(e)){const{message:t}=TA("NO_MATCHING_KEY",`session topic doesn't exist: ${e}`);throw new Error(t)}if(Jg(this.client.session.get(e).expiry)){await this.deleteSession({topic:e});const{message:t}=TA("EXPIRED",`session topic: ${e}`);throw new Error(t)}if(!this.client.core.crypto.keychain.has(e)){const{message:t}=TA("MISSING_OR_INVALID",`session topic does not exist in keychain: ${e}`);throw await this.deleteSession({topic:e}),new Error(t)}}async isValidSessionOrPairingTopic(e){if(this.checkRecentlyDeleted(e),this.client.session.keys.includes(e))await this.isValidSessionTopic(e);else{if(!this.client.core.pairing.pairings.keys.includes(e)){if(LA(e,!1)){const{message:t}=TA("NO_MATCHING_KEY",`session or pairing topic doesn't exist: ${e}`);throw new Error(t)}{const{message:t}=TA("MISSING_OR_INVALID",`session or pairing topic should be a string: ${e}`);throw new Error(t)}}this.isValidPairingTopic(e)}}async isValidProposalId(e){if(!function(e){return"number"==typeof e}(e)){const{message:t}=TA("MISSING_OR_INVALID",`proposal id should be a number: ${e}`);throw new Error(t)}if(!this.client.proposal.keys.includes(e)){const{message:t}=TA("NO_MATCHING_KEY",`proposal id doesn't exist: ${e}`);throw new Error(t)}if(Jg(this.client.proposal.get(e).expiryTimestamp)){await this.deleteProposal(e);const{message:t}=TA("EXPIRED",`proposal id: ${e}`);throw new Error(t)}}}class Nx extends YS{constructor(e,t){super(e,t,"proposal",dx),this.core=e,this.logger=t}}class Lx extends YS{constructor(e,t){super(e,t,"session",dx),this.core=e,this.logger=t}}class Dx extends YS{constructor(e,t){super(e,t,"request",dx,(e=>e.id)),this.core=e,this.logger=t}}class Bx extends YS{constructor(e,t){super(e,t,"authKeys",_x,(()=>Ex)),this.core=e,this.logger=t}}class Ux extends YS{constructor(e,t){super(e,t,"pairingTopics",_x),this.core=e,this.logger=t}}class jx extends YS{constructor(e,t){super(e,t,"requests",_x,(e=>e.id)),this.core=e,this.logger=t}}class Fx{constructor(e,t){this.core=e,this.logger=t,this.authKeys=new Bx(this.core,this.logger),this.pairingTopics=new Ux(this.core,this.logger),this.requests=new jx(this.core,this.logger)}async init(){await this.authKeys.init(),await this.pairingTopics.init(),await this.requests.init()}}class zx extends Z_{constructor(e){super(e),this.protocol="wc",this.version=2,this.name=hx,this.events=new $p.EventEmitter,this.on=(e,t)=>this.events.on(e,t),this.once=(e,t)=>this.events.once(e,t),this.off=(e,t)=>this.events.off(e,t),this.removeListener=(e,t)=>this.events.removeListener(e,t),this.removeAllListeners=e=>this.events.removeAllListeners(e),this.connect=async e=>{try{return await this.engine.connect(e)}catch(e){throw this.logger.error(e.message),e}},this.pair=async e=>{try{return await this.engine.pair(e)}catch(e){throw this.logger.error(e.message),e}},this.approve=async e=>{try{return await this.engine.approve(e)}catch(e){throw this.logger.error(e.message),e}},this.reject=async e=>{try{return await this.engine.reject(e)}catch(e){throw this.logger.error(e.message),e}},this.update=async e=>{try{return await this.engine.update(e)}catch(e){throw this.logger.error(e.message),e}},this.extend=async e=>{try{return await this.engine.extend(e)}catch(e){throw this.logger.error(e.message),e}},this.request=async e=>{try{return await this.engine.request(e)}catch(e){throw this.logger.error(e.message),e}},this.respond=async e=>{try{return await this.engine.respond(e)}catch(e){throw this.logger.error(e.message),e}},this.ping=async e=>{try{return await this.engine.ping(e)}catch(e){throw this.logger.error(e.message),e}},this.emit=async e=>{try{return await this.engine.emit(e)}catch(e){throw this.logger.error(e.message),e}},this.disconnect=async e=>{try{return await this.engine.disconnect(e)}catch(e){throw this.logger.error(e.message),e}},this.find=e=>{try{return this.engine.find(e)}catch(e){throw this.logger.error(e.message),e}},this.getPendingSessionRequests=()=>{try{return this.engine.getPendingSessionRequests()}catch(e){throw this.logger.error(e.message),e}},this.authenticate=async e=>{try{return await this.engine.authenticate(e)}catch(e){throw this.logger.error(e.message),e}},this.formatAuthMessage=e=>{try{return this.engine.formatAuthMessage(e)}catch(e){throw this.logger.error(e.message),e}},this.approveSessionAuthenticate=async e=>{try{return await this.engine.approveSessionAuthenticate(e)}catch(e){throw this.logger.error(e.message),e}},this.rejectSessionAuthenticate=async e=>{try{return await this.engine.rejectSessionAuthenticate(e)}catch(e){throw this.logger.error(e.message),e}},this.name=e?.name||hx,this.metadata=e?.metadata||(0,sg.g)()||{name:"",description:"",url:"",icons:[""]},this.signConfig=e?.signConfig;const t=typeof e?.logger<"u"&&"string"!=typeof e?.logger?e.logger:(0,B_.h6)((0,B_.iP)({level:e?.logger||fx}));this.core=e?.core||new lx(e),this.logger=(0,B_.U5)(t,this.name),this.session=new Lx(this.core,this.logger),this.proposal=new Nx(this.core,this.logger),this.pendingRequest=new Dx(this.core,this.logger),this.engine=new Ox(this),this.auth=new Fx(this.core,this.logger)}static async init(e){const t=new zx(e);return await t.initialize(),t}get context(){return(0,B_.oI)(this.logger)}get pairing(){return this.core.pairing.pairings}async initialize(){this.logger.trace("Initialized");try{await this.core.start(),await this.session.init(),await this.proposal.init(),await this.pendingRequest.init(),await this.engine.init(),await this.auth.init(),this.core.verify.init({verifyUrl:this.metadata.verifyUrl}),this.logger.info("SignClient Initialization Success")}catch(e){throw this.logger.info("SignClient Initialization Failure"),this.logger.error(e.message),e}}}var $x=n(7719),qx=n.n($x),Hx=Object.defineProperty,Wx=Object.defineProperties,Vx=Object.getOwnPropertyDescriptors,Kx=Object.getOwnPropertySymbols,Zx=Object.prototype.hasOwnProperty,Gx=Object.prototype.propertyIsEnumerable,Yx=(e,t,n)=>t in e?Hx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qx=(e,t)=>{for(var n in t||(t={}))Zx.call(t,n)&&Yx(e,n,t[n]);if(Kx)for(var n of Kx(t))Gx.call(t,n)&&Yx(e,n,t[n]);return e},Jx=(e,t)=>Wx(e,Vx(t));const Xx={headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST"};class eM{constructor(e,t=!1){if(this.url=e,this.disableProviderPing=t,this.events=new $p.EventEmitter,this.isAvailable=!1,this.registering=!1,!HE(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);this.url=e,this.disableProviderPing=t}get connected(){return this.isAvailable}get connecting(){return this.registering}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async open(e=this.url){await this.register(e)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(e){this.isAvailable||await this.register();try{const t=(0,E_.h)(e),n=await(await qx()(this.url,Jx(Qx({},Xx),{body:t}))).json();this.onPayload({data:n})}catch(t){this.onError(e.id,t)}}async register(e=this.url){if(!HE(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);if(this.registering){const e=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=e||this.events.listenerCount("open")>=e)&&this.events.setMaxListeners(e+1),new Promise(((e,t)=>{this.events.once("register_error",(e=>{this.resetMaxListeners(),t(e)})),this.events.once("open",(()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return t(new Error("HTTP connection is missing or invalid"));e()}))}))}this.url=e,this.registering=!0;try{if(!this.disableProviderPing){const t=(0,E_.h)({id:1,jsonrpc:"2.0",method:"test",params:[]});await qx()(e,Jx(Qx({},Xx),{body:t}))}this.onOpen()}catch(e){const t=this.parseError(e);throw this.events.emit("register_error",t),this.onClose(),t}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(e){if(typeof e.data>"u")return;const t="string"==typeof e.data?(0,E_.j)(e.data):e.data;this.events.emit("payload",t)}onError(e,t){const n=this.parseError(t),r=UE(e,n.message||n.toString());this.events.emit("payload",r)}parseError(e,t=this.url){return PE(e,t,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>10&&this.events.setMaxListeners(10)}}const tM="error",nM="wc@2:universal_provider:",rM="default_chain_changed";var iM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof n.g<"u"?n.g:typeof self<"u"?self:{},oM={exports:{}};!function(e,t){(function(){var n,r="Expected a function",i="__lodash_hash_undefined__",o="__lodash_placeholder__",s=16,a=32,c=64,l=128,u=256,d=1/0,h=9007199254740991,f=NaN,p=4294967295,g=p-1,m=p>>>1,y=[["ary",l],["bind",1],["bindKey",2],["curry",8],["curryRight",s],["flip",512],["partial",a],["partialRight",c],["rearg",u]],v="[object Arguments]",b="[object Array]",w="[object Boolean]",A="[object Date]",_="[object Error]",E="[object Function]",C="[object GeneratorFunction]",k="[object Map]",S="[object Number]",x="[object Object]",M="[object Promise]",I="[object RegExp]",T="[object Set]",R="[object String]",P="[object Symbol]",O="[object WeakMap]",N="[object ArrayBuffer]",L="[object DataView]",D="[object Float32Array]",B="[object Float64Array]",U="[object Int8Array]",j="[object Int16Array]",F="[object Int32Array]",z="[object Uint8Array]",$="[object Uint8ClampedArray]",q="[object Uint16Array]",H="[object Uint32Array]",W=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,K=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Z=/&(?:amp|lt|gt|quot|#39);/g,G=/[&<>"']/g,Y=RegExp(Z.source),Q=RegExp(G.source),J=/<%-([\s\S]+?)%>/g,X=/<%([\s\S]+?)%>/g,ee=/<%=([\s\S]+?)%>/g,te=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ne=/^\w*$/,re=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ie=/[\\^$.*+?()[\]{}|]/g,oe=RegExp(ie.source),se=/^\s+/,ae=/\s/,ce=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,le=/\{\n\/\* \[wrapped with (.+)\] \*/,ue=/,? & /,de=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,he=/[()=,{}\[\]\/\s]/,fe=/\\(\\)?/g,pe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ge=/\w*$/,me=/^[-+]0x[0-9a-f]+$/i,ye=/^0b[01]+$/i,ve=/^\[object .+?Constructor\]$/,be=/^0o[0-7]+$/i,we=/^(?:0|[1-9]\d*)$/,Ae=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,_e=/($^)/,Ee=/['\n\r\u2028\u2029\\]/g,Ce="\\ud800-\\udfff",ke="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Se="\\u2700-\\u27bf",xe="a-z\\xdf-\\xf6\\xf8-\\xff",Me="A-Z\\xc0-\\xd6\\xd8-\\xde",Ie="\\ufe0e\\ufe0f",Te="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Re="['’]",Pe="["+Ce+"]",Oe="["+Te+"]",Ne="["+ke+"]",Le="\\d+",De="["+Se+"]",Be="["+xe+"]",Ue="[^"+Ce+Te+Le+Se+xe+Me+"]",je="\\ud83c[\\udffb-\\udfff]",Fe="[^"+Ce+"]",ze="(?:\\ud83c[\\udde6-\\uddff]){2}",$e="[\\ud800-\\udbff][\\udc00-\\udfff]",qe="["+Me+"]",He="\\u200d",We="(?:"+Be+"|"+Ue+")",Ve="(?:"+qe+"|"+Ue+")",Ke="(?:['’](?:d|ll|m|re|s|t|ve))?",Ze="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ge="(?:"+Ne+"|"+je+")"+"?",Ye="["+Ie+"]?",Qe=Ye+Ge+("(?:"+He+"(?:"+[Fe,ze,$e].join("|")+")"+Ye+Ge+")*"),Je="(?:"+[De,ze,$e].join("|")+")"+Qe,Xe="(?:"+[Fe+Ne+"?",Ne,ze,$e,Pe].join("|")+")",et=RegExp(Re,"g"),tt=RegExp(Ne,"g"),nt=RegExp(je+"(?="+je+")|"+Xe+Qe,"g"),rt=RegExp([qe+"?"+Be+"+"+Ke+"(?="+[Oe,qe,"$"].join("|")+")",Ve+"+"+Ze+"(?="+[Oe,qe+We,"$"].join("|")+")",qe+"?"+We+"+"+Ke,qe+"+"+Ze,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Le,Je].join("|"),"g"),it=RegExp("["+He+Ce+ke+Ie+"]"),ot=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,st=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],at=-1,ct={};ct[D]=ct[B]=ct[U]=ct[j]=ct[F]=ct[z]=ct[$]=ct[q]=ct[H]=!0,ct[v]=ct[b]=ct[N]=ct[w]=ct[L]=ct[A]=ct[_]=ct[E]=ct[k]=ct[S]=ct[x]=ct[I]=ct[T]=ct[R]=ct[O]=!1;var lt={};lt[v]=lt[b]=lt[N]=lt[L]=lt[w]=lt[A]=lt[D]=lt[B]=lt[U]=lt[j]=lt[F]=lt[k]=lt[S]=lt[x]=lt[I]=lt[T]=lt[R]=lt[P]=lt[z]=lt[$]=lt[q]=lt[H]=!0,lt[_]=lt[E]=lt[O]=!1;var ut={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},dt=parseFloat,ht=parseInt,ft="object"==typeof iM&&iM&&iM.Object===Object&&iM,pt="object"==typeof self&&self&&self.Object===Object&&self,gt=ft||pt||Function("return this")(),mt=t&&!t.nodeType&&t,yt=mt&&e&&!e.nodeType&&e,vt=yt&&yt.exports===mt,bt=vt&&ft.process,wt=function(){try{return yt&&yt.require&&yt.require("util").types||bt&&bt.binding&&bt.binding("util")}catch{}}(),At=wt&&wt.isArrayBuffer,_t=wt&&wt.isDate,Et=wt&&wt.isMap,Ct=wt&&wt.isRegExp,kt=wt&&wt.isSet,St=wt&&wt.isTypedArray;function xt(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function Mt(e,t,n,r){for(var i=-1,o=null==e?0:e.length;++i<o;){var s=e[i];t(r,s,n(s),e)}return r}function It(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function Tt(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Rt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function Pt(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var s=e[n];t(s,n,e)&&(o[i++]=s)}return o}function Ot(e,t){return!!(null==e?0:e.length)&&qt(e,t,0)>-1}function Nt(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function Lt(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function Dt(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function Bt(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n}function Ut(e,t,n,r){var i=null==e?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function jt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var Ft=Kt("length");function zt(e,t,n){var r;return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}function $t(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function qt(e,t,n){return t==t?function(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}(e,t,n):$t(e,Wt,n)}function Ht(e,t,n,r){for(var i=n-1,o=e.length;++i<o;)if(r(e[i],t))return i;return-1}function Wt(e){return e!=e}function Vt(e,t){var n=null==e?0:e.length;return n?Yt(e,t)/n:f}function Kt(e){return function(t){return null==t?n:t[e]}}function Zt(e){return function(t){return null==e?n:e[t]}}function Gt(e,t,n,r,i){return i(e,(function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)})),n}function Yt(e,t){for(var r,i=-1,o=e.length;++i<o;){var s=t(e[i]);s!==n&&(r=r===n?s:r+s)}return r}function Qt(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Jt(e){return e&&e.slice(0,gn(e)+1).replace(se,"")}function Xt(e){return function(t){return e(t)}}function en(e,t){return Lt(t,(function(t){return e[t]}))}function tn(e,t){return e.has(t)}function nn(e,t){for(var n=-1,r=e.length;++n<r&&qt(t,e[n],0)>-1;);return n}function rn(e,t){for(var n=e.length;n--&&qt(t,e[n],0)>-1;);return n}var on=Zt({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"}),sn=Zt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function an(e){return"\\"+ut[e]}function cn(e){return it.test(e)}function ln(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function un(e,t){return function(n){return e(t(n))}}function dn(e,t){for(var n=-1,r=e.length,i=0,s=[];++n<r;){var a=e[n];(a===t||a===o)&&(e[n]=o,s[i++]=n)}return s}function hn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function fn(e){return cn(e)?function(e){for(var t=nt.lastIndex=0;nt.test(e);)++t;return t}(e):Ft(e)}function pn(e){return cn(e)?function(e){return e.match(nt)||[]}(e):function(e){return e.split("")}(e)}function gn(e){for(var t=e.length;t--&&ae.test(e.charAt(t)););return t}var mn=Zt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var yn=function e(t){var ae=(t=null==t?gt:yn.defaults(gt.Object(),t,yn.pick(gt,st))).Array,Ce=t.Date,ke=t.Error,Se=t.Function,xe=t.Math,Me=t.Object,Ie=t.RegExp,Te=t.String,Re=t.TypeError,Pe=ae.prototype,Oe=Se.prototype,Ne=Me.prototype,Le=t["__core-js_shared__"],De=Oe.toString,Be=Ne.hasOwnProperty,Ue=0,je=function(){var e=/[^.]+$/.exec(Le&&Le.keys&&Le.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Fe=Ne.toString,ze=De.call(Me),$e=gt._,qe=Ie("^"+De.call(Be).replace(ie,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=vt?t.Buffer:n,We=t.Symbol,Ve=t.Uint8Array,Ke=He?He.allocUnsafe:n,Ze=un(Me.getPrototypeOf,Me),Ge=Me.create,Ye=Ne.propertyIsEnumerable,Qe=Pe.splice,Je=We?We.isConcatSpreadable:n,Xe=We?We.iterator:n,nt=We?We.toStringTag:n,it=function(){try{var e=fo(Me,"defineProperty");return e({},"",{}),e}catch{}}(),ut=t.clearTimeout!==gt.clearTimeout&&t.clearTimeout,ft=Ce&&Ce.now!==gt.Date.now&&Ce.now,pt=t.setTimeout!==gt.setTimeout&&t.setTimeout,mt=xe.ceil,yt=xe.floor,bt=Me.getOwnPropertySymbols,wt=He?He.isBuffer:n,Ft=t.isFinite,Zt=Pe.join,vn=un(Me.keys,Me),bn=xe.max,wn=xe.min,An=Ce.now,_n=t.parseInt,En=xe.random,Cn=Pe.reverse,kn=fo(t,"DataView"),Sn=fo(t,"Map"),xn=fo(t,"Promise"),Mn=fo(t,"Set"),In=fo(t,"WeakMap"),Tn=fo(Me,"create"),Rn=In&&new In,Pn={},On=jo(kn),Nn=jo(Sn),Ln=jo(xn),Dn=jo(Mn),Bn=jo(In),Un=We?We.prototype:n,jn=Un?Un.valueOf:n,Fn=Un?Un.toString:n;function zn(e){if(na(e)&&!Ws(e)&&!(e instanceof Wn)){if(e instanceof Hn)return e;if(Be.call(e,"__wrapped__"))return Fo(e)}return new Hn(e)}var $n=function(){function e(){}return function(t){if(!ta(t))return{};if(Ge)return Ge(t);e.prototype=t;var r=new e;return e.prototype=n,r}}();function qn(){}function Hn(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=n}function Wn(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=p,this.__views__=[]}function Vn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Kn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Zn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Gn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Zn;++t<n;)this.add(e[t])}function Yn(e){var t=this.__data__=new Kn(e);this.size=t.size}function Qn(e,t){var n=Ws(e),r=!n&&Hs(e),i=!n&&!r&&Gs(e),o=!n&&!r&&!i&&ua(e),s=n||r||i||o,a=s?Qt(e.length,Te):[],c=a.length;for(var l in e)(t||Be.call(e,l))&&(!s||!("length"==l||i&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||wo(l,c)))&&a.push(l);return a}function Jn(e){var t=e.length;return t?e[Gr(0,t-1)]:n}function Xn(e,t){return Do(Ti(e),cr(t,0,e.length))}function er(e){return Do(Ti(e))}function tr(e,t,r){(r!==n&&!zs(e[t],r)||r===n&&!(t in e))&&sr(e,t,r)}function nr(e,t,r){var i=e[t];(!Be.call(e,t)||!zs(i,r)||r===n&&!(t in e))&&sr(e,t,r)}function rr(e,t){for(var n=e.length;n--;)if(zs(e[n][0],t))return n;return-1}function ir(e,t,n,r){return fr(e,(function(e,i,o){t(r,e,n(e),o)})),r}function or(e,t){return e&&Ri(t,Pa(t),e)}function sr(e,t,n){"__proto__"==t&&it?it(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function ar(e,t){for(var r=-1,i=t.length,o=ae(i),s=null==e;++r<i;)o[r]=s?n:xa(e,t[r]);return o}function cr(e,t,r){return e==e&&(r!==n&&(e=e<=r?e:r),t!==n&&(e=e>=t?e:t)),e}function lr(e,t,r,i,o,s){var a,c=1&t,l=2&t,u=4&t;if(r&&(a=o?r(e,i,o,s):r(e)),a!==n)return a;if(!ta(e))return e;var d=Ws(e);if(d){if(a=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&Be.call(e,"index")&&(n.index=e.index,n.input=e.input),n}(e),!c)return Ti(e,a)}else{var h=mo(e),f=h==E||h==C;if(Gs(e))return Ci(e,c);if(h==x||h==v||f&&!o){if(a=l||f?{}:vo(e),!c)return l?function(e,t){return Ri(e,go(e),t)}(e,function(e,t){return e&&Ri(t,Oa(t),e)}(a,e)):function(e,t){return Ri(e,po(e),t)}(e,or(a,e))}else{if(!lt[h])return o?e:{};a=function(e,t,n){var r=e.constructor;switch(t){case N:return ki(e);case w:case A:return new r(+e);case L:return function(e,t){var n=t?ki(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case D:case B:case U:case j:case F:case z:case $:case q:case H:return Si(e,n);case k:return new r;case S:case R:return new r(e);case I:return function(e){var t=new e.constructor(e.source,ge.exec(e));return t.lastIndex=e.lastIndex,t}(e);case T:return new r;case P:return function(e){return jn?Me(jn.call(e)):{}}(e)}}(e,h,c)}}s||(s=new Yn);var p=s.get(e);if(p)return p;s.set(e,a),aa(e)?e.forEach((function(n){a.add(lr(n,t,r,n,e,s))})):ra(e)&&e.forEach((function(n,i){a.set(i,lr(n,t,r,i,e,s))}));var g=d?n:(u?l?oo:io:l?Oa:Pa)(e);return It(g||e,(function(n,i){g&&(n=e[i=n]),nr(a,i,lr(n,t,r,i,e,s))})),a}function ur(e,t,r){var i=r.length;if(null==e)return!i;for(e=Me(e);i--;){var o=r[i],s=t[o],a=e[o];if(a===n&&!(o in e)||!s(a))return!1}return!0}function dr(e,t,i){if("function"!=typeof e)throw new Re(r);return Po((function(){e.apply(n,i)}),t)}function hr(e,t,n,r){var i=-1,o=Ot,s=!0,a=e.length,c=[],l=t.length;if(!a)return c;n&&(t=Lt(t,Xt(n))),r?(o=Nt,s=!1):t.length>=200&&(o=tn,s=!1,t=new Gn(t));e:for(;++i<a;){var u=e[i],d=null==n?u:n(u);if(u=r||0!==u?u:0,s&&d==d){for(var h=l;h--;)if(t[h]===d)continue e;c.push(u)}else o(t,d,r)||c.push(u)}return c}zn.templateSettings={escape:J,evaluate:X,interpolate:ee,variable:"",imports:{_:zn}},zn.prototype=qn.prototype,zn.prototype.constructor=zn,Hn.prototype=$n(qn.prototype),Hn.prototype.constructor=Hn,Wn.prototype=$n(qn.prototype),Wn.prototype.constructor=Wn,Vn.prototype.clear=function(){this.__data__=Tn?Tn(null):{},this.size=0},Vn.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Vn.prototype.get=function(e){var t=this.__data__;if(Tn){var r=t[e];return r===i?n:r}return Be.call(t,e)?t[e]:n},Vn.prototype.has=function(e){var t=this.__data__;return Tn?t[e]!==n:Be.call(t,e)},Vn.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Tn&&t===n?i:t,this},Kn.prototype.clear=function(){this.__data__=[],this.size=0},Kn.prototype.delete=function(e){var t=this.__data__,n=rr(t,e);return!(n<0)&&(n==t.length-1?t.pop():Qe.call(t,n,1),--this.size,!0)},Kn.prototype.get=function(e){var t=this.__data__,r=rr(t,e);return r<0?n:t[r][1]},Kn.prototype.has=function(e){return rr(this.__data__,e)>-1},Kn.prototype.set=function(e,t){var n=this.__data__,r=rr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Zn.prototype.clear=function(){this.size=0,this.__data__={hash:new Vn,map:new(Sn||Kn),string:new Vn}},Zn.prototype.delete=function(e){var t=uo(this,e).delete(e);return this.size-=t?1:0,t},Zn.prototype.get=function(e){return uo(this,e).get(e)},Zn.prototype.has=function(e){return uo(this,e).has(e)},Zn.prototype.set=function(e,t){var n=uo(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Gn.prototype.add=Gn.prototype.push=function(e){return this.__data__.set(e,i),this},Gn.prototype.has=function(e){return this.__data__.has(e)},Yn.prototype.clear=function(){this.__data__=new Kn,this.size=0},Yn.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Yn.prototype.get=function(e){return this.__data__.get(e)},Yn.prototype.has=function(e){return this.__data__.has(e)},Yn.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Kn){var r=n.__data__;if(!Sn||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Zn(r)}return n.set(e,t),this.size=n.size,this};var fr=Ni(Ar),pr=Ni(_r,!0);function gr(e,t){var n=!0;return fr(e,(function(e,r,i){return n=!!t(e,r,i)})),n}function mr(e,t,r){for(var i=-1,o=e.length;++i<o;){var s=e[i],a=t(s);if(null!=a&&(c===n?a==a&&!la(a):r(a,c)))var c=a,l=s}return l}function yr(e,t){var n=[];return fr(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}function vr(e,t,n,r,i){var o=-1,s=e.length;for(n||(n=bo),i||(i=[]);++o<s;){var a=e[o];t>0&&n(a)?t>1?vr(a,t-1,n,r,i):Dt(i,a):r||(i[i.length]=a)}return i}var br=Li(),wr=Li(!0);function Ar(e,t){return e&&br(e,t,Pa)}function _r(e,t){return e&&wr(e,t,Pa)}function Er(e,t){return Pt(t,(function(t){return Js(e[t])}))}function Cr(e,t){for(var r=0,i=(t=wi(t,e)).length;null!=e&&r<i;)e=e[Uo(t[r++])];return r&&r==i?e:n}function kr(e,t,n){var r=t(e);return Ws(e)?r:Dt(r,n(e))}function Sr(e){return null==e?e===n?"[object Undefined]":"[object Null]":nt&&nt in Me(e)?function(e){var t=Be.call(e,nt),r=e[nt];try{e[nt]=n;var i=!0}catch{}var o=Fe.call(e);return i&&(t?e[nt]=r:delete e[nt]),o}(e):function(e){return Fe.call(e)}(e)}function xr(e,t){return e>t}function Mr(e,t){return null!=e&&Be.call(e,t)}function Ir(e,t){return null!=e&&t in Me(e)}function Tr(e,t,r){for(var i=r?Nt:Ot,o=e[0].length,s=e.length,a=s,c=ae(s),l=1/0,u=[];a--;){var d=e[a];a&&t&&(d=Lt(d,Xt(t))),l=wn(d.length,l),c[a]=!r&&(t||o>=120&&d.length>=120)?new Gn(a&&d):n}d=e[0];var h=-1,f=c[0];e:for(;++h<o&&u.length<l;){var p=d[h],g=t?t(p):p;if(p=r||0!==p?p:0,!(f?tn(f,g):i(u,g,r))){for(a=s;--a;){var m=c[a];if(!(m?tn(m,g):i(e[a],g,r)))continue e}f&&f.push(g),u.push(p)}}return u}function Rr(e,t,r){var i=null==(e=Io(e,t=wi(t,e)))?e:e[Uo(Qo(t))];return null==i?n:xt(i,e,r)}function Pr(e){return na(e)&&Sr(e)==v}function Or(e,t,r,i,o){return e===t||(null==e||null==t||!na(e)&&!na(t)?e!=e&&t!=t:function(e,t,r,i,o,s){var a=Ws(e),c=Ws(t),l=a?b:mo(e),u=c?b:mo(t);l=l==v?x:l,u=u==v?x:u;var d=l==x,h=u==x,f=l==u;if(f&&Gs(e)){if(!Gs(t))return!1;a=!0,d=!1}if(f&&!d)return s||(s=new Yn),a||ua(e)?no(e,t,r,i,o,s):function(e,t,n,r,i,o,s){switch(n){case L:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case N:return!(e.byteLength!=t.byteLength||!o(new Ve(e),new Ve(t)));case w:case A:case S:return zs(+e,+t);case _:return e.name==t.name&&e.message==t.message;case I:case R:return e==t+"";case k:var a=ln;case T:var c=1&r;if(a||(a=hn),e.size!=t.size&&!c)return!1;var l=s.get(e);if(l)return l==t;r|=2,s.set(e,t);var u=no(a(e),a(t),r,i,o,s);return s.delete(e),u;case P:if(jn)return jn.call(e)==jn.call(t)}return!1}(e,t,l,r,i,o,s);if(!(1&r)){var p=d&&Be.call(e,"__wrapped__"),g=h&&Be.call(t,"__wrapped__");if(p||g){var m=p?e.value():e,y=g?t.value():t;return s||(s=new Yn),o(m,y,r,i,s)}}return!!f&&(s||(s=new Yn),function(e,t,r,i,o,s){var a=1&r,c=io(e),l=c.length,u=io(t),d=u.length;if(l!=d&&!a)return!1;for(var h=l;h--;){var f=c[h];if(!(a?f in t:Be.call(t,f)))return!1}var p=s.get(e),g=s.get(t);if(p&&g)return p==t&&g==e;var m=!0;s.set(e,t),s.set(t,e);for(var y=a;++h<l;){var v=e[f=c[h]],b=t[f];if(i)var w=a?i(b,v,f,t,e,s):i(v,b,f,e,t,s);if(!(w===n?v===b||o(v,b,r,i,s):w)){m=!1;break}y||(y="constructor"==f)}if(m&&!y){var A=e.constructor,_=t.constructor;A!=_&&"constructor"in e&&"constructor"in t&&!("function"==typeof A&&A instanceof A&&"function"==typeof _&&_ instanceof _)&&(m=!1)}return s.delete(e),s.delete(t),m}(e,t,r,i,o,s))}(e,t,r,i,Or,o))}function Nr(e,t,r,i){var o=r.length,s=o,a=!i;if(null==e)return!s;for(e=Me(e);o--;){var c=r[o];if(a&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++o<s;){var l=(c=r[o])[0],u=e[l],d=c[1];if(a&&c[2]){if(u===n&&!(l in e))return!1}else{var h=new Yn;if(i)var f=i(u,d,l,e,t,h);if(!(f===n?Or(d,u,3,i,h):f))return!1}}return!0}function Lr(e){return!(!ta(e)||function(e){return!!je&&je in e}(e))&&(Js(e)?qe:ve).test(jo(e))}function Dr(e){return"function"==typeof e?e:null==e?ic:"object"==typeof e?Ws(e)?$r(e[0],e[1]):zr(e):fc(e)}function Br(e){if(!ko(e))return vn(e);var t=[];for(var n in Me(e))Be.call(e,n)&&"constructor"!=n&&t.push(n);return t}function Ur(e){if(!ta(e))return function(e){var t=[];if(null!=e)for(var n in Me(e))t.push(n);return t}(e);var t=ko(e),n=[];for(var r in e)"constructor"==r&&(t||!Be.call(e,r))||n.push(r);return n}function jr(e,t){return e<t}function Fr(e,t){var n=-1,r=Ks(e)?ae(e.length):[];return fr(e,(function(e,i,o){r[++n]=t(e,i,o)})),r}function zr(e){var t=ho(e);return 1==t.length&&t[0][2]?xo(t[0][0],t[0][1]):function(n){return n===e||Nr(n,e,t)}}function $r(e,t){return _o(e)&&So(t)?xo(Uo(e),t):function(r){var i=xa(r,e);return i===n&&i===t?Ma(r,e):Or(t,i,3)}}function qr(e,t,r,i,o){e!==t&&br(t,(function(s,a){if(o||(o=new Yn),ta(s))!function(e,t,r,i,o,s,a){var c=To(e,r),l=To(t,r),u=a.get(l);if(u)return void tr(e,r,u);var d=s?s(c,l,r+"",e,t,a):n,h=d===n;if(h){var f=Ws(l),p=!f&&Gs(l),g=!f&&!p&&ua(l);d=l,f||p||g?Ws(c)?d=c:Zs(c)?d=Ti(c):p?(h=!1,d=Ci(l,!0)):g?(h=!1,d=Si(l,!0)):d=[]:oa(l)||Hs(l)?(d=c,Hs(c)?d=va(c):(!ta(c)||Js(c))&&(d=vo(l))):h=!1}h&&(a.set(l,d),o(d,l,i,s,a),a.delete(l)),tr(e,r,d)}(e,t,a,r,qr,i,o);else{var c=i?i(To(e,a),s,a+"",e,t,o):n;c===n&&(c=s),tr(e,a,c)}}),Oa)}function Hr(e,t){var r=e.length;if(r)return wo(t+=t<0?r:0,r)?e[t]:n}function Wr(e,t,n){t=t.length?Lt(t,(function(e){return Ws(e)?function(t){return Cr(t,1===e.length?e[0]:e)}:e})):[ic];var r=-1;t=Lt(t,Xt(lo()));var i=Fr(e,(function(e,n,i){var o=Lt(t,(function(t){return t(e)}));return{criteria:o,index:++r,value:e}}));return function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(i,(function(e,t){return function(e,t,n){for(var r=-1,i=e.criteria,o=t.criteria,s=i.length,a=n.length;++r<s;){var c=xi(i[r],o[r]);if(c)return r>=a?c:c*("desc"==n[r]?-1:1)}return e.index-t.index}(e,t,n)}))}function Vr(e,t,n){for(var r=-1,i=t.length,o={};++r<i;){var s=t[r],a=Cr(e,s);n(a,s)&&ei(o,wi(s,e),a)}return o}function Kr(e,t,n,r){var i=r?Ht:qt,o=-1,s=t.length,a=e;for(e===t&&(t=Ti(t)),n&&(a=Lt(e,Xt(n)));++o<s;)for(var c=0,l=t[o],u=n?n(l):l;(c=i(a,u,c,r))>-1;)a!==e&&Qe.call(a,c,1),Qe.call(e,c,1);return e}function Zr(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==o){var o=i;wo(i)?Qe.call(e,i,1):hi(e,i)}}return e}function Gr(e,t){return e+yt(En()*(t-e+1))}function Yr(e,t){var n="";if(!e||t<1||t>h)return n;do{t%2&&(n+=e),(t=yt(t/2))&&(e+=e)}while(t);return n}function Qr(e,t){return Oo(Mo(e,t,ic),e+"")}function Jr(e){return Jn(za(e))}function Xr(e,t){var n=za(e);return Do(n,cr(t,0,n.length))}function ei(e,t,r,i){if(!ta(e))return e;for(var o=-1,s=(t=wi(t,e)).length,a=s-1,c=e;null!=c&&++o<s;){var l=Uo(t[o]),u=r;if("__proto__"===l||"constructor"===l||"prototype"===l)return e;if(o!=a){var d=c[l];(u=i?i(d,l,c):n)===n&&(u=ta(d)?d:wo(t[o+1])?[]:{})}nr(c,l,u),c=c[l]}return e}var ti=Rn?function(e,t){return Rn.set(e,t),e}:ic,ni=it?function(e,t){return it(e,"toString",{configurable:!0,enumerable:!1,value:tc(t),writable:!0})}:ic;function ri(e){return Do(za(e))}function ii(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var o=ae(i);++r<i;)o[r]=e[r+t];return o}function oi(e,t){var n;return fr(e,(function(e,r,i){return!(n=t(e,r,i))})),!!n}function si(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t==t&&i<=m){for(;r<i;){var o=r+i>>>1,s=e[o];null!==s&&!la(s)&&(n?s<=t:s<t)?r=o+1:i=o}return i}return ai(e,t,ic,n)}function ai(e,t,r,i){var o=0,s=null==e?0:e.length;if(0===s)return 0;for(var a=(t=r(t))!=t,c=null===t,l=la(t),u=t===n;o<s;){var d=yt((o+s)/2),h=r(e[d]),f=h!==n,p=null===h,m=h==h,y=la(h);if(a)var v=i||m;else v=u?m&&(i||f):c?m&&f&&(i||!p):l?m&&f&&!p&&(i||!y):!p&&!y&&(i?h<=t:h<t);v?o=d+1:s=d}return wn(s,g)}function ci(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var s=e[n],a=t?t(s):s;if(!n||!zs(a,c)){var c=a;o[i++]=0===s?0:s}}return o}function li(e){return"number"==typeof e?e:la(e)?f:+e}function ui(e){if("string"==typeof e)return e;if(Ws(e))return Lt(e,ui)+"";if(la(e))return Fn?Fn.call(e):"";var t=e+"";return"0"==t&&1/e==-d?"-0":t}function di(e,t,n){var r=-1,i=Ot,o=e.length,s=!0,a=[],c=a;if(n)s=!1,i=Nt;else if(o>=200){var l=t?null:Yi(e);if(l)return hn(l);s=!1,i=tn,c=new Gn}else c=t?[]:a;e:for(;++r<o;){var u=e[r],d=t?t(u):u;if(u=n||0!==u?u:0,s&&d==d){for(var h=c.length;h--;)if(c[h]===d)continue e;t&&c.push(d),a.push(u)}else i(c,d,n)||(c!==a&&c.push(d),a.push(u))}return a}function hi(e,t){return null==(e=Io(e,t=wi(t,e)))||delete e[Uo(Qo(t))]}function fi(e,t,n,r){return ei(e,t,n(Cr(e,t)),r)}function pi(e,t,n,r){for(var i=e.length,o=r?i:-1;(r?o--:++o<i)&&t(e[o],o,e););return n?ii(e,r?0:o,r?o+1:i):ii(e,r?o+1:0,r?i:o)}function gi(e,t){var n=e;return n instanceof Wn&&(n=n.value()),Bt(t,(function(e,t){return t.func.apply(t.thisArg,Dt([e],t.args))}),n)}function mi(e,t,n){var r=e.length;if(r<2)return r?di(e[0]):[];for(var i=-1,o=ae(r);++i<r;)for(var s=e[i],a=-1;++a<r;)a!=i&&(o[i]=hr(o[i]||s,e[a],t,n));return di(vr(o,1),t,n)}function yi(e,t,r){for(var i=-1,o=e.length,s=t.length,a={};++i<o;){var c=i<s?t[i]:n;r(a,e[i],c)}return a}function vi(e){return Zs(e)?e:[]}function bi(e){return"function"==typeof e?e:ic}function wi(e,t){return Ws(e)?e:_o(e,t)?[e]:Bo(ba(e))}var Ai=Qr;function _i(e,t,r){var i=e.length;return r=r===n?i:r,!t&&r>=i?e:ii(e,t,r)}var Ei=ut||function(e){return gt.clearTimeout(e)};function Ci(e,t){if(t)return e.slice();var n=e.length,r=Ke?Ke(n):new e.constructor(n);return e.copy(r),r}function ki(e){var t=new e.constructor(e.byteLength);return new Ve(t).set(new Ve(e)),t}function Si(e,t){var n=t?ki(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function xi(e,t){if(e!==t){var r=e!==n,i=null===e,o=e==e,s=la(e),a=t!==n,c=null===t,l=t==t,u=la(t);if(!c&&!u&&!s&&e>t||s&&a&&l&&!c&&!u||i&&a&&l||!r&&l||!o)return 1;if(!i&&!s&&!u&&e<t||u&&r&&o&&!i&&!s||c&&r&&o||!a&&o||!l)return-1}return 0}function Mi(e,t,n,r){for(var i=-1,o=e.length,s=n.length,a=-1,c=t.length,l=bn(o-s,0),u=ae(c+l),d=!r;++a<c;)u[a]=t[a];for(;++i<s;)(d||i<o)&&(u[n[i]]=e[i]);for(;l--;)u[a++]=e[i++];return u}function Ii(e,t,n,r){for(var i=-1,o=e.length,s=-1,a=n.length,c=-1,l=t.length,u=bn(o-a,0),d=ae(u+l),h=!r;++i<u;)d[i]=e[i];for(var f=i;++c<l;)d[f+c]=t[c];for(;++s<a;)(h||i<o)&&(d[f+n[s]]=e[i++]);return d}function Ti(e,t){var n=-1,r=e.length;for(t||(t=ae(r));++n<r;)t[n]=e[n];return t}function Ri(e,t,r,i){var o=!r;r||(r={});for(var s=-1,a=t.length;++s<a;){var c=t[s],l=i?i(r[c],e[c],c,r,e):n;l===n&&(l=e[c]),o?sr(r,c,l):nr(r,c,l)}return r}function Pi(e,t){return function(n,r){var i=Ws(n)?Mt:ir,o=t?t():{};return i(n,e,lo(r,2),o)}}function Oi(e){return Qr((function(t,r){var i=-1,o=r.length,s=o>1?r[o-1]:n,a=o>2?r[2]:n;for(s=e.length>3&&"function"==typeof s?(o--,s):n,a&&Ao(r[0],r[1],a)&&(s=o<3?n:s,o=1),t=Me(t);++i<o;){var c=r[i];c&&e(t,c,i,s)}return t}))}function Ni(e,t){return function(n,r){if(null==n)return n;if(!Ks(n))return e(n,r);for(var i=n.length,o=t?i:-1,s=Me(n);(t?o--:++o<i)&&!1!==r(s[o],o,s););return n}}function Li(e){return function(t,n,r){for(var i=-1,o=Me(t),s=r(t),a=s.length;a--;){var c=s[e?a:++i];if(!1===n(o[c],c,o))break}return t}}function Di(e){return function(t){var r=cn(t=ba(t))?pn(t):n,i=r?r[0]:t.charAt(0),o=r?_i(r,1).join(""):t.slice(1);return i[e]()+o}}function Bi(e){return function(t){return Bt(Ja(Ha(t).replace(et,"")),e,"")}}function Ui(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=$n(e.prototype),r=e.apply(n,t);return ta(r)?r:n}}function ji(e){return function(t,r,i){var o=Me(t);if(!Ks(t)){var s=lo(r,3);t=Pa(t),r=function(e){return s(o[e],e,o)}}var a=e(t,r,i);return a>-1?o[s?t[a]:a]:n}}function Fi(e){return ro((function(t){var i=t.length,o=i,s=Hn.prototype.thru;for(e&&t.reverse();o--;){var a=t[o];if("function"!=typeof a)throw new Re(r);if(s&&!c&&"wrapper"==ao(a))var c=new Hn([],!0)}for(o=c?o:i;++o<i;){var l=ao(a=t[o]),u="wrapper"==l?so(a):n;c=u&&Eo(u[0])&&424==u[1]&&!u[4].length&&1==u[9]?c[ao(u[0])].apply(c,u[3]):1==a.length&&Eo(a)?c[l]():c.thru(a)}return function(){var e=arguments,n=e[0];if(c&&1==e.length&&Ws(n))return c.plant(n).value();for(var r=0,o=i?t[r].apply(this,e):n;++r<i;)o=t[r].call(this,o);return o}}))}function zi(e,t,r,i,o,s,a,c,u,d){var h=t&l,f=1&t,p=2&t,g=24&t,m=512&t,y=p?n:Ui(e);return function l(){for(var v=arguments.length,b=ae(v),w=v;w--;)b[w]=arguments[w];if(g)var A=co(l),_=function(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}(b,A);if(i&&(b=Mi(b,i,o,g)),s&&(b=Ii(b,s,a,g)),v-=_,g&&v<d){var E=dn(b,A);return Zi(e,t,zi,l.placeholder,r,b,E,c,u,d-v)}var C=f?r:this,k=p?C[e]:e;return v=b.length,c?b=function(e,t){for(var r=e.length,i=wn(t.length,r),o=Ti(e);i--;){var s=t[i];e[i]=wo(s,r)?o[s]:n}return e}(b,c):m&&v>1&&b.reverse(),h&&u<v&&(b.length=u),this&&this!==gt&&this instanceof l&&(k=y||Ui(k)),k.apply(C,b)}}function $i(e,t){return function(n,r){return function(e,t,n,r){return Ar(e,(function(e,i,o){t(r,n(e),i,o)})),r}(n,e,t(r),{})}}function qi(e,t){return function(r,i){var o;if(r===n&&i===n)return t;if(r!==n&&(o=r),i!==n){if(o===n)return i;"string"==typeof r||"string"==typeof i?(r=ui(r),i=ui(i)):(r=li(r),i=li(i)),o=e(r,i)}return o}}function Hi(e){return ro((function(t){return t=Lt(t,Xt(lo())),Qr((function(n){var r=this;return e(t,(function(e){return xt(e,r,n)}))}))}))}function Wi(e,t){var r=(t=t===n?" ":ui(t)).length;if(r<2)return r?Yr(t,e):t;var i=Yr(t,mt(e/fn(t)));return cn(t)?_i(pn(i),0,e).join(""):i.slice(0,e)}function Vi(e){return function(t,r,i){return i&&"number"!=typeof i&&Ao(t,r,i)&&(r=i=n),t=pa(t),r===n?(r=t,t=0):r=pa(r),function(e,t,n,r){for(var i=-1,o=bn(mt((t-e)/(n||1)),0),s=ae(o);o--;)s[r?o:++i]=e,e+=n;return s}(t,r,i=i===n?t<r?1:-1:pa(i),e)}}function Ki(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=ya(t),n=ya(n)),e(t,n)}}function Zi(e,t,r,i,o,s,l,u,d,h){var f=8&t;t|=f?a:c,4&(t&=~(f?c:a))||(t&=-4);var p=[e,t,o,f?s:n,f?l:n,f?n:s,f?n:l,u,d,h],g=r.apply(n,p);return Eo(e)&&Ro(g,p),g.placeholder=i,No(g,e,t)}function Gi(e){var t=xe[e];return function(e,n){if(e=ya(e),(n=null==n?0:wn(ga(n),292))&&Ft(e)){var r=(ba(e)+"e").split("e");return+((r=(ba(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var Yi=Mn&&1/hn(new Mn([,-0]))[1]==d?function(e){return new Mn(e)}:lc;function Qi(e){return function(t){var n=mo(t);return n==k?ln(t):n==T?function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}(t):function(e,t){return Lt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Ji(e,t,i,d,h,f,p,g){var m=2&t;if(!m&&"function"!=typeof e)throw new Re(r);var y=d?d.length:0;if(y||(t&=-97,d=h=n),p=p===n?p:bn(ga(p),0),g=g===n?g:ga(g),y-=h?h.length:0,t&c){var v=d,b=h;d=h=n}var w=m?n:so(e),A=[e,t,i,d,h,v,b,f,p,g];if(w&&function(e,t){var n=e[1],r=t[1],i=n|r,s=i<131,a=r==l&&8==n||r==l&&n==u&&e[7].length<=t[8]||384==r&&t[7].length<=t[8]&&8==n;if(!s&&!a)return e;1&r&&(e[2]=t[2],i|=1&n?0:4);var c=t[3];if(c){var d=e[3];e[3]=d?Mi(d,c,t[4]):c,e[4]=d?dn(e[3],o):t[4]}c=t[5],c&&(d=e[5],e[5]=d?Ii(d,c,t[6]):c,e[6]=d?dn(e[5],o):t[6]),c=t[7],c&&(e[7]=c),r&l&&(e[8]=null==e[8]?t[8]:wn(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(A,w),e=A[0],t=A[1],i=A[2],d=A[3],h=A[4],!(g=A[9]=A[9]===n?m?0:e.length:bn(A[9]-y,0))&&24&t&&(t&=-25),t&&1!=t)_=8==t||t==s?function(e,t,r){var i=Ui(e);return function o(){for(var s=arguments.length,a=ae(s),c=s,l=co(o);c--;)a[c]=arguments[c];var u=s<3&&a[0]!==l&&a[s-1]!==l?[]:dn(a,l);return(s-=u.length)<r?Zi(e,t,zi,o.placeholder,n,a,u,n,n,r-s):xt(this&&this!==gt&&this instanceof o?i:e,this,a)}}(e,t,g):t!=a&&33!=t||h.length?zi.apply(n,A):function(e,t,n,r){var i=1&t,o=Ui(e);return function t(){for(var s=-1,a=arguments.length,c=-1,l=r.length,u=ae(l+a),d=this&&this!==gt&&this instanceof t?o:e;++c<l;)u[c]=r[c];for(;a--;)u[c++]=arguments[++s];return xt(d,i?n:this,u)}}(e,t,i,d);else var _=function(e,t,n){var r=1&t,i=Ui(e);return function t(){return(this&&this!==gt&&this instanceof t?i:e).apply(r?n:this,arguments)}}(e,t,i);return No((w?ti:Ro)(_,A),e,t)}function Xi(e,t,r,i){return e===n||zs(e,Ne[r])&&!Be.call(i,r)?t:e}function eo(e,t,r,i,o,s){return ta(e)&&ta(t)&&(s.set(t,e),qr(e,t,n,eo,s),s.delete(t)),e}function to(e){return oa(e)?n:e}function no(e,t,r,i,o,s){var a=1&r,c=e.length,l=t.length;if(c!=l&&!(a&&l>c))return!1;var u=s.get(e),d=s.get(t);if(u&&d)return u==t&&d==e;var h=-1,f=!0,p=2&r?new Gn:n;for(s.set(e,t),s.set(t,e);++h<c;){var g=e[h],m=t[h];if(i)var y=a?i(m,g,h,t,e,s):i(g,m,h,e,t,s);if(y!==n){if(y)continue;f=!1;break}if(p){if(!jt(t,(function(e,t){if(!tn(p,t)&&(g===e||o(g,e,r,i,s)))return p.push(t)}))){f=!1;break}}else if(g!==m&&!o(g,m,r,i,s)){f=!1;break}}return s.delete(e),s.delete(t),f}function ro(e){return Oo(Mo(e,n,Vo),e+"")}function io(e){return kr(e,Pa,po)}function oo(e){return kr(e,Oa,go)}var so=Rn?function(e){return Rn.get(e)}:lc;function ao(e){for(var t=e.name+"",n=Pn[t],r=Be.call(Pn,t)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==e)return i.name}return t}function co(e){return(Be.call(zn,"placeholder")?zn:e).placeholder}function lo(){var e=zn.iteratee||oc;return e=e===oc?Dr:e,arguments.length?e(arguments[0],arguments[1]):e}function uo(e,t){var n=e.__data__;return function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}(t)?n["string"==typeof t?"string":"hash"]:n.map}function ho(e){for(var t=Pa(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,So(i)]}return t}function fo(e,t){var r=function(e,t){return null==e?n:e[t]}(e,t);return Lr(r)?r:n}var po=bt?function(e){return null==e?[]:(e=Me(e),Pt(bt(e),(function(t){return Ye.call(e,t)})))}:mc,go=bt?function(e){for(var t=[];e;)Dt(t,po(e)),e=Ze(e);return t}:mc,mo=Sr;function yo(e,t,n){for(var r=-1,i=(t=wi(t,e)).length,o=!1;++r<i;){var s=Uo(t[r]);if(!(o=null!=e&&n(e,s)))break;e=e[s]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&ea(i)&&wo(s,i)&&(Ws(e)||Hs(e))}function vo(e){return"function"!=typeof e.constructor||ko(e)?{}:$n(Ze(e))}function bo(e){return Ws(e)||Hs(e)||!!(Je&&e&&e[Je])}function wo(e,t){var n=typeof e;return!!(t=t??h)&&("number"==n||"symbol"!=n&&we.test(e))&&e>-1&&e%1==0&&e<t}function Ao(e,t,n){if(!ta(n))return!1;var r=typeof t;return!!("number"==r?Ks(n)&&wo(t,n.length):"string"==r&&t in n)&&zs(n[t],e)}function _o(e,t){if(Ws(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!la(e))||(ne.test(e)||!te.test(e)||null!=t&&e in Me(t))}function Eo(e){var t=ao(e),n=zn[t];if("function"!=typeof n||!(t in Wn.prototype))return!1;if(e===n)return!0;var r=so(n);return!!r&&e===r[0]}(kn&&mo(new kn(new ArrayBuffer(1)))!=L||Sn&&mo(new Sn)!=k||xn&&mo(xn.resolve())!=M||Mn&&mo(new Mn)!=T||In&&mo(new In)!=O)&&(mo=function(e){var t=Sr(e),r=t==x?e.constructor:n,i=r?jo(r):"";if(i)switch(i){case On:return L;case Nn:return k;case Ln:return M;case Dn:return T;case Bn:return O}return t});var Co=Le?Js:yc;function ko(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ne)}function So(e){return e==e&&!ta(e)}function xo(e,t){return function(r){return null!=r&&(r[e]===t&&(t!==n||e in Me(r)))}}function Mo(e,t,r){return t=bn(t===n?e.length-1:t,0),function(){for(var n=arguments,i=-1,o=bn(n.length-t,0),s=ae(o);++i<o;)s[i]=n[t+i];i=-1;for(var a=ae(t+1);++i<t;)a[i]=n[i];return a[t]=r(s),xt(e,this,a)}}function Io(e,t){return t.length<2?e:Cr(e,ii(t,0,-1))}function To(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Ro=Lo(ti),Po=pt||function(e,t){return gt.setTimeout(e,t)},Oo=Lo(ni);function No(e,t,n){var r=t+"";return Oo(e,function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(ce,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return It(y,(function(n){var r="_."+n[0];t&n[1]&&!Ot(e,r)&&e.push(r)})),e.sort()}(function(e){var t=e.match(le);return t?t[1].split(ue):[]}(r),n)))}function Lo(e){var t=0,r=0;return function(){var i=An(),o=16-(i-r);if(r=i,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(n,arguments)}}function Do(e,t){var r=-1,i=e.length,o=i-1;for(t=t===n?i:t;++r<t;){var s=Gr(r,o),a=e[s];e[s]=e[r],e[r]=a}return e.length=t,e}var Bo=function(e){var t=Ls(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(re,(function(e,n,r,i){t.push(r?i.replace(fe,"$1"):n||e)})),t}));function Uo(e){if("string"==typeof e||la(e))return e;var t=e+"";return"0"==t&&1/e==-d?"-0":t}function jo(e){if(null!=e){try{return De.call(e)}catch{}try{return e+""}catch{}}return""}function Fo(e){if(e instanceof Wn)return e.clone();var t=new Hn(e.__wrapped__,e.__chain__);return t.__actions__=Ti(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var zo=Qr((function(e,t){return Zs(e)?hr(e,vr(t,1,Zs,!0)):[]})),$o=Qr((function(e,t){var r=Qo(t);return Zs(r)&&(r=n),Zs(e)?hr(e,vr(t,1,Zs,!0),lo(r,2)):[]})),qo=Qr((function(e,t){var r=Qo(t);return Zs(r)&&(r=n),Zs(e)?hr(e,vr(t,1,Zs,!0),n,r):[]}));function Ho(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ga(n);return i<0&&(i=bn(r+i,0)),$t(e,lo(t,3),i)}function Wo(e,t,r){var i=null==e?0:e.length;if(!i)return-1;var o=i-1;return r!==n&&(o=ga(r),o=r<0?bn(i+o,0):wn(o,i-1)),$t(e,lo(t,3),o,!0)}function Vo(e){return(null==e?0:e.length)?vr(e,1):[]}function Ko(e){return e&&e.length?e[0]:n}var Zo=Qr((function(e){var t=Lt(e,vi);return t.length&&t[0]===e[0]?Tr(t):[]})),Go=Qr((function(e){var t=Qo(e),r=Lt(e,vi);return t===Qo(r)?t=n:r.pop(),r.length&&r[0]===e[0]?Tr(r,lo(t,2)):[]})),Yo=Qr((function(e){var t=Qo(e),r=Lt(e,vi);return(t="function"==typeof t?t:n)&&r.pop(),r.length&&r[0]===e[0]?Tr(r,n,t):[]}));function Qo(e){var t=null==e?0:e.length;return t?e[t-1]:n}var Jo=Qr(Xo);function Xo(e,t){return e&&e.length&&t&&t.length?Kr(e,t):e}var es=ro((function(e,t){var n=null==e?0:e.length,r=ar(e,t);return Zr(e,Lt(t,(function(e){return wo(e,n)?+e:e})).sort(xi)),r}));function ts(e){return null==e?e:Cn.call(e)}var ns=Qr((function(e){return di(vr(e,1,Zs,!0))})),rs=Qr((function(e){var t=Qo(e);return Zs(t)&&(t=n),di(vr(e,1,Zs,!0),lo(t,2))})),is=Qr((function(e){var t=Qo(e);return t="function"==typeof t?t:n,di(vr(e,1,Zs,!0),n,t)}));function os(e){if(!e||!e.length)return[];var t=0;return e=Pt(e,(function(e){if(Zs(e))return t=bn(e.length,t),!0})),Qt(t,(function(t){return Lt(e,Kt(t))}))}function ss(e,t){if(!e||!e.length)return[];var r=os(e);return null==t?r:Lt(r,(function(e){return xt(t,n,e)}))}var as=Qr((function(e,t){return Zs(e)?hr(e,t):[]})),cs=Qr((function(e){return mi(Pt(e,Zs))})),ls=Qr((function(e){var t=Qo(e);return Zs(t)&&(t=n),mi(Pt(e,Zs),lo(t,2))})),us=Qr((function(e){var t=Qo(e);return t="function"==typeof t?t:n,mi(Pt(e,Zs),n,t)})),ds=Qr(os);var hs=Qr((function(e){var t=e.length,r=t>1?e[t-1]:n;return r="function"==typeof r?(e.pop(),r):n,ss(e,r)}));function fs(e){var t=zn(e);return t.__chain__=!0,t}function ps(e,t){return t(e)}var gs=ro((function(e){var t=e.length,r=t?e[0]:0,i=this.__wrapped__,o=function(t){return ar(t,e)};return!(t>1||this.__actions__.length)&&i instanceof Wn&&wo(r)?((i=i.slice(r,+r+(t?1:0))).__actions__.push({func:ps,args:[o],thisArg:n}),new Hn(i,this.__chain__).thru((function(e){return t&&!e.length&&e.push(n),e}))):this.thru(o)}));var ms=Pi((function(e,t,n){Be.call(e,n)?++e[n]:sr(e,n,1)}));var ys=ji(Ho),vs=ji(Wo);function bs(e,t){return(Ws(e)?It:fr)(e,lo(t,3))}function ws(e,t){return(Ws(e)?Tt:pr)(e,lo(t,3))}var As=Pi((function(e,t,n){Be.call(e,n)?e[n].push(t):sr(e,n,[t])}));var _s=Qr((function(e,t,n){var r=-1,i="function"==typeof t,o=Ks(e)?ae(e.length):[];return fr(e,(function(e){o[++r]=i?xt(t,e,n):Rr(e,t,n)})),o})),Es=Pi((function(e,t,n){sr(e,n,t)}));function Cs(e,t){return(Ws(e)?Lt:Fr)(e,lo(t,3))}var ks=Pi((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]}));var Ss=Qr((function(e,t){if(null==e)return[];var n=t.length;return n>1&&Ao(e,t[0],t[1])?t=[]:n>2&&Ao(t[0],t[1],t[2])&&(t=[t[0]]),Wr(e,vr(t,1),[])})),xs=ft||function(){return gt.Date.now()};function Ms(e,t,r){return t=r?n:t,t=e&&null==t?e.length:t,Ji(e,l,n,n,n,n,t)}function Is(e,t){var i;if("function"!=typeof t)throw new Re(r);return e=ga(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=n),i}}var Ts=Qr((function(e,t,n){var r=1;if(n.length){var i=dn(n,co(Ts));r|=a}return Ji(e,r,t,n,i)})),Rs=Qr((function(e,t,n){var r=3;if(n.length){var i=dn(n,co(Rs));r|=a}return Ji(t,r,e,n,i)}));function Ps(e,t,i){var o,s,a,c,l,u,d=0,h=!1,f=!1,p=!0;if("function"!=typeof e)throw new Re(r);function g(t){var r=o,i=s;return o=s=n,d=t,c=e.apply(i,r)}function m(e){var r=e-u;return u===n||r>=t||r<0||f&&e-d>=a}function y(){var e=xs();if(m(e))return v(e);l=Po(y,function(e){var n=t-(e-u);return f?wn(n,a-(e-d)):n}(e))}function v(e){return l=n,p&&o?g(e):(o=s=n,c)}function b(){var e=xs(),r=m(e);if(o=arguments,s=this,u=e,r){if(l===n)return function(e){return d=e,l=Po(y,t),h?g(e):c}(u);if(f)return Ei(l),l=Po(y,t),g(u)}return l===n&&(l=Po(y,t)),c}return t=ya(t)||0,ta(i)&&(h=!!i.leading,a=(f="maxWait"in i)?bn(ya(i.maxWait)||0,t):a,p="trailing"in i?!!i.trailing:p),b.cancel=function(){l!==n&&Ei(l),d=0,o=u=s=l=n},b.flush=function(){return l===n?c:v(xs())},b}var Os=Qr((function(e,t){return dr(e,1,t)})),Ns=Qr((function(e,t,n){return dr(e,ya(t)||0,n)}));function Ls(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Re(r);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var s=e.apply(this,r);return n.cache=o.set(i,s)||o,s};return n.cache=new(Ls.Cache||Zn),n}function Ds(e){if("function"!=typeof e)throw new Re(r);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Ls.Cache=Zn;var Bs=Ai((function(e,t){var n=(t=1==t.length&&Ws(t[0])?Lt(t[0],Xt(lo())):Lt(vr(t,1),Xt(lo()))).length;return Qr((function(r){for(var i=-1,o=wn(r.length,n);++i<o;)r[i]=t[i].call(this,r[i]);return xt(e,this,r)}))})),Us=Qr((function(e,t){var r=dn(t,co(Us));return Ji(e,a,n,t,r)})),js=Qr((function(e,t){var r=dn(t,co(js));return Ji(e,c,n,t,r)})),Fs=ro((function(e,t){return Ji(e,u,n,n,n,t)}));function zs(e,t){return e===t||e!=e&&t!=t}var $s=Ki(xr),qs=Ki((function(e,t){return e>=t})),Hs=Pr(function(){return arguments}())?Pr:function(e){return na(e)&&Be.call(e,"callee")&&!Ye.call(e,"callee")},Ws=ae.isArray,Vs=At?Xt(At):function(e){return na(e)&&Sr(e)==N};function Ks(e){return null!=e&&ea(e.length)&&!Js(e)}function Zs(e){return na(e)&&Ks(e)}var Gs=wt||yc,Ys=_t?Xt(_t):function(e){return na(e)&&Sr(e)==A};function Qs(e){if(!na(e))return!1;var t=Sr(e);return t==_||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!oa(e)}function Js(e){if(!ta(e))return!1;var t=Sr(e);return t==E||t==C||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Xs(e){return"number"==typeof e&&e==ga(e)}function ea(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=h}function ta(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function na(e){return null!=e&&"object"==typeof e}var ra=Et?Xt(Et):function(e){return na(e)&&mo(e)==k};function ia(e){return"number"==typeof e||na(e)&&Sr(e)==S}function oa(e){if(!na(e)||Sr(e)!=x)return!1;var t=Ze(e);if(null===t)return!0;var n=Be.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&De.call(n)==ze}var sa=Ct?Xt(Ct):function(e){return na(e)&&Sr(e)==I};var aa=kt?Xt(kt):function(e){return na(e)&&mo(e)==T};function ca(e){return"string"==typeof e||!Ws(e)&&na(e)&&Sr(e)==R}function la(e){return"symbol"==typeof e||na(e)&&Sr(e)==P}var ua=St?Xt(St):function(e){return na(e)&&ea(e.length)&&!!ct[Sr(e)]};var da=Ki(jr),ha=Ki((function(e,t){return e<=t}));function fa(e){if(!e)return[];if(Ks(e))return ca(e)?pn(e):Ti(e);if(Xe&&e[Xe])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[Xe]());var t=mo(e);return(t==k?ln:t==T?hn:za)(e)}function pa(e){return e?(e=ya(e))===d||e===-d?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ga(e){var t=pa(e),n=t%1;return t==t?n?t-n:t:0}function ma(e){return e?cr(ga(e),0,p):0}function ya(e){if("number"==typeof e)return e;if(la(e))return f;if(ta(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ta(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Jt(e);var n=ye.test(e);return n||be.test(e)?ht(e.slice(2),n?2:8):me.test(e)?f:+e}function va(e){return Ri(e,Oa(e))}function ba(e){return null==e?"":ui(e)}var wa=Oi((function(e,t){if(ko(t)||Ks(t))Ri(t,Pa(t),e);else for(var n in t)Be.call(t,n)&&nr(e,n,t[n])})),Aa=Oi((function(e,t){Ri(t,Oa(t),e)})),_a=Oi((function(e,t,n,r){Ri(t,Oa(t),e,r)})),Ea=Oi((function(e,t,n,r){Ri(t,Pa(t),e,r)})),Ca=ro(ar);var ka=Qr((function(e,t){e=Me(e);var r=-1,i=t.length,o=i>2?t[2]:n;for(o&&Ao(t[0],t[1],o)&&(i=1);++r<i;)for(var s=t[r],a=Oa(s),c=-1,l=a.length;++c<l;){var u=a[c],d=e[u];(d===n||zs(d,Ne[u])&&!Be.call(e,u))&&(e[u]=s[u])}return e})),Sa=Qr((function(e){return e.push(n,eo),xt(La,n,e)}));function xa(e,t,r){var i=null==e?n:Cr(e,t);return i===n?r:i}function Ma(e,t){return null!=e&&yo(e,t,Ir)}var Ia=$i((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Fe.call(t)),e[t]=n}),tc(ic)),Ta=$i((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Fe.call(t)),Be.call(e,t)?e[t].push(n):e[t]=[n]}),lo),Ra=Qr(Rr);function Pa(e){return Ks(e)?Qn(e):Br(e)}function Oa(e){return Ks(e)?Qn(e,!0):Ur(e)}var Na=Oi((function(e,t,n){qr(e,t,n)})),La=Oi((function(e,t,n,r){qr(e,t,n,r)})),Da=ro((function(e,t){var n={};if(null==e)return n;var r=!1;t=Lt(t,(function(t){return t=wi(t,e),r||(r=t.length>1),t})),Ri(e,oo(e),n),r&&(n=lr(n,7,to));for(var i=t.length;i--;)hi(n,t[i]);return n}));var Ba=ro((function(e,t){return null==e?{}:function(e,t){return Vr(e,t,(function(t,n){return Ma(e,n)}))}(e,t)}));function Ua(e,t){if(null==e)return{};var n=Lt(oo(e),(function(e){return[e]}));return t=lo(t),Vr(e,n,(function(e,n){return t(e,n[0])}))}var ja=Qi(Pa),Fa=Qi(Oa);function za(e){return null==e?[]:en(e,Pa(e))}var $a=Bi((function(e,t,n){return t=t.toLowerCase(),e+(n?qa(t):t)}));function qa(e){return Qa(ba(e).toLowerCase())}function Ha(e){return(e=ba(e))&&e.replace(Ae,on).replace(tt,"")}var Wa=Bi((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),Va=Bi((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Ka=Di("toLowerCase");var Za=Bi((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}));var Ga=Bi((function(e,t,n){return e+(n?" ":"")+Qa(t)}));var Ya=Bi((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),Qa=Di("toUpperCase");function Ja(e,t,r){return e=ba(e),(t=r?n:t)===n?function(e){return ot.test(e)}(e)?function(e){return e.match(rt)||[]}(e):function(e){return e.match(de)||[]}(e):e.match(t)||[]}var Xa=Qr((function(e,t){try{return xt(e,n,t)}catch(e){return Qs(e)?e:new ke(e)}})),ec=ro((function(e,t){return It(t,(function(t){t=Uo(t),sr(e,t,Ts(e[t],e))})),e}));function tc(e){return function(){return e}}var nc=Fi(),rc=Fi(!0);function ic(e){return e}function oc(e){return Dr("function"==typeof e?e:lr(e,1))}var sc=Qr((function(e,t){return function(n){return Rr(n,e,t)}})),ac=Qr((function(e,t){return function(n){return Rr(e,n,t)}}));function cc(e,t,n){var r=Pa(t),i=Er(t,r);null==n&&(!ta(t)||!i.length&&r.length)&&(n=t,t=e,e=this,i=Er(t,Pa(t)));var o=!(ta(n)&&"chain"in n&&!n.chain),s=Js(e);return It(i,(function(n){var r=t[n];e[n]=r,s&&(e.prototype[n]=function(){var t=this.__chain__;if(o||t){var n=e(this.__wrapped__);return(n.__actions__=Ti(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,Dt([this.value()],arguments))})})),e}function lc(){}var uc=Hi(Lt),dc=Hi(Rt),hc=Hi(jt);function fc(e){return _o(e)?Kt(Uo(e)):function(e){return function(t){return Cr(t,e)}}(e)}var pc=Vi(),gc=Vi(!0);function mc(){return[]}function yc(){return!1}var vc=qi((function(e,t){return e+t}),0),bc=Gi("ceil"),wc=qi((function(e,t){return e/t}),1),Ac=Gi("floor");var _c=qi((function(e,t){return e*t}),1),Ec=Gi("round"),Cc=qi((function(e,t){return e-t}),0);return zn.after=function(e,t){if("function"!=typeof t)throw new Re(r);return e=ga(e),function(){if(--e<1)return t.apply(this,arguments)}},zn.ary=Ms,zn.assign=wa,zn.assignIn=Aa,zn.assignInWith=_a,zn.assignWith=Ea,zn.at=Ca,zn.before=Is,zn.bind=Ts,zn.bindAll=ec,zn.bindKey=Rs,zn.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ws(e)?e:[e]},zn.chain=fs,zn.chunk=function(e,t,r){t=(r?Ao(e,t,r):t===n)?1:bn(ga(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var o=0,s=0,a=ae(mt(i/t));o<i;)a[s++]=ii(e,o,o+=t);return a},zn.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var o=e[t];o&&(i[r++]=o)}return i},zn.concat=function(){var e=arguments.length;if(!e)return[];for(var t=ae(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return Dt(Ws(n)?Ti(n):[n],vr(t,1))},zn.cond=function(e){var t=null==e?0:e.length,n=lo();return e=t?Lt(e,(function(e){if("function"!=typeof e[1])throw new Re(r);return[n(e[0]),e[1]]})):[],Qr((function(n){for(var r=-1;++r<t;){var i=e[r];if(xt(i[0],this,n))return xt(i[1],this,n)}}))},zn.conforms=function(e){return function(e){var t=Pa(e);return function(n){return ur(n,e,t)}}(lr(e,1))},zn.constant=tc,zn.countBy=ms,zn.create=function(e,t){var n=$n(e);return null==t?n:or(n,t)},zn.curry=function e(t,r,i){var o=Ji(t,8,n,n,n,n,n,r=i?n:r);return o.placeholder=e.placeholder,o},zn.curryRight=function e(t,r,i){var o=Ji(t,s,n,n,n,n,n,r=i?n:r);return o.placeholder=e.placeholder,o},zn.debounce=Ps,zn.defaults=ka,zn.defaultsDeep=Sa,zn.defer=Os,zn.delay=Ns,zn.difference=zo,zn.differenceBy=$o,zn.differenceWith=qo,zn.drop=function(e,t,r){var i=null==e?0:e.length;return i?ii(e,(t=r||t===n?1:ga(t))<0?0:t,i):[]},zn.dropRight=function(e,t,r){var i=null==e?0:e.length;return i?ii(e,0,(t=i-(t=r||t===n?1:ga(t)))<0?0:t):[]},zn.dropRightWhile=function(e,t){return e&&e.length?pi(e,lo(t,3),!0,!0):[]},zn.dropWhile=function(e,t){return e&&e.length?pi(e,lo(t,3),!0):[]},zn.fill=function(e,t,r,i){var o=null==e?0:e.length;return o?(r&&"number"!=typeof r&&Ao(e,t,r)&&(r=0,i=o),function(e,t,r,i){var o=e.length;for((r=ga(r))<0&&(r=-r>o?0:o+r),(i=i===n||i>o?o:ga(i))<0&&(i+=o),i=r>i?0:ma(i);r<i;)e[r++]=t;return e}(e,t,r,i)):[]},zn.filter=function(e,t){return(Ws(e)?Pt:yr)(e,lo(t,3))},zn.flatMap=function(e,t){return vr(Cs(e,t),1)},zn.flatMapDeep=function(e,t){return vr(Cs(e,t),d)},zn.flatMapDepth=function(e,t,r){return r=r===n?1:ga(r),vr(Cs(e,t),r)},zn.flatten=Vo,zn.flattenDeep=function(e){return(null==e?0:e.length)?vr(e,d):[]},zn.flattenDepth=function(e,t){return(null==e?0:e.length)?vr(e,t=t===n?1:ga(t)):[]},zn.flip=function(e){return Ji(e,512)},zn.flow=nc,zn.flowRight=rc,zn.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r},zn.functions=function(e){return null==e?[]:Er(e,Pa(e))},zn.functionsIn=function(e){return null==e?[]:Er(e,Oa(e))},zn.groupBy=As,zn.initial=function(e){return(null==e?0:e.length)?ii(e,0,-1):[]},zn.intersection=Zo,zn.intersectionBy=Go,zn.intersectionWith=Yo,zn.invert=Ia,zn.invertBy=Ta,zn.invokeMap=_s,zn.iteratee=oc,zn.keyBy=Es,zn.keys=Pa,zn.keysIn=Oa,zn.map=Cs,zn.mapKeys=function(e,t){var n={};return t=lo(t,3),Ar(e,(function(e,r,i){sr(n,t(e,r,i),e)})),n},zn.mapValues=function(e,t){var n={};return t=lo(t,3),Ar(e,(function(e,r,i){sr(n,r,t(e,r,i))})),n},zn.matches=function(e){return zr(lr(e,1))},zn.matchesProperty=function(e,t){return $r(e,lr(t,1))},zn.memoize=Ls,zn.merge=Na,zn.mergeWith=La,zn.method=sc,zn.methodOf=ac,zn.mixin=cc,zn.negate=Ds,zn.nthArg=function(e){return e=ga(e),Qr((function(t){return Hr(t,e)}))},zn.omit=Da,zn.omitBy=function(e,t){return Ua(e,Ds(lo(t)))},zn.once=function(e){return Is(2,e)},zn.orderBy=function(e,t,r,i){return null==e?[]:(Ws(t)||(t=null==t?[]:[t]),Ws(r=i?n:r)||(r=null==r?[]:[r]),Wr(e,t,r))},zn.over=uc,zn.overArgs=Bs,zn.overEvery=dc,zn.overSome=hc,zn.partial=Us,zn.partialRight=js,zn.partition=ks,zn.pick=Ba,zn.pickBy=Ua,zn.property=fc,zn.propertyOf=function(e){return function(t){return null==e?n:Cr(e,t)}},zn.pull=Jo,zn.pullAll=Xo,zn.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?Kr(e,t,lo(n,2)):e},zn.pullAllWith=function(e,t,r){return e&&e.length&&t&&t.length?Kr(e,t,n,r):e},zn.pullAt=es,zn.range=pc,zn.rangeRight=gc,zn.rearg=Fs,zn.reject=function(e,t){return(Ws(e)?Pt:yr)(e,Ds(lo(t,3)))},zn.remove=function(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],o=e.length;for(t=lo(t,3);++r<o;){var s=e[r];t(s,r,e)&&(n.push(s),i.push(r))}return Zr(e,i),n},zn.rest=function(e,t){if("function"!=typeof e)throw new Re(r);return Qr(e,t=t===n?t:ga(t))},zn.reverse=ts,zn.sampleSize=function(e,t,r){return t=(r?Ao(e,t,r):t===n)?1:ga(t),(Ws(e)?Xn:Xr)(e,t)},zn.set=function(e,t,n){return null==e?e:ei(e,t,n)},zn.setWith=function(e,t,r,i){return i="function"==typeof i?i:n,null==e?e:ei(e,t,r,i)},zn.shuffle=function(e){return(Ws(e)?er:ri)(e)},zn.slice=function(e,t,r){var i=null==e?0:e.length;return i?(r&&"number"!=typeof r&&Ao(e,t,r)?(t=0,r=i):(t=null==t?0:ga(t),r=r===n?i:ga(r)),ii(e,t,r)):[]},zn.sortBy=Ss,zn.sortedUniq=function(e){return e&&e.length?ci(e):[]},zn.sortedUniqBy=function(e,t){return e&&e.length?ci(e,lo(t,2)):[]},zn.split=function(e,t,r){return r&&"number"!=typeof r&&Ao(e,t,r)&&(t=r=n),(r=r===n?p:r>>>0)?(e=ba(e))&&("string"==typeof t||null!=t&&!sa(t))&&(!(t=ui(t))&&cn(e))?_i(pn(e),0,r):e.split(t,r):[]},zn.spread=function(e,t){if("function"!=typeof e)throw new Re(r);return t=null==t?0:bn(ga(t),0),Qr((function(n){var r=n[t],i=_i(n,0,t);return r&&Dt(i,r),xt(e,this,i)}))},zn.tail=function(e){var t=null==e?0:e.length;return t?ii(e,1,t):[]},zn.take=function(e,t,r){return e&&e.length?ii(e,0,(t=r||t===n?1:ga(t))<0?0:t):[]},zn.takeRight=function(e,t,r){var i=null==e?0:e.length;return i?ii(e,(t=i-(t=r||t===n?1:ga(t)))<0?0:t,i):[]},zn.takeRightWhile=function(e,t){return e&&e.length?pi(e,lo(t,3),!1,!0):[]},zn.takeWhile=function(e,t){return e&&e.length?pi(e,lo(t,3)):[]},zn.tap=function(e,t){return t(e),e},zn.throttle=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new Re(r);return ta(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),Ps(e,t,{leading:i,maxWait:t,trailing:o})},zn.thru=ps,zn.toArray=fa,zn.toPairs=ja,zn.toPairsIn=Fa,zn.toPath=function(e){return Ws(e)?Lt(e,Uo):la(e)?[e]:Ti(Bo(ba(e)))},zn.toPlainObject=va,zn.transform=function(e,t,n){var r=Ws(e),i=r||Gs(e)||ua(e);if(t=lo(t,4),null==n){var o=e&&e.constructor;n=i?r?new o:[]:ta(e)&&Js(o)?$n(Ze(e)):{}}return(i?It:Ar)(e,(function(e,r,i){return t(n,e,r,i)})),n},zn.unary=function(e){return Ms(e,1)},zn.union=ns,zn.unionBy=rs,zn.unionWith=is,zn.uniq=function(e){return e&&e.length?di(e):[]},zn.uniqBy=function(e,t){return e&&e.length?di(e,lo(t,2)):[]},zn.uniqWith=function(e,t){return t="function"==typeof t?t:n,e&&e.length?di(e,n,t):[]},zn.unset=function(e,t){return null==e||hi(e,t)},zn.unzip=os,zn.unzipWith=ss,zn.update=function(e,t,n){return null==e?e:fi(e,t,bi(n))},zn.updateWith=function(e,t,r,i){return i="function"==typeof i?i:n,null==e?e:fi(e,t,bi(r),i)},zn.values=za,zn.valuesIn=function(e){return null==e?[]:en(e,Oa(e))},zn.without=as,zn.words=Ja,zn.wrap=function(e,t){return Us(bi(t),e)},zn.xor=cs,zn.xorBy=ls,zn.xorWith=us,zn.zip=ds,zn.zipObject=function(e,t){return yi(e||[],t||[],nr)},zn.zipObjectDeep=function(e,t){return yi(e||[],t||[],ei)},zn.zipWith=hs,zn.entries=ja,zn.entriesIn=Fa,zn.extend=Aa,zn.extendWith=_a,cc(zn,zn),zn.add=vc,zn.attempt=Xa,zn.camelCase=$a,zn.capitalize=qa,zn.ceil=bc,zn.clamp=function(e,t,r){return r===n&&(r=t,t=n),r!==n&&(r=(r=ya(r))==r?r:0),t!==n&&(t=(t=ya(t))==t?t:0),cr(ya(e),t,r)},zn.clone=function(e){return lr(e,4)},zn.cloneDeep=function(e){return lr(e,5)},zn.cloneDeepWith=function(e,t){return lr(e,5,t="function"==typeof t?t:n)},zn.cloneWith=function(e,t){return lr(e,4,t="function"==typeof t?t:n)},zn.conformsTo=function(e,t){return null==t||ur(e,t,Pa(t))},zn.deburr=Ha,zn.defaultTo=function(e,t){return null==e||e!=e?t:e},zn.divide=wc,zn.endsWith=function(e,t,r){e=ba(e),t=ui(t);var i=e.length,o=r=r===n?i:cr(ga(r),0,i);return(r-=t.length)>=0&&e.slice(r,o)==t},zn.eq=zs,zn.escape=function(e){return(e=ba(e))&&Q.test(e)?e.replace(G,sn):e},zn.escapeRegExp=function(e){return(e=ba(e))&&oe.test(e)?e.replace(ie,"\\$&"):e},zn.every=function(e,t,r){var i=Ws(e)?Rt:gr;return r&&Ao(e,t,r)&&(t=n),i(e,lo(t,3))},zn.find=ys,zn.findIndex=Ho,zn.findKey=function(e,t){return zt(e,lo(t,3),Ar)},zn.findLast=vs,zn.findLastIndex=Wo,zn.findLastKey=function(e,t){return zt(e,lo(t,3),_r)},zn.floor=Ac,zn.forEach=bs,zn.forEachRight=ws,zn.forIn=function(e,t){return null==e?e:br(e,lo(t,3),Oa)},zn.forInRight=function(e,t){return null==e?e:wr(e,lo(t,3),Oa)},zn.forOwn=function(e,t){return e&&Ar(e,lo(t,3))},zn.forOwnRight=function(e,t){return e&&_r(e,lo(t,3))},zn.get=xa,zn.gt=$s,zn.gte=qs,zn.has=function(e,t){return null!=e&&yo(e,t,Mr)},zn.hasIn=Ma,zn.head=Ko,zn.identity=ic,zn.includes=function(e,t,n,r){e=Ks(e)?e:za(e),n=n&&!r?ga(n):0;var i=e.length;return n<0&&(n=bn(i+n,0)),ca(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&qt(e,t,n)>-1},zn.indexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ga(n);return i<0&&(i=bn(r+i,0)),qt(e,t,i)},zn.inRange=function(e,t,r){return t=pa(t),r===n?(r=t,t=0):r=pa(r),function(e,t,n){return e>=wn(t,n)&&e<bn(t,n)}(e=ya(e),t,r)},zn.invoke=Ra,zn.isArguments=Hs,zn.isArray=Ws,zn.isArrayBuffer=Vs,zn.isArrayLike=Ks,zn.isArrayLikeObject=Zs,zn.isBoolean=function(e){return!0===e||!1===e||na(e)&&Sr(e)==w},zn.isBuffer=Gs,zn.isDate=Ys,zn.isElement=function(e){return na(e)&&1===e.nodeType&&!oa(e)},zn.isEmpty=function(e){if(null==e)return!0;if(Ks(e)&&(Ws(e)||"string"==typeof e||"function"==typeof e.splice||Gs(e)||ua(e)||Hs(e)))return!e.length;var t=mo(e);if(t==k||t==T)return!e.size;if(ko(e))return!Br(e).length;for(var n in e)if(Be.call(e,n))return!1;return!0},zn.isEqual=function(e,t){return Or(e,t)},zn.isEqualWith=function(e,t,r){var i=(r="function"==typeof r?r:n)?r(e,t):n;return i===n?Or(e,t,n,r):!!i},zn.isError=Qs,zn.isFinite=function(e){return"number"==typeof e&&Ft(e)},zn.isFunction=Js,zn.isInteger=Xs,zn.isLength=ea,zn.isMap=ra,zn.isMatch=function(e,t){return e===t||Nr(e,t,ho(t))},zn.isMatchWith=function(e,t,r){return r="function"==typeof r?r:n,Nr(e,t,ho(t),r)},zn.isNaN=function(e){return ia(e)&&e!=+e},zn.isNative=function(e){if(Co(e))throw new ke("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Lr(e)},zn.isNil=function(e){return null==e},zn.isNull=function(e){return null===e},zn.isNumber=ia,zn.isObject=ta,zn.isObjectLike=na,zn.isPlainObject=oa,zn.isRegExp=sa,zn.isSafeInteger=function(e){return Xs(e)&&e>=-h&&e<=h},zn.isSet=aa,zn.isString=ca,zn.isSymbol=la,zn.isTypedArray=ua,zn.isUndefined=function(e){return e===n},zn.isWeakMap=function(e){return na(e)&&mo(e)==O},zn.isWeakSet=function(e){return na(e)&&"[object WeakSet]"==Sr(e)},zn.join=function(e,t){return null==e?"":Zt.call(e,t)},zn.kebabCase=Wa,zn.last=Qo,zn.lastIndexOf=function(e,t,r){var i=null==e?0:e.length;if(!i)return-1;var o=i;return r!==n&&(o=(o=ga(r))<0?bn(i+o,0):wn(o,i-1)),t==t?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}(e,t,o):$t(e,Wt,o,!0)},zn.lowerCase=Va,zn.lowerFirst=Ka,zn.lt=da,zn.lte=ha,zn.max=function(e){return e&&e.length?mr(e,ic,xr):n},zn.maxBy=function(e,t){return e&&e.length?mr(e,lo(t,2),xr):n},zn.mean=function(e){return Vt(e,ic)},zn.meanBy=function(e,t){return Vt(e,lo(t,2))},zn.min=function(e){return e&&e.length?mr(e,ic,jr):n},zn.minBy=function(e,t){return e&&e.length?mr(e,lo(t,2),jr):n},zn.stubArray=mc,zn.stubFalse=yc,zn.stubObject=function(){return{}},zn.stubString=function(){return""},zn.stubTrue=function(){return!0},zn.multiply=_c,zn.nth=function(e,t){return e&&e.length?Hr(e,ga(t)):n},zn.noConflict=function(){return gt._===this&&(gt._=$e),this},zn.noop=lc,zn.now=xs,zn.pad=function(e,t,n){e=ba(e);var r=(t=ga(t))?fn(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return Wi(yt(i),n)+e+Wi(mt(i),n)},zn.padEnd=function(e,t,n){e=ba(e);var r=(t=ga(t))?fn(e):0;return t&&r<t?e+Wi(t-r,n):e},zn.padStart=function(e,t,n){e=ba(e);var r=(t=ga(t))?fn(e):0;return t&&r<t?Wi(t-r,n)+e:e},zn.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),_n(ba(e).replace(se,""),t||0)},zn.random=function(e,t,r){if(r&&"boolean"!=typeof r&&Ao(e,t,r)&&(t=r=n),r===n&&("boolean"==typeof t?(r=t,t=n):"boolean"==typeof e&&(r=e,e=n)),e===n&&t===n?(e=0,t=1):(e=pa(e),t===n?(t=e,e=0):t=pa(t)),e>t){var i=e;e=t,t=i}if(r||e%1||t%1){var o=En();return wn(e+o*(t-e+dt("1e-"+((o+"").length-1))),t)}return Gr(e,t)},zn.reduce=function(e,t,n){var r=Ws(e)?Bt:Gt,i=arguments.length<3;return r(e,lo(t,4),n,i,fr)},zn.reduceRight=function(e,t,n){var r=Ws(e)?Ut:Gt,i=arguments.length<3;return r(e,lo(t,4),n,i,pr)},zn.repeat=function(e,t,r){return t=(r?Ao(e,t,r):t===n)?1:ga(t),Yr(ba(e),t)},zn.replace=function(){var e=arguments,t=ba(e[0]);return e.length<3?t:t.replace(e[1],e[2])},zn.result=function(e,t,r){var i=-1,o=(t=wi(t,e)).length;for(o||(o=1,e=n);++i<o;){var s=null==e?n:e[Uo(t[i])];s===n&&(i=o,s=r),e=Js(s)?s.call(e):s}return e},zn.round=Ec,zn.runInContext=e,zn.sample=function(e){return(Ws(e)?Jn:Jr)(e)},zn.size=function(e){if(null==e)return 0;if(Ks(e))return ca(e)?fn(e):e.length;var t=mo(e);return t==k||t==T?e.size:Br(e).length},zn.snakeCase=Za,zn.some=function(e,t,r){var i=Ws(e)?jt:oi;return r&&Ao(e,t,r)&&(t=n),i(e,lo(t,3))},zn.sortedIndex=function(e,t){return si(e,t)},zn.sortedIndexBy=function(e,t,n){return ai(e,t,lo(n,2))},zn.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var r=si(e,t);if(r<n&&zs(e[r],t))return r}return-1},zn.sortedLastIndex=function(e,t){return si(e,t,!0)},zn.sortedLastIndexBy=function(e,t,n){return ai(e,t,lo(n,2),!0)},zn.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var n=si(e,t,!0)-1;if(zs(e[n],t))return n}return-1},zn.startCase=Ga,zn.startsWith=function(e,t,n){return e=ba(e),n=null==n?0:cr(ga(n),0,e.length),t=ui(t),e.slice(n,n+t.length)==t},zn.subtract=Cc,zn.sum=function(e){return e&&e.length?Yt(e,ic):0},zn.sumBy=function(e,t){return e&&e.length?Yt(e,lo(t,2)):0},zn.template=function(e,t,r){var i=zn.templateSettings;r&&Ao(e,t,r)&&(t=n),e=ba(e),t=_a({},t,i,Xi);var o,s,a=_a({},t.imports,i.imports,Xi),c=Pa(a),l=en(a,c),u=0,d=t.interpolate||_e,h="__p += '",f=Ie((t.escape||_e).source+"|"+d.source+"|"+(d===ee?pe:_e).source+"|"+(t.evaluate||_e).source+"|$","g"),p="//# sourceURL="+(Be.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++at+"]")+"\n";e.replace(f,(function(t,n,r,i,a,c){return r||(r=i),h+=e.slice(u,c).replace(Ee,an),n&&(o=!0,h+="' +\n__e("+n+") +\n'"),a&&(s=!0,h+="';\n"+a+";\n__p += '"),r&&(h+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),u=c+t.length,t})),h+="';\n";var g=Be.call(t,"variable")&&t.variable;if(g){if(he.test(g))throw new ke("Invalid `variable` option passed into `_.template`")}else h="with (obj) {\n"+h+"\n}\n";h=(s?h.replace(W,""):h).replace(V,"$1").replace(K,"$1;"),h="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(s?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var m=Xa((function(){return Se(c,p+"return "+h).apply(n,l)}));if(m.source=h,Qs(m))throw m;return m},zn.times=function(e,t){if((e=ga(e))<1||e>h)return[];var n=p,r=wn(e,p);t=lo(t),e-=p;for(var i=Qt(r,t);++n<e;)t(n);return i},zn.toFinite=pa,zn.toInteger=ga,zn.toLength=ma,zn.toLower=function(e){return ba(e).toLowerCase()},zn.toNumber=ya,zn.toSafeInteger=function(e){return e?cr(ga(e),-h,h):0===e?e:0},zn.toString=ba,zn.toUpper=function(e){return ba(e).toUpperCase()},zn.trim=function(e,t,r){if((e=ba(e))&&(r||t===n))return Jt(e);if(!e||!(t=ui(t)))return e;var i=pn(e),o=pn(t);return _i(i,nn(i,o),rn(i,o)+1).join("")},zn.trimEnd=function(e,t,r){if((e=ba(e))&&(r||t===n))return e.slice(0,gn(e)+1);if(!e||!(t=ui(t)))return e;var i=pn(e);return _i(i,0,rn(i,pn(t))+1).join("")},zn.trimStart=function(e,t,r){if((e=ba(e))&&(r||t===n))return e.replace(se,"");if(!e||!(t=ui(t)))return e;var i=pn(e);return _i(i,nn(i,pn(t))).join("")},zn.truncate=function(e,t){var r=30,i="...";if(ta(t)){var o="separator"in t?t.separator:o;r="length"in t?ga(t.length):r,i="omission"in t?ui(t.omission):i}var s=(e=ba(e)).length;if(cn(e)){var a=pn(e);s=a.length}if(r>=s)return e;var c=r-fn(i);if(c<1)return i;var l=a?_i(a,0,c).join(""):e.slice(0,c);if(o===n)return l+i;if(a&&(c+=l.length-c),sa(o)){if(e.slice(c).search(o)){var u,d=l;for(o.global||(o=Ie(o.source,ba(ge.exec(o))+"g")),o.lastIndex=0;u=o.exec(d);)var h=u.index;l=l.slice(0,h===n?c:h)}}else if(e.indexOf(ui(o),c)!=c){var f=l.lastIndexOf(o);f>-1&&(l=l.slice(0,f))}return l+i},zn.unescape=function(e){return(e=ba(e))&&Y.test(e)?e.replace(Z,mn):e},zn.uniqueId=function(e){var t=++Ue;return ba(e)+t},zn.upperCase=Ya,zn.upperFirst=Qa,zn.each=bs,zn.eachRight=ws,zn.first=Ko,cc(zn,function(){var e={};return Ar(zn,(function(t,n){Be.call(zn.prototype,n)||(e[n]=t)})),e}(),{chain:!1}),zn.VERSION="4.17.21",It(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){zn[e].placeholder=zn})),It(["drop","take"],(function(e,t){Wn.prototype[e]=function(r){r=r===n?1:bn(ga(r),0);var i=this.__filtered__&&!t?new Wn(this):this.clone();return i.__filtered__?i.__takeCount__=wn(r,i.__takeCount__):i.__views__.push({size:wn(r,p),type:e+(i.__dir__<0?"Right":"")}),i},Wn.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),It(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=1==n||3==n;Wn.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:lo(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),It(["head","last"],(function(e,t){var n="take"+(t?"Right":"");Wn.prototype[e]=function(){return this[n](1).value()[0]}})),It(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");Wn.prototype[e]=function(){return this.__filtered__?new Wn(this):this[n](1)}})),Wn.prototype.compact=function(){return this.filter(ic)},Wn.prototype.find=function(e){return this.filter(e).head()},Wn.prototype.findLast=function(e){return this.reverse().find(e)},Wn.prototype.invokeMap=Qr((function(e,t){return"function"==typeof e?new Wn(this):this.map((function(n){return Rr(n,e,t)}))})),Wn.prototype.reject=function(e){return this.filter(Ds(lo(e)))},Wn.prototype.slice=function(e,t){e=ga(e);var r=this;return r.__filtered__&&(e>0||t<0)?new Wn(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),t!==n&&(r=(t=ga(t))<0?r.dropRight(-t):r.take(t-e)),r)},Wn.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wn.prototype.toArray=function(){return this.take(p)},Ar(Wn.prototype,(function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),o=zn[i?"take"+("last"==t?"Right":""):t],s=i||/^find/.test(t);o&&(zn.prototype[t]=function(){var t=this.__wrapped__,a=i?[1]:arguments,c=t instanceof Wn,l=a[0],u=c||Ws(t),d=function(e){var t=o.apply(zn,Dt([e],a));return i&&h?t[0]:t};u&&r&&"function"==typeof l&&1!=l.length&&(c=u=!1);var h=this.__chain__,f=!!this.__actions__.length,p=s&&!h,g=c&&!f;if(!s&&u){t=g?t:new Wn(this);var m=e.apply(t,a);return m.__actions__.push({func:ps,args:[d],thisArg:n}),new Hn(m,h)}return p&&g?e.apply(this,a):(m=this.thru(d),p?i?m.value()[0]:m.value():m)})})),It(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Pe[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);zn.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(Ws(i)?i:[],e)}return this[n]((function(n){return t.apply(Ws(n)?n:[],e)}))}})),Ar(Wn.prototype,(function(e,t){var n=zn[t];if(n){var r=n.name+"";Be.call(Pn,r)||(Pn[r]=[]),Pn[r].push({name:t,func:n})}})),Pn[zi(n,2).name]=[{name:"wrapper",func:n}],Wn.prototype.clone=function(){var e=new Wn(this.__wrapped__);return e.__actions__=Ti(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ti(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ti(this.__views__),e},Wn.prototype.reverse=function(){if(this.__filtered__){var e=new Wn(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wn.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=Ws(e),r=t<0,i=n?e.length:0,o=function(e,t,n){for(var r=-1,i=n.length;++r<i;){var o=n[r],s=o.size;switch(o.type){case"drop":e+=s;break;case"dropRight":t-=s;break;case"take":t=wn(t,e+s);break;case"takeRight":e=bn(e,t-s)}}return{start:e,end:t}}(0,i,this.__views__),s=o.start,a=o.end,c=a-s,l=r?a:s-1,u=this.__iteratees__,d=u.length,h=0,f=wn(c,this.__takeCount__);if(!n||!r&&i==c&&f==c)return gi(e,this.__actions__);var p=[];e:for(;c--&&h<f;){for(var g=-1,m=e[l+=t];++g<d;){var y=u[g],v=y.iteratee,b=y.type,w=v(m);if(2==b)m=w;else if(!w){if(1==b)continue e;break e}}p[h++]=m}return p},zn.prototype.at=gs,zn.prototype.chain=function(){return fs(this)},zn.prototype.commit=function(){return new Hn(this.value(),this.__chain__)},zn.prototype.next=function(){this.__values__===n&&(this.__values__=fa(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?n:this.__values__[this.__index__++]}},zn.prototype.plant=function(e){for(var t,r=this;r instanceof qn;){var i=Fo(r);i.__index__=0,i.__values__=n,t?o.__wrapped__=i:t=i;var o=i;r=r.__wrapped__}return o.__wrapped__=e,t},zn.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Wn){var t=e;return this.__actions__.length&&(t=new Wn(this)),(t=t.reverse()).__actions__.push({func:ps,args:[ts],thisArg:n}),new Hn(t,this.__chain__)}return this.thru(ts)},zn.prototype.toJSON=zn.prototype.valueOf=zn.prototype.value=function(){return gi(this.__wrapped__,this.__actions__)},zn.prototype.first=zn.prototype.head,Xe&&(zn.prototype[Xe]=function(){return this}),zn}();yt?((yt.exports=yn)._=yn,mt._=yn):gt._=yn}).call(iM)}(oM,oM.exports);var sM=Object.defineProperty,aM=Object.defineProperties,cM=Object.getOwnPropertyDescriptors,lM=Object.getOwnPropertySymbols,uM=Object.prototype.hasOwnProperty,dM=Object.prototype.propertyIsEnumerable,hM=(e,t,n)=>t in e?sM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fM=(e,t)=>{for(var n in t||(t={}))uM.call(t,n)&&hM(e,n,t[n]);if(lM)for(var n of lM(t))dM.call(t,n)&&hM(e,n,t[n]);return e},pM=(e,t)=>aM(e,cM(t));function gM(e,t,n){var r;const i=Sg(e);return(null==(r=t.rpcMap)?void 0:r[i.reference])||`https://rpc.walletconnect.com/v1/?chainId=${i.namespace}:${i.reference}&projectId=${n}`}function mM(e){return e.includes(":")?e.split(":")[1]:e}function yM(e){return e.map((e=>`${e.split(":")[0]}:${e.split(":")[1]}`))}function vM(e={},t={}){const n=bM(e),r=bM(t);return oM.exports.merge(n,r)}function bM(e){var t,n,r,i;const o={};if(!OA(e))return o;for(const[s,a]of Object.entries(e)){const e=kA(s)?[s]:a.chains,c=a.methods||[],l=a.events||[],u=a.rpcMap||{},d=SA(s);o[d]=pM(fM(fM({},o[d]),a),{chains:em(e,null==(t=o[d])?void 0:t.chains),methods:em(c,null==(n=o[d])?void 0:n.methods),events:em(l,null==(r=o[d])?void 0:r.events),rpcMap:fM(fM({},u),null==(i=o[d])?void 0:i.rpcMap)})}return o}function wM(e){return e.includes(":")?e.split(":")[2]:e}function AM(e){const t={};for(const[n,r]of Object.entries(e)){const e=r.methods||[],i=r.events||[],o=r.accounts||[],s=kA(n)?[n]:r.chains?r.chains:yM(r.accounts);t[n]={chains:s,methods:e,events:i,accounts:o}}return t}function _M(e){return"number"==typeof e?e:e.includes("0x")?parseInt(e,16):(e=e.includes(":")?e.split(":")[1]:e,isNaN(Number(e))?e:Number(e))}const EM={},CM=e=>EM[e],kM=(e,t)=>{EM[e]=t};class SM{constructor(e){this.name="polkadot",this.namespace=e.namespace,this.events=CM("events"),this.client=CM("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(rM,`${this.name}:${e}`)}getAccounts(){const e=this.namespace.accounts;return e&&e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2]))||[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var n;const r=mM(t);e[r]=this.createHttpProvider(r,null==(n=this.namespace.rpcMap)?void 0:n[t])})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const n=this.createHttpProvider(e,t);n&&(this.httpProviders[e]=n)}createHttpProvider(e,t){const n=t||gM(e,this.namespace,this.client.core.projectId);if(!n)throw new Error(`No RPC url provided for chainId: ${e}`);return new QE(new eM(n,CM("disableProviderPing")))}}class xM{constructor(e){this.name="eip155",this.namespace=e.namespace,this.events=CM("events"),this.client=CM("client"),this.httpProviders=this.createHttpProviders(),this.chainId=parseInt(this.getDefaultChain())}async request(e){switch(e.request.method){case"eth_requestAccounts":case"eth_accounts":return this.getAccounts();case"wallet_switchEthereumChain":return await this.handleSwitchChain(e);case"eth_chainId":return parseInt(this.getDefaultChain())}return this.namespace.methods.includes(e.request.method)?await this.client.request(e):this.getHttpProvider().request(e.request)}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(parseInt(e),t),this.chainId=parseInt(e),this.events.emit(rM,`${this.name}:${e}`)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId.toString();if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}createHttpProvider(e,t){const n=t||gM(`${this.name}:${e}`,this.namespace,this.client.core.projectId);if(!n)throw new Error(`No RPC url provided for chainId: ${e}`);return new QE(new eM(n,CM("disableProviderPing")))}setHttpProvider(e,t){const n=this.createHttpProvider(e,t);n&&(this.httpProviders[e]=n)}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var n;const r=parseInt(mM(t));e[r]=this.createHttpProvider(r,null==(n=this.namespace.rpcMap)?void 0:n[t])})),e}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}getHttpProvider(){const e=this.chainId,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}async handleSwitchChain(e){var t,n;let r=e.request.params?null==(t=e.request.params[0])?void 0:t.chainId:"0x0";r=r.startsWith("0x")?r:`0x${r}`;const i=parseInt(r,16);if(this.isChainApproved(i))this.setDefaultChain(`${i}`);else{if(!this.namespace.methods.includes("wallet_switchEthereumChain"))throw new Error(`Failed to switch to chain 'eip155:${i}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);await this.client.request({topic:e.topic,request:{method:e.request.method,params:[{chainId:r}]},chainId:null==(n=this.namespace.chains)?void 0:n[0]}),this.setDefaultChain(`${i}`)}return null}isChainApproved(e){return this.namespace.chains.includes(`${this.name}:${e}`)}}class MM{constructor(e){this.name="solana",this.namespace=e.namespace,this.events=CM("events"),this.client=CM("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(rM,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var n;const r=mM(t);e[r]=this.createHttpProvider(r,null==(n=this.namespace.rpcMap)?void 0:n[t])})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const n=this.createHttpProvider(e,t);n&&(this.httpProviders[e]=n)}createHttpProvider(e,t){const n=t||gM(e,this.namespace,this.client.core.projectId);if(!n)throw new Error(`No RPC url provided for chainId: ${e}`);return new QE(new eM(n,CM("disableProviderPing")))}}class IM{constructor(e){this.name="cosmos",this.namespace=e.namespace,this.events=CM("events"),this.client=CM("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(rM,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var n;const r=mM(t);e[r]=this.createHttpProvider(r,null==(n=this.namespace.rpcMap)?void 0:n[t])})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const n=this.createHttpProvider(e,t);n&&(this.httpProviders[e]=n)}createHttpProvider(e,t){const n=t||gM(e,this.namespace,this.client.core.projectId);if(!n)throw new Error(`No RPC url provided for chainId: ${e}`);return new QE(new eM(n,CM("disableProviderPing")))}}class TM{constructor(e){this.name="cip34",this.namespace=e.namespace,this.events=CM("events"),this.client=CM("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(rM,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{const n=this.getCardanoRPCUrl(t),r=mM(t);e[r]=this.createHttpProvider(r,n)})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}getCardanoRPCUrl(e){const t=this.namespace.rpcMap;if(t)return t[e]}setHttpProvider(e,t){const n=this.createHttpProvider(e,t);n&&(this.httpProviders[e]=n)}createHttpProvider(e,t){const n=t||this.getCardanoRPCUrl(e);if(!n)throw new Error(`No RPC url provided for chainId: ${e}`);return new QE(new eM(n,CM("disableProviderPing")))}}class RM{constructor(e){this.name="elrond",this.namespace=e.namespace,this.events=CM("events"),this.client=CM("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(rM,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var n;const r=mM(t);e[r]=this.createHttpProvider(r,null==(n=this.namespace.rpcMap)?void 0:n[t])})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const n=this.createHttpProvider(e,t);n&&(this.httpProviders[e]=n)}createHttpProvider(e,t){const n=t||gM(e,this.namespace,this.client.core.projectId);if(!n)throw new Error(`No RPC url provided for chainId: ${e}`);return new QE(new eM(n,CM("disableProviderPing")))}}class PM{constructor(e){this.name="multiversx",this.namespace=e.namespace,this.events=CM("events"),this.client=CM("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(rM,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2])))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var n;const r=mM(t);e[r]=this.createHttpProvider(r,null==(n=this.namespace.rpcMap)?void 0:n[t])})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const n=this.createHttpProvider(e,t);n&&(this.httpProviders[e]=n)}createHttpProvider(e,t){const n=t||gM(e,this.namespace,this.client.core.projectId);if(!n)throw new Error(`No RPC url provided for chainId: ${e}`);return new QE(new eM(n,CM("disableProviderPing")))}}class OM{constructor(e){this.name="near",this.namespace=e.namespace,this.events=CM("events"),this.client=CM("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){if(this.chainId=e,!this.httpProviders[e]){const n=t||gM(`${this.name}:${e}`,this.namespace);if(!n)throw new Error(`No RPC url provided for chainId: ${e}`);this.setHttpProvider(e,n)}this.events.emit(rM,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e&&e.filter((e=>e.split(":")[1]===this.chainId.toString())).map((e=>e.split(":")[2]))||[]}createHttpProviders(){const e={};return this.namespace.chains.forEach((t=>{var n;e[t]=this.createHttpProvider(t,null==(n=this.namespace.rpcMap)?void 0:n[t])})),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const n=this.createHttpProvider(e,t);n&&(this.httpProviders[e]=n)}createHttpProvider(e,t){const n=t||gM(e,this.namespace);return typeof n>"u"?void 0:new QE(new eM(n,CM("disableProviderPing")))}}var NM=Object.defineProperty,LM=Object.defineProperties,DM=Object.getOwnPropertyDescriptors,BM=Object.getOwnPropertySymbols,UM=Object.prototype.hasOwnProperty,jM=Object.prototype.propertyIsEnumerable,FM=(e,t,n)=>t in e?NM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zM=(e,t)=>{for(var n in t||(t={}))UM.call(t,n)&&FM(e,n,t[n]);if(BM)for(var n of BM(t))jM.call(t,n)&&FM(e,n,t[n]);return e},$M=(e,t)=>LM(e,DM(t));class qM{constructor(e){this.events=new(qp()),this.rpcProviders={},this.shouldAbortPairingAttempt=!1,this.maxPairingAttempts=10,this.disableProviderPing=!1,this.providerOpts=e,this.logger=typeof e?.logger<"u"&&"string"!=typeof e?.logger?e.logger:(0,B_.h6)((0,B_.iP)({level:e?.logger||tM})),this.disableProviderPing=e?.disableProviderPing||!1}static async init(e){const t=new qM(e);return await t.initialize(),t}async request(e,t,n){const[r,i]=this.validateChain(t);if(!this.session)throw new Error("Please call connect() before request()");return await this.getProvider(r).request({request:zM({},e),chainId:`${r}:${i}`,topic:this.session.topic,expiry:n})}sendAsync(e,t,n,r){const i=(new Date).getTime();this.request(e,n,r).then((e=>t(null,BE(i,e)))).catch((e=>t(e,void 0)))}async enable(){if(!this.client)throw new Error("Sign Client not initialized");return this.session||await this.connect({namespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties}),await this.requestAccounts()}async disconnect(){var e;if(!this.session)throw new Error("Please call connect() before enable()");await this.client.disconnect({topic:null==(e=this.session)?void 0:e.topic,reason:RA("USER_DISCONNECTED")}),await this.cleanup()}async connect(e){if(!this.client)throw new Error("Sign Client not initialized");if(this.setNamespaces(e),await this.cleanupPendingPairings(),!e.skipPairing)return await this.pair(e.pairingTopic)}async authenticate(e){if(!this.client)throw new Error("Sign Client not initialized");this.setNamespaces(e),await this.cleanupPendingPairings();const{uri:t,response:n}=await this.client.authenticate(e);t&&(this.uri=t,this.events.emit("display_uri",t));const r=await n();if(this.session=r.session,this.session){const e=AM(this.session.namespaces);this.namespaces=vM(this.namespaces,e),this.persist("namespaces",this.namespaces),this.onConnect()}return r}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}removeListener(e,t){this.events.removeListener(e,t)}off(e,t){this.events.off(e,t)}get isWalletConnect(){return!0}async pair(e){this.shouldAbortPairingAttempt=!1;let t=0;do{if(this.shouldAbortPairingAttempt)throw new Error("Pairing aborted");if(t>=this.maxPairingAttempts)throw new Error("Max auto pairing attempts reached");const{uri:n,approval:r}=await this.client.connect({pairingTopic:e,requiredNamespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties});n&&(this.uri=n,this.events.emit("display_uri",n)),await r().then((e=>{this.session=e;const t=AM(e.namespaces);this.namespaces=vM(this.namespaces,t),this.persist("namespaces",this.namespaces)})).catch((e=>{if(e.message!==gx)throw e;t++}))}while(!this.session);return this.onConnect(),this.session}setDefaultChain(e,t){try{if(!this.session)return;const[n,r]=this.validateChain(e);this.getProvider(n).setDefaultChain(r,t)}catch(e){if(!/Please call connect/.test(e.message))throw e}}async cleanupPendingPairings(e={}){this.logger.info("Cleaning up inactive pairings...");const t=this.client.pairing.getAll();if(PA(t)){for(const n of t)e.deletePairings?this.client.core.expirer.set(n.topic,0):await this.client.core.relayer.subscriber.unsubscribe(n.topic);this.logger.info(`Inactive pairings cleared: ${t.length}`)}}abortPairingAttempt(){this.shouldAbortPairingAttempt=!0}async checkStorage(){if(this.namespaces=await this.getFromStore("namespaces"),this.optionalNamespaces=await this.getFromStore("optionalNamespaces")||{},this.client.session.length){const e=this.client.session.keys.length-1;this.session=this.client.session.get(this.client.session.keys[e]),this.createProviders()}}async initialize(){this.logger.trace("Initialized"),await this.createClient(),await this.checkStorage(),this.registerEventListeners()}async createClient(){this.client=this.providerOpts.client||await zx.init({logger:this.providerOpts.logger||tM,relayUrl:this.providerOpts.relayUrl||"wss://relay.walletconnect.com",projectId:this.providerOpts.projectId,metadata:this.providerOpts.metadata,storageOptions:this.providerOpts.storageOptions,storage:this.providerOpts.storage,name:this.providerOpts.name}),this.logger.trace("SignClient Initialized")}createProviders(){if(!this.client)throw new Error("Sign Client not initialized");if(!this.session)throw new Error("Session not initialized. Please call connect() before enable()");const e=[...new Set(Object.keys(this.session.namespaces).map((e=>SA(e))))];kM("client",this.client),kM("events",this.events),kM("disableProviderPing",this.disableProviderPing),e.forEach((e=>{if(!this.session)return;const t=function(e,t){const n=Object.keys(t.namespaces).filter((t=>t.includes(e)));if(!n.length)return[];const r=[];return n.forEach((e=>{const n=t.namespaces[e].accounts;r.push(...n)})),r}(e,this.session),n=yM(t),r=vM(this.namespaces,this.optionalNamespaces),i=$M(zM({},r[e]),{accounts:t,chains:n});switch(e){case"eip155":this.rpcProviders[e]=new xM({namespace:i});break;case"solana":this.rpcProviders[e]=new MM({namespace:i});break;case"cosmos":this.rpcProviders[e]=new IM({namespace:i});break;case"polkadot":this.rpcProviders[e]=new SM({namespace:i});break;case"cip34":this.rpcProviders[e]=new TM({namespace:i});break;case"elrond":this.rpcProviders[e]=new RM({namespace:i});break;case"multiversx":this.rpcProviders[e]=new PM({namespace:i});break;case"near":this.rpcProviders[e]=new OM({namespace:i})}}))}registerEventListeners(){if(typeof this.client>"u")throw new Error("Sign Client is not initialized");this.client.on("session_ping",(e=>{this.events.emit("session_ping",e)})),this.client.on("session_event",(e=>{const{params:t}=e,{event:n}=t;if("accountsChanged"===n.name){const e=n.data;e&&PA(e)&&this.events.emit("accountsChanged",e.map(wM))}else if("chainChanged"===n.name){const e=t.chainId,n=t.event.data,r=SA(e),i=_M(e)!==_M(n)?`${r}:${_M(n)}`:e;this.onChainChanged(i)}else this.events.emit(n.name,n.data);this.events.emit("session_event",e)})),this.client.on("session_update",(({topic:e,params:t})=>{var n;const{namespaces:r}=t,i=null==(n=this.client)?void 0:n.session.get(e);this.session=$M(zM({},i),{namespaces:r}),this.onSessionUpdate(),this.events.emit("session_update",{topic:e,params:t})})),this.client.on("session_delete",(async e=>{await this.cleanup(),this.events.emit("session_delete",e),this.events.emit("disconnect",$M(zM({},RA("USER_DISCONNECTED")),{data:e.topic}))})),this.on(rM,(e=>{this.onChainChanged(e,!0)}))}getProvider(e){if(!this.rpcProviders[e])throw new Error(`Provider not found: ${e}`);return this.rpcProviders[e]}onSessionUpdate(){Object.keys(this.rpcProviders).forEach((e=>{var t;this.getProvider(e).updateNamespace(null==(t=this.session)?void 0:t.namespaces[e])}))}setNamespaces(e){const{namespaces:t,optionalNamespaces:n,sessionProperties:r}=e;t&&Object.keys(t).length&&(this.namespaces=t),n&&Object.keys(n).length&&(this.optionalNamespaces=n),this.sessionProperties=r,this.persist("namespaces",t),this.persist("optionalNamespaces",n)}validateChain(e){const[t,n]=e?.split(":")||["",""];if(!this.namespaces||!Object.keys(this.namespaces).length)return[t,n];if(t&&!Object.keys(this.namespaces||{}).map((e=>SA(e))).includes(t))throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);if(t&&n)return[t,n];const r=SA(Object.keys(this.namespaces)[0]);return[r,this.rpcProviders[r].getDefaultChain()]}async requestAccounts(){const[e]=this.validateChain();return await this.getProvider(e).requestAccounts()}onChainChanged(e,t=!1){if(!this.namespaces)return;const[n,r]=this.validateChain(e);r&&(t||this.getProvider(n).setDefaultChain(r),this.namespaces[n]?this.namespaces[n].defaultChain=r:this.namespaces[`${n}:${r}`]?this.namespaces[`${n}:${r}`].defaultChain=r:this.namespaces[`${n}:${r}`]={defaultChain:r},this.persist("namespaces",this.namespaces),this.events.emit("chainChanged",r))}onConnect(){this.createProviders(),this.events.emit("connect",{session:this.session})}async cleanup(){this.session=void 0,this.namespaces=void 0,this.optionalNamespaces=void 0,this.sessionProperties=void 0,this.persist("namespaces",void 0),this.persist("optionalNamespaces",void 0),this.persist("sessionProperties",void 0),await this.cleanupPendingPairings({deletePairings:!0})}persist(e,t){this.client.core.storage.setItem(`${nM}/${e}`,t)}async getFromStore(e){return await this.client.core.storage.getItem(`${nM}/${e}`)}}const HM=qM,WM=["eth_sendTransaction","personal_sign"],VM=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_sendCalls","wallet_getCapabilities","wallet_getCallsStatus","wallet_showCallsStatus"],KM=["chainChanged","accountsChanged"],ZM=["chainChanged","accountsChanged","message","disconnect","connect"];var GM=Object.defineProperty,YM=Object.defineProperties,QM=Object.getOwnPropertyDescriptors,JM=Object.getOwnPropertySymbols,XM=Object.prototype.hasOwnProperty,eI=Object.prototype.propertyIsEnumerable,tI=(e,t,n)=>t in e?GM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nI=(e,t)=>{for(var n in t||(t={}))XM.call(t,n)&&tI(e,n,t[n]);if(JM)for(var n of JM(t))eI.call(t,n)&&tI(e,n,t[n]);return e},rI=(e,t)=>YM(e,QM(t));function iI(e){return Number(e[0].split(":")[1])}function oI(e){return`0x${e.toString(16)}`}class sI{constructor(){this.events=new $p.EventEmitter,this.namespace="eip155",this.accounts=[],this.chainId=1,this.STORAGE_KEY="wc@2:ethereum_provider:",this.on=(e,t)=>(this.events.on(e,t),this),this.once=(e,t)=>(this.events.once(e,t),this),this.removeListener=(e,t)=>(this.events.removeListener(e,t),this),this.off=(e,t)=>(this.events.off(e,t),this),this.parseAccount=e=>this.isCompatibleChainId(e)?this.parseAccountId(e).address:e,this.signer={},this.rpc={}}static async init(e){const t=new sI;return await t.initialize(e),t}async request(e,t){return await this.signer.request(e,this.formatChainId(this.chainId),t)}sendAsync(e,t,n){this.signer.sendAsync(e,t,this.formatChainId(this.chainId),n)}get connected(){return!!this.signer.client&&this.signer.client.core.relayer.connected}get connecting(){return!!this.signer.client&&this.signer.client.core.relayer.connecting}async enable(){return this.session||await this.connect(),await this.request({method:"eth_requestAccounts"})}async connect(e){if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts(e);const{required:t,optional:n}=function(e){const{chains:t,optionalChains:n,methods:r,optionalMethods:i,events:o,optionalEvents:s,rpcMap:a}=e;if(!PA(t))throw new Error("Invalid chains");const c={chains:t,methods:r||WM,events:o||KM,rpcMap:nI({},t.length?{[iI(t)]:a[iI(t)]}:{})},l=o?.filter((e=>!KM.includes(e))),u=r?.filter((e=>!WM.includes(e)));if(!(n||s||i||null!=l&&l.length||null!=u&&u.length))return{required:t.length?c:void 0};const d={chains:[...new Set(l?.length&&u?.length||!n?c.chains.concat(n||[]):n)],methods:[...new Set(c.methods.concat(null!=i&&i.length?i:VM))],events:[...new Set(c.events.concat(null!=s&&s.length?s:ZM))],rpcMap:a};return{required:t.length?c:void 0,optional:n.length?d:void 0}}(this.rpc);try{const r=await new Promise((async(r,i)=>{var o;this.rpc.showQrModal&&(null==(o=this.modal)||o.subscribeModal((e=>{!e.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),i(new Error("Connection request reset. Please try again.")))}))),await this.signer.connect(rI(nI({namespaces:nI({},t&&{[this.namespace]:t})},n&&{optionalNamespaces:{[this.namespace]:n}}),{pairingTopic:e?.pairingTopic})).then((e=>{r(e)})).catch((e=>{i(new Error(e.message))}))}));if(!r)return;const i=xg(r.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:i),this.setAccounts(i),this.events.emit("connect",{chainId:oI(this.chainId)})}catch(e){throw this.signer.logger.error(e),e}finally{this.modal&&this.modal.closeModal()}}async authenticate(e){if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts({chains:e?.chains});try{const t=await new Promise((async(t,n)=>{var r;this.rpc.showQrModal&&(null==(r=this.modal)||r.subscribeModal((e=>{!e.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),n(new Error("Connection request reset. Please try again.")))}))),await this.signer.authenticate(rI(nI({},e),{chains:this.rpc.chains})).then((e=>{t(e)})).catch((e=>{n(new Error(e.message))}))})),n=t.session;if(n){const e=xg(n.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:e),this.setAccounts(e),this.events.emit("connect",{chainId:oI(this.chainId)})}return t}catch(e){throw this.signer.logger.error(e),e}finally{this.modal&&this.modal.closeModal()}}async disconnect(){this.session&&await this.signer.disconnect(),this.reset()}get isWalletConnect(){return!0}get session(){return this.signer.session}registerEventListeners(){this.signer.on("session_event",(e=>{const{params:t}=e,{event:n}=t;"accountsChanged"===n.name?(this.accounts=this.parseAccounts(n.data),this.events.emit("accountsChanged",this.accounts)):"chainChanged"===n.name?this.setChainId(this.formatChainId(n.data)):this.events.emit(n.name,n.data),this.events.emit("session_event",e)})),this.signer.on("chainChanged",(e=>{const t=parseInt(e);this.chainId=t,this.events.emit("chainChanged",oI(this.chainId)),this.persist()})),this.signer.on("session_update",(e=>{this.events.emit("session_update",e)})),this.signer.on("session_delete",(e=>{this.reset(),this.events.emit("session_delete",e),this.events.emit("disconnect",rI(nI({},RA("USER_DISCONNECTED")),{data:e.topic,name:"USER_DISCONNECTED"}))})),this.signer.on("display_uri",(e=>{var t,n;this.rpc.showQrModal&&(null==(t=this.modal)||t.closeModal(),null==(n=this.modal)||n.openModal({uri:e})),this.events.emit("display_uri",e)}))}switchEthereumChain(e){this.request({method:"wallet_switchEthereumChain",params:[{chainId:e.toString(16)}]})}isCompatibleChainId(e){return"string"==typeof e&&e.startsWith(`${this.namespace}:`)}formatChainId(e){return`${this.namespace}:${e}`}parseChainId(e){return Number(e.split(":")[1])}setChainIds(e){const t=e.filter((e=>this.isCompatibleChainId(e))).map((e=>this.parseChainId(e)));t.length&&(this.chainId=t[0],this.events.emit("chainChanged",oI(this.chainId)),this.persist())}setChainId(e){if(this.isCompatibleChainId(e)){const t=this.parseChainId(e);this.chainId=t,this.switchEthereumChain(t)}}parseAccountId(e){const[t,n,r]=e.split(":");return{chainId:`${t}:${n}`,address:r}}setAccounts(e){this.accounts=e.filter((e=>this.parseChainId(this.parseAccountId(e).chainId)===this.chainId)).map((e=>this.parseAccountId(e).address)),this.events.emit("accountsChanged",this.accounts)}getRpcConfig(e){var t,n;const r=null!=(t=e?.chains)?t:[],i=null!=(n=e?.optionalChains)?n:[],o=r.concat(i);if(!o.length)throw new Error("No chains specified in either `chains` or `optionalChains`");const s=r.length?e?.methods||WM:[],a=r.length?e?.events||KM:[],c=e?.optionalMethods||[],l=e?.optionalEvents||[],u=e?.rpcMap||this.buildRpcMap(o,e.projectId),d=e?.qrModalOptions||void 0;return{chains:r?.map((e=>this.formatChainId(e))),optionalChains:i.map((e=>this.formatChainId(e))),methods:s,events:a,optionalMethods:c,optionalEvents:l,rpcMap:u,showQrModal:!(null==e||!e.showQrModal),qrModalOptions:d,projectId:e.projectId,metadata:e.metadata}}buildRpcMap(e,t){const n={};return e.forEach((e=>{n[e]=this.getRpcUrl(e,t)})),n}async initialize(e){if(this.rpc=this.getRpcConfig(e),this.chainId=this.rpc.chains.length?iI(this.rpc.chains):iI(this.rpc.optionalChains),this.signer=await HM.init({projectId:this.rpc.projectId,metadata:this.rpc.metadata,disableProviderPing:e.disableProviderPing,relayUrl:e.relayUrl,storageOptions:e.storageOptions}),this.registerEventListeners(),await this.loadPersistedSession(),this.rpc.showQrModal){let e;try{const{WalletConnectModal:t}=await n.e(715).then(n.bind(n,715));e=t}catch{throw new Error("To use QR modal, please install @walletconnect/modal package")}if(e)try{this.modal=new e(nI({projectId:this.rpc.projectId},this.rpc.qrModalOptions))}catch(e){throw this.signer.logger.error(e),new Error("Could not generate WalletConnectModal Instance")}}}loadConnectOpts(e){if(!e)return;const{chains:t,optionalChains:n,rpcMap:r}=e;t&&PA(t)&&(this.rpc.chains=t.map((e=>this.formatChainId(e))),t.forEach((e=>{this.rpc.rpcMap[e]=r?.[e]||this.getRpcUrl(e)}))),n&&PA(n)&&(this.rpc.optionalChains=[],this.rpc.optionalChains=n?.map((e=>this.formatChainId(e))),n.forEach((e=>{this.rpc.rpcMap[e]=r?.[e]||this.getRpcUrl(e)})))}getRpcUrl(e,t){var n;return(null==(n=this.rpc.rpcMap)?void 0:n[e])||`https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${t||this.rpc.projectId}`}async loadPersistedSession(){if(this.session)try{const e=await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),t=this.session.namespaces[`${this.namespace}:${e}`]?this.session.namespaces[`${this.namespace}:${e}`]:this.session.namespaces[this.namespace];this.setChainIds(e?[this.formatChainId(e)]:t?.accounts),this.setAccounts(t?.accounts)}catch(e){this.signer.logger.error("Failed to load persisted session, clearing state..."),this.signer.logger.error(e),await this.disconnect().catch((e=>this.signer.logger.warn(e)))}}reset(){this.chainId=1,this.accounts=[]}persist(){this.session&&this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`,this.chainId)}parseAccounts(e){return"string"==typeof e||e instanceof String?[this.parseAccount(e)]:e.map((e=>this.parseAccount(e)))}}const aI=BigInt(-1),cI=BigInt(0),lI=BigInt(1),uI=BigInt(5),dI={};let hI="0000";for(;hI.length<80;)hI+=hI;function fI(e){let t=hI;for(;t.length<e;)t+=t;return BigInt("1"+t.substring(0,e))}function pI(e,t,n){const r=BigInt(t.width);if(t.signed){const t=lI<<r-lI;p(null==n||e>=-t&&e<t,"overflow","NUMERIC_FAULT",{operation:n,fault:"overflow",value:e}),e=e>cI?N(D(e,r),r):-N(D(-e,r),r)}else{const t=lI<<r;p(null==n||e>=0&&e<t,"overflow","NUMERIC_FAULT",{operation:n,fault:"overflow",value:e}),e=(e%t+t)%t&t-lI}return e}function gI(e){"number"==typeof e&&(e=`fixed128x${e}`);let t=!0,n=128,r=18;if("string"==typeof e)if("fixed"===e);else if("ufixed"===e)t=!1;else{const i=e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);g(i,"invalid fixed format","format",e),t="u"!==i[1],n=parseInt(i[2]),r=parseInt(i[3])}else if(e){const i=e,o=(e,t,n)=>null==i[e]?n:(g(typeof i[e]===t,"invalid fixed format ("+e+" not "+t+")","format."+e,i[e]),i[e]);t=o("signed","boolean",t),n=o("width","number",n),r=o("decimals","number",r)}g(n%8==0,"invalid FixedNumber width (not byte aligned)","format.width",n),g(r<=80,"invalid FixedNumber decimals (too large)","format.decimals",r);return{signed:t,width:n,decimals:r,name:(t?"":"u")+"fixed"+String(n)+"x"+String(r)}}class mI{format;#ht;#ft;#pt;_value;constructor(e,t,n){v(e,dI,"FixedNumber"),this.#ft=t,this.#ht=n;const r=function(e,t){let n="";e<cI&&(n="-",e*=aI);let r=e.toString();if(0===t)return n+r;for(;r.length<=t;)r=hI+r;const i=r.length-t;for(r=r.substring(0,i)+"."+r.substring(i);"0"===r[0]&&"."!==r[1];)r=r.substring(1);for(;"0"===r[r.length-1]&&"."!==r[r.length-2];)r=r.substring(0,r.length-1);return n+r}(t,n.decimals);l(this,{format:n.name,_value:r}),this.#pt=fI(n.decimals)}get signed(){return this.#ht.signed}get width(){return this.#ht.width}get decimals(){return this.#ht.decimals}get value(){return this.#ft}#gt(e){g(this.format===e.format,"incompatible format; use fixedNumber.toFormat","other",e)}#mt(e,t){return e=pI(e,this.#ht,t),new mI(dI,e,this.#ht)}#yt(e,t){return this.#gt(e),this.#mt(this.#ft+e.#ft,t)}addUnsafe(e){return this.#yt(e)}add(e){return this.#yt(e,"add")}#vt(e,t){return this.#gt(e),this.#mt(this.#ft-e.#ft,t)}subUnsafe(e){return this.#vt(e)}sub(e){return this.#vt(e,"sub")}#bt(e,t){return this.#gt(e),this.#mt(this.#ft*e.#ft/this.#pt,t)}mulUnsafe(e){return this.#bt(e)}mul(e){return this.#bt(e,"mul")}mulSignal(e){this.#gt(e);const t=this.#ft*e.#ft;return p(t%this.#pt===cI,"precision lost during signalling mul","NUMERIC_FAULT",{operation:"mulSignal",fault:"underflow",value:this}),this.#mt(t/this.#pt,"mulSignal")}#wt(e,t){return p(e.#ft!==cI,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),this.#gt(e),this.#mt(this.#ft*this.#pt/e.#ft,t)}divUnsafe(e){return this.#wt(e)}div(e){return this.#wt(e,"div")}divSignal(e){p(e.#ft!==cI,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),this.#gt(e);const t=this.#ft*this.#pt;return p(t%e.#ft===cI,"precision lost during signalling div","NUMERIC_FAULT",{operation:"divSignal",fault:"underflow",value:this}),this.#mt(t/e.#ft,"divSignal")}cmp(e){let t=this.value,n=e.value;const r=this.decimals-e.decimals;return r>0?n*=fI(r):r<0&&(t*=fI(-r)),t<n?-1:t>n?1:0}eq(e){return 0===this.cmp(e)}lt(e){return this.cmp(e)<0}lte(e){return this.cmp(e)<=0}gt(e){return this.cmp(e)>0}gte(e){return this.cmp(e)>=0}floor(){let e=this.#ft;return this.#ft<cI&&(e-=this.#pt-lI),e=this.#ft/this.#pt*this.#pt,this.#mt(e,"floor")}ceiling(){let e=this.#ft;return this.#ft>cI&&(e+=this.#pt-lI),e=this.#ft/this.#pt*this.#pt,this.#mt(e,"ceiling")}round(e){if(null==e&&(e=0),e>=this.decimals)return this;const t=this.decimals-e,n=uI*fI(t-1);let r=this.value+n;const i=fI(t);return r=r/i*i,pI(r,this.#ht,"round"),new mI(dI,r,this.#ht)}isZero(){return this.#ft===cI}isNegative(){return this.#ft<cI}toString(){return this._value}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(e){return mI.fromString(this.toString(),e)}static fromValue(e,t,n){const r=null==t?0:z(t),i=gI(n);let o=B(e,"value");const s=r-i.decimals;if(s>0){const t=fI(s);p(o%t===cI,"value loses precision for format","NUMERIC_FAULT",{operation:"fromValue",fault:"underflow",value:e}),o/=t}else s<0&&(o*=fI(-s));return pI(o,i,"fromValue"),new mI(dI,o,i)}static fromString(e,t){const n=e.match(/^(-?)([0-9]*)\.?([0-9]*)$/);g(n&&n[2].length+n[3].length>0,"invalid FixedNumber string value","value",e);const r=gI(t);let i=n[2]||"0",o=n[3]||"";for(;o.length<r.decimals;)o+=hI;p(o.substring(r.decimals).match(/^0*$/),"too many decimals for format","NUMERIC_FAULT",{operation:"fromString",fault:"underflow",value:e}),o=o.substring(0,r.decimals);const s=BigInt(n[1]+i+o);return pI(s,r,"fromString"),new mI(dI,s,r)}static fromBytes(e,t){let n=F(w(e,"value"));const r=gI(t);return r.signed&&(n=N(n,r.width)),pI(n,r,"fromBytes"),new mI(dI,n,r)}}const yI=["wei","kwei","mwei","gwei","szabo","finney","ether"];function vI(e,t){let n=18;if("string"==typeof t){const e=yI.indexOf(t);g(e>=0,"invalid unit","unit",t),n=3*e}else null!=t&&(n=z(t,"unit"));return mI.fromValue(e,n,{decimals:n,width:512}).toString()}function bI(e,t){g("string"==typeof e,"value must be a string","value",e);let n=18;if("string"==typeof t){const e=yI.indexOf(t);g(e>=0,"invalid unit","unit",t),n=3*e}else null!=t&&(n=z(t,"unit"));return mI.fromString(e,{decimals:n,width:512}).value}const wI=new Set;const AI=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("unable to locate global object")}().WebSocket;class _I{#xe;#J;get filter(){return JSON.parse(this.#J)}#At;#_t;#Et;constructor(e,t){this.#xe=e,this.#J=JSON.stringify(t),this.#At=null,this.#_t=null,this.#Et=null}start(){this.#At=this.#xe.send("eth_subscribe",this.filter).then((e=>(this.#xe._register(e,this),e)))}stop(){this.#At.then((e=>{this.#xe.destroyed||this.#xe.send("eth_unsubscribe",[e])})),this.#At=null}pause(e){p(e,"preserve logs while paused not supported by SocketSubscriber yet","UNSUPPORTED_OPERATION",{operation:"pause(false)"}),this.#_t=!!e}resume(){this.#_t=null}_handleMessage(e){if(null!=this.#At&&null===this.#_t){let t=this.#Et;t=null==t?this._emit(this.#xe,e):t.then((async()=>{await this._emit(this.#xe,e)})),this.#Et=t.then((()=>{this.#Et===t&&(this.#Et=null)}))}}async _emit(e,t){throw new Error("sub-classes must implemente this; _emit")}}class EI extends _I{constructor(e){super(e,["newHeads"])}async _emit(e,t){e.emit("block",parseInt(t.number))}}class CI extends _I{constructor(e){super(e,["newPendingTransactions"])}async _emit(e,t){e.emit("pending",t)}}class kI extends _I{#Ct;get logFilter(){return JSON.parse(this.#Ct)}constructor(e,t){super(e,["logs",t]),this.#Ct=JSON.stringify(t)}async _emit(e,t){e.emit(this.logFilter,e._wrapLog(t,e._network))}}class SI extends Vc{#kt;#De;#St;constructor(e,t){const n=Object.assign({},null!=t?t:{});g(null==n.batchMaxCount||1===n.batchMaxCount,"sockets-based providers do not support batches","options.batchMaxCount",t),n.batchMaxCount=1,null==n.staticNetwork&&(n.staticNetwork=!0),super(e,n),this.#kt=new Map,this.#De=new Map,this.#St=new Map}_getSubscriber(e){switch(e.type){case"close":return new wc("close");case"block":return new EI(this);case"pending":return new CI(this);case"event":return new kI(this,e.filter);case"orphan":if("drop-log"===e.filter.orphan)return new wc("drop-log")}return super._getSubscriber(e)}_register(e,t){this.#De.set(e,t);const n=this.#St.get(e);if(n){for(const e of n)t._handleMessage(e);this.#St.delete(e)}}async _send(e){g(!Array.isArray(e),"WebSocket does not support batch send","payload",e);const t=new Promise(((t,n)=>{this.#kt.set(e.id,{payload:e,resolve:t,reject:n})}));return await this._waitUntilReady(),await this._write(JSON.stringify(e)),[await t]}async _processMessage(e){const t=JSON.parse(e);if(t&&"object"==typeof t&&"id"in t){const e=this.#kt.get(t.id);if(null==e)return void this.emit("error",f("received result for unknown id","UNKNOWN_ERROR",{reasonCode:"UNKNOWN_ID",result:t}));this.#kt.delete(t.id),e.resolve(t)}else{if(!t||"eth_subscription"!==t.method)return void this.emit("error",f("received unexpected message","UNKNOWN_ERROR",{reasonCode:"UNEXPECTED_MESSAGE",result:t}));{const e=t.params.subscription,n=this.#De.get(e);if(n)n._handleMessage(t.params.result);else{let n=this.#St.get(e);null==n&&(n=[],this.#St.set(e,n)),n.push(t.params.result)}}}}async _write(e){throw new Error("sub-classes must override this")}}class xI extends SI{#dt;#xt;get websocket(){if(null==this.#xt)throw new Error("websocket closed");return this.#xt}constructor(e,t,n){super(t,n),"string"==typeof e?(this.#dt=()=>new AI(e),this.#xt=this.#dt()):"function"==typeof e?(this.#dt=e,this.#xt=e()):(this.#dt=null,this.#xt=e),this.websocket.onopen=async()=>{try{await this._start(),this.resume()}catch(e){console.log("failed to start WebsocketProvider",e)}},this.websocket.onmessage=e=>{this._processMessage(e.data)}}async _write(e){this.websocket.send(e)}async destroy(){null!=this.#xt&&(this.#xt.close(),this.#xt=null),super.destroy()}}const MI="84842078b09946638c03157f83405213";class II extends xI{projectId;projectSecret;constructor(e,t){const n=new TI(e,t),r=n._getConnection();p(!r.credentials,"INFURA WebSocket project secrets unsupported","UNSUPPORTED_OPERATION",{operation:"InfuraProvider.getWebSocketProvider()"});super(r.url.replace(/^http/i,"ws").replace("/v3/","/ws/v3/"),n._network),l(this,{projectId:n.projectId,projectSecret:n.projectSecret})}isCommunityResource(){return this.projectId===MI}}class TI extends Zc{projectId;projectSecret;constructor(e,t,n){null==e&&(e="mainnet");const r=sc.from(e);null==t&&(t=MI),null==n&&(n=null);super(TI.getRequest(r,t,n),r,{staticNetwork:r}),l(this,{projectId:t,projectSecret:n})}_getProvider(e){try{return new TI(e,this.projectId,this.projectSecret)}catch(e){}return super._getProvider(e)}isCommunityResource(){return this.projectId===MI}static getWebSocketProvider(e,t){return new II(e,t)}static getRequest(e,t,n){null==t&&(t=MI),null==n&&(n=null);const r=new or(`https://${function(e){switch(e){case"mainnet":return"mainnet.infura.io";case"goerli":return"goerli.infura.io";case"sepolia":return"sepolia.infura.io";case"arbitrum":return"arbitrum-mainnet.infura.io";case"arbitrum-goerli":return"arbitrum-goerli.infura.io";case"arbitrum-sepolia":return"arbitrum-sepolia.infura.io";case"base":return"base-mainnet.infura.io";case"base-goerlia":return"base-goerli.infura.io";case"base-sepolia":return"base-sepolia.infura.io";case"bnb":return"bnbsmartchain-mainnet.infura.io";case"bnbt":return"bnbsmartchain-testnet.infura.io";case"linea":return"linea-mainnet.infura.io";case"linea-goerli":return"linea-goerli.infura.io";case"linea-sepolia":return"linea-sepolia.infura.io";case"matic":return"polygon-mainnet.infura.io";case"matic-amoy":return"polygon-amoy.infura.io";case"matic-mumbai":return"polygon-mumbai.infura.io";case"optimism":return"optimism-mainnet.infura.io";case"optimism-goerli":return"optimism-goerli.infura.io";case"optimism-sepolia":return"optimism-sepolia.infura.io"}g(!1,"unsupported network","network",e)}(e.name)}/v3/${t}`);return r.allowGzip=!0,n&&r.setCredentials("",n),t===MI&&(r.retryFunc=async(e,t,n)=>{var r;return r="InfuraProvider",wI.has(r)||(wI.add(r),console.log("========= NOTICE ========="),console.log(`Request-Rate Exceeded for ${r} (this message will not be repeated)`),console.log(""),console.log("The default API keys for each service are provided as a highly-throttled,"),console.log("community resource for low-traffic projects and early prototyping."),console.log(""),console.log("While your application will continue to function, we highly recommended"),console.log("signing up for your own API keys to improve performance, increase your"),console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."),console.log(""),console.log("For more details: https://docs.ethers.org/api-keys/"),console.log("==========================")),!0}),r}}const RI="@w3m/wallet_id",PI=4902,OI=5e3,NI={getCaipDefaultChain(e){if(e)return{id:`${Yl}:${e.chainId}`,name:e.name,imageId:nu.EIP155NetworkImageIds[e.chainId]}},hexStringToNumber(e){const t=e.startsWith("0x")?e.slice(2):e;return parseInt(t,16)},numberToHexString:e=>`0x${e.toString(16)}`,async getUserInfo(e){const[t,n]=await Promise.all([NI.getAddresses(e),NI.getChainId(e)]);return{chainId:n,addresses:t}},async getChainId(e){const t=await e.request({method:"eth_chainId"});return Number(t)},async getAddress(e){const[t]=await e.request({method:"eth_accounts"});return t},getAddresses:async e=>await e.request({method:"eth_accounts"}),async addEthereumChain(e,t){await e.request({method:"wallet_addEthereumChain",params:[{chainId:NI.numberToHexString(t.chainId),rpcUrls:[t.rpcUrl],chainName:t.name,nativeCurrency:{name:t.currency,decimals:18,symbol:t.currency},blockExplorerUrls:[t.explorerUrl],iconUrls:[nu.EIP155NetworkImageIds[t.chainId]]}]})}};var LI=n(5476),DI=n(8520);const BI=(0,DI.BX)({provider:void 0,providerType:void 0,address:void 0,chainId:void 0,status:"reconnecting",isConnected:!1}),UI={state:BI,subscribeKey:(e,t)=>(0,LI.u$)(BI,e,t),subscribe:e=>(0,DI.B1)(BI,(()=>e(BI))),setProvider(e){e&&(BI.provider=(0,DI.KR)(e))},setProviderType(e){BI.providerType=e},setAddress(e){BI.address=e},setPreferredAccountType(e){BI.preferredAccountType=e},setChainId(e){BI.chainId=e},setStatus(e){BI.status=e},setIsConnected(e){BI.isConnected=e},setError(e){BI.error=e},reset(){BI.provider=void 0,BI.address=void 0,BI.chainId=void 0,BI.providerType=void 0,BI.status="disconnected",BI.isConnected=!1,BI.error=void 0,BI.preferredAccountType=void 0}};class jI extends zp{constructor(e){const{ethersConfig:t,siweConfig:r,chains:i,defaultChain:o,tokens:s,chainImages:a,_sdkVersion:c,...l}=e;if(!t)throw new Error("web3modal:constructor - ethersConfig is undefined");if(!l.projectId)throw new Error("web3modal:constructor - projectId is undefined");const u={switchCaipNetwork:async e=>{const t=lu.LX.caipNetworkIdToNumber(e?.id);if(t)try{UI.setError(void 0),await this.switchNetwork(t)}catch(e){throw UI.setError(e),new Error("networkControllerClient:switchCaipNetwork - unable to switch chain")}},getApprovedCaipNetworksData:async()=>new Promise((async e=>{const t=localStorage.getItem(RI);if(t?.includes($l)){const t=await this.getWalletConnectProvider();if(!t)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const n=t.signer?.session?.namespaces,r=n?.[Yl]?.methods,i=n?.[Yl]?.chains;e({supportsAllNetworks:r?.includes(Ql)??!1,approvedCaipNetworkIds:i})}else{e({approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})}}))},d={connectWalletConnect:async e=>{const t=await this.getWalletConnectProvider();if(!t)throw new Error("connectionControllerClient:getWalletConnectUri - provider is undefined");t.on("display_uri",(t=>{e(t)}));const i=await(r?.getMessageParams?.());if(r?.options?.enabled&&i&&Object.keys(i||{}).length>0){const{SIWEController:e,getDidChainId:o,getDidAddress:s}=await n.e(293).then(n.bind(n,6293)),a=lu.LX.caipNetworkIdToNumber(this.getCaipNetwork()?.id);let c=i.chains;a&&(c=[a,...i.chains.filter((e=>e!==a))]);const l=await t.authenticate({nonce:await r.getNonce(),methods:[...VM],...i,chains:c}),u=l?.auths?.[0];if(u){const{p:n,s:r}=u,i=o(n.iss),a=s(n.iss);a&&i&&e.setSession({address:a,chainId:parseInt(i,10)});try{const i=t.signer.client.formatAuthMessage({request:n,iss:n.iss});await e.verifyMessage({message:i,signature:r.s,cacao:u})}catch(n){throw console.error("Error verifying message",n),await t.disconnect().catch(console.error),await e.signOut().catch(console.error),n}}}else await t.connect({optionalChains:this.chains.map((e=>e.chainId))});await this.setWalletConnectProvider()},connectExternal:async({id:e,info:n,provider:r})=>{if(e===ql){const e=t.injected;if(!e)throw new Error("connectionControllerClient:connectInjected - provider is undefined");try{UI.setError(void 0),await e.request({method:"eth_requestAccounts"}),this.setInjectedProvider(t)}catch(e){UI.setError(e)}}else if(e===Zl&&n&&r)try{UI.setError(void 0),await r.request({method:"eth_requestAccounts"}),this.setEIP6963Provider(r,n.name)}catch(e){UI.setError(e)}else if(e===Wl){const e=t.coinbase;if(!e)throw new Error("connectionControllerClient:connectCoinbase - connector is undefined");try{UI.setError(void 0),await e.request({method:"eth_requestAccounts"}),this.setCoinbaseProvider(t)}catch(e){throw UI.setError(e),new Error(e.message)}}else e===Gl&&this.setAuthProvider()},checkInstalled:e=>e?!(t.injected&&!window?.ethereum)&&e.some((e=>Boolean(window.ethereum?.[String(e)]))):Boolean(window.ethereum),disconnect:async()=>{const{provider:e,providerType:i}=UI.state;if(r?.options?.signOutOnDisconnect){const{SIWEController:e}=await n.e(293).then(n.bind(n,6293));await e.signOut()}if(i===$l||"coinbaseWalletSDK"===i){const t=e;await t.disconnect()}else if(i===Gl)await(this.authProvider?.disconnect());else if(i===Zl&&e)await this.disconnectProvider(e),e.emit("disconnect");else if(i===ql){const e=t.injected;e&&(await this.disconnectProvider(e),e.emit("disconnect"))}else e?.emit("disconnect");localStorage.removeItem(RI),UI.reset()},signMessage:async e=>{const t=UI.state.provider;if(!t)throw new Error("connectionControllerClient:signMessage - provider is undefined");const n=_(e)?e:k(kt(e));return await t.request({method:"personal_sign",params:[n,this.getAddress()]})},parseUnits:(e,t)=>bI(e,t),formatUnits:(e,t)=>vI(e,t),async estimateGas(e){const{chainId:t,provider:n,address:r}=UI.state;if(!n)throw new Error("connectionControllerClient:sendTransaction - provider is undefined");if(!r)throw new Error("connectionControllerClient:sendTransaction - address is undefined");const i={from:e.address,to:e.to,data:e.data,type:0},o=new Qc(n,t),s=new Wc(o,r);return await s.estimateGas(i)},sendTransaction:async e=>{const{chainId:t,provider:n,address:r}=UI.state;if(!n)throw new Error("ethersClient:sendTransaction - provider is undefined");if(!r)throw new Error("ethersClient:sendTransaction - address is undefined");const i={to:e.to,value:e.value,gasLimit:e.gas,gasPrice:e.gasPrice,data:e.data,type:0},o=new Qc(n,t),s=new Wc(o,r),a=await s.sendTransaction(i),c=await a.wait();return c?.hash||null},writeContract:async e=>{const{chainId:t,provider:n,address:r}=UI.state;if(!n)throw new Error("ethersClient:writeContract - provider is undefined");if(!r)throw new Error("ethersClient:writeContract - address is undefined");const i=new Qc(n,t),o=new Wc(i,r),s=new ni(e.tokenAddress,e.abi,o);if(!s||!e.method)throw new Error("Contract method is undefined");const a=s[e.method];if(a){return await a(e.receiverAddress,e.tokenAmount)}throw new Error("Contract method is undefined")},getEnsAddress:async e=>{try{const t=lu.LX.caipNetworkIdToNumber(this.getCaipNetwork()?.id);let n=null,r=!1;if(e?.endsWith(lu.oU.WC_NAME_SUFFIX)&&(r=await this.resolveWalletConnectName(e)),1===t){const t=new TI("mainnet");n=await t.resolveName(e)}return n||r||!1}catch{return!1}},getEnsAvatar:async e=>{const{chainId:t}=UI.state;if(t&&1===t){const t=new TI("mainnet"),n=await t.getAvatar(e);return n||!1}return!1}};super({chain:lu.oU.CHAIN.EVM,networkControllerClient:u,connectionControllerClient:d,siweControllerClient:r,defaultChain:NI.getCaipDefaultChain(o),tokens:ru.getCaipTokens(s),_sdkVersion:c??`html-ethers-${tu}`,...l}),this.hasSyncedConnectedAccount=!1,this.EIP6963Providers=[],this.chain=lu.oU.CHAIN.EVM,this.options=void 0,this.options=e,this.metadata=t.metadata,this.projectId=l.projectId,this.chains=i,this.createProvider(),UI.subscribeKey("address",(()=>{this.syncAccount()})),UI.subscribeKey("chainId",(()=>{this.syncNetwork(a)})),this.subscribeCaipNetworkChange((e=>{!this.getChainId()&&e&&UI.setChainId(lu.LX.caipNetworkIdToNumber(e.id))})),this.subscribeShouldUpdateToAddress((e=>{e&&UI.setAddress(tt(e))})),this.syncRequestedNetworks(i,a),this.syncConnectors(t),"undefined"!=typeof window&&(this.listenConnectors(!0),this.checkActive6963Provider()),this.setEIP6963Enabled(t.EIP6963),t.injected&&this.checkActiveInjectedProvider(t),t.auth&&this.syncAuthConnector(l.projectId,t.auth),t.coinbase&&this.checkActiveCoinbaseProvider(t)}getState(){const e=super.getState();return{...e,selectedNetworkId:lu.LX.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState((t=>e({...t,selectedNetworkId:lu.LX.caipNetworkIdToNumber(t.selectedNetworkId)})))}setAddress(e){const t=e?tt(e):void 0;UI.setAddress(t)}getAddress(){const{address:e}=UI.state;return e?tt(e):void 0}getError(){return UI.state.error}getChainId(){const e=UI.state.chainId,t=lu.LX.caipNetworkIdToNumber(this.getCaipNetwork()?.id);return e??t}getStatus(){return UI.state.status}getIsConnected(){return UI.state.isConnected}getWalletProvider(){return UI.state.provider}getWalletProviderType(){return UI.state.providerType}subscribeProvider(e){return UI.subscribe(e)}async disconnect(){const{provider:e,providerType:t}=UI.state;if(localStorage.removeItem(RI),UI.reset(),t===Gl)await(this.authProvider?.disconnect());else if(!e||"injected"!==t&&"eip6963"!==t){if("walletConnect"===t||"coinbaseWalletSDK"===t){const t=e;if(t)try{UI.setError(void 0),await t.disconnect()}catch(e){UI.setError(e)}}}else await this.disconnectProvider(e),e?.emit("disconnect")}createProvider(){return this.walletConnectProviderInitPromise||"undefined"==typeof window||(this.walletConnectProviderInitPromise=this.initWalletConnectProvider()),this.walletConnectProviderInitPromise}async initWalletConnectProvider(){const e={projectId:this.projectId,showQrModal:!1,rpcMap:this.chains?this.chains.reduce(((e,t)=>(e[t.chainId]=t.rpcUrl,e)),{}):{},optionalChains:[...this.chains.map((e=>e.chainId))],metadata:{name:this.metadata?this.metadata.name:"",description:this.metadata?this.metadata.description:"",url:this.metadata?this.metadata.url:"",icons:this.metadata?this.metadata.icons:[""]}};this.walletConnectProvider=await sI.init(e),await this.checkActiveWalletConnectProvider()}async disconnectProvider(e){try{const t=await e.request({method:"wallet_getPermissions"});t.find((e=>"eth_accounts"===e.parentCapability))&&await e.request({method:"wallet_revokePermissions",params:[{eth_accounts:{}}]})}catch(e){throw new Error("Error revoking permissions:")}}async getWalletConnectProvider(){if(!this.walletConnectProvider)try{UI.setError(void 0),await this.createProvider()}catch(e){UI.setError(e)}return this.walletConnectProvider}syncRequestedNetworks(e,t){const n=e?.map((e=>({id:`${Yl}:${e.chainId}`,name:e.name,imageId:nu.EIP155NetworkImageIds[e.chainId],imageUrl:t?.[e.chainId]})));this.setRequestedCaipNetworks(n??[])}async checkActiveWalletConnectProvider(){const e=await this.getWalletConnectProvider(),t=localStorage.getItem(RI);e&&t===$l&&await this.setWalletConnectProvider();const n=UI.state.isConnected;UI.setStatus(n?"connected":"disconnected")}checkActiveInjectedProvider(e){const t=e.injected,n=localStorage.getItem(RI);t&&n===ql&&(this.setInjectedProvider(e),this.watchInjected(e))}checkActiveCoinbaseProvider(e){const t=e.coinbase,n=localStorage.getItem(RI);t&&n===Wl&&(t.accounts&&t.accounts?.length>0?(this.setCoinbaseProvider(e),this.watchCoinbase(e)):(localStorage.removeItem(RI),UI.reset()))}checkActive6963Provider(){const e=window?.localStorage.getItem(RI);if(e){const t=this.EIP6963Providers.find((t=>t.info.name===e));t&&this.setEIP6963Provider(t.provider,t.info.name)}}async setWalletConnectProvider(){window?.localStorage.setItem(RI,$l);const e=await this.getWalletConnectProvider();if(e){UI.setChainId(e.chainId),UI.setProviderType("walletConnect"),UI.setProvider(e),UI.setStatus("connected"),UI.setIsConnected(!0),this.setAllAccounts(e.accounts.map((e=>({address:e,type:"eoa"}))));const t=e.signer?.session;for(const n of e.accounts){const e=t?.sessionProperties?.[n];e&&this.addAddressLabel(n,e)}this.setAddress(e.accounts?.[0]),this.watchWalletConnect()}}async setInjectedProvider(e){window?.localStorage.setItem(RI,ql);const t=e.injected;if(t){const{addresses:n,chainId:r}=await NI.getUserInfo(t);n?.[0]&&r&&(UI.setChainId(r),UI.setProviderType("injected"),UI.setProvider(e.injected),UI.setStatus("connected"),UI.setIsConnected(!0),this.setAllAccounts(n.map((e=>({address:e,type:"eoa"})))),this.setAddress(n[0]),this.watchCoinbase(e))}}async setEIP6963Provider(e,t){if(window?.localStorage.setItem(RI,t),e){const{addresses:t,chainId:n}=await NI.getUserInfo(e);t?.[0]&&n&&(UI.setChainId(n),UI.setProviderType("eip6963"),UI.setProvider(e),UI.setStatus("connected"),UI.setIsConnected(!0),this.setAllAccounts(t.map((e=>({address:e,type:"eoa"})))),this.setAddress(t[0]),this.watchEIP6963(e))}}async setCoinbaseProvider(e){window?.localStorage.setItem(RI,Wl);const t=e.coinbase;if(t){const{addresses:n,chainId:r}=await NI.getUserInfo(t);n?.[0]&&r&&(UI.setChainId(r),UI.setProviderType("coinbaseWalletSDK"),UI.setProvider(e.coinbase),UI.setStatus("connected"),UI.setIsConnected(!0),this.setAllAccounts(n.map((e=>({address:e,type:"eoa"})))),this.setAddress(n[0]),this.watchCoinbase(e))}}async setAuthProvider(){if(window?.localStorage.setItem(RI,Gl),this.authProvider){super.setLoading(!0);const{address:e,chainId:t,smartAccountDeployed:n,preferredAccountType:r,accounts:i=[]}=await this.authProvider.connect({chainId:this.getChainId()}),{smartAccountEnabledNetworks:o}=await this.authProvider.getSmartAccountEnabledNetworks();this.setSmartAccountEnabledNetworks(o),e&&t&&(this.setAllAccounts(i.length>0?i:[{address:e,type:r}]),UI.setChainId(t),UI.setProviderType(Gl),UI.setProvider(this.authProvider),UI.setStatus("connected"),UI.setIsConnected(!0),UI.setAddress(e),UI.setPreferredAccountType(r),this.setSmartAccountDeployed(Boolean(n),this.chain),this.watchAuth(),this.watchModal()),super.setLoading(!1)}}async watchWalletConnect(){const e=await this.getWalletConnectProvider();function t(e){if(e){const t=NI.hexStringToNumber(e);UI.setChainId(t)}}const n=async e=>{e.length>0&&await this.setWalletConnectProvider()};e&&(e.on("disconnect",(function r(){localStorage.removeItem(RI),UI.reset(),e?.removeListener("disconnect",r),e?.removeListener("accountsChanged",n),e?.removeListener("chainChanged",t)})),e.on("accountsChanged",n),e.on("chainChanged",t))}watchInjected(e){const t=e.injected;function n(e){const t=e?.[0];t?UI.setAddress(tt(t)):(localStorage.removeItem(RI),UI.reset())}function r(e){if(e){const t="string"==typeof e?NI.hexStringToNumber(e):Number(e);UI.setChainId(t)}}t&&(t.on("disconnect",(function e(){localStorage.removeItem(RI),UI.reset(),t?.removeListener("disconnect",e),t?.removeListener("accountsChanged",n),t?.removeListener("chainChanged",r)})),t.on("accountsChanged",n),t.on("chainChanged",r))}watchEIP6963(e){const t=e=>{const t=e?.[0];t?(UI.setAddress(tt(t)),this.setAllAccounts(e.map((e=>({address:e,type:"eoa"}))))):(this.setAllAccounts([]),localStorage.removeItem(RI),UI.reset())};function n(e){if(e){const t="string"==typeof e?NI.hexStringToNumber(e):Number(e);UI.setChainId(t)}}e&&(e.on("disconnect",(function r(){localStorage.removeItem(RI),UI.reset(),e.removeListener("disconnect",r),e.removeListener("accountsChanged",t),e.removeListener("chainChanged",n)})),e.on("accountsChanged",t),e.on("chainChanged",n))}watchCoinbase(e){const t=e.coinbase,n=localStorage.getItem(RI);function r(e){const t=e?.[0];t?UI.setAddress(tt(t)):(localStorage.removeItem(RI),UI.reset())}function i(e){if(e&&n===Wl){const t=Number(e);UI.setChainId(t)}}t&&(t.on("disconnect",(function e(){localStorage.removeItem(RI),UI.reset(),t?.removeListener("disconnect",e),t?.removeListener("accountsChanged",r),t?.removeListener("chainChanged",i)})),t.on("accountsChanged",r),t.on("chainChanged",i))}watchAuth(){this.authProvider&&(this.authProvider.onRpcRequest((e=>{if(kl.QH.checkIfRequestExists(e)){if(!kl.QH.checkIfRequestIsAllowed(e))if(super.isOpen()){if(super.isTransactionStackEmpty())return;super.isTransactionShouldReplaceView()?super.replace("ApproveTransaction"):super.redirect("ApproveTransaction")}else super.open({view:"ApproveTransaction"})}else{super.open();const t=kl.QH.getRequestMethod(e);console.error(kl.Vl.RPC_METHOD_NOT_ALLOWED_MESSAGE,{method:t}),setTimeout((()=>{this.showErrorMessage(kl.Vl.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE)}),300)}})),this.authProvider.onRpcResponse((e=>{switch(kl.QH.getResponseType(e)){case kl.s1.RPC_RESPONSE_TYPE_ERROR:super.isOpen()&&(super.isTransactionStackEmpty()?super.close():super.popTransactionStack(!0));break;case kl.s1.RPC_RESPONSE_TYPE_TX:super.isTransactionStackEmpty()?super.close():super.popTransactionStack()}})),this.authProvider.onNotConnected((()=>{this.setIsConnected(!1),super.setLoading(!1)})),this.authProvider.onIsConnected((({preferredAccountType:e})=>{this.setIsConnected(!0),super.setLoading(!1),UI.setPreferredAccountType(e)})),this.authProvider.onSetPreferredAccount((({address:e,type:t})=>{if(!e)return;super.setLoading(!0);const n=lu.LX.caipNetworkIdToNumber(this.getCaipNetwork()?.id);UI.setAddress(e),UI.setChainId(n),UI.setStatus("connected"),UI.setIsConnected(!0),UI.setPreferredAccountType(t),this.syncAccount().then((()=>super.setLoading(!1)))})))}watchModal(){this.authProvider&&this.subscribeState((e=>{e.open||this.authProvider?.rejectRpcRequest()}))}async syncAccount(){const e=UI.state.address,t=UI.state.chainId,n=UI.state.isConnected,r=UI.state.preferredAccountType;if(this.resetAccount(),n&&e&&t){const i=`${Yl}:${t}:${e}`;this.setIsConnected(n),this.setPreferredAccountType(r,this.chain),this.setCaipAddress(i),this.syncConnectedWalletInfo();const o=this.chains.find((e=>e.chainId===t));o?.explorerUrl&&this.setAddressExplorerUrl(`${o.explorerUrl}/address/${e}`),await Promise.all([this.syncProfile(e),this.syncBalance(e),this.setApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!n&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork(),this.setAllAccounts([]))}async syncNetwork(e){const t=UI.state.address,n=UI.state.chainId,r=UI.state.isConnected;if(this.chains){const i=this.chains.find((e=>e.chainId===n));if(i){const o=`${Yl}:${i.chainId}`;if(this.setCaipNetwork({id:o,name:i.name,imageId:nu.EIP155NetworkImageIds[i.chainId],imageUrl:e?.[i.chainId],chain:this.chain}),r&&t){const e=`${Yl}:${n}:${t}`;if(this.setCaipAddress(e),i.explorerUrl){const e=`${i.explorerUrl}/address/${t}`;this.setAddressExplorerUrl(e)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(t),await this.syncBalance(t))}}else r&&this.setCaipNetwork({id:`${Yl}:${n}`,chain:this.chain})}}async syncWalletConnectName(e){try{const t=await this.getWalletConnectName(e);if(t[0]){const e=t[0];this.setProfileName(e.name)}else this.setProfileName(null)}catch{this.setProfileName(null)}}async syncProfile(e){const t=UI.state.chainId;try{const{name:t,avatar:n}=await this.fetchIdentity({address:e});this.setProfileName(t),this.setProfileImage(n),t||await this.syncWalletConnectName(e)}catch{if(1===t){const t=new TI("mainnet"),n=await t.lookupAddress(e),r=await t.getAvatar(e);n?this.setProfileName(n):await this.syncWalletConnectName(e),r&&this.setProfileImage(r)}else await this.syncWalletConnectName(e),this.setProfileImage(null)}}async syncBalance(e){const t=UI.state.chainId;if(t&&this.chains){const n=this.chains.find((e=>e.chainId===t));if(n){const r=new Zc(n.rpcUrl,{chainId:t,name:n.name});if(r){const t=await r.getBalance(e),i=vI(t,18);this.setBalance(i,n.currency)}}}}syncConnectedWalletInfo(){const e=window?.localStorage.getItem(RI),t=UI.state.providerType;if(t===Zl){if(e){const t=this.EIP6963Providers.find((t=>t.info.name===e));t&&this.setConnectedWalletInfo({...t.info},this.chain)}}else if(t===$l){const e=UI.state.provider;e.session&&this.setConnectedWalletInfo({...e.session.peer.metadata,name:e.session.peer.metadata.name,icon:e.session.peer.metadata.icons?.[0]},this.chain)}else e&&this.setConnectedWalletInfo({name:e},this.chain)}async switchNetwork(e){const t=UI.state.provider,n=UI.state.providerType;if(this.chains){const r=this.chains.find((t=>t.chainId===e));if(n===$l&&r){const n=t;if(n)try{await n.request({method:"wallet_switchEthereumChain",params:[{chainId:NI.numberToHexString(r.chainId)}]}),UI.setChainId(e)}catch(e){const t=e?.message;if(/(?<temp1>user rejected)/u.test(t?.toLowerCase()))throw new Error("Chain is not supported");await NI.addEthereumChain(n,r)}}else if(n===ql&&r){const e=t;if(e)try{await e.request({method:"wallet_switchEthereumChain",params:[{chainId:NI.numberToHexString(r.chainId)}]}),UI.setChainId(r.chainId)}catch(t){if(t.code!==PI&&t.code!==OI&&t?.data?.originalError?.code!==PI)throw new Error("Chain is not supported");await NI.addEthereumChain(e,r)}}else if(n===Zl&&r){const e=t;if(e)try{await e.request({method:"wallet_switchEthereumChain",params:[{chainId:NI.numberToHexString(r.chainId)}]}),UI.setChainId(r.chainId)}catch(t){if(t.code!==PI&&t.code!==OI&&t?.data?.originalError?.code!==PI)throw new Error("Chain is not supported");await NI.addEthereumChain(e,r)}}else if(n===Wl&&r){const e=t;if(e)try{await e.request({method:"wallet_switchEthereumChain",params:[{chainId:NI.numberToHexString(r.chainId)}]}),UI.setChainId(r.chainId)}catch(t){if(t.code!==PI&&t.code!==OI&&t?.data?.originalError?.code!==PI)throw new Error("Error switching network");await NI.addEthereumChain(e,r)}}else if(n===Gl&&this.authProvider&&r?.chainId)try{super.setLoading(!0),await this.authProvider.switchNetwork(r?.chainId),UI.setChainId(r.chainId);const{address:e,preferredAccountType:t}=await this.authProvider.connect({chainId:r?.chainId});UI.setAddress(e),UI.setPreferredAccountType(t),await this.syncAccount()}catch{throw new Error("Switching chain failed")}finally{super.setLoading(!1)}}}syncConnectors(e){const t=[],n=nu.ConnectorTypesMap[$l];if(n&&t.push({id:$l,explorerId:nu.ConnectorExplorerIds[$l],imageId:nu.ConnectorImageIds[$l],imageUrl:this.options?.connectorImages?.[$l],name:nu.ConnectorNamesMap[$l],type:n,chain:this.chain}),e.injected){const e=nu.ConnectorTypesMap[ql];e&&t.push({id:ql,explorerId:nu.ConnectorExplorerIds[ql],imageId:nu.ConnectorImageIds[ql],imageUrl:this.options?.connectorImages?.[ql],name:nu.ConnectorNamesMap[ql],type:e,chain:this.chain})}e.coinbase&&t.push({id:Wl,explorerId:nu.ConnectorExplorerIds[Wl],imageId:nu.ConnectorImageIds[Wl],imageUrl:this.options?.connectorImages?.[Wl],name:nu.ConnectorNamesMap[Wl],type:"EXTERNAL",chain:this.chain}),this.setConnectors(t)}async syncAuthConnector(e,t){if("undefined"!=typeof window){this.authProvider=new kl.YW(e),this.addConnector({id:Gl,type:"AUTH",name:"Auth",provider:this.authProvider,email:t?.email,socials:t?.socials,showWallets:void 0===t?.showWallets||t.showWallets,chain:this.chain,walletFeatures:t?.walletFeatures}),super.setLoading(!0);const n=this.authProvider.getLoginEmailUsed();super.setLoading(n);const{isConnected:r}=await this.authProvider.isConnected();r?await this.setAuthProvider():super.setLoading(!1)}}eip6963EventHandler(e){if(e.detail){const{info:t,provider:n}=e.detail,r=this.getConnectors(),i=r.find((e=>e.name===t.name)),o=r.find((e=>e.id===Wl)),s=o&&e.detail.info.rdns===eu[Wl];if(!i&&!s){const e=nu.ConnectorTypesMap[Zl];if(e){this.addConnector({id:Zl,type:e,imageUrl:t.icon??this.options?.connectorImages?.[Zl],name:t.name,provider:n,info:t,chain:this.chain});const r={provider:n,info:t};this.EIP6963Providers.push(r)}}}}listenConnectors(e){if("undefined"!=typeof window&&e){const e=this.eip6963EventHandler.bind(this);window.addEventListener(Jl,e),window.dispatchEvent(new Event(Xl))}}}n(3167);var FI=n(1656);function zI(e){const{enableEIP6963:t=!0,enableCoinbase:n=!0,enableInjected:r=!0,auth:i={email:!0,showWallets:!0,walletFeatures:!0},metadata:o}=e;let s,a;const c={metadata:o};return r&&(c.injected=s||("undefined"!=typeof window&&window.ethereum?(s=window.ethereum,s):void 0)),n&&(c.coinbase=function(){if(a)return a;if("undefined"==typeof window)return;const t=new FI.Il({appName:o.name,appLogoUrl:o.icons[0],appChainIds:e.chains?.map((e=>e.chainId))||[1,84532]});return a=t.makeWeb3Provider({options:e.coinbasePreference||"all"}),a}()),t&&(c.EIP6963=!0),i&&(i.email??=!0,i.showWallets??=!0,i.walletFeatures??=!0,c.auth=i),c}class $I extends o.QE{_web3Modal;get web3Modal(){if(!this._web3Modal)throw new Error("Web3Modal not initialized");return this._web3Modal}resolveConnection;rejectConnection;init(e){this._web3Modal=function(e){return new jI({...e,_sdkVersion:`html-ethers-${tu}`})}({projectId:e.walletConnectProjectId,ethersConfig:zI({metadata:{name:e.name,description:e.description,url:window.location.origin,icons:[e.icon]}}),chains:Object.entries(e.chains).map((([e,t])=>({chainId:t.id,name:e,currency:t.symbol,rpcUrl:t.rpc,explorerUrl:t.explorerUrl})))}),this._web3Modal.subscribeEvents((e=>{"MODAL_CLOSE"===e.data.event&&this.rejectConnection&&(this.rejectConnection(new Error("User closed WalletConnect modal")),this.rejectConnection=void 0,this.resolveConnection=void 0)}));let t=this._web3Modal.getAddress();this._web3Modal.subscribeProvider((e=>{e.address&&this.resolveConnection&&(this.resolveConnection(),this.rejectConnection=void 0,this.resolveConnection=void 0),t!==e.address&&(this.emit("addressChanged",e.address?tt(e.address):void 0),t=e.address)}))}async connect(){const e=this.web3Modal.getAddress();void 0!==e?this.emit("addressChanged",tt(e)):await new Promise(((e,t)=>{this.resolveConnection=e,this.rejectConnection=t,this._web3Modal?.open()}));const t=this.web3Modal.getWalletProvider();if(!t)throw new Error("Wallet provider not found");return new Qc(t)}async addChain(e){const t=this.web3Modal.getWalletProvider();if(!t)throw new Error("Wallet provider not found");await t.request({method:"wallet_addEthereumChain",params:[{chainId:$(e.id).replace(/^0x0+/,"0x"),chainName:e.name,blockExplorerUrls:[e.explorerUrl],nativeCurrency:{symbol:e.symbol,decimals:18},rpcUrls:[e.rpc]}]})}}const qI=new $I;const HI=new class{walletConnectors={walletconnect:qI,metamask:tl,"coinbase-wallet":Jc};options;init(e){this.options=e;for(const t of Object.values(this.walletConnectors))t.init(e)}async connectAndGetProvider(e){const t=this.walletConnectors[e];if(!t)throw new Error(`Unsupported walletId: ${e}`);return await t.connect()}async connectAndGetAddress(e){const t=await this.connectAndGetProvider(e),n=await t.listAccounts();if(0===n.length)throw new Error("No accounts found");return n[0].address}async addChain(e,t){const n=this.options?.chains[t];if(!n)throw new Error(`Chain ${t} not found`);const r=this.walletConnectors[e];if(!r)throw new Error(`Unsupported walletId: ${e}`);await r.addChain(n)}}},397:(e,t,n)=>{"use strict";n.a(e,(async(e,r)=>{try{n.d(t,{A:()=>u});var i=n(5321),o=n(9209),s=n(818),a=n(8088),c=e([i,a]);[i,a]=c.then?(await c)():c;class l extends o.QE{store=new i.il("wallet-connection-manager");get connectedWallet(){return this.store.get("connectedWallet")}get connectedAddress(){return this.store.get("connectedAddress")}get connected(){return!!this.connectedWallet&&!!this.connectedAddress}async connect(){const{walletId:e,walletAddress:t}=await(new a.A).wait();this.store.set("connectedWallet",e),this.store.set("connectedAddress",t),this.emit("connectionChanged")}async disconnect(){this.store.remove("connectedWallet"),this.store.remove("connectedAddress"),this.emit("connectionChanged")}async addChain(e){if(this.connectedWallet||await this.connect(),!this.connectedWallet)throw new Error("Not connected");await s.A.addChain(this.connectedWallet,e)}}const u=new l;r()}catch(e){r(e)}}))},8088:(e,t,n)=>{"use strict";n.a(e,(async(e,r)=>{try{n.d(t,{A:()=>c});var i=n(5321),o=n(3501),s=n(818),a=e([i,o]);[i,o]=a.then?(await a)():a;class c extends o.aF{resolve;reject;constructor(){super(".wallet-connection-popup"),this.append((0,i.el)("header",(0,i.el)("h1","Connect Your Crypto Wallet")),(0,i.el)("main",(0,i.el)("section",(0,i.el)("h2","WalletConnect - Recommended"),new o.$n({type:o.VQ.Contained,icon:(0,i.el)("img",{src:"/images/wallet-icons/walletconnect.svg"}),title:"Connect with WalletConnect",onClick:async()=>await this.connect("walletconnect")})),(0,i.el)("section",(0,i.el)("h2","Direct Connection"),(0,i.el)("p","These options are available when WalletConnect is not working properly. Direct connection requires re-authentication each time you start the app, which may be less convenient compared to WalletConnect."),new o.$n({type:o.VQ.Contained,icon:(0,i.el)("img",{src:"/images/wallet-icons/metamask.svg"}),title:"Connect with MetaMask",onClick:async()=>await this.connect("metamask")}),new o.$n({type:o.VQ.Contained,icon:(0,i.el)("img",{src:"/images/wallet-icons/coinbase-wallet.svg"}),title:"Connect with Coinbase Wallet",onClick:async()=>await this.connect("coinbase-wallet")}))),(0,i.el)("footer",new o.$n(".cancel",{title:"Cancel",onClick:()=>this.remove()}))),this.on("remove",(()=>this.reject?.(new Error("Connection canceled by user"))))}async connect(e){this.offDom("close",this.closeListener).element.close();try{const t=await s.A.connectAndGetAddress(e);this.resolve?.({walletId:e,walletAddress:t}),this.remove()}catch(e){console.error(e),this.onDom("close",this.closeListener).element.showModal()}}async wait(){return new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}r()}catch(e){r(e)}}))},8393:(e,t,n)=>{"use strict";n.a(e,(async(e,r)=>{try{n.d(t,{Aq:()=>i.A,n6:()=>o.A});var i=n(818),o=n(397),s=e([o]);o=(s.then?(await s)():s)[0],r()}catch(e){r(e)}}))},2538:(e,t,n)=>{"use strict";n.d(t,{oU:()=>O,rL:()=>c,t$:()=>T,TC:()=>P,LX:()=>l,Se:()=>I,Fk:()=>R,o_:()=>N});var r=n(7568),i=n(5848),o=n(4162),s=n(3136);r.extend(o),r.extend(s);const a={...i,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}};r.locale("en-web3-modal",a);const c={getYear:(e=(new Date).toISOString())=>r(e).year(),getRelativeDateFromNow:e=>r(e).locale("en-web3-modal").fromNow(!0),formatDate:(e,t="DD MMM")=>r(e).format(t)},l={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0};var u=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,d=Math.ceil,h=Math.floor,f="[BigNumber Error] ",p=f+"Number primitive has more than 15 significant digits: ",g=1e14,m=14,y=9007199254740991,v=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],b=1e7,w=1e9;function A(e){var t=0|e;return e>0||e===t?t:t-1}function _(e){for(var t,n,r=1,i=e.length,o=e[0]+"";r<i;){for(t=e[r++]+"",n=m-t.length;n--;t="0"+t);o+=t}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function E(e,t){var n,r,i=e.c,o=t.c,s=e.s,a=t.s,c=e.e,l=t.e;if(!s||!a)return null;if(n=i&&!i[0],r=o&&!o[0],n||r)return n?r?0:-a:s;if(s!=a)return s;if(n=s<0,r=c==l,!i||!o)return r?0:!i^n?1:-1;if(!r)return c>l^n?1:-1;for(a=(c=i.length)<(l=o.length)?c:l,s=0;s<a;s++)if(i[s]!=o[s])return i[s]>o[s]^n?1:-1;return c==l?0:c>l^n?1:-1}function C(e,t,n,r){if(e<t||e>n||e!==h(e))throw Error(f+(r||"Argument")+("number"==typeof e?e<t||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function k(e){var t=e.c.length-1;return A(e.e/m)==t&&e.c[t]%2!=0}function S(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function x(e,t,n){var r,i;if(t<0){for(i=n+".";++t;i+=n);e=i+e}else if(++t>(r=e.length)){for(i=n,t-=r;--t;i+=n);e+=i}else t<r&&(e=e.slice(0,t)+"."+e.slice(t));return e}var M=function e(t){var n,r,i,o,s,a,c,l,M,I,T=H.prototype={constructor:H,toString:null,valueOf:null},R=new H(1),P=20,O=4,N=-7,L=21,D=-1e7,B=1e7,U=!1,j=1,F=0,z={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},$="0123456789abcdefghijklmnopqrstuvwxyz",q=!0;function H(e,t){var n,o,s,a,c,l,d,f,g=this;if(!(g instanceof H))return new H(e,t);if(null==t){if(e&&!0===e._isBigNumber)return g.s=e.s,void(!e.c||e.e>B?g.c=g.e=null:e.e<D?g.c=[g.e=0]:(g.e=e.e,g.c=e.c.slice()));if((l="number"==typeof e)&&0*e==0){if(g.s=1/e<0?(e=-e,-1):1,e===~~e){for(a=0,c=e;c>=10;c/=10,a++);return void(a>B?g.c=g.e=null:(g.e=a,g.c=[e]))}f=String(e)}else{if(!u.test(f=String(e)))return i(g,f,l);g.s=45==f.charCodeAt(0)?(f=f.slice(1),-1):1}(a=f.indexOf("."))>-1&&(f=f.replace(".","")),(c=f.search(/e/i))>0?(a<0&&(a=c),a+=+f.slice(c+1),f=f.substring(0,c)):a<0&&(a=f.length)}else{if(C(t,2,$.length,"Base"),10==t&&q)return Z(g=new H(e),P+g.e+1,O);if(f=String(e),l="number"==typeof e){if(0*e!=0)return i(g,f,l,t);if(g.s=1/e<0?(f=f.slice(1),-1):1,H.DEBUG&&f.replace(/^0\.0*|\./,"").length>15)throw Error(p+e)}else g.s=45===f.charCodeAt(0)?(f=f.slice(1),-1):1;for(n=$.slice(0,t),a=c=0,d=f.length;c<d;c++)if(n.indexOf(o=f.charAt(c))<0){if("."==o){if(c>a){a=d;continue}}else if(!s&&(f==f.toUpperCase()&&(f=f.toLowerCase())||f==f.toLowerCase()&&(f=f.toUpperCase()))){s=!0,c=-1,a=0;continue}return i(g,String(e),l,t)}l=!1,(a=(f=r(f,t,10,g.s)).indexOf("."))>-1?f=f.replace(".",""):a=f.length}for(c=0;48===f.charCodeAt(c);c++);for(d=f.length;48===f.charCodeAt(--d););if(f=f.slice(c,++d)){if(d-=c,l&&H.DEBUG&&d>15&&(e>y||e!==h(e)))throw Error(p+g.s*e);if((a=a-c-1)>B)g.c=g.e=null;else if(a<D)g.c=[g.e=0];else{if(g.e=a,g.c=[],c=(a+1)%m,a<0&&(c+=m),c<d){for(c&&g.c.push(+f.slice(0,c)),d-=m;c<d;)g.c.push(+f.slice(c,c+=m));c=m-(f=f.slice(c)).length}else c-=d;for(;c--;f+="0");g.c.push(+f)}}else g.c=[g.e=0]}function W(e,t,n,r){var i,o,s,a,c;if(null==n?n=O:C(n,0,8),!e.c)return e.toString();if(i=e.c[0],s=e.e,null==t)c=_(e.c),c=1==r||2==r&&(s<=N||s>=L)?S(c,s):x(c,s,"0");else if(o=(e=Z(new H(e),t,n)).e,a=(c=_(e.c)).length,1==r||2==r&&(t<=o||o<=N)){for(;a<t;c+="0",a++);c=S(c,o)}else if(t-=s,c=x(c,o,"0"),o+1>a){if(--t>0)for(c+=".";t--;c+="0");}else if((t+=o-a)>0)for(o+1==a&&(c+=".");t--;c+="0");return e.s<0&&i?"-"+c:c}function V(e,t){for(var n,r,i=1,o=new H(e[0]);i<e.length;i++)(!(r=new H(e[i])).s||(n=E(o,r))===t||0===n&&o.s===t)&&(o=r);return o}function K(e,t,n){for(var r=1,i=t.length;!t[--i];t.pop());for(i=t[0];i>=10;i/=10,r++);return(n=r+n*m-1)>B?e.c=e.e=null:n<D?e.c=[e.e=0]:(e.e=n,e.c=t),e}function Z(e,t,n,r){var i,o,s,a,c,l,u,f=e.c,p=v;if(f){e:{for(i=1,a=f[0];a>=10;a/=10,i++);if((o=t-i)<0)o+=m,s=t,c=f[l=0],u=h(c/p[i-s-1]%10);else if((l=d((o+1)/m))>=f.length){if(!r)break e;for(;f.length<=l;f.push(0));c=u=0,i=1,s=(o%=m)-m+1}else{for(c=a=f[l],i=1;a>=10;a/=10,i++);u=(s=(o%=m)-m+i)<0?0:h(c/p[i-s-1]%10)}if(r=r||t<0||null!=f[l+1]||(s<0?c:c%p[i-s-1]),r=n<4?(u||r)&&(0==n||n==(e.s<0?3:2)):u>5||5==u&&(4==n||r||6==n&&(o>0?s>0?c/p[i-s]:0:f[l-1])%10&1||n==(e.s<0?8:7)),t<1||!f[0])return f.length=0,r?(t-=e.e+1,f[0]=p[(m-t%m)%m],e.e=-t||0):f[0]=e.e=0,e;if(0==o?(f.length=l,a=1,l--):(f.length=l+1,a=p[m-o],f[l]=s>0?h(c/p[i-s]%p[s])*a:0),r)for(;;){if(0==l){for(o=1,s=f[0];s>=10;s/=10,o++);for(s=f[0]+=a,a=1;s>=10;s/=10,a++);o!=a&&(e.e++,f[0]==g&&(f[0]=1));break}if(f[l]+=a,f[l]!=g)break;f[l--]=0,a=1}for(o=f.length;0===f[--o];f.pop());}e.e>B?e.c=e.e=null:e.e<D&&(e.c=[e.e=0])}return e}function G(e){var t,n=e.e;return null===n?e.toString():(t=_(e.c),t=n<=N||n>=L?S(t,n):x(t,n,"0"),e.s<0?"-"+t:t)}return H.clone=e,H.ROUND_UP=0,H.ROUND_DOWN=1,H.ROUND_CEIL=2,H.ROUND_FLOOR=3,H.ROUND_HALF_UP=4,H.ROUND_HALF_DOWN=5,H.ROUND_HALF_EVEN=6,H.ROUND_HALF_CEIL=7,H.ROUND_HALF_FLOOR=8,H.EUCLID=9,H.config=H.set=function(e){var t,n;if(null!=e){if("object"!=typeof e)throw Error(f+"Object expected: "+e);if(e.hasOwnProperty(t="DECIMAL_PLACES")&&(C(n=e[t],0,w,t),P=n),e.hasOwnProperty(t="ROUNDING_MODE")&&(C(n=e[t],0,8,t),O=n),e.hasOwnProperty(t="EXPONENTIAL_AT")&&((n=e[t])&&n.pop?(C(n[0],-w,0,t),C(n[1],0,w,t),N=n[0],L=n[1]):(C(n,-w,w,t),N=-(L=n<0?-n:n))),e.hasOwnProperty(t="RANGE"))if((n=e[t])&&n.pop)C(n[0],-w,-1,t),C(n[1],1,w,t),D=n[0],B=n[1];else{if(C(n,-w,w,t),!n)throw Error(f+t+" cannot be zero: "+n);D=-(B=n<0?-n:n)}if(e.hasOwnProperty(t="CRYPTO")){if((n=e[t])!==!!n)throw Error(f+t+" not true or false: "+n);if(n){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw U=!n,Error(f+"crypto unavailable");U=n}else U=n}if(e.hasOwnProperty(t="MODULO_MODE")&&(C(n=e[t],0,9,t),j=n),e.hasOwnProperty(t="POW_PRECISION")&&(C(n=e[t],0,w,t),F=n),e.hasOwnProperty(t="FORMAT")){if("object"!=typeof(n=e[t]))throw Error(f+t+" not an object: "+n);z=n}if(e.hasOwnProperty(t="ALPHABET")){if("string"!=typeof(n=e[t])||/^.?$|[+\-.\s]|(.).*\1/.test(n))throw Error(f+t+" invalid: "+n);q="0123456789"==n.slice(0,10),$=n}}return{DECIMAL_PLACES:P,ROUNDING_MODE:O,EXPONENTIAL_AT:[N,L],RANGE:[D,B],CRYPTO:U,MODULO_MODE:j,POW_PRECISION:F,FORMAT:z,ALPHABET:$}},H.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!H.DEBUG)return!0;var t,n,r=e.c,i=e.e,o=e.s;e:if("[object Array]"=={}.toString.call(r)){if((1===o||-1===o)&&i>=-w&&i<=w&&i===h(i)){if(0===r[0]){if(0===i&&1===r.length)return!0;break e}if((t=(i+1)%m)<1&&(t+=m),String(r[0]).length==t){for(t=0;t<r.length;t++)if((n=r[t])<0||n>=g||n!==h(n))break e;if(0!==n)return!0}}}else if(null===r&&null===i&&(null===o||1===o||-1===o))return!0;throw Error(f+"Invalid BigNumber: "+e)},H.maximum=H.max=function(){return V(arguments,-1)},H.minimum=H.min=function(){return V(arguments,1)},H.random=(o=9007199254740992,s=Math.random()*o&2097151?function(){return h(Math.random()*o)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var t,n,r,i,o,a=0,c=[],l=new H(R);if(null==e?e=P:C(e,0,w),i=d(e/m),U)if(crypto.getRandomValues){for(t=crypto.getRandomValues(new Uint32Array(i*=2));a<i;)(o=131072*t[a]+(t[a+1]>>>11))>=9e15?(n=crypto.getRandomValues(new Uint32Array(2)),t[a]=n[0],t[a+1]=n[1]):(c.push(o%1e14),a+=2);a=i/2}else{if(!crypto.randomBytes)throw U=!1,Error(f+"crypto unavailable");for(t=crypto.randomBytes(i*=7);a<i;)(o=281474976710656*(31&t[a])+1099511627776*t[a+1]+4294967296*t[a+2]+16777216*t[a+3]+(t[a+4]<<16)+(t[a+5]<<8)+t[a+6])>=9e15?crypto.randomBytes(7).copy(t,a):(c.push(o%1e14),a+=7);a=i/7}if(!U)for(;a<i;)(o=s())<9e15&&(c[a++]=o%1e14);for(i=c[--a],e%=m,i&&e&&(o=v[m-e],c[a]=h(i/o)*o);0===c[a];c.pop(),a--);if(a<0)c=[r=0];else{for(r=-1;0===c[0];c.splice(0,1),r-=m);for(a=1,o=c[0];o>=10;o/=10,a++);a<m&&(r-=m-a)}return l.e=r,l.c=c,l}),H.sum=function(){for(var e=1,t=arguments,n=new H(t[0]);e<t.length;)n=n.plus(t[e++]);return n},r=function(){var e="0123456789";function t(e,t,n,r){for(var i,o,s=[0],a=0,c=e.length;a<c;){for(o=s.length;o--;s[o]*=t);for(s[0]+=r.indexOf(e.charAt(a++)),i=0;i<s.length;i++)s[i]>n-1&&(null==s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/n|0,s[i]%=n)}return s.reverse()}return function(r,i,o,s,a){var c,l,u,d,h,f,p,g,m=r.indexOf("."),y=P,v=O;for(m>=0&&(d=F,F=0,r=r.replace(".",""),f=(g=new H(i)).pow(r.length-m),F=d,g.c=t(x(_(f.c),f.e,"0"),10,o,e),g.e=g.c.length),u=d=(p=t(r,i,o,a?(c=$,e):(c=e,$))).length;0==p[--d];p.pop());if(!p[0])return c.charAt(0);if(m<0?--u:(f.c=p,f.e=u,f.s=s,p=(f=n(f,g,y,v,o)).c,h=f.r,u=f.e),m=p[l=u+y+1],d=o/2,h=h||l<0||null!=p[l+1],h=v<4?(null!=m||h)&&(0==v||v==(f.s<0?3:2)):m>d||m==d&&(4==v||h||6==v&&1&p[l-1]||v==(f.s<0?8:7)),l<1||!p[0])r=h?x(c.charAt(1),-y,c.charAt(0)):c.charAt(0);else{if(p.length=l,h)for(--o;++p[--l]>o;)p[l]=0,l||(++u,p=[1].concat(p));for(d=p.length;!p[--d];);for(m=0,r="";m<=d;r+=c.charAt(p[m++]));r=x(r,u,c.charAt(0))}return r}}(),n=function(){function e(e,t,n){var r,i,o,s,a=0,c=e.length,l=t%b,u=t/b|0;for(e=e.slice();c--;)a=((i=l*(o=e[c]%b)+(r=u*o+(s=e[c]/b|0)*l)%b*b+a)/n|0)+(r/b|0)+u*s,e[c]=i%n;return a&&(e=[a].concat(e)),e}function t(e,t,n,r){var i,o;if(n!=r)o=n>r?1:-1;else for(i=o=0;i<n;i++)if(e[i]!=t[i]){o=e[i]>t[i]?1:-1;break}return o}function n(e,t,n,r){for(var i=0;n--;)e[n]-=i,i=e[n]<t[n]?1:0,e[n]=i*r+e[n]-t[n];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(r,i,o,s,a){var c,l,u,d,f,p,y,v,b,w,_,E,C,k,S,x,M,I=r.s==i.s?1:-1,T=r.c,R=i.c;if(!(T&&T[0]&&R&&R[0]))return new H(r.s&&i.s&&(T?!R||T[0]!=R[0]:R)?T&&0==T[0]||!R?0*I:I/0:NaN);for(b=(v=new H(I)).c=[],I=o+(l=r.e-i.e)+1,a||(a=g,l=A(r.e/m)-A(i.e/m),I=I/m|0),u=0;R[u]==(T[u]||0);u++);if(R[u]>(T[u]||0)&&l--,I<0)b.push(1),d=!0;else{for(k=T.length,x=R.length,u=0,I+=2,(f=h(a/(R[0]+1)))>1&&(R=e(R,f,a),T=e(T,f,a),x=R.length,k=T.length),C=x,_=(w=T.slice(0,x)).length;_<x;w[_++]=0);M=R.slice(),M=[0].concat(M),S=R[0],R[1]>=a/2&&S++;do{if(f=0,(c=t(R,w,x,_))<0){if(E=w[0],x!=_&&(E=E*a+(w[1]||0)),(f=h(E/S))>1)for(f>=a&&(f=a-1),y=(p=e(R,f,a)).length,_=w.length;1==t(p,w,y,_);)f--,n(p,x<y?M:R,y,a),y=p.length,c=1;else 0==f&&(c=f=1),y=(p=R.slice()).length;if(y<_&&(p=[0].concat(p)),n(w,p,_,a),_=w.length,-1==c)for(;t(R,w,x,_)<1;)f++,n(w,x<_?M:R,_,a),_=w.length}else 0===c&&(f++,w=[0]);b[u++]=f,w[0]?w[_++]=T[C]||0:(w=[T[C]],_=1)}while((C++<k||null!=w[0])&&I--);d=null!=w[0],b[0]||b.splice(0,1)}if(a==g){for(u=1,I=b[0];I>=10;I/=10,u++);Z(v,o+(v.e=u+l*m-1)+1,s,d)}else v.e=l,v.r=+d;return v}}(),a=/^(-?)0([xbo])(?=\w[\w.]*$)/i,c=/^([^.]+)\.$/,l=/^\.([^.]+)$/,M=/^-?(Infinity|NaN)$/,I=/^\s*\+(?=[\w.])|^\s+|\s+$/g,i=function(e,t,n,r){var i,o=n?t:t.replace(I,"");if(M.test(o))e.s=isNaN(o)?null:o<0?-1:1;else{if(!n&&(o=o.replace(a,(function(e,t,n){return i="x"==(n=n.toLowerCase())?16:"b"==n?2:8,r&&r!=i?e:t})),r&&(i=r,o=o.replace(c,"$1").replace(l,"0.$1")),t!=o))return new H(o,i);if(H.DEBUG)throw Error(f+"Not a"+(r?" base "+r:"")+" number: "+t);e.s=null}e.c=e.e=null},T.absoluteValue=T.abs=function(){var e=new H(this);return e.s<0&&(e.s=1),e},T.comparedTo=function(e,t){return E(this,new H(e,t))},T.decimalPlaces=T.dp=function(e,t){var n,r,i,o=this;if(null!=e)return C(e,0,w),null==t?t=O:C(t,0,8),Z(new H(o),e+o.e+1,t);if(!(n=o.c))return null;if(r=((i=n.length-1)-A(this.e/m))*m,i=n[i])for(;i%10==0;i/=10,r--);return r<0&&(r=0),r},T.dividedBy=T.div=function(e,t){return n(this,new H(e,t),P,O)},T.dividedToIntegerBy=T.idiv=function(e,t){return n(this,new H(e,t),0,1)},T.exponentiatedBy=T.pow=function(e,t){var n,r,i,o,s,a,c,l,u=this;if((e=new H(e)).c&&!e.isInteger())throw Error(f+"Exponent not an integer: "+G(e));if(null!=t&&(t=new H(t)),s=e.e>14,!u.c||!u.c[0]||1==u.c[0]&&!u.e&&1==u.c.length||!e.c||!e.c[0])return l=new H(Math.pow(+G(u),s?e.s*(2-k(e)):+G(e))),t?l.mod(t):l;if(a=e.s<0,t){if(t.c?!t.c[0]:!t.s)return new H(NaN);(r=!a&&u.isInteger()&&t.isInteger())&&(u=u.mod(t))}else{if(e.e>9&&(u.e>0||u.e<-1||(0==u.e?u.c[0]>1||s&&u.c[1]>=24e7:u.c[0]<8e13||s&&u.c[0]<=9999975e7)))return o=u.s<0&&k(e)?-0:0,u.e>-1&&(o=1/o),new H(a?1/o:o);F&&(o=d(F/m+2))}for(s?(n=new H(.5),a&&(e.s=1),c=k(e)):c=(i=Math.abs(+G(e)))%2,l=new H(R);;){if(c){if(!(l=l.times(u)).c)break;o?l.c.length>o&&(l.c.length=o):r&&(l=l.mod(t))}if(i){if(0===(i=h(i/2)))break;c=i%2}else if(Z(e=e.times(n),e.e+1,1),e.e>14)c=k(e);else{if(0===(i=+G(e)))break;c=i%2}u=u.times(u),o?u.c&&u.c.length>o&&(u.c.length=o):r&&(u=u.mod(t))}return r?l:(a&&(l=R.div(l)),t?l.mod(t):o?Z(l,F,O,undefined):l)},T.integerValue=function(e){var t=new H(this);return null==e?e=O:C(e,0,8),Z(t,t.e+1,e)},T.isEqualTo=T.eq=function(e,t){return 0===E(this,new H(e,t))},T.isFinite=function(){return!!this.c},T.isGreaterThan=T.gt=function(e,t){return E(this,new H(e,t))>0},T.isGreaterThanOrEqualTo=T.gte=function(e,t){return 1===(t=E(this,new H(e,t)))||0===t},T.isInteger=function(){return!!this.c&&A(this.e/m)>this.c.length-2},T.isLessThan=T.lt=function(e,t){return E(this,new H(e,t))<0},T.isLessThanOrEqualTo=T.lte=function(e,t){return-1===(t=E(this,new H(e,t)))||0===t},T.isNaN=function(){return!this.s},T.isNegative=function(){return this.s<0},T.isPositive=function(){return this.s>0},T.isZero=function(){return!!this.c&&0==this.c[0]},T.minus=function(e,t){var n,r,i,o,s=this,a=s.s;if(t=(e=new H(e,t)).s,!a||!t)return new H(NaN);if(a!=t)return e.s=-t,s.plus(e);var c=s.e/m,l=e.e/m,u=s.c,d=e.c;if(!c||!l){if(!u||!d)return u?(e.s=-t,e):new H(d?s:NaN);if(!u[0]||!d[0])return d[0]?(e.s=-t,e):new H(u[0]?s:3==O?-0:0)}if(c=A(c),l=A(l),u=u.slice(),a=c-l){for((o=a<0)?(a=-a,i=u):(l=c,i=d),i.reverse(),t=a;t--;i.push(0));i.reverse()}else for(r=(o=(a=u.length)<(t=d.length))?a:t,a=t=0;t<r;t++)if(u[t]!=d[t]){o=u[t]<d[t];break}if(o&&(i=u,u=d,d=i,e.s=-e.s),(t=(r=d.length)-(n=u.length))>0)for(;t--;u[n++]=0);for(t=g-1;r>a;){if(u[--r]<d[r]){for(n=r;n&&!u[--n];u[n]=t);--u[n],u[r]+=g}u[r]-=d[r]}for(;0==u[0];u.splice(0,1),--l);return u[0]?K(e,u,l):(e.s=3==O?-1:1,e.c=[e.e=0],e)},T.modulo=T.mod=function(e,t){var r,i,o=this;return e=new H(e,t),!o.c||!e.s||e.c&&!e.c[0]?new H(NaN):!e.c||o.c&&!o.c[0]?new H(o):(9==j?(i=e.s,e.s=1,r=n(o,e,0,3),e.s=i,r.s*=i):r=n(o,e,0,j),(e=o.minus(r.times(e))).c[0]||1!=j||(e.s=o.s),e)},T.multipliedBy=T.times=function(e,t){var n,r,i,o,s,a,c,l,u,d,h,f,p,y,v,w=this,_=w.c,E=(e=new H(e,t)).c;if(!(_&&E&&_[0]&&E[0]))return!w.s||!e.s||_&&!_[0]&&!E||E&&!E[0]&&!_?e.c=e.e=e.s=null:(e.s*=w.s,_&&E?(e.c=[0],e.e=0):e.c=e.e=null),e;for(r=A(w.e/m)+A(e.e/m),e.s*=w.s,(c=_.length)<(d=E.length)&&(p=_,_=E,E=p,i=c,c=d,d=i),i=c+d,p=[];i--;p.push(0));for(y=g,v=b,i=d;--i>=0;){for(n=0,h=E[i]%v,f=E[i]/v|0,o=i+(s=c);o>i;)n=((l=h*(l=_[--s]%v)+(a=f*l+(u=_[s]/v|0)*h)%v*v+p[o]+n)/y|0)+(a/v|0)+f*u,p[o--]=l%y;p[o]=n}return n?++r:p.splice(0,1),K(e,p,r)},T.negated=function(){var e=new H(this);return e.s=-e.s||null,e},T.plus=function(e,t){var n,r=this,i=r.s;if(t=(e=new H(e,t)).s,!i||!t)return new H(NaN);if(i!=t)return e.s=-t,r.minus(e);var o=r.e/m,s=e.e/m,a=r.c,c=e.c;if(!o||!s){if(!a||!c)return new H(i/0);if(!a[0]||!c[0])return c[0]?e:new H(a[0]?r:0*i)}if(o=A(o),s=A(s),a=a.slice(),i=o-s){for(i>0?(s=o,n=c):(i=-i,n=a),n.reverse();i--;n.push(0));n.reverse()}for((i=a.length)-(t=c.length)<0&&(n=c,c=a,a=n,t=i),i=0;t;)i=(a[--t]=a[t]+c[t]+i)/g|0,a[t]=g===a[t]?0:a[t]%g;return i&&(a=[i].concat(a),++s),K(e,a,s)},T.precision=T.sd=function(e,t){var n,r,i,o=this;if(null!=e&&e!==!!e)return C(e,1,w),null==t?t=O:C(t,0,8),Z(new H(o),e,t);if(!(n=o.c))return null;if(r=(i=n.length-1)*m+1,i=n[i]){for(;i%10==0;i/=10,r--);for(i=n[0];i>=10;i/=10,r++);}return e&&o.e+1>r&&(r=o.e+1),r},T.shiftedBy=function(e){return C(e,-9007199254740991,y),this.times("1e"+e)},T.squareRoot=T.sqrt=function(){var e,t,r,i,o,s=this,a=s.c,c=s.s,l=s.e,u=P+4,d=new H("0.5");if(1!==c||!a||!a[0])return new H(!c||c<0&&(!a||a[0])?NaN:a?s:1/0);if(0==(c=Math.sqrt(+G(s)))||c==1/0?(((t=_(a)).length+l)%2==0&&(t+="0"),c=Math.sqrt(+t),l=A((l+1)/2)-(l<0||l%2),r=new H(t=c==1/0?"5e"+l:(t=c.toExponential()).slice(0,t.indexOf("e")+1)+l)):r=new H(c+""),r.c[0])for((c=(l=r.e)+u)<3&&(c=0);;)if(o=r,r=d.times(o.plus(n(s,o,u,1))),_(o.c).slice(0,c)===(t=_(r.c)).slice(0,c)){if(r.e<l&&--c,"9999"!=(t=t.slice(c-3,c+1))&&(i||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(Z(r,r.e+P+2,1),e=!r.times(r).eq(s));break}if(!i&&(Z(o,o.e+P+2,0),o.times(o).eq(s))){r=o;break}u+=4,c+=4,i=1}return Z(r,r.e+P+1,O,e)},T.toExponential=function(e,t){return null!=e&&(C(e,0,w),e++),W(this,e,t,1)},T.toFixed=function(e,t){return null!=e&&(C(e,0,w),e=e+this.e+1),W(this,e,t)},T.toFormat=function(e,t,n){var r,i=this;if(null==n)null!=e&&t&&"object"==typeof t?(n=t,t=null):e&&"object"==typeof e?(n=e,e=t=null):n=z;else if("object"!=typeof n)throw Error(f+"Argument not an object: "+n);if(r=i.toFixed(e,t),i.c){var o,s=r.split("."),a=+n.groupSize,c=+n.secondaryGroupSize,l=n.groupSeparator||"",u=s[0],d=s[1],h=i.s<0,p=h?u.slice(1):u,g=p.length;if(c&&(o=a,a=c,c=o,g-=o),a>0&&g>0){for(o=g%a||a,u=p.substr(0,o);o<g;o+=a)u+=l+p.substr(o,a);c>0&&(u+=l+p.slice(o)),h&&(u="-"+u)}r=d?u+(n.decimalSeparator||"")+((c=+n.fractionGroupSize)?d.replace(new RegExp("\\d{"+c+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):d):u}return(n.prefix||"")+r+(n.suffix||"")},T.toFraction=function(e){var t,r,i,o,s,a,c,l,u,d,h,p,g=this,y=g.c;if(null!=e&&(!(c=new H(e)).isInteger()&&(c.c||1!==c.s)||c.lt(R)))throw Error(f+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+G(c));if(!y)return new H(g);for(t=new H(R),u=r=new H(R),i=l=new H(R),p=_(y),s=t.e=p.length-g.e-1,t.c[0]=v[(a=s%m)<0?m+a:a],e=!e||c.comparedTo(t)>0?s>0?t:u:c,a=B,B=1/0,c=new H(p),l.c[0]=0;d=n(c,t,0,1),1!=(o=r.plus(d.times(i))).comparedTo(e);)r=i,i=o,u=l.plus(d.times(o=u)),l=o,t=c.minus(d.times(o=t)),c=o;return o=n(e.minus(r),i,0,1),l=l.plus(o.times(u)),r=r.plus(o.times(i)),l.s=u.s=g.s,h=n(u,i,s*=2,O).minus(g).abs().comparedTo(n(l,r,s,O).minus(g).abs())<1?[u,i]:[l,r],B=a,h},T.toNumber=function(){return+G(this)},T.toPrecision=function(e,t){return null!=e&&C(e,1,w),W(this,e,t,2)},T.toString=function(e){var t,n=this,i=n.s,o=n.e;return null===o?i?(t="Infinity",i<0&&(t="-"+t)):t="NaN":(null==e?t=o<=N||o>=L?S(_(n.c),o):x(_(n.c),o,"0"):10===e&&q?t=x(_((n=Z(new H(n),P+o+1,O)).c),n.e,"0"):(C(e,2,$.length,"Base"),t=r(x(_(n.c),o,"0"),10,e,i,!0)),i<0&&n.c[0]&&(t="-"+t)),t},T.valueOf=T.toJSON=function(){return G(this)},T._isBigNumber=!0,T[Symbol.toStringTag]="BigNumber",T[Symbol.for("nodejs.util.inspect.custom")]=T.valueOf,null!=t&&H.set(t),H}();const I={bigNumber:e=>new M(e),multiply(e,t){if(void 0===e||void 0===t)return M(0);const n=new M(e),r=new M(t);return n.multipliedBy(r)},formatNumberToLocalString:(e,t=2)=>void 0===e?"0.00":"number"==typeof e?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})},T={numericInputKeyDown(e,t,n){const r=e.metaKey||e.ctrlKey,i=e.key,o=i.toLocaleLowerCase(),s=","===i,a="."===i,c=i>="0"&&i<="9";!r&&("a"===o||"c"===o||"v"===o||"x"===o)&&e.preventDefault(),"0"!==t||s||a||"0"!==i||e.preventDefault(),"0"===t&&c&&(n(i),e.preventDefault()),(s||a)&&(t||(n("0."),e.preventDefault()),(t?.includes(".")||t?.includes(","))&&e.preventDefault()),c||["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"].includes(i)||a||s||e.preventDefault()}},R=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}],P={URLS:{FAQ:"https://walletconnect.com/faq"}},O={WC_NAME_SUFFIX:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CHAIN:{EVM:"evm",SOLANA:"solana"},CHAIN_NAME:{EVM:"Ethereum",SOLANA:"Solana"}};function N(e,t){return"light"===t?{"--w3m-accent":e?.["--w3m-accent"]||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":e?.["--w3m-accent"]||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}},666:(e,t,n)=>{"use strict";n.d(t,{Uj:()=>se,Np:()=>U,jQ:()=>b,$m:()=>_e,TP:()=>q,WB:()=>O,x4:()=>Y,aK:()=>E,oU:()=>c,wE:()=>l,f:()=>Ae,En:()=>I,W3:()=>ce,p_:()=>L,aG:()=>fe,Hd:()=>F,z3:()=>k,IN:()=>X,aS:()=>Ee,Rv:()=>ge,Pt:()=>W,iT:()=>y,GN:()=>ie,Wn:()=>A,Ib:()=>ye,WC:()=>Z});var r=n(5476),i=n(8520),o=n(2538);const s="https://secure.walletconnect.com",a=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:""}],c={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:s,SECURE_SITE_DASHBOARD:`${s}/dashboard`,SECURE_SITE_FAVICON:`${s}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NATIVE_TOKEN_ADDRESS:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",CONVERT_SLIPPAGE_TOLERANCE:1},l={isMobile:()=>"undefined"!=typeof window&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),checkCaipNetwork:(e,t="")=>e?.id.toLocaleLowerCase().includes(t.toLowerCase()),isAndroid(){const e=window.navigator.userAgent.toLowerCase();return l.isMobile()&&e.includes("android")},isIos(){const e=window.navigator.userAgent.toLowerCase();return l.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:e=>!e||e-Date.now()<=c.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=c.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+c.FOUR_MINUTES_MS,getNetworkId:e=>e?.split(":")[1],getPlainAddress:e=>e?.split(":")[2],wait:async e=>new Promise((t=>{setTimeout(t,e)})),debounce(e,t=500){let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout((function(){e(...r)}),t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(l.isHttpUrl(e))return this.formatUniversalUrl(e,t);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`);return{redirect:`${n}wc?uri=${encodeURIComponent(t)}`,href:n}},formatUniversalUrl(e,t){if(!l.isHttpUrl(e))return this.formatNativeUrl(e,t);let n=e;n.endsWith("/")||(n=`${n}/`);return{redirect:`${n}wc?uri=${encodeURIComponent(t)}`,href:n}},openHref(e,t,n){window.open(e,t,n||"noreferrer noopener")},returnOpenHref:(e,t,n)=>window.open(e,t,n||"noreferrer noopener"),async preloadImage(e){const t=new Promise(((t,n)=>{const r=new Image;r.onload=t,r.onerror=n,r.crossOrigin="anonymous",r.src=e}));return Promise.race([t,l.wait(2e3)])},formatBalance(e,t){let n;if("0"===e)n="0.000";else if("string"==typeof e){const t=Number(e);t&&(n=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return n?`${n} ${t??""}`:`0.000 ${t??""}`},formatBalance2(e,t){let n;if("0"===e)n="0";else if("string"==typeof e){const t=Number(e);t&&(n=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return{value:n??"0",rest:"0"===n?"000":"",symbol:t}},getApiUrl:()=>o.oU.W3M_API_URL,getBlockchainApiUrl:()=>o.oU.BLOCKCHAIN_API_RPC_URL,getAnalyticsUrl:()=>o.oU.PULSE_API_URL,getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),parseError:e=>"string"==typeof e?e:"string"==typeof e?.issues?.[0]?.message?e.issues[0].message:e instanceof Error?e.message:"Unknown error",sortRequestedNetworks(e,t=[]){const n={};return t&&e&&(e.forEach(((e,t)=>{n[e]=t})),t.sort(((e,t)=>{const r=n[e.id],i=n[t.id];return void 0!==r&&void 0!==i?r-i:void 0!==r?-1:void 0!==i?1:0}))),t},calculateBalance(e){let t=0;for(const n of e)t+=n.value??0;return t},formatTokenBalance(e){const t=e.toFixed(2),[n,r]=t.split(".");return{dollars:n,pennies:r}},isAddress:e=>!!/^(?:0x)?[0-9a-f]{40}$/iu.test(e)&&!(!/^(?:0x)?[0-9a-f]{40}$/iu.test(e)&&!/^(?:0x)?[0-9A-F]{40}$/iu.test(e)),uniqueBy(e,t){const n=new Set;return e.filter((e=>{const r=e[t];return!n.has(r)&&(n.add(r),!0)}))}};async function u(...e){const t=await fetch(...e);if(!t.ok){throw new Error(`HTTP status code: ${t.status}`,{cause:t})}return t}class d{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,signal:t,cache:n,...r}){const i=this.createUrl(r);return(await u(i,{method:"GET",headers:e,signal:t,cache:n})).json()}async getBlob({headers:e,signal:t,...n}){const r=this.createUrl(n);return(await u(r,{method:"GET",headers:e,signal:t})).blob()}async post({body:e,headers:t,signal:n,...r}){const i=this.createUrl(r);return(await u(i,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0,signal:n})).json()}async put({body:e,headers:t,signal:n,...r}){const i=this.createUrl(r);return(await u(i,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0,signal:n})).json()}async delete({body:e,headers:t,signal:n,...r}){const i=this.createUrl(r);return(await u(i,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0,signal:n})).json()}createUrl({path:e,params:t}){const n=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach((([e,t])=>{t&&n.searchParams.append(e,t)})),n}}const h="WALLETCONNECT_DEEPLINK_CHOICE",f="@w3m/recent",p="@w3m/connected_wallet_image_url",g="@w3m/connected_connector",m="@w3m/connected_social",y={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(h,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=localStorage.getItem(h);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(h)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{const t=y.getRecentWallets();t.find((t=>t.id===e.id))||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(f,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const e=localStorage.getItem(f);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(p,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},removeConnectedWalletImageUrl(){try{localStorage.removeItem(p)}catch{console.info("Unable to remove Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(p)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(e){try{localStorage.setItem(g,e)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(g)}catch{console.info("Unable to get Connected Connector")}},setConnectedSocialProvider(e){try{localStorage.setItem(m,e)}catch{console.info("Unable to set Connected Social Provider")}},getConnectedSocialProvider(){try{return localStorage.getItem(m)}catch{console.info("Unable to get Connected Social Provider")}},getConnectedSocialUsername(){try{return localStorage.getItem("@w3m-storage/SOCIAL_USERNAME")}catch{console.info("Unable to get Connected Social Username")}}},v=(0,i.BX)({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),b={state:v,subscribeNetworkImages:e=>(0,i.B1)(v.networkImages,(()=>e(v.networkImages))),subscribeKey:(e,t)=>(0,r.u$)(v,e,t),subscribe:e=>(0,i.B1)(v,(()=>e(v))),setWalletImage(e,t){v.walletImages[e]=t},setNetworkImage(e,t){v.networkImages[e]=t},setChainImage(e,t){v.chainImages[e]=t},setConnectorImage(e,t){v.connectorImages[e]=t},setTokenImage(e,t){v.tokenImages[e]=t},setCurrencyImage(e,t){v.currencyImages[e]=t}},w=(0,i.BX)({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),A={state:w,subscribe:e=>(0,i.B1)(w,(()=>e(w))),setThemeMode(e){w.themeMode=e;try{const t=E.getAuthConnector();if(t){const n=A.getSnapshot().themeVariables;t.provider.syncTheme({themeMode:e,themeVariables:n,w3mThemeVariables:(0,o.o_)(n,e)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(e){w.themeVariables={...w.themeVariables,...e};try{const e=E.getAuthConnector();if(e){const t=A.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:t,w3mThemeVariables:(0,o.o_)(w.themeVariables,w.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot:()=>(0,i.P9)(w)},_=(0,i.BX)({connectors:[]}),E={state:_,subscribeKey:(e,t)=>(0,r.u$)(_,e,t),setConnectors(e,t){t?(_.connectors=[..._.connectors,...e.map((e=>(0,i.KR)(e)))],_.connectors=this.mergeMultiChainConnectors(_.connectors)):_.connectors=e.map((e=>(0,i.KR)(e)))},mergeMultiChainConnectors(e){const t=[];return e.forEach((e=>{const{name:n,chain:r,type:i}=e,o=t.findIndex((e=>e.name===n));if(-1===o)t.push({...e});else{const n=t[o];n&&(n?.chain===r||n.type===i||"MULTI_CHAIN"===n.type?t.push({...e}):t[o]={...n,type:"MULTI_CHAIN",providers:[n,e]})}})),t},addConnector(e){if(_.connectors.push((0,i.KR)(e)),"w3mAuth"===e.id){const t=e,n=(0,i.P9)(F.state),r=A.getSnapshot().themeMode,s=A.getSnapshot().themeVariables;t?.provider?.syncDappData?.({metadata:n.metadata,sdkVersion:n.sdkVersion,projectId:n.projectId}),t.provider.syncTheme({themeMode:r,themeVariables:s,w3mThemeVariables:(0,o.o_)(s,r)})}},getAuthConnector:()=>_.connectors.find((e=>"AUTH"===e.type)),getAnnouncedConnectorRdns:()=>_.connectors.filter((e=>"ANNOUNCED"===e.type)).map((e=>e.info?.rdns)),getConnectors:()=>_.connectors,getConnector:(e,t)=>_.connectors.find((n=>n.explorerId===e||n.info?.rdns===t))},C=(0,i.BX)({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0}),k={state:C,subscribe:e=>(0,i.B1)(C,(()=>e(C))),set(e){Object.assign(C,{...C,...e})}},S=new d({baseUrl:l.getAnalyticsUrl()}),x=["MODAL_CREATED"],M=(0,i.BX)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),I={state:M,subscribe:e=>(0,i.B1)(M,(()=>e(M))),_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:n}=F.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},async _sendAnalyticsEvent(e){try{if(x.includes(e.data.event)||"undefined"==typeof window)return;await S.post({path:"/e",headers:I._getApiHeaders(),body:{eventId:l.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){M.timestamp=Date.now(),M.data=e,F.state.enableAnalytics&&I._sendAnalyticsEvent(M)}},T={isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]},R={supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]},P=(0,i.BX)({multiChainEnabled:!1,chains:(0,r.zC)(),activeChain:void 0,activeCaipNetwork:void 0}),O={state:P,subscribeKey:(e,t)=>(0,r.u$)(P,e,t),subscribeChain(e){let t;const n=P.activeChain;return n?(0,i.B1)(P.chains,(()=>{const r=P.chains.get(n);t&&t===r||(t=r,e(r))})):()=>{}},subscribeChainProp(e,t){let n;const r=P.activeChain;return r?(0,i.B1)(P.chains,(()=>{const i=P.chains.get(r)?.[e];n!==i&&(n=i,t(i))})):()=>{}},initialize(e){const t=e?.[0]?.chain;if(!t)throw new Error("Chain is required to initialize ChainController");P.activeChain=t,e.forEach((e=>{P.chains.set(e.chain,{chain:e.chain,connectionControllerClient:e.connectionControllerClient,networkControllerClient:e.networkControllerClient,accountState:T,networkState:R})}))},setMultiChainEnabled(e){P.multiChainEnabled=e},setChainNetworkData(e,t){if(!e)throw new Error("Chain is required to update chain network data");const n=P.chains.get(e);n&&(n.networkState={...n.networkState,...t},P.chains.set(e,n),L.replaceState(n.networkState))},setChainAccountData(e,t){if(!e)throw new Error("Chain is required to update chain account data");const n=P.chains.get(e);n&&(n.accountState={...n.accountState,...t},P.chains.set(e,n),se.replaceState(n.accountState))},setAccountProp(e,t,n){this.setChainAccountData(P.multiChainEnabled?n:P.activeChain,{[e]:t})},setActiveChain(e){const t=e?P.chains.get(e):void 0;t&&(P.activeChain=t.chain,P.activeCaipNetwork=P.chains.get(t.chain)?.networkState?.requestedCaipNetworks?.[0],k.set({activeChain:e}))},setActiveConnector(e){e&&(P.activeConnector=(0,i.KR)(e))},getNetworkControllerClient(){const e=P.activeChain;if(!e)throw new Error("Chain is required to get network controller client");const t=P.chains.get(e);if(!t)throw new Error("Chain adapter not found");if(!t.networkControllerClient)throw new Error("NetworkController client not set");return t.networkControllerClient},getConnectionControllerClient(){const e=P.activeChain;if(!e)throw new Error("Chain is required to get connection controller client");const t=P.chains.get(e);if(!t)throw new Error("Chain adapter not found");if(!t.connectionControllerClient)throw new Error("ConnectionController client not set");return t.connectionControllerClient},getAccountProp(e){const t=(P.multiChainEnabled,P.activeChain);if(!t)return;const n=P.chains.get(t)?.accountState;return n?n[e]:void 0},getNetworkProp(e){const t=(P.multiChainEnabled,P.activeChain);if(!t)return;const n=P.chains.get(t)?.networkState;return n?n[e]:void 0},resetAccount(e){const t=P.multiChainEnabled?e:P.activeChain;if(!t)throw new Error("Chain is required to set account prop");this.setChainAccountData(t,{isConnected:!1,smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountType:void 0,socialProvider:void 0,socialWindow:void 0})}},N=(0,i.BX)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]}),L={state:N,replaceState(e){Object.assign(N,e)},subscribeKey(e,t){let n;return O.subscribeChainProp("networkState",(r=>{if(r){const i=r[e];n!==i&&(n=i,t(i))}}))},_getClient:()=>O.getNetworkControllerClient(),initializeDefaultNetwork(){const e=this.getRequestedCaipNetworks();e.length>0&&this.setCaipNetwork(e[0])},setCaipNetwork(e){const t=O.state.multiChainEnabled?e?.chain:O.state.activeChain;if(!t)throw new Error("chain is required to set active network");if(!e)throw new Error("caipNetwork is required to set active network");O.state.activeCaipNetwork=e,O.state.activeChain=t,O.setChainNetworkData(t,{caipNetwork:e}),k.set({activeChain:t,selectedNetworkId:e?.id}),O.state.chains.get(t)?.networkState?.allowUnsupportedChain||this.checkIfSupportedNetwork()},setDefaultCaipNetwork(e,t){const n=O.state.multiChainEnabled?t:O.state.activeChain;if(!n)throw new Error("chain is required to set default network");O.state.activeCaipNetwork=e,O.state.activeChain=n,O.setChainNetworkData(n,{caipNetwork:e,isDefaultCaipNetwork:!0}),k.set({selectedNetworkId:e?.id,activeChain:t})},setRequestedCaipNetworks(e,t){O.setChainNetworkData(O.state.multiChainEnabled?t:O.state.activeChain,{requestedCaipNetworks:e})},setAllowUnsupportedChain(e,t){O.setChainNetworkData(t||O.state.activeChain,{allowUnsupportedChain:e})},setSmartAccountEnabledNetworks(e,t){O.setChainNetworkData(O.state.multiChainEnabled?t:O.state.activeChain,{smartAccountEnabledNetworks:e})},getRequestedCaipNetworks(e){let t;if(!O.state.activeChain)throw new Error("activeChain is required to get requested networks");if(e){const n=O.state.multiChainEnabled?e:O.state.activeChain;if(!n)throw new Error("chain is required to get requested networks");t=[n]}else{t=O.state.multiChainEnabled?[...O.state.chains.keys()]:[O.state.activeChain]}const n=[],r=[];t.forEach((e=>{O.state.chains.get(e)?.networkState?.approvedCaipNetworkIds&&n.push(...O.state.chains.get(e)?.networkState?.approvedCaipNetworkIds||[]),O.state.chains.get(e)?.networkState?.requestedCaipNetworks&&r.push(...O.state.chains.get(e)?.networkState?.requestedCaipNetworks||[])}));return l.sortRequestedNetworks(n,r)},async switchActiveNetwork(e){const t=O.getNetworkControllerClient();await t.switchCaipNetwork(e);const n=O.state.multiChainEnabled?e?.chain:O.state.activeChain;if(!n)throw new Error("chain is required to switch active network");if(!e)throw new Error("network is required to switch active network");O.state.activeCaipNetwork=e,O.state.activeChain=n,O.setChainNetworkData(n,{caipNetwork:e}),k.set({activeChain:n,selectedNetworkId:e.id}),e&&I.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.id}})},getApprovedCaipNetworkIds(e){if(e){const t=O.state.multiChainEnabled?e:O.state.activeChain;if(!t)throw new Error("chain is required to get approved network IDs");return O.state.chains.get(t)?.networkState?.approvedCaipNetworkIds}const t=[];return Object.values(O.state.chains).forEach((e=>{e.networkState.approvedCaipNetworkIds&&t.push(...e.networkState?.approvedCaipNetworkIds||[])})),t},async setApprovedCaipNetworksData(e){const t=O.getNetworkControllerClient(),n=await t.getApprovedCaipNetworksData(),r=O.state.multiChainEnabled?e:O.state.activeChain;if(!r)throw new Error("chain is required to set approved network data");O.setChainNetworkData(r,{approvedCaipNetworkIds:n?.approvedCaipNetworkIds,supportsAllNetworks:n?.supportsAllNetworks||!1})},checkIfSupportedNetwork(){const e=(O.state.multiChainEnabled,O.state.activeChain);if(!e)return!1;const t=O.state.chains.get(e)?.networkState?.caipNetwork,n=this.getRequestedCaipNetworks();return n?.some((e=>e.id===t?.id))},checkIfSmartAccountEnabled(){const e=o.LX.caipNetworkIdToNumber(O.state.activeCaipNetwork?.id),t=O.state.activeChain;if(!t)throw new Error("activeChain is required to check if smart account is enabled");if(!e)return!1;const n=O.state.chains.get(t)?.networkState?.smartAccountEnabledNetworks||[];return Boolean(n?.includes(e))},resetNetwork(){const e=O.state.activeChain;if(!e)throw new Error("chain is required to reset network");O.state.chains.get(e)?.networkState?.isDefaultCaipNetwork||O.setChainNetworkData(e,{caipNetwork:void 0}),O.setChainNetworkData(e,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},getSupportsAllNetworks(){const e=(O.state.multiChainEnabled,O.state.activeChain);if(!e)throw new Error("chain is required to check if network supports all networks");return O.state.chains.get(e)?.networkState?.supportsAllNetworks},showUnsupportedChainUI(){setTimeout((()=>{ce.open({view:"UnsupportedChain"})}),300)}},D=new d({baseUrl:l.getApiUrl()}),B=(0,i.BX)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1,excludedRDNS:[]}),U={state:B,subscribeKey:(e,t)=>(0,r.u$)(B,e,t),_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:n}=F.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},_filterOutExtensions:e=>F.state.isUniversalProvider?e.filter((e=>Boolean(e.mobile_link||e.desktop_link||e.webapp_link))):e,async _fetchWalletImage(e){const t=`${D.baseUrl}/getWalletImage/${e}`,n=await D.getBlob({path:t,headers:U._getApiHeaders()});b.setWalletImage(e,URL.createObjectURL(n))},async _fetchNetworkImage(e){const t=`${D.baseUrl}/public/getAssetImage/${e}`,n=await D.getBlob({path:t,headers:U._getApiHeaders()});b.setNetworkImage(e,URL.createObjectURL(n))},async _fetchConnectorImage(e){const t=`${D.baseUrl}/public/getAssetImage/${e}`,n=await D.getBlob({path:t,headers:U._getApiHeaders()});b.setConnectorImage(e,URL.createObjectURL(n))},async _fetchCurrencyImage(e){const t=`${D.baseUrl}/public/getCurrencyImage/${e}`,n=await D.getBlob({path:t,headers:U._getApiHeaders()});b.setCurrencyImage(e,URL.createObjectURL(n))},async _fetchTokenImage(e){const t=`${D.baseUrl}/public/getTokenImage/${e}`,n=await D.getBlob({path:t,headers:U._getApiHeaders()});b.setTokenImage(e,URL.createObjectURL(n))},async fetchNetworkImages(){const e=L.getRequestedCaipNetworks(),t=e?.map((({imageId:e})=>e)).filter(Boolean);t&&await Promise.allSettled(t.map((e=>U._fetchNetworkImage(e))))},async fetchConnectorImages(){const{connectors:e}=E.state,t=e.map((({imageId:e})=>e)).filter(Boolean);await Promise.allSettled(t.map((e=>U._fetchConnectorImage(e))))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map((e=>U._fetchCurrencyImage(e))))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map((e=>U._fetchTokenImage(e))))},async fetchFeaturedWallets(){const{featuredWalletIds:e}=F.state;if(e?.length){const{data:t}=await D.get({path:"/getWallets",headers:U._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort(((t,n)=>e.indexOf(t.id)-e.indexOf(n.id)));const n=t.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled(n.map((e=>U._fetchWalletImage(e)))),B.featured=t}},async fetchRecommendedWallets(){const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:n}=F.state,r=[...t??[],...n??[]].filter(Boolean),{data:i,count:o}=await D.get({path:"/getWallets",headers:U._getApiHeaders(),params:{page:"1",chains:L.state.caipNetwork?.id,entries:"4",include:e?.join(","),exclude:r?.join(",")}}),s=y.getRecentWallets(),a=i.map((e=>e.image_id)).filter(Boolean),c=s.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...a,...c].map((e=>U._fetchWalletImage(e)))),B.recommended=i,B.count=o??0},async fetchWallets({page:e}){const{includeWalletIds:t,excludeWalletIds:n,featuredWalletIds:r}=F.state,i=[...B.recommended.map((({id:e})=>e)),...n??[],...r??[]].filter(Boolean),{data:o,count:s}=await D.get({path:"/getWallets",headers:U._getApiHeaders(),params:{page:String(e),entries:"40",chains:L.state.caipNetwork?.id,include:t?.join(","),exclude:i.join(",")}}),a=o.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...a.map((e=>U._fetchWalletImage(e))),l.wait(300)]),B.wallets=l.uniqueBy([...B.wallets,...U._filterOutExtensions(o)],"id"),B.count=s>B.count?s:B.count,B.page=e},async searchWalletByIds({ids:e}){const{data:t}=await D.get({path:"/getWallets",headers:U._getApiHeaders(),params:{page:"1",entries:String(e.length),chains:L.state.caipNetwork?.id,include:e?.join(",")}});t&&t.forEach((e=>{e?.rdns&&B.excludedRDNS.push(e.rdns)}))},async searchWallet({search:e}){const{includeWalletIds:t,excludeWalletIds:n}=F.state;B.search=[];const{data:r}=await D.get({path:"/getWallets",headers:U._getApiHeaders(),params:{page:"1",entries:"100",search:e?.trim(),chains:L.state.caipNetwork?.id,include:t?.join(","),exclude:n?.join(",")}}),i=r.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...i.map((e=>U._fetchWalletImage(e))),l.wait(300)]),B.search=U._filterOutExtensions(r)},async reFetchWallets(){B.page=1,B.wallets=[],await U.fetchFeaturedWallets(),await U.fetchRecommendedWallets()},prefetch(){const e=[U.fetchFeaturedWallets(),U.fetchRecommendedWallets(),U.fetchNetworkImages(),U.fetchConnectorImages()];void 0===F.state.enableAnalytics&&e.push(U.fetchAnalyticsConfig()),B.prefetchPromise=Promise.race([Promise.allSettled(e),l.wait(3e3)])},async fetchAnalyticsConfig(){const{isAnalyticsEnabled:e}=await D.get({path:"/getAnalyticsConfig",headers:U._getApiHeaders()});F.setEnableAnalytics(e)}},j=(0,i.BX)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),F={state:j,subscribeKey:(e,t)=>(0,r.u$)(j,e,t),setProjectId(e){j.projectId=e},setAllWallets(e){j.allWallets=e},setIncludeWalletIds(e){j.includeWalletIds=e},setExcludeWalletIds(e){j.excludeWalletIds=e,e&&U.searchWalletByIds({ids:e})},setFeaturedWalletIds(e){j.featuredWalletIds=e},setTokens(e){j.tokens=e},setTermsConditionsUrl(e){j.termsConditionsUrl=e},setPrivacyPolicyUrl(e){j.privacyPolicyUrl=e},setCustomWallets(e){j.customWallets=e},setIsSiweEnabled(e){j.isSiweEnabled=e},setIsUniversalProvider(e){j.isUniversalProvider=e},setEnableAnalytics(e){j.enableAnalytics=e},setSdkVersion(e){j.sdkVersion=e},setMetadata(e){j.metadata=e},setOnrampEnabled(e){j.enableOnramp=e},setDisableAppend(e){j.disableAppend=e},setEIP6963Enabled(e){j.enableEIP6963=e},setHasMultipleAddresses(e){j.hasMultipleAddresses=e}},z={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},$=new d({baseUrl:l.getBlockchainApiUrl()}),q={fetchIdentity:({address:e})=>$.get({path:`/v1/identity/${e}`,params:{projectId:F.state.projectId}}),fetchTransactions({account:e,projectId:t,cursor:n,onramp:r,signal:i,cache:o}){const s=n?{cursor:n}:{};return $.get({path:`/v1/account/${e}/history?projectId=${t}${r?`&onramp=${r}`:""}`,params:s,signal:i,cache:o})},fetchSwapQuote:({projectId:e,amount:t,userAddress:n,from:r,to:i,gasPrice:o})=>$.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{projectId:e,amount:t,userAddress:n,from:r,to:i,gasPrice:o}}),fetchSwapTokens:({projectId:e,chainId:t})=>$.get({path:`/v1/convert/tokens?projectId=${e}&chainId=${t}`}),fetchTokenPrice:({projectId:e,addresses:t})=>$.post({path:"/v1/fungible/price",body:{projectId:e,currency:"usd",addresses:t},headers:{"Content-Type":"application/json"}}),fetchSwapAllowance({projectId:e,tokenAddress:t,userAddress:n}){const{sdkType:r,sdkVersion:i}=F.state;return $.get({path:`/v1/convert/allowance?projectId=${e}&tokenAddress=${t}&userAddress=${n}`,headers:{"Content-Type":"application/json","x-sdk-type":r,"x-sdk-version":i}})},fetchGasPrice({projectId:e,chainId:t}){const{sdkType:n,sdkVersion:r}=F.state;return $.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json","x-sdk-type":n,"x-sdk-version":r},params:{projectId:e,chainId:t}})},generateSwapCalldata:({amount:e,from:t,projectId:n,to:r,userAddress:i})=>$.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:e,eip155:{slippage:c.CONVERT_SLIPPAGE_TOLERANCE},from:t,projectId:n,to:r,userAddress:i}}),generateApproveCalldata({from:e,projectId:t,to:n,userAddress:r}){const{sdkType:i,sdkVersion:o}=F.state;return $.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json","x-sdk-type":i,"x-sdk-version":o},params:{projectId:t,userAddress:r,from:e,to:n}})},async getBalance(e,t,n){const{sdkType:r,sdkVersion:i}=F.state;return $.get({path:`/v1/account/${e}/balance`,headers:{"x-sdk-type":r,"x-sdk-version":i},params:{currency:"usd",projectId:F.state.projectId,chainId:t,forceUpdate:n}})},lookupEnsName:async e=>$.get({path:`/v1/profile/account/${e}${o.oU.WC_NAME_SUFFIX}?projectId=${F.state.projectId}`}),reverseLookupEnsName:async({address:e})=>$.get({path:`/v1/profile/reverse/${e}?projectId=${F.state.projectId}`}),getEnsNameSuggestions:async e=>$.get({path:`/v1/profile/suggestions/${e}?projectId=${F.state.projectId}`}),registerEnsName:async({coinType:e,address:t,message:n,signature:r})=>$.post({path:"/v1/profile/account",body:{coin_type:e,address:t,message:n,signature:r},headers:{"Content-Type":"application/json"}}),generateOnRampURL:async({destinationWallets:e,partnerUserId:t,defaultNetwork:n,purchaseAmount:r,paymentAmount:i})=>(await $.post({path:`/v1/generators/onrampurl?projectId=${F.state.projectId}`,body:{destinationWallets:e,defaultNetwork:n,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:r,presetFiatAmount:i}})).url,async getOnrampOptions(){try{return await $.get({path:`/v1/onramp/options?projectId=${F.state.projectId}`})}catch(e){return z}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:n,network:r}){try{return await $.post({path:`/v1/onramp/quote?projectId=${F.state.projectId}`,body:{purchaseCurrency:e,paymentCurrency:t,amount:n,network:r}})}catch(e){return{coinbaseFee:{amount:n,currency:t.id},networkFee:{amount:n,currency:t.id},paymentSubtotal:{amount:n,currency:t.id},paymentTotal:{amount:n,currency:t.id},purchaseAmount:{amount:n,currency:t.id},quoteId:"mocked-quote-id"}}}},H=(0,i.BX)({message:"",variant:"success",open:!1}),W={state:H,subscribeKey:(e,t)=>(0,r.u$)(H,e,t),showLoading(e){H.message=e,H.variant="loading",H.open=!0},showSuccess(e){H.message=e,H.variant="success",H.open=!0},showError(e){const t=l.parseError(e);H.message=t,H.variant="error",H.open=!0},hide(){H.open=!1}};var V=n(5980);const K=(0,i.BX)({transactions:[],coinbaseTransactions:{},transactionsByYear:{},loading:!1,empty:!1,next:void 0}),Z={state:K,subscribe:e=>(0,i.B1)(K,(()=>e(K))),async fetchTransactions(e,t){const{projectId:n}=F.state;if(!n||!e)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");K.loading=!0;try{const r=await q.fetchTransactions({account:e,projectId:n,cursor:K.next,onramp:t,cache:"coinbase"===t?"no-cache":void 0}),i=this.filterSpamTransactions(r.data),o=[...K.transactions,...i];K.loading=!1,"coinbase"===t?K.coinbaseTransactions=this.groupTransactionsByYearAndMonth(K.coinbaseTransactions,r.data):(K.transactions=o,K.transactionsByYear=this.groupTransactionsByYearAndMonth(K.transactionsByYear,i)),K.empty=0===o.length,K.next=r.next?r.next:void 0}catch(t){I.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:n,cursor:K.next,isSmartAccount:se.state.preferredAccountType===V.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),W.showError("Failed to fetch transactions"),K.loading=!1,K.empty=!0,K.next=void 0}},groupTransactionsByYearAndMonth(e={},t=[]){const n=e;return t.forEach((e=>{const t=new Date(e.metadata.minedAt).getFullYear(),r=new Date(e.metadata.minedAt).getMonth(),i=n[t]??{},o=(i[r]??[]).filter((t=>t.id!==e.id));n[t]={...i,[r]:[...o,e].sort(((e,t)=>new Date(t.metadata.minedAt).getTime()-new Date(e.metadata.minedAt).getTime()))}})),n},filterSpamTransactions:e=>e.filter((e=>!e.transfers.every((e=>!0===e.nft_info?.flags.is_spam)))),clearCursor(){K.next=void 0},resetTransactions(){K.transactions=[],K.transactionsByYear={},K.loading=!1,K.empty=!1,K.next=void 0}},G=(0,i.BX)({wcError:!1,buffering:!1}),Y={state:G,subscribeKey:(e,t)=>(0,r.u$)(G,e,t),_getClient:()=>O.getConnectionControllerClient(),setClient(e){G._client=(0,i.KR)(e)},async connectWalletConnect(){y.setConnectedConnector("WALLET_CONNECT"),await this._getClient().connectWalletConnect((e=>{G.wcUri=e,G.wcPairingExpiry=l.getPairingExpiry()}))},async connectExternal(e,t){await(this._getClient().connectExternal?.(e)),O.setActiveChain(t),y.setConnectedConnector(e.type)},async reconnectExternal(e){await(this._getClient().reconnectExternal?.(e)),y.setConnectedConnector(e.type)},async setPreferredAccountType(e){ce.setLoading(!0);const t=E.getAuthConnector();t&&(await(t?.provider.setPreferredAccount(e)),await this.reconnectExternal(t),ce.setLoading(!1),I.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:e,network:L.state.caipNetwork?.id||""}}))},async signMessage(e){return this._getClient().signMessage(e)},parseUnits(e,t){return this._getClient().parseUnits(e,t)},formatUnits(e,t){return this._getClient().formatUnits(e,t)},async sendTransaction(e){return this._getClient().sendTransaction(e)},async estimateGas(e){return this._getClient().estimateGas(e)},async writeContract(e){return this._getClient().writeContract(e)},async getEnsAddress(e){return this._getClient().getEnsAddress(e)},async getEnsAvatar(e){return this._getClient().getEnsAvatar(e)},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){G.wcUri=void 0,G.wcPairingExpiry=void 0,G.wcLinking=void 0,G.recentWallet=void 0,Z.resetTransactions(),y.deleteWalletConnectDeepLink()},setWcLinking(e){G.wcLinking=e},setWcError(e){G.wcError=e,G.buffering=!1},setRecentWallet(e){G.recentWallet=e},setBuffering(e){G.buffering=e},async disconnect(){const e=this._getClient();try{await e.disconnect(),y.removeConnectedWalletImageUrl(),this.resetWcConnection()}catch(e){throw new Error("Failed to disconnect")}}},Q={async getTokenList(){const e=L.state.caipNetwork,t=await q.fetchSwapTokens({chainId:e?.id,projectId:F.state.projectId});return t?.tokens?.map((e=>({...e,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0})))||[]},async fetchGasPrice(){const e=F.state.projectId,t=L.state.caipNetwork;return t?await q.fetchGasPrice({projectId:e,chainId:t.id}):null},async fetchSwapAllowance({tokenAddress:e,userAddress:t,sourceTokenAmount:n,sourceTokenDecimals:r}){const i=F.state.projectId,o=await q.fetchSwapAllowance({projectId:i,tokenAddress:e,userAddress:t});if(o?.allowance&&n&&r){const e=Y.parseUnits(n,r);return BigInt(o.allowance)>=e}return!1},async getMyTokensWithBalance(e){const t=se.state.address,n=L.state.caipNetwork;if(!t||!n)return[];const r=(await q.getBalance(t,n.id,e)).balances.filter((e=>"0"!==e.quantity.decimals));return se.setTokenBalance(r),this.mapBalancesToSwapTokens(r)},mapBalancesToSwapTokens:e=>e?.map((e=>({...e,address:e?.address?e.address:`${e.chainId}:${c.NATIVE_TOKEN_ADDRESS}`,decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1})))||[]},J=(0,i.BX)({view:"Connect",history:["Connect"],transactionStack:[]}),X={state:J,subscribeKey:(e,t)=>(0,r.u$)(J,e,t),pushTransactionStack(e){J.transactionStack.push(e)},popTransactionStack(e){const t=J.transactionStack.pop();t&&(e?(this.goBack(),t?.onCancel?.()):(t.goBack?this.goBack():t.view&&this.reset(t.view),t?.onSuccess?.()))},push(e,t){e!==J.view&&(J.view=e,J.history.push(e),J.data=t)},reset(e){J.view=e,J.history=[e]},replace(e,t){J.history.length>=1&&J.history.at(-1)!==e&&(J.view=e,J.history[J.history.length-1]=e,J.data=t)},goBack(){if(J.history.length>1){J.history.pop();const[e]=J.history.slice(-1);e&&(J.view=e)}},goBackToIndex(e){if(J.history.length>1){J.history=J.history.slice(0,e+1);const[t]=J.history.slice(-1);t&&(J.view=t)}}},ee={getGasPriceInEther:(e,t)=>Number(t*e)/1e18,getGasPriceInUSD(e,t,n){const r=ee.getGasPriceInEther(t,n);return o.Se.bigNumber(e).multipliedBy(r).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:n,toTokenAmount:r}){const i=o.Se.bigNumber(e).multipliedBy(t),s=o.Se.bigNumber(r).multipliedBy(n);return i.minus(s).dividedBy(i).multipliedBy(100).toNumber()},getMaxSlippage(e,t){const n=o.Se.bigNumber(e).dividedBy(100);return o.Se.multiply(t,n).toNumber()},getProviderFee:(e,t=.0085)=>o.Se.bigNumber(e).multipliedBy(t).toString(),isInsufficientNetworkTokenForGas(e,t){const n=t||"0";return!!o.Se.bigNumber(e).isZero()||o.Se.bigNumber(o.Se.bigNumber(n)).isGreaterThan(e)},isInsufficientSourceTokenForSwap(e,t,n){const r=n?.find((e=>e.address===t))?.quantity?.numeric;return o.Se.bigNumber(r||"0").isLessThan(e)},getToTokenAmount({sourceToken:e,toToken:t,sourceTokenPrice:n,toTokenPrice:r,sourceTokenAmount:i}){if("0"===i)return"0";if(!e||!t)return"0";const s=e.decimals,a=n,c=t.decimals,l=r;if(l<=0)return"0";const u=o.Se.bigNumber(i).multipliedBy(.0085),d=o.Se.bigNumber(i).minus(u).multipliedBy(o.Se.bigNumber(10).pow(s)),h=o.Se.bigNumber(a).dividedBy(l),f=s-c;return d.multipliedBy(h).dividedBy(o.Se.bigNumber(10).pow(f)).dividedBy(o.Se.bigNumber(10).pow(c)).toFixed(c).toString()}},te=15e4;Error;const ne={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:c.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},re=(0,i.BX)(ne),ie={state:re,subscribe:e=>(0,i.B1)(re,(()=>e(re))),subscribeKey:(e,t)=>(0,r.u$)(re,e,t),getParams(){const e=L.state.caipNetwork,t=se.state.address,n=`${e?.id}:${c.NATIVE_TOKEN_ADDRESS}`;if(!t)throw new Error("No address found to swap the tokens from.");const r=se.state.caipAddress,i=!re.toToken?.address||!re.toToken?.decimals,s=!re.sourceToken?.address||!re.sourceToken?.decimals||!o.Se.bigNumber(re.sourceTokenAmount).isGreaterThan(0),a=!re.sourceTokenAmount;return{networkAddress:n,fromAddress:t,fromCaipAddress:se.state.caipAddress,sourceTokenAddress:re.sourceToken?.address,toTokenAddress:re.toToken?.address,toTokenAmount:re.toTokenAmount,toTokenDecimals:re.toToken?.decimals,sourceTokenAmount:re.sourceTokenAmount,sourceTokenDecimals:re.sourceToken?.decimals,invalidToToken:i,invalidSourceToken:s,invalidSourceTokenAmount:a,availableToSwap:r&&!i&&!s&&!a}},setSourceToken(e){if(!e)return re.sourceToken=e,re.sourceTokenAmount="",void(re.sourceTokenPriceInUSD=0);re.sourceToken=e,this.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){re.sourceTokenAmount=e},setToToken(e){if(!e)return re.toToken=e,re.toTokenAmount="",void(re.toTokenPriceInUSD=0);re.toToken=e,this.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){re.toTokenAmount=e?o.Se.formatNumberToLocalString(e,6):""},async setTokenPrice(e,t){const{availableToSwap:n}=this.getParams();let r=re.tokensPriceMap[e]||0;r||(re.loadingPrices=!0,r=await this.getAddressPrice(e)),"sourceToken"===t?re.sourceTokenPriceInUSD=r:"toToken"===t&&(re.toTokenPriceInUSD=r),re.loadingPrices&&(re.loadingPrices=!1,n&&this.swapTokens())},switchTokens(){if(re.initializing||!re.initialized)return;const e=re.toToken?{...re.toToken}:void 0,t=re.sourceToken?{...re.sourceToken}:void 0,n=e&&""===re.toTokenAmount?"1":re.toTokenAmount;this.setSourceToken(e),this.setToToken(t),this.setSourceTokenAmount(n),this.setToTokenAmount(""),this.swapTokens()},resetState(){re.myTokensWithBalance=ne.myTokensWithBalance,re.tokensPriceMap=ne.tokensPriceMap,re.initialized=ne.initialized,re.sourceToken=ne.sourceToken,re.sourceTokenAmount=ne.sourceTokenAmount,re.sourceTokenPriceInUSD=ne.sourceTokenPriceInUSD,re.toToken=ne.toToken,re.toTokenAmount=ne.toTokenAmount,re.toTokenPriceInUSD=ne.toTokenPriceInUSD,re.networkPrice=ne.networkPrice,re.networkTokenSymbol=ne.networkTokenSymbol,re.networkBalanceInUSD=ne.networkBalanceInUSD,re.inputError=ne.inputError},resetValues(){const{networkAddress:e}=this.getParams(),t=re.tokens?.find((t=>t.address===e));this.setSourceToken(t),this.setToToken(void 0)},getApprovalLoadingState:()=>re.loadingApprovalTransaction,clearError(){re.transactionError=void 0},async initializeState(){if(!re.initializing){if(re.initializing=!0,!re.initialized)try{await this.fetchTokens(),re.initialized=!0}catch(e){re.initialized=!1,W.showError("Failed to initialize swap"),X.goBack()}re.initializing=!1}},async fetchTokens(){const{networkAddress:e}=this.getParams();await this.getTokenList(),await this.getNetworkTokenPrice(),await this.getMyTokensWithBalance();const t=re.tokens?.find((t=>t.address===e));t&&(re.networkTokenSymbol=t.symbol,this.setSourceToken(t),this.setSourceTokenAmount("1"))},async getTokenList(){const e=await Q.getTokenList();re.tokens=e,re.popularTokens=e.sort(((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0)),re.suggestedTokens=e.filter((e=>!!c.SWAP_SUGGESTED_TOKENS.includes(e.symbol)),{})},async getAddressPrice(e){const t=re.tokensPriceMap[e];if(t)return t;const n=(await q.fetchTokenPrice({projectId:F.state.projectId,addresses:[e]})).fungibles||[],r=[...re.tokens||[],...re.myTokensWithBalance||[]],i=r?.find((t=>t.address===e))?.symbol,o=n.find((e=>e.symbol.toLowerCase()===i?.toLowerCase()))?.price||0,s=parseFloat(o.toString());return re.tokensPriceMap[e]=s,s},async getNetworkTokenPrice(){const{networkAddress:e}=this.getParams(),t=await q.fetchTokenPrice({projectId:F.state.projectId,addresses:[e]}),n=t.fungibles?.[0],r=n?.price.toString()||"0";re.tokensPriceMap[e]=parseFloat(r),re.networkTokenSymbol=n?.symbol||"",re.networkPrice=r},async getMyTokensWithBalance(e){const t=await Q.getMyTokensWithBalance(e);t&&(await this.getInitialGasPrice(),this.setBalances(t))},setBalances(e){const{networkAddress:t}=this.getParams(),n=L.state.caipNetwork;if(!n)return;const r=e.find((e=>e.address===t));e.forEach((e=>{re.tokensPriceMap[e.address]=e.price||0})),re.myTokensWithBalance=e.filter((e=>e.address.startsWith(n.id))),re.networkBalanceInUSD=r?o.Se.multiply(r.quantity.numeric,r.price).toString():"0"},async getInitialGasPrice(){const e=await Q.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUsd:null};const t=e.standard,n=BigInt(t),r=BigInt(te),i=ee.getGasPriceInUSD(re.networkPrice,r,n);return re.gasFee=t,re.gasPriceInUSD=i,{gasPrice:n,gasPriceInUSD:re.gasPriceInUSD}},async swapTokens(){const e=se.state.address,t=re.sourceToken,n=re.toToken,r=o.Se.bigNumber(re.sourceTokenAmount).isGreaterThan(0);if(!n||!t||re.loadingPrices||!r)return;re.loadingQuote=!0;const i=o.Se.bigNumber(re.sourceTokenAmount).multipliedBy(10**t.decimals),s=await q.fetchSwapQuote({userAddress:e,projectId:F.state.projectId,from:t.address,to:n.address,gasPrice:re.gasFee,amount:i.toString()});re.loadingQuote=!1;const a=s?.quotes?.[0]?.toAmount;if(!a)return;const c=o.Se.bigNumber(a).dividedBy(10**n.decimals).toString();this.setToTokenAmount(c);this.hasInsufficientToken(re.sourceTokenAmount,t.address)?re.inputError="Insufficient balance":(re.inputError=void 0,this.setTransactionDetails())},async getTransaction(){const{fromCaipAddress:e,availableToSwap:t}=this.getParams(),n=re.sourceToken,r=re.toToken;if(e&&t&&n&&r&&!re.loadingQuote)try{re.loadingBuildTransaction=!0;let t;return t=await Q.fetchSwapAllowance({userAddress:e,tokenAddress:n.address,sourceTokenAmount:re.sourceTokenAmount,sourceTokenDecimals:n.decimals})?await this.createSwapTransaction():await this.createAllowanceTransaction(),re.loadingBuildTransaction=!1,re.fetchError=!1,t}catch(e){return X.goBack(),W.showError("Failed to check allowance"),re.loadingBuildTransaction=!1,re.approvalTransaction=void 0,re.swapTransaction=void 0,void(re.fetchError=!0)}},async createAllowanceTransaction(){const{fromCaipAddress:e,fromAddress:t,sourceTokenAddress:n,toTokenAddress:r}=this.getParams();if(e&&r){if(!n)throw new Error("createAllowanceTransaction - No source token address found.");try{const i=await q.generateApproveCalldata({projectId:F.state.projectId,from:n,to:r,userAddress:e}),o=await Y.estimateGas({address:t,to:l.getPlainAddress(i.tx.to),data:i.tx.data}),s={data:i.tx.data,to:l.getPlainAddress(i.tx.from),gas:o,gasPrice:BigInt(i.tx.eip155.gasPrice),value:BigInt(i.tx.value),toAmount:re.toTokenAmount};return re.swapTransaction=void 0,re.approvalTransaction=s,s}catch(e){return X.goBack(),W.showError("Failed to create approval transaction"),re.approvalTransaction=void 0,re.swapTransaction=void 0,void(re.fetchError=!0)}}},async createSwapTransaction(){const{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:n}=this.getParams(),r=re.sourceToken,i=re.toToken;if(!(t&&n&&r&&i))return;const o=Y.parseUnits(n,r.decimals).toString();try{const n=await q.generateSwapCalldata({projectId:F.state.projectId,userAddress:t,from:r.address,to:i.address,amount:o}),s=r.address===e,a=BigInt(n.tx.eip155.gas),c=BigInt(n.tx.eip155.gasPrice),u={data:n.tx.data,to:l.getPlainAddress(n.tx.to),gas:a,gasPrice:c,value:s?BigInt(o):BigInt("0"),toAmount:re.toTokenAmount};return re.gasPriceInUSD=ee.getGasPriceInUSD(re.networkPrice,a,c),re.approvalTransaction=void 0,re.swapTransaction=u,u}catch(e){return X.goBack(),W.showError("Failed to create transaction"),re.approvalTransaction=void 0,re.swapTransaction=void 0,void(re.fetchError=!0)}},async sendTransactionForApproval(e){const{fromAddress:t}=this.getParams();re.loadingApprovalTransaction=!0,X.pushTransactionStack({view:null,goBack:!0,onSuccess(){W.showLoading("Approving transaction...")}});try{await Y.sendTransaction({address:t,to:e.to,data:e.data,value:BigInt(e.value),gasPrice:BigInt(e.gasPrice)}),await this.swapTokens(),await this.getTransaction(),re.approvalTransaction=void 0,re.loadingApprovalTransaction=!1}catch(e){const t=e;re.transactionError=t?.shortMessage,re.loadingTransaction=!1}},async sendTransactionForSwap(e){if(!e)return;const{fromAddress:t,toTokenAmount:n}=this.getParams();re.loadingTransaction=!0;const r=`Swapping ${re.sourceToken?.symbol} to ${o.Se.formatNumberToLocalString(n,3)} ${re.toToken?.symbol}`,i=`Swapped ${re.sourceToken?.symbol} to ${o.Se.formatNumberToLocalString(n,3)} ${re.toToken?.symbol}`;X.pushTransactionStack({view:"Account",goBack:!1,onSuccess(){W.showLoading(r),ie.resetState()}});try{const n=[re.sourceToken?.address,re.toToken?.address].join(","),r=await Y.sendTransaction({address:t,to:e.to,data:e.data,gas:e.gas,gasPrice:BigInt(e.gasPrice),value:e.value});return re.loadingTransaction=!1,W.showSuccess(i),I.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:L.state.caipNetwork?.id||"",swapFromToken:this.state.sourceToken?.symbol||"",swapToToken:this.state.toToken?.symbol||"",swapfromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:se.state.preferredAccountType===V.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),ie.resetState(),ie.getMyTokensWithBalance(n),r}catch(e){const t=e;return re.transactionError=t?.shortMessage,re.loadingTransaction=!1,W.showError(t?.shortMessage||"Transaction error"),void I.sendEvent({type:"track",event:"SWAP_ERROR",properties:{network:L.state.caipNetwork?.id||"",swapFromToken:this.state.sourceToken?.symbol||"",swapToToken:this.state.toToken?.symbol||"",swapfromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:se.state.preferredAccountType===V.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}},hasInsufficientToken(e,t){const n=ee.isInsufficientSourceTokenForSwap(e,t,re.myTokensWithBalance);return ee.isInsufficientNetworkTokenForGas(re.networkBalanceInUSD,re.gasPriceInUSD)||n},setTransactionDetails(){const{toTokenAddress:e,toTokenDecimals:t}=this.getParams();e&&t&&(re.gasPriceInUSD=ee.getGasPriceInUSD(re.networkPrice,BigInt(re.gasFee),BigInt(te)),re.priceImpact=ee.getPriceImpact({sourceTokenAmount:re.sourceTokenAmount,sourceTokenPriceInUSD:re.sourceTokenPriceInUSD,toTokenPriceInUSD:re.toTokenPriceInUSD,toTokenAmount:re.toTokenAmount}),re.maxSlippage=ee.getMaxSlippage(re.slippage,re.toTokenAmount),re.providerFee=ee.getProviderFee(re.sourceTokenAmount))}},oe=(0,i.BX)({isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),se={state:oe,replaceState(e){Object.assign(oe,e)},subscribe:e=>O.subscribeChainProp("accountState",(t=>{if(t)return e(t)})),subscribeKey(e,t){let n;return O.subscribeChainProp("accountState",(r=>{if(r){const i=r[e];n!==i&&(n=i,t(i))}}))},setIsConnected(e,t){O.setAccountProp("isConnected",e,t)},setCaipAddress(e,t){const n=e?l.getPlainAddress(e):void 0;O.setAccountProp("caipAddress",e,t),O.setAccountProp("address",n,t)},setBalance(e,t,n){O.setAccountProp("balance",e,n),O.setAccountProp("balanceSymbol",t,n)},setProfileName(e,t){O.setAccountProp("profileName",e,t)},setProfileImage(e,t){O.setAccountProp("profileImage",e,t)},setAddressExplorerUrl(e,t){O.setAccountProp("addressExplorerUrl",e,t)},setSmartAccountDeployed(e,t){O.setAccountProp("smartAccountDeployed",e,t)},setCurrentTab(e,t){O.setAccountProp("currentTab",e,t)},setTokenBalance(e,t){e&&O.setAccountProp("tokenBalance",e,t)},setShouldUpdateToAddress(e){O.setAccountProp("shouldUpdateToAddress",e)},setAllAccounts(e,t){O.setAccountProp("allAccounts",e,t)},addAddressLabel(e,t){const n=O.getAccountProp("addressLabels")||new Map;n.set(e,t),O.setAccountProp("addressLabels",n)},removeAddressLabel(e){const t=O.getAccountProp("addressLabels")||new Map;t.delete(e),O.setAccountProp("addressLabels",t)},setConnectedWalletInfo(e,t){O.setAccountProp("connectedWalletInfo",e,t)},setPreferredAccountType(e,t){O.setAccountProp("preferredAccountType",e,t)},setSocialProvider(e,t){e&&O.setAccountProp("socialProvider",e,t)},setSocialWindow(e,t){e&&O.setAccountProp("socialWindow",(0,i.KR)(e),t)},async fetchTokenBalance(){const e=L.state.caipNetwork?.id,t=L.state.caipNetwork?.chain,n=se.state.address;try{if(n&&e){const r=await q.getBalance(n,e),i=r.balances.filter((e=>"0"!==e.quantity.decimals));this.setTokenBalance(i,t),ie.setBalances(Q.mapBalancesToSwapTokens(r.balances))}}catch(e){W.showError("Failed to fetch token balance")}},resetAccount(e){O.resetAccount(e)}},ae=(0,i.BX)({loading:!1,open:!1}),ce={state:ae,subscribe:e=>(0,i.B1)(ae,(()=>e(ae))),subscribeKey:(e,t)=>(0,r.u$)(ae,e,t),async open(e){await U.state.prefetchPromise;const t=se.state.isConnected;e?.view?X.reset(e.view):t?X.reset("Account"):X.reset("Connect"),ae.open=!0,k.set({open:!0}),I.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:t}})},close(){const e=se.state.isConnected;ae.open=!1,k.set({open:!1}),I.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:e}})},setLoading(e){ae.loading=e,k.set({loading:e})}},le={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},ue={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},de={providers:a,selectedProvider:null,error:null,purchaseCurrency:le,paymentCurrency:ue,purchaseCurrencies:[le],paymentCurrencies:[],quotesLoading:!1},he=(0,i.BX)(de),fe={state:he,subscribe:e=>(0,i.B1)(he,(()=>e(he))),subscribeKey:(e,t)=>(0,r.u$)(he,e,t),setSelectedProvider(e){he.selectedProvider=e},setPurchaseCurrency(e){he.purchaseCurrency=e},setPaymentCurrency(e){he.paymentCurrency=e},setPurchaseAmount(e){this.state.purchaseAmount=e},setPaymentAmount(e){this.state.paymentAmount=e},async getAvailableCurrencies(){const e=await q.getOnrampOptions();he.purchaseCurrencies=e.purchaseCurrencies,he.paymentCurrencies=e.paymentCurrencies,he.paymentCurrency=e.paymentCurrencies[0]||ue,he.purchaseCurrency=e.purchaseCurrencies[0]||le,await U.fetchCurrencyImages(e.paymentCurrencies.map((e=>e.id))),await U.fetchTokenImages(e.purchaseCurrencies.map((e=>e.symbol)))},async getQuote(){he.quotesLoading=!0;try{const e=await q.getOnrampQuote({purchaseCurrency:he.purchaseCurrency,paymentCurrency:he.paymentCurrency,amount:he.paymentAmount?.toString()||"0",network:he.purchaseCurrency?.symbol});return he.quotesLoading=!1,he.purchaseAmount=Number(e.purchaseAmount.amount),e}catch(e){return he.error=e.message,he.quotesLoading=!1,null}finally{he.quotesLoading=!1}},resetState(){he.providers=a,he.selectedProvider=null,he.error=null,he.purchaseCurrency=le,he.paymentCurrency=ue,he.purchaseCurrencies=[le],he.paymentCurrencies=[],he.paymentAmount=void 0,he.purchaseAmount=void 0,he.quotesLoading=!1}},pe=(0,i.BX)({loading:!1}),ge={state:pe,subscribe:e=>(0,i.B1)(pe,(()=>e(pe))),subscribeKey:(e,t)=>(0,r.u$)(pe,e,t),setToken(e){e&&(pe.token=(0,i.KR)(e))},setTokenAmount(e){pe.sendTokenAmount=e},setReceiverAddress(e){pe.receiverAddress=e},setReceiverProfileImageUrl(e){pe.receiverProfileImageUrl=e},setReceiverProfileName(e){pe.receiverProfileName=e},setGasPrice(e){pe.gasPrice=e},setGasPriceInUsd(e){pe.gasPriceInUSD=e},setLoading(e){pe.loading=e},sendToken(){this.state.token?.address&&this.state.sendTokenAmount&&this.state.receiverAddress?(I.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:se.state.preferredAccountType===V.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token.address,amount:this.state.sendTokenAmount,network:L.state.caipNetwork?.id||""}}),this.sendERC20Token({receiverAddress:this.state.receiverAddress,tokenAddress:this.state.token.address,sendTokenAmount:this.state.sendTokenAmount,decimals:this.state.token.quantity.decimals})):this.state.receiverAddress&&this.state.sendTokenAmount&&this.state.gasPrice&&this.state.token?.quantity.decimals&&(I.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:se.state.preferredAccountType===V.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token?.symbol,amount:this.state.sendTokenAmount,network:L.state.caipNetwork?.id||""}}),this.sendNativeToken({receiverAddress:this.state.receiverAddress,sendTokenAmount:this.state.sendTokenAmount,gasPrice:this.state.gasPrice,decimals:this.state.token.quantity.decimals}))},async sendNativeToken(e){X.pushTransactionStack({view:"Account",goBack:!1});const t=e.receiverAddress,n=se.state.address,r=Y.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));try{await Y.sendTransaction({to:t,address:n,data:"0x",value:r,gasPrice:e.gasPrice}),W.showSuccess("Transaction started"),I.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:se.state.preferredAccountType===V.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token?.symbol||"",amount:e.sendTokenAmount,network:L.state.caipNetwork?.id||""}}),this.resetSend()}catch(t){I.sendEvent({type:"track",event:"SEND_ERROR",properties:{isSmartAccount:se.state.preferredAccountType===V.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token?.symbol||"",amount:e.sendTokenAmount,network:L.state.caipNetwork?.id||""}}),W.showError("Something went wrong")}},async sendERC20Token(e){X.pushTransactionStack({view:"Account",goBack:!1});const t=Y.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));try{se.state.address&&e.sendTokenAmount&&e.receiverAddress&&e.tokenAddress&&(await Y.writeContract({fromAddress:se.state.address,tokenAddress:l.getPlainAddress(e.tokenAddress),receiverAddress:e.receiverAddress,tokenAmount:t,method:"transfer",abi:o.Fk}),W.showSuccess("Transaction started"),this.resetSend())}catch(e){W.showError("Something went wrong")}},resetSend(){pe.token=void 0,pe.sendTokenAmount=void 0,pe.receiverAddress=void 0,pe.receiverProfileImageUrl=void 0,pe.receiverProfileName=void 0,pe.loading=!1}},me=(0,i.BX)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),ye={state:me,subscribe:e=>(0,i.B1)(me,(()=>e(me))),subscribeKey:(e,t)=>(0,r.u$)(me,e,t),showTooltip({message:e,triggerRect:t,variant:n}){me.open=!0,me.message=e,me.triggerRect=t,me.variant=n},hide(){me.open=!1,me.message="",me.triggerRect={width:0,height:0,top:0,left:0}}},ve=2147483648,be={convertEVMChainIdToCoinType(e){if(e>=ve)throw new Error("Invalid chainId");return(ve|e)>>>0}},we=(0,i.BX)({suggestions:[],loading:!1}),Ae={state:we,subscribe:e=>(0,i.B1)(we,(()=>e(we))),subscribeKey:(e,t)=>(0,r.u$)(we,e,t),async resolveName(e){try{return await q.lookupEnsName(e)}catch(e){const t=e;throw new Error(t?.reasons?.[0]?.description||"Error resolving name")}},async isNameRegistered(e){try{return await q.lookupEnsName(e),!0}catch{return!1}},async getSuggestions(e){try{we.loading=!0,we.suggestions=[];const t=await q.getEnsNameSuggestions(e);return we.suggestions=t.suggestions.map((e=>({...e,name:e.name.replace(o.oU.WC_NAME_SUFFIX,"")})))||[],we.suggestions}catch(e){const t=this.parseEnsApiError(e,"Error fetching name suggestions");throw new Error(t)}finally{we.loading=!1}},async getNamesForAddress(e){try{if(!L.state.caipNetwork)return[];return await q.reverseLookupEnsName({address:e})}catch(e){const t=this.parseEnsApiError(e,"Error fetching names for address");throw new Error(t)}},async registerName(e){const t=L.state.caipNetwork;if(!t)throw new Error("Network not found");const n=se.state.address,r=E.getAuthConnector();if(!n||!r)throw new Error("Address or auth connector not found");we.loading=!0;try{const r=JSON.stringify({name:`${e}${o.oU.WC_NAME_SUFFIX}`,attributes:{},timestamp:Math.floor(Date.now()/1e3)});X.pushTransactionStack({view:"RegisterAccountNameSuccess",goBack:!1,replace:!0,onCancel(){we.loading=!1}});const i=await Y.signMessage(r),s=o.LX.caipNetworkIdToNumber(t.id);if(!s)throw new Error("Network not found");const a=be.convertEVMChainIdToCoinType(s);await q.registerEnsName({coinType:a,address:n,signature:i,message:r}),se.setProfileName(`${e}${o.oU.WC_NAME_SUFFIX}`),X.replace("RegisterAccountNameSuccess")}catch(t){const n=this.parseEnsApiError(t,`Error registering name ${e}`);throw X.replace("RegisterAccountName"),new Error(n)}finally{we.loading=!1}},validateName:e=>/^[a-zA-Z0-9-]{4,}$/u.test(e),parseEnsApiError(e,t){const n=e;return n?.reasons?.[0]?.description||t}},_e={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?b.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?b.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?b.state.connectorImages[e.imageId]:void 0},Ee={goBackOrCloseModal(){X.state.history.length>1?X.goBack():ce.close()},navigateAfterNetworkSwitch(){const{history:e}=X.state,t=e.findIndex((e=>"Networks"===e));t>=1?X.goBackToIndex(t-1):ce.close()},navigateAfterPreferredAccountTypeSelect(){const{isSiweEnabled:e}=F.state;e&&O.state.activeChain===o.oU.CHAIN.EVM?X.push("ConnectingSiwe"):X.push("Account")}}},3167:(e,t,n)=>{"use strict";var r=n(2512);"undefined"!=typeof window&&(window.Buffer||(window.Buffer=r.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}))},7636:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MathUtil:()=>Io,TransactionUtil:()=>Po,UiHelperUtil:()=>Lt,WuiAccountButton:()=>Kt,WuiAllWalletsImage:()=>Xt,WuiAvatar:()=>zt,WuiBalance:()=>Ii,WuiBanner:()=>Wi,WuiBannerImg:()=>Zi,WuiButton:()=>sn,WuiCard:()=>w,WuiCardSelect:()=>vn,WuiCardSelectLoader:()=>un,WuiChip:()=>An,WuiChipButton:()=>ji,WuiCompatibleNetwork:()=>$i,WuiConnectButton:()=>Cn,WuiCtaButton:()=>xn,WuiDetailsGroup:()=>Tn,WuiDetailsGroupItem:()=>On,WuiDropdownMenu:()=>Dn,WuiEmailInput:()=>qn,WuiEnsInput:()=>Vn,WuiFlex:()=>Ut,WuiGrid:()=>ko,WuiIcon:()=>ze,WuiIconBox:()=>Ht,WuiIconButton:()=>mo,WuiIconLink:()=>Gn,WuiImage:()=>He,WuiInputAmount:()=>oo,WuiInputElement:()=>Jn,WuiInputNumeric:()=>tr,WuiInputText:()=>Fn,WuiLink:()=>ir,WuiListAccordion:()=>pi,WuiListAccount:()=>fo,WuiListButton:()=>bo,WuiListContent:()=>yi,WuiListDescription:()=>eo,WuiListItem:()=>ar,WuiListNetwork:()=>wi,WuiListSocial:()=>_o,WuiListToken:()=>Qi,WuiListWallet:()=>Er,WuiListWalletTransaction:()=>Ei,WuiLoadingHexagon:()=>Ke,WuiLoadingSpinner:()=>Ye,WuiLoadingThumbnail:()=>Xe,WuiLogo:()=>Sr,WuiLogoSelect:()=>Ir,WuiNetworkButton:()=>Pr,WuiNetworkImage:()=>gn,WuiNoticeCard:()=>di,WuiOtp:()=>Lr,WuiPreviewItem:()=>co,WuiProfileButton:()=>Pi,WuiProfileButtonV2:()=>Di,WuiPromo:()=>Si,WuiQrCode:()=>zr,WuiSearchBar:()=>Hr,WuiSeparator:()=>Mo,WuiShimmer:()=>nt,WuiSnackbar:()=>Kr,WuiTabs:()=>Yr,WuiTag:()=>wr,WuiText:()=>ct,WuiTokenButton:()=>Xr,WuiTokenListItem:()=>oi,WuiTooltip:()=>ni,WuiTransactionListItem:()=>pr,WuiTransactionListItemLoader:()=>yr,WuiTransactionVisual:()=>dr,WuiVisual:()=>Ot,WuiVisualThumbnail:()=>ci,WuiWalletImage:()=>Yt,customElement:()=>y,initializeTheming:()=>u,setColorTheme:()=>d,setThemeVariables:()=>h,swapInputMaskBottomSvg:()=>i,swapInputMaskTopSvg:()=>o});var r=n(178);const i=r.JW`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4189">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 0L139.008 -0.00694413L139.001 -1H138.008V0ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM189.992 0V-1H188.999L188.992 -0.00694413L189.992 0ZM188.914 10.1564L189.854 10.4984V10.4984L188.914 10.1564ZM178.156 20.9145L177.814 19.9748V19.9748L178.156 20.9145ZM149.844 20.9145L150.186 19.9748V19.9748L149.844 20.9145ZM139.086 10.1564L138.146 10.4984V10.4984L139.086 10.1564ZM40 1H138.008V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM288 99H40V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM189.992 1H288V-1H189.992V1ZM188.992 -0.00694413C188.958 4.90792 188.778 7.60788 187.975 9.81434L189.854 10.4984C190.793 7.9177 190.958 4.87452 190.992 0.00694413L188.992 -0.00694413ZM187.975 9.81434C186.256 14.5364 182.536 18.2561 177.814 19.9748L178.498 21.8542C183.776 19.9333 187.933 15.7759 189.854 10.4984L187.975 9.81434ZM177.814 19.9748C175.039 20.9848 171.536 21 164 21V23C171.362 23 175.308 23.0152 178.498 21.8542L177.814 19.9748ZM164 21C156.464 21 152.961 20.9848 150.186 19.9748L149.502 21.8542C152.692 23.0152 156.638 23 164 23V21ZM150.186 19.9748C145.464 18.2561 141.744 14.5364 140.025 9.81434L138.146 10.4984C140.067 15.7759 144.224 19.9333 149.502 21.8542L150.186 19.9748ZM140.025 9.81434C139.222 7.60788 139.042 4.90792 139.008 -0.00694413L137.008 0.00694413C137.042 4.87452 137.207 7.9177 138.146 10.4984L140.025 9.81434Z"
    mask="url(#path-1-inside-1_18299_4189)"
  />
</svg>`,o=r.JW`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4168">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 100V101H139.001L139.008 100.007L138.008 100ZM139.086 89.8436L138.146 89.5016L139.086 89.8436ZM149.844 79.0855L150.186 80.0252L149.844 79.0855ZM178.156 79.0855L177.814 80.0252L178.156 79.0855ZM188.914 89.8436L189.854 89.5016L188.914 89.8436ZM189.992 100L188.992 100.007L188.999 101H189.992V100ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM138.008 99H40V101H138.008V99ZM139.008 100.007C139.042 95.0921 139.222 92.3921 140.025 90.1857L138.146 89.5016C137.207 92.0823 137.042 95.1255 137.008 99.9931L139.008 100.007ZM140.025 90.1857C141.744 85.4636 145.464 81.7439 150.186 80.0252L149.502 78.1458C144.224 80.0667 140.067 84.2241 138.146 89.5016L140.025 90.1857ZM150.186 80.0252C152.961 79.0152 156.464 79 164 79V77C156.638 77 152.692 76.9848 149.502 78.1458L150.186 80.0252ZM164 79C171.536 79 175.039 79.0152 177.814 80.0252L178.498 78.1458C175.308 76.9848 171.362 77 164 77V79ZM177.814 80.0252C182.536 81.7439 186.256 85.4636 187.975 90.1857L189.854 89.5016C187.933 84.2241 183.776 80.0667 178.498 78.1458L177.814 80.0252ZM187.975 90.1857C188.778 92.3921 188.958 95.0921 188.992 100.007L190.992 99.9931C190.958 95.1255 190.793 92.0823 189.854 89.5016L187.975 90.1857ZM288 99H189.992V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM40 1H288V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497Z"
    mask="url(#path-1-inside-1_18299_4168)"
  />
</svg>`;var s=n(2538);let a,c,l;function u(e,t){a=document.createElement("style"),c=document.createElement("style"),l=document.createElement("style"),a.textContent=f(e).core.cssText,c.textContent=f(e).dark.cssText,l.textContent=f(e).light.cssText,document.head.appendChild(a),document.head.appendChild(c),document.head.appendChild(l),d(t)}function d(e){c&&l&&("light"===e?(c.removeAttribute("media"),l.media="enabled"):(l.removeAttribute("media"),c.media="enabled"))}function h(e){a&&c&&l&&(a.textContent=f(e).core.cssText,c.textContent=f(e).dark.cssText,l.textContent=f(e).light.cssText)}function f(e){return{core:r.AH`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${(0,r.iz)(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,r.iz)(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${(0,r.iz)(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,r.iz)(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,r.iz)(e?.["--w3m-z-index"]||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:r.AH`
      :root {
        --w3m-color-mix: ${(0,r.iz)(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,r.iz)((0,s.o_)(e,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${(0,r.iz)((0,s.o_)(e,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;
      }
    `,dark:r.AH`
      :root {
        --w3m-color-mix: ${(0,r.iz)(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,r.iz)((0,s.o_)(e,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${(0,r.iz)((0,s.o_)(e,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);
      }
    `}}const p=r.AH`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,g=r.AH`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, color;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,m=r.AH`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function y(e){return function(t){return"function"==typeof t?function(e,t){return customElements.get(e)||customElements.define(e,t),t}(e,t):function(e,t){const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}const v=r.AH`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var b=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let w=class extends r.WF{render(){return r.qy`<slot></slot>`}};w.styles=[p,v],w=b([y("wui-card")],w);var A=n(5322);const _=r.AH`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,E=r.JW`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`,C=r.JW`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,k=r.JW`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,S=r.JW`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,x=r.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,M=r.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,I=r.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,T=r.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,R=r.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,P=r.JW`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,O=r.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,N=r.JW`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,L=r.JW`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`,D=r.JW`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="#26D962"/>
</svg>
`,B=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,U=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,j=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,F=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,z=r.JW`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,$=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,q=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,H=r.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,W=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,V=r.JW`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    fill="#788181"
  /></svg
>`,K=r.JW` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Z=r.JW`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,G=r.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"