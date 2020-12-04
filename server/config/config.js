process.env.PORT = process.env.PORT || 4000;

const validStatus = {
    values: ['available', 'asigned-waiting', 'asigned-called', 'anihilated']
}

const validStatusDic = {
    AVAILABLE: 'available',
    WAITING: 'asigned-waiting',
    CALLED: 'asigned-called',
    ANIHILATED: 'anihilated'
}

module.exports = [
    validStatus,
    validStatusDic
]