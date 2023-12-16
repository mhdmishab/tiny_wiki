import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const htmlContent=`<p class="mw-empty-elt">



  </p>
  <p><i><b>Captain America: Brave New World</b></i> is an upcoming American superhero film based on the Marvel Comics
      character Sam Wilson / Captain America, produced by Marvel Studios and distributed by Walt Disney Studios Motion
      Pictures. It is intended to be the fourth installment in the <i>Captain America</i> film series, a continuation of
      the television miniseries <i>The Falcon and the Winter Soldier</i> (2021), and the 35th film in the Marvel Cinematic
      Universe (MCU). The film is directed by Julius Onah, who co-wrote the script with the writing team of Malcolm
      Spellman and Dalan Musson, and Matthew Orton, and stars Anthony Mackie as Sam Wilson / Captain America alongside
      Danny Ramirez, Carl Lumbly, Tim Blake Nelson, Shira Haas, Harrison Ford, and Liv Tyler.
  </p>
  <p><i>Captain America: Civil War</i> (2016) ended the <i>Captain America</i> trilogy starring Chris Evans as Steve
      Rogers. Mackie's Wilson became the new Captain America in <i>The Falcon and the Winter Soldier</i>, and a new
      Captain America film was being written by Spellman and Musson (both writers on the series) by April 2021; Mackie
      signed on that August. Onah joined in July 2022, when the title was revealed as
      <i>Captain America: New World Order</i>. Additional cast members were revealed that September. Filming took place
      from March to June 2023 at Trilith Studios in Atlanta, Georgia, with additional filming in Washington, D.C. The
      title was changed to <i>Captain America: Brave New World</i> during filming. Orton joined in December 2023 to write
      material for reshoots, which were set to occur from early-to-mid 2024.
  </p>
  <p><i>Captain America: Brave New World</i> is scheduled to be released in the United States on February 14, 2025, as the
      last film of Phase Five of the MCU.
  </p>
  <meta property="mw:PageProp/toc">
  <h2><span id="Cast">Cast</span></h2>
  <ul>
      <li>Anthony Mackie as Sam Wilson / Captain America:<br>An Avenger and a former pararescueman who was trained by the military in aerial combat using a specially-designed wing pack. Producer Nate Moore compared Wilson's Captain America to Rocky Balboa from the
          <i>Rocky</i> film series as an "underdog in any situation" by not having the attributes of Steve Rogers, and
          said Wilson would be put "through the wringer" and have to earn the mantle of Captain America after claiming it
          without support; Mackie called Wilson "more of a humane" Captain America, opposed to one of "judgment", since he
          has "a very different understanding of what it is to be a good guy, or be a bad guy". Mackie said the Tupac
          Shakur song "Hit 'Em Up" (1996) represented his portrayal of Wilson for the film. Director Julius Onah said the
          film would explore Wilson's journey "stepping up to be the leader as Captain America".</li>
      <li>Danny Ramirez as Joaquin Torres / Falcon: A first lieutenant in the U.S. Air Force who worked with Wilson in the
          past and takes on the mantle of Falcon.</li>
      <li>Carl Lumbly as Isaiah Bradley: An African-American Korean War veteran and super soldier who was imprisoned and
          experimented on for 30 years.</li>
      <li>Tim Blake Nelson as Samuel Sterns / Leader:<br>A cellular biologist who was accidentally cross-contaminated with Bruce Banner's blood while developing a possible antidote to his condition during the events of
          <i>The Incredible Hulk</i> (2008), granting him superhuman intelligence. The inclusion of Sterns in the film was
          one of the reasons Onah was interested in directing the film, noting that having someone who operates from
          intellect would be a good adversary to Wilson and put him "through the wringer".</li>
      <li>Shira Haas as Sabra:<br>An Israeli superheroine. The announcement of Sabra as part of the film was criticized, believing that her appearance would lead to negative stereotypical portrayals against Palestinians and Arabs; in the comics, she is a member of the Mossad, and many of the Arab characters she interacts with are portrayed as misogynistic, antisemitic and violent. Additionally, the character's name added to the criticism, since it means different things to Israeli Jews and Palestinians. Yousef Munayyer, a Palestinian-American writer and analyst, said the comics did not suggest "anything positive" about her film appearance, since turning Israeli spies into heroes "is insensitive and disgraceful". Marvel Studios responded in a statement, saying the film was taking "a new approach" to Sabra, adding that characters in the MCU "are always freshly imagined for the screen and today's audience".
      </li>
      <li>Harrison Ford as Thaddeus "Thunderbolt" Ross:<br>The President of the United States. He was previously a U.S. Army general and then the U.S. Secretary of State. Moore said there would be "some natural sparks" between Wilson and Ross due to the events of
          <i>Captain America: Civil War</i> (2016), with producer Kevin Feige adding that their dynamic is changed now
          that they are Captain America and president, respectively. Ford replaces original actor William Hurt who
          portrayed the character in the MCU films until his death in 2022.</li>
      <li>Liv Tyler as Betty Ross: A cellular biologist, Thaddeus' daughter, and Banner's former girlfriend.</li>
  </ul>
  <p>Additionally, Xosha Roquemore, Seth Rollins, and Rosa Salazar have been cast in undisclosed roles.</p>
  <h2><span id="Production">Production</span></h2>
  <h3><span id="Development">Development</span></h3>
  
  <p>Marvel Studios President Kevin Feige said in October 2015 that <i>Captain America: Civil War</i> (2016) was the
      conclusion of the <i>Captain America</i> trilogy, after <i>Captain America: The First Avenger</i> (2011) and
      <i>Captain America: The Winter Soldier</i> (2014), that starred Chris Evans as Steve Rogers. <i>Civil War</i> was
      Evans' last contracted standalone Captain America film, but he was open to extending his contract beyond
      <i>Avengers: Infinity War</i> (2018) and <i>Avengers: Endgame</i> (2019). In January 2021, Evans was reportedly
      close to signing a deal to reprise the role of Steve Rogers in at least one project. Evans' involvement was said to
      be similar to how fellow Marvel Cinematic Universe (MCU) star Robert Downey Jr. had supporting roles as Tony Stark
      in other film franchises, including <i>Civil War</i>, following the <i>Iron Man</i> film series. Evans soon said the
      report was "news to [him]".</p>
  <p>By October 2018, Marvel Studios was developing a limited series for Disney+ starring Anthony Mackie's Sam Wilson /
      Falcon and Sebastian Stan's Bucky Barnes / Winter Soldier from the MCU films. Malcolm Spellman was hired as head
      writer of the series, which was officially announced as <i>The Falcon and the Winter Soldier</i> in April 2019.
      Before the series premiere, Mackie said there had been no discussions regarding a second season, and he was not sure
      when he would next appear in an MCU film because of the COVID-19 pandemic. Series director Kari Skogland was also
      unsure whether there would be a second season, saying she had told the story she wanted to with the first season,
      but there were more stories and characters to explore if a second was made. Feige said there were ideas for what
      "another one" could be if a second season was made, but Marvel intended for the series to lead into MCU films first,
      as they did with fellow Disney+ series <i>WandaVision</i> (2021). He added that he did not want to spoil the series
      by confirming a second season or discussing the plans that Marvel had for the series' characters before the series
      was fully released. In April 2021, <i>The Falcon and the Winter Soldier</i> executive producer Nate Moore said the
      end of the series would show story elements for a potential second season, adding that the series explored
      "evergreen" topics that lent themselves to further exploration.</p>
  <p>After the finale episode of <i>The Falcon and the Winter Soldier</i>, "One World, One People", was released on April
      23, 2021, Spellman was revealed to be developing the script for a fourth Captain America film with Dalan Musson, who
      wrote the episode "Truth". The film was expected to follow Wilson after the events of the series, with Evans'
      reported return as Rogers expected in a different project. Borys Kit and Aaron Couch of
      <i>The Hollywood Reporter</i> noted that three people had now been Captain America in the MCU (Rogers, Wilson, and
      John Walker) and it would be interesting to see what the film's focus was. Moore produces the film alongside Feige.
      Mackie said he was unaware of any plans for a film or second season of <i>The Falcon and the Winter Soldier</i>, but
      was "excited to see what happens", and said that he had no words to describe the idea of being the title character
      in an MCU film, especially as a Black actor, other than "monumental". Mackie negotiated a deal to star in the film
      over the next few months, and signed on in August.</p>
  <h3><span id="Pre-production">Pre-production</span></h3>
  <p>In July 2022, Julius Onah was chosen to direct the film. The film's title was revealed to be
      <i>Captain America: New World Order</i> at the 2022 San Diego Comic Con along with its release date of May 3, 2024,
      as part of Phase Five of the MCU. The subtitle was noted for its use in politics, professional wrestling, and
      various conspiracy theories along with antisemitic rhetoric, and was considered a "controversial" and "provocative"
      choice. At the D23 Expo in September 2022, Danny Ramirez and Carl Lumbly were confirmed to be reprising their
      respective roles of Joaquin Torres and Isaiah Bradley from <i>The Falcon and the Winter Soldier</i>, alongside Tim
      Blake Nelson as Samuel Sterns / Leader from <i>The Incredible Hulk</i> (2008). Shira Haas was also revealed to be
      joining the cast as Sabra. Onah described the film as a "paranoid thriller", and said that filming would begin in
      early 2023. In mid-October, Jeff Sneider of <i>Above the Line</i> reported that Harrison Ford had been cast to
      replace William Hurt, who died in 2022, as Thaddeus "Thunderbolt" Ross in the film. Ford's casting was confirmed
      shortly after, along with his involvement in <i>Thunderbolts</i> (2025), which had previously been expected.
      Pre-production work had begun on November 7, with filming set to begin in March 2023. Gersha Phillips serves as the
      costume designer, while Ramsey Avery serves as the production designer, after previously working on
      <i>Guardians of the Galaxy Vol. 2</i> (2017) and <i>Spider-Man: Homecoming</i> (2017). In January 2023, Xosha
      Roquemore was cast in an undisclosed role. Mackie was expected to begin work on March 1, 2023.</p>
  <h3><span id="Filming">Filming</span></h3>
  <p>Principal photography began on March 21, 2023, at Trilith Studios in Atlanta, Georgia under the working title
      <i>Rochelle Rochelle</i>, with Kramer Morgenthau serving as the cinematographer. Onah wanted to include action in
      the film that was "grounded and tactile" and gave Wilson things to do that were not seen in his previous
      appearances, and Avery said Onah did not have a "normal way" of viewing Marvel, and that the production team had a
      forward-thinking approach. He added that the studio was using the film to try something new by intending it to be
      grounded in reality, unlike some of the MCU content released before. Liv Tyler joined the cast by the end of March
      2023, reprising her role of Betty Ross from <i>The Incredible Hulk</i>. At that time, Julia Louis-Dreyfus was
      expected to reprise her MCU role as Valentina Allegra de Fontaine in the film. The start of the 2023 Writers Guild
      of America strike in May 2023 was not expected to impact production of the film, with Marvel Studios reportedly
      planning to shoot what they could during principal photography and make any necessary writing adjustments during the
      film's already scheduled reshoots. Later that month, set photos revealed that Seth Rollins was a part of the cast.
  </p>
  <p>In early June, it was announced that the film had been retitled <i>Captain America: Brave New World</i>. Jeremy
      Mathai at <i>/Film</i> praised the subtitle change, saying it "strikes a far more optimistic perspective [than
      <i>New World Order</i>], doubling as a commentary on the future of the famous superhero in the Marvel Cinematic
      Universe <em>and</em> as a statement on some very overdue representation". The change was also called a "wise
      decision" by <i>Collider</i><span>'</span>s Hilary Remley, who noted that the original title could have been
      interpreted as having antisemitic connotations. At that time, Onah was revealed to have co-written the script with
      Spellman. In the middle of the month, <i>Brave New World</i><span>'</span>s release date was delayed to July 26,
      2024. By late June, filming moved to Washington, D.C. Filming wrapped on June 30, 2023.</p>
  <h3><span id="Post-production">Post-production</span></h3>
  <p><i>Brave New World</i> had the potential by October 2023 to return to its May 2024 release date, as it was further
      along in production than Marvel Studios' <i>Deadpool 3</i>, which was not expected to complete filming in time for
      that release due to the 2023 SAG-AFTRA strike. However, this move was considered to be a long shot. Following the
      strike's conclusion in November, <i>Brave New World</i><span>'</span>s release was delayed to February 14, 2025.
      Sneider reported that the film was not received well in an early test screening, that three major sequences were
      being cut, and that Marvel Studios was planning to undergo extensive reshoots from January 2024 until that May or
      June. In December, Matthew Orton was hired to write additional material for the reshoots, which were then scheduled
      to last from early-to-mid 2024. Orton previously served as a writer and consulting producer on the Marvel Studios
      miniseries <i>Moon Knight</i> (2022). At that time, Rosa Salazar was revealed to have been cast in the film.</p>
  <h2><span id="Release">Release</span></h2>
  <p><i>Captain America: Brave New World</i> is scheduled to be released in the United States on February 14, 2025. It was
      previously scheduled for May 3, 2024, and July 26, 2024. It will be the final film of Phase Five of the MCU.</p>
  <h2><span id="References">References</span></h2>
  
  <h2><span id="External_links">External links</span></h2>
  <ul>
      <li><span><span>Official website</span></span> <span typeof="mw:File/Frameless"></span> at Marvel.com</li>
      <li><i>Captain America: Brave New World</i> at IMDb </li>
  </ul>`


  return (
    <>
      <div className='m-5 '>
      {/* Render HTML content using dangerouslySetInnerHTML */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
    </>
  )
}

export default App
