import WithRight from 'with-right/src';

const mock = `
<article class="article" data-analytics-activitymap-region-id="article">
<div class="article-header with-keyline">
    <div class="category component">
        <div class="component-content">
            <div class="category-eyebrow">
                <span class="category-eyebrow__category category_release">PRESS RELEASE</span>
                    <span class="category-eyebrow__date">October 28, 2021</span>
            </div>
        </div>
    </div>
    <div class="pagetitle component">
        <div class="component-content">
            <h1 class="hero-headline">Apple Reports Fourth Quarter Results</h1>
        </div>
    </div>
    <div class="article-subhead component">
        <div class="component-content">
                New September quarter record with revenue up 29 percent<br><br>
Services and Mac revenue reach new all-time highs
        </div>
    </div>
\t\t<div class="sharesheet component" data-component-list="ShareSheet" data-clipboard-text="Copied to clipboard">
\t\t\t<div class="component-content">
\t\t\t\t<div class="sharesheet-content">
\t\t\t\t\t<div class="sharesheet-options-open">
\t\t\t\t\t\t<button type="button" class="icon-share icon" aria-label="Open share options">
\t\t\t\t\t\t</button>
\t\t\t\t\t</div>
\t\t\t\t\t<ul class="sharesheet-options" data-analytics-content="Apple Reports Fourth Quarter Results">
\t\t\t\t\t\t
\t\t\t\t\t\t\t<li class="social-option">
\t\t\t\t\t\t\t\t<button class="icon icon-facebook social-icon" data-href="https://nr.apple.com/dH8a3d9i5Y" data-analytics-title="Share via Facebook" aria-label="Share this article via Facebook (opens in new window)">
\t\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t<li class="social-option">
\t\t\t\t\t\t\t\t<button class="icon icon-twitter social-icon" data-href="https://nr.apple.com/dH8a3d9i5Y" data-analytics-title="Share via Twitter" aria-label="Share this article via Twitter (opens in new window)">
\t\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t<li class="social-option">
\t\t\t\t\t\t\t\t<button class="icon icon-mail social-icon" data-href="https://nr.apple.com/dH8a3d9i5Y" data-title="Apple Reports Fourth Quarter Results - Apple" data-description="" data-analytics-title="Share via mail" aria-label="Share this article via Mail (opens in new window)">
\t\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t<li class="social-option">
\t\t\t\t\t\t\t<button class="icon icon-link social-icon" data-href="https://nr.apple.com/dH8a3d9i5Y" data-analytics-title="Share via link" aria-label="Share via link">
\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t</li>
\t\t\t\t\t</ul>
\t\t\t\t\t<div class="sharesheet-options-close">
\t\t\t\t\t\t<button class="icon icon-close" title="close sharesheet" aria-label="close share">
\t\t\t\t\t\t</button>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="sharesheet-link-container" aria-hidden="true">
\t\t\t\t\t\t<div class="sharesheet-link-content">\t\t\t\t\t\t\t
\t\t\t\t\t\t\t<input class="link-text" value="https://nr.apple.com/dH8a3d9i5Y" tabindex="-1" readonly="" aria-hidden="true" disabled="disabled">
\t\t\t\t\t\t\t<button class="icon icon-close sharesheet-link-close" title="close" aria-label="close link" tabindex="-1" aria-hidden="true" role="button">
\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t
</div>
     <div class="pagebody  text component">
         <div class="component-content">
                 <div class="pagebody-copy"><span class="pagebody-location">CUPERTINO, CALIFORNIA</span> <span class="pagebody-date">October 28, 2021</span> Apple today announced financial results for its fiscal 2021 fourth quarter ended September 25, 2021. The Company posted a September quarter revenue record of $83.4 billion, up 29 percent year over year, and quarterly earnings per diluted share of $1.24.</div>
                 <div class="pagebody-copy">“This year we launched our most powerful products ever, from M1-powered Macs to an iPhone 13 lineup that is setting a new standard for performance and empowering our customers to create and connect in new ways,” said Tim Cook, Apple’s CEO. “We are infusing our values into everything we make — moving closer to our 2030 goal of being carbon neutral up and down our supply chain and across the lifecycle of our products, and ever advancing our mission to build a more equitable future.”</div>
                 <div class="pagebody-copy">“Our record September quarter results capped off a remarkable fiscal year of strong double-digit growth, during which we set new revenue records in all of our geographic segments and product categories in spite of continued uncertainty in the macro environment,” said Luca Maestri, Apple’s CFO. “The combination of our record sales performance, unmatched customer loyalty, and strength of our ecosystem drove our active installed base of devices to a new all-time high. During the September quarter, we returned over $24 billion to our shareholders, as we continue to make progress toward our goal of reaching a net cash neutral position over time.”</div>
                 <div class="pagebody-copy">Apple’s board of directors has declared a cash dividend of $0.22 per share of the Company’s common stock. The dividend is payable on November 11, 2021 to shareholders of record as of the close of business on November 8, 2021.</div>
                 <div class="pagebody-copy">Apple will provide live streaming of its Q4 2021 financial results conference call beginning at 2:00 p.m. PT on October 28, 2021 at <a href="https://www.apple.com/investor/earnings-call/" target="_blank">apple.com/investor/earnings-call</a>. This webcast will also be available for replay for approximately two weeks thereafter.</div>
         </div>
     </div>
<div class="docsanddownloads text component">
    <div class="component-content">
        <ul class="docsanddownloads__list">
\t\t\t
\t\t\t<li class="docsanddownloads__item">
                <div class="docsanddownloads__icon-wrapper">
                    <figure class="docsanddownloads__icon docsanddownloads__icon--document"></figure>
                </div>
                <div class="docsanddownloads__text-wrapper">
                    <p class="docsanddownloads__text" id="docsanddownloads-e7f60361c6213b68dc809a33937b685e">Consolidated Financial Statements</p>
                    <div class="docsanddownloads__link">
                        <a aria-describedby="docsanddownloads-e7f60361c6213b68dc809a33937b685e" class="icon icon-after icon-external" data-analytics-title="View PDF" href="/newsroom/pdfs/FY21_Q4_Consolidated_Financial_Statements.pdf" target="_blank">View PDF</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
<aside class="component legal-info" aria-label="Legal information">
    <div class="component-content">
     <div class="legal-info__entry">
         \t<p class="legal-info__body"> Apple periodically provides information for investors on its corporate website, <a href="https://www.apple.com" target="_blank">apple.com</a>, and its investor relations website, <a href="https://investor.apple.com" target="_blank" rel="nofollow" data-analytics-exit-link="">investor.apple.com</a>. This includes press releases and other information about financial performance, reports filed or furnished with the SEC, information on corporate governance, and details related to its annual meeting of shareholders.<br>
<br>
</p>
         \t<p class="legal-info__body"> This press release contains forward-looking statements, within the meaning of the Private Securities Litigation Reform Act of 1995. These forward-looking statements include without limitation those about the Company’s plans for return of capital, the payment of its quarterly dividend, and its investment plans and environmental initiatives. These statements involve risks and uncertainties, and actual results may differ materially from any future results expressed or implied by the forward-looking statements. Risks and uncertainties include without limitation: the effect of the COVID-19 pandemic on the Company’s business, results of operations, financial condition, and stock price; the effect of global and regional economic conditions on the Company’s business, including effects on purchasing decisions by consumers and businesses; the ability of the Company to compete in markets that are highly competitive and subject to rapid technological change; the ability of the Company to manage frequent introductions and transitions of products and services, including delivering to the marketplace, and stimulating customer demand for, new products, services, and technological innovations on a timely basis; the effect that shifts in the mix of products and services and in the geographic, currency, or channel mix, component cost increases, increases in the cost of developing, acquiring, and delivering content for the Company’s services, price competition, or the introduction of new products or services, including new products or services with higher cost structures, could have on the Company’s gross margin; the dependency of the Company on the performance of distributors of the Company’s products, including cellular network carriers and other resellers; the risk of write-downs on the value of inventory and other assets and purchase commitment cancellation risk; the continued availability on acceptable terms, or at all, of certain components, services, and new technologies essential to the Company’s business, including components and technologies that may only be available from single or limited sources; the dependency of the Company on manufacturing and logistics services provided by third parties, many of which are located outside of the US and which may affect the quality, quantity, or cost of products manufactured or services rendered to the Company; the effect of product and services design and manufacturing defects on the Company’s financial performance and reputation; failure to obtain or create digital content that appeals to the Company’s customers, or to make such content available on commercially reasonable terms; the dependency of the Company on third-party intellectual property, which may not be available to the Company on commercially reasonable terms or at all; the dependency of the Company on support from third-party software developers to develop and maintain software applications and services for the Company’s products; the impact of unfavorable legal proceedings or government investigations; the impact of complex and changing laws and regulations worldwide, which expose the Company to potential liabilities, increased costs, and other adverse effects on the Company’s business; the intense media, political, and regulatory scrutiny, which exposes the Company to increasing regulation, government investigations, legal actions, and penalties; the ability of the Company to manage risks associated with the Company’s retail stores; the ability of the Company to manage risks associated with the Company’s investments in new business strategies and acquisitions; the impact on the Company’s business and reputation from information technology system failures, network disruptions, or losses or unauthorized access to, or release of, confidential information; the ability of the Company to comply with laws and regulations regarding data protection; the continued service and availability of highly skilled employees, including key personnel; political events, trade and other international disputes, war, terrorism, natural disasters, public health issues, industrial accidents, and other business interruptions that could disrupt supply or delivery of, or demand for, the Company’s products; financial risks, including risks relating to currency fluctuations, credit risks, and fluctuations in the market value of the Company’s investment portfolio; and changes in tax rates, the adoption of new US or international tax legislation, and exposure to additional tax liabilities. More information on these risks and other potential factors that could affect the Company’s business and financial results is included in the Company’s filings with the SEC, including in the “Risk Factors” and “Management’s Discussion and Analysis of Financial Condition and Results of Operations” sections of the Company’s most recently filed periodic reports on Form 10-K and Form 10-Q and subsequent filings. The Company assumes no obligation to update any forward-looking statements or information, which speak as of their respective dates.<br>
</p>
         <h3 class="legal-info__heading">About Apple</h3>
         \t<p class="legal-info__body"> Apple revolutionized personal technology with the introduction of the Macintosh in 1984. Today, Apple leads the world in innovation with iPhone, iPad, Mac, Apple Watch, and Apple TV. Apple’s five software platforms — iOS, iPadOS, macOS, watchOS, and tvOS — provide seamless experiences across all Apple devices and empower people with breakthrough services including the App Store, Apple Music, Apple Pay, and iCloud. Apple’s more than 100,000 employees are dedicated to making the best products on earth, and to leaving the world better than we found it.
</p>
     </div>
   </div>
</aside>
<div class="presscontacts component">
\t
\t
    <div class="component-content">
        <h2 class="presscontacts-headline">Press Contact</h2>
        <div class="contacts-container">
            <div class="contactinfo">
                <p class="contactinfo-title">Josh Rosenstock</p>
                <p class="contactinfo-text"></p>
                <p class="contactinfo-text">Apple</p>
                <p class="contactinfo-text">
                    <a href="mailto:jrosenstock@apple.com">jrosenstock@apple.com</a>
                </p>
                <p class="contactinfo-text">
                    (408) 862-1142
                </p>
            </div>
        </div>
    </div>
</div>
<div class="presscontacts component">
\t
\t
    <div class="component-content">
        <h2 class="presscontacts-headline">Investor Relations Contact</h2>
        <div class="contacts-container">
            <div class="contactinfo">
                <p class="contactinfo-title">Tejas Gala</p>
                <p class="contactinfo-text"></p>
                <p class="contactinfo-text">Apple</p>
                <p class="contactinfo-text">
                    <a href="mailto:tgala@apple.com">tgala@apple.com</a>
                </p>
                <p class="contactinfo-text">
                    (669) 227-2402
                </p>
            </div>
        </div>
    </div>
</div>
\t

    \t<div class="sosumi text component">
        <div class="component-content">
                <ol class="sosumi-list"><p>© 2021 Apple Inc. All rights reserved. Apple and the Apple logo are trademarks of Apple. Other company and product names may be trademarks of their respective owners.</p></ol>
           \t
        </div>
    </div>
</article>
`;

const container = window.document.getElementById('app');
container!.innerHTML = mock;

new WithRight({
    copyright: [
        'SOURCE: TEST',
        'LINK: https://mock.example/test ',
    ],
    preventDebug: true,
    onDebug: () => {
        console.log('debug');
    },
    onCopy: () => {
        console.log('copy');
    },
});
