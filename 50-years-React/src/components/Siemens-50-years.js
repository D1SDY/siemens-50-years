import React , {Component} from 'react';
import "../css/styles.scss";
import "./siemens50years.css";


class Siemens50Years extends Component{
    render(){
        return(
            <div class="main">
                 <div class="first-row">
                    <div class="first-row-left">
                        <div class="first-row-left-text-container">
                        <hr></hr>
                        <p>
                            <span class="h1">Time travelling</span>
                        </p>
                        <div class="text-banner">
                            <p class="mt-5">
                                <span class="font-weight-bold big-font-2">50 YEARS OF</span><br></br>
                                <span class="font-weight-bold big-font-1">INTERNET</span>
                            </p>
                            <p class="mt-5 text-light-grey">
                                In the last 50 years we have become a connected world through technology. Long gone are the days of scanning encyclopaedias, waiting for a library book or never knowing why Praying mantises only sometimes eat their mates. We now have instant access to more information than we know what to do with, and as such, have been able to push humanity forward with profound effect.
                            <br></br>
                            <br></br>
                                So, travel though time with us as we investigate how we got here, the last 50 years of the Internet, and forecast Siemens role in what the next 50 years might bring.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="first-row-right">
                    <div class="img"></div>
                </div>
                </div>

                <div class="row m-lg-5"></div>

                 <div class="row text-center animated-container">
                    <div class="row m-lg-5"></div>
                    <div class="row text-center">
                        <div class="col-lg-12">
                            <div class="animated-content">
                                <hr class="hr-m"></hr>
                                <span class="h3">The Unconnected Ages</span>
                            </div>
                        </div> 
                    </div>
                    <div class="row text-center">
                        <div class="col-lg-12">
                            <div class="animated-content">
                                <div class="m-0">
                                    <span class="badge badge-pill timeline-badge">&nbsp;</span>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>

                <div class="row text-center animated-container">
                    <div class="col-lg-12">
                        <div>
                            <div id="1950" class="row no-gutters">
                                <div class="col-sm py-2 border-md-right border-lg-right text-right">
                                    <div class="d-flex">
                                        <div class="d-inline-block animated-content">
                                            <img class="img-fluid"  src={require("./img/SiliconElement_Image_1.jpg")} alt="SiliconElement"/>
                                          
                                        </div>
                                        <div class="d-inline-block text-right text-wrap animated-content">
                                            <span class="timeline-big-number">19</span><br></br>
                                            <span class="timeline-big-number">50</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm m-sm-auto">
                                    <div class="d-flex">
                                        <span class="border-badge-right d-inline-block animated-content"></span>
                                        <div class="d-inline-block px-5 animated-content text-left">
                                            <span class="h3 text-dark font-weight-bold">1953</span><br></br>
                                            <span class="font-weight-bold">Functional implants</span>
                                            <p> Siemens researcher Eberhard Spenke and his team at Pretzfeld semiconductor
                                                lab developed a process for producing ultrapure
                                                <span data-toggle="tooltip" data-placement="bottom" title="" class="orange-highlight" data-original-title="Silicon forms the basis of materials used to make computer chips, transistors, diodes, and other electronic circuits. Silicon in its pure form is a semiconductor, which means it possesses properties of both a metal (which conducts electricity) and an insulator (which blocks electricity)">silicon</span>,
                                                revolutionizing the entire field of electrical engineering and electronics.<br></br>
                                                <a class="orange-highlight" href="https://new.siemens.com/global/en/company/about/history/technology/information-and-communications-technology/microelectronics.html" data-ste-link-id="2508501107.top-intro/none:1248229295.ogy/microelectronics.html">
                                                More about the history of microelectronics at Siemens
                                                <span class="link--icon"></span>
                                            </a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>


                <div class="row text-center animated-container">
                     <div class="col-lg-12">
                         <div>
                            <div class="row no-gutters">
                                <div class="col-sm py-2 border-md-right border-lg-right text-sm-left text-md-right">
                                    <div class="d-flex h-100">
                                        <div class="d-flex justify-content-center align-self-center">
                                            <div class="d-inline-block px-5 animated-content">
                                                <span class="h3 text-dark font-weight-bold">1959</span><br></br>
                                                <span class="font-weight-bold">Chip n Dip</span>
                                                <p> The microchip is invented. It is one of the most important inventions in human history, as
                                                    almost all modern technology we use today contains a microchip and depends on them to
                                                    function.</p>
                                            </div>
                                            <span class="border-badge-left d-inline-block animated-content"></span>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-sm">
                                    <div class="d-flex">
                                        <div class="d-inline-block animated-content" data-aos="zoom-out-left" data-aos-duration="3000">
                                            <img class="img-fluid" src={require("./img/Mocrochip_Image_2.jpg")}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>


                <div id="1960" class="row no-gutters">
                    <div class="col-sm py-2 border-md-right border-lg-right text-right">
                        <div class="d-flex">
                            <div class="d-inline-block p-4 aos-init animated-container">
                                <img class="img-fluid shadow-left animated-content" src={require("./img/FirstMouse_Image_3.jpg")}/>
                            </div>
                            <div class="d-inline-block text-right text-wrap aos-init animated-container">
                                <span class="timeline-big-number animated-content">19</span><br></br>
                                <span class="timeline-big-number animated-content">60</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm m-sm-auto animated-container">
                        <div class="d-flex">
                            <span class="border-badge-right d-inline-block animated-content"></span>
                            <div class="d-inline-block px-5 aos-init animated-content text-left">
                                <span class="h3 text-dark font-weight-bold">1964</span><br></br>
                                <span class="font-weight-bold">You're so basic</span>
                                 <p> It was a big year for the advancement of our connected world, from the invention of the computer
                                    mouse by Douglas Engelbart, which changed how
                                    a computer was accessed, to the first supercomuper being built, namely the CDC 6600. Lastly, it
                                    was the year where we took the first step
                                    towards giving individuals access to coding the creation of the development language
                                    <span data-toggle="tooltip" data-placement="bottom" title="" class="orange-highlight" data-original-title="BASIC is the Beginner&#39;s All-purpose Symbolic Instruction Code and was developed to introduce students to programming at Dartmouth College.">BASIC</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row no-gutters">
                    <div class="col-sm py-2 border-md-right border-lg-right text-sm-left text-md-right animated-container">
                        <div class="d-flex h-100">
                            <div class="d-flex justify-content-center align-self-center">
                                <div class="d-inline-block px-5 animated-content">
                                    <span class="h3 text-siemens font-weight-bold">1969</span><br/>
                                    <span class="font-weight-bold">The Internet was born</span>
                                    <p>
                                        On October 29, 1969, the first message was sent over the
                                        <span data-toggle="tooltip" data-placement="bottom" title="" class="orange-highlight font-italic" data-original-title="ARPANET was designed by government, industry and academia so scientists and academics could access and trade large research files.">ARPANET</span><br/>
                                        from computer science Professor Leonard Kleinrock's laboratory at University of Carlifornia
                                        to the second network node
                                        at Stanford Research Institute.
                                    </p>
                                </div>
                                <span class="border-badge-left d-inline-block animated-content"></span>
                            </div>
                        </div>

                    </div>
                    <div class="col-sm animated-container">
                        <div class="d-flex p-3 animated-content">
                            <div class="d-inline-block p-4">
                                <img class="img-fluid shadow-right" src={require("./img/FirstDigitalMessage_Image_4.jpg")}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="1970" class="row no-gutters">
                    <div class="col-sm py-2 border-md-right border-lg-right text-right animated-container ">
                        <div class="d-flex">
                            <div class="d-inline-block animated-content">
                                <img class="img-fluid" src={require("./img/Floppydisk_Image_5.jpg")}/>
                            </div>
                            <div class="d-inline-block text-right text-wrap animated-content">
                                <span class="timeline-big-number">19</span><br/>
                                <span class="timeline-big-number">70</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm m-sm-auto animated-container">
                        <div class="d-flex">
                            <span class="border-badge-right d-inline-block animated-content"></span>
                            <div class="d-inline-block px-5 animated-content text-left">
                                <span class="h3 text-dark font-weight-bold">1971</span><br/>
                                <span class="font-weight-bold">Bugs attack!</span>
                                <p>
                                    This year is another big year as it is the year the floppy disc was developed and the first
                                    computer virus, named
                                    <span data-toggle="tooltip" data-placement="bottom" title="" class="orange-highlight" data-original-title="CREEPER was a self-replicating software that did no damage but invaded computers and created the message &quot;I&#39;m the creeper: catch me if you can&quot;.">CREEPER</span>, was created.
                                    <a class="orange-highlight" href="https://new.siemens.com/global/en/company/stories/home/cybersecurity.html" target="_blank" data-ste-link-id="2508501107.top-intro/none:3876616379.s/home/cybersecurity.html">
                                    More about cyber security at Siemens
                                    <span class="link--icon"></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row no-gutters">
                    <div class="col-sm py-2 border-md-right border-lg-right text-sm-left text-md-right">
                        <div class="d-flex h-100">
                            <div class="d-flex justify-content-center align-self-center animated-container">
                                <div class="d-inline-block px-5 animated-content">
                                    <span class="h3 text-dark font-weight-bold">1973</span><br/>
                                    <span class="font-weight-bold">Call me, Internet</span>
                                    <p>
                                        This year critically changed the way the world would be connected. The term
                                        Internet is coined when the University Collage of London and Royal Radar Establishment
                                        created the first global network using ARPANET, and the first cellular phone also made its
                                        ringing debut.
                                    </p>
                                </div>
                                <span class="border-badge-left d-inline-block animated-content"></span>
                             </div>
                        </div>

                    </div>
                    <div class="col-sm animated-container">
                        <div class="d-flex">
                            <div class="d-inline-block p-3">
                                <div class="p-4 animated-content">
                                    <img class="img-fluid" src={require("./img/FirstCellphone_Image_6.jpg")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="1980" class="row no-gutters">
                    <div class="col-sm py-2 border-md-right border-lg-right text-right">
                        <div class="d-flex animated-container">
                            <div class="d-inline-block p-4 animated-content">
                                <img class="img-fluid shadow-left" src={require("./img/1980_Image.jpg")}/>
                            </div>
                            <div class="d-inline-block text-right text-wrap animated-content">
                                <span class="timeline-big-number">19</span><br/>
                                <span class="timeline-big-number">80</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm m-sm-auto text-left">
                        <div class="d-flex animated-container">
                            <span class="border-badge-right d-inline-block animated-content"></span>
                            <div class="d-inline-block px-5 animated-content">
                                <span class="h3 text-dark font-weight-bold">1983</span><br/>
                                <span class="font-weight-bold">DTF for DNS</span>
                                <p>
                                    The Domain Name System (DNS) was invented, prior to this sites names had been obtuse sequences
                                    of letters and numbers and now more easily remembered names will be used.
                                </p>
                            </div>
                        </div>
                        <div class="d-flex animated-container">
                            <span class="border-badge-right d-inline-block animated-content"></span>
                            <div class="d-inline-block px-5 animated-content">
                                <span class="h3 text-dark font-weight-bold">1984</span><br/>
                                <span class="font-weight-bold">We come one</span>
                                <p>
                                    Siemens premiers the Hicom private communications systems. It fulfils the
                                    global standard for the future Integrated Services Digital Network (ISDN) and the first
                                    system to integrate all forms of communication in a single network, using one line and under
                                    one phone number.
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>

                 <div class="row no-gutters">
                        <div class="col-sm py-2 text-sm-left text-md-right align-self-center">
                            <div class="d-flex justify-content-end">
                                <div class="d-flex animated-container">
                                    <div class="px-5 d-inline animated-content">
                                        <span class="h3 text-dark font-weight-bold">1985</span><br/>
                                        <span class="font-weight-bold">Oops!</span>
                                        <p>
                                            Siemens once had the opportunity to invest in a startup that would let people make phone
                                            calls over the Internet, but we turned it down... leading to us miss out on a slice of
                                            their $50 billion of revenue a year. Just going to show that even as drivers of
                                            innovation we can also make mistakes.
                                        </p>
                                    </div>
                                    <span class="border-badge-left d-inline animated-content"></span>
                                </div>
                            </div>
                            <div class="d-flex justify-content-end">
                                <div>
                                    <div class="d-flex animated-container">
                                        <div class="px-5 d-inline animated-content">
                                            <span class="h3 text-dark font-weight-bold">1989</span><br/>
                                            <span class="font-weight-bold">www.hello</span>
                                            <p>
                                                The term World Wide Web was coined by Tim Berners-Lee, a British scientist, while
                                                working at CERN.
                                            </p>
                                        </div>
                                        <span class="border-badge-left d-inline animated-content"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm border-md-left border-lg-left">
                            <div class="d-flex">
                                <div class="d-inline-block p-3 animated-container">
                                    <div class="p-4 animated-content">
                                        <img class="img-fluid shadow-right" src={require("./img/www_Image_8.jpg")}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                
                <div id="1990" class="row no-gutters">
                            <div class="col-sm py-2 border-md-right border-lg-right text-right">
                                <div class="d-flex animated-container">
                                    <div class="d-inline-block p-4 animated-content">
                                        <img class="img-fluid shadow-left"  src={require("./img/html_Image_9.jpg")}/>
                                    </div>
                                    <div class="d-inline-block text-right text-wrap animated-content">
                                        <span class="timeline-big-number">19</span><br/>
                                        <span class="timeline-big-number">90</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm m-sm-auto text-left">
                                <div class="d-flex animated-container">
                                    <span class="border-badge-right d-inline-block animated-content"></span>
                                    <div class="d-inline-block px-5 animated-content">
                                        <span class="text-black-50 grey-header font-weight-bold">Planting seeds</span>
                                        <br/>
                                        <span class="h3 text-dark font-weight-bold">1990</span><br/>
                                        <p>
                                            Hyper Text Markup Language was created by Tim Berners-Lee. HTML became the seed for all
                                            development languages and is still widely used even now.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex animated-container">
                                    <span class="border-badge-right d-inline-block animated-content"></span>
                                    <div class="d-inline-block px-5 animated-content">
                                        <span class="h3 text-dark font-weight-bold">1991</span><br/>
                                        <p>
                                            The first website was launched by CERN, giving visitors information regarding The World Wide
                                            Web.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex animated-container">
                                    <span class="border-badge-right d-inline-block animated-content"></span>
                                    <div class="d-inline-block px-5 animated-content">
                                        <span class="h3 text-dark font-weight-bold">1992</span><br/>
                                        <p>
                                            Siemens presents Synapse-1, the world’s fastest neurocomputer: It is 8,000 times more powerful
                                            than a conventional workstation.<br/>
                                                    <a class="orange-highlight" href="https://new.siemens.com/global/en/company/about/history/technology/information-and-communications-technology/computers.html" target="_blank" data-ste-link-id="2508501107.top-intro/none:0498249752.technology/computers.html">
                                                More about Synapse-1 
                                                <span class="link--icon"></span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </div>


                <div class="row no-gutters">
                    <div class="col-sm py-2 text-sm-left text-md-right align-self-center">
                        <div class="d-flex justify-content-end">
                            <div class="d-flex">
                                <div class="px-5 d-inline animated-content">
                                    <span class="text-black-50 grey-header font-weight-bold">Launching of giants</span>
                                    <br/>
                                    <span class="h3 text-dark font-weight-bold">1994</span><br/>
                                    <p>
                                        Amazon is launched, heralding the rise of one of our times technological and ecommerce
                                        giants.
                                    </p>
                                </div>
                                <span class="border-badge-left d-inline animated-content"></span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-md-end">
                            <div>
                                <div class="d-flex animated-container">
                                    <div class="px-5 d-inline animated-content">
                                        <span class="h3 text-dark font-weight-bold">1996</span><br/>
                                        <p>
                                            Siemens launches the first website.
                                        </p>
                                    </div>
                                    <span class="border-badge-left d-inline animated-content"></span>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <div>
                                <div class="d-flex animated-container">
                                    <div class="px-5 d-inline animated-content">
                                        <span class="h3 text-dark font-weight-bold">1998</span><br/>
                                        <p>
                                            Google launches with its first product, its unique and optimised search engine. This is
                                            the birth of the second of the four technology giants of our times.
                                        </p>
                                    </div>
                                    <span class="border-badge-left d-inline animated-content"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm border-md-left border-lg-left">
                        <div class="d-flex p-3">
                            <div class="d-inline-block p-4 animated-container">
                                <div class="p-5 animated-content">
                                    <img class="img-fluid" src={require("./img/Amazon_Image_10.jpg")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>


                <div id="2000" class="row no-gutters">
                        <div class="col-sm py-2 border-md-right border-lg-right text-right">
                            <div class="d-flex animated-container">
                                <div class="d-inline-block p-4 animated-content">
                                    <video class="shadow-left img-fluid d-none video" controls="" autoplay="">
                                        <source src="/content/dam/internet/siemens-com/global/company/stories/application-pages/50_years_v1_4/vids/Web2_Image_11.mp4" type="video/mp4"/>
                                    </video>
                                    <img class="img-fluid shadow-left placeholder" src={require("./img/Web2_Placeholder_Image_11.jpg")}/>
                                </div>
                                <div class="d-inline-block text-right text-wrap animated-content">
                                    <span class="timeline-big-number">20</span><br/>
                                    <span class="timeline-big-number">00</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm m-sm-auto text-left">
                            <div class="d-flex animated-container">
                                <span class="border-badge-right d-inline-block animated-content"></span>
                                <div class="d-inline-block px-5 animated-content">
                                    <span class="text-black-50 grey-header font-weight-bold">Web 2.0 has Poked you!</span>
                                    <br/>
                                    <span class="h3 text-dark font-weight-bold">2004</span><br/>
                                    <p>
                                        The term Web 2.0 is coined, a term referring to the evolution in the use of the internet and
                                        related technologies. These changes where focussing on making it easier for users to engage with
                                        the internet. It also happened to be the year Facebook launched, giving birth to the
                                        revolutionary concept of social media and establishing what would become the third of the four
                                        large technology giants.
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex animated-container">
                                <span class="border-badge-right d-inline-block animated-content"></span>
                                <div class="d-inline-block px-5 animated-content">
                                    <span class="h3 text-dark font-weight-bold">2005</span>
                                    <br/>
                                    <p>
                                        2.0 heralded the rise of streaming and blogging with YouTube and Reddit launching.
                                    </p>
                                </div>
                            </div>
                        </div>
                        </div>

                <div class="row no-gutters">
                    <div class="col-sm py-2 text-sm-left text-md-right align-self-center">
                        <div class="d-flex justify-content-end">
                            <div class="d-flex animated-container">
                                <div class="px-5 d-inline animated-content">
                                    <span class="text-black-50 grey-header font-weight-bold">Follow me</span>
                                    <br/>
                                    <span class="h3 text-dark font-weight-bold">2006</span><br/>
                                    <p>
                                        The social media boom starts to take off as Twitter gave the world a space to express
                                        themselves 140 characters at a time.
                                    </p>
                                </div>
                                <span class="border-badge-left d-inline animated-content"></span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <div>
                                <div class="d-flex animated-container">
                                    <div class="px-5 d-inline animated-content">
                                        <span class="h3 text-dark font-weight-bold">2010</span><br/>
                                        <p>
                                            The world became more visual as everyone as Instagram democratized photography and gave
                                            the world the Valencia filter.
                                        </p>
                                    </div>
                                    <span class="border-badge-left d-inline animated-content"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm border-md-left border-lg-left">
                        <div class="d-flex">
                            <div class="d-inline-block p-3 animated-container">
                                <div class="p-4 animated-content">
                                    <img class="img-fluid shadow-right " src={require("./img/SocialMedia_Placeholder_Image_12.jpg")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            
                <div id="2010" class="row no-gutters">
                    <div class="col-sm py-2 border-md-right border-lg-right text-right">
                        <div class="d-flex animated-container">
                            <div class="d-inline-block p-4 animated-content">
                                <img class="img-fluid shadow-left" src={require("./img/Chatbots_Image_13.jpg")}/>
                            </div>
                            <div class="d-inline-block text-right text-wrap animated-content">
                                <span class="timeline-big-number">20</span><br/>
                                <span class="timeline-big-number">10</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm m-sm-auto">
                        <div class="d-flex text-left animated-container">
                            <span class="border-badge-right d-inline-block animated-content"></span>
                            <div class="d-inline-block px-5 animated-content">
                                <br/>
                                <span class="h3 text-dark font-weight-bold">2012</span><br/>
                                <span class="font-weight-bold">The rise of the bots</span>
                                <p>
                                    Google Now launches, heralding the introduction of chatbots, leading to the rise into research
                                    of artificial intelligence (AI) research.
                                </p>
                            </div>
                        </div>
                        <div class="d-flex text-left animated-container">
                            <span class="border-badge-right d-inline-block animated-content"></span>
                            <div class="d-inline-block px-5 animated-content">
                                <span class="h3 text-dark font-weight-bold">2017</span>
                                <br/>
                                <span class="font-weight-bold">Man vs Robot</span>
                                <br/>
                                <p>
                                    AlphaGo breaks the boundaries of AI and the hearts of go players world wide. Go, the oldest
                                    strategy boardgame in existence, is bested by the AI machine, who not only beat the world’s best
                                    players but would go on to play itself. Through machine learning would beat it’s previous
                                    updates, showing the true learning potential of machines.
                                    <a class="orange-highlight" href="https://new.siemens.com/global/en/company/stories/home/artificial-intelligence.html" target="_blank" data-ste-link-id="2508501107.top-intro/none:2912029634.ificial-intelligence.html">More about AI at Siemens</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
            
                <div class="row no-gutters">
                    <div class="col-sm py-2 text-sm-left text-md-right align-self-center">
                        <div class="d-flex justify-content-end">
                            <div class="d-flex animated-container">
                                <div class="px-5 d-inline animated-content">
                                    <span class="h3 text-dark font-weight-bold">2018</span><br/>
                                    <span class="font-weight-bold">Talk about Revolution</span>
                                    <p>
                                        The term 4th Industrial revolution was popularized becoming a catch all for all future
                                        innovation, heralding the biggest shift in the future or humanity since the Internet was
                                        launched 49 years early.
                                        <a class="orange-highlight" href="https://new.siemens.com/global/en/products/software/mindsphere.html" target="_blank" data-ste-link-id="2508501107.top-intro/none:3996213558./software/mindsphere.html">More about speaking to the IoT at Siemens</a>
                                    </p>
                                </div>
                                <span class="border-badge-left d-inline animated-content"></span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <div>
                                <div class="d-flex animated-container">
                                    <div class="px-5 d-inline animated-content">
                                        <span class="h3 text-dark font-weight-bold">2019</span><br/>
                                        <span class="font-weight-bold">Talk to the hand</span>
                                        <p>
                                            The first commercial phones that you can interact with using touch free hand gesture
                                            controls come onto the market, marking the next evolution of the way humans interact
                                            with machines.
                                        </p>
                                    </div>
                                    <span class="border-badge-left d-inline animated-content"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm border-md-left border-lg-left">
                        <div class="d-flex p-3 animated-container">
                            <div class="d-inline-block p-4 animated-content">
                                <video class="shadow-right img-fluid d-none video" controls="" autoplay="">
                                    <source src="/content/dam/internet/siemens-com/global/company/stories/application-pages/50_years_v1_4/vids/4thIndustrialRevolution_Placeholder_Image_13.mp4" type="video/mp4"/>
                                </video>
                                <img class="img-fluid shadow-right placeholder" src={require("./img/4thIndustrialRevolution_Placeholder_Image_13.jpg")}/>
                            </div>
                        </div>
                    </div>
                    </div>

                <div id="2020" class="row no-gutters">
                    <div class="col-sm py-2 border-md-right border-lg-right text-right">
                        <div class="d-flex animated-container">
                            <div class="d-inline-block p-4 animated-content">
                                <video class="shadow-right img-fluid d-none video" controls="" autoplay="">
                                    <source src="/content/dam/internet/siemens-com/global/company/stories/application-pages/50_years_v1_4/vids/5G_Image_14.mp4" type="video/mp4"/>
                                </video>
                                <img class="img-fluid shadow-left placeholder" src={require("./img/5G_Placeholder_Image_14.jpg")} alt=""/>
                            </div>
                            <div class="d-inline-block text-right text-wrap animated-content">
                                <span class="timeline-big-number">20</span><br/>
                                <span class="timeline-big-number">20</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm m-sm-auto">
                        <div class="d-flex text-left animated-container">
                            <span class="border-badge-right d-inline-block animated-content"></span>
                            <div class="d-inline-block px-5 animated-content">
                                <br/>
                                <span class="h3 text-dark font-weight-bold">2020</span><br/>
                                <span class="font-weight-bold">Level up</span>
                                <p>
                                    5G launches and becomes one of the most important pillars of the Forth Industrial Revolution.
                                    With superior speed and connectivity the potential for completely connected cities, autonomous
                                    driving fleets and untold problem solving abilities.
                                    <a class="orange-highlight" target="_blank" href="https://new.siemens.com/global/en/products/automation/industrial-communication/5g.html" data-ste-link-id="2508501107.top-intro/none:2761649966.ial-communication/5g.html">
                                        More about 5G at Siemens
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div class="d-flex text-left animated-container">
                            <span class="border-badge-right d-inline-block animated-content"></span>
                            <div class="d-inline-block px-5 animated-content">
                                <span class="h3 text-dark font-weight-bold">2025</span>
                                <br/>
                                <span class="font-weight-bold">Talk to me</span>
                                <br/>
                                <p>
                                    Voice command technology has gone further than before with the computer learning and people’s
                                    natural tendencies, making voice command the go-to way to give commands.
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>

                <div class="row no-gutters">
                    <div class="col-sm py-2 text-sm-left text-md-right align-self-center">
                        <div class="d-flex justify-content-end">
                            <div class="d-flex animated-container">
                                <div class="px-5 d-inline animated-content">
                                    <span class="h3 text-dark font-weight-bold">2026</span><br/>
                                    <span class="font-weight-bold">Good Morning, Siri</span>
                                    <p>
                                        Technology and research have pushed chatbots to become more real, to such an extent that
                                        most people have their own personal chatbot assistant and start have more conversations with
                                        chatbots then other humans. The barrier between artificial and a real is becoming more
                                        transparent then before.
                                    </p>
                                </div>
                                <span class="border-badge-left d-inline animated-content"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm border-md-left border-lg-left">
                        <div class="d-flex p-3 animated-container">
                            <div class="d-inline-block p-4 animated-content">
                                <img class="img-fluid shadow-right" src={require("./img/AIAssitan_Image_13.jpg")}/>
                            </div>
                        </div>
                    </div>
                    </div>

                <div id="2030" class="row no-gutters">
                    <div class="col-sm py-2 border-md-right border-lg-right text-right">
                        <div class="d-flex animated-container">
                            <div class="d-inline-block p-4 animated-content">
                                <video class="shadow-right img-fluid d-none video" controls="" autoplay="">
                                    <source src="/content/dam/internet/siemens-com/global/company/stories/application-pages/50_years_v1_4/vids/Interfaces_Image_15.mp4" type="video/mp4"/>
                                </video>
                                <img class="img-fluid shadow-left placeholder" src={require("./img/Interfaces_Image_15.jpg")}/>
                            </div>
                            <div class="d-inline-block text-right text-wrap animated-content">
                                <span class="timeline-big-number">20</span><br/>
                                <span class="timeline-big-number">30</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm m-sm-auto">
                        <div class="d-flex text-left animated-container">
                            <span class="border-badge-right d-inline-block animated-content"></span>
                            <div class="d-inline-block px-5 animated-content">
                                <br/>
                                <span class="h3 text-dark font-weight-bold">2032</span><br/>
                                <span class="font-weight-bold">Screen grab</span>
                                <p>
                                    Interfaces have gone from being fixed screen experiences to becoming something that could be
                                    accessed anywhere without the need of a screen with commands be given verbally.
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>


                <div class="row no-gutters">
                    <div class="col-sm py-2 text-sm-left text-md-right align-self-center">
                        <div class="d-flex justify-content-end">
                            <div class="d-flex animated-container">
                                <div class="px-5 d-inline animated-content">
                                    <span class="h3 text-dark font-weight-bold">2034</span><br/>
                                    <span class="font-weight-bold">Smaller is sometimes better</span>
                                    <p>
                                        Personal computers have gone from a desktop to laptop to now the size of a wristwatch,
                                        without losing the capabilities of the machines of the most powerful computers we know.
                                    </p>
                                </div>
                                <span class="border-badge-left d-inline animated-content"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm border-md-left border-lg-left">
                        <div class="d-flex p-3 animated-container">
                            <div class="d-inline-block p-4 animated-content">
                                <video class="shadow-right img-fluid d-none video" controls="" autoplay="">
                                    <source src="/content/dam/internet/siemens-com/global/company/stories/application-pages/50_years_v1_4/vids/SmallHardware_Image_16.mp4" type="video/mp4"/>
                                </video>
                                <img class="img-fluid shadow-right placeholder" src={require("./img/SmallHardware_Placeholder_Image_16.jpg")}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="2060" class="row no-gutters">
                    <div class="col-sm py-5 border-md-right border-lg-right text-right animated-container">
                        <div class="text-wrap animated-content">
                            <span class="timeline-big-number">20</span><br/>
                            <span class="timeline-big-number">60</span>
                        </div>
                    </div>
                    <div class="col-sm m-sm-auto">

                    </div>
                </div>

                <div class="row no-gutters d-sm-hide">
                    <div class="col-sm py-2 border-md-right border-lg-right text-right align-self-center">
                        <div class="p-5">
                            <span>&nbsp;</span>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="p-5">
                            <span>&nbsp;</span>
                        </div>
                    </div>
                </div>

                <div class="row no-gutters px-lg-5">
                    <div class="col-sm px-lg-5 animated-container">
                        <div class="px-md-5 px-lg-5 animated-content">
                            <div class="last-element text-white text-center p-3">
                                <hr class="hr-s"/>
                                <span class="h3 font-weight-bold">2069</span><br/>
                                <span class="font-weight-bold">Welcome to the future</span>
                                <p class="text-white">
                                    The world is unrecognizable compared to the one that we will in now. We walk amongst
                                    cyborgs, life-like humanoid robots and have all the flying cars that we were promised in the
                                    1960’s.
                                    With the ability and drive to shape the future, it will be a most impressive sight to see.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="mt-5">

                </div>

                {/* <div class="row no-gutters">
                    <div class="col-sm py-2"></div>
                    <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
                    <div class="m-0">
                        <span class="badge badge-pill timeline-badge">&nbsp;</span>
                    </div>
                    </div>
                    <div class="col-sm"></div>
                </div>  */}
                
                </div>
        );
    }
}

export default Siemens50Years;