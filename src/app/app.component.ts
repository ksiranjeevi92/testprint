import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  codeType = '';

  printData = [];

   data = [  
   {  
      "boxId":2,
      "boxCode":"BPLUNRMI000002",
      "totalPackQuantity":10,
      "totalBaseQuantity":100,
      "orderReference":"BTD",
      "boxStatus":1,
      "growerCode":"BPL",
      "dayStamp":null,
      "boxType":"",
      "inwardUnloadTransactionId":0,
      "inwardQCTransactionId":0,
      "inwardReceiptTransactionId":0,
      "isExcessBox":false,
      "flowers":[  
         {  
            "boxFlowerId":2,
            "itemCode":"F100001",
            "description":"ROSE - Upper Class",
            "color":"RED",
            "size":"40 CM",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":10,
            "baseQuantity":100
         }
      ]
   },
   {  
      "boxId":3,
      "boxCode":"NHFUNRMI000003",
      "totalPackQuantity":10,
      "totalBaseQuantity":100,
      "orderReference":"BTD",
      "boxStatus":1,
      "growerCode":"NHF",
      "dayStamp":null,
      "boxType":"",
      "inwardUnloadTransactionId":0,
      "inwardQCTransactionId":0,
      "inwardReceiptTransactionId":0,
      "isExcessBox":false,
      "flowers":[  
         {  
            "boxFlowerId":3,
            "itemCode":"F100006",
            "description":"ROSE - Upper Class",
            "color":"RED",
            "size":"40 CM",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":10,
            "baseQuantity":100
         }
      ]
   },
   {  
      "boxId":7,
      "boxCode":"NHFUNRMI000007",
      "totalPackQuantity":10,
      "totalBaseQuantity":100,
      "orderReference":"BTD",
      "boxStatus":1,
      "growerCode":"NHF",
      "dayStamp":null,
      "boxType":"",
      "inwardUnloadTransactionId":0,
      "inwardQCTransactionId":0,
      "inwardReceiptTransactionId":0,
      "isExcessBox":false,
      "flowers":[  
         {  
            "boxFlowerId":7,
            "itemCode":"F100006",
            "description":"ROSE - Upper Class",
            "color":"RED",
            "size":"40 CM",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":10,
            "baseQuantity":100
         }
      ]
   },
   {  
      "boxId":9,
      "boxCode":"SUBUNRMI000009",
      "totalPackQuantity":12,
      "totalBaseQuantity":120,
      "orderReference":"BTD",
      "boxStatus":1,
      "growerCode":"SUB",
      "dayStamp":null,
      "boxType":"",
      "inwardUnloadTransactionId":0,
      "inwardQCTransactionId":0,
      "inwardReceiptTransactionId":0,
      "isExcessBox":false,
      "flowers":[  
         {  
            "boxFlowerId":10,
            "itemCode":"F100081",
            "description":"ROSE - Ace Pink",
            "color":"PIN",
            "size":"60 CM",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":6,
            "baseQuantity":60
         },
         {  
            "boxFlowerId":11,
            "itemCode":"F100083",
            "description":"ROSE - Ace Pink",
            "color":"PIN",
            "size":"80 CM",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":6,
            "baseQuantity":60
         }
      ]
   },
   {  
      "boxId":15,
      "boxCode":"BPLUNRMW000015",
      "totalPackQuantity":179,
      "totalBaseQuantity":1790,
      "orderReference":"BTF35001",
      "boxStatus":1,
      "growerCode":"BPL",
      "dayStamp":null,
      "boxType":"",
      "inwardUnloadTransactionId":0,
      "inwardQCTransactionId":0,
      "inwardReceiptTransactionId":0,
      "isExcessBox":false,
      "flowers":[  
         {  
            "boxFlowerId":32,
            "itemCode":"F100001",
            "description":"ROSE - Upper Class",
            "color":"RED",
            "size":"40 CM",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":50,
            "baseQuantity":500
         },
         {  
            "boxFlowerId":39,
            "itemCode":"F100001",
            "description":"ROSE - Upper Class",
            "color":"RED",
            "size":"40 CM",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":4,
            "baseQuantity":40
         },
             {  
            "boxFlowerId":32,
            "itemCode":"F100001",
            "description":"ROSE - Upper Class",
            "color":"RED",
            "size":"40 CM",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":50,
            "baseQuantity":500
         },
         {  
            "boxFlowerId":39,
            "itemCode":"F100001",
            "description":"ROSE - Upper Class",
            "color":"RED",
            "size":"40 CM",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":4,
            "baseQuantity":40
         }
      ]
   },
   {  
      "boxId":17,
      "boxCode":"BPLUNRMT000017",
      "totalPackQuantity":13,
      "totalBaseQuantity":130,
      "orderReference":"NFL012010",
      "boxStatus":1,
      "growerCode":"BPL",
      "dayStamp":null,
      "boxType":"",
      "inwardUnloadTransactionId":0,
      "inwardQCTransactionId":0,
      "inwardReceiptTransactionId":0,
      "isExcessBox":false,
      "flowers":[  
         {  
            "boxFlowerId":43,
            "itemCode":"F100001",
            "description":"ROSE - Upper Class",
            "color":"RED",
            "size":"40 CM",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":10,
            "baseQuantity":100
         },
         {  
            "boxFlowerId":44,
            "itemCode":"F100003",
            "description":"ROSE - Upper Class",
            "color":"RED",
            "size":"60 CM",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":3,
            "baseQuantity":30
         }
      ]
   },
   {  
      "boxId":18,
      "boxCode":"UELUNRMT000018",
      "totalPackQuantity":12,
      "totalBaseQuantity":120,
      "orderReference":"ABCD01254",
      "boxStatus":1,
      "growerCode":"UEL",
      "dayStamp":null,
      "boxType":"",
      "inwardUnloadTransactionId":0,
      "inwardQCTransactionId":0,
      "inwardReceiptTransactionId":0,
      "isExcessBox":false,
      "flowers":[  
         {  
            "boxFlowerId":47,
            "itemCode":"F100037",
            "description":"LIOR - Table Dance",
            "color":"PIN",
            "size":"3+",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":5,
            "baseQuantity":50
         },
         {  
            "boxFlowerId":46,
            "itemCode":"F100038",
            "description":"LIOR - Ice Clear",
            "color":"WHI",
            "size":"2+",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":4,
            "baseQuantity":40
         },
         {  
            "boxFlowerId":45,
            "itemCode":"F100039",
            "description":"LIOR - Ice Clear",
            "color":"WHI",
            "size":"3+",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":3,
            "baseQuantity":30
         }
      ]
   },
   {  
      "boxId":19,
      "boxCode":"UELUNRMT000019",
      "totalPackQuantity":12,
      "totalBaseQuantity":120,
      "orderReference":"ABCD01254",
      "boxStatus":1,
      "growerCode":"UEL",
      "dayStamp":null,
      "boxType":"",
      "inwardUnloadTransactionId":0,
      "inwardQCTransactionId":0,
      "inwardReceiptTransactionId":0,
      "isExcessBox":false,
      "flowers":[  
         {  
            "boxFlowerId":50,
            "itemCode":"F100037",
            "description":"LIOR - Table Dance",
            "color":"PIN",
            "size":"3+",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":5,
            "baseQuantity":50
         },
         {  
            "boxFlowerId":49,
            "itemCode":"F100038",
            "description":"LIOR - Ice Clear",
            "color":"WHI",
            "size":"2+",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":4,
            "baseQuantity":40
         },
         {  
            "boxFlowerId":48,
            "itemCode":"F100039",
            "description":"LIOR - Ice Clear",
            "color":"WHI",
            "size":"3+",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":3,
            "baseQuantity":30
         }
      ]
   },
   {  
      "boxId":20,
      "boxCode":"UELUNRMT000020",
      "totalPackQuantity":12,
      "totalBaseQuantity":120,
      "orderReference":"ABCD01254",
      "boxStatus":1,
      "growerCode":"UEL",
      "dayStamp":null,
      "boxType":"",
      "inwardUnloadTransactionId":0,
      "inwardQCTransactionId":0,
      "inwardReceiptTransactionId":0,
      "isExcessBox":false,
      "flowers":[  
         {  
            "boxFlowerId":53,
            "itemCode":"F100037",
            "description":"LIOR - Table Dance",
            "color":"PIN",
            "size":"3+",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":5,
            "baseQuantity":50
         },
         {  
            "boxFlowerId":52,
            "itemCode":"F100038",
            "description":"LIOR - Ice Clear",
            "color":"WHI",
            "size":"2+",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":4,
            "baseQuantity":40
         },
         {  
            "boxFlowerId":51,
            "itemCode":"F100039",
            "description":"LIOR - Ice Clear",
            "color":"WHI",
            "size":"3+",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":3,
            "baseQuantity":30
         }
      ]
   },
   {  
      "boxId":21,
      "boxCode":"UELUNRMT000021",
      "totalPackQuantity":12,
      "totalBaseQuantity":120,
      "orderReference":"ABCD01254",
      "boxStatus":1,
      "growerCode":"UEL",
      "dayStamp":null,
      "boxType":"",
      "inwardUnloadTransactionId":0,
      "inwardQCTransactionId":0,
      "inwardReceiptTransactionId":0,
      "isExcessBox":false,
      "flowers":[  
         {  
            "boxFlowerId":56,
            "itemCode":"F100037",
            "description":"LIOR - Table Dance",
            "color":"PIN",
            "size":"3+",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":5,
            "baseQuantity":50
         },
         {  
            "boxFlowerId":55,
            "itemCode":"F100038",
            "description":"LIOR - Ice Clear",
            "color":"WHI",
            "size":"2+",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":4,
            "baseQuantity":40
         },
         {  
            "boxFlowerId":54,
            "itemCode":"F100039",
            "description":"LIOR - Ice Clear",
            "color":"WHI",
            "size":"3+",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":3,
            "baseQuantity":30
         }
      ]
   },
   {  
      "boxId":22,
      "boxCode":"UELUNRMT000022",
      "totalPackQuantity":12,
      "totalBaseQuantity":120,
      "orderReference":"ABCD01254",
      "boxStatus":1,
      "growerCode":"UEL",
      "dayStamp":null,
      "boxType":"",
      "inwardUnloadTransactionId":0,
      "inwardQCTransactionId":0,
      "inwardReceiptTransactionId":0,
      "isExcessBox":false,
      "flowers":[  
         {  
            "boxFlowerId":59,
            "itemCode":"F100037",
            "description":"LIOR - Table Dance",
            "color":"PIN",
            "size":"3+",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":5,
            "baseQuantity":50
         },
         {  
            "boxFlowerId":58,
            "itemCode":"F100038",
            "description":"LIOR - Ice Clear",
            "color":"WHI",
            "size":"2+",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":4,
            "baseQuantity":40
         },
         {  
            "boxFlowerId":57,
            "itemCode":"F100039",
            "description":"LIOR - Ice Clear",
            "color":"WHI",
            "size":"3+",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":3,
            "baseQuantity":30
         }
      ]
   },
   {  
      "boxId":23,
      "boxCode":"BPLUNRUI000023",
      "totalPackQuantity":10,
      "totalBaseQuantity":100,
      "orderReference":"BTD",
      "boxStatus":1,
      "growerCode":"BPL",
      "dayStamp":null,
      "boxType":"",
      "inwardUnloadTransactionId":0,
      "inwardQCTransactionId":0,
      "inwardReceiptTransactionId":0,
      "isExcessBox":false,
      "flowers":[  
         {  
            "boxFlowerId":60,
            "itemCode":"F100001",
            "description":"ROSE - Upper Class",
            "color":"RED",
            "size":"40 CM",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":10,
            "baseQuantity":100
         }
      ]
   },
   {  
      "boxId":24,
      "boxCode":"BPLUNRUI000024",
      "totalPackQuantity":10,
      "totalBaseQuantity":100,
      "orderReference":"BTD",
      "boxStatus":1,
      "growerCode":"BPL",
      "dayStamp":null,
      "boxType":"",
      "inwardUnloadTransactionId":0,
      "inwardQCTransactionId":0,
      "inwardReceiptTransactionId":0,
      "isExcessBox":false,
      "flowers":[  
         {  
            "boxFlowerId":61,
            "itemCode":"F100001",
            "description":"ROSE - Upper Class",
            "color":"RED",
            "size":"40 CM",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":10,
            "baseQuantity":100
         }
      ]
   },
   {  
      "boxId":33,
      "boxCode":"BPLUNRUD000033",
      "totalPackQuantity":14,
      "totalBaseQuantity":140,
      "orderReference":"AFRID1020",
      "boxStatus":1,
      "growerCode":"BPL",
      "dayStamp":null,
      "boxType":"",
      "inwardUnloadTransactionId":0,
      "inwardQCTransactionId":0,
      "inwardReceiptTransactionId":0,
      "isExcessBox":false,
      "flowers":[  
         {  
            "boxFlowerId":71,
            "itemCode":"F100002",
            "description":"ROSE - Upper Class",
            "color":"RED",
            "size":"50 CM",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":9,
            "baseQuantity":90
         },
         {  
            "boxFlowerId":70,
            "itemCode":"F100004",
            "description":"ROSE - Upper Class",
            "color":"RED",
            "size":"70 CM",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":5,
            "baseQuantity":50
         }
      ]
   }
];

