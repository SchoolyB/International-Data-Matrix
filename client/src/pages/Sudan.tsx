import html from "html-literal";
import flag from "../../assets/images/sdn.png";
export default state => html`
  <div class="countryInfo" id="sudanInfo">
    <div class="metaDataContainer">
      <img
        class="longCountryInfoFlag"
        id="sudanInfoFlag"
        src=${flag}
        alt="The
        Flag
        of
        Sudan"
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
      <section class="history topic" id="sudanHistory">
        <h3>
          History
        </h3>
<h5>Ancient Nubia</h5>
<p>
The earliest inhabitants of what is now Sudan can be traced to African peoples who lived in the vicinity of Khartoum in Mesolithic times (Middle Stone Age; 30,000–20,000 BCE). They were hunters and gatherers who made pottery and (later) objects of ground sandstone. Toward the end of the Neolithic Period (New Stone Age; 10,000–3,000 BCE) they had domesticated animals. These Africans were clearly in contact with predynastic civilizations (before c. 2925 BCE) to the north in Egypt, but the arid uplands separating Egypt from Nubia appear to have discouraged the predynastic Egyptians from settling there.
</p>

<h5>
Egyptian influence
</h5>
<P>
At the end of the 4th millennium BCE, kings of Egypt’s 1st dynasty conquered Upper Nubia south of Aswān, introducing Egyptian cultural influence to the African peoples who were scattered along the riverbanks. In subsequent centuries, Nubia was subjected to successive military expeditions from Egypt in search of slaves or building materials for royal tombs, destroying much of the Egyptian-Nubian culture that had sprung from the initial conquests of the 1st dynasty. Throughout these few centuries (c. 2925–c. 2575 BCE), the descendants of the Nubians continued to eke out an existence along the Nile River, an easy prey for Egyptian military expeditions. Although the Nubians were no match for the armies of Egypt’s Old Kingdom, the interactions arising from their enslavement and colonization led to ever-increasing African influence upon the art, culture, and religion of dynastic Egypt.<br>

Sometime after about 2181, in the period known to Egyptologists as the First Intermediate Period (c. 2130–1938), a new wave of immigrants entered Nubia from Libya, in the west, where the increasing desiccation of the Sahara drove them to settle along the Nile as cattle farmers. Other branches of these people seem to have gone beyond the Nile to the Red Sea Hills, while still others pushed south and west to Wadai and Darfur. These newcomers were able to settle on the Nile and assimilate the existing Nubians without opposition from Egypt. After the fall of the 6th dynasty (c. 2150), Egypt experienced more than a century of weakness and internal strife, giving the immigrants in Nubia time to develop their own distinct civilization with unique crafts, architecture, and social structure, virtually unhindered by the potentially more dynamic civilization to the north. With the advent of the 11th dynasty (2081), however, Egypt recovered its strength and pressed southward into Nubia, at first sending only sporadic expeditions to exact tribute but by the 12th dynasty (1938–1756) effectively occupying Nubia as far south as Semna. The Nubians resisted the Egyptian occupation, which was maintained only by a chain of forts erected along the Nile. Egyptian military and trading expeditions, of course, penetrated beyond Semna, and Egyptian fortified trading posts were actually established to the south at Karmah in order to protect against frequent attacks upon Egyptian trading vessels by Nubian tribesmen beyond the southern frontier.

<h5>The kingdom of Kush</h5>
<p>Despite the Egyptian presence in Upper Nubia, the indigenous culture of the region continued to flourish. This culture was deeply influenced by African peoples in the south and was little changed by the proximity of Egyptian garrisons or the imports of luxury articles by Egyptian traders. Indeed, the Egyptianization of Nubia appears to actually have been enhanced during the decline in Egypt’s political control over Nubia in the Second Intermediate Period (c. 1630–1540 BCE), when Nubians were employed in large numbers as mercenaries against the Asian Hyksos invaders of Egypt. This experience did more to introduce Egyptian culture, which the mercenaries absorbed while fighting in Egyptian armies, than did the preceding centuries of Egyptian military occupation. Conversely, the presence of these mercenaries in Egypt contributed to the growing African influence within Egyptian culture.<br>

he defeat of the Hyksos was the result of a national rising of the Egyptians who, once they had expelled the Hyksos from the Nile valley, turned their energies southward to reestablish the military occupation of Nubia that the Hyksos invasion had disrupted. Under Thutmose I (reigned 1493–c. 1482 BCE) the Egyptian conquest of the northern Sudan was completed as far as Kurqus (also spelled Kurgus, Korgus), about 30 miles (50 km) south of Abū Ḥamad, and subsequent Egyptian military expeditions penetrated even farther up the Nile. This third Egyptian occupation was the most complete and the most enduring, for, despite sporadic rebellions against Egyptian control, Nubia was divided into two administrative units: Wawat in the north, with its provincial capital at Aswān, and Kush (also spelled Cush) in the south, with its headquarters at Napata (Marawī). Nubia as a whole was governed by a viceroy, usually a member of the royal entourage, who was responsible to the Egyptian pharaoh. Under him were two deputies, one for Wawat and one for Kush, and a hierarchy of lesser officials. The bureaucracy was staffed chiefly by Egyptians, but Egyptianized Nubians were not uncommon. Colonies of Egyptian officials, traders, and priests surrounded the administrative centres, but beyond these outposts the Nubians continued to preserve their own distinct traditions, customs, and crafts. A syncretistic culture thus arose in Kush, fashioned by that of Egypt to the north and those of African peoples to the south.<br>

Kush’s position athwart the trade routes from Egypt to the Red Sea, and from the Nile to the south and west, brought considerable wealth from far-off places. Moreover, its cultivated areas along the Nile were rich, and in the hills the gold and emerald mines produced bullion and jewels for Egypt. The Nubians were also highly valued as soldiers.<br>

As Egypt slipped once again into decline at the close of the New Kingdom (11th century BCE), the viceroys of Kush, supported by their Nubian armies, became virtually independent kings, free of Egyptian control. By the 8th century BCE the kings of Kush came from hereditary ruling families of Egyptianized Nubian chiefs who possessed neither political nor family ties with Egypt. Under one such king, Kashta, Kush acquired control of Upper (i.e., southern) Egypt, and under his son Piye (formerly known as Piankhi; reigned c. 750–c. 719 BCE) the whole of Egypt to the shores of the Mediterranean was brought under the administration of Kush. As a world power, however, Kush was not to last. Just when the kings of Kush had established their rule from Abū Ḥamad to the Nile delta, the Assyrians invaded Egypt (671 BCE) and with their superior iron-forged weapons defeated the armies of Kush under the redoubtable Taharqa; by 654 the Kushites had been driven back to Nubia and the safety of their capital, Napata.<br>

Although reduced from a great power to an isolated kingdom behind the barren hills that blocked the southward advance from Aswān, Kush continued to rule over the middle Nile for another thousand years. Its unique Egyptian-Nubian culture with its strong African accretions was preserved, while that of Egypt came under Persian, Greek, and Roman influences. Although Egyptianized in many ways, the culture of Kush was not simply Egyptian civilization in a Nubian environment. The Kushites developed their own language, expressed first by Egyptian hieroglyphs, then by their own, and finally by a cursive script. They worshipped Egyptian gods but did not abandon their own. They buried their kings in pyramids but not in the Egyptian fashion. Their wealth continued to flow from the mines and to grow with their control of the trade routes. Soon after the retreat from Egypt, the capital was moved from Napata southward to Meroe near Shandī, where the kingdom was increasingly exposed to the long-established African cultures farther south at the very time when its ties with Egypt were rapidly disappearing. The subsequent history of Kush is one of gradual decay, ending with inglorious extinction in 350 CE by the king of Aksum, who marched down from the Ethiopian highlands, destroyed Meroe, and sacked the decrepit towns along the river.<br>
</p>
<h5>Christian and Islamic influence </h5>
<h5>Medieval Christian kingdoms</h5>
<p>
The 200 years from the fall of Kush to the middle of the 6th century is an unknown age in the Sudan. Nubia was inhabited by a people called the Nobatae by the ancient geographers and the X-Group by modern archaeologists, who are still at a loss to explain their origins. The X-Group were clearly, however, the heirs of Kush, for their whole cultural life was dominated by Meroitic crafts and customs, and occasionally they even felt themselves sufficiently strong, in alliance with the nomadic Blemmyes (the Beja of the eastern Sudan), to attack the Romans in Upper Egypt. When this happened, the Romans retaliated, defeating the Nobatae and Blemmyes and driving them into obscurity once again.<br>

When the Sudan was once more brought into the orbit of the Mediterranean world by the arrival of Christian missionaries in the 6th century CE, the middle course of the Nile was divided into three kingdoms: Nobatia, with its capital at Pachoras (modern Faras); Maqurrah, with its capital at Dunqulah (Old Dongola); and the kingdom of ʿAlwah in the south, with its capital at Sūbah (Soba) near what is now Khartoum. Between 543 and 575 these three kingdoms were converted to Christianity by the work of Julian, a missionary who proselytized in Nobatia (543–545), and his successor Longinus, who between 569 and 575 consolidated the work of Julian in Nobatia and even carried Christianity to ʿAlwah in the south. The new religion appears to have been adopted with considerable enthusiasm. Christian churches sprang up along the Nile, and ancient temples were refurbished to accommodate Christian worshippers. After the retirement of Longinus, however, the Sudan once again receded into a period about which little is known, and it did not reemerge into the stream of recorded history until the coming of the Arabs in the middle of the 7th century.<br>

After the death of the Prophet Muhammad in 632 CE, the Arabs erupted from the desert steppes of Arabia and overran the lands to the east and west. Egypt was invaded in 639, and small groups of Arab raiders penetrated up the Nile and pillaged along the frontier of the kingdom of Maqurrah, which by the 7th century had absorbed the state of Nobatia. Raid and counterraid between the Arabs and the Nubians followed until a well-equipped Arab expedition under ʿAbd Allāh ibn Saʿd ibn Abī Sarḥ was sent south to punish the Nubians. The Arabs marched as far as Dunqulah, laid siege to the town, and destroyed the Christian cathedral. They suffered heavy casualties, however, so that, when the king of Maqurrah sought an armistice, ʿAbd Allāh ibn Saʿd agreed to peace, happy to extricate his battered forces from a precarious position. Arab-Nubian relations were subsequently regularized by an annual exchange of gifts, by trade relations, and by the mutual understanding that no Muslims were to settle in Nubia and no Nubians were to take up residence in Egypt. With but few interruptions, this peaceful, commercial relationship lasted nearly six centuries, its very success undoubtedly the result of the mutual advantage that both the Arabs and the Nubians derived from it. The Arabs had a stable frontier; they appear to have had no designs to occupy the Sudan and were probably discouraged from doing so by the arid plains south of Aswān. Peace on the frontier was their object, and this the treaty guaranteed. In return, the kingdom of Maqurrah gained another 600 years of life.
</P>
<h5>Islamic encroachments</h5>
<p>
When non-Arab Muslims acquired control of the Nile delta, friction arose in Upper Egypt. In the 9th century the Turkish Ṭūlūnid rulers of Egypt, wishing to rid themselves of the unruly nomadic Arab tribes in their domain, encouraged them to migrate southward. Lured by the prospects of gold in the Nubian Desert, the nomads pressed into Nubia, raiding and pillaging along the borders, but the heartland of Maqurrah remained free from direct hostilities until the Mamlūks established their control over Egypt (1250). In the late 13th and early 14th centuries, the Mamlūk sultans sent regular military expeditions against Maqurrah, as much to rid Egypt of uncontrollable Arab Bedouin as to capture Nubia. The Mamlūks never succeeded in actually occupying Maqurrah, but they devastated the country, draining its political and economic vitality and plunging it into chaos and depression. By the 15th century Dunqulah was no longer strong enough to withstand Arab encroachment, and the country was open to Arab immigration. Once the Arab nomads, particularly the Juhaynah people, learned that the land beyond the Aswān reach could support their herds and that no political authority had the power to turn them back, they began to migrate southward, intermarrying with the Nubians and introducing Arab Muslim culture to the Christian inhabitants. The Arabs, who inherited through the male line, soon acquired control from the Nubians, who inherited through the female line, intermarriage resulting in Nubian inheritances passing from Nubian women to their half-Arab sons, but the Arabs replaced political authority in Maqurrah only with their own nomadic institutions. From Dunqulah the Juhaynah and others wandered east and west of the Nile with their herds; in the south the kingdom of ʿAlwah stood as the last indigenous Christian barrier to Arab occupation of the Sudan.<br>


Alwah extended from Kabūshiyyah as far south as Sennar (Sannār). Beyond, from the Ethiopian escarpment to the White Nile, lived peoples about which little is known. ʿAlwah appears to have been much more prosperous and stronger than Maqurrah. It preserved the ironworking techniques of Kush, and its capital at Sūbah possessed many impressive buildings, churches, and gardens. Christianity remained the state religion, but ʿAlwah’s long isolation from the Christian world had probably resulted in bizarre and syncretistic accretions to liturgy and ritual. ʿAlwah was able to maintain its integrity so long as the Arabs failed to combine against it, but the continuous and corrosive raids of the Bedouin throughout the 15th century clearly weakened its power to resist. Thus, when an Arab confederation led by ʿAbd Allāh Jammāʿ was at last brought together to assault the Christian kingdom, ʿAlwah collapsed (c. 1500). Sūbah and the Blue Nile region were abandoned, left to the Funj, who suddenly appeared, seemingly from nowhere, to establish their authority from Sennar to the main Nile.

</p>
      </section>
      <section class="currentEvents topic" id="sudanCurrentEvents">
        <h3>Headlines About ${state.info.name} </h3>
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
