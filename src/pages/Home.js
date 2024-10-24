import React from "react";
import logo from "../assets/ItNetworkLogo.jpg"
import {FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/fa";
import ImgResult1 from "../assets/1.png";

const codeStringArrayForHTML = [
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "\t<title></title>\n" +
    "</head>\n" +
    "<body>\n" +
    "\t<h1>Heading for h1</h1>\n" +
    "\t<h2>Heading for h2</h2>\n" +
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
                    className={`w-full fixed top-14 flex justify-center bg-secondary text-white font-bold h-7 border-t border-b border-solid border-primary`}>
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
                                                 className={`py-3 hover:bg-activePrimary hover:text-white px-5 ${selectedMenuTitle === language.label && 'bg-activePrimary text-black font-black'}`}>
                                                {language.label}
                                            </div>
                                    )

                            }
                        </div>
                    </div>
                    <div className={`w-full md:w-10/12 px-4 md:ml-[15%] md:mt-5 md:absolute md:px-10 text-black overflow-y-auto overflow-hidden`}>
                        {
                            selectedLanguage === "html" ?
                                <>
                                    <div
                                        className={`text-xl md:text-2xl font-semibold mb-4`}>{selectedMenuTitle}</div>
                                    <>
                                        {
                                            selectedMenuTitle === "Introduction" ?
                                                <div>
                                                    <div>Stand for : Hyper Text Market Language</div>
                                                </div>
                                                :
                                                selectedMenuTitle === "Installation" ?
                                                    <div>
                                                        <iframe
                                                            src="https://www.youtube.com/embed/NLEHISMioQw?si=zW4VrRx7Rd4ju2s-"
                                                            title="How to install Sublime Text?"
                                                            className={`w-full md:w-10/12 min-h-[40vh]`}
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                            referrerPolicy="strict-origin-when-cross-origin"
                                                            allowFullScreen></iframe>
                                                    </div>
                                                    :
                                                    selectedMenuTitle === "Guide to File Creation" ?
                                                        <div>
                                                            <iframe
                                                                src="https://www.youtube.com/embed/1AqvGotyxWI?si=MrxHucop7hO9WCAT"
                                                                title="How to use Sublime Text for HTML file?"
                                                                className={`w-full md:w-10/12 min-h-[40vh]`}
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                referrerPolicy="strict-origin-when-cross-origin"
                                                                allowFullScreen></iframe>
                                                        </div>
                                                        :
                                                        selectedMenuTitle === "HTML Heading" ?
                                                            <div>
                                                                <iframe
                                                                    src="https://www.youtube.com/embed/5C6EawooflQ?si=pOTS76STe3TsE9rm"
                                                                    title="Header"
                                                                    className={`w-full md:w-10/12 min-h-[40vh]`}
                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                                    allowFullScreen></iframe>

                                                                <div className={`my-4`}>
                                                                    <h3 className={`my-4 font-bold`}>HTML Code
                                                                        Example</h3>
                                                                    <div
                                                                        className={`border-2 border-gray-300 rounded-md`}>
                                                                        <div
                                                                            className={`flex justify-between gap-4 px-4 border-b border-solid border-gray-300`}>
                                                                            <div>HTML</div>
                                                                            <div
                                                                                className={`hover:bg-gray-100 font-medium cursor-pointer`}
                                                                                onClick={() => this.handleCopyCode(codeStringArrayForHTML[0])}>Copy
                                                                            </div>
                                                                        </div>
                                                                        <div className={`p-4`}>
                                                                            {this.handleCodeDisplay(codeStringArrayForHTML[0])}
                                                                        </div>
                                                                    </div>

                                                                    <h3 className={`my-4 font-bold`}>Result :</h3>
                                                                    <div className={`border-2 border-gray-300 rounded-md`}>
                                                                        <img src={ImgResult1}/>
                                                                    </div>
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