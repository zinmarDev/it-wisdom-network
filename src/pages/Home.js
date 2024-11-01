import React from "react";
import logo from "../assets/ItNetworkLogo.jpg"
import {FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/fa";
import ImgResult1 from "../assets/1.png";
import ImgResult2 from "../assets/2.png";
import ImgResult3 from "../assets/3.png";
import ImgResult4 from "../assets/4.png";
import ImgResult5 from "../assets/5.png";
import ImgResult6 from "../assets/6.png";
import usingNotepad from "../assets/notepad.png"
import usingNotepad2 from "../assets/usingNotepad2.png"

const codeStringArrayForHTML = [
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "\t<title></title>\n" +
    "</head>\n" +
    "<body>\n" +
    "\t<h1>Heading for h1</h1>\n" +
    "\t<h2>Heading for h2</h2>\n" +
    "\t<h3>Heading for h3</h3>\n" +
    "\t<h4>Heading for h4</h4>\n" +
    "\t<h5>Heading for h5</h5>\n" +
    "\t<h6>Heading for h6</h6>\n" +
    "</body>\n" +
    "</html>",
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "\t<head>\n" +
    "\t\t<title>Page Title</title>\n" +
    "\t</head>\n" +
    "\t<body>\n" +
    "\t\t<h1>My First Heading</h1>\n" +
    "\t\t<p>My first paragraph.</p>\n" +
    "\t</body>\n" +
    "</html>",
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "\t<title>HTML Paragraphs</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "\t<p>This is first paragraph.</p>\n" +
    "\t<p>This is second paragraph</p>\n" +
    "</body>\n" +
    "</html>",
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "\t<title>HTML Paragraphs</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "\t<p>This is first paragraph.</p>\n" +
    "\t<hr>\n" +
    "\t<p>This is second paragraph</p>\n" +
    "</body>\n" +
    "</html>",
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "\t<title>HTML Paragraphs</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "\t<p>\n" +
    "\t  My Bonnie lies over the ocean.\n" +
    "\n" +
    "\t  My Bonnie lies over the sea.\n" +
    "\n" +
    "\t  My Bonnie lies over the ocean.\n" +
    "\n" +
    "\t  Oh, bring back my Bonnie to me.\n" +
    "\t</p>\n" +
    "\t<hr>\n" +
    "\t<pre>\n" +
    "\t  My Bonnie lies over the ocean.\n" +
    "\n" +
    "\t  My Bonnie lies over the sea.\n" +
    "\n" +
    "\t  My Bonnie lies over the ocean.\n" +
    "\n" +
    "\t  Oh, bring back my Bonnie to me.\n" +
    "\t</pre>\n" +
    "</body>\n" +
    "</html>",
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "\t<title>HTML Paragraphs</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "\t<p>\n" +
    "\t  My Bonnie lies over the ocean.\n" +
    "\t  <br>\n" +
    "\t  My Bonnie lies over the sea.\n" +
    "\t  <br>\n" +
    "\t  My Bonnie lies over the ocean.\n" +
    "\t  <br>\n" +
    "\t  Oh, bring back my Bonnie to me.\n" +
    "\t</p>\n" +
    "</body>\n" +
    "</html>",
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "\t<title>HTML Formatting</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "\t<b>This is bold text.</b>\n" +
    "\t<br>\n" +
    "\t<i>This is Italic text.</i>\n" +
    "\t<br>\n" +
    "\t<mark>This is mark text.</mark>\n" +
    "\t<br>\n" +
    "\t<del>This is del text.</del>\n" +
    "\t<br>\n" +
    "\t<p>This is <sub>sub</sub> text and <sup>sup</sup> text.</p>\n" +
    "\t<br>\n" +
    "\t<strong>This is strong text.</strong>\n" +
    "\t<br>\n" +
    "\t<em>This is em text.</em>\n" +
    "\t<br>\n" +
    "\t<small>This is small text.</small>\n" +
    "\t<br>\n" +
    "\t<p>I like <del>coffee</del> <ins>cake</ins>.</p>\n" +
    "</body>\n" +
    "</html>"
]

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: "html",
            titleByLanguage: {
                "html": [
                    {
                        label: "Introduction",
                        value: "introduction",
                        selected: false,
                    },
                    {
                        label: "Installation",
                        value: "installation",
                        selected: false,
                    },
                    {
                        label: "Guide to File Creation",
                        value: "fileCreation",
                        selected: false,
                    },
                    {
                        label: "HTML Heading",
                        value: "heading",
                        selected: false,
                    },
                    {
                        label: "HTML Paragraphs",
                        value: "paragraph",
                        selected: false,
                    },
                    {
                        label: "HTML Formatting",
                        value: "formatting",
                        selected: false,
                    },
                ],
                "reactjs": [],
                "typescript": [],
            },
            selectedMenuTitle: "Introduction",
            openMenu: false,
        }
    }

    handleClickTitle(value) {
        this.setState({
            selectedLanguage: value,
            openMenu: false,
            selectedMenuTitle: "Introduction",
        })
    }

    handleSelectedOption(title) {
        this.setState({
            selectedMenuTitle: title,
            openMenu: false,
        })
    }

    handleCopyCode(codeString) {
        navigator.clipboard.writeText(codeString)
            .then(() => {
                //alert('Code copied to clipboard!');
            })
            .catch(err => {
                console.error('Could not copy code: ', err);
            });
    }

    handleCodeDisplay(codeString) {
        return (
            <div style={{
                overflowX: 'auto',
                whiteSpace: 'pre-wrap'
            }}>
                <code>{codeString}</code>
            </div>
        )
    }

    render() {
        let {selectedLanguage, titleByLanguage, selectedMenuTitle, openMenu} = this.state;
        return (
            <div className={`w-full grid grid-cols-1 h-full`}>

                <div className={`w-full flex fixed justify-between z-50  top-0`}>
                    <div className={`w-2/12 bg-white text-black px-1 md:px-10`}>
                        <div className={`flex md:gap-x-4 justify-center items-center pt-2`}>
                            <img src={logo} className={`w-10 h-10 `}/>
                            <div
                                className={`uppercase text-center hidden md:block font-bold`}>{selectedLanguage} {"Tutorial"}</div>
                        </div>
                    </div>
                    <div
                        className={`w-10/12 justify-end bg-primary text-white h-14 text-sm md:text-base lg:text-lg px-4 md:px-10 hidden md:flex`}>
                        <div
                            onClick={() => this.handleClickTitle("html")}
                            className={`p-4 hover:opacity-60 active:bg-hoverPrimary active:text-black ${selectedLanguage === "html" && 'bg-hoverPrimary text-black font-medium'}`}>
                            <a href={"#html"} className={``}>HTML</a></div>
                        <div onClick={() => this.handleClickTitle("reactjs")}
                             className={`p-4 hover:opacity-60 active:bg-hoverPrimary active:text-black ${selectedLanguage === "reactjs" && 'bg-hoverPrimary text-black font-medium'}`}>
                            <a
                                href={"#react"}>ReactJS</a></div>
                        <div onClick={() => this.handleClickTitle("typescript")}
                             className={`p-4 hover:opacity-60 active:bg-hoverPrimary active:text-black ${selectedLanguage === "typescript" && 'bg-hoverPrimary text-black font-medium'}`}>
                            <a
                                href={"#typescript"}>Typescript</a></div>
                    </div>
                    <div
                        className={`w-10/12 justify-end bg-primary text-white h-14 text-sm md:text-base lg:text-lg px-4 md:px-10 flex md:hidden`}>
                        <select onChange={(e) => this.handleClickTitle(e.target.value)}
                                className={`bg-primary font-medium gap-2 text-white outline-none ring-0`}
                                value={selectedLanguage}>
                            <option value={"html"}>HTML</option>
                            <option value={"reactjs"}>React JS</option>
                            <option value={"typescript"}>Typescript</option>
                        </select>
                    </div>
                </div>
                <div
                    className={`w-full fixed top-14 z-10 flex justify-center bg-secondary text-white font-bold h-7 border-t border-b border-solid border-primary`}>
                    <div>IT Wisdom Network</div>
                </div>
                <div className={`md:hidden z-10 top-20 mt-14`}>
                    <div className={`fixed`}>
                        {
                            openMenu ?
                                <FaAngleDoubleLeft onClick={() => this.setState({openMenu: !openMenu})}
                                                   className={`text-white ml-2 h-7 cursor-pointer`}/>
                                :
                                <FaAngleDoubleRight onClick={() => this.setState({openMenu: !openMenu})}
                                                    className={`text-white ml-2 h-7 cursor-pointer`}/>
                        }
                    </div>
                </div>
                {
                    openMenu &&
                    <div className={`md:hidden z-20 top-20 mt-1.5 w-10/12 shadow-2xl absolute bg-white`}>
                        {
                            titleByLanguage[selectedLanguage].length === 0 ?
                                <div className={`px-5 py-3`}>Coming soon...</div>
                                :
                                titleByLanguage[selectedLanguage].map(
                                    (language, ind) =>
                                        <div key={ind}
                                             onClick={() => this.handleSelectedOption(language.label)}
                                             className={`py-3 hover:bg-activePrimary hover:text-white px-5 ${selectedMenuTitle === language.label && 'bg-activePrimary text-black font-black font-semibold'}`}>
                                            {language.label}
                                        </div>
                                )

                        }
                    </div>
                }
                <div className={`z-10 mt-7 md:mt-16`}>

                </div>
                <div className={`w-full flex justify-between text-black py-4 font-medium`}>
                    <div
                        className={`w-2/12 hidden md:block bg-white top-20 mt-1 text-black h-screen fixed overflow-auto border-r-2 border-primary`}>
                        <div className={``}>
                            {
                                titleByLanguage[selectedLanguage].length === 0 ?
                                    <div className={`px-5 py-3`}>Coming soon...</div>
                                    :
                                    titleByLanguage[selectedLanguage].map(
                                        (language, ind) =>
                                            <div key={ind}
                                                 onClick={() => this.handleSelectedOption(language.label)}
                                                 className={`py-3 cursor-pointer hover:bg-activePrimary hover:text-white px-5 ${selectedMenuTitle === language.label && 'bg-activePrimary text-black font-black'}`}>
                                                {language.label}
                                            </div>
                                    )

                            }
                        </div>
                    </div>
                    <div className={`w-full md:w-10/12 px-4 md:ml-[15%] md:mt-5 md:px-10 text-base md:text-lg text-black overflow-y-auto`}>
                        {
                            selectedLanguage === "html" ?
                                <>
                                    <div
                                        className={`text-2xl md:text-4xl font-semibold mb-10`}>{selectedMenuTitle}</div>
                                    <>
                                        {
                                            selectedMenuTitle === "Introduction" ?
                                                <div>
                                                    <div className={`text-lg font-bold mb-10`}>Stand For:
                                                        <span
                                                            className={`text-primary`}> Hyper Text Market Language</span>
                                                    </div>
                                                    <iframe
                                                        src="https://www.youtube.com/embed/xQ4Bb3FutmU?si=dYDuHFF8Dv18FKzJ&rel=0&autoplay=1"
                                                        title="HTML Introduction"
                                                        className={`w-full md:w-10/12  min-h-[40vh] md:min-h-[60vh]`}
                                                        referrerPolicy="strict-origin-when-cross-origin"
                                                        allowFullScreen></iframe>
                                                    <div className={`my-10`}>
                                                        <div className={`font-bold text-xl`}>What is HTML Element?
                                                        </div>
                                                        <p className={`my-2`}>
                                                            An HTML element is defined by a start tag, some content, and
                                                            an end tag:
                                                            <div
                                                                className={`font-semibold text-primary`}>{"<tagname> Content goes here... </tagname>"}</div>
                                                        </p>
                                                    </div>
                                                    <hr className={`my-7`}/>
                                                    <div className={`my-10`}>
                                                        <div className={`font-bold mb-10 text-xl`}>Sample HTML Document
                                                        </div>
                                                        <iframe
                                                            src="https://www.youtube.com/embed/VnrAEFZgU5M?si=mO8LK8_6TY_rOe5Z&rel=0"
                                                            title="HTML Coding"
                                                            className={`w-full md:w-10/12  min-h-[40vh] md:min-h-[60vh]`}
                                                            referrerPolicy="strict-origin-when-cross-origin"
                                                            allowFullScreen></iframe>
                                                        <div
                                                            className={`border-2 border-gray-300 rounded-md mt-10`}>
                                                            <div
                                                                className={`flex justify-between gap-4 px-4 border-b border-solid border-gray-300`}>
                                                                <div>HTML</div>
                                                                <div
                                                                    className={`hover:bg-gray-100 font-medium cursor-pointer px-2`}
                                                                    onClick={() => this.handleCopyCode(codeStringArrayForHTML[1])}>Copy
                                                                </div>
                                                            </div>
                                                            <div className={`p-4`}>
                                                                {this.handleCodeDisplay(codeStringArrayForHTML[1])}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={`my-10`}>
                                                        <div
                                                            className={`mb-2 font-bold text-xl text-primary`}>Explanation
                                                        </div>
                                                        <ul className={`list-item font-medium list-disc mx-5 md:mx-10`}>
                                                            <li>{"<!DOCTYPE html> declaration defines that this document is an HTML5 document"}</li>
                                                            <li>{"<html> element is the root element of an HTML page"}</li>
                                                            <li>{"<head> element contains meta information"}</li>
                                                            <li>{"<title> element specifies a title on the browser's title bar for the HTML page"}</li>
                                                            <li>{"<body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc. "}</li>
                                                            <li>{"<h1> element defines a large heading"}</li>
                                                            <li>{"<p> element defines a paragraphs"}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                :
                                                selectedMenuTitle === "Installation" ?
                                                    <div>
                                                        <div className={`mb-10`}>
                                                            <iframe
                                                                src="https://www.youtube.com/embed/hmDx6UjX2a0?si=-Yo92u77-vYp-3Zl&rel=0&autoplay=1"
                                                                title="How to install Sublime Text?"
                                                                className={`w-full md:w-10/12  min-h-[40vh] md:min-h-[60vh]`}
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                referrerPolicy="strict-origin-when-cross-origin"
                                                                allowFullScreen></iframe>
                                                            <div className={`text-xl font-bold my-10`}>* Using Notepad
                                                            </div>
                                                            <div className={`flex justify-between gap-4`}>
                                                                <img src={usingNotepad} className={`w-full md:w-1/2`}/>
                                                                <img src={usingNotepad2} className={`w-full md:w-1/2`}/>
                                                            </div>
                                                        </div>

                                                        <div className={`text-xl font-bold mb-10`}>* Using Sublime Text
                                                        </div>
                                                        <iframe
                                                            src="https://www.youtube.com/embed/NLEHISMioQw?si=zW4VrRx7Rd4ju2s-&rel=0"
                                                            title="How to install Sublime Text?"
                                                            className={`w-full md:w-10/12  min-h-[40vh] md:min-h-[60vh]`}
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                            referrerPolicy="strict-origin-when-cross-origin"
                                                            allowFullScreen></iframe>
                                                        <div className={`my-10`}>
                                                            <div>
                                                                <span
                                                                    className={`font-bold text-xl`}>Download Link - </span>
                                                                <a href={"https://www.sublimetext.com/"}
                                                                   target={"_blank"}
                                                                   className={`text-lg text-blue-500 font-semibold`}>sublimetext.com</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    :
                                                    selectedMenuTitle === "Guide to File Creation" ?
                                                        <div className={`mb-10`}>
                                                            <div className={`text-xl font-bold my-10`}>* Using Notepad
                                                            </div>
                                                            <iframe
                                                                src="https://www.youtube.com/embed/o8wHDE5Brfs?si=qn9Ta4ml8DoSjFsN&rel=0&autoplay=1"
                                                                title="How to use Sublime Text for HTML file?"
                                                                className={`w-full md:w-10/12 min-h-[40vh] md:min-h-[60vh]`}
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                referrerPolicy="strict-origin-when-cross-origin"
                                                                allowFullScreen></iframe>
                                                            <div className={`text-xl font-bold my-10`}>* Using Sublime
                                                                Text
                                                            </div>
                                                            <iframe
                                                                src="https://www.youtube.com/embed/1AqvGotyxWI?si=MrxHucop7hO9WCAT&rel=0"
                                                                title="How to use Sublime Text for HTML file?"
                                                                className={`w-full md:w-10/12 min-h-[40vh] md:min-h-[60vh]`}
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                referrerPolicy="strict-origin-when-cross-origin"
                                                                allowFullScreen></iframe>
                                                        </div>
                                                        :
                                                        selectedMenuTitle === "HTML Heading" ?
                                                            <div>
                                                                <div className={`mb-10 text-lg font-bold`}>
                                                                    *Using Sublime Text
                                                                </div>
                                                                <iframe
                                                                    src="https://www.youtube.com/embed/E2wMUQ0MiW4?si=VaBJpKOEHfDGWBlE&rel=0&autoplay=1"
                                                                    title="Header"
                                                                    className={`w-full md:w-10/12 min-h-[40vh] md:min-h-[60vh] z-0`}
                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                                    allowFullScreen></iframe>
                                                                <div className={`my-10 text-lg font-bold`}>
                                                                    *Using Notepad
                                                                </div>
                                                                <iframe
                                                                    src="https://www.youtube.com/embed/_LR3rluz7lk?si=8H9WdP5kgqk76V8M&rel=0"
                                                                    title="Header"
                                                                    className={`w-full md:w-10/12 min-h-[40vh] md:min-h-[60vh] z-0`}
                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                                    allowFullScreen></iframe>
                                                                <div className={`my-10`}>
                                                                    <div className={`my-10 text-lg font-bold`}>HTML Code
                                                                        Example
                                                                    </div>
                                                                    <div
                                                                        className={`border-2 border-gray-300 rounded-md`}>
                                                                        <div
                                                                            className={`flex justify-between gap-4 px-4 border-b border-solid border-gray-300`}>
                                                                            <div>HTML</div>
                                                                            <div
                                                                                className={`hover:bg-gray-100 font-medium cursor-pointer px-2`}
                                                                                onClick={() => this.handleCopyCode(codeStringArrayForHTML[0])}>Copy
                                                                            </div>
                                                                        </div>
                                                                        <div className={`p-4`}>
                                                                            {this.handleCodeDisplay(codeStringArrayForHTML[0])}
                                                                        </div>
                                                                    </div>
                                                                    <h3 className={`my-10 font-bold`}>Result :</h3>
                                                                    <div
                                                                        className={`border-2 border-gray-300 rounded-md`}>
                                                                        <img src={ImgResult1}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            :
                                                            selectedMenuTitle === "HTML Paragraphs" ?
                                                                <div>
                                                                    <div
                                                                        className={`font-bold text-xl mt-10 underline`}>Block
                                                                        level element
                                                                    </div>
                                                                    <div
                                                                        className={`font-medium mt-2`}>{"The <p> element is a block-level element. A block-level element always starts on a new line and takes up the full width available."}</div>

                                                                    <div className={`mt-10 mb-10`}>
                                                                        <iframe
                                                                            src="https://www.youtube.com/embed/9b2GeC3RzMc?si=b2t4kf9HWnX7HVK1&rel=0&autoplay=1"
                                                                            title="Header"
                                                                            className={`w-full md:w-10/12 min-h-[40vh] md:min-h-[60vh] z-0`}
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                            referrerPolicy="strict-origin-when-cross-origin"
                                                                            allowFullScreen></iframe>
                                                                        <div
                                                                            className={`mt-10 text-xl font-bold text-primary`}>{"*Using HTML Paragraph <p>....</p> "}</div>

                                                                        <div className={`my-10 font-bold text-lg`}>HTML
                                                                            Code
                                                                            Example
                                                                        </div>
                                                                        <div
                                                                            className={`border-2 border-gray-300 rounded-md`}>
                                                                            <div
                                                                                className={`flex justify-between gap-4 px-4 border-b border-solid border-gray-300`}>
                                                                                <div>HTML</div>
                                                                                <div
                                                                                    className={`hover:bg-gray-100 font-medium cursor-pointer px-2`}
                                                                                    onClick={() => this.handleCopyCode(codeStringArrayForHTML[2])}>Copy
                                                                                </div>
                                                                            </div>
                                                                            <div className={`p-4`}>
                                                                                {this.handleCodeDisplay(codeStringArrayForHTML[2])}
                                                                            </div>
                                                                        </div>
                                                                        <h3 className={`my-10 font-bold`}>Result :</h3>
                                                                        <div
                                                                            className={`border-2 border-gray-300 rounded-md`}>
                                                                            <img src={ImgResult2}/>
                                                                        </div>
                                                                        <hr className={`my-7`}/>
                                                                        <div
                                                                            className={`text-xl font-bold text-primary`}>{"*Using HTML Horizontal Rules <hr> "}</div>
                                                                        <div className={`my-10 font-bold text-lg`}>HTML
                                                                            Code
                                                                            Example
                                                                        </div>
                                                                        <div
                                                                            className={`border-2 border-gray-300 rounded-md`}>
                                                                            <div
                                                                                className={`flex justify-between gap-4 px-4 border-b border-solid border-gray-300`}>
                                                                                <div>HTML</div>
                                                                                <div
                                                                                    className={`hover:bg-gray-100 font-medium cursor-pointer px-2`}
                                                                                    onClick={() => this.handleCopyCode(codeStringArrayForHTML[3])}>Copy
                                                                                </div>
                                                                            </div>
                                                                            <div className={`p-4`}>
                                                                                {this.handleCodeDisplay(codeStringArrayForHTML[3])}
                                                                            </div>
                                                                        </div>
                                                                        <h3 className={`my-10 font-bold`}>Result :</h3>
                                                                        <div
                                                                            className={`border-2 border-gray-300 rounded-md`}>
                                                                            <img src={ImgResult3}/>
                                                                        </div>
                                                                        <hr className={`my-7`}/>
                                                                        <div
                                                                            className={`text-xl font-bold text-primary mt-10`}>{"*Using The HTML <pre> Element "}</div>

                                                                        <div className={`my-10 font-bold text-lg`}>HTML
                                                                            Code
                                                                            Example
                                                                        </div>
                                                                        <div
                                                                            className={`border-2 border-gray-300 rounded-md`}>
                                                                            <div
                                                                                className={`flex justify-between gap-4 px-4 border-b border-solid border-gray-300`}>
                                                                                <div>HTML</div>
                                                                                <div
                                                                                    className={`hover:bg-gray-100 font-medium cursor-pointer px-2`}
                                                                                    onClick={() => this.handleCopyCode(codeStringArrayForHTML[4])}>Copy
                                                                                </div>
                                                                            </div>
                                                                            <div className={`p-4`}>
                                                                                {this.handleCodeDisplay(codeStringArrayForHTML[4])}
                                                                            </div>
                                                                        </div>
                                                                        <h3 className={`my-10 font-bold`}>Result :</h3>
                                                                        <div
                                                                            className={`border-2 border-gray-300 rounded-md`}>
                                                                            <img src={ImgResult4}/>
                                                                        </div>
                                                                        <hr className={`my-7`}/>
                                                                        <div
                                                                            className={`text-xl font-bold text-primary mt-10`}>{"*Using HTML Line Breaks <br> "}</div>

                                                                        <div className={`my-10 font-bold text-lg`}>HTML
                                                                            Code
                                                                            Example
                                                                        </div>
                                                                        <div
                                                                            className={`border-2 border-gray-300 rounded-md`}>
                                                                            <div
                                                                                className={`flex justify-between gap-4 px-4 border-b border-solid border-gray-300`}>
                                                                                <div>HTML</div>
                                                                                <div
                                                                                    className={`hover:bg-gray-100 font-medium cursor-pointer px-2`}
                                                                                    onClick={() => this.handleCopyCode(codeStringArrayForHTML[5])}>Copy
                                                                                </div>
                                                                            </div>
                                                                            <div className={`p-4`}>
                                                                                {this.handleCodeDisplay(codeStringArrayForHTML[5])}
                                                                            </div>
                                                                        </div>
                                                                        <h3 className={`my-10 font-bold`}>Result :</h3>
                                                                        <div
                                                                            className={`border-2 border-gray-300 rounded-md`}>
                                                                            <img src={ImgResult5}/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                :
                                                                selectedMenuTitle === "HTML Formatting" ?
                                                                    <div className={`mb-10`}>
                                                                        <div className={`text-xl mb-10`}>Formatting
                                                                            elements were designed to display
                                                                            special types of text:
                                                                        </div>
                                                                        <iframe
                                                                            src="https://www.youtube.com/embed/Z2jLugGwOgI?si=jaN5WtYpqIPHXRhR&rel=0&autoplay=1"
                                                                            title="Formatting Elements"
                                                                            className={`w-full md:w-10/12 min-h-[40vh] md:min-h-[60vh] z-0`}
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                            referrerPolicy="strict-origin-when-cross-origin"
                                                                            allowFullScreen></iframe>

                                                                        <div
                                                                            className={`text-primary font-bold text-xl my-10`}>Explanation
                                                                        </div>
                                                                        <div className={`mb-10 ml-5 grid grid-cols-2`}
                                                                             type={"square"}>
                                                                            <li>{"<b> - Bold text"}</li>
                                                                            <li>{"<strong> - Important text"}</li>
                                                                            <li>{"<i> - Italic text"}</li>
                                                                            <li>{"<em> - Emphasized text"}</li>
                                                                            <li>{"<mark> - Marked text"}</li>
                                                                            <li>{"<small> - Smaller text"}</li>
                                                                            <li>{"<del> - Deleted text"}</li>
                                                                            <li>{"<ins> - Inserted text"}</li>
                                                                            <li>{"<sub> - Subscript text"}</li>
                                                                            <li>{"<sup> - Superscript text"}</li>
                                                                        </div>
                                                                        <hr className={`my-7 `}/>
                                                                        <div className={`my-10 font-bold text-lg`}>HTML
                                                                            Code
                                                                            Example
                                                                        </div>
                                                                        <div
                                                                            className={`border-2 border-gray-300 rounded-md`}>
                                                                            <div
                                                                                className={`flex justify-between gap-4 px-4 border-b border-solid border-gray-300`}>
                                                                                <div>HTML</div>
                                                                                <div
                                                                                    className={`hover:bg-gray-100 font-medium cursor-pointer px-2`}
                                                                                    onClick={() => this.handleCopyCode(codeStringArrayForHTML[6])}>Copy
                                                                                </div>
                                                                            </div>
                                                                            <div className={`p-4`}>
                                                                                {this.handleCodeDisplay(codeStringArrayForHTML[6])}
                                                                            </div>
                                                                        </div>
                                                                        <h3 className={`my-10 font-bold`}>Result :</h3>
                                                                        <div
                                                                            className={`border-2 border-gray-300 rounded-md`}>
                                                                            <img src={ImgResult6}/>
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                    <div className={`text-center`}>Coming Soon...</div>
                                        }
                                    </>
                                </>
                                :
                                <div className={`text-center`}>Coming Soon...</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;