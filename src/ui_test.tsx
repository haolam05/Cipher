import * as assert from 'assert';
import * as React from 'react';
import { ShowResult, ShowResultProps } from './ui';


describe('ui', function() {
  it('ShowResult', function () {
    const result1: ShowResultProps = { word: "crazy", algo: "cipher", op: "encode" };
    const result2: ShowResultProps = { word: "kheca", algo: "cipher", op: "decode" };
    const result3: ShowResultProps = { word: "happy", algo: "cipher", op: "encode" };
    const result4: ShowResultProps = { word: "lejja", algo: "cipher", op: "decode" };

    const result5: ShowResultProps = { word: "apple", algo: "crazy-caps", op: "encode" };
    const result6: ShowResultProps = { word: "ApPlE", algo: "crazy-caps", op: "decode" };
    const result7: ShowResultProps = { word: "chips", algo: "crazy-caps", op: "encode" };
    const result8: ShowResultProps = { word: "ChIpS", algo: "crazy-caps", op: "decode" };

    const result9: ShowResultProps = { word: "that", algo: "pig-latin", op: "encode" };
    const result10: ShowResultProps = { word: "atthay", algo: "pig-latin", op: "decode" };
    const result11: ShowResultProps = { word: "so", algo: "pig-latin", op: "encode" };
    const result12: ShowResultProps = { word: "osay", algo: "pig-latin", op: "decode" };

    assert.deepEqual(ShowResult(result1), <p><code>word: {result1.word}<br></br>algo: {result1.algo}<br></br>op: {result1.op}<br></br><br></br>{result2.word}</code></p>);        // 1st test for (algo = cipher & op = encode) branch
    assert.deepEqual(ShowResult(result2), <p><code>word: {result2.word}<br></br>algo: {result2.algo}<br></br>op: {result2.op}<br></br><br></br>{result1.word}</code></p>);        // 1st test for (algo = cipher & op = decode) branch
    assert.deepEqual(ShowResult(result3), <p><code>word: {result3.word}<br></br>algo: {result3.algo}<br></br>op: {result3.op}<br></br><br></br>{result4.word}</code></p>);        // 2nd test for (algo = cipher & op = encode) branch
    assert.deepEqual(ShowResult(result4), <p><code>word: {result4.word}<br></br>algo: {result4.algo}<br></br>op: {result4.op}<br></br><br></br>{result3.word}</code></p>);        // 2nd test for (algo = cipher & op = decode) branch

    assert.deepEqual(ShowResult(result5), <p><code>word: {result5.word}<br></br>algo: {result5.algo}<br></br>op: {result5.op}<br></br><br></br>{result6.word}</code></p>);        // 1st test for (algo = crazy-caps & op = encode) branch
    assert.deepEqual(ShowResult(result6), <p><code>word: {result6.word}<br></br>algo: {result6.algo}<br></br>op: {result6.op}<br></br><br></br>{result5.word}</code></p>);        // 1st test for (algo = crazy-caps & op = decode) branch
    assert.deepEqual(ShowResult(result7), <p><code>word: {result7.word}<br></br>algo: {result7.algo}<br></br>op: {result7.op}<br></br><br></br>{result8.word}</code></p>);        // 2nd test for (algo = crazy-caps & op = encode) branch
    assert.deepEqual(ShowResult(result8), <p><code>word: {result8.word}<br></br>algo: {result8.algo}<br></br>op: {result8.op}<br></br><br></br>{result7.word}</code></p>);        // 2nd test for (algo = crazy-caps & op = decode) branch

    assert.deepEqual(ShowResult(result9 ), <p><code>word: {result9.word }<br></br>algo: {result9.algo }<br></br>op: {result9.op }<br></br><br></br>{result10.word}</code></p>);   // 1st test for (algo = pig-latin & op = encode) branch
    assert.deepEqual(ShowResult(result10), <p><code>word: {result10.word}<br></br>algo: {result10.algo}<br></br>op: {result10.op}<br></br><br></br>{result10.word }</code></p>);  // 1st test for (algo = pig-latin & op = decode) branch
    assert.deepEqual(ShowResult(result11), <p><code>word: {result11.word}<br></br>algo: {result11.algo}<br></br>op: {result11.op}<br></br><br></br>{result12.word}</code></p>);   // 2nd test for (algo = pig-latin & op = encode) branch
    assert.deepEqual(ShowResult(result12), <p><code>word: {result12.word}<br></br>algo: {result12.algo}<br></br>op: {result12.op}<br></br><br></br>{result11.word}</code></p>);   // 2nd test for (algo = pig-latin & op = decode) branch
  });

});