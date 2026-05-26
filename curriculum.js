// =====================================================================
// 30-Day Spoken English Curriculum for QMC/QDC Business
// Target: Chinese CET-6 speaker, US/EU customers
// Product focus: KINGHOU Combined Quick Change System
//   (Hydraulic clamps + Quick die/mold change cart, for both
//    injection molding presses and stamping presses)
// =====================================================================

const CURRICULUM = {
  meta: {
    total_days: 30,
    daily_minutes: 60,
    blocks_per_day: 3
  },

  days: [
    // ---------- DAY 1 ----------
    {
      day: 1,
      theme: "Airport arrival + Introducing your company",
      block1_shadow: {
        title: "Going through US customs",
        difficulty: "easy",
        accent: "en-US",
        lines: [
          { en: "Good afternoon. Passport, please.", zh: "下午好。请出示护照。" },
          { en: "What's the purpose of your visit?", zh: "您此行的目的是什么？" },
          { en: "I'm here on business. I'm visiting a customer in Detroit.", zh: "我来出差。我要去底特律见一个客户。" },
          { en: "How long are you planning to stay?", zh: "您打算待多久？" },
          { en: "About ten days. I'll be attending a trade show in Chicago after the meetings.", zh: "大概十天。开完会后我会去芝加哥参加一个展会。" },
          { en: "Where will you be staying?", zh: "您住在哪里？" },
          { en: "The Marriott downtown. The booking confirmation is in my email if you need it.", zh: "市中心的万豪。需要的话预订确认在我邮件里。" },
          { en: "That won't be necessary. Welcome to the United States.", zh: "不需要。欢迎来到美国。" }
        ],
        key_phrases: ["on business", "trade show", "booking confirmation", "That won't be necessary"]
      },
      block2_dictation: {
        title: "Email opener with a new customer",
        accent: "en-US",
        text: "Hi Mark, this is Wang Lei from Kinghou. We met briefly at the IMTS show in Chicago last September. You mentioned your team was looking at cutting down die change time on your 800-ton stamping line. I'd like to send over a short proposal this week. Would Thursday work for a quick call?",
        target_phrases: ["briefly", "die change time", "send over", "Would Thursday work"]
      },
      block3_persona: {
        scenario: "First introduction call with a potential US customer",
        persona_name: "Mark Reilly",
        persona_role: "Plant Engineering Manager at a Tier-2 auto stamping supplier in Michigan",
        persona_personality: "Polite, busy, skeptical of Chinese suppliers, wants to get to the point fast. American English, slight Midwest accent in writing.",
        opening_line: "Hey, Mark Reilly speaking. I got about ten minutes before my next meeting — what've you got for me?",
        your_goal: "Introduce yourself and Kinghou in under 60 seconds. Mention that you do combined systems — hydraulic clamps + die change carts — for both stamping and injection. Ask one good qualifying question. Get permission to send a 1-page proposal."
      }
    },

    // ---------- DAY 2 ----------
    {
      day: 2,
      theme: "Hotel + Small talk basics",
      block1_shadow: {
        title: "Hotel check-in and asking for the WiFi",
        difficulty: "easy",
        accent: "en-US",
        lines: [
          { en: "Hi, I have a reservation under Wang. W-A-N-G.", zh: "你好，我有一个 Wang 的预订。W-A-N-G。" },
          { en: "Let me pull that up. Three nights, king bed, non-smoking?", zh: "我查一下。三晚，大床，无烟房？" },
          { en: "That's right. Is breakfast included in my rate?", zh: "对。早餐含在房费里吗？" },
          { en: "It is. Breakfast is served from six to ten in the lounge on the second floor.", zh: "含。早餐六点到十点，二楼休息区。" },
          { en: "Could you also write down the WiFi password for me?", zh: "能帮我写一下 WiFi 密码吗？" },
          { en: "Sure thing. The network is Marriott_Guest and the password is on this card.", zh: "好的。网络是 Marriott_Guest，密码在这张卡上。" },
          { en: "One more thing — is there a printer I can use? I need to print one document.", zh: "还有一件事 — 有打印机可以用吗？我需要打印一份文件。" },
          { en: "Yes, the business center is just past the elevators. Send the file to print@marriottdt.com.", zh: "有，商务中心就在电梯过去一点。把文件发到那个邮箱就行。" }
        ],
        key_phrases: ["pull that up", "Sure thing", "One more thing", "just past"]
      },
      block2_dictation: {
        title: "Small talk over coffee with a customer",
        accent: "en-US",
        text: "So how was the flight in? Long one, I bet. I did Shanghai once back in 2019 — fourteen hours, killed me. Did you have a chance to get any sleep, or are you running on coffee right now? We've got time before the plant tour, so take your time finishing that.",
        target_phrases: ["flight in", "I bet", "running on coffee", "take your time"]
      },
      block3_persona: {
        scenario: "Small talk before a factory tour",
        persona_name: "Dave Carter",
        persona_role: "Operations Director, mid-sized US injection molding shop",
        persona_personality: "Warm, talkative, asks personal-but-not-intrusive questions. Will mention sports (NFL) and weather. American English.",
        opening_line: "Hey, welcome! Did you find the place okay? Coffee's in the break room — black, cream, sugar, whatever you like. So how was the flight?",
        your_goal: "Make 3-5 minutes of natural small talk. Answer his flight question, ask one back, find one common topic (weather/sports/food). Don't pitch your product yet."
      }
    },

    // ---------- DAY 3 ----------
    {
      day: 3,
      theme: "Restaurant + Combined system basics",
      block1_shadow: {
        title: "Dinner with a customer at a steakhouse",
        difficulty: "medium",
        accent: "en-US",
        lines: [
          { en: "Have you been here before? The ribeye is what they're known for.", zh: "你以前来过吗？这里的肋眼牛排很有名。" },
          { en: "I'll trust you on that. How do you usually order it — medium?", zh: "听你的。你一般点几分熟 — 五分熟吗？" },
          { en: "Medium-rare for me. But pick whatever you like.", zh: "我要三分熟。你点你喜欢的就好。" },
          { en: "Could you tell the server I'd like mine medium-well? I'm not big on rare meat.", zh: "你能跟服务员说我要七分熟吗？我不太能吃太生的。" },
          { en: "No problem. Want a glass of red wine to go with that?", zh: "没问题。要不要配一杯红酒？" },
          { en: "Just water for me, thanks. I've got an early flight tomorrow.", zh: "我喝水就行，谢谢。明早有个早班机。" },
          { en: "Smart. Let me grab his attention.", zh: "明智。我叫一下服务员。" },
          { en: "Thanks for picking the place — this is on me tonight.", zh: "谢谢你选的餐厅 — 今晚我请。" }
        ],
        key_phrases: ["trust you on that", "not big on", "go with that", "this is on me"]
      },
      block2_dictation: {
        title: "Explaining what your combined system does",
        accent: "en-US",
        text: "Basically, our combined system has two parts working together. The hydraulic clamps replace your manual T-bolts on the platen — clamping happens in under ten seconds with one button. And the quick change cart rolls the new die in already pre-staged, so your operator doesn't fight a forklift in front of the press. Together, a forty-minute changeover drops to under ten.",
        target_phrases: ["working together", "T-bolts on the platen", "pre-staged", "drops to under ten"]
      },
      block3_persona: {
        scenario: "Dinner with the customer, casual chat turns to business",
        persona_name: "Linda Park",
        persona_role: "VP of Manufacturing at a US auto-parts company",
        persona_personality: "Korean-American, sharp, asks one personal question then pivots to business. Will ask about your family and then ROI in the same breath.",
        opening_line: "So tell me about yourself, Wang Lei. Married? Kids? — and also, before I forget, what's the typical payback period your customers see on your combined system?",
        your_goal: "Answer the personal part briefly and warmly (1-2 sentences), then handle the ROI question with a concrete number range (talk in months of payback, not years)."
      }
    },

    // ---------- DAY 4 ----------
    {
      day: 4,
      theme: "Telephone English + Lead time questions",
      block1_shadow: {
        title: "Answering a customer call",
        difficulty: "medium",
        accent: "en-US",
        lines: [
          { en: "Kinghou, this is Wang speaking. How can I help you?", zh: "Kinghou，我是 Wang。请问需要什么帮助？" },
          { en: "Hi Wang, it's Tom from Acme Stamping. Do you have a minute?", zh: "Wang 你好，我是 Acme 冲压的 Tom。你方便讲话吗？" },
          { en: "Yeah, go ahead. What's up?", zh: "方便，你说。怎么了？" },
          { en: "We're trying to nail down a delivery date for the QDC system we quoted last month. Where are we on that?", zh: "我们想确定一下上个月报价的那套快换模系统的交货日期。进展怎么样？" },
          { en: "Let me pull up your file. Quote number, if you have it handy?", zh: "我查一下你的文件。报价单号方便发我吗？" },
          { en: "It's Q-2024-118.", zh: "Q-2024-118。" },
          { en: "Got it. Looks like we can ship within six weeks of receiving your PO. Does that work for your timeline?", zh: "查到了。收到您的采购订单后六周可以发货。这个时间您能接受吗？" },
          { en: "Six weeks is tight but workable. I'll get the PO over to you by Friday.", zh: "六周有点紧但可以。我周五前把采购订单发给你。" }
        ],
        key_phrases: ["Do you have a minute", "nail down", "pull up your file", "by Friday"]
      },
      block2_dictation: {
        title: "Explaining lead time delays",
        accent: "en-US",
        text: "I want to be straight with you on the lead time. We're seeing some pressure on hydraulic cylinder supply right now — about a two-week impact across all orders this quarter. So instead of the standard six weeks, you're looking at eight from PO. I can prioritize your order once the PO is in, but I don't want to overpromise. Does eight weeks still work, or do we need to talk options?",
        target_phrases: ["be straight with you", "seeing some pressure", "looking at eight from PO", "talk options"]
      },
      block3_persona: {
        scenario: "Customer calls to push back on a quoted lead time",
        persona_name: "Tom Reeves",
        persona_role: "Procurement Manager at a US auto parts plant",
        persona_personality: "Direct, slightly impatient, his own boss is pushing him. Will say 'that doesn't work for us' and wait for you to solve it.",
        opening_line: "Wang, your lead time came back at eight weeks. That doesn't work for us — we're launching a new program in six. What can you do?",
        your_goal: "Don't promise what you can't deliver. Offer 2-3 concrete options (partial shipment of clamps first then the cart, air freight for the controller, an alternative cart model already in stock). End by asking which option he wants to explore."
      }
    },

    // ---------- DAY 5 ----------
    {
      day: 5,
      theme: "Apologies + Handling a complaint",
      block1_shadow: {
        title: "Apologizing professionally",
        difficulty: "medium",
        accent: "en-US",
        lines: [
          { en: "Tom, I owe you an apology. I should've flagged the delay last week instead of waiting.", zh: "Tom，我得向你道歉。上周延迟我应该早点告诉你，而不是等到现在。" },
          { en: "I appreciate you saying that. What happened?", zh: "谢谢你这么说。怎么回事？" },
          { en: "Our shipping partner missed the cutoff for the Tuesday container. By the time we caught it, the next sailing was already three days out.", zh: "我们的货代错过了周二集装箱的截止时间。等我们发现的时候，下一班船已经是三天后了。" },
          { en: "Why didn't anyone call me?", zh: "为什么没人打电话给我？" },
          { en: "Honestly? Internal communication broke down on our side. I've already changed how we flag shipping issues so this doesn't happen again.", zh: "说实话？我们内部沟通出了问题。我已经改了流程，确保下次不会再发生。" },
          { en: "Okay. What's the new ETA?", zh: "好吧。新的到货时间是？" },
          { en: "Vessel arrives port of LA on the 18th. With customs, you should have it on your floor by the 23rd.", zh: "船 18 号到洛杉矶港。算上清关，23 号能到你工厂。" },
          { en: "Send me the BL when it's available. And Wang — next time, call me first.", zh: "提单出了发我。还有 Wang —下次先打电话给我。" }
        ],
        key_phrases: ["I owe you an apology", "should've flagged", "Honestly?", "next time, call me first"]
      },
      block2_dictation: {
        title: "Customer is angry about a hydraulic leak",
        accent: "en-US",
        text: "Look, I don't want excuses. We installed your clamping system on Friday, ran it Monday, and by Tuesday we had hydraulic oil on the floor. My press is down. Every hour costs us about twelve hundred bucks. I need a fix today, not a ticket number. Can you get someone on the phone with my maintenance guy in the next thirty minutes?",
        target_phrases: ["don't want excuses", "oil on the floor", "press is down", "in the next thirty minutes"]
      },
      block3_persona: {
        scenario: "Customer just discovered a hydraulic leak on a newly installed clamp",
        persona_name: "David Whitaker",
        persona_role: "Maintenance Supervisor, UK injection molding shop",
        persona_personality: "British, cold, formal, restrained anger. Won't shout, but will use phrases like 'frankly disappointing' and 'we expected better'.",
        opening_line: "Wang, I'll be brief. The clamp unit arrived Tuesday, installed Wednesday, leaking by Thursday morning. Frankly, this is not what we expected from Kinghou. What's your plan?",
        your_goal: "Acknowledge first (don't defend). Get specifics (which clamp, serial number, where is the leak — fitting, cylinder seal, or hose). Commit to a clear next action with a time. End by asking permission to call him back in 30 min."
      }
    },

    // ---------- DAY 6 ----------
    {
      day: 6,
      theme: "Negotiation + Price pushback",
      block1_shadow: {
        title: "Pushing back on a price challenge",
        difficulty: "medium-hard",
        accent: "en-US",
        lines: [
          { en: "Your price came in about 18 percent higher than your competitor.", zh: "你们的价格比对手高大约 18%。" },
          { en: "I hear you. Can I ask which scope they quoted you — clamps only, or the combined system with the cart?", zh: "我明白。能问一下他们报的是什么范围 — 只是压板，还是带换模小车的组合系统？" },
          { en: "Just the clamps. For 1000-ton class.", zh: "只是压板。1000 吨级。" },
          { en: "That's helpful. Just the clamps will look cheaper on paper, but if your team is still pushing the die in with a forklift, you're not getting the changeover time we talked about. The cart is where most of the time savings come from.", zh: "这个信息有用。光报压板表面看是便宜，但如果你的人还是用叉车把模具推进去，我们说的那个换模时间根本省不下来。时间节省主要靠小车。" },
          { en: "So you're saying their quote isn't apples to apples.", zh: "所以你的意思是他们的报价不是同等比较。" },
          { en: "Exactly that. Want me to put together a quote with just the clamps too, so you can compare directly? Then you decide what scope you actually need.", zh: "就是这个意思。要不我也给你报一份只有压板的，方便你直接对比？然后你来决定到底要哪个范围。" },
          { en: "Yeah, do that. And include what the cart would add separately.", zh: "好，这样做。把小车单独的加项也列出来。" },
          { en: "Will do. You'll have both quotes by tomorrow noon.", zh: "好的。明天中午前两份报价都发你。" }
        ],
        key_phrases: ["I hear you", "apples to apples", "on paper", "do that"]
      },
      block2_dictation: {
        title: "Asking for the order without sounding pushy",
        accent: "en-US",
        text: "I don't want to push you, but I do want to know where you're at. We've gone through the technical fit, the cost comparison, and the two reference visits. If there's still something blocking the decision, I'd rather hear it now so I can address it. If we're good, I can have a PO template in your inbox by tomorrow morning. What's on your mind?",
        target_phrases: ["where you're at", "blocking the decision", "I'd rather hear it now", "What's on your mind"]
      },
      block3_persona: {
        scenario: "Customer says you're too expensive, asks for 15% discount",
        persona_name: "Frank Morgan",
        persona_role: "Purchasing Director at a large US Tier-1",
        persona_personality: "Aggressive negotiator, uses pressure tactics, will go silent to make you talk. Will say 'we have other options' more than once.",
        opening_line: "Wang, here's where we are. Your number is too high. I need fifteen percent off or we're going with someone else. What's it going to be?",
        your_goal: "Don't crumble. Don't immediately discount. Ask what's driving the 15% number. Offer value (warranty extension, free commissioning, payment terms) before touching price. Hold a number you can live with."
      }
    },

    // ---------- DAY 7 ----------
    {
      day: 7,
      theme: "Factory tour + Showcasing your system",
      block1_shadow: {
        title: "Walking a customer through your factory",
        difficulty: "medium-hard",
        accent: "en-US",
        lines: [
          { en: "Welcome to Kinghou. Before we head onto the floor, let me grab safety glasses and hi-vis vests for both of us.", zh: "欢迎来到 Kinghou。在进车间前，我先拿安全眼镜和反光背心。" },
          { en: "Thanks. Are photos okay on the floor?", zh: "谢谢。车间里能拍照吗？" },
          { en: "Photos of the products yes, of the assembly fixtures no. I'll point out anything sensitive.", zh: "拍产品可以，拍组装夹具不行。敏感的我会提醒你。" },
          { en: "Got it. How big is the production floor?", zh: "明白。生产车间多大？" },
          { en: "About six thousand square meters. We split it into three zones — hydraulic clamp machining on the left, cart welding and assembly in the center, testing and packaging on the right.", zh: "大约六千平米。分三个区 — 左边液压压板加工，中间小车焊接和组装，右边测试和包装。" },
          { en: "What's that machine doing?", zh: "那台机器在做什么？" },
          { en: "That's our pressure test rig. Every clamp gets tested at 1.5 times rated pressure for thirty minutes before it ships. We log the data and keep it on file for ten years.", zh: "那是压力测试台。每个压板出厂前在 1.5 倍额定压力下测三十分钟。数据存档十年。" },
          { en: "Can I see one of those test reports?", zh: "我能看一份测试报告吗？" },
          { en: "Absolutely. Let me grab one from a recent batch.", zh: "当然。我去最近一批里拿一份。" }
        ],
        key_phrases: ["head onto the floor", "hi-vis vests", "Got it", "split it into three zones"]
      },
      block2_dictation: {
        title: "Wrapping up a customer visit",
        accent: "en-US",
        text: "Before you head to the airport, I want to make sure we've covered everything. You've seen the production floor, the QC lab, and the test bench. You met our engineering manager and the after-sales lead. The one thing we didn't get to was the warehouse — but we can do that over a video call next week if you want. What stood out to you today, and what are you still unsure about?",
        target_phrases: ["before you head to the airport", "covered everything", "video call", "what stood out to you"]
      },
      block3_persona: {
        scenario: "End-of-tour wrap-up, customer is silent and hard to read",
        persona_name: "Henrik Olsen",
        persona_role: "Engineering Director, Danish injection molding company",
        persona_personality: "Northern European, quiet, doesn't fill silences. Will answer with one or two words. Polite but not warm. You have to work to get information out of him.",
        opening_line: "...Thank you for the tour. It was interesting.",
        your_goal: "Don't panic at his short answers. Ask open-ended questions ('What did you think of...', 'How does that compare to...'). Get him to say at least three substantive things before he leaves."
      }
    },

    // ===== WEEK 2: HAND-WRITTEN PREMIUM CONTENT =====

    // ---------- DAY 8 ----------
    {
      day: 8,
      theme: "Uber to plant + Press tonnage talk",
      block1_shadow: {
        title: "Getting an Uber to the customer's plant",
        difficulty: "easy",
        accent: "en-US",
        lines: [
          { en: "Hey, are you Mike? I'm Wang — I just confirmed in the app.", zh: "嘿，你是 Mike 吗？我是 Wang — 刚在 app 里确认了。" },
          { en: "Yep, that's me. Detroit Stamping over on Ford Road, right?", zh: "对，是我。去 Ford Road 上的 Detroit Stamping 对吧？" },
          { en: "That's the one. Should be about twenty minutes this time of day, yeah?", zh: "就是那个。这个点大概二十分钟吧？" },
          { en: "Yeah, traffic's not bad. You in town for business?", zh: "对，路上不堵。来出差？" },
          { en: "Yeah, I'm with Kinghou — we make quick change systems for stamping presses. First time visiting this customer.", zh: "对，我是 Kinghou 的 — 我们做冲压机快换模系统。第一次拜访这个客户。" },
          { en: "Oh nice. My brother-in-law works at a stamping plant out in Toledo. Dirty business, he says.", zh: "哦不错。我妹夫在托莱多一家冲压厂上班。他说挺脏的活。" },
          { en: "Ha, yeah it is. But somebody's got to make the car parts.", zh: "哈，是挺脏的。不过总得有人做汽车零件。" },
          { en: "Fair point. Alright, gate's coming up — security or main entrance?", zh: "有道理。门口到了 — 保安那边还是正门？" },
          { en: "Main entrance, thanks. I'll tip you through the app — appreciate the smooth ride.", zh: "正门，谢了。我用 app 给你小费 — 一路开得挺稳。" }
        ],
        key_phrases: ["That's the one", "in town for business", "fair point", "tip you through the app"]
      },
      block2_dictation: {
        title: "Talking tonnage and what fits",
        accent: "en-US",
        text: "Before we get into pricing, I need to confirm two things about your press. First, what's the tonnage rating — 600 ton, 800, 1000? That tells me which clamp size to spec. Second, what's your maximum die size — length, width, and shut height. With those four numbers I can tell you in five minutes whether our standard combined system fits or if we need to custom it.",
        target_phrases: ["tonnage rating", "spec", "shut height", "custom it"]
      },
      block3_persona: {
        scenario: "Customer doesn't know his own press specs",
        persona_name: "Joe Patton",
        persona_role: "Small US stamping shop owner-operator",
        persona_personality: "Older, hands-on, doesn't speak in spec sheets — describes things by what they look like. Will say 'the big blue one' instead of '800-ton'.",
        opening_line: "Yeah hi, I got a press here, the big blue one out back, and I wanna change dies faster. Whaddya got?",
        your_goal: "Don't intimidate him with jargon. Ask plain-language questions to figure out the press tonnage and die weight (e.g., 'roughly how much does one die weigh?', 'two guys lifting it or you need the overhead crane?'). Translate his answers back into specs you can use."
      }
    },

    // ---------- DAY 9 ----------
    {
      day: 9,
      theme: "Supermarket + Hydraulic vs mechanical clamps",
      block1_shadow: {
        title: "Picking up dinner stuff at a US supermarket",
        difficulty: "easy",
        accent: "en-US",
        lines: [
          { en: "Excuse me, which aisle is the bottled water in?", zh: "请问瓶装水在哪个货架？" },
          { en: "Aisle seven, all the way at the back on your right.", zh: "七号货架，靠右最里面。" },
          { en: "Thanks. And the pain medicine — like Advil?", zh: "谢谢。还有止痛药 — 像 Advil 那种？" },
          { en: "That's pharmacy, aisle three. Are you feeling alright?", zh: "那是药品区，三号货架。你身体还好吗？" },
          { en: "Just a headache from jet lag. I'll live.", zh: "就是时差头疼。死不了。" },
          { en: "Ha, fair enough. Let me know if you need help finding anything else.", zh: "哈，明白。还需要找什么告诉我。" },
          { en: "Actually one more thing — do you take credit cards at self-checkout?", zh: "其实还有一个 — 自助结账能刷卡吗？" },
          { en: "Yeah, tap or insert. Have a good one.", zh: "可以，刷卡或者插卡。回头见。" }
        ],
        key_phrases: ["all the way at the back", "I'll live", "fair enough", "have a good one"]
      },
      block2_dictation: {
        title: "Hydraulic vs mechanical — the honest comparison",
        accent: "en-US",
        text: "Honestly, both have their place. Mechanical clamps are cheaper upfront and there's nothing to leak — if you've got a maintenance team that's not great with hydraulics, that matters. But hydraulic clamps are faster, give you uniform clamping force, and you can wire them into the press safety circuit. For your situation — three shifts, two changeovers per shift — I'd push you toward hydraulic. The time savings pay for it inside a year.",
        target_phrases: ["have their place", "nothing to leak", "uniform clamping force", "pay for it inside a year"]
      },
      block3_persona: {
        scenario: "Customer is on mechanical, considering hydraulic",
        persona_name: "Karen Vasquez",
        persona_role: "Operations Manager, US contract injection molder",
        persona_personality: "Sharp, asks 'why should I change what's already working?' Tests if you'll admit your system isn't right for every case.",
        opening_line: "We've been on mechanical clamps for fifteen years. They work. Tell me why I should rip them out and put hydraulic in.",
        your_goal: "Be honest. Don't oversell. Ask about her mold count and changeover frequency. If she runs only one mold a week, hydraulic is overkill. Only recommend hydraulic if her numbers justify it."
      }
    },

    // ---------- DAY 10 ----------
    {
      day: 10,
      theme: "Doctor's office + Safety circuit",
      block1_shadow: {
        title: "Going to a US walk-in clinic for a sore throat",
        difficulty: "easy",
        accent: "en-US",
        lines: [
          { en: "Hi, I don't have an appointment. Are you taking walk-ins right now?", zh: "你好，我没预约。现在还接待 walk-in 吗？" },
          { en: "Yes, fill out this form. Do you have insurance?", zh: "可以，先填一下这个表。你有保险吗？" },
          { en: "I'm from China — my work travel insurance. But I'd prefer to just pay cash and get a receipt.", zh: "我是中国来的 — 我有公司出差保险。但我想直接付现金，开个收据。" },
          { en: "That's fine. Cash visit is one-twenty for a regular consult.", zh: "没问题。现金看诊一百二十块，普通问诊。" },
          { en: "Okay. Can I get an itemized receipt for my company reimbursement?", zh: "好。能开个明细收据让我报销吗？" },
          { en: "Sure. The doctor will see you in about fifteen minutes.", zh: "可以。医生大概十五分钟后给你看。" },
          { en: "Thanks. One more question — do you have any over-the-counter recommendation for the wait?", zh: "谢谢。还有一个问题 — 等的时候有什么非处方药推荐吗？" },
          { en: "Just water and rest. Doctor will tell you what to take.", zh: "喝水休息。医生会告诉你吃什么。" }
        ],
        key_phrases: ["taking walk-ins", "pay cash", "itemized receipt", "over-the-counter"]
      },
      block2_dictation: {
        title: "Safety circuit, explained simply",
        accent: "en-US",
        text: "The safety circuit is wired into your press controls. Here's the logic: the clamps cannot release while the press is closed. If pressure in the clamping line drops below a threshold, the system blocks the press cycle and throws an alarm. It's redundant — two pressure switches, two relays. CE certified, and we can send you the safety dossier with the PL d rating before you order.",
        target_phrases: ["wired into", "below a threshold", "throws an alarm", "before you order"]
      },
      block3_persona: {
        scenario: "Customer's safety engineer reviewing your system",
        persona_name: "Erik Mueller",
        persona_role: "Safety Engineer at a German-owned US plant",
        persona_personality: "Methodical, German engineering mindset, asks for documents not opinions. Will not move on until he gets a specific standard or document name.",
        opening_line: "I need to understand your safety architecture. Specifically: what standard does the interlock comply with, what's the PL rating, and where is the documentation?",
        your_goal: "Speak engineer-to-engineer. Use specific standards (EN ISO 13849, PL d). If you don't know an answer, say you'll get it from the engineering team and follow up — don't make stuff up."
      }
    },

    // ---------- DAY 11 ----------
    {
      day: 11,
      theme: "Banking issue + Payment terms",
      block1_shadow: {
        title: "Credit card declined, calling for help",
        difficulty: "medium",
        accent: "en-US",
        lines: [
          { en: "Sorry, the card came back declined. Want to try a different one?", zh: "抱歉，这张卡刷不过。要换一张试试吗？" },
          { en: "That's strange — let me check my phone. The bank app says my card's fine.", zh: "奇怪 — 我看下手机。银行 app 显示卡是好的。" },
          { en: "Probably an international fraud lock. Happens all the time with overseas cards.", zh: "估计是国际反欺诈锁了。海外卡经常这样。" },
          { en: "Right, that makes sense. Give me one minute to call them and unlock it.", zh: "对，能理解。给我一分钟我打电话解锁。" },
          { en: "No rush. I'll hold the table for you.", zh: "不急。我先帮你留着账单。" },
          { en: "Hi, this is Wang Lei, calling about my card ending in 4421. I'm in the US and a charge just got declined.", zh: "你好，我是 Wang Lei，关于尾号 4421 的卡。我在美国，刚刚一笔消费被拒了。" },
          { en: "Yes, please confirm the location and amount, I'll release the lock now.", zh: "好的，请确认一下地点和金额，我马上解除冻结。" },
          { en: "Okay try it again now. Sorry for the wait.", zh: "好了再刷一次。让你久等了。" }
        ],
        key_phrases: ["came back declined", "fraud lock", "no rush", "release the lock"]
      },
      block2_dictation: {
        title: "Discussing payment terms",
        accent: "en-US",
        text: "Our standard terms are 30 percent T/T deposit on PO, 70 percent before shipment. For first-time orders above 50K, we also accept letter of credit at sight. After the second order, with credit approval, we can look at Net 30 from B/L date. We don't do Net 60 on a first deal — I want to be upfront about that.",
        target_phrases: ["T/T deposit", "letter of credit at sight", "Net 30 from B/L date", "upfront about that"]
      },
      block3_persona: {
        scenario: "Customer wants Net 60 payment terms on first order",
        persona_name: "Bill Hammond",
        persona_role: "CFO at a US Tier-2 supplier",
        persona_personality: "Pure finance mindset, doesn't care about your product, only about cash flow and risk. Will quote his standard supplier terms.",
        opening_line: "Our standard terms with suppliers are Net 60 from delivery. I assume that won't be a problem.",
        your_goal: "Hold the line politely. Explain why a first order needs different terms. Offer a compromise (30/70, or L/C). Don't agree to Net 60 from delivery on a first order."
      }
    },

    // ---------- DAY 12 ----------
    {
      day: 12,
      theme: "Asking directions + Talking about Ningbo",
      block1_shadow: {
        title: "Lost downtown, asking a stranger",
        difficulty: "easy",
        accent: "en-US",
        lines: [
          { en: "Excuse me, sorry to bother you — do you know where Carmine's Restaurant is?", zh: "不好意思打扰下 — 你知道 Carmine's 餐厅在哪吗？" },
          { en: "Carmine's? Yeah, you're close. Two blocks that way, past the Starbucks, then take a left at the light.", zh: "Carmine's？挺近的。往那边走两个街区，过了 Starbucks，到路灯左转。" },
          { en: "Past the Starbucks, left at the light. Got it. Thanks so much.", zh: "过 Starbucks，路灯左转。明白了。多谢。" },
          { en: "No problem. You'll see the red awning, can't miss it.", zh: "不客气。会看到红色的雨棚，错不了。" },
          { en: "Perfect. Have a good night.", zh: "好。晚上愉快。" }
        ],
        key_phrases: ["sorry to bother you", "two blocks that way", "can't miss it", "have a good night"]
      },
      block2_dictation: {
        title: "Talking about Kinghou's location",
        accent: "en-US",
        text: "Our factory is in Ningbo — that's about two hours south of Shanghai by high-speed train, on the coast. The Ningbo port is fifteen minutes from us, which makes export pretty smooth. We've been there since 2018, six thousand square meters, about 80 people on the floor. Customer visits are welcome anytime. If you fly into Shanghai Pudong, we can pick you up — it's a two-hour drive but we make the trip a couple times a month.",
        target_phrases: ["high-speed train", "makes export pretty smooth", "on the floor", "make the trip"]
      },
      block3_persona: {
        scenario: "Customer is hesitant because you're in China",
        persona_name: "Greg Sullivan",
        persona_role: "President of a US family-owned stamping company",
        persona_personality: "Burned by a Chinese supplier 5 years ago (quality issue, no response after sale). Skeptical but willing to be convinced. Mentions the bad experience in the first 2 minutes.",
        opening_line: "Look, I'll be straight with you. Last time we bought from China, the clamps failed in eight months and nobody answered our emails. Why should this time be different?",
        your_goal: "Don't dismiss his experience. Acknowledge it's a real risk. Give 3 specific things that make Kinghou different (response time guarantee, customer references he can call, what happens if a unit fails). Offer a reference call before he signs anything."
      }
    },

    // ---------- DAY 13 ----------
    {
      day: 13,
      theme: "Coffee shop + Die change cart details",
      block1_shadow: {
        title: "Ordering at Starbucks for two",
        difficulty: "easy",
        accent: "en-US",
        lines: [
          { en: "Hi, can I get a grande Americano with room, and... one second, let me text my colleague.", zh: "你好，要一杯大杯美式留位，然后... 等下我问下同事。" },
          { en: "Take your time, no problem.", zh: "不急，没事。" },
          { en: "Hey Mark, what do you want? Coffee? Tea?", zh: "嗨 Mark，你要什么？咖啡？茶？" },
          { en: "Sorry — and a grande latte, oat milk, extra hot.", zh: "好了 — 再加一杯大杯拿铁，燕麦奶，多热。" },
          { en: "Anything else? A pastry?", zh: "还要别的吗？糕点？" },
          { en: "Yeah, two of the blueberry scones, please. That's it.", zh: "好，两个蓝莓司康，就这些。" },
          { en: "Eighteen forty-two. Tap or insert?", zh: "十八块四毛二。刷卡还是插卡？" },
          { en: "Tap. Thanks.", zh: "刷卡。谢谢。" }
        ],
        key_phrases: ["with room", "take your time", "extra hot", "tap or insert"]
      },
      block2_dictation: {
        title: "How the die change cart actually works",
        accent: "en-US",
        text: "The cart sits next to your press at floor level, with the new die already locked on it. When you finish the run, the operator hits the release on the clamps, the cart rolls under the platen on hardened rails, picks up the old die, slides it out, then brings the new die in — all in about three minutes. No forklift, no slings, no two guys wrestling a die at chest height.",
        target_phrases: ["at floor level", "hardened rails", "slings", "wrestling a die"]
      },
      block3_persona: {
        scenario: "Customer asks deep questions during a virtual plant tour",
        persona_name: "Susan Chen",
        persona_role: "Supplier Quality Engineer at a US Tier-1 auto supplier",
        persona_personality: "Chinese-American, will switch between English and Mandarin if you do, but keeps the meeting in English for her colleagues. Asks PPAP and IATF 16949 questions.",
        opening_line: "Hi Wang, I have three things I need to verify on this virtual tour: your traceability system, your weld test procedure on the cart frames, and whether you can support PPAP submissions. Where do we start?",
        your_goal: "Stay in English (her colleagues are listening). Show you understand auto industry quality requirements. Be specific about what you can and can't do — don't claim PPAP capability if you don't have it."
      }
    },

    // ---------- DAY 14 ----------
    {
      day: 14,
      theme: "Weekend small talk + WEEK 2 CAPSTONE",
      block1_shadow: {
        title: "Friday afternoon small talk",
        difficulty: "easy",
        accent: "en-US",
        lines: [
          { en: "Alright, that's a wrap for today. Any big plans this weekend?", zh: "好，今天就到这吧。周末有什么安排？" },
          { en: "Honestly? Sleep. The jet lag's been killing me.", zh: "说实话？睡觉。时差快把我搞死了。" },
          { en: "I bet. You should try to catch a baseball game though — Tigers are home Saturday.", zh: "可以理解。不过你应该去看场棒球 — 老虎队周六主场。" },
          { en: "Oh yeah? I've never been to a real American game. Where do I get tickets?", zh: "是吗？我没看过现场美国比赛。哪里买票？" },
          { en: "Just on the app — StubHub or the Tigers' own site. Outfield seats are pretty cheap.", zh: "用 app 就行 — StubHub 或者老虎队自己的网站。外场座位挺便宜。" },
          { en: "Cool, I'll check it out. What about you?", zh: "好，我看看。你呢？" },
          { en: "Kid's got soccer Saturday morning, then probably mowing the lawn. The exciting life of a forty-year-old.", zh: "孩子周六上午踢足球，然后大概去剪草坪。四十岁的精彩生活。" },
          { en: "Ha, sounds great actually. Have a good one — I'll see you Monday.", zh: "哈，听起来其实挺好。周末愉快 — 周一见。" }
        ],
        key_phrases: ["that's a wrap", "killing me", "check it out", "have a good one"]
      },
      block2_dictation: {
        title: "Week 2 capstone — 90 second elevator pitch",
        accent: "en-US",
        text: "Quick intro — I'm Wang Lei with Kinghou. We make combined quick change systems for stamping and injection presses, 600 to 2500 ton class. The system is two pieces: hydraulic clamps that replace your manual T-bolts, plus a die change cart that rolls the next die into position. Together, a forty-minute changeover drops to under ten. Lead time is six to eight weeks, payback is usually six to twelve months. Do you have ten minutes Thursday for a deeper conversation?",
        target_phrases: ["600 to 2500 ton class", "T-bolts", "drops to under ten", "Do you have ten minutes Thursday"]
      },
      block3_persona: {
        scenario: "WEEK 2 CAPSTONE: Trade show booth, walk-in visitor",
        persona_name: "Random trade show attendee (varies)",
        persona_role: "Could be a buyer, engineer, competitor, or curious passer-by — find out which",
        persona_personality: "Plays it close to the chest at first. You have 30 seconds to qualify them and decide how much time to invest.",
        opening_line: "Hi. What do you guys do?",
        your_goal: "Give a 20-second pitch (use what you practiced in Block 2). Then ask 2 questions to figure out who they are. Adjust your follow-up based on their answers. End with either an exchange of business cards or a polite 'thanks for stopping by'."
      }
    },

    // ===== WEEK 3-4: scenario skeletons (AI fills on first open, then caches forever) =====

    // ---------- DAY 15 ----------
    {
      day: 15,
      theme: "Email writing + Quotation cover note",
      block1_shadow: {
        title: "Reading aloud a professional email",
        difficulty: "medium",
        accent: "en-US",
        ai_expand: true,
        seed: "An 8-sentence professional email from Wang to Mark Reilly following up after their first call. Confirms the call summary, mentions Kinghou's combined system (hydraulic clamps + die change cart) for stamping, attaches a proposal, suggests next steps, asks for feedback by a specific date. Sign-off is warm but professional. Natural spoken-reading style."
      },
      block2_dictation: {
        title: "Quotation cover note dictation",
        accent: "en-US",
        ai_expand: true,
        seed: "A 5-sentence quotation cover paragraph: thanks for the inquiry, summary of what's quoted (combined system for a specific tonnage, e.g. 1000-ton stamping press, with both hydraulic clamps and die change cart), validity (30 days), one key assumption (e.g. US 480V power, T-slot platen), one offer of a follow-up call. Natural spoken American English."
      },
      block3_persona: {
        scenario: "Customer hasn't replied to your quotation in 10 days",
        persona_name: "Rob Klein",
        persona_role: "Engineering Manager who originally asked you for the quote",
        persona_personality: "Replies are short, has gone quiet because his project got delayed internally. Will be honest if you ask the right way.",
        opening_line: "Hey Wang, sorry for the slow reply — been buried.",
        your_goal: "Don't open with pressure. Ask one question to find out what's really going on. Offer to hold the quote price for another 30 days if the timing is the issue."
      }
    },

    // ---------- DAY 16 ----------
    {
      day: 16,
      theme: "Video call + Die loading procedure",
      block1_shadow: {
        title: "Starting a Teams/Zoom call",
        difficulty: "easy",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang opening a video call with 3 customers, two of whom he hasn't met. Camera issues at the start ('can you hear me?', 'I think you're muted'). Brief intros, agenda check (review proposal, technical Q&A, next steps), then he hands over to a colleague. 8 lines of natural American English."
      },
      block2_dictation: {
        title: "Walking a customer through die loading on your system",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang describes die loading in 6 short steps in spoken American English: position the cart at the press, align the cart rails with the bolster rails, push the die over, lower it onto the bolster, hit the hydraulic clamp button, verify both green indicators (clamps engaged + safety circuit closed). Keep it conversational, like he's walking a customer's operator through it on the phone."
      },
      block3_persona: {
        scenario: "Customer's press operator is on a video call learning the procedure",
        persona_name: "Marcus Wright",
        persona_role: "Press operator, 20 years experience, US stamping shop",
        persona_personality: "Old-school, doesn't trust 'new tech', expects to be respected for his experience. Will ask 'what happens if it fails?'.",
        opening_line: "Alright son, walk me through this. And speak slow — I've been doing this since before you were born.",
        your_goal: "Show respect to his experience. Don't talk down. When he asks 'what if it fails?', answer with the actual failure mode and recovery (don't say 'it can't fail')."
      }
    },

    // ---------- DAY 17 ----------
    {
      day: 17,
      theme: "Restaurant pushback + Hydraulic system pressure",
      block1_shadow: {
        title: "Sending back a wrong order at a restaurant",
        difficulty: "medium",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang ordered a burger medium, comes well-done. Polite but firm send-back. Server apologetic, offers a remake. Wang accepts, asks if it'll take long. 6 lines, no scene, professional Western dining etiquette."
      },
      block2_dictation: {
        title: "Working hydraulic pressure and why it matters",
        accent: "en-US",
        ai_expand: true,
        seed: "5 sentences explaining: standard operating pressure for our clamps is 250 bar (about 3600 psi), holding force per clamp ranges from 8 to 16 tons depending on model, the press needs a 20 liter per minute hydraulic supply or we provide a stand-alone power pack, lower pressure means slower clamping but less wear on seals, we ship with a pressure test report from the factory. Natural spoken American English."
      },
      block3_persona: {
        scenario: "Customer asks technical questions about clamping force",
        persona_name: "Dr. Karl Berger",
        persona_role: "R&D engineer at a US specialty molding shop",
        persona_personality: "Academic, asks precise questions about clamp force distribution, peak pressure spikes, fatigue life of cylinder seals.",
        opening_line: "I'm concerned about clamp force distribution across a large mold base — say 1200 by 1000 mm. With four clamps, how do I avoid uneven loading on the die parting line?",
        your_goal: "Speak his language. If you know the answer, give it with specifics. If you don't, say 'I'll get our chief engineer on a call with you' — don't bullshit. Suggest 6 clamps instead of 4 for that size, mention the load distribution data we can send."
      }
    },

    // ---------- DAY 18 ----------
    {
      day: 18,
      theme: "Phone troubles + Troubleshooting remotely",
      block1_shadow: {
        title: "Bad phone connection",
        difficulty: "easy",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang on a phone call with poor reception. Has to ask the customer to repeat twice, eventually suggests switching to WhatsApp or calling back from a landline. 7 lines, polite frustration handled gracefully."
      },
      block2_dictation: {
        title: "Remote troubleshooting steps",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang walks a customer's technician through 5 troubleshooting steps over the phone for a clamp that won't release: check the main hydraulic pressure on the gauge, check that the safety circuit is closed (green light on the panel), manually retract the clamp using the override key, check for visible oil leak at the cylinder, and read any error code on the HMI display."
      },
      block3_persona: {
        scenario: "After-hours call, customer's clamps won't release, press is stuck",
        persona_name: "Mike Donovan",
        persona_role: "Night-shift maintenance lead, US plant",
        persona_personality: "Stressed, talking fast, his press has been down 90 minutes, his manager is breathing down his neck. Will get more frustrated if you ask too many questions before giving any answer.",
        opening_line: "Wang, I got the clamps locked, error code is 'E-407', I tried the override key, nothing's moving. What do I do?",
        your_goal: "Don't say 'let me check the manual'. Take charge. Ask 1-2 key questions to confirm the symptom, then give a clear step-by-step. Stay on the line with him until it's solved or escalated."
      }
    },

    // ---------- DAY 19 ----------
    {
      day: 19,
      theme: "Sports small talk + Shut height and platen size",
      block1_shadow: {
        title: "NFL/baseball small talk with a customer",
        difficulty: "easy",
        accent: "en-US",
        ai_expand: true,
        seed: "Customer mentions his team won last night (Lions, Tigers, whichever). Wang doesn't follow American sports but is friendly about it. Honest — admits he doesn't follow football much but asks who they played and if it was a good game. 6 lines, natural exchange."
      },
      block2_dictation: {
        title: "Shut height and platen size — explaining together",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang explains in 5 sentences how shut height and platen size together define what die or mold fits a press, and how our system has to match both. Includes one example: a 1000-ton press with 1200x1200 platen and 600mm shut height — what our combined system looks like for that. Natural spoken style."
      },
      block3_persona: {
        scenario: "Customer trying to retrofit your system on an older press",
        persona_name: "Pete Larsen",
        persona_role: "Plant Manager at an older US stamping plant",
        persona_personality: "Has a 1990s press he loves, wants to retrofit it. Will push back if you say his press is too old.",
        opening_line: "I've got a Bliss 800-ton from '94. Can your system fit it or not?",
        your_goal: "Ask the right specs (shut height, platen dimensions, T-slot pattern, hydraulic power availability). Be honest if retrofit is risky on an old press. Offer to look at photos of the platen before committing."
      }
    },

    // ---------- DAY 20 ----------
    {
      day: 20,
      theme: "Disagreement + Defending a design choice",
      block1_shadow: {
        title: "Polite professional disagreement",
        difficulty: "medium",
        accent: "en-US",
        ai_expand: true,
        seed: "Customer suggests a design change Wang doesn't agree with (e.g. using fewer clamps to save cost). Wang disagrees politely but firmly — uses 'I see where you're coming from, but here's my concern' framing. 7 lines, no conflict, mature engineering conversation."
      },
      block2_dictation: {
        title: "Why we use 4 clamps minimum for large dies",
        accent: "en-US",
        ai_expand: true,
        seed: "5 sentences: 4-clamp minimum on large dies (over 800kg) isn't an upsell — it's a safety call; with only 2 clamps, the holding force can be exceeded during forming if the die isn't centered; we've seen one customer try it with 2 and bend the bolster; the cost difference is small relative to a press repair; we'll always quote 4 even if you push back, but you can override us in writing if you really want."
      },
      block3_persona: {
        scenario: "Customer's engineer disagrees with your design and is pushing you to change it",
        persona_name: "Tony Marciano",
        persona_role: "Senior Engineer at a US press maker (your customer's customer)",
        persona_personality: "Italian-American, opinionated, very confident in his own designs, will not give up easily. Respects people who push back well.",
        opening_line: "Wang, listen, you're using four clamps where two would do. We've done it with two for years on similar presses. Trust me on this — I've been designing presses for thirty years.",
        your_goal: "Don't immediately agree. Don't immediately disagree. Ask why he thinks two is enough for HIS specific case. If his reasoning is wrong (or his presses are different from this customer's), push back with data. If his reasoning is right, admit it and discuss a custom design."
      }
    },

    // ---------- DAY 21 ----------
    {
      day: 21,
      theme: "Asking for help + WEEK 3 CAPSTONE: ROI presentation",
      block1_shadow: {
        title: "Asking a colleague for help in English",
        difficulty: "medium",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang asks his US-based after-sales partner for help with a customer issue. Briefs him on the situation in 5 lines, asks for help (specifically: can the partner do a site visit this week), agrees on next step. Natural professional English, slight time pressure."
      },
      block2_dictation: {
        title: "Full ROI walkthrough",
        accent: "en-US",
        ai_expand: true,
        seed: "One 6-sentence paragraph: assume 4 die changes per shift, current changeover 40 min, our system reduces to 8 min, that's 32 min × 4 = 128 min recovered per shift, × $1500/hour press rate = $3,200/shift saved, system pays back in roughly 5-7 months for a 2-shift operation. End with 'these are your numbers — does my math check out?'."
      },
      block3_persona: {
        scenario: "WEEK 3 CAPSTONE: Tough customer, technical + commercial mixed call",
        persona_name: "Linda Park (returning)",
        persona_role: "VP of Manufacturing (the customer from Day 3)",
        persona_personality: "Now she's pushing for a final answer. Mix of technical doubts and commercial pressure.",
        opening_line: "Wang, I've had two weeks to think about your proposal. I have three concerns: one technical, one commercial, and one about your support after install. Let's go through them.",
        your_goal: "Stay calm under multi-front pressure. Address all three concerns concretely. Get a clear next step before the call ends."
      }
    },

    // ---------- DAY 22 ----------
    {
      day: 22,
      theme: "Visa delay + Installation scheduling",
      block1_shadow: {
        title: "Telling a customer your trip is postponed",
        difficulty: "medium",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang's US visa interview got delayed by 3 weeks. He calls the customer to explain the trip is postponed, suggests a video walkthrough as a stopgap, asks if it works. 6 lines, honest and professional, doesn't make excuses."
      },
      block2_dictation: {
        title: "Scheduling on-site installation",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang and customer scheduling installation in 5 sentences: agree on a target week, list what the customer needs to prepare beforehand (concrete pad clear of debris, 480V power drop near the press, hydraulic supply if not stand-alone, overhead crane access, lifting eyes on the bolster), confirm Wang's engineer's flight, and confirm on-site duration (3 days for install + commissioning)."
      },
      block3_persona: {
        scenario: "Customer wants installation done before their plant shutdown",
        persona_name: "Janet Ross",
        persona_role: "Plant Engineer, US Tier-2 supplier",
        persona_personality: "Plant shuts down for 2 weeks in July. She wants installation done in that window or it has to wait until December. Very specific date requirements.",
        opening_line: "We shut down July 8 to July 22. I need your guys in and done in that window. Yes or no?",
        your_goal: "Don't say yes without checking. Walk through what's needed for that timeline (flights, visas for your engineer, prep work on her side). Give an honest commitment."
      }
    },

    // ---------- DAY 23 ----------
    {
      day: 23,
      theme: "Canceling + Commissioning and FAT",
      block1_shadow: {
        title: "Canceling a meeting last minute",
        difficulty: "medium",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang has to cancel a customer meeting same-day due to a family emergency back home. Calls instead of emails. Apologizes once, doesn't over-explain, suggests two specific reschedule dates. 5 lines, professional."
      },
      block2_dictation: {
        title: "Commissioning checklist explained",
        accent: "en-US",
        ai_expand: true,
        seed: "6 sentences walking through commissioning steps: visual inspection of all clamps and hoses, pressure test at 1.5x rated pressure, electrical continuity on the safety circuit, manual clamp/unclamp cycle test, automatic mode with a test die (10 cycles), and final FAT sign-off with the customer's engineer signature."
      },
      block3_persona: {
        scenario: "Customer's engineer is signing off on the FAT and has last-minute concerns",
        persona_name: "Brian Sutton",
        persona_role: "Reliability Engineer, US auto plant",
        persona_personality: "Will not sign without checking everything. Polite but slow. Will request one or two extra tests beyond the agreed FAT.",
        opening_line: "Looks good so far. Before I sign, can we do two more tests? I want to see emergency stop response and a cold start with cold hydraulic oil.",
        your_goal: "Decide if his requests are reasonable (they are). Agree professionally without grumbling. If you can do it on the spot, do it. If you need extra time, negotiate."
      }
    },

    // ---------- DAY 24 ----------
    {
      day: 24,
      theme: "Networking event + Warranty discussion",
      block1_shadow: {
        title: "Working a trade show evening reception",
        difficulty: "medium",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang at a trade show evening reception (e.g. NPE or IMTS). Approaches a small group, joins the conversation politely, introduces himself, exchanges cards with one person who seems interested, exits gracefully when the group moves on. 8 lines, natural networking flow."
      },
      block2_dictation: {
        title: "Warranty terms in plain English",
        accent: "en-US",
        ai_expand: true,
        seed: "5 sentences: standard 18-month warranty from shipment or 12 months from commissioning whichever is earlier; covers manufacturing defects on clamps, cart, and control system; does not cover hydraulic seal wear from contaminated oil; extended 36-month available for 8% of order value; warranty service is parts free shipped via DHL Express + we cover labor up to 8 hours for the first year."
      },
      block3_persona: {
        scenario: "Customer wants warranty extended for free as a deal-closer",
        persona_name: "Frank Morgan (returning from Day 6)",
        persona_role: "Purchasing Director",
        persona_personality: "Same aggressive negotiator. Now using warranty as the lever instead of price.",
        opening_line: "Wang, I'll sign today if you give me 36 months warranty included at no extra cost. Yes or no.",
        your_goal: "Don't cave. Explain the cost of extended warranty isn't zero. Counter-offer (24 months at half price, or 36 months in exchange for a 2nd unit purchase commitment). Be willing to walk away if the deal isn't real."
      }
    },

    // ---------- DAY 25 ----------
    {
      day: 25,
      theme: "Saying goodbye + Spare parts kit",
      block1_shadow: {
        title: "Saying goodbye at the end of a long trip",
        difficulty: "medium",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang's last day at the customer's plant, end of a 5-day visit. Thanks the team, mentions specific things he appreciated (the welcome, the dinner, the engineer who helped him most), exchanges contact info, says he'll send pictures from his next trade show. 7 warm lines, professional but human."
      },
      block2_dictation: {
        title: "Recommending the spare parts kit",
        accent: "en-US",
        ai_expand: true,
        seed: "5 sentences: standard spare parts kit includes 2 sets of cylinder seals, 1 spare proximity sensor for each clamp, 2 sets of hoses, fuses, and 1 spare HMI screen; price is 8% of system value; covers the most common failure modes for 5 years of operation; we recommend it especially for plants without easy access to our service network in the US; can be added to the original order at no extra shipping cost."
      },
      block3_persona: {
        scenario: "Customer pushing back on the cost of the spare parts kit",
        persona_name: "Ron Bradley",
        persona_role: "Maintenance Manager, US small stamping plant",
        persona_personality: "Sees spare parts kits as upsells, wary of being sold on. Will say 'we'll order parts when we need them'.",
        opening_line: "Wang, this spare parts package — eight percent? Seems steep. We can just order what we need if something breaks.",
        your_goal: "Don't oversell. Be honest: if his plant is near a major city and uses common parts, he might not need the full kit. If he's remote or runs 24/7, the kit pays for itself one breakdown in. Help him decide based on his situation, not yours."
      }
    },

    // ---------- DAY 26 ----------
    {
      day: 26,
      theme: "Conference Q&A + Hostile question",
      block1_shadow: {
        title: "Standing up to ask a question at a conference",
        difficulty: "medium-hard",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang at an industry conference, walks to the mic, introduces himself, asks the panelist a sharp but respectful question about consolidation in the QMC/QDC industry. 5 lines (intro + question + thanks). Confident but not arrogant."
      },
      block2_dictation: {
        title: "Answering a hostile question with grace",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang answers a hostile audience question that implies Chinese suppliers can't be trusted on safety. 5 sentences. Doesn't get defensive. Acknowledges the concern is real, points to specific things Kinghou does differently (CE certification, German safety standard PL d, customers in Germany and Italy), invites the questioner to visit, ends with a small joke that breaks the tension."
      },
      block3_persona: {
        scenario: "You're presenting at an industry event, Q&A turns hostile",
        persona_name: "Anonymous audience member",
        persona_role: "Possibly a competitor's employee, possibly just a skeptic",
        persona_personality: "Tries to embarrass you in front of the room. Asks loaded questions like 'how do we know your safety claims aren't fabricated?' or 'isn't your design just copied from European OEMs?'",
        opening_line: "I have a comment first, then a question. Your design looks remarkably similar to a well-known European supplier's. Can you explain that?",
        your_goal: "Stay calm. Don't sound defensive. Answer factually. If the question has a wrong premise, correct it politely. Don't attack the questioner. The whole room is watching."
      }
    },

    // ---------- DAY 27 ----------
    {
      day: 27,
      theme: "Asking for feedback + Improving on a lost deal",
      block1_shadow: {
        title: "Asking a customer who chose a competitor for honest feedback",
        difficulty: "medium-hard",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang lost a deal. Calls the customer to ask for honest feedback (not to argue). Sets the tone first ('I'm not calling to change your mind'). Asks 2 specific questions (what made the difference, what could we have done better). Thanks them. 7 lines. Mature handling of a loss."
      },
      block2_dictation: {
        title: "Following up 6 months after losing a deal",
        accent: "en-US",
        ai_expand: true,
        seed: "5 sentences: light, no-pressure follow-up email read aloud — 'just checking in', not 'are you ready to switch'. Mentions one industry update he might find useful, offers a 15-min coffee/call if he's ever in the area, signs off without an ask."
      },
      block3_persona: {
        scenario: "You lost a deal to a competitor 8 months ago, calling for a check-in",
        persona_name: "Mark Reilly (returning from Day 1)",
        persona_role: "Plant Engineering Manager",
        persona_personality: "Polite but distant. The competitor's system is working okay, not great. He's open to a chat but won't lead the conversation.",
        opening_line: "Wang, good to hear from you. Yeah, the other system is in. Running it now. ...What's on your mind?",
        your_goal: "Don't pitch. Listen for problems. Ask open questions about how the install went and what they'd do differently. Plant a seed for future business without being pushy. End the call without asking for anything."
      }
    },

    // ---------- DAY 28 ----------
    {
      day: 28,
      theme: "Owning a mistake + Telling a customer no",
      block1_shadow: {
        title: "Owning up to a mistake you personally made",
        difficulty: "medium-hard",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang made a mistake — quoted the wrong clamp size on a $180k order and the customer signed. Calls the customer to admit it before the customer notices. Doesn't make excuses. Offers a solution (honor the price, or upgrade to the correct size with a partial discount). 8 lines, ownership without grovelling."
      },
      block2_dictation: {
        title: "Telling a customer their spec is wrong",
        accent: "en-US",
        ai_expand: true,
        seed: "5 sentences: customer asked for 2 clamps on a die that really needs 4. Wang explains his concern in plain language, says he'd rather lose the sale than ship something he knows will fail in service, suggests the right configuration. Direct, not preachy."
      },
      block3_persona: {
        scenario: "You have to tell a customer their order needs to be changed",
        persona_name: "Cheryl Adams",
        persona_role: "Project Manager, US plant",
        persona_personality: "Already stressed, her project is behind schedule. Will be frustrated to hear there's a problem on the supplier side too.",
        opening_line: "Hi Wang, what's up? Hopefully nothing bad — I don't have time for bad news today.",
        your_goal: "Don't soften so much it's unclear. Be direct, own the issue, present the solution in the same breath. Stay calm if she gets upset."
      }
    },

    // ---------- DAY 29 ----------
    {
      day: 29,
      theme: "Year-end check-in + Future planning",
      block1_shadow: {
        title: "Year-end check-in call with a long-term customer",
        difficulty: "medium",
        accent: "en-US",
        ai_expand: true,
        seed: "December call, warm, reviewing the year together. What worked with their installed system, what didn't, what they're planning next year (new presses, expansion). Wang doesn't pitch, just listens and notes. 8 lines."
      },
      block2_dictation: {
        title: "Talking about Kinghou's roadmap",
        accent: "en-US",
        ai_expand: true,
        seed: "5 sentences: Wang shares Kinghou's plans for next year — new product line for larger presses (up to 2500 ton), expanded US service network (a partner in Mexico City and one in Ohio), pricing held flat despite raw material inflation, ISO 9001 recert in March, and IMTS booth in September if any customers want to meet there."
      },
      block3_persona: {
        scenario: "Long-term customer wants to know what's coming next from your company",
        persona_name: "Robert 'Bob' Chen",
        persona_role: "Owner of a US contract stamping shop, longtime Kinghou customer",
        persona_personality: "Friendly, treats Wang like a friend at this point. Asks personal questions and business questions in the same breath. Will give blunt feedback if asked.",
        opening_line: "Wang! Good to hear from ya. How's the family? — and what's Kinghou cooking up for next year? I'm planning my capex.",
        your_goal: "Friendly but professional. Share genuine roadmap info (without overpromising). Ask what HE'S planning so you can position relevantly. End by suggesting a call in January with specifics."
      }
    },

    // ---------- DAY 30 ----------
    {
      day: 30,
      theme: "GRADUATION: Full-day simulation",
      block1_shadow: {
        title: "30-day capstone: A full day in Wang's English-speaking life",
        difficulty: "hard",
        accent: "en-US",
        ai_expand: true,
        seed: "A 12-line montage of one full day in Wang's life on a US business trip: morning coffee order, Uber to plant, greeting customer, plant tour answer to a tough technical question about clamping force, lunch small talk, afternoon negotiation moment about payment terms, evening dinner with a different customer, goodbye and back to hotel. Each line a different moment, different register. American English throughout."
      },
      block2_dictation: {
        title: "30-day capstone dictation: The full pitch",
        accent: "en-US",
        ai_expand: true,
        seed: "A polished 6-sentence pitch Wang would give to a top-tier US Tier-1 supplier on day 30 — bringing together company intro, combined system technical differentiation (hydraulic clamps + die change cart for both stamping and injection), commercial terms, support network, and a clear next step. The kind of pitch he couldn't have made on day 1."
      },
      block3_persona: {
        scenario: "GRADUATION: A customer combines all 30 days' challenges",
        persona_name: "Eleanor Whitfield",
        persona_role: "Chief Procurement Officer at a Fortune 500 US auto parts supplier",
        persona_personality: "Sharp, time-pressured, technically literate, has seen every sales pitch. Will hit you with technical, commercial, support, and timeline questions in one 30-minute call. Asks one personal question to gauge if she likes you.",
        opening_line: "Wang, I've got thirty minutes. I've read your proposal. I have concerns in five areas. Let's go.",
        your_goal: "Use everything you've learned. Stay calm. Be specific. Show you've thought about her business. End the call with a clear, mutual next step — not a vague 'I'll follow up'."
      }
    }
  ]
};

if (typeof window !== 'undefined') {
  window.CURRICULUM = CURRICULUM;
}
