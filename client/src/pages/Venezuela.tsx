import html from "html-literal";
import flag from "../../assets/images/ven.png";
export default state => html`
  <div class="countryInfo" id="venezuelaInfo">
    <div class="metaDataContainer">
      <img
        class="shortCountryInfoFlag"
        id="venezuelaInfoFlag"
        src=${flag}
        alt="The
        Flag
        of
        Venezuela"
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
      <section class="history topic" id="venezuelaHistory">
        <h3>
          History
        </h3>

<p>
The earliest inhabitants of Venezuela were food-gathering Amerindians who arrived in the Upper Paleolithic Period. Arawak and Carib indigenous peoplee were prominent among the groups that arrived later. Nomadic hunting and fishing groups roamed the Lake Maracaibo basin, the Llanos, and the coast. The most technologically advanced Venezuelan indigenous peoples lived in farming communities in the Andes.
</p>
<h5>The colonial era </h5>
<p>
Christopher Columbus arrived in what is now Venezuela in 1498, during his third voyage to the New World. European explorers named the region Venezuela (“Little Venice”) after observing local houses on stilts over water. During the first quarter century of contact, the Europeans limited themselves to slave hunting and pearl fishing on the northeastern coast; the first permanent Spanish settlement, Cumaná, was not made until 1523. In the second quarter of the 16th century, the centre of activity shifted to the northwestern coast, where the Welser banking house of Augsburg, Germany, purchased exploration and colonization rights. The Germans failed to find precious metals and to occupy the area permanently, however, and Spain repossessed the zone in 1546. Legends of El Dorado (“The Golden One”) drove explorers into the Venezuelan interior, perhaps including the Spanish adventurer and renegade Lope de Aguirre, who is said to have attacked several villages there. The Englishman Sir Walter Raleigh sailed up the Orinoco River in search of the fabled city of gold reportedly ruled by El Dorado. Raleigh described his adventure in The Discoverie of Guiana (1596).<br>

In the latter half of the 16th century, Spanish agriculturalists began to colonize the region by using encomiendas (semifeudal grants of land and indigenous labourers). Caracas was founded in 1567, and by 1600 more than 20 settlements dotted the Venezuelan Andes and the Caribbean coast. During the 17th and 18th centuries, various Roman Catholic missionary orders gradually took over the Llanos and Maracaibo regions.<br>
The colonial economy was based on agriculture and stock raising. Corn (maize), beans, and beef were the domestic food staples; sugar, cacao, tobacco, and hides were the principal exports. Spain’s European rivals (initially the French and English, followed by the Dutch) succeeded in taking over most of Venezuela’s commerce until the early 18th century, when Spain established a monopoly trading company. The interests of the latter, however, proved contrary to those of Venezuelan producers, who forced dissolution of the company during the 1780s.<br>

Venezuelan society during the colonial era was headed by agents of the Spanish crown. Royal bureaucrats monopolized the top governing posts, and Spanish clergymen dominated the high church offices. However, Creoles (white descendants of Europeans born in the Americas) owned the land and other forms of wealth, and they used their power to hold the nonwhite races in bondage: mestizos (persons of mixed European and indigenousancestry) and mulattoes (of European and African ancestry) were generally without property, social status, or political influence; indigenous people performed forced labour on interior farms or were segregated on marginal lands; and enslaved black Africans toiled on the coastal plantations. In theory, Venezuela was governed by the Spanish crown through the Audiencia of Santo Domingo in the 16th and 17th centuries and through the Viceroyalty of New Granada (with its capital at what is now Bogotá) from its incorporation in 1717. In practice, however, Venezuelans exercised some regional autonomy during the colonial era.
</p>

<h5>
The independence movement
</h5>
<p>
A group of Venezuelan Creoles boldly proclaimed their country an independent republic in 1797. Although their effort failed, it forewarned of the revolutionary movements that were soon to inflame Latin America.<br>

In 1806 Francisco de Miranda—who had earlier fought under George Washington against the British, served as a general in the French Revolution, and fought with the French against Prussia and Russia—tried unsuccessfully to land on the Venezuelan coast with a group of mercenaries whom he had recruited in New York City. Revolutionary leaders recalled him to Gran Colombia four years later to take charge of a ruling junta, which drafted a constitution and established an independent nation. In the ensuing war with royalist forces, however, Miranda signed an armistice with Spain. Other revolutionary leaders viewed this action with contempt, and Miranda was subsequently turned over to the Spaniards, who sent him first to Puerto Rico and later to Spain, where he died in prison in 1816.<br>


Early in 1813 the revolutionary junta appointed Simón Bolívar commander of the Venezuelan forces. Bolívar, a wealthy Creole landowner born in Caracas in 1783, had many reverses in his war against the Spanish. His forces were opposed by large royalist armies including a cavalry unit of llaneros (cowboys of the Llanos frontier), who were under the command of José Tomás Boves. In 1815 the Spanish general Pablo Morillo landed with an expeditionary force that spearheaded the reconquest of much of New Granada. Morillo administered the region in a heavy-handed fashion, however, and many of the Creole elites who had initially supported him soon conspired for his defeat. Llaneros and blacks also deserted the royalist cause and joined Bolívar, whose army was further augmented by a legion of British and Irish mercenaries; the new republican government of Haiti also sent aid. The Republic of Gran Colombia, with its capital at Bogotá, was proclaimed on December 17, 1819, with Bolívar as president. On June 24, 1821, Bolívar’s troops, reinforced by llanero cavalry under General José Antonio Páez, defeated the main royalist army at the Battle of Carabobo. The last of the royalist forces surrendered at Puerto Cabello on October 9, 1823. The following year Bolívar’s army marched south to liberate Peru, and in 1825 it freed Upper Peru (Bolivia) from Spanish rule. Venezuelans suffered greater casualties and endured more privations during the wars than did any other Latin American national group, because of the ferocity of battles on their own soil and the large number of Venezuelan troops who carried the struggle to other regions.<br>

Regional rivalries broke out in Gran Colombia while Bolívar was off leading the final campaigns, and his prestige was not enough to hold the country together after his return. Venezuela broke away in 1829, and Ecuador soon after. Bolívar died in Santa Marta, Colombia, in 1830, penniless and disillusioned.
</p>

<h5>The caudillos (1830–1935)</h5>

<p>After the destruction of the colonial system, Venezuela passed through an era of government-by-force that lasted more than a century, until the death of Juan Vicente Gómez in 1935. Backed by their personal armies, a series of warlordlike caudillos (leaders) assumed power, which they exercised for their personal benefit rather than for that of the nation.</p>

<h5>Páez and the Conservatives</h5>
<p>
The first of the military dictators was General José Antonio Páez, who gave the country better government than it would see again for nearly a century. Bolívar had left Páez in charge of the armed forces of Venezuela, and he soon took full control of the country. He led the separation movement from Gran Colombia in 1829 and in 1830 convoked a constitutional convention for Venezuela. Páez dominated Venezuelan politics until 1848, both as president (1831–35 and 1839–43) and as a major political player. He subdued ambitious provincial caudillos and ruled in cooperation with the large landholders and leading merchants of the Conservative Party. The constitution that they enacted in 1830 reflected their social and political philosophy—a centralist state, property qualifications for voting, the death penalty for political crimes, guarantees for the freedom of trade and commerce, and the continuation of slavery. The church lost its tax immunity and its educational monopoly, and the army was shorn of its autonomy; thus, state supremacy was achieved. The government then began to reconstruct the war-torn economy by putting finances in order, establishing firm lines of foreign credit, and amortizing the national debt. It also constructed new roads to promote domestic commerce and facilitate coffee and cacao exports.<br>

In contrast to the troubled times that preceded and followed it, the 1830–48 period of Conservative Party domination was an era of political stability, economic progress, and responsible administration. An opposition movement began to develop in 1840, however, when Antonio Leocadio Guzmán, the leading spokesman for dissident merchants and professional men, founded the Liberal Party. Guzmán’s new liberal newspaper, El Venezolano, demanded abolition of slavery, extension of voting rights, and protection for the debtor classes. During the 1840s the demand for Venezuela’s agricultural commodities declined on the world market; this produced economic difficulties, which in turn contributed to the increasing opposition to the Conservative oligarchy.
</p>
<h5>The Monagas and the civil wars</h5>
<p>
The growing political crisis was brought to a head in 1848 by General José Tadeo Monagas. Although elected president as a Conservative in 1846, he soon gravitated toward the Liberals. He intimidated the Conservative congress and appointed Liberal Party ministers. When Páez rebelled in 1848, Monagas defeated him and forced him into exile.<br>

The decade 1848–58 was one of dictatorial rule by José Tadeo Monagas and his brother, General José Gregorio Monagas, who alternated as president during the period. The Liberal Party passed laws that abolished slavery, extended suffrage, outlawed capital punishment, and limited interest rates, but the laws were not implemented. Integrity in government waned, heavy deficit financing ruined the nation’s credit, and the economy began to stagnate and decay. In 1857 the Monagas brothers attempted to impose a new constitution extending the presidential term from four to six years and removing all restrictions on reelection. The Liberal leaders thereupon joined the Conservative opposition, and in March 1858 they brought the Monagas dynasty to an end. This first successful rebellion in Venezuela’s national history set off five years of revolutionary turmoil between the Liberals and Conservatives. The issues in these so-called Federalist Wars were, on the Liberal side, federalism, democracy, and social reform and, on the Conservative side, centralism and preservation of the political and social status quo. The conflicts were extremely bloody, and control of the central government changed hands several times. General Páez returned in 1861 to restore Conservative hegemony for two years, but in 1863 final victory went to the Liberals, led by the generals Juan Falcón and Antonio Guzmán Blanco.<br>

A new constitution was enacted in 1864 to incorporate the federalist principles of the victors. Local freedoms quickly disappeared, however, at the hands of provincial caudillos. As president in 1864–68, Falcón appeared content to allow subordinates, many of them irresponsible, to rule at both the state and national levels. Liberal mismanagement and increasing political chaos provided an opportunity for the Conservatives, now led by José Tadeo Monagas, to return to power in 1868. But civil war followed. General Guzmán Blanco rallied the Liberals to his cause, overthrew the Conservatives, and assumed power in 1870.<br>

</p>

      </section>
      <section class="currentEvents topic" id="australiaCurrentEvents">
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
