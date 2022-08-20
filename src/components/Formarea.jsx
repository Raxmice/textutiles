import React, { useState } from 'react'

export default function Formarea(prop) {
    let mode = prop.mode;
    let tcolor = "t" + mode;
    let btn = "btn " + mode;
    const [text, setText] = useState("");
    const [alert, setalert] = useState("");
    const [show, setshow] = useState("none");
    function textBox(event) {
        setText(event.target.value);
    }
    function clickHandle(event) {
        let btn = event.target.name;
        if (btn === "upper") {
            setText(text.toUpperCase());
            setalert("Uppercase");
        } else if (btn === "lower") {
            setText(text.toLowerCase());
            setalert("Lowercase");
        } else if (btn === "capfirst") {
            const arr = text.split(" ");
            for (var i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            }
            const str2 = arr.join(" ");
            setText(str2);
            setalert("Capitalized");
        } else if (btn === "clear") {
            setText("");
            setalert("Box is cleared");
        } else if (btn === "removespace") {
            setText(text.split(/[ ]+/).join(" "))
            setalert("Spaces removed")
        } else if (btn === "copy") {
            // var txt = document.getElementsByClassName("textarea");
            // txt.select();
            navigator.clipboard.writeText(text);
            setalert("Clipboard copyed");
        }
        setshow("block");
        setTimeout(()=>setshow("none"), 1500);

    }
    return (
        <div>
            <section className='container' style={{marginTop:'0'}}>
            <div className='alertbox'><div className={`alert ${prop.mode}`} style={{display:show}}><p>{alert} <span className="material-symbols-outlined">
            done
            </span></p></div></div>
                <label className={tcolor}>Enter sentences in this textbox</label><br />
                <textarea name='textarea' onChange={textBox} value={text} className="textarea" rows={8} placeholder="Type your text here..."></textarea><br />
                <button className={btn} onClick={clickHandle} name="upper">Upper</button>
                <button className={btn} onClick={clickHandle} name="lower">lover</button>
                <button className={btn} onClick={clickHandle} name="capfirst">Capitalize the first</button>
                <button className={btn} onClick={clickHandle} name="removespace">Remove extra spaces</button>
                <button className={btn} onClick={clickHandle} name="copy">Copy text</button>
                <button className={btn} onClick={clickHandle} name="clear">Clear</button>
            </section>
            <section className='container'>
                <h1 className={tcolor}>Your text summary</h1>
                <p>{text.split(" ").length} words {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} minutes to read.</p><br/>
                <h2 className={tcolor}>Preview</h2>
                <p>{text.length>0 ? text:"Type your Text inside the given textbox."}</p>
            </section>
        </div>
    )
}
