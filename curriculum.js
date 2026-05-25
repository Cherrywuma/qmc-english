// =====================================================================
// 30-Day Spoken English Curriculum for QMC (Quick Mold Change) Business
// Target: Chinese CET-6 speaker, US/EU customers, mold/die changing systems
// Structure per day:
//   block1_shadow:    shadowing material (life or business)
//   block2_dictation: dictation material (often pro)
//   block3_persona:   AI roleplay persona + opening line
// =====================================================================

const CURRICULUM = {
  meta: {
    total_days: 30,
    daily_minutes: 60,
    blocks_per_day: 3
  },

  // ===== WEEK 1: Foundations (全手写精品) =====
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
        text: "Hi Mark, this is Wang Lei from Kinghou. We met briefly at the IMTS show in Chicago last September. You mentioned your team was looking at upgrading the mold change process on your 800-ton press. I'd like to send over a short proposal this week. Would Thursday work for a quick call?",
        target_phrases: ["briefly", "mold change process", "send over", "Would Thursday work"]
      },
      block3_persona: {
        scenario: "First introduction call with a potential US customer",
        persona_name: "Mark Reilly",
        persona_role: "Plant Engineering Manager at a Tier-2 auto supplier in Michigan",
        persona_personality: "Polite, busy, skeptical of Chinese suppliers, wants to get to the point fast. American English, slight Midwest accent in writing.",
        opening_line: "Hey, Mark Reilly speaking. I got about ten minutes before my next meeting — what've you got for me?",
        your_goal: "Introduce yourself and Kinghou in under 60 seconds, ask one good qualifying question, get permission to send a 1-page proposal."
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
        your_goal: "Make 3-5 minutes of natural small talk. Answer his flight question, ask one back, find one common topic (weather/sports/food)."
      }
    },

    // ---------- DAY 3 ----------
    {
      day: 3,
      theme: "Restaurant + Steel mold terminology basics",
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
        title: "Explaining what your magnetic clamping system does",
        accent: "en-US",
        text: "Basically, our magnetic clamping plate replaces the mechanical clamps you're using right now. Instead of bolting the mold down from four or six points, the entire surface holds the mold with magnetic force. Clamping happens in two seconds. Demagnetization takes the same. The big win for your team is changeover time — what takes 45 minutes today drops to under 5.",
        target_phrases: ["magnetic clamping plate", "bolt down", "changeover time", "the big win"]
      },
      block3_persona: {
        scenario: "Dinner with the customer, casual chat turns to business",
        persona_name: "Linda Park",
        persona_role: "VP of Manufacturing at a US auto-parts company",
        persona_personality: "Korean-American, sharp, asks one personal question then pivots to business. Will ask about your family and then ROI in the same breath.",
        opening_line: "So tell me about yourself, Wang Lei. Married? Kids? — and also, before I forget, what's the typical payback period your customers see on your system?",
        your_goal: "Answer the personal part briefly and warmly (1-2 sentences), then handle the ROI question with a concrete number range."
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
          { en: "Hi Wang, it's Tom from Acme Plastics. Do you have a minute?", zh: "Wang 你好，我是 Acme 塑料的 Tom。你方便讲话吗？" },
          { en: "Yeah, go ahead. What's up?", zh: "方便，你说。怎么了？" },
          { en: "We're trying to nail down a delivery date for the QMC system we quoted last month. Where are we on that?", zh: "我们想确定一下上个月报价的那套快换系统的交货日期。进展怎么样？" },
          { en: "Let me pull up your file. Quote number, if you have it handy?", zh: "我查一下你的文件。报价单号方便发我吗？" },
          { en: "It's Q-2024-118.", zh: "Q-2024-118。" },
          { en: "Got it. Looks like we can ship within five weeks of receiving your PO. Does that work for your timeline?", zh: "查到了。收到您的采购订单后五周可以发货。这个时间您能接受吗？" },
          { en: "Five weeks is tight but workable. I'll get the PO over to you by Friday.", zh: "五周有点紧但可以。我周五前把采购订单发给你。" }
        ],
        key_phrases: ["Do you have a minute", "nail down", "pull up your file", "by Friday"]
      },
      block2_dictation: {
        title: "Explaining lead time delays",
        accent: "en-US",
        text: "I want to be straight with you on the lead time. We're seeing some pressure on the supply of the magnetic cores right now — about a two-week impact across all orders this quarter. So instead of the standard six weeks, you're looking at eight from PO. I can prioritize your order once the PO is in, but I don't want to overpromise. Does eight weeks still work, or do we need to talk options?",
        target_phrases: ["be straight with you", "seeing some pressure", "looking at eight from PO", "talk options"]
      },
      block3_persona: {
        scenario: "Customer calls to push back on a quoted lead time",
        persona_name: "Tom Reeves",
        persona_role: "Procurement Manager at a US auto parts plant",
        persona_personality: "Direct, slightly impatient, his own boss is pushing him. Will say 'that doesn't work for us' and wait for you to solve it.",
        opening_line: "Wang, your lead time came back at eight weeks. That doesn't work for us — we're launching a new program in six. What can you do?",
        your_goal: "Don't promise what you can't deliver. Offer 2-3 concrete options (partial shipment, air freight for critical items, an alternative model). End by asking which option he wants to explore."
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
        title: "Customer is angry about a defective unit",
        accent: "en-US",
        text: "Look, I don't want excuses. We installed your unit on Friday, ran it Monday, and the controller threw an alarm code we've never seen before. My press is down. Every hour costs us about twelve hundred bucks. I need a fix today, not a ticket number. Can you get someone on the phone with my maintenance guy in the next thirty minutes?",
        target_phrases: ["don't want excuses", "threw an alarm code", "press is down", "in the next thirty minutes"]
      },
      block3_persona: {
        scenario: "Customer just received a unit that won't power on",
        persona_name: "David Whitaker",
        persona_role: "Maintenance Supervisor, UK injection molding shop",
        persona_personality: "British, cold, formal, restrained anger. Won't shout, but will use phrases like 'frankly disappointing' and 'we expected better'.",
        opening_line: "Wang, I'll be brief. The unit arrived Tuesday. It's now Thursday and it has not powered on once. Frankly, this is not what we expected from Kinghou. What's your plan?",
        your_goal: "Acknowledge first (don't defend). Get specifics (serial number, error codes). Commit to a clear next action with a time. End by asking permission to call him back in 30 min."
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
          { en: "Your price came in about 18 percent higher than your German competitor.", zh: "你们的价格比你们的德国对手高大约 18%。" },
          { en: "I hear you. Can I ask which model they quoted you, and for what tonnage?", zh: "我明白。能问一下他们报的是哪个型号，针对多大吨位的？" },
          { en: "They quoted their standard plate, 1000-ton press.", zh: "他们报的是标准型号，1000 吨压力机。" },
          { en: "That's helpful. The standard plate is what we used to sell five years ago. We've moved to a thicker pole structure since then — it adds 12 percent to the cost but doubles the holding force at the edges of the mold.", zh: "这个信息有用。标准型号是我们五年前的产品。我们后来升级了更厚的磁极结构 — 成本多 12%，但模具边缘的吸力翻倍。" },
          { en: "Why does that matter to me?", zh: "这跟我有什么关系？" },
          { en: "Because your shop runs molds with deep cavities. With a standard plate, you'll see lift on the cavity edges over time. Within two years you'd be looking at warranty calls and downtime. Our structure prevents that.", zh: "因为你们厂跑的模具型腔深。用标准型号，时间长了模具边缘会出现脱起。两年内你就会面临保修和停机。我们的结构能避免。" },
          { en: "So you're saying I should pay more to avoid problems later.", zh: "所以你的意思是我多花点钱避免以后出问题。" },
          { en: "I'm saying the 18 percent isn't apples to apples. Want me to run a five-year cost comparison so you can decide?", zh: "我的意思是这 18% 不是同等比较。要不要我做一个五年成本对比，你来决定？" }
        ],
        key_phrases: ["I hear you", "apples to apples", "doubles the holding force", "you'll see lift"]
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
          { en: "About six thousand square meters. We split it into three zones — magnetic core production on the left, plate assembly in the center, testing and packaging on the right.", zh: "大约六千平米。分三个区 — 左边磁芯生产，中间磁盘组装，右边测试和包装。" },
          { en: "What's that machine doing?", zh: "那台机器在做什么？" },
          { en: "That's our flux density tester. Every plate gets tested at thirty points before it ships. We log the data and keep it on file for ten years.", zh: "那是磁通密度测试仪。每块磁盘出厂前测三十个点。数据存档十年。" },
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

    // ===== WEEK 2-4: 骨架精品(完整人设+关键句+AI 展开) =====

    // ---------- DAY 8 ----------
    {
      day: 8,
      theme: "Uber/taxi + Technical specs vocabulary",
      block1_shadow: {
        title: "Getting an Uber to the customer's plant",
        difficulty: "easy",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang Lei takes an Uber from his hotel to a customer's plant in Detroit. The driver is chatty, asks where he's from and what he's in town for. Make 8 natural exchanges. End with the driver dropping him off and Wang tipping through the app.",
        key_phrases_seed: ["heading to", "what brings you to town", "in the auto business", "appreciate it"]
      },
      block2_dictation: {
        title: "Explaining clamping force and platen size",
        accent: "en-US",
        ai_expand: true,
        seed: "A 4-sentence dictation where Wang explains to a customer: (1) what clamping force in tons means for their press, (2) how platen size limits the mold size they can run, (3) why our magnetic plate has to match both, (4) ask if he knows the shut height of his press. Use natural spoken American English, not textbook English."
      },
      block3_persona: {
        scenario: "Technical sales call, customer doesn't know his own specs",
        persona_name: "Joe Patton",
        persona_role: "Small US molding shop owner-operator",
        persona_personality: "Older, hands-on guy, doesn't speak in spec sheets, describes things by what they look like. Will say things like 'the big one' instead of '800-ton'.",
        opening_line: "Yeah hi, I got a press here, the big blue one, and I wanna change molds faster. Whaddya got?",
        your_goal: "Don't intimidate him with jargon. Ask plain-language questions to figure out his press size and mold weight. Translate his answers back into specs you can use."
      }
    },

    // ---------- DAY 9 ----------
    {
      day: 9,
      theme: "Supermarket + Hydraulic vs magnetic clamping",
      block1_shadow: {
        title: "Picking up dinner stuff at a US supermarket",
        difficulty: "easy",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang at a Kroger/Walmart picking up basics — water, snacks, painkillers (jet lag), looking for the checkout. He asks a store employee where to find things twice. 8 natural exchanges including 'aisle 7' and 'self-checkout'.",
        key_phrases_seed: ["which aisle", "self-checkout", "do you take cards", "have a good one"]
      },
      block2_dictation: {
        title: "Hydraulic vs magnetic — the honest comparison",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang gives an honest 5-sentence comparison: hydraulic is cheaper upfront and handles uneven mold backs better, magnetic is faster and doesn't need a power pack but costs more and needs a flat mold back. He ends by saying which one he'd recommend for the customer's situation (small molds, frequent changes)."
      },
      block3_persona: {
        scenario: "Customer is currently using hydraulic, considering switching",
        persona_name: "Karen Vasquez",
        persona_role: "Operations Manager, US contract molder",
        persona_personality: "Sharp, asks 'why should I change what's already working?' Tests if you'll admit your system isn't right for every case.",
        opening_line: "We've been on hydraulic clamping for fifteen years. It works. Tell me why I should rip it out and put your system in.",
        your_goal: "Be honest. Don't oversell. Ask about her mold count and changeover frequency. Only recommend the switch if her numbers justify it."
      }
    },

    // ---------- DAY 10 ----------
    {
      day: 10,
      theme: "Doctor's office + Safety interlocks",
      block1_shadow: {
        title: "Going to a US walk-in clinic for a sore throat",
        difficulty: "easy",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang has a sore throat, jet lag week. Goes to a walk-in clinic, fills out a form, talks to the receptionist and then the doctor. 10 lines. Includes 'do you have insurance' — Wang says he'll pay cash, asks for a receipt for company reimbursement.",
        key_phrases_seed: ["walk-in", "do you have insurance", "pay cash", "itemized receipt"]
      },
      block2_dictation: {
        title: "Explaining safety interlock logic to a customer",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang explains in 5 sentences: the safety interlock prevents demagnetization while the press is closed; it reads pressure signal from the press; if it loses signal it defaults to safe state (stays magnetized); it has redundant sensors; it meets CE and we can provide the safety dossier."
      },
      block3_persona: {
        scenario: "Customer's safety engineer reviewing your safety system",
        persona_name: "Erik Mueller",
        persona_role: "Safety Engineer at a German-owned US plant",
        persona_personality: "Methodical, German engineering mindset, asks for documents not opinions. Will not move on until he gets a specific standard or document name.",
        opening_line: "I need to understand your safety architecture. Specifically: what standard does the interlock comply with, what's the SIL or PL rating, and where is the documentation?",
        your_goal: "Speak engineer-to-engineer. Use specific standards (EN ISO 13849, PL d or similar). If you don't know an answer, say you'll get it from the engineering team and follow up — don't make stuff up."
      }
    },

    // ---------- DAY 11 ----------
    {
      day: 11,
      theme: "Banking + Payment terms",
      block1_shadow: {
        title: "Opening a temporary US bank issue with the front desk",
        difficulty: "easy",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang's hotel front desk: his credit card was declined at a restaurant (anti-fraud lock from China). He explains, calls his bank back home, then tries the card again. 8 lines. Realistic frustration but polite."
      },
      block2_dictation: {
        title: "Discussing payment terms",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang explains payment terms in 5 sentences: 30% T/T deposit on PO, 70% before shipment, or alternatively L/C at sight for first-time orders over $50k. He mentions Net 30 is possible after the second order with credit approval."
      },
      block3_persona: {
        scenario: "Customer wants Net 60 payment terms on first order",
        persona_name: "Bill Hammond",
        persona_role: "CFO at a US Tier-2 supplier",
        persona_personality: "Pure finance mindset, doesn't care about your product, only about cash flow and risk. Will quote his standard supplier terms.",
        opening_line: "Our standard terms with suppliers are Net 60 from delivery. I assume that won't be a problem.",
        your_goal: "Hold the line politely. Explain why a first order needs different terms. Offer a compromise (30/70, or L/C). Don't agree to Net 60 from delivery on a first order — that's company-killer terms for a small supplier."
      }
    },

    // ---------- DAY 12 ----------
    {
      day: 12,
      theme: "Asking for directions + Talking about your factory location",
      block1_shadow: {
        title: "Lost in downtown, asking a stranger",
        difficulty: "easy",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang lost looking for a restaurant in Chicago, asks a stranger on the street. Stranger is helpful but in a hurry, gives directions with landmarks ('past the Starbucks, take a left'). 6 lines."
      },
      block2_dictation: {
        title: "Talking about where your factory is",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang describes Kinghou's location in 4 sentences: in Ningbo, about 2 hours south of Shanghai by high-speed train; near the port (good for export); 6000 sqm facility built in 2018; customer visits welcome, we can pick them up from Shanghai Pudong airport."
      },
      block3_persona: {
        scenario: "Customer is hesitant because you're in China and they've had bad experiences",
        persona_name: "Greg Sullivan",
        persona_role: "President of a US family-owned molding company",
        persona_personality: "Burned by a Chinese supplier 5 years ago (quality issue, no response after sale). Skeptical but willing to be convinced. Mentions the bad experience in the first 2 minutes.",
        opening_line: "Look, I'll be straight with you. Last time we bought from China, the unit failed in eight months and nobody answered our emails. Why should this time be different?",
        your_goal: "Don't dismiss his experience. Acknowledge it's a real risk. Give 3 specific things that make Kinghou different (US-based support partner if you have one, response time guarantee, customer references he can call). Offer a reference call before he signs anything."
      }
    },

    // ---------- DAY 13 ----------
    {
      day: 13,
      theme: "Coffee shop + Plant tour vocabulary deep dive",
      block1_shadow: {
        title: "Ordering at Starbucks",
        difficulty: "easy",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang ordering coffee for himself and his customer. Doesn't know what his customer wants, calls him on the phone mid-order. Pays with phone tap. 7 lines."
      },
      block2_dictation: {
        title: "Plant tour key phrases and terminology",
        accent: "en-US",
        ai_expand: true,
        seed: "5 sentences using these terms naturally: production line, work cell, traceability, batch number, FAT (factory acceptance test), and PPAP. Each sentence should feel like something said during a real tour, not a textbook."
      },
      block3_persona: {
        scenario: "Customer asks deep questions during a virtual plant tour",
        persona_name: "Susan Chen",
        persona_role: "Supplier Quality Engineer at a US Tier-1 auto supplier",
        persona_personality: "Chinese-American, will switch between English and Mandarin if you do, but keeps the meeting in English for her colleagues. Asks PPAP and IATF 16949 questions.",
        opening_line: "Hi Wang, I have three things I need to verify on this virtual tour: your traceability system, your FAT procedure, and whether you can support PPAP submissions. Where do we start?",
        your_goal: "Stay in English (her colleagues are listening). Show you understand auto industry quality requirements. Be specific about what you can and can't do — don't claim PPAP capability if you don't have it."
      }
    },

    // ---------- DAY 14 ----------
    {
      day: 14,
      theme: "Weekend small talk + WEEK 2 REVIEW",
      block1_shadow: {
        title: "Talking about your weekend plans",
        difficulty: "easy",
        accent: "en-US",
        ai_expand: true,
        seed: "Friday late afternoon, Wang and customer wrapping up. Customer asks what Wang's doing this weekend (he's still in the US). Wang asks back. Natural 8-line exchange, customer mentions watching college football, Wang mentions trying to see a baseball game."
      },
      block2_dictation: {
        title: "Week 2 review — compound sentence with multiple specs",
        accent: "en-US",
        ai_expand: true,
        seed: "One realistic paragraph (5 sentences) that combines: introducing yourself, explaining your product briefly, mentioning lead time, mentioning payment terms, and asking for next step. The kind of thing you'd say in a 90-second elevator pitch to a buyer at a trade show booth."
      },
      block3_persona: {
        scenario: "REVIEW: Trade show booth, walk-in visitor",
        persona_name: "Random trade show attendee (varies)",
        persona_role: "Could be a buyer, engineer, competitor, or curious passer-by — find out which",
        persona_personality: "Plays it close to the chest at first. You have 30 seconds to qualify them and decide how much time to invest.",
        opening_line: "Hi. What do you guys do?",
        your_goal: "Give a 20-second pitch. Then ask 2 questions to figure out who they are. Adjust your follow-up based on their answers. End with either an exchange of business cards or a polite 'thanks for stopping by'."
      }
    },

    // ===== WEEK 3 =====

    // ---------- DAY 15 ----------
    {
      day: 15,
      theme: "Email writing + Quotation cover note",
      block1_shadow: {
        title: "Reading aloud a professional email",
        difficulty: "medium",
        accent: "en-US",
        ai_expand: true,
        seed: "An 8-sentence professional email from Wang to Mark following up after their first call. Confirms the call summary, attaches a proposal, suggests next steps, asks for feedback by a specific date. Sign-off is warm but professional."
      },
      block2_dictation: {
        title: "Quotation cover note dictation",
        accent: "en-US",
        ai_expand: true,
        seed: "A 5-sentence quotation cover paragraph: thanks for the inquiry, summary of what's quoted (1 line), validity (30 days), key assumption (e.g. one platen, US voltage), one offer of a follow-up call."
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
      theme: "Video call + Mold loading process",
      block1_shadow: {
        title: "Starting a Teams/Zoom call",
        difficulty: "easy",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang opening a video call with 3 customers, two of whom he hasn't met. Camera issues at the start ('can you hear me?'). Brief intros, agenda check, then he hands over to a colleague. 8 lines."
      },
      block2_dictation: {
        title: "Walking a customer through mold loading on your system",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang describes mold loading in 6 short steps in spoken American English: position the cart, align with the platen guides, push the mold in, lower it onto the magnetic plate, hit the magnetize button, confirm the green light. Keep it conversational."
      },
      block3_persona: {
        scenario: "Customer's operator is on a video call learning the loading procedure",
        persona_name: "Marcus Wright",
        persona_role: "Press operator, 20 years experience, US shop",
        persona_personality: "Old-school, doesn't trust 'new tech', expects to be respected for his experience. Will ask 'what happens if it fails?'.",
        opening_line: "Alright son, walk me through this. And speak slow — I've been doing this since before you were born.",
        your_goal: "Show respect to his experience. Don't talk down. When he asks 'what if it fails?', answer with the actual failure mode and recovery (don't say 'it can't fail')."
      }
    },

    // ---------- DAY 17 ----------
    {
      day: 17,
      theme: "Restaurant follow-up + Demagnetization safety",
      block1_shadow: {
        title: "Sending back a wrong order at a restaurant",
        difficulty: "medium",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang ordered a burger medium, comes well-done. Polite but firm send-back. Server apologetic. 6 lines. Wang doesn't make a scene but doesn't accept the wrong food either."
      },
      block2_dictation: {
        title: "Demagnetization sequence and why it matters",
        accent: "en-US",
        ai_expand: true,
        seed: "5 sentences explaining: demagnetization releases the mold, takes about 2 seconds, must happen only when press is open, the system blocks demag if the press is closed (safety), and residual magnetism after demag is below a safe threshold (under 2 Gauss)."
      },
      block3_persona: {
        scenario: "Customer worried about residual magnetism affecting his mold steel",
        persona_name: "Dr. Karl Berger",
        persona_role: "R&D engineer with PhD in materials, US specialty molding shop",
        persona_personality: "Academic, asks precise questions about magnetic field strength, Gauss/Tesla values, effect on tool steel hardness over time.",
        opening_line: "I'm concerned about magnetic field exposure on our P20 and H13 mold steels over thousands of cycles. What data do you have on long-term effects?",
        your_goal: "Speak his language. Use Gauss/Tesla correctly. If you have data, cite it (lab tests, customer history). If you don't, say 'I'll get our chief engineer on a call with you' — don't bullshit a PhD."
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
        seed: "Wang on a phone call with poor reception. Has to ask the customer to repeat twice, eventually suggests switching to WhatsApp or calling back. 7 lines."
      },
      block2_dictation: {
        title: "Remote troubleshooting steps",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang walks a customer's technician through 5 troubleshooting steps over the phone: check the main breaker, check the control voltage, check the E-stop reset, check the press signal cable, and read the error code on the HMI."
      },
      block3_persona: {
        scenario: "After-hours call, customer's system is down, both of you on the phone",
        persona_name: "Mike Donovan",
        persona_role: "Night-shift maintenance lead, US plant",
        persona_personality: "Stressed, talking fast, his press has been down 90 minutes, his manager is breathing down his neck. Will get more frustrated if you ask too many questions before giving any answer.",
        opening_line: "Wang, I got the unit down, error code is 'E-407', I tried resetting twice, nothing. What do I do?",
        your_goal: "Don't say 'let me check the manual'. Take charge. Ask 1-2 key questions to confirm the symptom, then give a clear step-by-step. Stay on the line with him until it's solved or escalated."
      }
    },

    // ---------- DAY 19 ----------
    {
      day: 19,
      theme: "Sports small talk + Tonnage and shut height",
      block1_shadow: {
        title: "NFL/NBA small talk with a customer",
        difficulty: "easy",
        accent: "en-US",
        ai_expand: true,
        seed: "Customer mentions his team won last night. Wang doesn't know the game but is friendly about it. Honest but not awkward — admits he doesn't follow American football much but asks who they played and if it was close. 6 lines."
      },
      block2_dictation: {
        title: "Tonnage, shut height, platen size — explaining all three",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang explains in 5 sentences how tonnage, shut height, and platen size together define what mold a press can run, and which of these our magnetic plate has to match. Includes one example with real numbers (e.g. 500-ton press, 600mm shut height, 1000x1000 platen)."
      },
      block3_persona: {
        scenario: "Customer trying to fit your magnetic plate on an older press",
        persona_name: "Pete Larsen",
        persona_role: "Plant Manager at an old US molding plant",
        persona_personality: "Has a 1990s press he loves, wants to retrofit it. Will push back if you say his press is too old.",
        opening_line: "I've got a Cincinnati 750 from '94. Can your plate fit it or not?",
        your_goal: "Ask the right specs (shut height, platen dimensions, ejector hole pattern). Be honest if retrofit is risky on old presses. Offer to look at photos before committing."
      }
    },

    // ---------- DAY 20 ----------
    {
      day: 20,
      theme: "Disagreement + Defending your design choice",
      block1_shadow: {
        title: "Polite disagreement",
        difficulty: "medium",
        accent: "en-US",
        ai_expand: true,
        seed: "Customer suggests a design change Wang doesn't agree with. Wang disagrees politely but firmly — uses 'I see where you're coming from, but here's my concern' framing. 7 lines."
      },
      block2_dictation: {
        title: "Why we use square poles instead of round poles",
        accent: "en-US",
        ai_expand: true,
        seed: "5 sentences: square poles give 22% more clamping area per unit, round poles are easier to manufacture but lose holding force at the corners of large molds, our customers running molds over 800kg specifically asked for square, we tested both for 2 years before switching, and we'll give you the test data if you want."
      },
      block3_persona: {
        scenario: "Customer's engineer disagrees with your design and is trying to convince you to change it",
        persona_name: "Tony Marciano",
        persona_role: "Senior Engineer at a US press maker (your customer's customer)",
        persona_personality: "Italian-American, opinionated, very confident in his own designs, will not give up easily. Respects people who push back well.",
        opening_line: "Wang, listen, your pole pattern is wrong for our application. We need round poles, not square. Trust me on this — I've been designing presses for thirty years.",
        your_goal: "Don't immediately agree. Don't immediately disagree. Ask why he thinks round is better for HIS specific case. If his reasoning is wrong, push back with data. If his reasoning is right, admit it and offer to look into a custom design."
      }
    },

    // ---------- DAY 21 ----------
    {
      day: 21,
      theme: "Asking for help + WEEK 3 REVIEW: Long technical explanation",
      block1_shadow: {
        title: "Asking a colleague for help in English",
        difficulty: "medium",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang asks his US-based after-sales partner for help with a customer issue. Briefs him on the situation in 5 lines, asks for help, agrees on next step. Natural professional English."
      },
      block2_dictation: {
        title: "Full explanation of QMC ROI",
        accent: "en-US",
        ai_expand: true,
        seed: "One 6-sentence paragraph: assume 4 mold changes per shift, current changeover 40 min, our system reduces to 5 min, that's 35 min × 4 = 140 min recovered per shift, × $1500/hour press rate = $3,500/shift saved, system pays back in roughly 4-6 months for a 2-shift operation. End with 'these are your numbers — does my math look right?'."
      },
      block3_persona: {
        scenario: "REVIEW: Tough customer, technical + commercial mixed call",
        persona_name: "Linda Park (returning)",
        persona_role: "VP of Manufacturing (the customer from Day 3)",
        persona_personality: "Now she's pushing for a final answer. Mix of technical doubts and commercial pressure.",
        opening_line: "Wang, I've had two weeks to think about your proposal. I have three concerns: one technical, one commercial, and one about your support after install. Let's go through them.",
        your_goal: "Stay calm under multi-front pressure. Address all three concerns concretely. Get a clear next step before the call ends."
      }
    },

    // ===== WEEK 4 =====

    // ---------- DAY 22 ----------
    {
      day: 22,
      theme: "Visa/travel issues + Installation scheduling",
      block1_shadow: {
        title: "Talking about visa issues with a customer",
        difficulty: "medium",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang's US visa interview got delayed by 3 weeks. He calls the customer to explain his trip is postponed, suggests a video walkthrough as a stopgap, asks if it works. 6 lines, honest and professional."
      },
      block2_dictation: {
        title: "Scheduling on-site installation",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang and customer scheduling installation in 5 sentences: agree on a target week, list what the customer needs to prepare beforehand (concrete pad, electrical drop, compressed air, lifting equipment), confirm Wang's engineer's flight, and confirm the on-site duration (3 days)."
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
      theme: "Cancellation + Commissioning and FAT",
      block1_shadow: {
        title: "Canceling a meeting last minute",
        difficulty: "medium",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang has to cancel a customer meeting due to a family emergency back home. Calls instead of emails. Apologizes, doesn't over-explain, suggests two specific reschedule dates. 5 lines."
      },
      block2_dictation: {
        title: "Commissioning checklist explained",
        accent: "en-US",
        ai_expand: true,
        seed: "6 sentences walking through commissioning steps: visual inspection, electrical continuity check, control system power-up, manual mode test, automatic mode test, and final sign-off with customer signature on the FAT document."
      },
      block3_persona: {
        scenario: "Customer's engineer is signing off on the FAT and has last-minute concerns",
        persona_name: "Brian Sutton",
        persona_role: "Reliability Engineer, US auto plant",
        persona_personality: "Will not sign without checking everything. Polite but slow. Will request one or two extra tests beyond the agreed FAT.",
        opening_line: "Looks good so far. Before I sign, can we do two more tests? I want to see emergency stop response and a cold start sequence.",
        your_goal: "Decide if his requests are reasonable (they are). Agree professionally without grumbling. If you can do it on the spot, do it. If you need to come back, schedule it."
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
        seed: "Wang at a trade show evening reception. Approaches a small group, joins the conversation politely, introduces himself, exchanges cards with one person who seems interested, exits gracefully when the group moves on. 8 lines."
      },
      block2_dictation: {
        title: "Warranty terms in plain English",
        accent: "en-US",
        ai_expand: true,
        seed: "5 sentences: standard 18-month warranty from shipment or 12 months from commissioning, whichever is earlier; covers manufacturing defects; does not cover damage from improper installation or use outside spec; extended 36-month available for 8% of order value; warranty service is parts free + labor at our cost for first year."
      },
      block3_persona: {
        scenario: "Customer wants warranty extended for free as a deal-closer",
        persona_name: "Frank Morgan (returning from Day 6)",
        persona_role: "Purchasing Director",
        persona_personality: "Same aggressive negotiator. Now using warranty as the lever instead of price.",
        opening_line: "Wang, I'll sign today if you give me 36 months warranty included at no extra cost. Yes or no.",
        your_goal: "Don't cave. Explain the cost of extended warranty isn't zero (parts, service network). Counter-offer (24 months at half price, or 36 months in exchange for a 2nd unit purchase commitment). Be willing to walk away if the deal isn't real."
      }
    },

    // ---------- DAY 25 ----------
    {
      day: 25,
      theme: "Saying goodbye + Spare parts and consumables",
      block1_shadow: {
        title: "Saying goodbye at the end of a long trip",
        difficulty: "medium",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang's last day at the customer's plant, end of a 5-day visit. Thanks the team, mentions specific things he appreciated, makes one personal mention (the engineer who helped him most), exchanges contact info, says he'll send pictures from his next trade show. 7 warm lines."
      },
      block2_dictation: {
        title: "Recommending a spare parts kit",
        accent: "en-US",
        ai_expand: true,
        seed: "5 sentences: standard spare parts kit includes 2 sets of seals, 1 spare control board, 1 spare proximity sensor, fuses, and a USB with firmware backup; price is 8% of system value; covers most common failures for 5 years of operation; we recommend it especially for plants without easy access to our service network; can be added to the original order at no shipping cost."
      },
      block3_persona: {
        scenario: "Customer pushing back on the cost of the spare parts kit",
        persona_name: "Ron Bradley",
        persona_role: "Maintenance Manager, US small molding plant",
        persona_personality: "Sees spare parts kits as upsells, wary of being sold on. Will say 'we'll order parts when we need them'.",
        opening_line: "Wang, this spare parts package — eight percent? Seems steep. We can just order what we need if something breaks.",
        your_goal: "Don't oversell. Be honest: if his plant is in a major metro and uses common parts, he might not need the kit. If he's remote or uses non-standard parts, the kit pays for itself one breakdown in. Help him decide based on his situation, not yours."
      }
    },

    // ---------- DAY 26 ----------
    {
      day: 26,
      theme: "Conference Q&A + Public speaking under pressure",
      block1_shadow: {
        title: "Standing up to ask a question at a conference",
        difficulty: "medium-hard",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang at an industry conference, walks to the mic, introduces himself, asks the panelist a sharp but respectful question about consolidation in the QMC industry. 5 lines (intro + question + thanks). Confident but not arrogant."
      },
      block2_dictation: {
        title: "Answering a hostile question with grace",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang answers a hostile audience question that implies Chinese suppliers can't be trusted. 5 sentences. Doesn't get defensive. Acknowledges the concern is real, points to specific things Kinghou does differently, invites the questioner to visit, ends with a small joke that breaks the tension."
      },
      block3_persona: {
        scenario: "You're presenting your product at an industry event, Q&A is hostile",
        persona_name: "Anonymous audience member",
        persona_role: "Possibly a competitor's employee, possibly just a skeptic",
        persona_personality: "Tries to embarrass you in front of the room. Asks loaded questions like 'isn't your IP just copied from EAS?' or 'how do we know your safety claims aren't fabricated?'",
        opening_line: "I have a question — actually a comment first, then a question. Your design looks remarkably similar to EAS's patented system. Can you explain that?",
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
        seed: "Wang lost a deal. Calls the customer to ask for honest feedback (not to argue). Sets the tone first ('I'm not calling to change your mind'). Asks 2 specific questions. Thanks them. 7 lines. Mature handling of a loss."
      },
      block2_dictation: {
        title: "Following up 6 months after losing a deal",
        accent: "en-US",
        ai_expand: true,
        seed: "5 sentences: light, no-pressure follow-up email read aloud — 'just checking in', not 'are you ready to switch'. Mentions one industry update he might find useful, offers a 15-min coffee/call if he's ever in the area, signs off."
      },
      block3_persona: {
        scenario: "You lost a deal to a competitor 8 months ago, calling for a check-in",
        persona_name: "Mark Reilly (returning from Day 1)",
        persona_role: "Plant Engineering Manager",
        persona_personality: "Polite but distant. The competitor's system is working okay, not great. He's open to a chat but won't lead the conversation.",
        opening_line: "Wang, good to hear from you. Yeah, the EAS system is in. Running it now. ...What's on your mind?",
        your_goal: "Don't pitch. Listen for problems. Ask open questions about how the install went and what they'd do differently. Plant a seed for future business without being pushy. End the call without asking for anything."
      }
    },

    // ---------- DAY 28 ----------
    {
      day: 28,
      theme: "Apologizing for a mistake + Tough product decision",
      block1_shadow: {
        title: "Owning up to a mistake you personally made",
        difficulty: "medium-hard",
        accent: "en-US",
        ai_expand: true,
        seed: "Wang made a mistake — quoted the wrong model on a $200k order and the customer signed. Calls the customer to admit it before the customer notices. Doesn't make excuses. Offers a solution (honor the price, or upgrade to the correct model with a partial discount). 8 lines."
      },
      block2_dictation: {
        title: "Telling a customer their requirement is wrong",
        accent: "en-US",
        ai_expand: true,
        seed: "5 sentences: customer asked for a configuration that will technically work but causes long-term problems. Wang explains his concern in plain language, says he'd rather lose the sale than ship something he knows will fail, suggests the right alternative."
      },
      block3_persona: {
        scenario: "You have to tell a customer their order is wrong and you need to fix it",
        persona_name: "Cheryl Adams",
        persona_role: "Project Manager, US plant",
        persona_personality: "Already stressed, her project is behind schedule. Will be frustrated to hear there's a problem on the supplier side too.",
        opening_line: "Hi Wang, what's up? Hopefully nothing bad — I don't have time for bad news today.",
        your_goal: "Don't soften so much it's unclear. Be direct, own the mistake, present the solution in the same breath. Stay calm if she gets upset."
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
        seed: "December call, warm, reviewing the year together. What worked, what didn't, what they're planning next year. Wang doesn't pitch, just listens and notes. 8 lines."
      },
      block2_dictation: {
        title: "Talking about your factory's plans for next year",
        accent: "en-US",
        ai_expand: true,
        seed: "5 sentences: Wang shares Kinghou's plans for next year — new product line for larger presses (up to 2000 ton), expanded US service network (a partner in Mexico), pricing held flat despite inflation, ISO 9001 recert in March, and CES booth in January if any customers want to meet there."
      },
      block3_persona: {
        scenario: "Long-term customer wants to know what's coming next from your company",
        persona_name: "Robert 'Bob' Chen",
        persona_role: "Owner of a US contract molding shop, longtime Kinghou customer",
        persona_personality: "Friendly, treats Wang like a friend at this point. Asks personal questions and business questions in the same breath. Will give blunt feedback if asked.",
        opening_line: "Wang! Good to hear from ya. How's the family? — and what's Kinghou cooking up for next year? I'm planning my capex.",
        your_goal: "Friendly but professional. Share genuine roadmap info (without overpromising). Ask what HE'S planning so you can position relevantly. End by suggesting a call in January with specifics."
      }
    },

    // ---------- DAY 30 ----------
    {
      day: 30,
      theme: "GRADUATION: Mixed-pressure full-day simulation",
      block1_shadow: {
        title: "30-day capstone: A full day in Wang's English-speaking life",
        difficulty: "hard",
        accent: "en-US",
        ai_expand: true,
        seed: "A 12-line montage of one full day in Wang's life on a US business trip: morning coffee order, Uber to plant, greeting customer, plant tour answer to a tough question, lunch small talk, afternoon negotiation moment, evening dinner with a different customer, goodbye and back to hotel. Each line a different moment, different register."
      },
      block2_dictation: {
        title: "30-day capstone dictation: The full pitch",
        accent: "en-US",
        ai_expand: true,
        seed: "A polished 6-sentence pitch Wang would give to a top-tier US Tier-1 supplier on day 30 — bringing together company intro, technical differentiation, commercial terms, support, and next step. The kind of pitch he couldn't have made on day 1."
      },
      block3_persona: {
        scenario: "GRADUATION: A customer you've never met combines all 30 days' challenges",
        persona_name: "Eleanor Whitfield",
        persona_role: "Chief Procurement Officer at a Fortune 500 US auto parts supplier",
        persona_personality: "Sharp, time-pressured, technically literate, has seen every sales pitch. Will hit you with technical, commercial, support, and timeline questions in one 30-minute call. Asks one personal question to gauge if she likes you.",
        opening_line: "Wang, I've got thirty minutes. I've read your proposal. I have concerns in five areas. Let's go.",
        your_goal: "Use everything you've learned. Stay calm. Be specific. Show you've thought about her business. End the call with a clear, mutual next step — not a vague 'I'll follow up'."
      }
    }
  ]
};

// Make available globally
if (typeof window !== 'undefined') {
  window.CURRICULUM = CURRICULUM;
}
