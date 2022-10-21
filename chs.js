/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "!Warning Spoilers!": "！剧透警告！",
    "Currently Offline": "当前离线",
    "Manually Save": "手动保存",
    "Melt Down": "熔融",
    "Super Charge": "超级充电",
    "Thanks!": "感谢！",
    "Credits": "鸣谢",
    "Elements & Element Production": "元素 & 元素生产",
    "Elements": "元素",
    "Corium": "堆芯熔化物",
    "Compounds": "化合物",
    "Congratulations": "恭喜",
    "Coal": "煤",
    "Changelog :D": "更新日志 :D",
    "Classic": "经典",
    "C-14 Generator": "C-14 发生器",
    "Carbon Generator": "碳 发生器",
    "[C-1] - The Element of Life": "[C-1] - 生命元素",
    "[C-2] - Well you can make graphite at least": "[C-2] - 你至少可以制造石墨",
    "[C-3] - Diamonds": "[C-3] - 钻石",
    "[C-5] - Ubër Oil": "[C-5] - 优步石油",
    "[C-6] - Lucrative": "[C-6] - 有利可图",
    "[Cf-1] - The last compound": "[Cf-1] - 最后一种化合物",
    "[Cl-1] - Mmm Mustard Gas": "[Cl-1] - 嗯，芥子气",
    "[Cl-2] - Ph-": "[Cl-2] - Ph-",
    "[Cl-3] - Ph--": "[Cl-3] - Ph--",
    "[Cl-6] - Spicy Air": "[Cl-6] - 辣味空气",
    "[Cl-8] - Millionaire VI": "[Cl-8] - 百万富翁 VI",
    "[Co-2] - Fukushima": "[Co-2] - 福岛",
    "[Ele-1] - The secrets of power": "[Ele-1] - 权力的秘密",
    "[F-1] - Gimme your electrons": "[F-1] - 给你电子",
    "[F-3] - Why are you making this stuff": "[F-3] - 你为什么要做这些东西",
    "[F-7] - Fluorinating": "[F-7] - 氟化",
    "[F-8] - Millionaire IV": "[F-8] - 百万富翁 IV",
    "[Fe-1] - Just Iron": "[Fe-1] - 只是铁",
    "[Fe-2] - Um make steel or something idk": "[Fe-2] - 嗯做钢铁什么的",
    "[Fe-3] - Steel > Iron": "[Fe-3] - 钢 > 铁",
    "[Fe-4] - Solid Investment": "[Fe-4] - 稳健的投资",
    "[Fe-5] - Kaiser Steel": "[Fe-5] - 凯撒钢铁",
    "[Fe-6] - The might of German... Iron?": "[Fe-6] - 德国的力量……铁？",
    "[Fe-7] - Carnegie": "[Fe-7] - 卡内基",
    "[Fe-8] - Millionaire VII": "[Fe-8] - 百万富翁 VII",
    "[H-1] - Hydrogenated": "[H-1] - 氢化",
    "[H-2] - There must be more to this game": "[H-2] - 这个游戏肯定还有更多",
    "[H-3] - Just go get helium already": "[H-3] - 快去获取氦吧",
    "[H-4] - Saturated": "[H-4] - 饱和",
    "[Mu-2] - More particles than you will ever know": "[Mu-2] - 比你知道的更多的粒子",
    "[Neu-2] - Switzerland": "[Neu-2] - 瑞士",
    "[O-1] - No this is not air": "[O-1] - 不，这不是空气",
    "[O-3] - Nitrogen + Oxygen = Air": "[O-3] - 氮气 + 氧气 = 空气",
    "[O-5] - More O": "[O-5] - 更多 O",
    "[O-6] - Air Monopoly": "[O-6] - 空中垄断",
    "[O-7] - Bottled Air": "[O-7] - 瓶装空气",
    "[O-8] - Millionaire III": "[O-8] - 百万富翁 III",
    "[Pb-1] - Definitely not Peanut Butter": "[Pb-1] - 绝对不是花生酱",
    "[Pb-2] - X-Ray Protection": "[Pb-2] - X 射线防护",
    "[Pb-3] - ._. Don't eat that": "[Pb-3] - ._.不要吃那个",
    "[Pb-7] - Lotta Lead": "[Pb-7] - 洛塔铅",
    "[Pb-8] - Millionaire VIII": "[Pb-8] - 百万富翁 VIII",
    "[Pr-1] - A new chapter": "[Pr-1] - 新篇章",
    "[Pr-2] - Do you sell propane?": "[Pr-2] - 你卖丙烷吗？",
    "[Pr-3] - What about propane accessories?": "[Pr-3] - 丙烷配件怎么样？",
    "[Pro-1] - A positive chapter": "[Pro-1] - 积极的篇章",
    "[Pw-1] - New tabs?!?": "[Pw-1] - 新标签？！？",
    "[S-1] - Hey Stinky": "[S-1] - 嘿，臭臭的",
    "[S-3] - Reeking Odor": "[S-3] - 恶臭",
    "[S-7] - Oh the stench": "[S-7] - 哦，恶臭",
    "[S-8] - Millionaire V": "[S-8] - 百万富翁 V",
    "[Sa-1] - Battery": "[Sa-1] - 电池",
    "[Sl-2] - Carnegie Steel": "[Sl-2] - 卡耐基钢铁公司",
    "[Sl-3] - What do you even do with this?": "[Sl-3] - 你用这个做什么？",
    "[Sl-4] - All the steel": "[Sl-4] - 全钢",
    "[Tau-1] - Moar greek letters": "[Tau-1] - 研磨希腊字母",
    "[Wt-3] - Moar Water": "[Wt-3] - 研磨水",
    "[Wt-4] - Hydroelectric": "[Wt-4] - 水电",
    "Cost: C": "成本: C",
    "Research :P": "研究 :P",
    "Increase Corium Produced On Melt": "增加熔融时产生的堆芯熔化物",
    "50,000 Protons and Neutrons combined": "50,000 个质子和中子",
    "Accelerators": "加速器",
    "and": "和",
    "And Go Quantum": "去量子",
    "Are you sure?": "你确定吗？",
    "Artists": "艺术家",
    "Augment I": "增强我",
    "Augment II": "增强二",
    "Augment III": "增强 III",
    "Augments": "增强",
    "Automators: [OFF]": "自动机：[关]",
    "Balancing Update": "平衡更新",
    "Battery": "电池",
    "bordered researches never reset": "边界研究永远不会重置",
    "Buy your first Carbon Generator": "购买您的第一台碳发生器",
    "Buy your first Chlorine Generator": "购买您的第一台氯气发生器",
    "Buy your first Fluorine Generator": "购买您的第一台氟发生器",
    "Buy your first Hydrogen Generator": "购买您的第一台氢气发生器",
    "Buy your first Iron Generator": "购买您的第一台炼铁机",
    "Buy your first Lead Generator": "购买您的第一个潜在客户发生器",
    "Buy your first Oxygen Generator": "购买您的第一台氧气发生器",
    "Buy your first Sulfur Generator": "购买您的第一台硫发生器",
    "Challenges": "挑战",
    "Challenges are the only other area in the radiation tab these have special effects on how you play the game.": "挑战是辐射选项卡中唯一的其他区域，它们对您玩游戏的方式有特殊影响。",
    "Change Theme": "改变主题",
    "Check out more of my games on": "查看更多我的游戏",
    "Chlorine Generator": "氯气发生器",
    "Cl-37 Generator": "Cl-37 发电机",
    "Classic but ROUND": "经典但圆润",
    "Compounds & Their Boosts": "化合物及其助推器",
    "Compounds are special resources that boost certain aspects of the game.": "化合物是增强游戏某些方面的特殊资源。",
    "Corium can be used to unlock new areas and buy special upgrades.": "堆芯熔化物 可用于解锁新区域和购买特殊升级。",
    "Create Propane": "创建丙烷",
    "Create your first Chlorine Trifluoride": "创建您的第一个三氟化氯",
    "Create your first Propane": "创建您的第一个丙烷",
    "Create your first Sulfuric Acid": "创建您的第一个硫酸",
    "CSS Rework & Styling Theme Creation": "CSS 返工和样式主题创建",
    "Current Endgame: Max Challenges": "当前残局：最大挑战",
    "Current Notation: Scientific": "当前符号：科学",
    "Currently working on: Beta 6": "目前正在开发：Beta 6",
    "Custom Modal Windows (almost all)": "自定义模态窗口（几乎所有）",
    "Dark Mode": "黑暗模式",
    "Delete Savefile": "删除保存文件",
    "Each element also boosts the production of the one below it.": "每个元素还促进其下一个元素的生产。",
    "Early Access Beta": "抢先体验测试版",
    "Early Game Info": "早期游戏信息",
    "Electron Shattering": "电子破碎",
    "Element generators cost the currency below them ex: Carbon requires Hydrogen.": "元素发生器花费低于它们的货币，例如：碳需要氢。",
    "Elemental Decay | 0/25 Completions": "元素衰变 | 0/25 完成",
    "Elements are your first unlockable tab and the first in game currencies.": "元素是您的第一个可解锁标签，也是游戏货币中的第一个。",
    "Enable Offline Progress [ON]": "启用离线进度 [开]",
    "Enable Offline Progress [OFF]": "启用离线进度 [关]",
    "Export & Delete Savefile": "导出和删除保存文件",
    "Export Savefile to clipboard": "将保存文件导出到剪贴板",
    "F-18 Generator": "F-18 发电机",
    "Fe-60 Generator": "Fe-60 发生器",
    "First Prestige": "第一威望",
    "FlamemasterNXF": "火焰大师NXF",
    "Fluorine Generator": "氟发生器",
    "Found a bug? Open a new issue on the": "发现错误？在",
    "Fuel Percent Used": "使用的燃料百分比",
    "Fuel Up": "加油",
    "Full Release": "完整版本",
    "Fundamental": "基本的",
    "Gain on Irridiate": "获得刺激",
    "Generate 1 Power": "产生 1 个能量",
    "Generate Power": "发电",
    "Generators": "发电机",
    "github repo": "github 仓库",
    "Goal: Get 1e25 Corium": "目标：获得 1e25 堆芯熔化物",
    "Green": "绿色的",
    "Green Background = Unlocked": "绿色背景 = 解锁",
    "H-3 Generator": "H-3 发电机",
    "Heat Shields": "隔热罩",
    "Help": "帮助",
    "Hover over a research to see its description": "将鼠标悬停在一项研究上以查看其描述",
    "Hover over achievements to see a description": "将鼠标悬停在成就上以查看说明",
    "Hover over secrets to see a description": "将鼠标悬停在秘密上以查看说明",
    "Hydrogen Generator": "氢气发生器",
    "I am thoroughly surprised": "我非常惊讶",
    "I'm not sure how you accomplished this but good job": "我不知道你是怎么做到的，但做得很好",
    "Import Savefile": "导入保存文件",
    "Iron Generator": "铁发生器",
    "Irridiate": "照射",
    "Irridiate Confirmation [ON]": "照射确认 [开]",
    "Irridiate Confirmation [OFF]": "照射确认 [关]",
    "Isotopes": "同位素",
    "Kuaka Refinery": "夸卡炼油厂",
    "Late Game Info": "后期游戏信息",
    "Leave this Realm Behind": "离开这个领域",
    "Leptons": "轻子",
    "Lose 1% of your Element Generator Levels Per Second": "每秒损失 1% 的元素发生器等级",
    "Melt for 1,000 Corium": "熔炼获得 1,000 堆芯熔化物",
    "Melting": "熔融",
    "Melting Confirmation [ON]": "熔融确认 [开]",
    "Melting Confirmation [OFF]": "熔融确认 [关]",
    "Melting is the first prestige layer, it resets all of your progress in exchange for Corium": "熔融是第一个声望层，它会重置你的所有进度以换取 堆芯熔化物",
    "Methane": "甲烷",
    "Mid Game Info": "中期游戏信息",
    "Multiplier can be reset by Melting, Shattering or Ripping": "乘数可以通过熔化、粉碎或撕裂来重置",
    "Multiplier must be >1.00x": "乘数必须 >1.00x",
    "my website": "我的网站",
    "Natural Gas": "天然气",
    "Need some help?": "需要一些帮助？",
    "New things have been added since last time": "自上次以来已添加新内容",
    "No background = Locked": "无背景 = 锁定",
    "No Styling": "没有造型",
    "No!": "不！",
    "Not in a challenge": "没有挑战",
    "Not in a Challenge": "不在挑战中",
    "Notation: Scientific": "符号：科学",
    "Nothing here yet": "这里还没有",
    "Notice": "注意",
    "O-15 Generator": "O-15 发电机",
    "Oh yeah and green researches you might wanna buy first": "哦，是的，你可能想先购买绿色研究",
    "Oxygen Generator": "氧气发生器",
    "Particle Gain": "粒子增益",
    "Particles": "粒子",
    "Particles are the second corium unlock layer and this area has many different micro resets.": "粒子是第二个堆芯熔化物解锁层，该区域有许多不同的微复位。",
    "Pb-212 Generator": "Pb-212 发生器",
    "Peta - 1.00e15": "Peta - 1.00e15",
    "Petroleum": "石油",
    "Pick a theme any theme.": "选择一个主题任何主题。",
    "Planned Things": "计划好的事情",
    "Please": "请",
    "Power": "能源",
    "Power can be used to boost production of your elements.": "电力可用于促进元素的生产。",
    "Power Generation is a 'Micro-Prestige'": "发电是一种“微声望”",
    "Power Generators": "发电机",
    "Power is a micro reset layer that uses your Propane and Water to reward power.": "电源是一个微型重置层，它使用您的丙烷和水来奖励电源。",
    "Power System": "电源系统",
    "Pre-Release Development Alpha": "预发布开发 Alpha",
    "Programmers": "程序员",
    "Propane": "丙烷",
    "Propane & Water you have and both will be reset on generating": "您拥有的丙烷和水，两者都将在生成时重置",
    "Quantum": "量子",
    "Quantum Shards": "量子碎片",
    "Quarks": "夸克",
    "Radiation": "辐射",
    "Radiation is the second prestige layer of the game, it resets all past areas in exchange for three types of radiation.": "辐射是游戏的第二个声望层，它重置所有过去的区域以换取三种辐射。",
    "Red": "红色的",
    "Refinery": "炼油厂",
    "Refinery and Accelerator Remaster": "炼油厂和加速器重制",
    "Refinery is a another set of compounds except these are used to fuel generators.": "炼油厂是另一组化合物，除了这些化合物用于为发电机提供燃料。",
    "Regular": "常规",
    "Requirement is 1.00e38 Corium": "要求是 1.00e38 堆芯熔化物",
    "Requires 3 Propane & 1 Water": "需要 3 个丙烷和 1 个水",
    "Requires at least": "至少需要",
    "Requires at least 100,000 Electrons": "需要至少 100,000 个电子",
    "Research": "研究",
    "Research is the only consumer of radiation researches are special upgrades which include automation to new areas.": "研究是辐射研究的唯一消费者，研究是包括自动化到新领域的特殊升级。",
    "Rewards:": "奖励：",
    "Ripper": "分裂",
    "Ripper Confirmation [ON]": "撕裂者确认 [开]",
    "Ripper Confirmation [OFF]": "撕裂者确认 [关]",
    "Roadmap": "路线图",
    "S-35 Generator": "S-35 发电机",
    "Say goodbye to your elements": "告别你的元素",
    "Second Prestige, Automation, Challenges": "第二声望、自动化、挑战",
    "Secret": "秘密",
    "Shatter for 1 Tau": "粉碎获得 1 Tau",
    "Shatter for 10 Muons": "粉碎 10 介子",
    "SI Notations": "SI 符号",
    "Split for 1,000 Neutrons": "分裂为 1,000 个中子",
    "Split for 500 Electrons": "分裂为 500 个电子",
    "Split for 500 Protons": "拆分为 500 个质子",
    "Splitter": "分路器",
    "Splitter Confirmation [ON]": "分裂器确认 [开]",
    "Splitter Confirmation [OFF]": "分裂器确认 [关]",
    "Start [Elemental Decay]": "开始[元素衰变]",
    "Starting, Quiting & Completing Challenges triggers an Irridiate": "开始、退出和完成挑战会触发 Irridiate",
    "Stuck in a challenge? Click the Green C icon to quit": "陷入挑战？单击绿色 C 图标退出",
    "Sulfur Generator": "硫发生器",
    "The amount of power you make depends on the total amount of both": "你产生的电量取决于两者的总量",
    "The Roadmap": "路线图",
    "The Secret Zone": "秘密地带",
    "The Void Reliquary": "虚空圣物箱",
    "There are many different particles created from reset from fundamentals to quarks and all of them have some associated boost.": "从基本到夸克的重置产生了许多不同的粒子，并且所有这些粒子都有一些相关的提升。",
    "They aren't cheap though requiring the generator levels to purchase.": "尽管需要购买发电机级别，但它们并不便宜。",
    "Think the game is missing a good feature? Open a new issue on the": "认为游戏缺少一个好的功能？在",
    "Third Prestige Layer": "第三声望层",
    "This is definitely not scientifically accurate": "这绝对不科学准确",
    "to Irridiate": "激怒",
    "to split elements": "拆分元素",
    "Unlock Coal Generator": "解锁煤炭发电机",
    "Unlock Natural Gas Generator": "解锁天然气发电机",
    "Unlock Petroleum Generator": "解锁石油发电机",
    "Use Hotkeys [1]-[4] to purchase things": "使用快捷键 [1]-[4] 购买物品",
    "Use Hotkeys [1]-[5] to purchase things": "使用快捷键 [1]-[5] 购买物品",
    "Use Hotkeys [1]-[8] to purchase things": "使用快捷键 [1]-[8] 购买物品",
    "Used for fuel": "用于燃料",
    "VoidCloud": "虚云",
    "Welcome back gamer!": "欢迎回来游戏玩家！",
    "with the bug tag": "带有错误标签",
    "with the enhancement tag": "带有增强标签",
    "Yay! More of my bad art :D": "耶！更多我的坏艺术：D",
    "Yes I know this isn't how muons and tau leptons are made": "是的，我知道这不是制造 μ 子和 tau 轻子的方式",
    "Yes there is not that many contributors but maybe there will be more": "是的，贡献者不多，但也许会有更多",
    "Yes!": "是的！",
    "You can unlock more generators in another in game area to produce more power per second.": "您可以在游戏区域的另一个地方解锁更多发电机，以每秒产生更多电力。",
    "You need to collect all 5 to go Quantum": "你需要收集所有 5 个才能前往 量子",
    "You've now beaten the game nothing remains for you here except this click button": "你现在已经打败了游戏，除了这个点击按钮，这里什么都没有",
    "[C-4] - Crude Oil": "[C-4] - 原油",
    "[C-7] -  All life": "[C-7] - 所有生命",
    "[C-8] - Millionaire II": "[C-8] - 百万富翁 II",
    "[Cf-2] - A terrible idea": "[Cf-2] - 一个糟糕的主意",
    "[Cf-3] - You need to stop": "[Cf-3] - 你需要停下来",
    "[Cf-4] - Burning Asbestos?!?": "[Cf-4] - 燃烧石棉？！？",
    "[Cl-4] - The pool has had enough": "[Cl-4] - 游泳池受够了",
    "[Cl-5] - Not Alkaline": "[Cl-5] - 非碱性",
    "[Cl-7] - Out of Bounds Exception: Ph below 0": "[Cl-7] - 出界异常：Ph 低于 0",
    "[Co-1] - Three Mile Island": "[Co-1] - 三哩岛",
    "[Co-3] - Chernobyl": "[Co-3] - 切尔诺贝利",
    "[Co-4] - The elephants foot": "[Co-4] - 大象脚",
    "[Ele-2] - Negativity is better": "[Ele-2] - 消极情绪更好",
    "[Ele-3] - --": "[Ele-3] - -",
    "[Ele-4] - Unlimited Power": "[Ele-4] - 无限能源",
    "[F-2] - DiSulfur": "[F-2] - 二硫",
    "[F-4] - All the electrons": "[F-4] - 所有电子",
    "[F-5] - Burning Concrete": "[F-5] - 燃烧混凝土",
    "[F-6] - Disintegrated": "[F-6] - 解体",
    "[H-5] - The Hydrogen Strikes Back": "[H-5] - 氢反击",
    "[H-6] - Return of the Hydrogen": "[H-6] - 氢气的回归",
    "[H-7] - Hindenberg 2.0": "[H-7] - 兴登堡 2.0",
    "[Mu-1] - Leptons Galore": "[Mu-1] - 轻子嘉豪",
    "[Mu-3] - Its a big electron": "[Mu-3] - 它是一个大电子",
    "[Mu-4] - μμμ": "[Mu-4] - μμμ",
    "[Neu-1] - Neutrality": "[Neu-1] - 中立",
    "[Neu-3] - Charge === 0": "[Neu-3] - 电荷 === 0",
    "[Neu-4] - Little bullets": "[Neu-4] - 小子弹",
    "[O-2] - Still not air": "[O-2] - 仍然没有空气",
    "[O-4] - Still need nitrogen": "[O-4] - 仍然需要氮气",
    "[Pb-4] - Lead Paints": "[Pb-4] - 含铅涂料",
    "[Pb-5] - Mad Hatters Disease": "[Pb-5] - 疯帽子病",
    "[Pb-6] - Powder it too": "[Pb-6] - 也将其粉化",
    "[Pr-4] - Strickland Propane": "[Pr-4] - 斯特里克兰丙烷",
    "[Pro-1] - τττ": "[Pro-1] - τττ",
    "[Pro-2] - The power of positivity": "[Pro-2] - 积极的能源",
    "[Pro-3] - ++": "[Pro-3] - ++",
    "[Pro-4] - Protonus": "[Pro-4] - 质子",
    "[Pw-2] - I got the power": "[Pw-2] - 我得到了能源",
    "[Pw-4] - It never changes": "[Pw-4] - 它永远不会改变",
    "[Pw-4] - The power of the steam engine": "[Pw-4] - 蒸汽机的动力",
    "[S-2] - It just stinks more": "[S-2] - 只是更臭",
    "[S-4] - Fools Gold": "[S-4] - 愚人金",
    "[S-5] - You've been struck by you've been hit by, Sulfur": "[S-5] - 你被你击中了，硫磺",
    "[S-6] - Stanky Leg": "[S-6] - 臭腿",
    "[Sa-2] - Energizer Battery": "[Sa-2] - 劲量电池",
    "[Sa-3] - Energizer Max": "[Sa-3] - 劲量最大",
    "[Sa-4] - Energizer Pro Max": "[Sa-4] - 劲量 Pro Max",
    "[Sl-1] - Follow the iron trail": "[Sl-1] - 跟随铁道",
    "[Tau-2] - No this isn't omega layers": "[Tau-2] - 不，这不是 omega 层",
    "[Tau-3] - Its an even bigger electron": "[Tau-3] - 它是一个更大的电子",
    "[Wt-1] - Dihydrogen Monoxide": "[Wt-1] - 一氧化二氢",
    "[Wt-2] - Unlimited Power": "[Wt-2] - 无限能源",
    "DecaFluoride": "十氟化物",
    "Water": "水",
    "Chlorine Trifluoride": "三氟化氯",
    "Requires 1e8": "需要 1e8",
    "Steel": "钢",
    "Sulfuric Acid": "硫酸",
    "Total Elements": "总元素",
    "Unlock Particles": "解锁粒子",
    "Unlock Radiation": "解锁辐射",
    "Unlock The Refinery": "解锁精炼厂",
    "Are you sure you want to melt down?": "你确定要熔融吗？",
    "Increase Corium Produced on Melt": "增加熔融时产生的 堆芯熔化物",
    "This will reset all previous layers in exchange for Corium": "这将重置所有先前的层以换取 堆芯熔化物",
    "Shatter Confirmation [ON]": "粉碎器确认 [开]",
    "Shatter Confirmation [OFF]": "粉碎器确认 [关]",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Tera - 1.00e12": "Tera - 1.00e12",
    "Zetta - 1.00e21": "Zetta - 1.00e21",
    "Yotta - 1.00e24": "Yotta - 1.00e24",
    "Kilo - 1,000": "Kilo - 1,000",
    "Giga - 1.00e9": "Giga - 1.00e9",
    "Exa - 1.00e18": "Exa - 1.00e18",
    "Mega - 1.00e6": "Mega - 1.00e6",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "H": "H",
    "C-H4": "C-H4",
    "C15-H28": "C15-H28",
    "C12-H6-O": "C12-H6-O",
    "C10-H28-O2-S": "C10-H28-O2-S",
    "C-H4": "C-H4",
    "H2-S-O4": "H2-S-O4",
    "Fe-C": "Fe-C",
    "H2-O": "H2-O",
    "Cl-F3": "Cl-F3",
    "C3-H8": "C3-H8",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Current Version is v": "当前版本 v",
    "Level: ": "等级：",
    "Total:": "总计：",
    "Buy Amount": "购买数量",
    "Boost: ": "提升: ",
    "Achievements Unlocked: ": "解锁的成就：",
    "Iron  Generator (": "铁 发生器（",
    "Lead  Generator (": "铅 发生器（",
    "Hydrogen  Generator (": "氢 发生器（",
    "Oxygen  Generator (": "氧 发生器（",
    "Sulfur  Generator (": "硫 发生器（",
    "Fluorine  Generator (": "氟 发生器（",
    "Chlorine  Generator (": "氯 发生器（",
    "Carbon  Generator (": "碳 发生器（",
    "Quantum Clicks: ": "量子点击：",
    "Create +": "制造 +",
    "Corium: ": "堆芯熔化物：",
    "Increase atom production by ": "增加原子产量 ",
    "Increase Atom Production by ": "增加原子产量 ",
    "Increase Compounds Created by ": "增加由创建的化合物 ",
    "Increase power capacity by ": "增加电源容量 ",
    "Increase power production by ": "提高发电量 ",
    "Watts/s: ": "瓦特/秒: ",
    "Melt Boost:  ": "熔融 提升：",
    "Power Boost:  ": "能源 提升：",
    "Lead Boost:  ": "铅 提升：",
    "Battery Boost:  ": "电池 提升：",
    "Element Boost:  ": "元素 提升：",
    "Increase Power Capacity by ": "增加能源容量 ",
    "Increase Power Production by ": "增加能源生产 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^成本(.+)$/,
    /^燃料(.+)$/,
    /^总计(.+)$/,
    /^([\d\.]+) H\)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+) C \| ([\d\.,]+)x\)$/,
    /^([\d\.,]+) Cl \| ([\d\.,]+)x\)$/,
    /^([\d\.,]+) O \| ([\d\.,]+)x\)$/,
    /^([\d\.,]+) S \| ([\d\.,]+)x\)$/,
    /^([\d\.,]+) Pb \| ([\d\.,]+)x\)$/,
    /^([\d\.,]+) F \| ([\d\.,]+)x\)$/,
    /^([\d\.,]+) Fe \| ([\d\.,]+)x\)$/,
    /^([\d\.,]+) Cl \| ([\d\.,]+)x\)$/,
    
    /^([\d\.]+)e([\d\.,]+) C \| ([\d\.,]+)x\)$/,
    /^([\d\.]+)e([\d\.,]+) Cl \| ([\d\.,]+)x\)$/,
    /^([\d\.]+)e([\d\.,]+) O \| ([\d\.,]+)x\)$/,
    /^([\d\.]+)e([\d\.,]+) S \| ([\d\.,]+)x\)$/,
    /^([\d\.]+)e([\d\.,]+) Pb \| ([\d\.,]+)x\)$/,
    /^([\d\.]+)e([\d\.,]+) F \| ([\d\.,]+)x\)$/,
    /^([\d\.]+)e([\d\.,]+) Fe \| ([\d\.,]+)x\)$/,
    /^([\d\.]+)e([\d\.,]+) Cl \| ([\d\.,]+)x\)$/,

    /^([\d\.]+)e([\d\.,]+) C \| ([\d\.]+)e([\d\.,]+)x\)$/,
    /^([\d\.]+)e([\d\.,]+) Cl \| ([\d\.]+)e([\d\.,]+)x\)$/,
    /^([\d\.]+)e([\d\.,]+) O \| ([\d\.]+)e([\d\.,]+)x\)$/,
    /^([\d\.]+)e([\d\.,]+) S \| ([\d\.]+)e([\d\.,]+)x\)$/,
    /^([\d\.]+)e([\d\.,]+) Pb \| ([\d\.]+)e([\d\.,]+)x\)$/,
    /^([\d\.]+)e([\d\.,]+) F \| ([\d\.]+)e([\d\.,]+)x\)$/,
    /^([\d\.]+)e([\d\.,]+) Fe \| ([\d\.]+)e([\d\.,]+)x\)$/,
    /^([\d\.]+)e([\d\.,]+) Cl \| ([\d\.]+)e([\d\.,]+)x\)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) H\)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^(.+) Watts \/ (.+) Watts \| Excess: (.+) Watts$/, '$1 瓦特 \/ $2 瓦特 \| 过量: $3 瓦特'],
    [/^Melt for (.+) Corium$/, '熔融为 $1 堆芯熔化物'],
    [/^Shatter for (.+) Muon$/, '分裂为 $1 介子'],
    [/^Shatter for (.+) Muons$/, '分裂为 $1 介子'],
    [/^Shatter for (.+) Tau$/, '分裂为 $1 Tau'],
    [/^Shatter for (.+) Taus$/, '分裂为 $1 Tau'],
    [/^Split for (.+) Electrons$/, '分裂为 $1 电子'],
    [/^Split for (.+) Neutrons$/, '分裂为 $1 中子'],
    [/^Split for (.+) Taus$/, '分裂为 $1 Taus'],
    [/^Split for (.+) Protons$/, '分裂为 $1 质子'],
    [/^Generate (.+) Power$/, '产生 $1 能源'],
    [/^Create (.+) Sulfuric Acid$/, '制造 $1 硫酸'],
    [/^Create (.+) Chlorine Trifluoride$/, '制造 $1 三氟化氯'],
    [/^Create (.+) Water$/, '制造 $1 水'],
    [/^Create (.+) Propane$/, '制造 $1 丙烷'],
    [/^Create (.+) Steel$/, '制造 $1 钢'],
    [/^Buy (.+) Oxygen Generators$/, '购买 $1 氧 发生器'],
    [/^Buy (.+) Sulfur Generators$/, '购买 $1 硫 发生器'],
    [/^Buy (.+) Lead Generators$/, '购买 $1 铅 发生器'],
    [/^Buy (.+) Hydrogen Generators$/, '购买 $1 氢 发生器'],
    [/^Buy (.+) Fluorine Generators$/, '购买 $1 氟 发生器'],
    [/^Buy (.+) Chlorine Generators$/, '购买 $1 氯 发生器'],
    [/^Buy (.+) Iron Generators$/, '购买 $1 铁 发生器'],
    [/^Buy (.+) Carbon Generators$/, '购买 $1 碳 发生器'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^Total ([\d\.]+)$/, '总计 $1'],
    [/^([\d\.]+) Muons\(μ$/, '$1 介子\(μ'],
    [/^([\d\.]+) Gamma Particles$/, '$1 伽马粒子'],
    [/^([\d\.]+) Beta Particles$/, '$1 贝塔粒子'],
    [/^([\d\.]+) Alpha Particles$/, '$1 阿尔法粒子'],
    [/^([\d\.]+) Watts\/s$/, '$1 瓦特\/秒'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^\+([\d\.]+) Alpha Particles \(α\)$/, '\+$1 阿尔法粒子（α）'],
    [/^\+([\d\.]+) Beta Particles \(β\)$/, '\+$1 贝塔粒子（β）'],
    [/^\+([\d\.]+) Gamma Particles \(γ\)$/, '\+$1 伽马粒子（γ）'],
    [/^\+([\d\.]+) Neutrons$/, '\+$1 中子'],
    [/^\+([\d\.]+) Watts$/, '\+$1 瓦特'],
    [/^\+([\d\.]+) Protons$/, '\+$1 质子'],
    [/^\+([\d\.]+) Muons$/, '\+$1 介子'],
    [/^\+([\d\.]+) Power$/, '\+$1 功率'],
    [/^\+([\d\.]+) Taus$/, '\+$1 Taus'],
    [/^\+([\d\.]+) Electrons$/, '\+$1 电子'],
    [/^\+([\d\.]+) Gamma Particles$/, '\+$1 伽马粒子'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: ([\d\.]+)e([\d\.,]+)$/, '成本：$1e$2'],
    [/^Fuel: (.+) Power$/, '燃料：$1 能源'],
    [/^Fuel: (.+) Coal$/, '燃料：$1 煤'],
    [/^Fuel: (.+) Sulfuric Acid$/, '燃料：$1 硫酸'],
    [/^Fuel: (.+) Lead Gens$/, '燃料：$1 铅根'],
    [/^Fuel: (.+) Methane$/, '燃料：$1 甲烷'],
    [/^Fuel: (.+) Petroleum$/, '燃料：$1 天然气'],
    [/^Fuel: (.+) Natural Gas$/, '燃料：$1 天然气'],
    [/^Cost: (.+) Lead Gens$/, '成本：$1 铅根'],
    [/^Cost: (.+) Sulfuric Acid$/, '成本：$1 硫酸'],
    [/^Cost: (.+) Corium$/, '成本：$1 堆芯熔化物'],
    [/^Cost: (.+) Watts$/, '成本：$1 瓦特'],
    [/^Cost: (.+) Power$/, '成本：$1 能源'],
    [/^Cost: (.+) Taus$/, '成本：$1 Taus'],
    [/^Cost: (.+) Muons$/, '成本：$1 介子'],
    [/^Cost: (.+) Electrons$/, '成本：$1 电子'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Cost: (.+) Oxygen \| Level:(.+)$/, '成本：$1 氧 \| 等级：$2'],
    [/^Cost: (.+) Hydrogen \| Level:(.+)$/, '成本：$1 氢 \| 等级：$2'],
    [/^Cost: (.+) Carbon \| Level:(.+)$/, '成本：$1 碳 \| 等级：$2'],
    [/^Cost: (.+) Chlorine \| Level:(.+)$/, '成本：$1 氯 \| 等级：$2'],
    [/^Cost: (.+) Sulfur \| Level:(.+)$/, '成本：$1 硫 \| 等级：$2'],
    [/^Cost: (.+) Lead \| Level:(.+)$/, '成本：$1 铅 \| 等级：$2'],
    [/^Cost: (.+) Iron \| Level:(.+)$/, '成本：$1 铁 \| 等级：$2'],
    [/^Cost: (.+) Fluorine \| Level:(.+)$/, '成本：$1 氟 \| 等级：$2'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) Propane \+ (.+) Water$/, '要求：$1 丙烷 \+ $2 水'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);