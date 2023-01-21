import html from "html-literal";
import flag from "../../assets/images/npl.png";
export default state => html`
  <div class="countryInfo" id="nepalInfo">
    <div class="metaDataContainer">
      <img
        id="nepalInfoFlag"
        src=${flag}
        alt="The
        Flag
        of
        Nepal"
      />
      <div class="genInformationContainer">
      <p class="genInfoRegion">
          <u>${state.info.name}</u> Is Located In The Region of
          <u>${state.info.region}</u><br />
          And The Subregion of <u>${state.info.subregion}</u>
        </p>
        <p class="genInfoSubRegion"></p>
        <p class="genInfoCapitolCity">
          The Capitol of <u>${state.info.name}</u> is
          <u>${state.info.Capital}</u><br></br>
          <u>${state.info.Capital}</u> is located at<br> Lat: <u>${
  state.Weather.lat
}</u> Lon: <u>${state.Weather.lon}</u><br><br>

          Here is a look at the current weather in <br><u>${
            state.info.Capital
          }</u>: <br><br>
          The Temperature is currently: °F ${state.main.temp}<br>
          But it feels like: °F ${state.main.feels_like} <br> and
         ${state.Weather.description.map(weatherBlock)}

        <p>
          The Population of <u>${state.info.name}</u> is is approx.
          <u>${state.info.population}</u>
        </p>
        <p class="genInfoISOCodes ">
          <u>${state.info.name}'s</u> 2 Digit Alpha code is:
          <u>${state.info.Alpha2Code}</u><br />
          <u>${state.info.name}'s</u> 3 Digit Alpha code is:
          <u>${state.info.Alpha3Code}</u>
        </p>
        <p class="genInfoCurrency">
          The National Currency of ${state.info.name} Is: <br />
          The <u>${state.info.Currency[0].name}</u> Represented As:
          <u>${state.info.Currency[0].symbol}</u> &
          <u>${state.info.Currency[0].code}</u>
        </p>
        <p class="genInfoCallingCodes">
          <u>${state.info.name}'s</u> calling code is
          <u>${state.info.callingCodes}</u>
        </p>
        <p class="genInfoTimezones">
          Timezones: <u>${state.info.timezones}</u>
        </p>
      </div>

    </div>
    <div>
        <h1 class="countryNameHeader">${state.info.name}</h1>
        <h2 class="nativeName">${state.info.nativeName}</h2>
      </div>
      <section class="history topic" id="nepalHistory">
        <h3>
          History
        </h3>
<h5>
Prehistory and early history
</h5>
<p>
Nepal’s rich prehistory consists mainly of the legendary traditions of the Newar, the indigenous community of Nepal Valley (now usually called Kathmandu Valley). There are usually both Buddhist and Brahmanic Hindu versions of these various legends. Both versions are accepted indiscriminately in the festivals associated with legendary events, a tribute to the remarkable synthesis that has been achieved in Nepal between the two related but divergent value systems.<br>


References to Nepal Valley and Nepal’s lower hill areas are found in the ancient Indian classics, suggesting that the Central Himalayan hills were closely related culturally and politically to the Gangetic Plain at least 2,500 years ago. Lumbini, Gautama Buddha’s birthplace in southern Nepal, and Nepal Valley also figure prominently in Buddhist accounts. There is substantial archaeological evidence of an early Buddhist influence in Nepal, including a famous column inscribed by Ashoka (emperor of India, 3rd century BCE) at Lumbini and several shrines in the valley.<br>

A coherent dynastic history for Nepal Valley becomes possible, though with large gaps, with the rise of the Licchavi dynasty in the 4th or 5th century CE. Although the earlier Kirati dynasty had claimed the status of the Kshatriya caste of rulers and warriors, the Licchavis were probably the first ruling family in that area of plains Indian origin. This set a precedent for what became the normal pattern thereafter—Hindu kings claiming high-caste Indian origin ruling over a population much of which was neither Indo-Aryan nor Hindu.<br>

The Licchavi dynastic chronicles, supplemented by numerous stone inscriptions, are particularly full from 500 to 700 CE; a powerful, unified kingdom also emerged in Tibet during this period, and the Himalayan passes to the north of the valley were opened. Extensive cultural, trade, and political relations developed across the Himalayas, transforming the valley from a relatively remote backwater into the major intellectual and commercial centre between South Asia and Central Asia. Nepal’s contacts with China began in the mid-7th century with the exchange of several missions. But intermittent warfare between Tibet and China terminated this relationship, and, while there were briefly renewed contacts in subsequent centuries, these were reestablished on a continuing basis only in the late 18th century.
</p>
<h5>
  Middle period
</h5>
<p>
The middle period in Nepalese history is usually considered coterminous with the rule of the Malla dynasty (10th–18th century) in Nepal Valley and surrounding areas. Although most of the Licchavi kings were devout Hindus, they did not impose Brahmanic social codes or values on their non-Hindu subjects. The Mallas perceived their responsibilities differently, however, and the great Malla ruler Jaya Sthiti (reigned c. 1382–95) introduced the first legal and social code strongly influenced by contemporary Hindu principles.<br>

Jaya Sthiti’s successor, Yaksha Malla (reigned c. 1429–c. 1482), divided his kingdom among his three sons, thus creating the independent principalities of Kathmandu, Patan, and Bhaktapur (Bhadgaon) in the valley. Each of these states controlled territory in the surrounding hill areas, with particular importance attached to the trade routes northward to Tibet and southward to India that were vital to the valley’s economy. There were also numerous small principalities in the western and eastern hill areas, whose independence was sustained through a delicate balance of power based upon traditional interrelationships and, in some cases, common ancestral origins (or claims thereto) among the ruling families. By the 16th century virtually all these principalities were ruled by dynasties claiming high-caste Indian origin whose members had fled to the hills in the wake of Muslim invasions of northern India.<br>

In the early 18th century one of the principalities—Gorkha (also spelled Gurkha), ruled by the Shah family—began to assert a predominant role in the hills and even to pose a challenge to Nepal Valley. The Mallas, weakened by familial dissension and widespread social and economic discontent, were no match for the great Gorkha ruler Prithvi Narayan Shah. He conquered the valley in 1769 and moved his capital to Kathmandu shortly thereafter, providing the foundation for the modern state of Nepal.
</p>

<h5>Modern period</h5>
<p>
The Shah (or Sah) rulers faced tremendous and persistent problems in trying to centralize an area long characterized by extreme diversity and ethnic and regional parochialism. They established a centralized political system by absorbing dominant regional and local elites into the central administration at Kathmandu. This action neutralized potentially disintegrative political forces and involved them in national politics, but it also severely limited the centre’s authority in outlying areas because local administration was based upon a compromise division of responsibilities between the local elites and the central administration.<br>

From 1775 to 1951, Nepalese politics was characterized by confrontations between the royal family and several noble families. The position of the Shah dynasty was weakened by the fact that the two kings who ruled successively between 1777 and 1832 were minors when they ascended the throne. The regents and the nobility competed for political power, using the young rulers as puppets; both factions wanted a monopoly of political offices and power for their families, with their rivals exterminated, exiled to India, or placed in a subordinate status. This was achieved by the Thapa family (1806–37) and, even more extensively, by the Rana family (1846–1951). In these periods, the Shah ruler was relegated to an honorary position without power, while effective authority was concentrated in the hands of the leading members of the dominant family. Although intrafamilial arrangements on such questions as the succession and the distribution of responsibilities and spoils were achieved, no effective national political institutions were created. The excluded noble families had only two alternatives—to accept inferior posts in the administration and army or to conspire for the overthrow of the dominant family. Until 1950 and to some extent thereafter, Nepalese politics was basically conspiratorial in character, with familial loyalty taking precedence over loyalty to the crown or nation.
</p>

<h5>External relations, 1750–1950</h5>
<p>
Prithvi Narayan Shah (reigned 1742–75) and his successors established a unified state in the central Himalayas and launched an ambitious and remarkably vigorous program of expansion, seeking to bring the entire hill area, from Bhutan to Kashmir, under their authority. They made considerable progress, but successive setbacks in wars with China and Tibet (1788–92), with the Sikh kingdom in the Punjab (1809), with British India (1814–16), and again with Tibet (1854–56) frustrated Nepal and set the present boundaries of the kingdom.<br>

The British conquest of India in the 19th century posed a serious threat to Nepal—which expected to be another victim—and left the country with no real alternative but to seek an accommodation with the British to preserve its independence. This was accomplished by the Rana family regime after 1860 on terms that were mutually acceptable, if occasionally irritating, to both. Under this de facto alliance, Kathmandu permitted the recruitment of Nepalese for the highly valued Gurkha units in the British Indian Army and also accepted British “guidance” on foreign policy; in exchange, the British guaranteed the Rana regime against both foreign and domestic enemies and allowed it virtual autonomy in domestic affairs. Nepal, however, was also careful to maintain a friendly relationship with China and Tibet, both for economic reasons and to counterbalance British predominance in South Asia.<br>

The British withdrawal from India in 1947 deprived the Ranas of a vital external source of support and exposed the regime to new dangers. Anti-Rana forces, composed mainly of Nepalese residents in India who had served their political apprenticeship in the Indian nationalist movement, formed an alliance with the Nepalese royal family, led by King Tribhuvan (reigned 1911–55), and launched a revolution in November 1950. With strong diplomatic support from New Delhi, the rebels accepted a settlement with the Ranas under which the sovereignty of the crown was restored and the revolutionary forces, led by the Nepali Congress (NC) party, gained an ascendant position in the administration.
</p>
<h5>
Constitutional monarchy
</h5>
<p>
The introduction of a democratic political system in Nepal, a country accustomed to autocracy and with no deep democratic tradition or experience, proved a formidable task. A constitution was finally approved in 1959, under which general elections for a national assembly were held. The NC won an overwhelming victory and was entrusted with the formation of Nepal’s first popular government. But persistent controversy between the cabinet and King Mahendra (reigned 1955–72) led the king to dismiss the Nepali Congress government in December 1960 and to imprison most of the party’s leaders. The constitution of 1959 was abolished in 1962, and a new constitution was promulgated that established the crown as the real source of authority. King Mahendra obtained both Indian and Chinese acceptance of his regime, and the internal opposition was weak, disorganized, and discouraged. Mahendra died in January 1972 and was succeeded by his son Birendra, who was crowned in 1975.<br>

Throughout the 1970s King Birendra sought to expedite economic development programs while maintaining the “nonparty” political system established by his father. The results were disappointing on both accounts, and by 1979 a systemic crisis was evident. To meet the first serious political challenge to the monarchy since 1960, King Birendra announced in May 1979 that a national referendum would be held to decide between a nonparty and multiparty (by implication, parliamentary) political system. In the referendum, which was held in May 1980, the political groups supporting the existing nonparty system won by the relatively small margin of 55 percent, accurately reflecting the sharp differences in the country on basic political issues.<br>

It was in this context that King Birendra decided in 1980 to retain the 1962 constitution but to liberalize the political system by providing for direct popular election of the National Assembly. The government also permitted the “illegal” political parties, such as the NC, to function under only minimal constraints. Elections were still formally held on a “partyless” basis, but many candidates ran informally and openly as members of political parties.<br>

This partial movement toward a democratic parliamentary system satisfied neither the supporters of a multiparty constitutional monarchy nor several more radical leftist factions, and in February 1990 a coalition of centrist and leftist opposition forces began a campaign demanding basic political reforms. A series of protests and strikes followed nationwide, and the royal government’s efforts to suppress the movement with force were ineffectual. In April, as the situation in Kathmandu Valley worsened, King Birendra lifted the ban on political parties, abrogated the more repressive security ordinances, and on April 16 appointed a coalition interim government headed by the president of the NC, Krishna Prasad Bhattarai, but also including the moderate faction of the communist movement, the United Leftist Front.<br>

The policy objectives of the interim government were “to maintain law and order, develop a multiparty system on the basis of constitutional monarchy, draft a new constitution, and hold general elections” to a parliament. Within a year, all four tasks were accomplished with remarkable success despite the broad divergence of views among the major political organizations. A draft of the new constitution, prepared by a broadly representative government commission, was submitted to the palace and the cabinet on September 10, 1990. In November, following two months of vigorous debate on a number of key issues—including the role of the king, the development of a secular state, emergency powers, and the status of Nepal’s many languages—an amended version of the constitution was promulgated by King Birendra that provided for both a constitutional monarchy and a multiparty parliamentary political system.<br>

General elections held on May 12, 1991, gave the NC a majority in parliament (110 of 205 seats), but the moderate Communist Party of Nepal (Unified Marxist-Leninist)—CPN (UML)—with 69 seats, emerged as a strong opposition party. The two “Pancha” parties usually associated with the old system won only four seats. The elections were thus perceived to constitute a strong endorsement of the 1990 political changes, and G.P. Koirala, the brother of Nepal’s first elected prime minister (1959–60), was nominated by the NC and appointed by the king to head the new elected government.<br>

Nepal emerged from this period of rapid political change facing a multitude of economic and social problems; among these were a stagnant economy and a variety of regional ethnic and religious movements, some of whose basic demands were not acceptable to the country’s Hindu majority. Although overwhelming support existed for the new democratic constitutional monarchy system, at both the party and the public level, the democratic movement itself remained badly fractionalized and antagonistic, making more difficult the new government’s attempt to introduce the kind of hard-hitting economic and social policies the panchayat governments had carefully avoided in an effort to mollify several small but important interest groups.<br>

</p>
<h5>
Fall of the monarchy
</h5>
<p>
The country’s political life in the 1990s and 2000s was marked by prolonged instability as the monarchy, the NC, and Maoists jostled for power. Throughout those two decades the government remained largely in the hands of the NC with brief periods of CPN (UML) control. However, the NC’s leadership squabbled frequently, and the premiership alternated between Bhattarai, Koirala, and Sher Bahadur Deuba, another prominent member of the NC. Meanwhile, a group of Maoist rebels emerged in the 1990s and rapidly grew in number and strength and established their own breakaway party, the Communist Party of Nepal (Maoist), or CPN (M). The rebels often used violent tactics to champion the cause of the rural poor and advocated overthrowing the monarchy. By the early 21st century the Maoists not only posed a serious threat to the government but had virtually propelled the country into a state of civil war.<br>

The killing in 2001 of the king and most members of the royal family by the crown prince (who also died, from self-inflicted wounds) further heightened tensions, and, after the massacre, Koirala, who was serving his third term as prime minister, was forced to resign. Deuba, who replaced Koirala, initially held negotiations with the CPN (M) to end the war, but, after peace talks broke down months later, he enlisted the help of the United States to suppress the Maoists. The new king, Birendra’s brother Gyanendra, took an active role in defending the monarchy, meanwhile, including imposing direct rule in 2005. After parliament was reinstated in April 2006, Koirala became prime minister for the fourth time. Later that year the government of Nepal and the Maoist insurgency signed a UN-mediated peace accord that provided for temporary representation of the Maoists in the Council of Ministers, restricted the rebel army to camps, and required both the Maoists and the Nepalese army to lock equal amounts of their arms in UN-monitored containers.<br>

An interim constitution, which transferred all executive power to the prime minister, was to remain in effect until the weapons management plan had been completed, elections had been held, and a permanent constitution had been drafted to replace the 1990 document. The extent of the duties of the king as head of state was to be determined by an elected constituent assembly, which would also draft a new constitution. Elections for the assembly, originally scheduled for June 2007, were postponed several times, notably after the Maoists pulled out of the government, demanding the immediate dissolution of the monarchy. In December 2007 it was finally agreed that the monarchy would be abolished, and elections were held in April 2008. The Maoists—who changed their party name to the Unified Communist Party of Nepal (Maoist), or UCPN (M), in 2009—won the most seats, and on May 28, 2008, more than two centuries of royal rule came to an end as the new assembly voted to declare Nepal a democratic republic.<br>

In July 2008 Ram Baran Yadav of the NC was elected by the assembly as the country’s first president. One month later an election for prime minister was held in parliament. Maoist leader Pushpa Kamal Dahal, popularly known as Prachanda, won by a wide margin and formed a coalition government. However, the coalition failed in early May 2009, and Prachanda resigned. Madhav Kumar Nepal of the CPN (UML) became prime minister later that month at the head of a 22-party coalition. The change did little to resolve the country’s ongoing political deadlock, particularly the drafting of a new constitution. In June 2010 Prime Minister Nepal resigned under pressure from the UCPN (M), which claimed the right, as the largest political party, to choose the prime minister.<br>

Parliament, however, could not agree on Nepal’s replacement, and he remained in office until fellow CPN (UML), Jhalanath Khanal, took over in February 2011. By August, Khanal’s government had collapsed, and the UCPN (M)’s Baburam Bhattarai had assumed the office. Negotiations in the assembly on a new constitution fared no better under Bhattarai, and in May 2012 the assembly was dissolved, and members of the government resigned. Bhattarai stayed on as caretaker prime minister until March 2013, when President Yadav appointed Khil Raj Regmi, chief justice of the country’s Supreme Court, as prime minister until elections could be held.<br>

Parliamentary elections took place in November, with the NC gaining the largest number of seats and the CPN (UML) second. The two parties discussed forming a coalition government for several months, which finally took office in February 2014. Sushil Koirala of the NC, a cousin of B.P. and G.P. Koirala, was named prime minister. After only two months in power, the Koirala administration had to deal with an avalanche on Mount Everest in mid-April that killed 16 sherpas, shut down the climbing season on the mountain, and sparked widespread protest by the families of those killed, who considered their treatment by the government inadequate. More disasters followed—a landslide in early August in which 156 people died, floods later that month that killed 102 more, and a freak snowstorm in the Annapurna region in October that killed several dozen trekkers—and in each case the government was criticized for its poor response to the crises.<br>

Those events, however, paled in comparison with the catastrophe that struck Nepal on April 25, 2015, when the country suffered one of the most-severe earthquakes in its history. A magnitude-7.8 temblor struck some 50 miles (80 km) northwest of Kathmandu, causing widespread death and destruction. Initial estimates of hundreds of people killed by the temblor soon escalated to the thousands—with many thousands more injured—as debris was cleared in Kathmandu and other cities and rescue workers reached remote towns and villages. Damage to buildings and infrastructure was widespread, and many of the country’s historic structures in the Kathmandu Valley that had been included in a UNESCO World Heritage site (designated 1979) were destroyed or severely damaged. In addition, the quake triggered avalanches on Mount Everest that descended on hundreds of people on the mountain for the spring climbing season, killing 19 people—thus surpassing the death toll from the 2014 avalanche—and injuring dozens more. Numerous aftershocks followed the initial quake, including a severe magnitude-7.3 temblor on May 12 centred near the Tibet border west of Everest. In all, some 9,000 people were killed and nearly 16,800 more injured in the two quakes.
</p>

<h5>Federal republic</h5>
<p>
The ongoing humanitarian crisis in the country in 2015 helped spur negotiations on the new constitution. In mid-September parliament finally approved the document, which took effect on September 20 and established Nepal as a secular federal-style republic. Promulgation of the constitution elicited violent protests by some minority groups, especially Madhesis in the southern part of the country, whose members claimed that their rights were not being adequately protected. In mid-October parliament elected Khadga Prasad Sharma Oli as prime minister, succeeding Koirala, and at the end of the month the legislators chose a woman, Bidhya Devi Bhandari, as the country’s new president. Oli resigned in July 2016, after his government coalition collapsed and before he was to face a confidence vote. Prachanda replaced him after striking a power-sharing deal with the NC. In May 2017 Prachanda resigned so that Deuba could take on the premiership until parliamentary elections could be held.<br>

The year 2017 was marked by Nepal’s first successful set of elections nationwide in two decades. Elections for more than 750 local councils were held across the nation beginning in May, with a turnout of nearly three-fourths of eligible voters. National elections were held later in the year, and results showed a resounding victory for a communist coalition backed by both Oli and Prachanda. After the two former prime ministers reached a power-sharing agreement, their two parties, CPN (UML) and UCPN (M) respectively, merged into a single party in May 2018: the Nepal Communist Party (NCP).<br>

Under the power-sharing agreement, Oli became prime minister with the expectation that Prachanda would take over the post halfway through the five-year term. In November 2019 a new agreement, intended to address a dispute over the implementation of the original agreement, made Prachanda the executive chairman of the NCP and allowed Oli to finish out the full term as prime minister. Prachanda claimed that this new agreement was also improperly implemented, and he insisted that Oli observe the original agreement by relinquishing the office of prime minister halfway through his term. Oli refused, and in December 2020 he recommended that the president dissolve parliament and call early elections, a move ruled unconstitutional in February 2021 because no attempt was made to form a new government. Parliament was reinstated in March, and in May Oli lost a vote of confidence. After weeks of deliberation on the formation of a new government, Oli claimed that a new government could not be formed, and again he recommended that the president dissolve parliament and call early elections. In July, however, the dissolution was rejected by the Supreme Court, which ruled that Deuba, then leader of the opposition, should be given the opportunity to form a government.<br>

The most lively debates in the following year centred on parliament’s ratification of a 2017 compact with the Millennial Challenge Corporation (MCC), a foreign assistance program established by the United States Congress in 2004. With the compact due to expire in February 2022 without ratification, parliament was under pressure to approve the agreement despite significant opposition domestically. After years in the fray between the hegemonic ambitions of India and China, as well as decades of distrust in the United States in particular, many Nepalis were wary of their government granting contracts for U.S. investment. The compact was ratified in February 2022 nonetheless. Parliament passed a declaration emphasizing its interpretation of the agreement as limited by Nepali sovereignty, although that declaration alone could not placate the people’s concerns.<br>
When local elections were held in May 2022, voters registered their distrust in the political establishment. Although the ruling coalition received the greatest number of electoral victories, the success of independent candidates in major races indicated frustration with the country’s major political players.
</p>
      </section>
      <section class="currentEvents topic" id="nepalCurrentEvents">
        <h3>Headlines About ${state.info.name}</h3>
        <p>${state.news.data.map(newsCard)}</p>
      </section>

  </div>
`;
const newsCard = data =>
  html`
    <h1>
      ${data.title}
    </h1>
    <a href="${data.url}">Click Here To Learn More</a>
  `;
const weatherBlock = weather =>
  html`
    <u>${weather.description}</u>
  `;
