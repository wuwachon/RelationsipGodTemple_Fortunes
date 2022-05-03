const offerings = document.querySelector(".offerings");
const offeringTable = document.querySelector(".offering-table");
const tableTop = document.querySelectorAll(".table-top");
const godTemple = document.querySelector(".god-temple");
const fortuneText = document.querySelector("#fortune-text");
const divinationResult = document.querySelector("#divination-result-img");
const offeringListNumber = 5;
const eachTableOfferingNum = 2;

const database = {
  fortuneSticks: [
    {
      number: 1,
      fortune: "楊柳遇春時，残花發舊枝，,重重霜雪裡，黄金色更輝。"
    },
    {
      number: 2,
      fortune: "愁惱損忠良，青宵一炷香，,雖然防小過，閑慮覺時長。"
    },
    {
      number: 3,
      fortune: "登舟待便風，月色暗朦朧，,欲輾香輪去，高山千万重。"
    },
    {
      number: 4,
      fortune: "舊用多成破，新更始見財，,改求雲外望，枯木遭春開。"
    },
    {
      number: 5,
      fortune: "有祿興家業，文華達帝都，,雲中乗好箭，兼得貴人扶。"
    },
    {
      number: 6,
      fortune: "累有興雲志，君恩祿未封，,若逢侯手印，好事始總總。"
    },
    {
      number: 7,
      fortune: "手把大陽輝，東君發舊枝，,稼苗方欲秀，猶更上雲梯。"
    },
    {
      number: 8,
      fortune: "玉石未分時，憂心轉更悲，,前途通大道，花發應殘。"
    },
    {
      number: 9,
      fortune: "年乖數亦孤，久病未能蘇，,岸危舟未發，龍臥失明珠。"
    },
    {
      number: 10,
      fortune: "破改重成望，前途喜亦寧，,貴人相助處，祿馬照前程。"
    },
    {
      number: 11,
      fortune: "月出漸分明，家財每每興，,何言先有滯，更變立功名。"
    },
    {
      number: 12,
      fortune: "洗出經年否，光華得再清，,所求終吉利，重日照前程。"
    },
    {
      number: 13,
      fortune: "漸漸濃雲散，看看月再明，,逢春華菓秀，雨過竹重青。"
    },
    {
      number: 14,
      fortune: "紅雲隨步起，一箭中青霄，,鹿行千里遠，爭知去路遙。"
    },
    {
      number: 15,
      fortune: "三女莫相逢，盟言說未通，,門裡心肝掛，縞素子重重。"
    },
    {
      number: 16,
      fortune: "枯木逢春生，前途必利亨，,亦得佳人箭，乘車祿自行。"
    },
    {
      number: 17,
      fortune: "將軍有異聲，進兵萬里程，,爭知臨敵處，道勝却虛名。"
    },
    {
      number: 18,
      fortune: "望祿應重山，花紅喜悅顏，,舉頭看皎月，漸出黑雲間。"
    },
    {
      number: 19,
      fortune: "意速無船渡，波深必誤身，,切須回舊路，方可免災迍。"
    },
    {
      number: 20,
      fortune: "枯木逢春艷，芳菲再發林，,雲間方見月，前遇貴人欽。"
    },
    {
      number: 21,
      fortune: "臘木春將至，芳菲喜再新，,鯤鯨興巨浪，舉鉤祿為真。"
    },
    {
      number: 22,
      fortune: "月桂將相滿，追鹿映山溪，,貴人乘遠箭，好事始相宜。"
    },
    {
      number: 23,
      fortune: "雲散月重明，天書得誌誠，,雖然多阻滯，花發再重榮。"
    },
    {
      number: 24,
      fortune: "何故生荊棘，佳人意漸疏，,久困重輪下，黃金未出渠。"
    },
    {
      number: 25,
      fortune: "異夢生英傑，前來事可疑，,芳菲春日暖，依舊發殘枝。"
    },
    {
      number: 26,
      fortune: "久暗漸分明，登江綠水澄，,芝書從遠降，終得異人成。"
    },
    {
      number: 27,
      fortune:
        "日出便見風雲散，光明清淨照世間，,一向前途通大道，萬事清吉保平安。"
    },
    {
      number: 28,
      fortune:
        "勸君把定心莫虛，天註衣祿自有餘，,和合重重常吉慶，時來終遇得明珠。"
    },
    {
      number: 29,
      fortune:
        "只恐前途命有變，勸君作急可宜先，,且守長江無大事，命逢太白守身邊。"
    },
    {
      number: 30,
      fortune:
        "靈雞漸漸見分明，凡事且看子丑寅，,雲開月出照天下，郎君即便見太平。"
    },
    {
      number: 31,
      fortune:
        "久旱喜獲甘霖降，他鄉猶可遇故知，,洞房喜慶花燭夜，金榜高掛題名時。"
    },
    {
      number: 32,
      fortune:
        "稻禾滿穗結成完，此事必能兩相全，,不須煩惱寬心坐，花開富貴月亦圓。"
    },
    {
      number: 33,
      fortune:
        "雙棲雙飛比翼鳥，互盤互依連理枝，,修得福份皆俱足，神賜姻緣成眷屬。"
    },
    {
      number: 34,
      fortune:
        "關關睢鳩在河洲，窈窕淑女君好逑，,兩情相悅紅線繫，佳偶天成共此生。"
    },
    {
      number: 35,
      fortune:
        "雲開月出正分明，不須進退向前程，,姻緣皆由天註定，和合清吉萬事成。"
    },
    {
      number: 36,
      fortune:
        "前世結下好姻緣，今生相逢赤線連，,多福多子並多壽，一門嘉慶此為先。"
    },
    {
      number: 37,
      fortune:
        "花開今已結成果，富貴榮華終擁有，,姻緣和合無須慮，萬事清吉莫煩憂。"
    },
    {
      number: 38,
      fortune:
        "有意栽花花不開，無心插柳柳成蔭，,鸞鳳和鳴姻緣至，鴛鴦情懷總是詩。"
    },
    {
      number: 39,
      fortune:
        "夫婦有意兩相謀，綢繆未合反成愁，,萬事逢春皆大吉，姻緣註定不須求。"
    },
    {
      number: 40,
      fortune:
        "自古路遙知馬力，鐵杵磨針莫心急，,但得良辰吉日到，鑼鼓喧天賀聲連。"
    },
    {
      number: 41,
      fortune:
        "太公家業八十成，月出光輝四海明，,命內自然逢大吉，茅屋中間百事亨。"
    },
    {
      number: 42,
      fortune:
        "日出東方風雲散，七彩毫光照大千，,陰霾退去春光現，嶺上冰雪不復見。"
    },
    {
      number: 43,
      fortune:
        "前世修得好緣因，一笑相逢情自親，,不分軒輊無高下，誰會在意富與貧。"
    },
    {
      number: 44,
      fortune:
        "天邊消息實難問，切莫私心強望求，,若把石頭磨成鏡，枉費精神一時休。"
    },
    {
      number: 45,
      fortune:
        "姻緣本由天註定，心亂如麻誤君期，,何不回頭走舊路，雲開天清自分明。"
    },
    {
      number: 46,
      fortune:
        "鴛鴦成對有似無，曲折心境向前途，,山窮水盡疑無路，柳暗花明又一村。"
    },
    {
      number: 47,
      fortune:
        "秋景蕭瑟夕陽斜，孤鶩獨鳴無伴陪，,冷冽江水東流去，只見一魚自悠游。"
    },
    {
      number: 48,
      fortune:
        "月夜寒水浸樓臺，花影移動費疑猜，,滿心雀躍翹首望，終是未見伊人來。"
    },
    {
      number: 49,
      fortune:
        "東邊月上正蟬娟，頃刻雲遮月半邊，,莫道圓時還又缺，須叫缺處復重圓。"
    },
    {
      number: 50,
      fortune:
        "他思已窮恨不窮，嬌鸞雛鳳失雌雄，,明鏡蒙塵污處多，若要復明需重磨。"
    },
    {
      number: 51,
      fortune:
        "皎月映水明又圓，春花綻放姿態千，,誰知驟雨狂風後，月缺花殘起波瀾。"
    },
    {
      number: 52,
      fortune:
        "欲求姻緣未得意，只恐命中有交加，,兩家必定防損失，勸汝且退莫咨嗟。"
    },
    {
      number: 53,
      fortune:
        "梅花映雪正紛飛，漁翁海上皺雙眉，,夜靜水寒魚不餌，滿船空載明月歸。"
    },
    {
      number: 54,
      fortune:
        "朝朝暮暮恰如蜂，飛到西來飛到東，,春末花殘無覓處，此身不戀舊花叢。"
    },
    {
      number: 55,
      fortune:
        "千里姻緣一線牽，月老樂成好姻緣，,琴瑟和鳴譜愛樂，永結同心到永遠。"
    },
    {
      number: 56,
      fortune:
        "嗟汝向來未得時，爾今月老來恩賜，,姻緣和合皆如意，魚水之歡誕貴兒。"
    },
    {
      number: 57,
      fortune:
        "今生滄海難為水，除卻巫山不是雲，,取次花叢難回顧，唯汝吾願伴一生。"
    },
    {
      number: 58,
      fortune:
        "君爾何須問聖跡，自己心中皆有益，,于今且待明月照，凶事脫出化成吉。"
    },
    {
      number: 59,
      fortune:
        "勸君把定心莫虛，意志堅定勿懷疑，,到底中間無大事，神佛庇佑得安寧。"
    },
    {
      number: 60,
      fortune:
        "清閑無事靜處坐，饑時吃飯睏時臥，,放下身心不用愁，必定不遭殃與禍。"
    },
    {
      number: 61,
      fortune:
        "勸君莫惜金縷衣，勸君惜取少年時，,有花堪折直須折，莫待無花空折枝。"
    },
    {
      number: 62,
      fortune:
        "命犯孤辰只合休，鴛鴦兩下遂溪流，,枯楊豈肯重生葉，風雨飄零空自愁。"
    },
    {
      number: 63,
      fortune:
        "勸君把定心莫虛，天註姻緣自有餘，,和合重重常吉慶，時來終遇得名珠。"
    },
    {
      number: 64,
      fortune:
        "春天枝頭齊爭豔，綠葉紅花意綿綿，,鴛鴦成對喜鵲至，夙世婚姻不須媒。"
    },
    {
      number: 65,
      fortune:
        "雖具緣份終未穩，一炷清香達天庭，,望得貴人多扶助，正果方能早修成。"
    },
    {
      number: 66,
      fortune:
        "牛郎織女本天仙，阻隔銀河路杳然，,百年富貴風中燭，一旦榮華夢裡仙。"
    },
    {
      number: 67,
      fortune:
        "兩家門戶各相當，非是姻緣莫較量，,直待春風好消息，再調琴瑟向蘭房。"
    },
    {
      number: 68,
      fortune:
        "葉落枝枯莫煩惱，冬盡陽明春色好，,若得神助陰轉晴，喜上眉梢樂陶陶。"
    },
    {
      number: 69,
      fortune:
        "不須作福不須求，用盡心機總未休，,猶如行船陷險灘，亦似搭梯上雲端。"
    },
    {
      number: 70,
      fortune:
        "欲去長江水闊茫，行船把定未遭風，,戶內用心再作福，看看魚水得相逢。"
    },
    {
      number: 71,
      fortune: "何如？子曰：可也！"
    },
    {
      number: 72,
      fortune: "踏破鐵鞋無覓處，得來全不費工夫。"
    },
    {
      number: 73,
      fortune: "求則得之，舍則失之。"
    },
    {
      number: 74,
      fortune: "良人者，所仰望必終身者也,今若此。"
    },
    {
      number: 75,
      fortune: "五百英雄都在此，不知誰是狀元郎？"
    },
    {
      number: 76,
      fortune: "故好而知其惡，惡而知其美也。"
    },
    {
      number: 77,
      fortune: "不知其人，視其友。"
    },
    {
      number: 78,
      fortune: "兩情若是長久時，又豈在朝朝暮暮。"
    },
    {
      number: 79,
      fortune: "你往事已沉，我只言至今。"
    },
    {
      number: 80,
      fortune: "花好，月圓，人壽。"
    }
  ],
  divinationBlocks: [
    {
      title: "聖茭",
      image: "https://img.onl/eoNiu"
    },
    {
      title: "笑茭",
      image: "https://img.onl/py3uKe"
    },
    {
      title: "沒茭",
      image: "https://img.onl/wdjtI1"
    }
  ],
  offerings: [
    {
      id: 1,
      title: "花花",
      image: "https://img.onl/5WYVRn",
      point: 1
    },
    {
      id: 2,
      title: "礦泉水",
      image: "https://img.onl/hI2Mco",
      point: 0
    },
    {
      id: 3,
      title: "茶",
      image: "https://img.onl/Sbp5G4",
      point: 0
    },
    {
      id: 4,
      title: "鳳梨",
      image: "https://img.onl/cbaY92",
      point: 0
    },
    {
      id: 5,
      title: "香蕉",
      image: "https://img.onl/5dHjB",
      point: 0
    },
    {
      id: 6,
      title: "蔥",
      image: "https://img.onl/VWeaIp",
      point: 0
    },
    {
      id: 7,
      title: "鐵鎚",
      image: "https://img.onl/68vV97",
      point: -4
    },
    {
      id: 8,
      title: "粽子",
      image: "https://img.onl/75jefK",
      point: 0
    },
    {
      id: 9,
      title: "紅龜粿",
      image: "https://img.onl/x2yB6z",
      point: 0
    },
    {
      id: 10,
      title: "糖果",
      image: "https://img.onl/HKnsz",
      point: 2
    },
    {
      id: 11,
      title: "巧克力",
      image: "https://img.onl/GVQTJa",
      point: 2
    },
    {
      id: 12,
      title: "化妝品",
      image: "https://img.onl/7wzs6T",
      point: -1
    },
    {
      id: 13,
      title: "雨傘",
      image: "https://img.onl/U2mCHw",
      point: -10
    },
    {
      id: 14,
      title: "紅棗",
      image: "https://img.onl/TMdBRQ",
      point: 1
    },
    {
      id: 15,
      title: "紅線",
      image: "https://img.onl/bk6auC",
      point: 1
    },
    {
      id: 16,
      title: "桂圓",
      image: "https://img.onl/jEGzgd",
      point: 1
    },
    {
      id: 17,
      title: "湯圓",
      image: "https://img.onl/7TpeVy",
      point: 1
    },
    {
      id: 18,
      title: "圓錢",
      image: "https://img.onl/OR5q8t",
      point: 1
    },
    {
      id: 19,
      title: "珍珠奶茶",
      image: "https://img.onl/LVTdaB",
      point: 2
    },
    {
      id: 20,
      title: "蛋糕",
      image: "https://img.onl/occZeX",
      point: 2
    }
  ]
};
// functions
// random 籤詩產生
function renderRandomFortune(data) {
  const index = Math.floor(Math.random() * data.length);
  const Fortune = data[index].fortune.split(",");
  let rawHTML = "";
  for (let line of Fortune) {
    rawHTML += `
    <li>${line}</li>
    `;
  }
  fortuneText.innerHTML = rawHTML;
}
// 擲茭結果
function renderDivinationResult(data, weight) {
  const brPoint_1 = weight;
  const brPoint_2 = 100 - (100 - weight) / 2;
  const randomNum = Math.ceil(Math.random() * 100);
  switch (true) {
    case randomNum < brPoint_1:
      divinationResult.src = data[0].image;
      break;
    case randomNum > brPoint_2:
      divinationResult.src = data[2].image;
      break;
    default:
      divinationResult.src = data[1].image;
      break;
  }
}
// 擲茭權重計算
function calculateWeight() {
  let score = 0;
  for (let each of tableTop) {
    if (each.children.length > 0) {
      for (let offering of each.children) {
        score += Number(offering.dataset.point);
      }
    }
  }
  switch (true) {
    case score < 0:
      score = 0;
      break;
    case score > 8:
      score = 80;
      break;
    default:
      score = score * 10;
      break;
  }
  return score;
}
console.log(calculateWeight());
// 產生random供品list
function renderRondomOfferings(data, offeringNum) {
  const indexs = [...Array(data.length).keys()];
  const offeringList = [];
  fisherYatesShuffle(indexs);
  for (let value of indexs.slice(0, offeringNum)) {
    offeringList.push(data[value]);
  }
  let rawHTML = "";
  for (let offering of offeringList) {
    rawHTML += `
    <img src="${offering.image}" alt="${offering.title}" class="offering ms-3" id="offering-${offering.id}" data-point="${offering.point}" draggable="true" ondragstart="drag(event)">
    `;
  }
  offerings.children[1].innerHTML = rawHTML;
}
// 引用 Fisher Yates Shuffle洗牌function
function fisherYatesShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); //random index
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
  }
}
// 供品移動
// 抓
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
// 經過
function allowDrag(event) {
  event.preventDefault();
}
// 放下
function drop(event) {
  event.preventDefault();
  const target = event.target;
  if (target.childElementCount < eachTableOfferingNum) {
    const item = document.querySelector(
      "#" + event.dataTransfer.getData("text")
    );
    target.append(item);
  }
}
// 清理供品
function removeOfferings() {
  tableTop.forEach((area) => (area.innerHTML = ""));
  offerings.children[1].innerHTML = "";
}

// 各種事件
// 月老家事件
godTemple.addEventListener("click", function (event) {
  const target = event.target;
  if (target.id === "fortune-stick") {
    renderRandomFortune(database.fortuneSticks);
  } else if (target.id === "divination-blocks") {
    renderDivinationResult(database.divinationBlocks, calculateWeight());
  }
});
// 供品事件
// 清理供品
offeringTable.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    removeOfferings();
  }
});
// 產生供品
offerings.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    renderRondomOfferings(database.offerings, offeringListNumber);
  }
});
