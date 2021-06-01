(self.webpackChunkln_markets_docs=self.webpackChunkln_markets_docs||[]).push([[9],{128:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c});var a=i(6252);const r=(0,a.uE)('<h1 id="trading"><a class="header-anchor" href="#trading">#</a> Trading</h1><h2 id="what-is-a-cfd"><a class="header-anchor" href="#what-is-a-cfd">#</a> What is a CFD?</h2><p>CFD stands for Contract For Difference. A CFD is an Over The Counter (OTC) financial contract, generally between a client and a broker, where the difference in the settlement between the open and closing trade prices are cash-settled. With CFDs, there is no delivery of physical goods or securities.</p><h2 id="what-is-the-side"><a class="header-anchor" href="#what-is-the-side">#</a> What is the side?</h2><p>The side of a position is long for a buy order and short for a sell order.</p><p>On LN Markets, you can find the global side of all open positions in the Risk blotter.</p><h2 id="what-is-a-buy-order"><a class="header-anchor" href="#what-is-a-buy-order">#</a> What is a buy order?</h2><p>A buy order is an order to purchase a specified quantity of a financial product. A buy order is executed at the offer price. After entering a buy order, we say that you are in a long position.</p><h2 id="what-is-a-sell-order"><a class="header-anchor" href="#what-is-a-sell-order">#</a> What is a sell order?</h2><p>A sell order is an order to sell a specified quantity of a financial product. A sell order is executed at the bid price. After entering a sell order, we say that you are in a short position.</p><h2 id="what-is-the-bid-price"><a class="header-anchor" href="#what-is-the-bid-price">#</a> What is the bid price?</h2><p>The bid price is the price at which you can sell.</p><p>On LN Markets, it is the price at which you can take a short position on a given product.</p><h2 id="what-is-the-offer-price"><a class="header-anchor" href="#what-is-the-offer-price">#</a> What is the offer price?</h2><p>The offer price is the price at which you can buy.</p><p>On LN Markets, it is the price at which you can take a long position on a given product.</p><h2 id="what-is-the-index-price"><a class="header-anchor" href="#what-is-the-index-price">#</a> What is the index price?</h2><p>The index price is a weighted average of the last price of the underlying asset’s market consensus price for each constituent exchange.</p><h2 id="what-is-the-entry-price"><a class="header-anchor" href="#what-is-the-entry-price">#</a> What is the entry price?</h2><p>The entry price of a position is the price at which a position is opened.</p><h2 id="what-is-the-exit-price"><a class="header-anchor" href="#what-is-the-exit-price">#</a> What is the exit price?</h2><p>The exit price of a position is the price at which it is closed.</p><h2 id="what-is-the-price-reference"><a class="header-anchor" href="#what-is-the-price-reference">#</a> What is the price reference?</h2><p>The price reference of a position is the price at which the position can be bought back at any time. For instance, for a long position to be unwind, one needs to sell the contract.</p><p>Price for this sell order is the bid price, then price reference for this position is the bid price. Conversely, for a short position to be unwind, one needs to buy the contract. Price for this buy order is the offer price, then the price reference for this position is the offer price.</p><p>This rule applies to P&amp;L computation, take profit and liquidation orders.</p><p>Long position example: We open a long market order at a Price = 38541.5. A few minutes later, Bid-Offer is: 38427.5 - 38504.5. Since it is a long position, our price reference is: 38427.5. Short position example: We open a short market order at a Price = 38419.0. A few minutes later, Bid-Offer is: 38396.5 - 38473.5. Since it is a short position, our price reference is: 38473.5.</p><h2 id="what-is-the-quantity"><a class="header-anchor" href="#what-is-the-quantity">#</a> What is the quantity?</h2><p>The quantity is the number of contracts you want to trade.</p><p>On LN Markets, each contract is worth 1 USD, margin and P&amp;L are expressed in sats (1 BTC = 100,000,000 satoshis or sats).</p><h2 id="what-is-the-margin"><a class="header-anchor" href="#what-is-the-margin">#</a> What is the margin?</h2><p>When buyers and sellers want to enter a Bitcoin derivatives position, to make sure they honor their contractual obligations, exchanges and trading platforms require them to deposit and maintain an account funded with Bitcoin as collateral: this is called the margin.</p><p>On LN Markets, each margin is dedicated to a specific position. Hence, a trader can have different positions with a specific margin policy for each one.</p><p>There are 3 ways to define the Margin:</p><ul><li>Set it directly</li><li>Calculate it using the leverage</li><li>Calculate it using the liquidation price</li></ul><p>Margin is expressed in sats (1 BTC = 100,000,000 satoshis or sats).</p><h2 id="what-is-the-leverage"><a class="header-anchor" href="#what-is-the-leverage">#</a> What is the leverage?</h2><p>Leverage in trading is an investment strategy that allows to gain exposure to a financial asset with a smaller upfront capital, known as margin.</p><p>Leverage is a double-edged sword. With a leverage of 1, you are exposed to the variations of the underlying asset. With a leverage of 2, for a long position, when the underlying asset increases by 1, your P&amp;L increases by 2. But when the underlying asset decreases by 1, your P&amp;L decreases by 2. And vice versa for a short position.</p><p>On LN Markets, leverage is limited to x50.</p><h2 id="what-is-the-liquidation"><a class="header-anchor" href="#what-is-the-liquidation">#</a> What is the liquidation?</h2><p>Liquidation is the forced closure of your open positions.</p><p>On LN Markets, if the margin can not cover the P&amp;L, the position has to liquidated with a liquidation order.</p><h2 id="what-is-a-market-order"><a class="header-anchor" href="#what-is-a-market-order">#</a> What is a market order?</h2><p>A market order is a buy or sell order to be executed immediately at the offer or bid price.</p><h2 id="what-is-a-limit-order"><a class="header-anchor" href="#what-is-a-limit-order">#</a> What is a limit order?</h2><p>A limit order is an order to buy or sell at a specific price. A buy limit order can only be executed at the limit price or lower. A sell limit order can only be executed at the limit price or higher.</p><p>A limit order is not guaranteed to execute and you can cancel this order at any time before it is executed.</p><h2 id="what-is-a-take-profit"><a class="header-anchor" href="#what-is-a-take-profit">#</a> What is a take profit?</h2><p>A take profit order is an optional order that specifies the exact price at which to close out an open position for a profit. If the price of the underlying asset does not reach the take profit price, the take profit order does not get filled.</p><p>For a buy order, the take profit must be superior to the price of the underlying asset.</p><p>For a sell order, the take profit must be inferior to the price of the underlying asset.</p><h2 id="what-is-a-stop-loss"><a class="header-anchor" href="#what-is-a-stop-loss">#</a> What is a stop loss?</h2><p>A stop loss order is an optional order that specifies the exact price at which to close out an open position to limit a loss. If the price of the underlying asset does not reach the stop loss price, the stop loss order does not get filled.</p><p>For a buy order, the stop loss must be superior to the liquidation price and inferior to the bid price.</p><p>For a sell order, the stop loss must be superior to the offer price and inferior to the liquidation price.</p><h2 id="what-is-the-balance"><a class="header-anchor" href="#what-is-the-balance">#</a> What is the balance?</h2><p>On LN Markets, the balance is equal to the sum of your margin available (to enter future positions), margin used (in open positions) and P&amp;L in open positions.</p><h2 id="what-is-the-margin-available"><a class="header-anchor" href="#what-is-the-margin-available">#</a> What is the margin available?</h2><p>On LN Markets, the margin available is the amount you can use to enter future trading positions.</p><h2 id="what-is-the-margin-used"><a class="header-anchor" href="#what-is-the-margin-used">#</a> What is the margin used?</h2><p>On LN Markets, the margin used is the amount used in current open positions.</p><p>Maximum margin used is currently limited to 0.01 BTC or 1 million satoshis.</p><h2 id="what-is-the-open-quantity"><a class="header-anchor" href="#what-is-the-open-quantity">#</a> What is the open quantity?</h2><p>On LN Markets, in the Risk blotter, the open quantity is the number of contracts currently opened.</p><h2 id="what-is-the-p-l"><a class="header-anchor" href="#what-is-the-p-l">#</a> What is the P&amp;L?</h2><p>The P&amp;L of a position is the profit and loss on this position.</p><p>On LN Markets, in the Risk blotter, the P&amp;L is the global P&amp;L of positions currently opened.</p><h2 id="what-is-the-open-positions-blotter"><a class="header-anchor" href="#what-is-the-open-positions-blotter">#</a> What is the open positions blotter?</h2><p>The open positions blotter is a recap of the running positions.</p><p>You may want to close a position by clicking on the button close for a specific position on the table. This process cancels the optional take profit and the liquidation orders and unwinds the filled orders with a market order. A position can also be automatically closed when a take profit order or a liquidation order is filled. The position changes from open to closed.</p><h2 id="what-is-the-closed-positions-blotter"><a class="header-anchor" href="#what-is-the-closed-positions-blotter">#</a> What is the closed positions blotter?</h2><p>The closed positions blotter is a recap of all previously closed positions.</p><p>Once a position is closed, you can withdraw his / her funds by clicking on the button Withdraw for a specific position:</p>',74),s=(0,a.Uk)("With wallets which support "),h={href:"https://github.com/fiatjaf/awesome-lnurl#wallets",target:"_blank",rel:"noopener noreferrer"},o=(0,a.Uk)("lnurl-withdraw"),n=(0,a.Uk)(", you can just scan the QR code to receive instant payment."),l=(0,a.Wm)("li",null,"With [WebLN]((https://webln.dev/#/), the invoice for repayment of the P&L and the margin is automatically computed for you to receive instant payment.",-1),p=(0,a.Wm)("li",null,"With other Lightning wallets, you can paste an invoice (for an amount equal to 0) and LN Markets will pay the full amount available for withdraw.",-1),c={render:function(e,t){const i=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[r,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[s,(0,a.Wm)("a",h,[o,(0,a.Wm)(i)]),n]),l,p])],64)}}},4663:(e,t,i)=>{"use strict";i.r(t),i.d(t,{data:()=>a});const a={key:"v-35be78ac",path:"/faq/trading.html",title:"Trading",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"What is a CFD?",slug:"what-is-a-cfd",children:[]},{level:2,title:"What is the side?",slug:"what-is-the-side",children:[]},{level:2,title:"What is a buy order?",slug:"what-is-a-buy-order",children:[]},{level:2,title:"What is a sell order?",slug:"what-is-a-sell-order",children:[]},{level:2,title:"What is the bid price?",slug:"what-is-the-bid-price",children:[]},{level:2,title:"What is the offer price?",slug:"what-is-the-offer-price",children:[]},{level:2,title:"What is the index price?",slug:"what-is-the-index-price",children:[]},{level:2,title:"What is the entry price?",slug:"what-is-the-entry-price",children:[]},{level:2,title:"What is the exit price?",slug:"what-is-the-exit-price",children:[]},{level:2,title:"What is the price reference?",slug:"what-is-the-price-reference",children:[]},{level:2,title:"What is the quantity?",slug:"what-is-the-quantity",children:[]},{level:2,title:"What is the margin?",slug:"what-is-the-margin",children:[]},{level:2,title:"What is the leverage?",slug:"what-is-the-leverage",children:[]},{level:2,title:"What is the liquidation?",slug:"what-is-the-liquidation",children:[]},{level:2,title:"What is a market order?",slug:"what-is-a-market-order",children:[]},{level:2,title:"What is a limit order?",slug:"what-is-a-limit-order",children:[]},{level:2,title:"What is a take profit?",slug:"what-is-a-take-profit",children:[]},{level:2,title:"What is a stop loss?",slug:"what-is-a-stop-loss",children:[]},{level:2,title:"What is the balance?",slug:"what-is-the-balance",children:[]},{level:2,title:"What is the margin available?",slug:"what-is-the-margin-available",children:[]},{level:2,title:"What is the margin used?",slug:"what-is-the-margin-used",children:[]},{level:2,title:"What is the open quantity?",slug:"what-is-the-open-quantity",children:[]},{level:2,title:"What is the P&amp;L?",slug:"what-is-the-p-l",children:[]},{level:2,title:"What is the open positions blotter?",slug:"what-is-the-open-positions-blotter",children:[]},{level:2,title:"What is the closed positions blotter?",slug:"what-is-the-closed-positions-blotter",children:[]}],filePathRelative:"faq/trading.md",git:{updatedTime:1622556215e3,contributors:[]}}}}]);