import { Adapter } from '../model/adapter';

export const mockAdapters :Adapter[]=[
    {
        name: 'basell',
        errorText: '',
        status: '0',
        keyStore:
            {
                side:'Key Store',
                name:'basell_keystore_PROD.jks',
                type:'JKS',
                pass: '',
                status: '',
                errorText: '',
                isUpdated: false,
                keys:[
                    {
                        alias:'Basell_cert',
                        serialNumber:'a8b55fe9b4a29f1c',
                        creationDate:new Date('2018-12-10'),
                        expiryDate:new Date('2019-12-10'),
                        details:'Owner: CN=*.360t.com, OU=360T, O=360T, ST=Some-State, C=DE',
                        status: '',
                        message: ''
                    },
                    {
                        alias:'connect.lyondellbasell.com',
                        serialNumber:'e6509ae4374964820000000050e5e616',
                        creationDate:new Date('2018-08-07'),
                        expiryDate:new Date('2020-08-06'),
                        details:'Owner: CN=*.360t.com, OU=360T, O=360T, ST=Some-State, C=DE',
                        status: '',
                        message: ''
                    }
                ]
            },
        trustStore: null,
        type: 'ti',
        isUpdated: false
    },
    {
        name: 'rtns',
        errorText: '',
        status: 'ERROR_STORE_HAS_INVALID_CERT',
        keyStore:
            {
                side:'Key Store',
                name:'rtns_keystore_PROD.jks',
                type:'JKS',
                pass: '',
                status: 'ERROR_INVALID_CERT',
                errorText: '',
                isUpdated: false,
                keys:[
                    {
                        alias:'Basell_cert',
                        serialNumber:'a8b55fe9b4a29f1c',
                        creationDate:new Date('2018-12-10'),
                        expiryDate:new Date('2019-06-10'),
                        details:'Owner: CN=*.360t.com, OU=360T, O=360T, ST=Some-State, C=DE',
                        status: '',
                        message: ''
                    },
                    {
                        alias:'connect.lyondellbasell.com',
                        serialNumber:'e6509ae4374964820000000050e5e616',
                        creationDate:new Date('2018-08-07'),
                        expiryDate:new Date('2020-08-06'),
                        details:'Owner: CN=*.360t.com, OU=360T, O=360T, ST=Some-State, C=DE',
                        status: '',
                        message: ''
                    }
                ]
            },
        trustStore:
        {
            side:'Trust Store',
            name:'rtns_truststore_PROD.jks',
            type:'JKS',
            pass: '',
            status: '',
            errorText: '',
            isUpdated: false,
            keys:[
                {
                    alias:'Rtns_cert',
                    serialNumber:'a8b55fe9b4a29f1c',
                    creationDate:new Date('2018-12-10'),
                    expiryDate:new Date('2019-12-10'),
                    details:'Owner: CN=*.360t.com, OU=360T, O=360T, ST=Some-State, C=DE',
                    status: '',
                    message: ''
                },
                {
                    alias:'connect.reuters.com',
                    serialNumber:'e6509ae4374964820000000050e5e616',
                    creationDate:new Date('2018-08-07'),
                    expiryDate:new Date('2019-08-22'),
                    details:'Owner: CN=*.360t.com, OU=360T, O=360T, ST=Some-State, C=DE',
                    status: '',
                    message: ''
                }
            ]
        },
        type: 'ti',
        isUpdated: false
    },
    {
        name: 'sap',
        errorText: '',
        status: '0',
        keyStore:
            {
                side:'Key Store',
                name:'basell_keystore_PROD.jks',
                type:'JKS',
                pass: '',
                status: '',
                errorText: '',
                isUpdated: false,
                keys:[
                    {
                        alias:'Basell_cert',
                        serialNumber:'a8b55fe9b4a29f1c',
                        creationDate:new Date('2018-12-10'),
                        expiryDate:new Date('2019-12-10'),
                        details:'Owner: CN=*.360t.com, OU=360T, O=360T, ST=Some-State, C=DE',
                        status: '',
                        message: ''
                    },
                    {
                        alias:'connect.lyondellbasell.com',
                        serialNumber:'e6509ae4374964820000000050e5e616',
                        creationDate:new Date('2018-08-07'),
                        expiryDate:new Date('2020-08-06'),
                        details:'Owner: CN=*.360t.com, OU=360T, O=360T, ST=Some-State, C=DE',
                        status: '',
                        message: ''
                    }
                ]
            },
        trustStore: null,
        type: 'ti',
        isUpdated: false
    },
    {
        name: 'eurex',
        errorText: '',
        status: 'ERROR_STORE_CORRUPTED',
        keyStore:
            {
                side:'Key Store',
                name:'basell_keystore_PROD.jks',
                type:'JKS',
                pass: '',
                status: 'ERROR_INVALID_SETTINGS',
                errorText: '',
                isUpdated: false,
                keys:[
                    {
                        alias:'Basell_cert',
                        serialNumber:'a8b55fe9b4a29f1c',
                        creationDate:new Date('2018-12-10'),
                        expiryDate:new Date('2019-12-10'),
                        details:'Owner: CN=*.360t.com, OU=360T, O=360T, ST=Some-State, C=DE',
                        status: '',
                        message: ''
                    },
                    {
                        alias:'connect.lyondellbasell.com',
                        serialNumber:'e6509ae4374964820000000050e5e616',
                        creationDate:new Date('2018-08-07'),
                        expiryDate:new Date('2020-08-06'),
                        details:'Owner: CN=*.360t.com, OU=360T, O=360T, ST=Some-State, C=DE',
                        status: '',
                        message: ''
                    }
                ]
            },
        trustStore: null,
        type: 'if',
        isUpdated: false
    },
    {
        name: 'sorosSTAR',
        errorText: '',
        status: '0',
        keyStore:
            {
                side:'Key Store',
                name:'basell_keystore_PROD.jks',
                type:'JKS',
                pass: '',
                status: '',
                errorText: '',
                isUpdated: false,
                keys:[
                    {
                        alias:'Basell_cert',
                        serialNumber:'a8b55fe9b4a29f1c',
                        creationDate:new Date('2018-12-10'),
                        expiryDate:new Date('2019-12-10'),
                        details:'Owner: CN=*.360t.com, OU=360T, O=360T, ST=Some-State, C=DE',
                        status: '',
                        message: ''
                    },
                    {
                        alias:'connect.lyondellbasell.com',
                        serialNumber:'e6509ae4374964820000000050e5e616',
                        creationDate:new Date('2018-08-07'),
                        expiryDate:new Date('2020-08-06'),
                        details:'Owner: CN=*.360t.com, OU=360T, O=360T, ST=Some-State, C=DE',
                        status: '',
                        message: ''
                    }
                ]
            },
        trustStore: null,
        type: 'if',
        isUpdated: false
    },
    {
        name: 'wingas',
        errorText: '',
        status: '0',
        keyStore:
            {
                side:'Key Store',
                name:'basell_keystore_PROD.jks',
                type:'JKS',
                pass: '',
                status: '',
                errorText: '',
                isUpdated: false,
                keys:[
                    {
                        alias:'Basell_cert',
                        serialNumber:'a8b55fe9b4a29f1c',
                        creationDate:new Date('2018-12-10'),
                        expiryDate:new Date('2019-12-10'),
                        details:'Owner: CN=*.360t.com, OU=360T, O=360T, ST=Some-State, C=DE',
                        status: '',
                        message: ''
                    },
                    {
                        alias:'connect.lyondellbasell.com',
                        serialNumber:'e6509ae4374964820000000050e5e616',
                        creationDate:new Date('2018-08-07'),
                        expiryDate:new Date('2020-08-06'),
                        details:'Owner: CN=*.360t.com, OU=360T, O=360T, ST=Some-State, C=DE',
                        status: '',
                        message: ''
                    }
                ]
            },
        trustStore: null,
        type: 'od',
        isUpdated: false
    }
];