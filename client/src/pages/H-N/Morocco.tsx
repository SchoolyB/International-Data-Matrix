import html from "html-literal";
import flag from "../../assets/images/mar.png";
export default state => html`
  <div class="countryInfo" id="moroccoInfo">
    <div class="metaDataContainer">
      <img
        class="shortCountryInfoFlag"
        id="moroccoInfoFlag"
        src=${flag}
        alt="The
        Flag
        of
        Morocco"
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
      <section class="history topic" id="moroccoHistory">
        <h3>
          History
        </h3>
<P>Situated in the northwest corner of Africa and, on a clear day, visible from the Spanish coast, Morocco has resisted outside invasion while serving as a meeting point for European, Eastern, and African civilizations throughout history. Many of its early inhabitants, the Imazighen (Berbers), had adopted Christianity or Judaism, which were introduced during a brief period of Roman rule. In the late 7th century, Arab invaders from the East brought Islam, which the Imazighen gradually assimilated. Sunni Islam triumphed over various sectarian tendencies in the 12th and 13th centuries under the doctrinally rigorous Almohad dynasty. The Christian Reconquest of Spain in the later Middle Ages brought waves of Muslim and Jewish exiles from Spain to Morocco, injecting a Hispanic flavour into Moroccan urban life. Apart from some isolated coastal enclaves, however, Europeans failed to establish a permanent foothold in the area. In the 16th century, Ottoman invaders from Algeria attempted to add Morocco to their empire, thus threatening the country’s independence. They, too, were thwarted, leaving Morocco virtually the only Arab country never to experience Ottoman rule. In 1578, three kings fought and died near Ksar el-Kebir (Alcazarquivir), including the Portuguese monarch Sebastian. This decisive battle, known as the Battle of the Three Kings, was claimed as a Moroccan victory and put an end to European incursions onto Moroccan soil for three centuries. The 17th century saw the rise of the ʿAlawite dynasty of sharifs, who still rule Morocco today. This dynasty fostered trade and cultural relations with sub-Saharan Africa, Europe, and the Arab lands, though religious tensions between Islam and Christendom often threatened the peace.
<br>
By the late 17th century, Morocco’s cultural and political identity as an Islamic monarchy was firmly established. The figure of the strong sultan was personified by Mawlāy Ismāʿīl (1672–1727), who used a slave army, known as the ʿAbīd al-Bukhārī, to subdue all parts of the country and establish centralized rule. Subsequent monarchs often used their prestige as religious leaders to contain internal conflicts caused by competition among tribes. In the late 18th and early 19th centuries, when Europe was preoccupied with revolution and continental war, Morocco withdrew into a period of isolation. On the eve of the modern era, despite their geographic proximity, Moroccans and Europeans knew little about each other.


</P>
<h4>Decline of traditional government (1830–1912)</h4>
<p>
During the French invasion of Algeria in 1830, the sultan of Morocco, Mawlāy ʿAbd al-Raḥmān (1822–59), briefly sent troops to occupy Tlemcen but withdrew them after French protests. The Algerian leader Abdelkader in 1844 took refuge from the French in Morocco. A Moroccan army was sent to the Algerian frontier; the French bombarded Tangier on August 4, 1844, and Essaouira (Mogador) on August 15. Meanwhile, on August 14, the Moroccan army had been totally defeated at Isly, near the frontier town of Oujda. The sultan then promised to intern or expel Abdelkader if he should again enter Moroccan territory. Two years later, when he was again driven into Morocco, the Algerian leader was attacked by Moroccan troops and was forced to surrender to the French.<br>

Immediately after ʿAbd al-Raḥmān’s death in 1859, a dispute with Spain over the boundaries of the Spanish enclave at Ceuta led Madrid to declare war. Spain captured Tétouan in the following year. Peace had to be bought with an indemnity of $20 million, the enlargement of Ceuta’s frontiers, and the promise to cede to Spain another enclave—Ifni.<br>

The new sultan, Sīdī Muḥammad, attempted with little success to modernize the Moroccan army. Upon his death in 1873, his son Mawlāy Hassan I struggled to preserve independence. Hassan I died in 1894, and his chamberlain, Bā Aḥmad (Aḥmad ibn Mūsā), ruled in the name of the young sultan ʿAbd al-ʿAzīz until 1901, when the latter began his direct rule.<br>

ʿAbd al-ʿAzīz surrounded himself with European companions and adopted their customs, while scandalizing his own subjects, particularly the religious leaders. His attempt to introduce a modern system of land taxation resulted in complete confusion because of a lack of qualified officials. Popular discontent and tribal rebellion became even more common, while a pretender, Bū Ḥmāra (Abū Ḥamārah), established a rival court near Melilla. European powers seized the occasion to extend their own influence. In 1904 Britain gave France a free hand in Morocco in exchange for French noninterference with British plans in Egypt. Spanish agreement was secured by a French promise that northern Morocco should be treated as a sphere of Spanish influence. Italian interests were satisfied by France’s decision not to hinder Italian designs on Libya. Once these various interests were settled, the Western powers met with Moroccan representatives at Algeciras, Spain, in 1906, to discuss the country’s future.<br>

The Algeciras Conference confirmed the integrity of the sultan’s domains but sanctioned French and Spanish policing Moroccan ports and collecting the customs dues. In 1907–08 the sultan’s brother, Mawlāy ʿAbd al-Ḥāfiẓ, led a rebellion against him from Marrakech, denouncing ʿAbd al-ʿAzīz for his collaboration with the Europeans. ʿAbd al-ʿAzīz subsequently fled to distant Tangier. ʿAbd al-Ḥāfiẓ then made an abortive attack on French troops, which had occupied Casablanca in 1907, before proceeding to Fès, where he was duly proclaimed sultan and recognized by the European powers (1909).<br>

The new sultan proved unable to control the country. Disorder increased until, besieged by tribesmen in Fès, he was forced to ask the French to rescue him. When they had done so, he had no choice but to sign the Treaty of Fez (March 30, 1912), by which Morocco became a French protectorate. In return, the French guaranteed that the status of the sultan and his successors would be maintained. Provision was also made to meet the Spanish claim for a special position in the north of the country; Tangier, long the seat of the diplomatic missions, retained a separate administration.

</p>

<h4>The French protectorate (1912–56)</h4>
<p>In establishing their protectorate over much of Morocco, the French had behind them the experience of the conquest of Algeria and of their protectorate over Tunisia; they took the latter as the model for their Moroccan policy. There were, however, important differences. First, the protectorate was established only two years before the outbreak of World War I, which brought with it a new attitude toward colonial rule. Second, Morocco had a thousand-year tradition of independence; though it had been strongly influenced by the civilization of Muslim Spain, it had never been subject to Ottoman rule. These circumstances and the proximity of Morocco to Spain created a special relationship between the two countries.
<br>

Morocco was also unique among the North African countries in possessing a coast on the Atlantic, in the rights that various nations derived from the Act of Algeciras, and in the privileges that their diplomatic missions had acquired in Tangier. Thus, the northern tenth of the country, with both Atlantic and Mediterranean coasts, together with the desert province of Tarfaya in the southwest adjoining the Spanish Sahara, were excluded from the French-controlled area and treated as a Spanish protectorate. In the French zone, the fiction of the sultan’s sovereignty was maintained, but the French-appointed resident general held the real authority and was subject only to the approval of the government in Paris. The sultan worked through newly created departments staffed by French officials. The negligible role that the Moroccan government (makhzan) actually played can be seen by the fact that Muḥammad al-Muqrī, the grand vizier when the protectorate was installed, held the same post when Morocco recovered its independence 44 years later; he was by then more than 100 years old. As in Tunisia, country districts were administered by contrôleurs civils, except in certain areas such as Fès, where it was felt that officers of the rank of general should supervise the administration. In the south certain Amazigh chiefs (qāʾids), of whom the best known was Thami al-Glaoui, were given a great deal of independence.
</p>
<h4>The pre-World War II period</h4>
<p>The first resident general, Gen. (later Marshal) Louis-Hubert-Gonzalve Lyautey, was a soldier of wide experience in Indochina, Madagascar, and Algeria. He was of aristocratic outlook and possessed a deep appreciation of Moroccan civilization. The character he gave to the administration exerted an influence throughout the period of the protectorate.
<br>
His idea was to leave the Moroccan elite intact and rule through a policy of cooptation. He placed ʿAbd al-Ḥāfiẓ’s more amenable brother, Mawlāy Yūsuf, on the throne. This sultan succeeded in cooperating with the French without losing the respect of the Moroccan people. A new administrative capital was created on the Atlantic coast at Rabat, and a commercial port subsequently was developed at Casablanca. By the end of the protectorate in 1956, Casablanca was a flourishing city, with nearly a million inhabitants and a substantial industrial establishment. Lyautey’s plan to build new European cities separate from the old Moroccan towns left the traditional medinas intact. Remarkably, World War I did little to interrupt this rhythm of innovation. Though the French government had proposed retiring to the coast, Lyautey managed to retain control of all the French-occupied territory.<br>

After the war Morocco faced two major problems. The first was pacifying the outlying areas in the Atlas Mountains, over which the sultan’s government often had had no real control; this was finally completed in 1934. The second problem was the spread of the uprising of Abd el-Krim from the Spanish to the French zone (see below World War II and independence: The Spanish Zone), which was quelled by French and Spanish troops in 1926. That same year, Marshal Lyautey was succeeded by a civilian resident general. This marked a change to a more conventional colonial-style administration, accompanied by official colonization, the growth of the European population, and the increasing impact of European thought on the younger generation of Moroccans, some of whom had by then received a French education.<br>

As early as 1920 Lyautey had submitted a report saying that “a young generation is growing up which is full of life and needs activity.…Lacking the outlets which our administration offers only sparingly and in subordinate positions they will find an alternative way out.” Only six years after Lyautey’s report, young Moroccans both in Rabat, the new administrative capital, and in Fès, the centre of traditional Arab-Islamic learning and culture, were meeting independently of one another to discuss demands for reforms within the terms of the protectorate treaty. They asked for more schools, a new judicial system, and the abolition of the regime of the Amazigh qāʾids in the south; for study missions in France and the Middle East; and for the cessation of official colonization—objectives that would be fully secured only when the protectorate ended in 1956.<br>

On the death of Mawlāy Yūsuf (1927) the French chose as his successor his younger son, Sīdī Muḥammad (Muḥammad V). Selected in part for his retiring disposition, this sultan eventually revealed considerable diplomatic skill and determination. Also significant was the French attempt to use the purported differences between Arabs and Imazighen to undercut any growing sense of national unity. This led the French to issue the Berber Decree in 1930, which was a crude effort to divide Imazighen and Arabs. The result was just the opposite of French intentions; it provoked a Moroccan nationalist reaction and forced the administration to modify its proposals. In 1933 the nationalists initiated a new national day called the Fête du Trône (Throne Day) to mark the anniversary of the sultan’s accession. When he visited Fès the following year, the sultan received a tumultuous welcome, accompanied by anti-French demonstrations that caused the authorities to terminate his visit abruptly. Shortly after this episode political parties were organized that sought greater Moroccan self-rule. These events coincided with the completion of the French occupation of southern Morocco, which paved the way for the Spanish occupation of Ifni. In 1937 rioting occurred in Meknès, where French settlers were suspected of diverting part of the town water supply to irrigate their own lands at the expense of the Muslim cultivators. In the ensuing repression, Muḥammad ʿAllāl al-Fāsī, a prominent nationalist leader, was banished to Gabon in French Equatorial Africa, where he spent the following nine years.

</p>
<h4>World War II and independence</h4>
<h4>The French Zone</h4>

      </section>

      <section class="currentEvents topic" id="moroccoCurrentEvents">
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
