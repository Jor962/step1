import React, { useRef, useEffect, useState } from 'react';
import mapImage from "./Method Draw Image.png"
import "./style.css"

function IndoorMap() {
    const [highlightedRoom, setHighlightedRoom] = useState(null);

    function handleMouseEnter(roomId) {
        setHighlightedRoom(roomId);
    }

    function handleMouseLeave() {
        setHighlightedRoom(null);
    }

    // function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    //     var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
      
    //     return {
    //       x: centerX + (radius * Math.cos(angleInRadians)),
    //       y: centerY + (radius * Math.sin(angleInRadians))
    //     };
    // }
    
    // function describeArc(x, y, radius, startAngle, endAngle){
    //     var start = polarToCartesian(x, y, radius, endAngle);
    //     var end = polarToCartesian(x, y, radius, startAngle);
    //     var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    //     var d = [
    //         "M", start.x, start.y,
    //         "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    //     ].join(" ");
    //     return d;
    // }
    
    // document.getElementById('arc1').setAttribute("d", describeArc(172,196,13,10,100));    

    return (
        <div className="IndoorMap">
            <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                {/* <rect x="100" y="100" width="200" height="200" className={highlightedRoom === 1 ? 'highlighted' : ''} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} />
                <rect x="400" y="100" width="200" height="200" className={highlightedRoom === 2 ? 'highlighted' : ''} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} /> */}
                {/* coworking left */}
                <polyline points="81,34 140,29 142,31 158,30 160,28 270,21 272,23 288,22 290,20 350,20 352,22 368,23 370,21 480,28 482,30 498,31 500,29 559,34" fill='none' stroke='black' />
                <polyline points="81,34 100,215 140,210 148,218 148,209 159,208" fill='none' stroke='black' />
                <polyline points="160,219 188,216 186,202 " fill='none' stroke='black' />
                <line x1="153" y1="168" x2="160" y2="219" stroke="black" />
                <polyline points='185,196 179,156' fill='none' stroke='black' />
                <line x1="181" y1='171' x2='158' y2='174' stroke='black'/>
                {/* atameken space */}
                <line x1="151" y1='108' x2='149' y2='75' stroke='black'/>
                <line x1="170" y1='59' x2='200' y2='58' stroke='black'/>
                {/* <path id="arc1" fill="none" stroke="#446688" stroke-width="20" /> */}
                {/* large wall */}
                <polyline points="260,50 278,49 279,78 265,79" fill='none' stroke='black' />
                <line x1="259" y1='79' x2='233' y2='80' stroke='black'/>
                <line x1="265" y1='49' x2='264' y2='22' stroke='black'/>
                <polyline points="" fill='none' stroke='black' />

                {/* coworking right */}
                <polyline points="559,34 540,215 500,210 492,218 492,209 479,207.5" fill='none' stroke='black' />
                <polyline points="480,197 478,218 480,219 452,216 454,217 458,186 482,189" fill='none' stroke='black' />
                {/* second and third rooms */}
                <line x1="458" y1='186' x2='460' y2='166' stroke='black'/>
                <line x1="482" y1='189' x2='486' y2='153' stroke='black'/>
                <line x1="461.5" y1='156' x2='485' y2='159' stroke='black'/>
                <polyline points="485,159 461,156 461.5,150" fill='none' stroke='black' />
                <line x1="486.5" y1='149' x2='487.3' y2='142' stroke='black'/>
                {/* fourth room */}
                <polyline points="463,139 487.3,142 491,113" fill='none' stroke='black' />
                <polyline points="462.5,145 467.5,101 492,104 491.5,109" fill='none' stroke='black' />
                {/* mini room */}
                <polyline points="481,87.5 469,86 472,62 496,65 493,89.3 486,88.3" fill='none' stroke='black' />
                {/* right room */}
                <polyline points="550,118 517.2,114 518,106" fill='none' stroke='black' />
                <line x1="519" y1='101' x2='527' y2='32' stroke='black'/>
                <line x1="526" y1='87' x2='553' y2='90' stroke='black'/>
                {/* 2 large rooms */}
                <polyline points="443,83.5 445,59 410,56" fill='none' stroke='black' />
                <polyline points="384,54 382,80 437,84" fill='none' stroke='black' />
                <polyline points="403,55.7 384,54 357,52 355,78 376,79.5" fill='none' stroke='black' />
                {/* left entrance */}
                <line x1="187" y1='206' x2='262' y2='201' stroke='black'/>
                <polyline points="275,200.5 300,200 300,186" fill='none' stroke='black' />
                {/* elevators */}
                <polygon points="297,188 297,173 285,173 285,188" fill='none' stroke='black' />            
                <line x1="300" y1='175' x2='300' y2='150' stroke='black'/>
                <polygon points="297,168 297,153 285,153 285,168" fill='none' stroke='black' />            
                <line x1="300" y1='155' x2='300' y2='146' stroke='black'/>
                <polygon points="297,148 297,133 285,133 285,148" fill='none' stroke='black' />            
                {/* left inside */}
                <polyline points="300,135 300,112 221,116 226,203" fill='none' stroke='black' />
                <line x1="229" y1='115' x2='234' y2='203' stroke='black'/>
                <line x1="300" y1='191' x2='263' y2='192' stroke='black'/>
                <line x1="254" y1='192.2' x2='234' y2='193' stroke='black'/>

                <line x1="281" y1='191' x2='280' y2='113' stroke='black'/>
                <line x1="300" y1='129' x2='280' y2='129' stroke='black'/>
                <line x1="267" y1='192' x2='265' y2='121' stroke='black'/>
                <line x1="266" y1='157' x2='280' y2='157' stroke='black'/>
                <line x1="265" y1='140' x2='231' y2='141' stroke='black'/>
                {/* right entrance */}
                <line x1="455" y1='206' x2='368' y2='201' stroke='black'/>
                <polyline points="355,200.5 330,200 330,112" fill='none' stroke='black' />
                {/* right inside */}
                <polyline points="330,112 409,116 404,203" fill='none' stroke='black' />
                <line x1="401" y1='115' x2='396' y2='203' stroke='black'/>
                <line x1="330" y1='191' x2='367' y2='192' stroke='black'/>
                <line x1="376" y1='192.2' x2='384' y2='192.5' stroke='black'/>

                <line x1="384" y1='192.5' x2='384' y2='196' stroke='black'/>
                <line x1="380" y1='192.5' x2='382' y2='116' stroke='black'/>
                <line x1="392" y1='193' x2='396' y2='193' stroke='black'/>
                <line x1="381" y1='175' x2='398' y2='175.5' stroke='black'/>
                <line x1="352" y1='192' x2='354' y2='113' stroke='black'/>
                <line x1="353" y1='138' x2='381' y2='139' stroke='black'/>

                {/* atrium */}
                <line x1="105" y1='256' x2='195' y2='247' stroke='black'/>
                <line x1="206" y1='246' x2='245' y2='243' stroke='black'/>
                <line x1="246" y1='247' x2='280' y2='245' stroke='black'/>
                {/* 121 */}
                <polyline points="193,418 197,463 125,470 119,413 192,406 192.5,411" fill='none' stroke='black' />
                {/* 122 */}
                <polyline points="188,367 192,406 119,413 115,357 187,350 187.5 355" fill='none' stroke='black' />
                {/* 123 */}
                <polyline points="183,312 187,350 115,357 110,306 182,299 182.5,305" fill='none' stroke='black' />
                {/* 124 */}
                <polyline points="178,263 182,299 110,306 105,256 176.7,249.5 177.5,257" fill='none' stroke='black' />
                {/* coffee with doors */}
                <polygon points="214,246 223,361 253,358 245,243" fill='none' stroke='black' />
                <line x1="220.5" y1='336' x2='221.5' y2='344' stroke='white'/>
                <line x1="250.6" y1='327' x2='251' y2='337' stroke='white'/>
                {/* storage */}
                <polyline points="223,361 226,403 256.5,400 253,358" fill='none' stroke='black' />
                <line x1="250.6" y1='327' x2='251' y2='337' stroke='white'/>
                {/* under storage */}
                <polyline points="256.5,400 261,456.5 231,460 226,403" fill='none' stroke='black' />
                <line x1="229" y1='439' x2='230' y2='446' stroke='white'/>
                <line x1="229" y1='439' x2='230' y2='446' stroke='white'/>
                <line x1="259" y1='456.8' x2='242' y2='458.8' stroke='white'/>

                <line x1="231" y1='460' x2='211' y2='462' stroke='black'/>
                
                {/* entrance to hall */}
                <line x1="335" y1='245' x2='295' y2='245' stroke='black'/>
                {/* garderobe */}
                <polyline points="392,244 385,358 419,361 427,246" fill='none' stroke='black' />
                <line x1="424" y1='285' x2='425' y2='276' stroke='white'/>
                <line x1="386" y1='337' x2='387' y2='327' stroke='white'/>
                {/* something */}
                <polyline points="385,358 381,400 415,403 419,361" fill='none' stroke='black' />
                <line x1="382" y1='387' x2='383' y2='380' stroke='white'/>
                <line x1="415.5" y1='394' x2='416.5' y2='387' stroke='white'/>
                {/* security */}
                <polyline points="415,403 410,460 377,457 381,400" fill='none' stroke='black' />
                <line x1="411" y1='446' x2='412' y2='439' stroke='white'/>
                <line x1="410" y1='460' x2='396' y2='459' stroke='white'/>

                <line x1="410" y1='460' x2='430' y2='462' stroke='black'/>

                <line x1="535" y1='256' x2='445' y2='247' stroke='black'/>
                <line x1="434" y1='246' x2='393' y2='243' stroke='black'/>
                <line x1="392" y1='247' x2='350' y2='245' stroke='black'/>
                {/* 135 */}
                <polyline points="443,443 441,462 515,470 518,444 444,435" fill='none' stroke='black' />
                {/* 136 */}
                <polyline points="446,417 444,435 518,444 521,413 447.2,405 446.7,410" fill='none' stroke='black' />
                {/* 137 */}
                <polyline points="448,399 447.2,405 521,413 525,369 452,361.5 449,390" fill='none' stroke='black' />
                {/* 138 */}
                <polyline points="452.5,354 452,361.5 525,369 530,308 457,301 453,347" fill='none' stroke='black' />
                {/* 139 call-center */}
                <polyline points="457.7,293 457,301 530,308 535,256 461.7,249.5 458.5,285" fill='none' stroke='black' />

                {/* entrance to uni */}
                <line x1="258" y1='415' x2='283' y2='414' stroke='black'/>
                <line x1="299" y1='414' x2='311' y2='414' stroke='black'/>
                <line x1="260" y1='440' x2='285' y2='439' stroke='black'/>
                <line x1="301" y1='439' x2='310' y2='439' stroke='black'/>
                
                <line x1="380" y1='415' x2='353' y2='414' stroke='black'/>
                <line x1="339" y1='414' x2='327' y2='414' stroke='black'/>
                <line x1="378" y1='440' x2='351' y2='439' stroke='black'/>
                <line x1="335" y1='439' x2='326' y2='439' stroke='black'/>
            </svg>
        </div>
    );
}

export default IndoorMap;