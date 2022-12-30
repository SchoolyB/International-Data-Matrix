import html from "html-literal";
import flag from "../../assets/images/usa.png";
export default state => html`
  <div class="countryInfo" id="usaInfo">
    <div class="metaDataContainer">
      <img
        class="longCountryInfoFlag"
        id="usaInfoFlag"
        src=${flag}
        alt="The
        Flag
        of
        USA"
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
      <section class="history topic" id="usaHistory">
        <h3>
          History
        </h3>
<p>
The territory represented by the continental United States had, of course, been discovered, perhaps several times, before the voyages of Christopher Columbus. When Columbus arrived, he found the New World inhabited by peoples who in all likelihood had originally come from the continent of Asia. Probably these first inhabitants had arrived 20,000 to 35,000 years before in a series of migrations from Asia to North America by way of the Bering Strait. By the time the first Europeans appeared, Indigenous people (commonly referred to as Indians) had spread and occupied all portions of the New World.<br>

The foods and other resources available in each physiographic region largely determined the type of culture prevailing there. Fish and sea mammals, for example, contributed the bulk of the food supply of coastal peoples, although the acorn was a staple for California Indians; plant life and wild game (especially the American bison, or buffalo) were sources for the Plains Indians; and small-game hunting and fishing (depending again on local resources) provided for Midwestern and Eastern American Indian groups. These foods were supplemented by corn (maize), which was a staple food for the Indians of the Southwest. The procurement of these foods called for the employment of fishing, hunting, plant and berry gathering, and farming techniques, the application of which depended, in turn, upon the food resources utilized in given areas.<br>

Foods and other raw materials likewise conditioned the material culture of the respective regional groups. All Indians transported goods by human carrier; the use of dogs to pull sleds or travois was widespread; and rafts, boats, and canoes were used where water facilities were available. The horse, imported by the Spanish in the early 16th century, was quickly adopted by the Indians once it had made its appearance. Notably, it came to be used widely by the buffalo-hunting Indians of the Great Plains.<br>

American Indian culture groups were distinguished, among other ways, by house types. Dome-shaped ice houses (igloos) were developed by the Eskimos (called Inuit in Canada) in what would become Alaska; rectangular plank houses were produced by the Northwest Coast Indians; earth and skin lodges and tepees, by plains and prairie tribes; flat-roofed and often multistoried houses, by some of the Pueblo Indians of the Southwest; and barrel houses, by the Northeast Indians. Clothing, or the lack of it, likewise varied with native groups, as did crafts, weapons, and tribal economic, social, and religious customs.<br>

At the time of Columbus’s arrival there were probably roughly 1.5 million American Indians in what is now the continental United States, although estimates vary greatly. In order to assess the role and the impact of the American Indian upon the subsequent history of the United States in any meaningful way, one must understand the differentiating factors between Native American peoples, such as those mentioned above. Generally speaking, it may be said, however, that the American Indians as a whole exercised an important influence upon the civilization transplanted from Europe to the New World. Indian foods and herbs, articles of manufacture, methods of raising some crops, war techniques, words, a rich folklore, and ethnic infusions are among the more obvious general contributions of the Indians to their European conquerors. The protracted and brutal westward-moving conflict caused by “white” expansionism and Indian resistance constitutes one of the most tragic chapters in the history of the United States.
</p>

<h4>Colonial America to 1763</h4>
<h5>The European background</h5>
<p>
The English colonization of North America was but one chapter in the larger story of European expansion throughout the globe. The Portuguese, beginning with a voyage to Porto Santo off the coast of West Africa in 1418, were the first Europeans to promote overseas exploration and colonization. By 1487 the Portuguese had traveled all the way to the southern tip of Africa, establishing trading stations at Arguin, Sierra Leone, and El Mina. In 1497 Vasco da Gama rounded the Cape of Good Hope and sailed up the eastern coast of Africa, laying the groundwork for Portugal’s later commercial control of India. By 1500, when Pedro Álvares Cabral stumbled across the coast of Brazil en route to India, Portuguese influence had expanded to the New World as well.<br>

Though initially lagging behind the Portuguese in the arts of navigation and exploration, the Spanish quickly closed that gap in the decades following Columbus’s voyages to America. First in the Caribbean and then in spectacular conquests of New Spain and Peru, they captured the imagination, and the envy, of the European world.<br>

France, occupied with wars in Europe to preserve its own territorial integrity, was not able to devote as much time or effort to overseas expansion as did Spain and Portugal. Beginning in the early 16th century, however, French fishermen established an outpost in Newfoundland, and in 1534 Jacques Cartier began exploring the Gulf of St. Lawrence. By 1543 the French had ceased their efforts to colonize the northeast portion of the New World. In the last half of the 16th century, France attempted to found colonies in Florida and Brazil, but each of these efforts failed, and by the end of the century Spain and Portugal remained the only two European nations to have established successful colonies in America.<br>

The English, although eager to duplicate the Spanish and Portuguese successes, nevertheless lagged far behind in their colonization efforts. The English possessed a theoretical claim to the North American mainland by dint of the 1497 voyage of John Cabot off the coast of Nova Scotia, but in fact they had neither the means nor the desire to back up that claim during the 16th century. Thus it was that England relied instead on private trading companies, which were interested principally in commercial rather than territorial expansion, to defend its interests in the expanding European world. The first of these commercial ventures began with the formation of the Muscovy Company in 1554. In 1576–78 the English mariner Martin Frobisher undertook three voyages in search of a Northwest Passage to the Far East. In 1577 Sir Francis Drake made his famous voyage around the world, plundering the western coast of South America en route. A year later Sir Humphrey Gilbert, one of the most dedicated of Elizabethan imperialists, began a series of ventures aimed at establishing permanent colonies in North America. All his efforts met with what was, at best, limited success. Finally, in September 1583, Gilbert, with five vessels and 260 men, disappeared in the North Atlantic. With the failure of Gilbert’s voyage, the English turned to a new man, Sir Walter Raleigh, and a new strategy—a southern rather than a northern route to North America—to advance England’s fortunes in the New World. Although Raleigh’s efforts to found a permanent colony off the coast of Virginia did finally fail with the mysterious destruction of the Roanoke Island colony in 1587, they awakened popular interest in a permanent colonizing venture.<br>


During the years separating the failure of the Roanoke attempt and the establishment in 1607 of Jamestown colony, English propagandists worked hard to convince the public that a settlement in America would yield instant and easily exploitable wealth. Even men such as the English geographer Richard Hakluyt were not certain that the Spanish colonization experience could or should be imitated but hoped nevertheless that the English colonies in the New World would prove to be a source of immediate commercial gain. There were, of course, other motives for colonization. Some hoped to discover the much-sought-after route to the Orient (East Asia) in North America. English imperialists thought it necessary to settle in the New World in order to limit Spanish expansion. Once it was proved that America was a suitable place for settlement, some Englishmen would travel to those particular colonies that promised to free them from religious persecution. There were also Englishmen, primarily of lower- and middle-class origin, who hoped the New World would provide them with increased economic opportunity in the form of free or inexpensive land. These last two motives, while they have been given considerable attention by historians, appear not to have been so much original motives for English colonization as they were shifts of attitude once colonization had begun.
</p>
<h5>Settlement</h5>
<h6>
  Virginia
</h6>
<p>The leaders of the Virginia Company, a joint-stock company in charge of the Jamestown enterprise, were for the most part wealthy and wellborn commercial and military adventurers eager to find new outlets for investment. During the first two years of its existence, the Virginia colony, under the charter of 1607, proved an extraordinarily bad investment. This was principally due to the unwillingness of the early colonizers to do the necessary work of providing for themselves and to the chronic shortage of capital to supply the venture.<br>

A new charter in 1609 significantly broadened membership in the Virginia Company, thereby temporarily increasing the supply of capital at the disposal of its directors, but most of the settlers continued to act as though they expected the Indians to provide for their existence, a notion that the Indians fiercely rejected. As a result, the enterprise still failed to yield any profits, and the number of investors again declined.<br>


The crown issued a third charter in 1612, authorizing the company to institute a lottery to raise more capital for the floundering enterprise. In that same year, John Rolfe harvested the first crop of a high-grade and therefore potentially profitable strain of tobacco. At about the same time, with the arrival of Sir Thomas Dale in the colony as governor in 1611, the settlers gradually began to practice the discipline necessary for their survival, though at an enormous personal cost.<br>

Dale carried with him the “Laws Divine, Morall, and Martial,” which were intended to supervise nearly every aspect of the settlers’ lives. Each person in Virginia, including women and children, was given a military rank, with duties spelled out in minute detail. Penalties imposed for violating these rules were severe: those who failed to obey the work regulations were to be forced to lie with neck and heels together all night for the first offense, whipped for the second, and sent to a year’s service in English galleys (convict ships) for the third. The settlers could hardly protest the harshness of the code, for that might be deemed slander against the company—an offense punishable by service in the galleys or by death.<br>
Dale’s code brought order to the Virginia experiment, but it hardly served to attract new settlers. To increase incentive the company, beginning in 1618, offered 50 acres (about 20 hectares) of land to those settlers who could pay their transportation to Virginia and a promise of 50 acres after seven years of service to those who could not pay their passage. Concurrently, the new governor of Virginia, Sir George Yeardley, issued a call for the election of representatives to a House of Burgesses, which was to convene in Jamestown in July 1619. In its original form the House of Burgesses was little more than an agency of the governing board of the Virginia Company, but it would later expand its powers and prerogatives and become an important force for colonial self-government.<br>

Despite the introduction of these reforms, the years from 1619 to 1624 proved fatal to the future of the Virginia Company. Epidemics, constant warfare with the Indians, and internal disputes took a heavy toll on the colony. In 1624 the crown finally revoked the charter of the company and placed the colony under royal control. The introduction of royal government into Virginia, while it was to have important long-range consequences, did not produce an immediate change in the character of the colony. The economic and political life of the colony continued as it had in the past. The House of Burgesses, though its future under the royal commission of 1624 was uncertain, continued to meet on an informal basis; by 1629 it had been officially reestablished. The crown also grudgingly acquiesced to the decision of the Virginia settlers to continue to direct most of their energies to the growth and exportation of tobacco. By 1630 the Virginia colony, while not prosperous, at least was showing signs that it was capable of surviving without royal subsidy.

</p>
<h6>Maryland</h6>
<P>
Maryland, Virginia’s neighbour to the north, was the first English colony to be controlled by a single proprietor rather than by a joint-stock company. Lord Baltimore (George Calvert) had been an investor in a number of colonizing schemes before being given a grant of land from the crown in 1632. Baltimore was given a sizable grant of power to go along with his grant of land; he had control over the trade and political system of the colony so long as he did nothing to deviate from the laws of England. Baltimore’s son Cecilius Calvert took over the project at his father’s death and promoted a settlement at St. Mary’s on the Potomac. Supplied in part by Virginia, the Maryland colonists managed to sustain their settlement in modest fashion from the beginning. As in Virginia, however, the early 17th-century settlement in Maryland was often unstable and unrefined; composed overwhelmingly of young single males—many of them indentured servants—it lacked the stabilizing force of a strong family structure to temper the rigours of life in the wilderness.<br>

The colony was intended to serve at least two purposes. Baltimore, a Roman Catholic, was eager to found a colony where Catholics could live in peace, but he was also eager to see his colony yield him as large a profit as possible. From the outset, Protestants outnumbered Catholics, although a few prominent Catholics tended to own an inordinate share of the land in the colony. Despite this favouritism in the area of land policy, Baltimore was for the most part a good and fair administrator.<br>

Following the accession of William III and Mary II to the English throne, however, control of the colony was taken away from the Calvert family and entrusted to the royal government. Shortly thereafter, the crown decreed that Anglicanism would be the established religion of the colony. In 1715, after the Calvert family had renounced Catholicism and embraced Anglicanism, the colony reverted back to a proprietary form of government.
</P>

      </section>
      <section class="currentEvents topic" id="usaCurrentEvents">
        <h3>Headlines About ${state.info.name}</h3>
        <p>${state.news.data.map(newsCard)}</p>
      </section>
    </div>
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
