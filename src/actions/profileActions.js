const saveDetailsActionGenerator = ({name, email, mobile} = {}) => ({
    type: 'SAVE_PROFILE_DETAILS',
    name,
    email,
    mobile
})

module.exports = {
    saveDetailsActionGenerator
}