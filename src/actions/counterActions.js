const incrementActionGenerator = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
}) 

const decrementActionGenerator = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy : decrementBy
})

module.exports = {
    incrementActionGenerator,
    decrementActionGenerator
}