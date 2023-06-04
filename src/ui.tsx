import React from 'react';
import { cipher_decode, cipher_encode, crazy_caps_decode, crazy_caps_encode, pig_latin_decode, pig_latin_encode } from './latin_ops';
import { compact, explode } from './char_list';

/** Returns UI that displays a form asking for encode/decode input. */
export function MakeForm(_: {}): JSX.Element {
    // TODO: Replace this with something fully functional.
    return (
        <form action="/" method="get">
          word:
          <input type="text" id="word" name="word"></input>
          <br></br>

          algo:
          <select id="algo" name="algo">
            <option value="cipher">cipher</option>
            <option value="crazy-caps">crazy_caps</option>
            <option value="pig-latin">pig-latin</option>
          </select>
          <br></br>

          encode:<input type="radio" id="encode" name="op" value="encode"></input>
          decode:<input type="radio" id="decode" name="op" value="decode"></input>
          <br></br>

          <input type="submit" value="Submit"></input>
        </form>);
}


/** Properties expected for the ShowResult UI below. */
export interface ShowResultProps {
    word: string;
    algo: "cipher" | "crazy-caps" | "pig-latin";
    op: "encode" | "decode";
}

/**
 * Returns UI that shows the result of applying the specified operation to the
 * given word.
 */
export function ShowResult(props: ShowResultProps): JSX.Element {
  return <p><code>
    word: {props.word}<br></br>
    algo: {props.algo}<br></br>
    op: {props.op}<br></br><br></br>
    {
      props.algo === "cipher" ?
        (props.op === "encode" ? compact(cipher_encode(explode(props.word))) : compact(cipher_decode(explode(props.word))))
      : props.algo === "crazy-caps" ?
        (props.op === "encode" ? compact(crazy_caps_encode(explode(props.word))) : compact(crazy_caps_decode(explode(props.word))))
      : 
        (props.op === "encode" ? compact(pig_latin_encode(explode(props.word))) : compact(pig_latin_decode(explode(props.word))))
    }
  </code></p>
}