# Script

## Team and Vision

Team:
* [Noah](https://noah.engineer)
* [Jo]()
* [Amar](https://about.me/amar-singh)

> Mission

> Objectives

## User Profile

**Sally** is a single mother of two. 
* She was recently promoted at her job!
* Although the promotion increases her compensation, she works longer hours and loses benefits from welfare. 

In fact, her increase in pay is almost entirely offset by the loss of welfare benefits.

### Sally is not alone!

* 110 million Americans are receiving welfare (35%)
* Single moms represent 55% of the total welfare population
* 46.5 million people receive food stamps (15%)
* 77% of the budget is used towards basic necessities such as housing, food, and transportation

These harrowing statistics tell only a small fraction of the story. 

The Trump budget proposed cutting food stamps by over 25% over the next 10 years. This is worrying not only because it could be enforced, but also because it signaled an intention and, perhaps, a shift in public attitude.

The federal government makes the benefits available but then leaves it to states to administer them.

A Wyoming legislator, proud of how badly he had gummed up the state’s nutrition programs, said “We pride ourselves on doing the minimum required by the federal government.”

An Arizona congressman proposed that the card used by people receiving food-stamp benefits be made prison orange, conferring not just nutrition but shame. 

In 2016, North Carlona distributed federal disaster-relief food-benefit cards on the day of the presidential election, to give poor people a choice between eating and voting.

> the current system perpetuates a cycle of poverty

## Challenges

1. **Donation Mechanism Design**: ethically incentivize donors to contribute funds to purchase necessities
2. **Priority and Reputation Mechanism**: maximize the effectiveness of the donation itself -- impact on recipients

> "when you're a recipient [...] donors think you are stupid." ~ Michael Faye, Cofounder and President of Givewell

## Goals

Our project strives to crowdsource financial aid for Sally to break the cycle of poverty and put her on a path towards financial independence.

> Uphold the autonomy of receipients while simultaneously maintaining the trust of the donor that their donation would be spent effectively

While charities like GiveDirectly often focus on the former, we think it is worth reconsidering how to effectively incentivize donations in the context of lay donors.

## Prioritization

* close to funding required (up) => greater priority
* (more) time received since the last item => greater priority
* item type -- based on community scoring
* recipient *NeedScore*
    * based on reputation

## Reputation

Reputation can be earned by recipients that eventually pay back some fraction of what they received to the Sunshine fund. The amount they pay back is capped at the donations that they've received. 

The purpose of this incentive structure is to encourage recipients to pay back in proportion to what they've been given.

Once reputation is earned, it can be used to increase the prioritization of user items. Reputation can be transferred among users, thereby allowing the community of recipients to help each other obtain the resources that they need.

## Vision

Our long-term vision is to build self-sustaining, autonomous mechanisms to accept and govern charity donations.

With this in mind, we have two main objectives
1. Cut the unnecessary costs of organizational bloat
2. Increase transparency throughout the donation process

Today, we presented **Sunshine**: a self-sustaining mechanism for crowdsourcing financial support to break the cycle of poverty in the United States.

# Future Mechanism: Firefly

GiveDirectly has shown that unconditional cash transfers empower recipients to use aid effectively. In many cases, this donation paradigm allows recipients to navigate local markets and choose whether now is the best time to save/spend (as well as what to invest in). Likewise, it treats recipients as economically rational actors with multidimensional spending/saving strategies.

When donations are restricted to physical resources, recipients will request the resource that is worth the most (and is most likely to be awarded) even if they don't need that resource. Recipients make this choice with the expectation that they can sell the most expensive/popular good to buy more of the resources that they actually need. 

With this in mind, it may seem as if unconditional cash transfers are the best medium of donation. However, the effectiveness of unconditional cash transfers is *conditional* upon the existence of markets to buy/sell goods/services -- otherwise known as "market readiness". In humanitarian crises or natural disasters, direct resource transferrance is often preferrable (in the absence of local markets). 

Still, even when local markets exist, unconditional cash transfers that are restricted to the local currency can put recipients at risk of experiencing a decline in wealth due to currency depreciation. In these cases, recipients may feel compelled to spend the cash immediately instead of saving. 

**Firefly** enables recipients to choose the currency (or cryptocurrency) in which they receive the unconditional cash transfer. By providing this choice, **Firefly** further increases the autonomy of recipients, treating them as investors in their future.