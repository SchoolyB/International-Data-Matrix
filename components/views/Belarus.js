import html from "html-literal";
import flag from "../../assets/images/blr.png";
export default state => html`
  <div class="countryInfo" id="belarusInfo">
    <div class="metaDataContainer">
      <img
        class="longCountryInfoFlag"
        id="belarusInfoFlag"
        src=${flag}
        alt="The
        Flag
        of
        Belarus"
      />
      <div class="genInformationContainer">
        <div class="genInformationContainer">
          <p class="genInfoRegion">
            Region: ${state.info.region}<br />
            Subregion: ${state.info.subregion}
          </p>
          <p class="genInfoSubRegion"></p>
          <p class="genInfoCapitolCity">
            The Capitol of ${state.info.name} is: ${state.info.Capital}
          </p>
          <p>National Population: ${state.info.population} approx.</p>
          <p class="genInfoISOCodes ">
            ${state.info.name}'s Alpha 2 code is: ${state.info.Alpha2Code}<br />
            ${state.info.name}'s Alpha 3 code is: ${state.info.Alpha3Code}
          </p>
          <p class="genInfoCurrency">
            The Currency of ${state.info.name} is ${state.info.Currency}
          </p>
          <p class="genInfoCallingCodes">
            ${state.info.name}'s calling code is ${state.info.callingCodes}
          </p>
          <p class="genInfoTimezones">
            Timezones: ${state.info.timezones}
          </p>
        </div>
      </div>
      <div>
        <h1 class="countryNameHeader">${state.info.name}</h1>
        <h2 class="nativeName">${state.info.nativeName}</h2>
      </div>
      <section class="history topic" id="australiaHistory">
        <h3>
          History
        </h3>
        <h4>Early exploration and colonization</h4>
        <h5>The Portuguese</h5>
        <p>
          The quest for wealth and knowledge might logically have pulled the
          Portuguese to Australian shores; the assumption has some evidential
          support, including a reference indicating that Melville Island, off
          the northern coast, supplied slaves. Certainly the Portuguese debated
          the issue of a terra australis incognita (Latin: “unknown southern
          land”)—an issue in European thought in ancient times and revived from
          the 12th century onward. The so-called Dieppe maps present a landmass,
          “Java la Grande,” that some scholarship (gaining strength in the early
          21st century) has long seen as evidence of a Portuguese discovery of
          the Australian landmass, 1528 being one likely year.
        </p>
        <h5>The Spanish</h5>
        <p>
          Viceroys of Spain’s American empire regularly sought new lands. One
          such expedition, from Peru in 1567, commanded by Álvaro de Mendaña,
          discovered the Solomon Islands. Excited by finding gold, Mendaña hoped
          that he had found the great southern land and that Spain would
          colonize there. In 1595 Mendaña sailed again but failed to rediscover
          the Solomons. One of his officers was Pedro Fernández de Quirós, a man
          of the Counter-Reformation who wanted Roman Catholicism to prevail in
          the southland, the existence of which he was certain. Quirós won the
          backing of King Philip III for an expedition under his own command. It
          left Callao, Peru, in December 1605 and reached the New Hebrides.
          Quirós named the island group Australia del Espirítu Santo, and he
          celebrated with elaborate ritual. He (and some later Roman Catholic
          historians) saw this as the discovery of the southern land. But
          Quirós’s exultation was brief; troubles forced his return to Latin
          America. The other ship of the expedition, under Luis de Torres, went
          on to sail through the Torres Strait but almost certainly failed to
          sight Australia; and all Quirós’s fervour failed to persuade Spanish
          officialdom to mount another expedition.
        </p>
        <h4>Oceanic exploration</h4>
        <h5>The Dutch</h5>
        <p>
          Late in 1605 Willem Jansz (Janszoon) of Amsterdam sailed aboard the
          Duyfken from Bantam in the Dutch East Indies in search of New Guinea.
          He reached the Torres Strait a few weeks before Torres and named what
          was later to prove part of the Australian coast—Cape Keer-Weer, on the
          western side of Cape York Peninsula. More significantly, from 1611
          some Dutch ships sailing from the Cape of Good Hope to Java inevitably
          carried too far east and touched Australia: the first and most famous
          was Dirck Hartog’s Eendracht, from which men landed and left a
          memorial at Shark Bay, Western Australia, October 25–27, 1616. Pieter
          Nuyts explored almost 1,000 miles (1,600 km) of the southern coast in
          1626–27, and other Dutchmen added to knowledge of the north and west.
          Most important of all was the work of Abel Tasman, who won such
          respect as a seaman in the Dutch East Indies that in 1642 Gov.-Gen.
          Anthony van Diemen of the Indies commissioned him to explore
          southward. In November–December, having made a great circuit of the
          seas, Tasman sighted the west coast and anchored off the southeast
          coast of what he called Van Diemen’s Land (Tasmania). He then explored
          the island of New Zealand before returning to Batavia, on Java. A
          second expedition of 1644 contributed to knowledge of Australia’s
          northern coast; the Dutch named the new landmass New Holland.
        </p>
        <h5>The British</h5>
        <p>
          The Netherlands spent little more effort in exploration, and the other
          great Protestant power in Europe, England, took over the role. In 1688
          the English buccaneer William Dampier relaxed on New Holland’s
          northwestern coast. On returning to England, he published his Voyages
          and persuaded the Admiralty to back another venture. He traversed the
          western coast for 1,000 miles (1699–1700) and reported more fully than
          any previous explorer, but he did so in terms so critical of the land
          and its people that another hiatus resulted.
          <br /><br />
          The middle decades of the 18th century saw much writing about the
          curiosities and possible commercial value of the southern seas and
          terra australis incognita. This was not restricted to Great Britain,
          but it had especial vigour there. The British government showed its
          interest by backing several voyages. Hopes flourished for a mighty
          empire of commerce in the eastern seas. This was the background for
          the three voyages of Captain James Cook on behalf of the British
          Admiralty. The first, that of the HMS Endeavour, left England in
          August 1768 and had its climax on April 20, 1770, when a crewman
          sighted southeastern Australia. Cook landed several times, most
          notably at Botany Bay and at Possession Island in the north, where on
          August 23 he claimed the land, naming it New South Wales. Cook’s later
          voyages (1772–75 and 1776–79) were to other areas in the Pacific, but
          they were both symptom and cause of strengthening British interest in
          the eastern seas.
        </p>
        <h5>Late Explorations</h5>
        <p>
          Cook’s voyages led to settlement but did not complete the exploration
          of the Australian coasts. Marion Dufresne of France skirted Tasmania
          in 1772, seeing more than had Tasman. The count de La Pérouse, another
          French explorer, made no actual discoveries in Australia but visited
          Botany Bay early in 1788. In 1791 the British navigator George
          Vancouver traversed and described the southern shores discovered by
          Pieter Nuyts years before. The French explorer Joseph-Antoine Raymond
          de Bruni, chevalier d’Entrecasteaux, also did significant work,
          especially in southern Tasmania.<br /><br />
          Two Britons—George Bass, a naval surgeon, and Matthew Flinders, a
          naval officer—were the most famous postsettlement explorers. Together
          they entered some harbours on the coast near Botany Bay in 1795 and
          1796. Bass ventured farther south in 1797–98, pushing around Cape
          Everard to Western Port. Flinders was in that region early in 1798,
          charting the Furneaux Islands. Late that year Flinders and Bass
          circumnavigated Tasmania in the Norfolk, establishing that it was an
          island and making further discoveries. Several other navigators,
          including merchantmen, filled out knowledge of the Bass Strait area;
          most notable was the discovery of Port Phillip in 1802.<br /><br />
          Meanwhile Flinders had returned home and in 1801 was appointed to
          command an expedition that would circumnavigate Australia and
          virtually complete the charting of the continent. Over the next three
          years Flinders proved equal to this task. Above all, he left no doubt
          that the Australian continent was a single landmass. Appropriately,
          Flinders urged that the name Australia replace New Holland, and this
          change received official backing from 1817.<br /><br />
          France sponsored an expedition, similar in intent to Flinders’s, at
          the same time. Under Nicolas Baudin, it gave French names to many
          features (including “Terre Napoléon” for the southern coast) and
          gathered much information but did little new exploration. It was on
          the northern coast, from Arnhem Land to Cape York Peninsula, that more
          exploration was needed. Two Admiralty expeditions—under Phillip Parker
          King (1817–22) and John Clements Wickham (1838–39)—filled this gap.
        </p>
        <h4>European Settlement</h4>
        <p>
          The British government determined on settling New South Wales in 1786,
          and colonization began early in 1788. The motives for this move have
          become a matter of some controversy. The traditional view is that
          Britain thereby sought to relieve the pressure upon its prisons—a
          pressure intensified by the loss of its American colonies, which until
          that time had accepted transported felons. This view is supported by
          the fact that convicts went to the settlement from the outset and that
          official statements put this first among the colony’s intended
          purposes. But some historians have argued that this glossed a scheme
          to provide a bastion for British sea power in the eastern seas. Some
          have seen a purely strategic purpose in settlement, but others have
          postulated an intent to use the colony as a springboard for economic
          exploitation of the area. It is very likely that the government had
          some interest in all these factors.<br /><br />
          Whatever the deeper motivation, plans went ahead, with Lord Sydney
          (Thomas Townshend), secretary of state for home affairs, as the
          guiding authority. Arthur Phillip was commander of the expedition; he
          was to take possession of the whole territory from Cape York to
          Tasmania, westward as far as 135° and eastward to include adjacent
          islands. Phillip’s power was to be near absolute within his domain.
          The British government planned to develop the region’s economy by
          employing convict labour on government farms, while former convicts
          would subsist on their own small plots.<br /><br />
          The First Fleet sailed on May 13, 1787, with 11 vessels, including 6
          transports, aboard which were about 730 convicts (570 men and 160
          women). More than 250 free persons accompanied the convicts, chiefly
          marines of various rank. The fleet reached Botany Bay on January
          19–20, 1788. Crisis threatened at once. The Botany Bay area had poor
          soil and little water, and the harbour itself was inferior. Phillip
          therefore sailed northward on January 21 and entered a superb harbour,
          Port Jackson, which Cook had marked but not explored. He moved the
          fleet there; the flag was hoisted on January 26 and the formalities of
          government begun on February 7. Sydney Cove, the focus of settlement,
          was deep within Port Jackson, on the southern side; around it was to
          grow the city of Sydney.<br /><br />
          Phillip at once established an outstation at Norfolk Island. Its
          history was to be checkered; settlement was abandoned in 1813 and
          revived in 1825 to provide a jail for convicts who misbehaved in
          Australia. (It served a new purpose from 1856 as a home for the
          descendants of the mutineers of the HMS Bounty, by then too numerous
          for Pitcairn Island.)<br /><br />
          Phillip remained as governor until December 1792, seeing New South
          Wales through its darkest days. The land was indifferent, disease and
          pests abounded, few convicts proved able labourers, and Aboriginal
          people were often hostile. The nadir came in autumn 1790 as supplies
          shrank; the arrival of a second fleet brought hundreds of sickly
          convicts but also the means of survival.
        </p>
        <h5>An Authoritarian Society</h5>
        <p>
          While much change proceeded throughout this period, authoritarian and
          hierarchical elements remained strong. The reception of convicts
          continued and was a major fact in social and economic life.
          Entrepreneurs strove hard but did not yet develop a staple industry.
          Farmers and graziers began to fill out an arc 150–200 miles around
          Sydney; this area was designated as the Nineteen Counties in 1829, and
          settlement beyond that limit was discouraged.<br /><br />
          Following the discovery of Bass Strait, and in order to secure
          southern waterways, new settlements were established in the south.
          From Britain, David Collins sailed in 1803 to settle Port Phillip. His
          sojourn there was unhappy, and in mid-1804 he moved to the River
          Derwent in southern Tasmania, already settled (September 1803) by a
          group from Sydney under John Bowen. Collins resettled the amalgamated
          parties at Hobart. In November 1804 William Paterson founded a
          settlement in northern Tasmania, the precursor of Launceston. These
          settlements united in 1812; they were still under supervision from
          Sydney, although only nominally from 1825. Among penal outstations
          settled from Sydney were those at Newcastle (1804) and Moreton Bay
          (1824), the forerunner of Brisbane. Britain extended its possession
          over the whole of the continent in the 1820s, again fearing French (or
          even American) intervention. The western boundary of the governor’s
          commission shifted to 129° in 1825 to include Bathurst and Melville
          islands in the far north, and there was a small settlement in this
          region (1824–29). At Western Port, east of Port Phillip, another
          settlement was made (1826–27), while in January 1827 Edmund Lockyer
          began permanent settlement at Albany, Western Australia. His
          instructions stated that Britain now claimed all Australia.<br /><br />
          As remarked above, the constitutional structure was authoritarian. The
          governors were all service officers. There were no representative
          institutions, but Acts introduced in 1823 and 1828 provided for
          executive and legislative councils, with the major officers of
          government serving in both and an equal number of private individuals,
          chosen by nomination, in the latter. More significant at this stage
          was the articulation of a judicial system, especially the
          establishment of supreme courts (New South Wales, 1814; Tasmania,
          1824); normal trial by jury did not obtain.<br /><br />
          Within this rigid structure, sociopolitical factions developed. Most
          important in the early years was the assertion of the New South Wales
          Corps, stationed at Sydney from 1791. Some officers of the corps
          sought power and profit with an avidity that led to clash after clash
          with the early governors. This culminated in the events of January 26,
          1808, when John Macarthur, a former officer of the corps, led an
          uprising known as the Rum Rebellion that deposed Governor William
          Bligh (served 1806–08), earlier famous for the Bounty mutiny. In due
          course the imperial government reacted and recalled the corps; but
          Governor Lachlan Macquarie (served 1810–21) also clashed with the
          colony’s Exclusives—former officers and a handful of wealthy free
          immigrants. Macquarie associated himself with the Emancipist faction,
          a group that argued in favour of former convicts having a particular
          claim upon government and the colony’s resources.<br /><br />
          Macquarie’s attitude disturbed the imperial government. After an
          official inquiry (1819–21) by John Thomas Bigge, the government
          encouraged the migration of men of some standing and wealth to both
          New South Wales and Tasmania. Such men received substantial grants of
          land and appeared to be the natural leaders of social and economic
          development. The Emancipists continued to be strong, however,
          especially through the leadership of William Charles Wentworth
          (himself the son of a convict woman), whose newspaper, the Australian
          (founded 1824), was the spearhead of opposition, especially to
          Governor Ralph Darling (served 1825–31). In Tasmania factions never
          formed so clearly, but there, also, the press led criticism of the
          government. <br /><br />By 1830 about 58,000 convicts, including
          almost 50,000 men, had come to Australia (the rate increasing rapidly
          after 1815). Many were urban thieves. There were a few political
          prisoners, while a substantial proportion of the Irish convicts (at
          least a third of the total) had become offenders through
          sociopolitical unrest. In Australia the convicts were either employed
          by the government or “assigned” to private employers. In general,
          conditions were not especially harsh or repressive, and “tickets of
          leave” and pardons provided relatively quick routes to freedom.
          Assignment to the new settlers of the 1820s, however, often had an
          element of slavery, and many convicts must have suffered grief and
          despair in their exile. Most convicts committed some further misdeeds,
          although only about one-tenth were charged with serious offenses.
          Those found guilty went to secondary penal stations, the (sometimes
          exaggerated) horror spots of Australian history—Macquarie Harbour,
          Newcastle, and Moreton Bay in this period and, later, Norfolk Island
          and Port Arthur. The convicts gave Australia a Lumpenproletariat; but
          success stories were common enough, and many convicts led decent
          lives. There were only a few large-scale protests; the most remarkable
          was the Castle Hill Rising among Irish convicts outside Sydney in
          March 1804. Altogether, the impact of such a large convict population
          was less grim and ugly than might be expected. <br /><br />The
          maintenance of convicts was essentially the economic resource of the
          colony for many years; this function entailed very considerable
          expenditure by the British government. Wealth was won by supplying
          government stores with food and grain or by controlling internal
          trade—or both. The officers of the New South Wales Corps were skilled
          in filling these roles, although civil officers, private settlers,
          former convicts, and even serving convicts all had their own means of
          doing business, and the amount of petty commercial activity was large.
          Farming was pursued on a widely ranging scale. John Macarthur was the
          most notable of those who early believed that wool growing would be a
          major economic resource; he himself received a substantial land grant
          in 1805 to pursue this hope, and he persuaded Bigge of its validity.
          By 1830 these hopes were still some distance from fulfillment: sheep
          long returned more value from their meat than from their wool, and the
          breeding of wooled sheep suitable to the environment took time. The
          1820s saw that process quickening, with relatively greater strength in
          Tasmania. Sealing and whaling also proved profitable, although the
          richest seal fields (especially in Bass Strait) were soon thinned; and
          not until the 1820s did colonists have the wealth to engage seriously
          in whaling, although British and Americans early used Australian ports
          for this purpose. Maritime adventure led early colonists to make
          contact with Pacific islands, most importantly Tahiti.<br /><br />
          The period saw some notable exploration by land. From early days in
          Sydney settlers sought a way over the mountains, some 50–100 miles
          west. The task was accomplished in 1813; the young Wentworth led the
          party. A surveyor, George William Evans, followed their route to
          Bathurst (founded 1815) and reported rich pastoral country. John Oxley
          further mapped the inland plains and rivers, especially the Lachlan
          and Macquarie, and also explored the southern coasts of the future
          Queensland (1823), while Allan Cunningham was the great pioneer of
          that state’s hinterland (1827). Meanwhile, in 1824–25, Hamilton Hume
          and William Hovell went overland southward to the western shore of
          Port Phillip. Charles Sturt in 1828–30 won still greater fame by
          tracing the Murray-Murrumbidgee-Darling river system down to the
          Murray’s mouth.<br /><br />
          The writings of explorers and pioneers were Australia’s first
          contributions to literary culture. While catering to the European
          appetite for natural history, they sometimes achieved literary grace.
          Pictorial illustrations of the new land, some by convicts, also dated
          from the earliest years. David Collins’s An Account of the English
          Colony in New South Wales (1798) and Wentworth’s Description of New
          South Wales (1817) were literate, informed, and impressive. Wentworth
          showed skill as a versifier, too, especially in his Australasia
          (1823). Newspapers were founded as early as 1803, and they contributed
          to cultural as well as political history. Outstanding was the
          architecture of Francis Greenway, a former convict, who, under
          Macquarie’s patronage, designed churches and public buildings that
          remain among the most beautiful in Australia.
        </p>
        <h4>A major shift: 1830–60</h4>
        <p>
          The three decades between 1830 and 1860 saw rapid change. The impact
          was most evident in politics and the economy, but culture was no less
          affected. Not until 1825 did the European population pass 50,000; in
          1851 it was about 450,000, and by 1861 it had reached 1,150,000.
        </p>
        <h5>Settlement</h5>
        <p>
          Four of Australia’s six states were formed between 1829 and 1859. A
          British naval captain, James Stirling, examined the Swan River in 1827
          and interested English capitalist-adventurers in colonization. Two
          years later he returned to the Swan as governor of the new colony of
          Western Australia. The Colonial Office discouraged schemes for massive
          proprietorial grants; still the idea persisted, with Thomas
          Peel—kinsman of the future prime minister Sir Robert Peel—investing
          heavily. But colonization was grim work in a hot, dry land, with the
          government reluctant to expend resources. Western Australia’s story
          for decades was survival, not success.<br /><br />
          Yet enthusiasm quickly generated around proposals to establish a
          colony in South Australia, inspired by the British social reformer
          Edward Gibbon Wakefield. He argued that, if land were sold at a
          “sufficient” price, its owners would be forced to maximize its value
          by cultivation, while labourers would have to lend their energies to
          that task before being able to become landowners themselves.
          Wakefield’s ideas appealed to the liberal intelligentsia and to
          dissenting groups in England. Both of these elements backed nascent
          South Australia. The first colonists arrived in 1836, and Adelaide was
          settled the following year. The colony experienced many hardships, but
          lasting significance resulted from its founders’ emphasis on family
          migration, equality of creeds, and free market forces in land and
          labour.<br /><br />
          The northern and southern portions of New South Wales formed separate
          colonies. Settlement into the Port Phillip district in the south
          proceeded very quickly, starting from the mid-1830s, with colonists
          coming both from north of the Murray and from Tasmania. The settlement
          of Melbourne began in 1835, and the place boomed immediately.
          Throughout the 1840s there were calls for constitutional independence;
          this was granted in 1851, at which time the Port Phillip District took
          the name Victoria. The Moreton Bay District in the north was never
          quite so buoyant, and the creation of Queensland had to wait until
          1859. Short-lived settlements included Port Essington (1838–49) and
          Gladstone (1847).
        </p>
        <h5>Politics</h5>
        <p>
          All the colonies except Western Australia gained responsible
          self-government. New South Wales led the way when an imperial act of
          1842 created a two-thirds elective legislature. The Australian
          Colonies Government Act (1850) extended this situation to Victoria,
          South Australia, and Tasmania. The act made allowance for further
          revision of the colonial constitutions, and in 1855–56 this took
          effect in the four colonies, Tasmania then abandoning the name Van
          Diemen’s Land. Queensland followed after its separation from New South
          Wales. All had bicameral legislatures, with ministers responsible to
          the lower houses, which by 1860, except in Tasmania, were elected on a
          near-democratic basis (all adult non-Aboriginal men were eligible to
          vote). In Victoria and South Australia the secret ballot was
          introduced in 1856 (see Australian ballot).<br /><br />
          While the imperial power thus responded to colonial cries for
          self-rule, on the way there were some tense moments. Virtually all
          colonists abhorred paying taxes for imperial purposes, including the
          costs of maintaining convicts locally; a good many disliked convictism
          altogether; most disputed the imperial right to dictate land policy;
          and many, especially in South Australia, disapproved of the imperial
          government’s directing that aid be given to religious
          denominations.<br /><br />
          From the outset of the period, the imperial government fostered a
          freer market in land and labour throughout the colonies, not merely in
          South Australia. Thus, grants of land ceased in 1831, replaced by
          sale. Attempts to create a pastoral-lease system caused much friction,
          with colonists generally hostile to any demand for payment. In New
          South Wales in 1844, new regulations even prompted talk of
          rebellion.<br /><br />
          With regard to labour, colonists agreed with imperial encouragement of
          free migration, but friction arose over the convicts. British opinion
          in the 1830s became increasingly critical of the assignment of
          convicts to private employers as smacking of slavery; it was abolished
          in 1840, and with it transportation of convicts to the mainland
          virtually ceased, although increased numbers were sent to Tasmania.
          The end of assignment removed the chief virtue of transportation, from
          the colonists’ viewpoint, and so contributed to a vigorous movement
          against its continuation. The British government ended transportation
          to eastern Australia in 1852. In Western Australia transportation
          began in 1850, at the colonists’ behest, and continued until 1868.
          Altogether some 151,000 convicts were sent to eastern Australia and
          nearly 10,000 to Western Australia. <br /><br />In the early 1850s the
          most dramatic political problem arose from the gold rushes. Diggers
          (miners) resented tax imposition and the absence of fully
          representative institutions. Discontent reached a peak at Ballarat,
          Victoria, and in December 1854, at the Eureka Stockade, troops and
          diggers clashed, and some were killed. The episode is the most famous
          of the few occasions in Australia’s history involving violence among
          Europeans.<br /><br />
          Common suspicion of the imperial authority modified, but did not
          obliterate, internal tension among the colonists. Divisions of
          ideology and interest were quite strong, especially in Sydney, where a
          populist radicalism criticized men of wealth, notably the big
          landholders. The coming of self-government marked a leftward (although
          far from revolutionary) shift in the internal power balance.
        </p>
        <h5>The Economy</h5>
        <p>
          The three decades leading to 1860 saw booms of the two bonanzas of
          Australian economic growth—wool and minerals.<br /><br />
          Only then did men, money, markets, and land availability interact to
          confirm that Australia was remarkably suited for growing fine wool.
          Occupation of Port Phillip was the most vital part of a surge that
          carried sheep raising 200 miles and farther in an arc from beyond
          Adelaide in the south, north, and east to beyond Brisbane. The
          “squatter” pastoralist became an archetype of Australian history.
          Although it suffered some depression in the early 1840s, the industry
          kept growing, and the whole eastern mainland benefited as a result.<br /><br />
          The first significant mineral discovery was that of copper in South
          Australia (1842 and 1845). The discovery had the effect, to be
          repeated time and again, of suddenly redeeming an Australian region
          from stagnation. Much more remarkable, however, were a publicized
          series of gold discoveries made from 1851 onward, first in
          east-central New South Wales and then throughout Victoria. As a result
          Australia became a land of golden attraction. The Victorian economy
          benefited from the flood of men and money, although the smaller
          colonies suffered. The Eureka Stockade incident not withstanding, the
          diggers proved more rowdy than revolutionary.
        </p>
        <h5>Culture</h5>
        <p>
          Both governments and citizens paid considerable heed to improvement of
          soul and mind. From the mid-1830s, generous aid helped all Christian
          churches to expand. The Church of England had the highest nominal
          allegiance, but in the eastern mainland colonies Roman Catholicism was
          notably strong; Methodism had vigorous advocates throughout;
          Congregationalism and other forms of dissent dominated in South
          Australia; and Presbyterianism had its chief strength in Victoria.
          Most churches attended to education, especially the provision of
          superior schools, while the state struggled to provide a primary
          system. The Universities of Sydney and Melbourne were founded in 1850
          and 1853, respectively. Mechanics’ institutes, museums, and botanical
          gardens also were built.<br /><br />
          Architects created much beauty in early Australia. Artists were
          active; drama and music developed in all towns. At the same time, a
          distinctive Australian literature began to develop. The first
          Australian novel, Quintus Servinton (1830–31), was written by a
          convict, Henry Savery; Henry Kingsley’s Geoffrey Hamlyn (1859) is
          often judged the first major Australian novel. John West’s History of
          Tasmania (1852) was a work of remarkable scope and insight.
          <br /><br />Various forms of science had their investigators, but land
          exploration remained the richest field of discovery. Sir Thomas
          Livingstone Mitchell confirmed Sturt’s work on the river systems and
          first opened the way from New South Wales to the rich lands of western
          Victoria (1836). The Western Australian coastal regions were mapped by
          George Grey (1837–40) and by Edward John Eyre, who went overland from
          Adelaide to Albany (1840). Eyre and Sturt both vainly attempted to
          reach mid-continent from Adelaide; this was at last achieved in April
          1860 by John McDouall Stuart, who in 1862 went still farther, to
          Darwin. Meanwhile, the central north and the northeast had been
          penetrated from Sydney; the most famous explorer was Ludwig
          Leichhardt, who led two successful expeditions (1844, 1846–47) before
          disappearing in an attempt to traverse from the Darling Downs to
          Perth. An equal and more celebrated tragedy ended the expedition of
          Robert O’Hara Burke and William John Wills, who crossed from Melbourne
          to the Gulf of Carpentaria in 1860–61 but starved to death on the
          return. Later explorations of Western Australia in the 1870s added the
          names of John Forrest and Ernest Giles to the pantheon of
          explorer-heroes.
        </p>
        <h5>Aboriginal People</h5>
        <p>
          Economic development by Europeans had as its necessary complement the
          ravaging of Aboriginal life. Especially if it is accepted that the
          pre-1788 Aboriginal population exceeded one million and that living
          standards were high, the subsequent history must all the less appear
          as one of colonial “growth” and all the more as one of forced transfer
          (or theft) of wealth from Aboriginal to European people.<br /><br />Some
          tension always threatened as the two groups met, but, often,
          Aboriginal people were accommodating and responsive. A kind of
          coexistence might have evolved had not European pastoralism generated
          an inexorable demand for land. Aboriginal people responded with
          guerrilla warfare, often fiercely and tenaciously. Ultimately, more
          than 20,000 of them and almost 2,000 Europeans are estimated to have
          died as a consequence. Disease and alienation, often allied with
          massive physical displacement, wreaked further havoc.<br /><br />Some
          European consciences were troubled—most notably those of British
          Evangelicals in the 1830s. There had always been a stream of
          humanitarian and Christian concern for Aboriginal people in European
          Australia. In Tasmania only a very few persons of full Tasmanian
          Aboriginal descent survived by 1860, and they were the last. The
          “protectorates” (reserved areas) that imperial policy had established
          in several mainland colonies served little purpose.
        </p>
        <h4>Several Small Democracies: 1860-1900</h4>
        <p>
          Between 1860 and 1900 the colonies had little formal relation with
          each other; instead they concentrated their attention inward on their
          capitals. The separate histories of each state therefore have
          particular importance for this period. Withal, patterns were similar,
          and federation at length came about in 1901.
        </p>
        <h5>Politics</h5>
        <p>
          Democracy was largely established, save that the upper houses remained
          elitist in franchise and membership. Governments often had short and
          inchoate lives, but the constitutions survived. Political groupings
          were extremely intricate, often personal or power-seeking in origin,
          but allowing some expression for liberal or conservative ideology.<br /><br />
          The liberals made the colonies quite advanced in matters of social
          reform, if not the average man’s paradise that some glib publicists
          depicted. Breaking up the large “squatter” estates and replacing them
          with yeoman farming was a constant concern, meeting many difficulties
          yet achieving some effect where market and environment allowed.
          Reformers put much faith in education and strove toward providing
          adequate primary schooling for all. “Free, secular, and compulsory”
          was a slogan and roughly the final result; this entailed hot
          controversy with the Roman Catholic church, which scorned the
          “godless” schools and made enormous efforts to provide its own. Other
          forms of state aid to religion tapered away. Factory legislation and
          rudimentary social services developed; however, restriction of
          nonwhite, especially Chinese, immigration was enforced, for Europeans
          feared these labourers would reduce living standards, but the
          restriction was also a matter of sheer racism.
        </p>
        <h5>The Economy</h5>
        <p>
          Overall the economy prospered, with the European population rising to
          3,370,000 in 1901. Wool and metals continued as the great export
          income earners. Pastoralism flourished, especially up to the
          mid-1870s; despite land legislation, this was the heyday of the
          squatter “aristocracy.” Expansion of sheep and cattle growing into the
          more distant hinterland continued the heroic-pioneer theme of earlier
          years. Railway construction aided rural industry and proceeded
          remarkably quickly, notably in the 1880s: between 1875 and 1891 the
          mileage rose from 1,600 miles to above 10,000 and reached as far as
          500 miles inland. Most of the required capital was raised overseas on
          behalf of governments, contributing to the extremely important role
          played by the public sector in economic growth. The 1890s were less
          prosperous. This resulted in part from a worldwide decline in wool
          prices and investor confidence. Local circumstances also contributed,
          however, as capital, often borrowed from overseas, increasingly went
          into speculative and unprofitable ventures.<br /><br />
          Victoria’s gold and South Australia’s copper maintained their
          significance as new techniques allowed more sophisticated
          exploitation. Gold was found in southern Queensland in the later 1860s
          and then in the Northern Territory and in tropical Queensland: the
          Palmer River goldfield pulled men to the far north in the mid-1870s.
          By then Cobar, in central New South Wales, had proved the most
          important of many new copper fields. Tin also became significant,
          Mount Bischoff in Tasmania being the world’s largest lode at its
          discovery in 1871. The 1880s were predominantly the decade of silver;
          western New South Wales proved richest, and in 1883 Charles Rasp, a
          German migrant, first glimpsed the varied riches of Broken Hill. The
          silver, lead, and zinc ores found there were to make that city almost
          fabulous and to prompt the establishment of Broken Hill Proprietary
          Company Ltd.—in time, Australia’s largest private enterprise. Also
          from 1883 dated another big and ramifying discovery, the gold of Mount
          Morgan, Queensland. Gold also became Western Australia’s great bonanza
          in the early 1890s, the Kalgoorlie and Coolgardie fields winning
          international attention; the copper of Mount Lyell, Tasmania, was
          another highlight of that decade. These discoveries were both product
          and instigator of much wider activity, creating speculation, mobility,
          boom, and slump of extraordinary impact.<br /><br />
          Urban expansion and the growth of secondary industry, while less
          distinctive to Australia and contributing little to export income,
          were remarkable. By the criteria of investment, employment, and
          relative acceleration, the growth of secondary industry outstripped
          that of primary industry. Secondary industry multiplied its growth
          some 10 times over during the period, so that manufacturing and
          construction accounted for one-fourth of the national product in the
          1880s. The population ratio shifted decisively from country to town,
          establishing an extreme capital-city concentration and eventually
          placing Melbourne and Sydney among the world’s large cities. Urban
          building and services attracted much capital, and most manufacturing
          was directed to providing food, furniture, and clothing for the
          relatively affluent townspeople. City speculation contributed more
          than its share to overcapitalization, and the main impact of the
          depression of the 1890s was in the urban industrial sector.
        </p>
        <h5>The Colonies</h5>
        <p>
          The history of the respective colonies sharpens some points in this
          general background. In the later 19th century regional characteristics
          consolidated, and they changed little at least until the 1960s.
        </p>
        <h6>Victoria</h6>
        <p>
          Victoria retained the impetus of the 1850s for a full generation. This
          was most evident in its capital, Melbourne, which had a vigorous
          cultural and social life. Ardent and ideological liberalism was
          evident in the colony’s education controversy and, with greater
          novelty, in its adoption of tariff protection as a means of developing
          its industries and living standards. Disputes between the upper
          (conservative) and lower (liberal) houses of the parliament were
          frequent and sharpened political feeling. Liberals gained some notable
          victories, but even in Victoria bourgeois values were altogether
          dominant.
        </p>
        <h6>New South Wales</h6>
        <p>
          With its longer background, New South Wales changed less during this
          period. Its master politician, Henry Parkes, first came into
          prominence in the 1840s. Parkes was involved in sectarian disputes,
          which were especially vigorous in the colony. Another major theme of
          political debate was protection versus free trade—the latter retaining
          greater favour, in contrast to Victoria. Sydney had its share of
          scandals and scalawags, especially late in the period, contributing to
          its rambunctious image.
        </p>
        <h6>
          Queensland
        </h6>
        <p>
          Expansion westward and northward dominated the history of Queensland.
          Cattle and sugar became industries of substantial importance. A class
          of small farmers aspired to settle the tropics, which had been
          considered unsuitable for small-scale farming by Europeans.
          Conversely, the established “kings” of the tropical region relied on
          Kanakas (labourers from the Pacific islands). The continued
          immigration of Kanakas provoked hot debate, which was not resolved
          until after federation, when the young commonwealth imposed an
          absolute prohibition.
        </p>
        <h6>South Australia</h6>
        <p>
          South Australia enjoyed less prosperity than its eastern neighbours.
          Agriculture remained significant in its economy but was not without
          setbacks; in the decade around 1870 farmers pushed out into semiarid
          country, hoping that rain would follow the plow, only to learn with
          cruel certainty that it did not. Landholding did prompt South
          Australia’s most famous contribution to reform: that land transfer
          proceed simply by registration, rather than through cumbrous title
          deeds. Another notable contribution was the institution of woman
          suffrage (1894), which helped bring nationwide application of the
          principle at federation. Appropriately, South Australia was the home
          of Catherine Helen Spence, the most remarkable Australian woman in
          public life, who published a significant novel, Clara Morison (1854),
          and became active in many social and political movements.<br /><br />
          In 1863 the colony took over the administration of the area thereafter
          known as the Northern Territory, which earlier had been technically
          part of New South Wales; the change entailed adjustment of boundaries.
          (The territory became the concern of the federal government in 1911.)
        </p>
        <h6>Tasmania</h6>
        <p>
          The 1860s imprinted a sleepy image on Tasmania, which persisted. The
          mineral discoveries at Mount Bischoff and elsewhere were important in
          reviving the economy. Nevertheless, living standards generally
          remained lower than elsewhere, and there were still property
          qualifications for voting in 1900. The colony contributed to
          democratic practice, however, by experimenting with proportional
          representation.
        </p>
        <h6>Western Australia</h6>
        <p>
          Western Australia ceased to receive convicts in 1868; it gained a
          partly elected legislature in 1870 and responsible government in 1890.
          The premier throughout the 1890s was Sir John Forrest, who was as
          adept at politics as he had been at exploration. Until the gold
          rushes, economic growth was slow and primitive; in the 1890s the
          colony was fastest in relative growth and little short of that in
          absolute terms. Farming (in the southwest), town and railway building,
          and social legislation all followed.
        </p>
        <h5>Social Movements</h5>
        <p>
          Working-class and radical movements stretched back to the 1830s,
          although substantial trade union organization came only after the
          mid-century.
        </p>
        <h6>Labour</h6>
        <p>
          The unions won some job benefits, including widespread adoption of the
          eight-hour workday. The 1870s and ’80s saw extensive mass unionism,
          notably among miners and sheepshearers. Trades halls arose in the
          cities, and organizations extending beyond colonial boundaries began
          to knit together. The unions early considered using political pressure
          and gaining political representation. This inclination strengthened in
          the early 1890s, helped by tougher times and by employers’ stiffening
          resistance to union demands. Thus arose the labour parties, which
          gained quick success, especially in New South Wales and Queensland. At
          first the labourites’ aim was simply to influence ministries, but for
          a few days in December 1899 Anderson Dawson was Labor premier in
          Queensland.<br /><br />
          Other radicals reacted differently to the pressures of the 1890s. A
          few hundred of them set off for Paraguay in 1893 to establish there a
          utopian “New Australia”; they failed. Republicanism was fairly strong
          in the 1880s and ’90s, sometimes accompanied by a nearly Marxist
          militancy.
        </p>
        <h6>Movement Towards Federation</h6>
        <p>
          Federation was another ideal of the times. Most important politicians
          supported the cause, with more or less altruism. They could invoke
          more positive factors than common background and apparent common
          sense. Especially since the Crimean War (1853–56), Australians had
          feared incursion from the north by Europeans or Asians or both; the
          most emphatic result came early in 1883, when the government of
          Queensland, fearful of Germany, took possession of Papua, forcing
          Britain’s reluctant connivance. Better defense was one motive for
          association, and so was the prospect of more effective Asian
          immigration restriction; intercolonial free trade was another
          desideratum. The Australian Natives Association (the Australian-born
          comprised nearly two-thirds of the population in 1901) rallied to the
          cause.<br /><br />
          Yet the events progressed slowly. A federal council was established in
          1885 but was only a standing conference without executive power. New
          South Wales never joined the council; the senior colony was jealous of
          a movement that would reduce its autonomy, the strength of which was
          in Victoria. Conventions met in 1891 and 1897–98 to prepare drafts for
          a national constitution. The final draft was confirmed by referendum,
          and the Commonwealth of Australia came into existence on January 1,
          1901.<br /><br />
          The constitution was federal, the states (as the colonies now had
          become) forsaking only limited and specified powers to the
          commonwealth government; these included defense, immigration, customs,
          marriage, and external affairs. While the lower house, the House of
          Representatives, consisted of single-member constituencies of roughly
          equal size, each state had an equal number of representatives in the
          upper house, the Senate. Ministers were to be members of Parliament. A
          high court would interpret the constitution. Woman suffrage was
          enacted in 1902. Aboriginal people, however, were denied citizenship
          rights under the constitution.
        </p>
        <h6>The Culture</h6>
        <p>
          Men of learning had contributed to the nationalist surge. Especially
          in the 1890s and through the Sydney Bulletin, verse and prose
          portrayed the Outback as the home of the true Australian—the bush
          worker: tough, laconic, and self-reliant but ever ready to help his
          “mate.” The Bulletin was nationalist, even republican, and much more
          radical than the federalist politicians. Henry Lawson and Joseph
          Furphy were the supreme writers of the nationalist school. Painters
          and poets also extolled the nationalist ideal.<br /><br />
          Not all cultural achievement belonged to the nationalist context,
          however. Henry Kendall was a lyricist of nature, and Adam Lindsay
          Gordon wrote of horses and countryside with a skill that won him a
          memorial in Westminster Abbey. “Rolf Boldrewood” (Thomas Alexander
          Browne) wrote tales of Outback adventure, while the great 19th-century
          Australian novel was Marcus Clarke’s For the Term of His Natural Life
          (1874), based upon convict records and legends. The older universities
          remained small but had some outstanding men on their faculties; the
          Universities of Adelaide (1874) and Tasmania (1890) were new
          foundations. Ferdinand von Mueller was an outstanding botanist who
          worked primarily at the Botanic Gardens, Melbourne. That city was the
          home of the great coloratura soprano Nellie Melba. <br /><br />Popular
          culture followed the British model, with music halls, novelettes, and
          especially sport to the fore. Australian rules football developed
          first in Melbourne and became strong throughout southern Australia. In
          cricket, a victory over the mother country in 1882 established one
          area of colonial equality. Admiration combined with fear to create a
          sporadic cult of the bushranger (highwayman); its most famous
          expression came with the capture of Ned Kelly’s gang and Kelly’s
          execution in 1880. Urban youths joined in gangs, or “pushes,” and won
          the epithet “larrikin,” or rowdy.
        </p>
        <h5>Aboriginal People</h5>
        <p>
          The Aboriginal experience continued to be grim. The estimated number
          of persons of predominantly Aboriginal descent declined from about
          180,000 in 1861 to less than 95,000 in 1901. Many Europeans, in
          accordance with contemporary ideas of racial superiority, believed
          that Aboriginal people must die out and acted in such a way as to
          ensure that outcome. Frontier violence continued, or even intensified,
          in northern Australia. In the more-settled south, people of mixed race
          became common. A feeling of despair prevailed among the nonwhite
          population, for, although the newly self-governing colonies made some
          sympathetic protestations, they rarely took appropriate or effective
          action. Even the shelter of mission and government “stations”
          diminished from the 1880s as policy makers decided to disperse
          Aboriginal people, especially those of predominantly European descent.
          As a result, a growing number of people suffered the miseries of
          ghetto life on the margins of capital cities and country towns.
          Aboriginal people served as workers and servants in the Outback, where
          they were often crucial to the pastoral economy, but they rarely
          received due respect or reward.
        </p>
        <h4>Nationhood And War: 1901-45</h4>
        <h5>Growth of the Commonwealth</h5>
        <p>
          The world’s passions and conflict of the early 20th century were to
          shape the new nation’s history, despite its physical distance from
          their epicentres. In some respects this was the least positive of the
          major periods of Australian history. Nationalism grew in strength, but
          it killed and sterilized as much as it inspired; egalitarianism tended
          to foster mediocrity; dependence on external power and models
          prevailed. Yet creativity and progress survived, and Australia’s
          troubles were small compared with those of many contemporary
          societies.<br /><br />
          Drabness was most evident in economic affairs. At the broadest level
          of generality, the period did little more than continue the themes of
          the 1860–90 generation. The most important such themes were the
          increasing industrialization and improvement of communications;
          railways reached their peak of 27,000 miles in 1941, and meanwhile
          came the motor boom. In the agricultural sector there was significant
          expansion of exports, with wheat, fruits, meat, and sugar becoming
          much more important than theretofore. But just as manufactures
          received increasingly high tariff protection, so the marketing of
          these goods often depended on subsidy. Hence, the sheep’s back
          continued to be the nation’s great support in world finance. Metals,
          gold especially, were important in the early years, but thereafter
          this resource conspicuously failed to provide the vitality of earlier
          and later times. The worldwide economic depression of the 1930s
          affected Australia, especially its primary industries. Otherwise, the
          overall rate of growth, and probably of living standards, too,
          scrambled upward—more quickly than average in the years around 1910
          and again in the early 1940s. <br /><br />In national politics,
          candidates fought for office with increasing vigour and resource,
          while their administrative performances generally began well but then
          ebbed. A constant theme was the strengthening of the central
          government against the states. This complemented the high degree of
          homogeneity, especially in personal and social matters, that extended
          through Australia’s great physical spread; it was expressed primarily
          through the Commonwealth’s financial powers—at first especially
          relating to customs and excise duties but later by direct taxation.
          From World War I (1914–18) both levels of government imposed income
          taxes, but in 1942 the federal government virtually annexed the field,
          with the high court’s approval. The establishment of a national
          capital at Canberra, where Parliament first sat in 1927 after having
          met in Melbourne since federation, symbolized this situation. The
          strengthening of the Commonwealth was scarcely a product of popular
          enthusiasm. Several constitutional referenda upheld the rights of the
          states, each of which had its own distinct political, cultural, and
          social characteristics.<br /><br />
          The first two prime ministers were Edmund Barton (1901–03) and Alfred
          Deakin (1903–04), who had headed the federation movement in New South
          Wales and Victoria, respectively. They were liberal protectionists.
          Their ministries established a tariff, an administrative structure,
          and the White Australia immigration policy that excluded Asians. They
          also established the High Court and initiated legislation for a court
          of conciliation and arbitration. This carried to the highest point in
          the world the principles of industrial arbitration and judicial
          imposition of welfare and justice through wage and working-condition
          awards.<br /><br />
          In 1904 John Christian Watson led the first, brief Labor cabinet,
          followed by George Houston Reid’s conservative free-trade ministry.
          Deakin led again (1905–08), and Andrew Fisher was Labor’s second prime
          minister (1908–09); his ministry was defeated when liberals and
          conservatives “fused” in Deakin’s third term (1909–10). Labor then won
          its first clear majority at election, which it barely lost in 1913 and
          regained, still under Fisher, in 1914. These changing ideologies did
          not hinder—perhaps even prompted—ambitious governmental policies.
          Social services were extended with old-age pensions (1908) and
          maternity grants (1912); protection rose markedly in a 1908 tariff;
          the Commonwealth Bank was established; and an army and navy
          developed.<br /><br />
          The new nation was psychologically as well as physically prepared for
          war. Fear of attack became increasingly directed against Japan,
          prompting pressure on Great Britain for a firmer policy in the New
          Hebrides (since 1886 supervised jointly by Britain and France); this
          was achieved in 1906–07. Although many Australians criticized Britain
          when the latter appeared negligent of local interests, the dominant
          note was profound loyalty to the empire. Colonial troops had fought in
          both the Sudan and South African (Boer) wars. In 1914, when World War
          I began, politicians of all hues rallied to the imperial cause.
        </p>
        <h5>World War I</h5>
        <p>
          Some 330,000 Australians served in World War I; 60,000 died, and
          165,000 suffered wounds. Few nations made such relatively heavy
          sacrifice. The most famous engagement of the Australia and New Zealand
          Army Corps (ANZAC) was in the Dardanelles Campaign (1915); the day of
          the landing at Gallipoli—April 25—became the preeminent day of
          national reverence. Even before Gallipoli, Australian troops had
          occupied German New Guinea, and the Australian warship Sydney sank the
          German cruiser Emden near the Cocos Islands (November 9, 1914). After
          the Dardanelles Australians fought primarily in France; Ypres, Amiens,
          and Villers Bretonneux were among the battles, all marked by
          slaughter. In Palestine the Australian light horse and cavalry corps
          contributed to the defeat of the Ottoman Empire.<br /><br />
          The war profoundly affected domestic affairs. Economically, it acted
          as a super-tariff, benefiting especially textiles, glassmaking,
          vehicles, and the iron and steel industry. Such products as wool,
          wheat, beef, and mutton found a readier market in Britain, at inflated
          prices. But the shock of war affected politics much more, especially
          by giving full scope to the furious energy of William Morris Hughes,
          who supplanted Fisher as Labor prime minister in October 1915. Soon
          afterward he visited Britain. There his ferocity as a war leader won
          acclaim, and he became convinced that Australia must contribute still
          more. He advocated military conscription, but many Australians felt
          that the government should not force men to fight in overseas wars,
          and the large-scale casualties of the war reinforced this notion. A
          referendum seeking approval for conscription was defeated in October
          1916, and immediately afterward the Labor parliamentary caucus moved
          no confidence in Hughes’s leadership. He continued as prime minister
          of a “national” government, however, even after losing a second
          conscription referendum in December 1917. The referenda in particular
          and war stress in general made these years uniquely turbulent in
          Australian history. The Labor Party lost other men of great ability
          along with Hughes. The split solidified a long-standing trend for
          Roman Catholics to support the party. Hughes’s enemies also included
          the small but growing number of extremists—most notably the Sydney
          section of the Industrial Workers of the World (IWW)—who opposed the
          war on doctrinaire grounds.
        </p>
        <h5>The Postwar Years</h5>
        <p>
          The aftermath of war continued, but finally resolved, this turbulence.
          Some radicals hoped that returning servicemen would force social
          change, but instead the Returned Sailors’ and Soldiers’ Imperial
          League of Australia (later called the Returned Services League of
          Australia) became a bastion of conservative order, some of its
          supporters ready to use physical force against local people they
          considered “bolsheviks.” The Labor Party faltered, its members
          adopting a more radical socialist type of platform in 1921, but with
          far from uniform conviction. (In 1918 the name Australian Labor Party
          [ALP] was adopted throughout Australia.) When the challenge came to
          Hughes’s leadership early in 1923, it arose partly from the
          conservative-business wing of Hughes’s own Nationalist Party (its
          representative, Stanley Melbourne Bruce, becoming prime minister) and
          partly from the Country Party, which from late 1922 held a crucial
          number of parliamentary seats. Although led by wealthy landowners, the
          Country Party won support from many small farmers. It benefited too
          from its former-soldier image and from widespread country-versus-city
          feeling. Its leader, Earle C.G. Page, had considerable, if erratic,
          force.<br /><br />
          Bruce continued as prime minister until 1929, with Page his deputy in
          Nationalist-Country coalitions. Bruce strove to buoy the economy by
          attracting British investment and fostering corporative capitalism.
          Tariffs, bounties, prices, and public indebtedness all rose. There was
          considerable administrative innovation—e.g., the Loan Council
          regulated all government borrowing—and the successful Council for
          Scientific and Industrial Research (later called the Commonwealth
          Scientific and Industrial Research Organisation [CSIRO]) was
          established in 1926 to apply scientific expertise to developmental
          problems. The worldwide development of consumer industry had its
          impact: the revolution in transportation provided by the automobile is
          the best example, although full-scale car production was still in the
          future.<br /><br />
          With much economic activity subsidized—the exception being one primary
          product, wool—Australia was particularly vulnerable to the Great
          Depression of the 1930s. It struck hard: unemployment exceeded
          one-fourth of the work force and imposed a degree of social misery
          rarely known in Australian history. The rate of recovery was uneven,
          manufactures doing better than primary industry. Population growth
          slowed; at the nadir, emigration exceeded immigration.<br /><br />
          Politics reflected the impact. James Henry Scullin succeeded Bruce as
          prime minister in October 1929, but his Labor ministry suffered the
          real squeeze of events; within the ALP there was considerable division
          as to how government should react to the Depression. Some favoured a
          generally inflationist policy, with banks facilitating credit issue
          and governments extending public works. Right-wing Labor distrusted
          such a policy; radicals would have gone further by renouncing interest
          payment on overseas loans. Conservative opinion argued for
          deflationary policies—curtailed government expenditure, lower wages,
          balancing the budget, and the honouring of interest commitments. In
          June 1931 the Commonwealth and the state governments agreed on a plan,
          called the Premiers’ Plan. Although the plan had some inflationary
          features, it foreshadowed a one-fifth reduction in government
          spending, including wages and pensions—a considerable affront to
          Labor’s traditional attitudes.<br /><br />
          Against this background the government disintegrated. Before the
          Premiers’ Plan, some Labor right-wingers, led by Joseph Aloysius
          Lyons, had crossed to the opposition. In November some leftist
          dissidents voted against Scullin, forcing his resignation. In the
          elections that followed, Labor suffered a heavy defeat. The new prime
          minister was Lyons, whose followers had coalesced with the erstwhile
          Nationalists to form the United Australia Party (UAP). Lyons led a
          wholly UAP government until 1934 and UAP-Country coalitions until his
          death in 1939.<br /><br />
          The Lyons governments provided stability and not much more. Recovery
          was uneven and sporadic, quicker in manufacturing than in primary
          industry, aided more by market forces than by governmental planning.
          Two policies failed to fulfill expectations—the Imperial Economic
          Conference, held at Ottawa, Ontario, Canada, in 1932, improved trade
          slightly, but the integrated economic community for which some had
          hoped never developed. Australia’s trade diversion policy of 1936,
          which tried to redress the imbalance of imports from Japan and the
          United States, offended those countries and actually reduced exports
          further. A plan for national insurance, the Lyons governments’ most
          ambitious social legislation, also aborted. These mishaps did not much
          bother the electorate; improvement, even if meagre, was enough to
          retain favour<br /><br />
          Internal division was the greater threat to the government. This
          became manifest after Lyons’s death. The UAP elected Robert Gordon
          Menzies its new leader (and therefore prime minister); but the
          decision was hard fought, and it was criticized publicly and
          vehemently by Page, still leader of the Country Party. Nevertheless,
          Menzies retained office; but internal division persisted, the
          coalition’s parliamentary majority was tiny, and Menzies resigned in
          August 1941. Arthur William Fadden, the new leader of the Country
          Party, then took office, but in October he gave way to John Curtin and
          a Labor ministry.<br /><br />
          While the electorate generally voted conservative, Australia shared
          the common Western experience of the interwar years in the rise of a
          small, vigorous communist movement. Founded in 1922, the Australian
          Communist Party made most headway in the big industrial unions and in
          Sydney; it also had some influence and supporters among the
          intelligentsia, especially in the 1930s. The party suffered a share of
          internal factionalism but for the most part was able to present a
          united face to the public.<br /><br />
          Fascism achieved no formal political recognition in Australia, but
          there were hints of sympathy toward fascist attitudes—D.H. Lawrence
          wrote of such in his novel Kangaroo, based on a brief visit in 1922;
          and an “Australia First” movement began in literary nationalism but
          drifted into race mystique and perhaps even treason. An intellectual
          movement of more lasting force developed among a group of young Roman
          Catholic intellectuals in Melbourne in the mid-1930s. They developed a
          commitment to social justice and against communism, somewhat in the
          manner of G.K. Chesterton. This was known as the Catholic Social
          Movement, and it had considerable influence.<br /><br />
          Whereas Australia had been virtually spoiling for war before 1914,
          passivity became the international keynote after 1920. At the Paris
          Peace Conference that formally concluded World War I, Hughes was his
          fire-eating self, especially in defense of Australia’s interests in
          the Pacific. Thus he won a mandate for erstwhile German New Guinea and
          Nauru (an atoll in the central Pacific) and effectually opposed a
          Japanese motion proclaiming racial equality, which he thought might
          presage an attack on Australia’s immigration laws. In the League of
          Nations, Australia was an independent member from the outset. Yet in
          following years “the empire” became the object of even more rhetoric
          and more desperate hope than earlier. Australia did not ratify the
          Statute of Westminster (1931, embodying the 1926 Balfour Report as to
          the constitutional equality of the dominions) until 1942. The UAP
          governments followed Britain closely in its attitude toward the
          totalitarian expansion of the 1930s; if Australian influence counted
          for anything, it was to strengthen appeasement of Germany and Japan.
          Although fear of Japan continued, that country’s accession to the
          fascist camp did not provoke a tougher governmental line. The
          government suspected that Britain could not control the Eastern
          Hemisphere but found no answer to that dire problem. The Labor Party
          meanwhile was even more incoherent and variable in matters of foreign
          policy than were its social democratic counterparts elsewhere in the
          Western world: isolationism and antifascism were equal and opposing
          forces.
        </p>
        <h5>World War II</h5>
        <p>
          When war came again, however, the nation’s response was firm—some
          30,000 Australians died in World War II (1938–45), and 65,000 were
          injured. From early in the war, the Royal Australian Air Force was
          active in the defense of Britain. The Australian Navy operated in the
          Mediterranean Sea (1940–41), helping to win the Battle of Cape Matapan
          (March 1941). Australian troops fought in the seesaw battles of North
          Africa.<br /><br />
          In mid-1941 Australians suffered heavy losses both in the Allied
          defeats in Greece and Crete and in the victories in the Levant.
          Meanwhile, the German general Erwin Rommel was scoring his greatest
          triumphs in North Africa. Out of these emerged the successful Allied
          defense of Tobruk, carried out substantially by Australians
          (April–December 1941), and the decisive victory at the battles of
          El-Alamein, in which an Australian division played a key role.<br /><br />
          After the Japanese attacked the U.S. naval base at Pearl Harbor,
          Hawaii (December 7, 1941), however, the focus shifted homeward. The
          Japanese victories of the following months more than fulfilled the
          fantasies that fear and hate had long prompted in Australia. On
          February 15, 1942, 15,000 Australians became prisoners of war when
          Singapore fell to Japanese forces, and four days later war came to the
          nation’s shores when Darwin was bombed. Then came a Japanese swing
          southward that by August threatened to overrun Port Moresby, New
          Guinea.<br /><br />
          When Australia entered the war, compulsory military training was
          reintroduced by the Menzies government and commenced in January 1940.
          All unmarried men age 21 were required to complete three months of
          compulsory military training in the Citizen Military Forces (also
          known as the Militia). Because the Defence Act of 1903 restricted
          conscription to soldiers fighting on Australian land, a separate
          volunteer force, the 2nd Australian Imperial Force, was established to
          send troops to fight abroad while the Citizens Military Force defended
          the homeland and its territories. <br /><br />In 1942 the worsening
          situation in the Pacific and in Southeast Asia, along with the
          consequent threat of a Japanese land invasion in northern Australia,
          caused widespread panic in Australia and led the government to take
          drastic measures to protect the country and its territories. John
          Curtin, leader of the Australian Labor Party, who had succeeded
          Menzies as prime minister, reversed his strong personal opposition to
          compulsory overseas military service to allow the government to
          conscript soldiers to fight the Japanese in the “South-West Pacific
          Area.” Enacted on February 19, 1943, the Defence (Citizen Military
          Forces) Act of 1943 extended the defense of Australia to include the
          territory of New Guinea and adjacent islands, thus allowing for the
          conscription of Australian troops to serve in the “South-Western
          Pacific Zone.”<br /><br />
          The United States became Australia’s major ally. In a famous statement
          (December 1941), Prime Minister Curtin declared: “I make it quite
          clear that Australia looks to America, free from any pangs about our
          traditional links of friendship to Britain.” A sharper note of
          independence from Britain came when Curtin insisted (February 1942)
          that Australian troops recalled from the Middle East should return to
          Australia itself and not help in the defense of Burma (Myanmar) as
          British Prime Minister Winston Churchill wished. Conversely, American
          needs prompted total response to Curtin’s call. U.S. Gen. Douglas
          MacArthur, commander in chief of the South-West Pacific Area,
          established his headquarters first in Melbourne and then in
          Brisbane.<br /><br />
          The large U.S. military presence in Brisbane was not without problems.
          When American troops began arriving in Australia in December 1941,
          their presence was warmly welcomed. However, Australian attitudes
          toward them began to change, particularly the attitude of Australian
          soldiers who felt threatened by the attention Australian women showed
          toward the better-paid, more stylishly uniformed American soldiers.
          The increasing tension erupted into the “Battle of Brisbane,” two
          nights of large-scale rioting that took place between Australians and
          U.S. servicemen in Brisbane’s central business district on November
          26–27, 1942. One Australian died and hundreds were wounded on both
          sides as a result of the violent clash.<br /><br />
          Brisbane also figured large in an alleged defense strategy that
          ultimately proved to be a canard, according to which, in the event of
          a Japanese invasion, the northern parts of the continent beyond “the
          Brisbane Line” between Brisbane and Perth were to have been conceded
          to the enemy without resistance. Supposedly, the objective of this
          plan was to concentrate Australian armed forces between Brisbane and
          Melbourne, where most of the crucial industrial regions were located.
          The idea was that the sheer distance that would have to be traveled by
          Japanese forces to reach the Brisbane Line would be debilitating for
          them.<br /><br />
          During an election campaign in October 1942, Labor minister Edward
          Ward accused the previous Menzies and Fadden governments of having
          planned this strategy, though he had no evidence to support his
          claims. MacArthur’s mention of the “Brisbane Line” to reporters in
          March 1943 sparked further public concern and controversy. A Royal
          Commission that operated from June to September 1943, however,
          determined that no such plan had ever existed as an official policy.
          Indeed, MacArthur decided that the best way to stop Japanese forces
          from advancing to Australia was to make a stand in New Guinea.
          <br /><br />Meanwhile, on land, the fortunes of war turned against the
          Japanese in August–September 1942, beginning with an Allied (primarily
          Australian) victory at Milne Bay, New Guinea. More prolonged—and of
          more heroic dimension in Australian eyes—was the forcing back of the
          Japanese from southern New Guinea over the Kokoda Track (or Trail),
          along which Australian soldiers put up strong resistance against
          seemingly overwhelming odds. The Japanese, having failed to capture
          Port Moresby by sea in the Battle of the Coral Sea (May 4–8, 1942),
          landed in northern New Guinea at the beachheads of Gona and Buna on
          July 21, 1942, with the intention of taking the New Guinea capital by
          pushing south over the rugged Owen Stanley Range along the Kokoda
          Track. In a series of engagements during what proved to be a
          four-month campaign, Australian troops eventually forced their more
          powerful adversary to withdraw, retaking the Kokoda region on November
          2, 1942. Their actions arguably saved Australia from Japanese invasion
          and, as such, formed a defining moment in Australian history. The
          endurance, courage, “mateship,” and never-give-up attitude the
          Australian soldiers displayed during the campaign fostered the
          so-called ANZAC legend, the tradition of the indomitable spirit of
          Australian troops that began with the original ANZACs in the Gallipoli
          Campaign of 1915 and continues today as an important element of
          national identity.<br /><br />
          A long attrition of Japanese forces elsewhere in New Guinea and the
          islands followed the Kokoda Track Campaign, with Australia initially
          playing a major role and subsequently playing a role secondary to
          American forces. Both Australian volunteers and conscripts fought in
          these campaigns, the government and people having accepted the
          legitimacy of sending conscripts as far north as the Equator and as
          far west and east as the 110th and 159th meridians.<br /><br />
          Because defeat in the Battles of the Coral Sea and Midway prevented
          Japan from continuing to supply its forces in Burma (Myanmar) by sea,
          the Japanese high command undertook the building of a rail line
          between Thailand and Burma. In addition to Asian labourers, more than
          60,000 Allied prisoners of war (POWs), including about 13,000
          Australians, were forced to construct the 260-mile (415-km) Burma
          (Thai-Burma) Railway Line. Subject to cruel punishment and torture,
          the POWs also suffered from disease and malnutrition. As a result,
          more than one-fifth of them, including more than 2,800 Australians,
          died during the yearlong (October 1942–October 1943) construction of
          the railway. The will to survive exhibited by the Australian
          POWs—including Lieut. Col. Ernest Edward (“Weary”) Dunlop, an army
          surgeon who risked his life by standing up to his Japanese captors to
          protect the men in his care—contributed further to the ANZAC
          legend.<br /><br />
          There were more than two dozen POW camps in Australia. On August 5,
          1944, one of the largest POW breakouts in history occurred at the
          facility in Cowra in east-central New South Wales. In the wee hours of
          the morning, more than 1,100 Japanese POWs staged a mass breakout,
          storming the barbed-wire fence surrounding the camp. More than 300
          prisoners managed to escape, but within nine days all of the escapees
          who had not chosen to kill themselves were recaptured. In all, 231
          Japanese POWs died as a result of the breakout. <br /><br />The war
          brought some passion into domestic affairs, albeit less than in World
          War I. Curtin’s government exercised considerable control over the
          civilian population, “industrial conscription” being scarcely an
          exaggerated description. Overall, this was accepted—partly because of
          the crisis, partly because the government showed purposefulness and
          capacity. Curtin easily won the 1943 elections. Thereafter, his
          ministry and the bureaucracy gave considerable thought to postwar
          reconstruction, hoping to use war-developed techniques to achieve
          greater social justice in peace.<br /><br />
          The war carried industrialization to a new level. The production of
          ammunition and other matériel (including airplanes), machine tools,
          and chemicals all boomed. Meanwhile, primary production lost prestige,
          aid, and skills, so that the 1944 output was but two-thirds that of
          1939–40. Urban employment was bountiful, and concentration in the
          state capitals became more marked than ever. Many families had two or
          more income earners. Thus, affluence quickened. Federal child
          endowment from 1940 and rationing of scarce products helped distribute
          this wealth. The gross national product increased by more than
          one-half between 1938–39 and 1942–43 and by the end of that time was
          nearly triple what it had been at the end of World War I.<br /><br />
          World War II also proved to be a significant turning point in the role
          of women, and the wartime efforts of various women’s groups and their
          volunteer service to the community were recognized and praised. More
          women also joined the workforce to replace men who had left for war,
          bringing about a significant change in the traditional role of women,
          who had previously remained in the home to manage domestic
          responsibilities and raise children. As they became more active in
          society, women gained respect for the vital assistance they provided
          to improving sectors of Australian life.
        </p>
        <h5>The Culture of Australia</h5>
        <p>
          The period produced not only Joseph Furphy’s Such Is Life (1903) but
          also the work of Henry Handel Richardson (pseudonym of Ethel F.L.
          Richardson, later Robertson), another contender as “the great
          Australian novelist.” In The Fortunes of Richard Mahony (three
          volumes, 1917, 1925, 1929), Richardson told the anguish of the central
          character, modeled on her father, as he sought to come to terms with
          Australian life. The tension of dual loyalties to Britain and
          Australia was a major concern also of Martin Boyd, whose long career
          as a novelist began in the 1920s. A more exclusively nationalist tone
          pervaded many tales of Outback life and historical novel sagas. An
          early notable novel of urban life was Louis Stone’s Jonah (1911); a
          later contributor to this genre was Vance Palmer (especially The
          Swayne Family, 1934), who, with his wife Nettie, won fame as a
          literary critic and selfless patron of the aspiring young.<br /><br />
          The most significant contribution in poetry came from a group in
          Sydney influenced by the German philosopher Friedrich Nietzsche and
          the late 19th-century French innovators. Outstanding was Christopher
          John Brennan, a major theorist of Symbolism. While calling on their
          Australian background, these men gave a sophistication to their poetic
          world that lifted it far from Outback balladry. Associated with this
          group was Norman Lindsay, an artist, novelist, and sculptor. The
          novelist Christina Stead was another product of this milieu.<br /><br />
          In art the rural landscape dominated. Revolutionary changes in
          European art were relatively slow in affecting Australia, but a few
          artists did produce some notable work of imaginative technique. In
          Percy Grainger Australia produced (but did not retain) a musician of
          remarkable originality and ability. Architecture promised an
          interesting chapter with the selection of the American Walter Burley
          Griffin’s design for the city of Canberra. In practice his design was
          much mutilated, but Griffin did do some important work in both
          Melbourne and Sydney.<br /><br />
          One outstanding new area to which the universities contributed was
          anthropology; a chief protagonist was A.R. Radcliffe-Brown (professor
          of anthropology at the University of Sydney, 1925–31). Australians
          increasingly filled faculty posts, although most who did so were
          graduates of either Oxford or Cambridge universities, while some of
          the most able Australian intellects worked overseas. The University of
          Western Australia, founded in 1911, drew on one of the most
          substantial philanthropic bequests in Australian history (from the
          newspaper editor Sir John Winthrop Hackett) and initially charged no
          fees. Other university foundations were Queensland (1909) and colleges
          at Canberra and Armidale. State-owned secondary schools developed
          throughout the period, although the achievement was scarcely
          comparable to the development of primary education in the early
          period.<br /><br />
          Australia was in the forefront of filmmaking early in the century, but
          this early promise soon faded. A.B. Paterson’s “Waltzing Matilda”
          became Australia’s best-known song—part folk hymn and part national
          anthem. Radio had an impact in Australia equal to that elsewhere;
          radio stations became a mark of urban status, and the Australian
          Broadcasting Commission became a major force in culture and
          journalism. Radio helped make the 1930s probably the most
          sports-conscious decade in Australia’s history. Cricket, tennis,
          swimming, boxing, and horse racing were areas of athletic excellence.
          Aviation moved from sport to enterprise to business; Charles
          Kingsford-Smith, who established several long-distance records, was
          the most famous hero, and Qantas the most successful airline.
        </p>
        <h5>Aboriginal Peoples</h5>
        <p>
          Early in the century, governments tended to be still more
          authoritarian and intrusive in their policies on Aboriginal peoples.
          This was notably so in Western Australia, where the most brutal of
          direct clashes continued. Reports of such events in the later 1920s
          stirred those Christian and humanitarian forces that had always
          recognized the violence and injustice of Australia’s racial
          experience; the new anthropology abetted such concern. Commonwealth
          governments gave these voices some heed, especially after 1937,
          although only in the Northern Territory did the government control
          policy. In 1932 the formation, under William Cooper, of the Australian
          Aborigines’ League spurred black political action—which had some
          history back to the 1840s. Cooper and William Ferguson organized
          protest against Australia’s sesquicentennial celebrations in January
          1938: “There are enough of us remaining to expose the humbug of your
          claims, as White Australians, to be a civilised, progressive, kindly
          and humane nation.”
        </p>
        <h4>Australia From 1954 to c.1983</h4>
        <h5>Postwar expansion</h5>
        <p>
          World War II generated economic vigour that continued into the 1970s.
          While some groups suffered disadvantages, that period, the 1960s
          especially, ranked as something of a golden age. The population nearly
          doubled by 1976, with expenditure per head increasing by roughly the
          same proportion. This prosperity reflected the general Western
          experience and depended much upon the export of basic
          commodities—notably wool in the 1950s and minerals thereafter.
          Domestic manufacturing also expanded remarkably and with considerable
          sophistication: manufactured goods included iron and steel wares,
          electric and electronic goods, and automobiles (production of
          “Australia’s own car,” the Holden, began in 1948). Output per worker
          increased, and working hours were lessened.<br /><br />
          The number of private automobiles increased eight-fold by 1970, and
          the car joined the personally owned home as a lodestone of most
          Australian lives. Tourism and travel enriched traditional leisure
          patterns, which continued to be strong. The holding of the Olympic
          Games in Melbourne in 1956 symbolized the nation’s enthusiasm for
          sport and its production of world champions, notably swimmers.
        </p>
        <h5>The Ascendance of Australian Popular Culture</h5>
        <p>
          The end of World War II marked the emergence of an increasingly
          distinctive Australian popular culture. The arrival and presence of
          over 100,000 U.S. troops in Australia from 1941 had a substantial
          impact on postwar culture and society. The American alliance with
          Australia during the war forged close ties between the two countries,
          and Australia came to depend on the United States for military support
          as well as economic growth. Prior to the war, Australian society had
          been largely influenced by conservative British culture, mirroring its
          entertainment, music, and sports as well as its social attitudes. By
          the end of the war a significant change was underway, however, and
          from the 1950s onward Australian lifestyles felt the dramatic impact
          of the new more rebellious culture of the United States, which had
          emerged from the war in a powerful economic position.<br /><br />
          The strong cultural influence that the United States exerted over
          other Western countries, especially Australia, was profound. Because
          Australia also experienced an economic boom as a result of the war,
          its newfound affluent position enabled Australians to embrace
          innovative new and now more-affordable products and technologies, many
          of which were imported from the more industrialized United States.
          American ideals and cultural products, such as film and music, quickly
          dispersed throughout Australian society, with an accompanying move
          away from the traditional restricted ways of prewar life to a more
          liberated and expressive lifestyle.<br /><br />
          Film-going had become one of the most popular pastimes for Australian
          people during World War II, as motion pictures provided a form of
          escapism from the horrors of the real wartime world. In 1945 alone,
          151 million cinema admissions were recorded in Australia. Most of the
          films shown on Australian screens between the 1940s and ’50s, however,
          were produced by American companies. Australian-made films were in
          very short supply in the early 1950s. Many of the American films
          appealed to a teenage audience with their depiction of radical
          American social themes and ideals. This exposure undoubtedly had an
          impact upon impressionable adolescents, sparking the birth of a new
          youth culture in Australia.<br /><br />
          The introduction of television in Australia in September 1956 provided
          a new cultural experience and resulted in a dramatic decline in cinema
          attendance. Television quickly became one of the most popular forms of
          entertainment and one of the most influential mediums in the country.
          The Australian government had been determined to have the country’s
          first television network up and running in time for the Melbourne
          Olympic Games, and it met this objective with some two months to
          spare.<br /><br />
          In the initial years after television’s arrival, not many Australians
          could afford the new technology. However, as televisions became less
          expensive, the number of Australians who owned a television rapidly
          increased. Despite the enormous popularity of television, a small
          proportion of society opposed it, mainly because the majority of
          programs were American productions. With more than 80 percent of
          television content sourced from the United States, it was feared that
          American content, themes, and culture would impede the development of
          the Australian identity. This concern was alleviated somewhat when the
          demand for an increase in Australian content led to the broadcasting
          of more Australian programs in the mid-1960s, particularly Australian
          dramatic series.<br /><br />
          The proliferation of vinyl records after World War II had a major
          impact on the experience of music in Australia and revolutionized the
          music industry. By the early 1960s more than 500,000 records were
          being manufactured every month in Australia. This spike in record
          production coincided with the explosion of rebellious youth-oriented
          culture, sparked by the rise of rock and roll, the arrival of which in
          Australia is usually dated to the theatrical release in 1955 of
          Blackboard Jungle; the movie featured the hit single “Rock Around the
          Clock” by the American band Bill Haley and His Comets, whose
          Australian tour in 1957 was a sensation. Johnny O’Keefe became the
          first Australian rock singer to reach the national charts with the
          release of his hit “Wild One” in 1958. With the exciting new music
          came the creation of expressive new dance styles and trendy youthful
          clothing. Put off by the accompanying changes in behaviour, fashion,
          and attitudes, some in the older generation blamed rock and roll for
          the rise in juvenile delinquency. But new music had come to stay, and
          in the successive decades many Australians would put their mark on the
          development of rock music.<br /><br />
          The postwar era of the 1950s was also a time of prosperity and major
          achievement for Australian sports. Many sports competitions had been
          canceled during the war, and, with large numbers of Australians
          fighting abroad, sports participation also dwindled. Immediately
          following the end of the war, Australians had more leisure time, and
          their passion for sports was reignited. Indeed, the postwar era from
          1946 to 1966 became the “golden era” for sports in Australia. The
          broadcasting on television of the Melbourne Olympic Games helped unite
          Australians in sense of pride at the success of their athletes in the
          first Australian-hosted Games. Australian participants shined
          particularly brightly in swimming and in track and field competition.
        </p>
        <h5>Domestic Politics to 1975</h5>
        <p>
          On John Curtin’s death in July 1945, he was succeeded as prime
          minister by another ALP stalwart, Joseph Benedict (Ben) Chifley.
          Influenced by Keynesian theory, their governments maintained close
          control of the economy and even contemplated nationalization of the
          private banks. Welfare policies expanded, as did the dominance of the
          commonwealth government over the states, although the latter remained
          important. At all these levels, and elsewhere, it was evident how much
          larger and more expert the federal public service had become.<br /><br />
          As the Cold War intensified Chifley’s policies seemed dangerously
          radical to conservative eyes. Such apprehension fed on the disruptive
          tactics pursued by Communist Party supporters, especially in trade
          unions. Robert Menzies, who in 1944 had founded the Liberal Party as a
          successor to the United Australia Party, addressed these issues. In
          December 1949 he was elected prime minister. His and all future
          non-Labor governments were coalitions of the Liberal and Country
          parties, with the former dominant.<br /><br />
          Menzies stayed in office until 1966. A man of great political
          competence, he also benefited much from the period’s prosperity. His
          governments continued to monitor the economy to useful effect. Menzies
          personally did much to increase spending on education and on the
          development of Canberra. He continued to present himself as a crusader
          against communism and to allege that Labor’s leaders failed to check
          its evil. (The 1954 defection of Vladimir Petrov, a Soviet
          diplomat-agent in Canberra, strengthened Menzies’s hand.) The ALP
          floundered under the erratic leadership (1951–60) of Herbert Vere
          Evatt; an anticommunist element, somewhat influenced by the Catholic
          Social Movement (see above), split away to form the Democratic Labor
          Party. This party won only a few seats but drastically weakened the
          ALP.<br /><br />
          Menzies was succeeded by his longtime lieutenant, Harold Holt, who had
          little time to make any distinctive impact before his sudden death in
          December 1967. His successor, John Grey Gorton, proved more assertive,
          especially of a sharper national interest in economic and diplomatic
          affairs. Gorton lost ground with both the electorate and parliamentary
          colleagues, and in early 1971 he gave way to another Liberal, William
          McMahon.<br /><br />
          Meanwhile Labor had found new force under Edward Gough Whitlam. He
          personified the importance within the party of an intelligentsia,
          radicalized in modest degree by liberationist and countercultural
          forces of the day as well as by more traditional left-wing sympathies.
          The failure of McMahon to become a convincing leader gave Labor its
          long-denied chance, and in December 1972 Whitlam became prime
          minister.<br /><br />
          Whitlam’s governments were extremely active, if not always effectual.
          Many initiatives vitalized intellectual and cultural pursuits. A
          stronger sense of Australian identity prevailed, and some imperial
          symbols were abandoned. The government encouraged wage increases
          (including equal pay for women) and spent much on social services,
          notably health and urban amenities. To many, it appeared as if Whitlam
          were shaping a new and better Australia. <br /><br />Others saw the
          government as reckless and dangerous. Some of its members did lean
          toward irresponsibility. Critics fought hard and bitterly, especially
          after the accession to opposition leadership in March 1975 of the
          Liberal Malcolm Fraser. The government lacked a majority in the
          Senate, which accordingly deferred approval of revenue supply, the
          intent being to force Whitlam to call an election. The complex
          constitutional issue that thus arose required the adjudication of the
          governor-general, Sir John Kerr, the formal head of state under the
          crown. Kerr had been nominated (for the Queen’s approval) by Whitlam,
          but on November 11, 1975, he dismissed Whitlam and appointed Fraser
          interim prime minister. Kerr’s actions sparked excitement, and among
          Whitlam’s admirers, outrage. An election in December gave a handsome
          victory to Fraser.
        </p>
        <h5>International Affairs</h5>
        <p>
          Both World Wars encouraged, even forced, Australian governments to
          assert themselves internationally. The ALP had generally tended toward
          a forthright international policy. Appropriately, therefore, the
          Curtin and Chifley governments, especially in the person of Evatt,
          took a significant part in founding the United Nations (UN). Evatt
          helped secure recognition of the rights of smaller nations in the UN
          and served as president of the UN General Assembly in 1948–49. The
          Labor governments also had some sympathy for Asian nationalist
          movements, most importantly in Indonesia.<br /><br />With the
          accession of Menzies and the deepening of the Cold War, attitudes
          became more conservative. Sentimental ties of empire remained strong
          enough for the visit of Queen Elizabeth II in 1954 to provoke mass
          emotion. Menzies, an ardent royalist, upheld the British position in
          the Suez Crisis of 1956. Yet overall the stronger theme was Australian
          acceptance of U.S. dominance—all the more inexorable as the United
          Kingdom abandoned much of the modest interest it had cherished for
          Australia. The U.S. alliance crystallized in the 1951 Australia–New
          Zealand–United States (ANZUS) Pact, reinforced (1955–77) by the
          Southeast Asia Treaty Organization (SEATO). Only the Whitlam
          government chafed at the alliance, and then but in part. Australia
          followed the United States’ lead in such crises as the Korean
          (1950–53) and Vietnam (1955–75) wars and, a generation later, the
          Persian Gulf War (1990–91). Australia did not recognize the People’s
          Republic of China until 1972–73. U.S. satellite-tracking stations and
          other facilities functioned on Australian soil.<br /><br />
          Relations with Japan were particularly important. Antagonism ran
          strong in the postwar years and lingered for decades. Nevertheless,
          trade recommenced in 1949 and grew rapidly; by 1966–67 Japan had
          surpassed the United Kingdom as the nation receiving the largest share
          of Australia’s exports, and it was second only to the United States as
          the largest supplier of imports.<br /><br />
          While the influence of Asian communism was feared and Japan was
          regarded with suspicion, more genial relationships developed in the
          hemisphere. The Colombo Plan, which went into effect in 1951, provided
          for Australia to give aid to its friends within the region and began
          an inflow of Asian students into Australia that became a permanent and
          considerable phenomenon. The minister for external affairs between
          1951 and 1960 was Richard Gardiner Casey. He was unique among
          Australians in his experience of traditional diplomacy, yet he was
          ready and able to come to terms with the new Asia. As Indonesia became
          an ever more populous, and sometimes assertive, nation, there was
          wariness in Australia, but the fall of Sukarno in 1966 helped
          stabilize relations for many years. The grant of self-government to
          Papua New Guinea by the Whitlam government came early enough to
          provide some basis for goodwill into the future.
        </p>
        <h5>Immigration</h5>
        <p>
          Meanwhile vast population changes had begun. Traditionally Labor had
          been suspicious of mass immigration, seeing it as a threat to
          established wages and standards. Yet in 1946 the ALP government
          initiated a policy that assisted the entry not only of people from the
          United Kingdom but also of many others from war-distressed Europe. The
          peak year of net immigration (about 150,000) was 1950, while the
          greatest numbers of assisted migrants (about 100,000 per annum) came
          in the later 1960s. While it has been modified many times, this
          overall policy has remained in place. Closer ties with Australia’s
          Asian neighbours, however, moved toward abandoning the policy of
          virtual exclusion of “coloured” immigrants. From the late 1960s such
          restrictions were eased. The acceptance of refugees from Indochina was
          the most palpable evidence of the new policy. The diversification of
          ethnicity and culture provoked both critics and enthusiasts.<br /><br />
          In general the new migration proved an economic boost. Many newcomers
          suffered alienation and discrimination; tensions existed between the
          new migrant groups as well as between “old” Australians and new—but on
          the whole this was one of the happier chapters in the Australian
          experience. Continuing debate pondered the relative merits of
          “assimilation” as against “multiculturalism”—i.e., minimizing or
          encouraging the migrants’ retention of their native customs.
          Especially after 1970 the latter policy had official favour, but
          migration had surprisingly only marginal impact on established
          sociopolitical structures. Many tongues were heard and many cuisines
          eaten, but suburban living near the big cities was as compelling a
          goal for most migrants as for their Anglo-Celtic forerunners, and
          their values were shaped accordingly. It made Australia a more
          interesting place, if one of less social ease.
        </p>
        <h5>Strains of Modern Radicalism</h5>
        <p>
          It was suggested above that “New Left” ideas had some part in the
          victory and policies of Whitlamite Labor. While this radicalism, like
          its precursors, never went to extremes in Australia and soon passed
          its peak, its influence lingered. It found formal expression in a new
          political party, the Australian Democrats, which was founded in 1977
          and succeeded to the Democratic Labor Party’s role as a minority party
          of significant effect. The new radicalism also helped shape thought
          and action in other, more diffuse, ways.<br /><br />Aboriginal
          activism became more assertive than it had been since the days of
          physical attack on European settlers. The estimated number of persons
          of Aboriginal descent had risen from a nadir of 73,828 in 1933 to more
          than 170,000 in the early 1980s; in 1962, Aboriginal people received
          the franchise and, for the first time, were to be counted in the
          national census. Aboriginal claims moved from wage equality with
          Europeans to land rights over territory with Aboriginal associations.
          The South Australian government acted in this direction from 1966, and
          the federal Aboriginal Land Rights Act (1976), applying to the
          Northern Territory, was particularly important. In 1967 the general
          electorate overwhelmingly supported a constitutional amendment to
          increase Commonwealth powers in Aboriginal matters. Equality in formal
          civic rights, wage payments, and social welfare benefits became the
          norm. Some groups received considerable royalties from mining
          activities on their land. <br /><br />The Whitlam government in
          particular encouraged a variety of ethnic organizations, most
          importantly the National Aboriginal Consultative Committee (founded in
          1973, from 1977 renamed the National Aboriginal Conference). These
          organizations contributed to a growing strength and pride in
          Aboriginality. Early in the period, Aboriginal persons became known
          for their contributions to sport (boxer Lionel Rose, tennis player
          Evonne Goolagong Cawley). Later, Aboriginal persons became celebrated
          in the fields of public administration (Charles Perkins, Patricia
          O’Shane), art (Yirawala, Michael Jagamara Nelson, Emily Kngwarreye),
          literature (Kath Walker, Colin Johnson, Sally Morgan), and politics
          (Neville Thomas Bonner, senator, 1971–83, and Aden Ridgeway, senator
          from 1999).<br /><br />
          While various researchers had been expanding knowledge of the
          antiquity and richness of Aboriginal life, not all Aboriginal people
          accepted the right and capacity of white scholars to comprehend the
          tribal past, but this attitude itself affirmed their independence.
          School curricula began to provide sympathetic teaching of Aboriginal
          culture to all Australians. Such policies reinforced a shift away from
          assimilationist ideas. This shift applied nationwide but had
          particular relevance in sustaining the surviving remnants of tribal
          life. In the late 20th century the number of Aboriginal persons with
          some experience of traditional Aboriginal life was estimated to be
          about 10,000.<br /><br />
          Increased awareness of past depredations against Aboriginal peoples
          helped shape a wider-ranging critique of the Australian experience.
          Dissidents influenced by the New Marxism of the later 1960s (notably
          Humphrey McQueen in his A New Britannia, first published in 1970) saw
          the nation as ever dominated by petty bourgeois standards—mean,
          acquisitive, racist, and authoritarian. Many earlier commentators had
          perceived such traits, but now they were attacked with more
          fundamental repugnance. The dismissal of Whitlam in 1975 encouraged
          the belief that essentially Australia was not a democracy and that it
          suffered much from a heritage of subservience to British imperial
          standards. While this radical critique lost some acerbity after 1980,
          it left an impression, especially on the liberal intelligentsia. One
          result was greater emphasis on the dignity and autonomy of
          Australian-centred cultural studies. Robert Hughes’s The Fatal Shore:
          The Epic of Australia’s Founding (1987), a vivid account of the
          experiences of both transported convicts and colonists that became an
          international best seller, explored Australia’s origins as a colony
          and its search for a national identity.<br /><br />
          Environmental activism developed, often spurred by repugnance to the
          exploitative development that radicals saw, with much truth, as
          central to Australian history since 1788. Some aspects of
          environmentalism gained support across a wide spectrum. Most state
          governments introduced controls about 1970. There was a particularly
          emotional campaign to save beautiful Lake Pedder in Tasmania from
          conversion into a hydroelectric dam. The campaign failed in 1973, but
          in that year the federal government established an inquiry into the
          national estate, from which resulted the Australian Heritage
          Commission Act in 1975. In 1982 the High Court agreed that the
          Commonwealth had power to override states on environmental matters
          should the issue in question come within the purview of an
          international covenant to which Australia was a party.
          Environmentalists have exercised considerable influence as pressure
          groups and have made some essays into parliamentary politics: in 1989
          a “Green” group acquired the balance of power in Tasmania, aided by
          the system of proportional representation prevailing there. While
          Australia contributed only a little to the mainstream of environmental
          theory, Peter Singer of Monash University won international renown for
          his exposition of animal rights.<br /><br />
          Miriam Dixson in The Real Matilda (1976) argued that Australian women
          had suffered an inferior status, markedly below that of women in
          Western society at large. Her case was arguable, but the increasing
          volume of feminist studies more often stressed the achievements of
          women, though often against great odds, in many sectors of society and
          culture. Feminists played an important part in the expansion of
          Australian studies; women increased their share in Australian literary
          work, often writing on feminist themes. Germaine Greer, born in
          Melbourne, achieved eminence for her writings.<br /><br />
          The number of women physicians and lawyers in Australia rose
          significantly, but more sizable still was the impact of women in the
          public service. Some succeeded in federal politics, and a greater
          number at the state level: in 1990 Carmen Lawrence (in Western
          Australia) and Joan Kirner (in Victoria) were the first women to
          become leaders of governments.<br /><br />
          Gay and lesbian activism followed much the same path in Australia as
          elsewhere; Sydney was said to have become one of the major “gay”
          cities of the world. Seemingly in inverse relation to sexual activity,
          or at least to discussion of it, there was a decline in marriage and
          fertility rates. One in three marriages contracted after 1970 seemed
          likely to end in divorce. Into the 1990s there remained doubt as to
          how fundamental the changes in attitude and social structure
          associated with such developments might prove.
        </p>
        <h5>Cultural Achievements</h5>
        <p>
          Patrick White’s winning of the Nobel Prize for Literature (1973) most
          obviously indicated a new level of cultural attainment. Among
          Australia’s renowned writers are the poets Les Murray and Judith
          Wright; novelists Peter Carey, David Malouf, Thomas Keneally, and Thea
          Astley; and playwright David Williamson. The painter Sir Sidney Nolan
          produced a vast body of compelling work, often inspired by Australian
          themes. Fred Williams worked within a narrower range but produced
          intense, novel, and entrancing representations of the Australian
          landscape. Aboriginal painter Albert Namatjira created world-renowned
          watercolour landscapes depicting the terrain of central Australia.<br /><br />
          The work of Australian composers such as Peter Sculthorpe, Ross
          Edwards, and Richard Meale approached world standing. The soprano Joan
          Sutherland emulated Melba with her superb coloratura voice. Many of
          Sutherland’s triumphs took place at the Sydney Opera House, the
          supreme shrine of culture in Australia, completed (after many
          problems) in 1973. Art exhibitions and cultural festivals much
          enriched Australian life, most substantially in the smaller capitals.
          The Australian Broadcasting Commission (called the Australian
          Broadcasting Corporation after 1983) remained very important as a
          sustainer of orchestral music and sponsored most of the somewhat
          meagre amount of quality television. Governments were much more
          generous than their precursors in Australia (although scarcely more so
          than many counterparts elsewhere) in funding opera and ballet. The
          film industry had a notable florescence in the 1970s, and continued
          fairly active thereafter.<br /><br />
          The 1960s was the golden age for tertiary education. Universities
          expanded enormously. The Institute of Advanced Studies at the
          Australian National University (one of the visionary achievements of
          the 1940s Labor governments) was unique in being research-oriented,
          but its activity was matched elsewhere. The Commonwealth Scientific
          and Industrial Research Organization also grew rapidly in the 1960s
          and ’70s. In addition to Patrick White, Australia’s Nobel laureates
          were Sir John Cornforth (1975), for chemistry, and Sir Macfarlane
          Burnet (1960), Sir John Eccles (1963), and Peter C. Doherty (1996),
          for work in the medical sciences.
        </p>
      </section>

      <section class="currentEvents topic" id="belarusCurrentEvents">
        <h3>
          Current Events
        </h3>
        <p></p>
      </section>
    </div>
  </div>
`;
