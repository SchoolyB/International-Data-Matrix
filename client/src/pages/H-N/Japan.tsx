import html from "html-literal";
import flag from "../../assets/images/jpn.png";

export default state => html`
  <div class="countryInfo" id="japanInfo">
    <div class="metaDataContainer">
      <img
        class="shortCountryInfoFlag"
        id="japanInfoFlag"
        src=${flag}
        alt="The
        Flag
        of
        Japan"
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
      <section class="history topic" id="japanHistory">
        <h3>
          History
        </h3>
        <h4>Ancient Japan to 1185</h4>
        <h4>Prehistoric Japan</h4>
        <h5>Pre-Ceramic culture</h5>
        <p>
        It is not known when humans first settled on the Japanese archipelago. It was long believed that there was no Paleolithic occupation in Japan, but since World War II thousands of sites have been unearthed throughout the country, yielding a wide variety of Paleolithic tools. These include both core tools, made by chipping away the surface of a stone, and flake tools, made by working with a stone flake broken off from a larger piece of stone. There is little doubt that the people who used these implements moved to Japan from the Asian continent. At one stage, land connections via what are now the Korea and Tsushima straits made immigration from the Korean peninsula possible, while another connection, via what are now the Sōya and Tsugaru straits, allowed people to go in from northeastern Asia. <br>
        The Paleolithic Period in Japan is variously dated from 30,000 to 10,000 years ago, although the argument has been made for a Lower Paleolithic culture prior to 35,000 BCE. Nothing certain is known of the culture of the period, though it seems likely that people lived by hunting and gathering, used fire, and made their homes either in pit-type dwellings or in caves. No bone or horn artifacts of the kind associated with this period in other areas of the world have yet been found in Japan. Since there was no knowledge whatsoever of pottery, the period is referred to as the Pre-Ceramic era.<br>
        Climatic changes help to account for the existence of a Mesolithic stage in early Japanese culture, a time when much of the abundant fauna of earlier times became depleted by the expanding human population of the archipelago. The introduction of the bow and arrow is regarded as a local response to a decrease in game available for food.
        </p>
        <h5>Jōmon culture (c. 10,500 to c. 300 BCE)</h5>
        <p>The Pre-Ceramic era was followed by two better-recorded cultures, the Jōmon and the Yayoi. The former takes its name from a type of pottery found throughout the archipelago; its discoverer, the 19th-century American zoologist Edward S. Morse, called the pottery jōmon (“cord marks”) to describe the patterns pressed into the clay. A convincing theory dates the period during which Jōmon pottery was used from about 10,500 until about the 3rd century BCE. Of the features common to Neolithic cultures throughout the world—progress from chipped tools to polished tools, the manufacture of pottery, the beginnings of agriculture and pasturage, the development of weaving, and the erection of monuments using massive stones—the first two are prominent features of the Jōmon period, but the remaining three did not appear until the succeeding Yayoi period. Pottery, for example, first appeared in northern Kyushu (the southernmost of the four main Japanese islands) about 10,500 BCE, in an era that is called the Incipient Jōmon period. While continental influence is suspected, the fact that Kyushu pottery remains predate any Chinese findings strongly suggests that the impetus to develop pottery was local. Jōmon is thus best described as a Mesolithic culture, while Yayoi is fully Neolithic. <br>
        The manufacture of pottery, however, was highly developed, and the work of Jōmon peoples has a diversity and complexity of form and an exuberance of artistic decoration. It is customary to regard changes in pottery types as a basis for subdividing the age into six periods: Incipient (c. 10,500–8000 BCE), Initial (c. 8000–5000 BCE), Early (c. 5000–2500 BCE), Middle (c. 2500–1500 BCE), Late (c. 1500–1000 BCE), and Final (c. 1000–300 BCE). Since Jōmon culture spread over the entire archipelago, it also developed regional differences, and this combination of both chronological and regional variations gives the evolution of Jōmon pottery a high degree of complexity. <br>
        The pottery of the Incipient and Initial periods includes many deep urnlike vessels with tapered bullet-shaped bases. In the Early period the vessels of eastern Japan become roughly cylindrical in shape, with flat bases, and the walls contain an admixture of vegetable fibre. In the Middle period there were rapid strides in pottery techniques; the pots produced in the central mountain areas during this time are generally considered to be the finest of the whole Jōmon era. The surfaces of these normally cylindrical vessels are covered with complex patterns of raised lines, and powerfully decorative projections rise from the rims to form handles. From the Middle period onward there is increasing variety in the types of vessels, and a clear distinction developed between high-quality ware using elaborate techniques and simpler, purely functional pots. The amount of the latter type increases steadily, preparing the way for the transition to Yayoi pottery.<br>

        Jōmon dwelling sites have been found in various parts of the country. They can be classified into two types: one, the pit-type dwelling, consisted of a shallow pit with a floor of trodden earth and a roof; the other was made by laying a circular or oval floor of clay or stones on the surface of the ground and covering it with a roof. Remains of such dwellings have been found in groups ranging from five or six to several dozen, apparently representing the size of human settlements at the time. Most of these settlements form a horseshoe shape, with a space in the centre that seems to have been used for communal purposes. Nothing certain is known, however, concerning social or political organization at this period. It can be deduced that each household was made up of several family members and that the settlement made up of such households was led by a headman or shaman. <br>

        The people of the Jōmon period lived mainly by hunting and fishing and by gathering edible nuts and roots. The appearance of large settlements from the Middle period onward has been interpreted by some scholars as implying the cultivation of certain types of crop—a hypothesis seemingly supported by the fact that the chipped-stone axes of this period are not sharp but seem to have been used for digging soil. Doubtless there was some form of cultivation: starchy yams and taro, probably originating from the continent, were raised, the starch from them formed into a type of bread. This incipient agriculture seems related to a cultural florescence in mid-Jōmon times that lasted about 1,000 years.<br>

        Weaving of fibres was still unknown, though woven baskets have been found dating to the Early period. Archaeological findings indicate that clothes were largely made of bark. Body ornamentation included bracelets made of seashells, earrings of stone or clay, and necklaces and hair ornaments of stone or bone and horn. From the latter part of the period, the custom also spread throughout the archipelago of extracting or sharpening certain teeth, probably performed as a rite marking the attainment of adulthood. <br>

        No especially elaborate rites of burial evolved, and the dead were buried in a small pit dug near the dwelling. Sometimes the body was buried with its knees drawn up or with a stone clasped to its chest, a procedure that probably had some religious or magical significance. A large number of clay figurines have been found, many representing female forms that were probably magical objects associated with primitive fertility cults.<br>
        For years certain scholars have claimed that the bearers of the Jōmon culture were ancestors of the Ainu, an indigenous people of northern Japan. Scientific investigation of the bones of Jōmon people carried out since the beginning of the 20th century, however, has disproved this theory. The Jōmon people might be called proto-Japanese, and they were spread throughout the archipelago. Despite certain variations in character arising from differences in period or place, they seem to have constituted a single ethnic stock with more or less consistent characteristics. The present Japanese people were produced by an admixture of certain strains from the Asian continent and from the South Pacific, together with adaptations made in accordance with environmental changes. There is evidence to suggest that people moved eastward across Siberia and entered Japan via Sakhalin Island and Hokkaido. Nothing can yet be proved concerning their relationship with the people of the Pre-Ceramic period, but it cannot be asserted that they were entirely unrelated.
        </p>
        <h5>The Yayoi period (c. 300 BCE–c. 250 CE)</h5>
        <p>The new Yayoi culture that arose in Kyushu, while the Jōmon culture was still undergoing development elsewhere, spread gradually eastward, overwhelming the Jōmon culture as it went, until it reached the northern districts of Honshu (the largest island of Japan). The name Yayoi derives from the name of the district in Tokyo where, in 1884, the unearthing of pottery of this type first drew the attention of scholars. Yayoi pottery was fired at higher temperatures than Jōmon pottery and was turned on wheels. It is distinguished partly by this marked advance in technique and partly by an absence of the proliferating decoration that characterized Jōmon pottery. It developed, in short, as pottery for practical use. It is accompanied by metal objects and is associated with the wet (i.e., irrigated) cultivation of rice, thought to have begun around the end of the Late Jōmon period. Culturally, the Yayoi represents a notable advance over the Jōmon period and is believed to have lasted for some five or six centuries, from about the 3rd century BCE to the 2nd or 3rd century CE. <br>

        In China the 3rd and 2nd centuries BCE correspond with the period of the unified empire under the Qin (221–207 BCE) and Han (206 BCE–220 CE) dynasties, which already had entered the Iron Age. In 108 BCE the armies of the emperor Wudi occupied Manchuria and the northern part of the Korean peninsula, where they established Lelang (Nangnang) and three other colonies. These colonies served as a base for a strong influx of Chinese culture into Korea, whence, in turn, it spread to Japan. The fact that Yayoi culture had iron implements from the outset, and bronze implements somewhat later, probably indicates borrowings from Han culture. Since iron rusts easily, comparatively few objects have been found, but they seem to have been widespread at the time. These include axes, knives, sickles and hoes, arrowheads, and swords. The bronze objects are also varied, including halberds, swords, spears, taku (bell-shaped devotional objects from China), and mirrors. The halberds, swords, and spears seem not to have been used in Japan for the practical purposes for which they were developed in China but rather to have been prized as precious objects.<br>

        The cultivation of rice, probably introduced from the Yangtze River delta area of southern China, was one of the most important features of Yayoi culture. The earliest Yayoi pottery and sites, discovered in northern Kyushu, have yielded marks of rice husks as well as carbonized grains of rice; this suggests that rice growing was carried on in Japan from the earliest days of the culture. Traces of paddy fields, their divisions marked with wooden piles, have been found close to sites of settlements in various districts, along with irrigation channels equipped with dams and underdrains, showing that techniques of making and maintaining paddy fields were quite advanced. Rice was first grown in dry (i.e., nonirrigated) fields and marshy areas, however, before paddy cultivation—involving considerable investment of time, labour, and capital—came to predominate.<br>

        Generally speaking, the settlements of this period were built on low-lying alluvial land to facilitate the irrigation of the paddies, but at one stage they were built instead in the hills or on high ground. It is not clear whether this was dictated by the needs of defense or whether dry cultivation was being practiced. Much as in the Jōmon period, there were two types of dwelling—the pit type and the type built on the surface—but in addition to these, raised-floor structures appeared and were used for storing grain out of the reach of rodents.<br>

        With the acquisition of a knowledge of textiles, clothing made great strides compared with the Jōmon period. The cloth was woven on primitive looms, using vegetable fibres.<br>

        The dead were buried in either large clay urns or heavy stone coffins. Both were common in northern Kyushu and neighbouring areas; similar urns and coffins also are found on the Korean peninsula, where they probably originated. The graves were usually marked by mounds of earth or circles of stones, but a special type of grave employed a dolmen (a large slab of stone supported over the grave by a number of smaller stones). Since the erection of dolmens was widely practiced in Manchuria and Korea, these too are believed to be a sign of an influx of continental culture. Normally, graves occur in clusters, but occasionally one is found apart, surrounded by a ditch and with swords, beads, and mirrors buried along with the dead. Such special graves suggest that society was already divided into classes.<br>

        While these new cultural elements represent a migration to Japan from the Korean peninsula or China, the migration was not of a magnitude to change the character of the people who had inhabited the islands from Jōmon times. Yayoi culture undoubtedly represents an admixture of new sanguineous elements, but it seems likely that the chief strain of proto-Japanese found throughout the country during the Jōmon period was not disrupted but was carried over into later ages. Differences in Jōmon and Yayoi skeletal remains can better be explained by nutritional than genetic reasons. This point of view is supported by the accounts of the “people of Wo,” found in the Chinese history Wei zhi (297 CE).
      </p>
      <h5>Chinese chronicles</h5>
      <p>
      Japan first appears in Chinese chronicles under the name of Wo (in Japanese, Wa). The Han histories relate that “in the seas off Lelang lie the people of Wo, who are divided into more than 100 states, and who bring tribute at fixed intervals.” Lelang was one of the Han colonies established in the Korean peninsula. A history of the Dong (Eastern) Han (25–220 CE) records that in 57 CE the “state of Nu in Wo” sent emissaries to the Dong Han court and that the emperor gave them a gold seal. The “state of Nu,” located on what is now Hakata Bay, in Kyushu, was one of the more than 100 states that constituted Wo. This account was confirmed by a gold seal, apparently the identical seal awarded by the Chinese emperor, unearthed on the island of Shikano, at the mouth of Hakata Bay, in 1748. In the latter half of the 2nd century, there was civil war in the state of Wo; Queen Himiko had pacified the land and, relying on her religious powers, ruled over a confederation of more than 30 states that maintained communications with the Wei kingdom (220–265/266) in northern China. Wei too sent emissaries to Wo, and friendly relations between the two sides continued during the first half of the 3rd century. The Wei zhi contains a detailed account of the route from Lelang to the court of the Wo queen in “Yamatai.”<br>

      Scholars are divided as to whether Yamatai was located in northern Kyushu or in the Kinai district (central Honshu). If it was in northern Kyushu, then the union of states was a purely local government, unrelated to the Yamato court of later times, but if it was in the Kinai district, then it would be natural to see it as the ancestor of that court. This would suggest, in turn, that Japan had already achieved a considerable degree of political unification. Japanese historians long sought to emphasize the antiquity and degree of unity of Yamatai in order to aggrandize Japan’s relations with other East Asian nations. It seems most likely, however, that Yamatai was a local centre of power in Kyushu and that further unification did not take place until at least a century later.<br>

      According to the Wei zhi, the people of Wo already had reached a fairly high degree of civilization. Society had clear-cut divisions of rank, and the people paid taxes. There were impressive raised-floor buildings. The various provinces held fairs where goods were bartered. Since there were exchanges of letters with Wo, it seems too that there were already some who could read and write.
      </p>
<h4>The Tumulus (Tomb) period (c. 250–552)
</h4>
<h5>The unification of the nation</h5>
<p>
The questions of how the unification of Japan was first achieved and of how the Yamato court, with the tennō (“emperor of heaven”) at its centre, came into being in central Honshu have inspired many hypotheses, none of which has so far proved entirely convincing. With the help of Chinese and Korean records, however, it is possible to get at least an approximate idea of the date by which substantial unification had occurred. The relations that Yamatai had begun with Wei were continued with the successor Jin dynasty (265–316/317); however, following the dispatch of a mission in 266, all records of exchanges cease, and it is not until 147 years later, in 413 during the Dong (Eastern) Jin dynasty (317–420), that the name of Wo again appears in Chinese documents. It is most likely that the blank period resulted from conditions within Japan that made exchanges with other countries impossible. The collapse of Yamatai and the birth pangs of the Yamato kingdom that took its place probably occurred during this period. <br>

It is possible to push the date of unification of the nation back a few decades earlier than 413: a memorial erected in 414 commemorating the achievements of King Kwanggaet’o of Koguryŏ (a Korean state; 2nd century BCE–668 CE), describing the fighting between Wo and Koguryŏ on the Korean peninsula from the end of the 4th century into the beginning of the 5th century, makes special mention of a great army sent to the peninsula in 391 by Wo. Such military success presupposes a long period of preparation. The 8th-century Nihon shoki (“Chronicles of Japan”), one of Japan’s two oldest histories, mentions the dispatch of troops by Japan in 369. Such displays of strength would hardly have been possible unless Japan was already significantly unified, and the date of the unification of the country may therefore be about the mid-4th century at the latest.
</p>
      </section>
      <section class="currentEvents topic" id="japanCurrentEvents">
        <
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