data1 =  {  
      "boxId":33,
      "boxCode":"BPLUNRUD000033",
      "totalPackQuantity":14,
      "totalBaseQuantity":140,
      "orderReference":"AFRID1020",
      "boxStatus":1,
      "growerCode":"BPL",
      "dayStamp":null,
      "boxType":"",
      "inwardUnloadTransactionId":0,
      "inwardQCTransactionId":0,
      "inwardReceiptTransactionId":0,
      "isExcessBox":false,
      "flowers":[  
         {  
            "boxFlowerId":71,
            "itemCode":"F100002",
            "description":"ROSE - Upper Class",
            "color":"RED",
            "size":"50 CM",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":9,
            "baseQuantity":90
         },
         {  
            "boxFlowerId":70,
            "itemCode":"F100004",
            "description":"ROSE - Upper Class",
            "color":"RED",
            "size":"70 CM",
            "packUoMCode":"BUNCH10",
            "baseUoMCode":"STEM",
            "packQuantity":5,
            "baseQuantity":50
         }
      ]
   };

constructor() {
  for(let i = 0; i<= 1000; i++) {
    this.printData.push(this.data1);
  }
}
  

  print() {
    
var array5bit_A = [ 'f//AAAAAAAAAAAAAAAAAAAA', 'f//AAAAAAAAAAAAAAAAAAAB', 'f//AAAAAAAAAAAAAAEAAAD/', 'f//AAAAAAAAAAAAAAEAAAAA', 'f//AAAAAAAAAQAAAP8AAAAA', 'f//AAAAAAAAAQAAAP8AAAAB', 'f//AAAAAAAAAQAAAAAAAAD/', 'f//AAAAAAAAAQAAAAAAAAAA', 'f//AAABAAAA/wAAAAAAAAAA', 'f//AAABAAAA/wAAAAAAAAAB', 'f//AAABAAAA/wAAAAEAAAD/', 'f//AAABAAAA/wAAAAEAAAAA', 'f//AAABAAAAAAAAAP8AAAAA', 'f//AAABAAAAAAAAAP8AAAAB', 'f//AAABAAAAAAAAAAAAAAD/', 'f//AAABAAAAAAAAAAAAAAAA', 'QD/AAD/AAAAAAAAAAAAAAAA', 'QD/AAD/AAAAAAAAAAAAAAAB', 'QD/AAD/AAAAAAAAAAEAAAD/', 'QD/AAD/AAAAAAAAAAEAAAAA', 'QD/AAD/AAAAAQAAAP8AAAAA', 'QD/AAD/AAAAAQAAAP8AAAAB', 'QD/AAD/AAAAAQAAAAAAAAD/', 'QD/AAD/AAAAAQAAAAAAAAAA', 'QD/AAAAAAAA/wAAAAAAAAAA', 'QD/AAAAAAAA/wAAAAAAAAAB', 'SL/AADeAAAA/gAAAAIAAAD+', 'QD/AAAAAAAA/wAAAAEAAAAA', 'QD/AAAAAAAAAAAAAP8AAAAA', 'QD/AAAAAAAAAAAAAP8AAAAB', 'QD/AAAAAAAAAAAAAAAAAAD/', 'QD/AAAAAAAAAAAAAAAAAAAA'];
var array5bit_B = [ 'US0CAuSD38g', 'UUYCA7QBErs', 'ajEDAm49ReY', 'UUoCA+juogg', 'bjEDAjQrOn0', 'bkoDA3iPVH4', 'ajUDAt82atY', 'UU4CA1nljTg', 'cjEDAghkmFU', 'ckoDA0TA9lY', 'izUEAhrxcbg', 'ck4DAxY8F10', 'bjUDAlvFFR8', 'bk4DAxdhexw', 'ajkDAr7LFAw', 'UVICAyQ+UJI', 'TTECAq7UnEM', 'TUoCA+Jw8kA', 'ZjUDAmZGozo', 'TU4CA7CME0s', 'ajUDAvnk9E4', 'ak4DA7VAmk0', 'ZjkDAtle3bI', 'TVICAxOyzrM', 'STUCAqHeHtM', 'SU4CA+16cNA', 'h6QEAZKdo54', 'SVICA62zYxM', 'RTkCAqx1lb4', 'RVICA/z3WM0', 'QT0CAkdoxRU', 'KFYBA46vJCA'];

var stringStart = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAACCAQAAADLaIVbAAAANUlEQVQIHQEqANX/A';
var stringMid = 'AAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAA';
var stringEnd = 'AAAAASUVORK5CYII=" style="width:';

function genBarcode(inputString, intWidth, intHeight) {
  'use strict';
  var arraySeq = [], i, intChunks, resultString, intRawmod = inputString.length % 5;
  if (intRawmod > 0) {
		for (i = 0; i < 5 - intRawmod; i += 1) {
			inputString += "0";
		}
	}
  intChunks = inputString.length / 5;

  for (i = 0; i < intChunks; i += 1) {
		arraySeq[i] = parseInt(inputString.substr(i * 5, 5), 2);
	}

	resultString = "";
  for (i = 0; i < arraySeq.length; i += 1) {
		resultString += stringStart + array5bit_A[arraySeq[i]] + stringMid + array5bit_B[arraySeq[i]] + stringEnd + intWidth + 'px;height:' + intHeight + 'px;">';
  }
  // console.log(resultString)
  return resultString;
}

var arrayCode128Bin = [ '11011001100', '11001101100', '11001100110', '10010011000', '10010001100', '10001001100', '10011001000', '10011000100', '10001100100', '11001001000', '11001000100', '11000100100', '10110011100', '10011011100', '10011001110', '10111001100', '10011101100', '10011100110', '11001110010', '11001011100', '11001001110', '11011100100', '11001110100', '11101101110', '11101001100', '11100101100', '11100100110', '11101100100', '11100110100', '11100110010', '11011011000', '11011000110', '11000110110', '10100011000', '10001011000', '10001000110', '10110001000', '10001101000', '10001100010', '11010001000', '11000101000', '11000100010', '10110111000', '10110001110', '10001101110', '10111011000', '10111000110', '10001110110', '11101110110', '11010001110', '11000101110', '11011101000', '11011100010', '11011101110', '11101011000', '11101000110', '11100010110', '11101101000', '11101100010', '11100011010', '11101111010', '11001000010', '11110001010', '10100110000', '10100001100', '10010110000', '10010000110', '10000101100', '10000100110', '10110010000', '10110000100', '10011010000', '10011000010', '10000110100', '10000110010', '11000010010', '11001010000', '11110111010', '11000010100', '10001111010', '10100111100', '10010111100', '10010011110', '10111100100', '10011110100', '10011110010', '11110100100', '11110010100', '11110010010', '11011011110', '11011110110', '11110110110', '10101111000', '10100011110', '10001011110', '10111101000', '10111100010', '11110101000', '11110100010', '10111011110', '10111101110', '11101011110', '11110101110', '11010000100', '11010010000', '11010011100', '1100011101011', '11010111000'];


var strRaw = "";
var arrayData = [];

function funcConsumeEscape(inputChar) {
	'use strict';
	switch (inputChar) {
	case 96: 
		return 102;
	case 49: 
		return 97;
	case 50: 
		return 96;
	case 51: 
		return 96;
	case 52: 
		return 100;
	case 65: 
		return 101;
	case 66: 
		return 100;
	case 67: 
		return 99;
	case 68: 
		return 95;
	case 97: 
		return 98;
	case 98: 
		return 98;
	default:
		return (inputChar - 32);
	}
}


function funcCode128B(strText) {
  'use strict';
  var i, j, intWeight, intLength, intWtProd = 0;
  arrayData = [];

	intLength = strText.length;
	arrayData[0] = 104;
	intWtProd = 104;
	for (i = 0, j = 0; i < intLength; i += 1, j += 1) {
		if (strText[i] !== "`") {
			arrayData[j + 1] = strText.charCodeAt(i) - 32;
			intWeight = j + 1;
			intWtProd += intWeight * arrayData[j + 1];
		} else {
			i += 1;
			arrayData[j + 1] = funcConsumeEscape(strText.charCodeAt(i));
			intWeight = j + 1;
			intWtProd += intWeight * arrayData[j + 1];
		}
	}
	arrayData[j + 1] = intWtProd % 103;
	arrayData[j + 2] = 106;
	strRaw = "";
	for (i = 0; i < arrayData.length; i += 1) {
		strRaw += arrayCode128Bin[arrayData[i]];
	}
  return ''
} 

// var buttonBarcode = document.getElementById("btnGenBar");
// buttonBarcode.onclick = function () {
//   'use strict';
// 	var intHt, intWd, strImages;
// 	intHt = intWd = 0;
// 	strImages = "";
// 	intWd = 5;
// 	intHt = 50;
	// strText = document.getElementById("textBarcode").value;
	// document.getElementById("result").innerHTML = strImages = genBarcode(strRaw, intWd, intHt);
	// document.getElementById("textResult").innerHTML = strText

// };
    let printTemplate = '';
    if(this.codeType === 'barCode'){
      printTemplate = `

<html>

<head>
	<style>
      @media print{
        body {
          margin-top:0 !important;
           margin-right: 4mm;
           margin-left: 4mm;
           }
      @page {
        margin: 0;
      }
      }
      .container {
        page-break-after:always;
        margin-top: 4mm;
        margin-bottom: 4mm;
        padding: 0;
        height: 42mm;
        margin-left: 4mm !important;
      }
	</style>
  <script>
  </script>
</head>

<body>
${this.printData.map((item, i) => `
  ${funcCode128B(item.boxCode)}
     	<div id="container" class="container" style="width: 92mm;">
  
		<div id="header" style="height: 22mm;display: table; width: 100%">
      ${item.flowers.map((item2, i) => `
       <div style="display: table-row;overflow: hidden; text-overflow: ellipsis;
       white-space: nowrap;font-family: Arial, Helvetica, sans-serif;font-size: 13px">
       <div style="display: table-cell;width: 20%">${item2.baseUoMCode}</div>
       <div style="display: table-cell;width: 65%">${item2.description}</div>
       <div style="display: table-cell;width: 15%">${item2.color}</div>
       <div style="display: table-cell; 10%">${item2.size}</div>
       </div>
      `.trim()).join('')}
    </div>



		<div id="barcode" style="height: 20mm;display: table;width: 100%;">
    <div style="display: table-row;width: 100%">
    <div style="table-cell;">
    <div style="table-column;">
    <span>${genBarcode(strRaw, 6, 50)}</span>
    </div>
    <div style="table-column">
    <span style="letter-spacing: 0.2rem;text-align: center;font-size: 18px;font-family: Arial Black">${item.boxCode}</span>
    </div>
    </div>

    <div style="display: table-cell;overflow: hidden;border-spacing: 0;
     text-overflow: ellipsis;font-weight: bold;
     white-space: nowrap;font-family: Arial Black;vertical-align: middle;
     text-align: center;letter-spacing: 0; transform: scaleY(1.4)">
     <span style="vertical-align: top;font-size: 16px;position: relative;bottom: 8;
        ">${item.orderReference}</span>
     </div>

    </div>
    </div>
	
	
	</div>
  `.trim()).join('')}
 

</body>

</html>
`;
    }

var myWindow = window.open("", "BarCode Print");
 myWindow.document.write(printTemplate);
setTimeout(() => {

  // myWindow.print();
  // myWindow.close();
});
return false;
  }
}
