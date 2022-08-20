import React from 'react'

export default function About(prop) {
  return (
    <section className='container'>
    <div>
    <p>This React app created by me "Sangam nayak 😅".<br/>
    This is my second Project in react, and now I think react is very cool.</p>
    
    <p>This is a Page App. you can see that when you click on Refresh and About or change modes, it's not reloading any pages.</p>
    </div>
    <div>
    <h1 className={`t${prop.mode}`} style={{margin:'50px auto 0'}}>What Can This App Do?</h1>
    <p>You just need to type your text in the textbox and then click on the given buttons.</p>
    <p>App can change your text</p>
    <ul>
    <li>To Uppercase</li>
    <li>To Lowercase</li>
    <li>Capitalize the first character of a word</li>
    <li>Remove all extra spaces</li>
    <li>Copy from the clipboard</li>
    </ul>
    <p>In the text summary, you can know how many words and characters are in the box, and the average time to read these by a human. at last, preview, where you can see your all texts.</p>

    </div>
    </section>
  )
}
