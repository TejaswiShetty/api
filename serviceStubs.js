 
'use strict';
const fs = require('fs');
let log = global.log;
var assert = require('assert');
var nock = require('nock');
module.exports = {
// //stubbing post requests , response from json file
// var posrrespjojs = nock('http://myapp.iriscouch.com')
//                 .get('/')
//                 .replyWithFile(200, __dirname + '/replies/user.json', { 'Content-Type': 'application/json' });

//stubbing post requests , response as json object

apimicrocall: function (){


// var postRespjo  = nock('http://abc.com/securities')
//                .post('/post', { username: 'pgte'})
//                .reply(200, {
//                 username: 'amulya shetty',
//                 token: '873246272adnj34ian',
//                 Account : [
//                     {
//                         'bankAccname':'Amulya',
//                         'bankBalance':"5000"
//                     },
//                     {
//                         'bankAccname':'Tejaswi',
//                         'bankBalance':'10000'
//                       },
//                     {
//                         'bankAccname':'Shetty',
//                         'bankBalance':'15000'  
//                     }  
//             ]
//                });
// return postRespjo;
//             },



var postRespjo  = nock('http://abc.com/securities')
               .post('/post', { username: 'pgte'})
               .reply(200, 
                {
                    'ClientPortfolioOverviewResponse':
                    {
                     'clientName':'testAlToken',
                     'asAtDate':'2018-04-12T00:18:08.953Z',
                     'estimatedIncomeTotal':'',
                     'marketValueTotal':'',
                     'unsettledTransactionsTotal':'',
                     'netPortfolioValueTotal':'',
                     'accounts': 
                     [
                         {
                             'cpCode':'ACC23',
                             'accountToken':'yet to finalize',
                             'cpAccountName':'client portal abkjfbas',
                             'estimatedIncome':'8809.48',
                             'marketValue':'88460.46',
                             'unsettledTransactions':'-51115.46',
                             'netPortfolioValue':'5345.00',
                             'interestRate':'5.50',
                             'availableFunds':'0341.98',
                             'currentBalance':'02345.00'

                         },
                         {
                            'cpCode':'ACC13',
                            'accountToken':'yet to finalize',
                            'cpAccountName':'Client Portal bfbask',
                            'estimatedIncome':'9809.48',
                            'marketValue':'58460.46',
                            'unsettledTransactions':'-41115.46',
                            'netPortfolioValue':'7345.00',
                            'interestRate':'6.50',
                            'availableFunds':'12341.98',
                            'currentBalance':'12345.00'
                         }
                     ]
  


                  }
                });
return postRespjo;
            },





//stubbing get requests , response as json object
// var getresp = nock('http://abc.com/securities')
//     .get('/get')
//     .reply(200, {
//       username: 'pgte',
//       token: '873246272adnj34ian',
//       name: 'morpheus'
//      });
        };
     