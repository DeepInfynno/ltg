import { Layout } from "@components/layouts";
import Meta from "@components/Meta";
import React from "react";
import { NextPageWithLayout } from "./_app";
import OgImage from "../assets/images/logo-1.svg";

const termsDetails = [
  {
    title: "Buyer’s agreement",
    description:
      "Here’s what we do at Live Football Tickets:\nWe have created an online marketplace to make hard-to-get tickets available to anyone providing quality customer service. Ticket prices on our site are determined by supply and demand (market value) by ticket specialists (the sellers). Since supply and demand are what drive the prices, today the prices can be low and tomorrow they may be higher, it can always change.\nFans need to place orders with LiveFootballTickets not only because we have a friendly customer service, leading security and a money back guarantee – they also come to us since it's so difficult to get tickets from the primary sources – especially for the biggest matches. So this is why those hard-to-get tickets are listed by the sellers above face value. Keep an eye out for deals though – sellers also provide tickets below face value when the market is full of tickets.\nYou can read more about us in our About Us section, however this section is to let you know what you're agreeing to when you place an order with us.\nA contract (“buyer agreement, contract”) has been deemed as made between livefootballtickets.com and the buyer (you, your, the client) when the client has confirmed requirements, by any medium, and livefootballtickets.com has accepted the order and provided a confirmation email (invoice).\nThe following terms and conditions along with any other policies or guidelines posted on this site shall govern your use of this site. If you visit our site or make a purchase, you are agreeing to the following terms and conditions. Please read through them before placing your order.",
  },
  {
    title: "Using a credit card?",
    description:
      "We accept most major credit cards. Your billing address will be verified with your credit card company so please be certain to use the exact address where your statements are sent otherwise your order may get rejected. Please be aware that purchasing by credit card does not entitle you to cancel your order or grant you any variances from our terms and conditions. Any attempt to defraud us will be responded to with legal action to recover all losses and legal fees. If you have an issue regarding your order, please contact our customer service first as we're there to assist you.",
  },
  {
    title: "All purchases are final",
    description:
      "Refunds are only possible when an event is cancelled and not postponed or rescheduled. Under the extraordinarily rare circumstances in which an event is cancelled or government restrictions on stadium capacities are implemented, LiveFootballTickets.com will refund everything except for the service fee (variable processing & administrative expenses). A credit, in the form of a voucher code, for the full value of the service fee, will be provided to customers for application towards future orders, valid for 2 years. The value of the refund is for the price of tickets and shipping only, as LiveFootballtickets.com has the right to retain its booking fee to cover variable processing and administrative expenses, under Consumer Law. If an event has been cancelled and not rescheduled, you will be contacted by our customer service to arrange your refund.\nIn the rare event a customer does not receive their tickets in time for a match (for an event that is not cancelled), a full refund will be issued to the buyer.\nIf the customer would like to sell the tickets that they purchased, they can contact us to do so. We will attempt to sell the tickets for them on consignment – meaning that if we can resell them – then they get their money back – but if we can’t we will return the tickets to them.\nIf the customer originally purchased those tickets from our website and we are able to sell their tickets, our fees for selling their tickets will be waived and they will receive 100% of the amount that we sell them for, up to the amount that they paid for them. Since consignment tickets are their property, we need the customer's direction on the price they want for their tickets. Also, in case their tickets don't sell, they must clearly tell us when they want the tickets returned to them.",
  },
  {
    title: "Currency & pricing",
    description:
      "To make it easier for fans to buy from our site we provide currency conversion estimates. We update them regularly so the price you see is very close to what gets charged by your bank, but please note that we cannot guarantee it will be exactly the same. If you want to get a real time estimate just before you purchase – please ask our customer service who would be happy to do so for you.\nAll prices quoted are inclusive of Spanish IVA (Vat) when applicable. In event of the rate of IVA (Vat) being increased between the acceptance of a booking and an event the client shall be liable to pay such increase before tickets are issued.\nTickets are priced at the current market value and are subject to change at any time without notice. All prices are guaranteed at the time the payment is approved.",
  },
  {
    title: "Your order",
    description:
      "We send you a booking email immediately after your order is successfully placed. Please never assume your order is cancelled simply because you haven't received an email. In fact, it's likely your order has gone through, the email is in your junk box or lost in cyberspace and we're arranging to have your tickets delivered. Please contact us if it's not clear to you if your order has been confirmed or not. Online orders placed over the weekend or after business hours may not be processed until the next business day.\nThe seating charts on the site are there to serve as a guide when purchasing tickets but do not guarantee exact section and/or row locations. We work with many ticket specialists who list tickets for sale on our website. While we work hard to keep the listings accurate, we cannot be responsible for typographical errors. If an error is found while processing your order you will be notified and provided with other available seating choices or the option to cancel your order. Please check your tickets carefully once they arrive. If you find any discrepancies, you must let us know as soon as possible (within 48 hours) of receiving them so we can fix the situation.\nThe seller reserves the right to upgrade customers seat(s) should the seat(s) they order become unavailable or in the event that a seller defaults. Tickets can however never be downgraded without consent of the buyer or at an agreed discount. The hierarchy of seats (worst to best) are as follows: Shortside Upper Tier, Shortside Lower Tier, Longside Upper Tier, Longside Lower Tier, VIP and hospitality categories (OR) Category 4, Category 3, Category 2, Category 1, VIP and hospitality (regardless of seating location).",
  },
  {
    title: "Dates & times",
    description:
      "Event dates and times are always subject to change. In fact, it happens frequently, so it's important that you check with the venue or local media regularly for the correct time and date – yes, sometimes they will move the date of the matches. When you make a purchase for a specific event, you are purchasing tickets for that event regardless of the date/time that it is played.\nWe have absolutely no control over this whatsoever so we cannot offer refunds if there are changes to the dates and times. All times listed on the website are local to the area of the event. With this in mind, please carefully consider your desire to purchase before placing your order.\nIf you are arranging airfare it’s advisable to purchase a flexible fair to allow changes should the date of the event change.",
  },
  {
    title: "Delivery",
    description:
      "Deliveries depend on the format of the ticket. These can either be regular physical tickets or in most cases, tickets tend to be released by the clubs in an electronic configuration. The most common ticket formats nowadays are either PDF files or Mobile Tickets.\nDeliveries are usually made via Royal Mail or FedEx International and all deliveries will require a signature, however in some circumstances the seller may require you to meet a representative at or close to the venue on the day of the match. We send you an email to let you know when your tickets are shipped and you can expect them to arrive within 48 hours (usually 1 day) if sent by Royal Mail, and 7-10 days with FedEx International Delivery.\nBecause football tickets are typically printed and released by the teams very close to the time of the match (often just 3 days before or on the day of the match), international delivery may not be possible and your tickets will have to be delivered locally (to your home or your hotel the day/night before the event). Please notify the hotel reception desk/concierge so they are expecting to accept the delivery on your behalf. It is your responsibility to be available to accept the delivery. You also agree to provide us with a secure delivery location and authorise anybody at that address to act on your behalf to accept delivery of the package. This is absolutely required in order for us to manage the logistics of delivery for so many fans in so many different cities.",
  },
  {
    title: "Postponed event",
    description:
      "If an event is postponed the tickets will be honoured for the new date of the show. New tickets will not need to be issued. If you cannot make the new date, we cannot cancel the booking or offer any refunds, however we can attempt to sell your tickets on consignment. Details of consignment sales are posted above in the ‘All purchases are final’ section.",
  },
  {
    title: "Site disclaimer",
    description:
      "Livefootballtickets.com is a private ticket agency, incorporated in Madrid, Spain and is not affiliated with Ticketmaster, any box office, artist, sports team or venue. We are not affiliated nor endorsed by any of the artists, teams, venues or organizations listed on this site.\nThe provision of entertainment packages and related hospitality services by Livefootballtickets.com are expressly conditioned upon the booking terms and conditions set forth below (also referred to as the contract). Any terms and conditions proposed by you in addition to, or in conflict with these booking terms and conditions, are expressly rejected by Livefootballtickets.com.",
  },
  {
    title: "The buyer agreement",
    description:
      "This buyer agreement shall constitute a binding agreement and contract between you, your company and Livefootballtickets.com; you accept the terms and conditions of this contract when you confirm the requirements of your order in writing, by either a booking form, letter, email, purchase order or facsimile.\nThis legal notice regulates use of the www.livefootballtickets.com portal, which is provided to Internet users by LiveTix Group, S.L., with a Alcorcon (Madrid) address at Avenida de Europa 2 and inscribed at the Madrid Business Register, Tomo 23.491, libro 0, folio 211, section 8, page number M-421.422.\nIf any legal proceedings of any nature are brought by Livefootballtickets.com because of breach of or to enforce or interpret any of the terms of this contract, Livefootballtickets.com shall be able to recover from you it's reasonable solicitor's fees and other associated costs; this contract, together with the description of services provided by Livefootballtickets.com on its invoice, constitutes the entire agreement between the parties and replaces and supersedes all agreements, promises or understandings, whether written or oral, and cannot be modified unless in writing and signed by the General Manager of Livefootballtickets.com.",
  },
];

const Terms: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-6 max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1364px] mx-auto w-full my-10">
      <Meta
        title={"LiveTicketGroup - Terms"}
        description={
          "Read LiveTicketGroup’s terms of service to understand the legal terms of use for our website and services. By using our site, you agree to these terms."
        }
        og_title={"LiveTicketGroup - Terms"}
        og_description={
          "Read LiveTicketGroup’s terms of service to understand the legal terms of use for our website and services. By using our site, you agree to these terms."
        }
        og_image={OgImage}
      />
      {termsDetails.map((term, index) => {
        return (
          <div key={index} className="flex flex-col gap-3 ">
            <h2 className="text-lg text-black font-bold">{term.title}</h2>{" "}
            <div className="flex flex-col gap-3 text-base">
              {term.description.split("\n").map((i, key) => {
                return <p key={key}>{i}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Terms.getLayout = (page) => <Layout hideContact>{page}</Layout>;

export default Terms;
