class Validate {
  constructor (formElem) {
    this.form = formElem
    this.firstElemValidate = ''
    this.removeState()
  }

  validateEmail (objElem = {}) {
    for (const i in objElem) {
      const elem = objElem[i]
      const regex = /\S+@\S+\.\S+/
      const checkRule = regex.test(elem.value)
      if (!checkRule) {
        this.displayError(elem, 'Email must be valid !')
      } else { this.displaySucess(elem) }
    }
  }

  validateNumber (objElem = {}) {
    for (const i in objElem) {
      const elem = objElem[i]
      const regex = /^\d+$/
      const checkRule = regex.test(elem.value)
      if (!checkRule) {
        this.displayError(elem, 'Number only !')
      } else { this.displaySucess(elem) }
    }
  }

  validateRequired (objElem = {}) {
    for (const i in objElem) {
      const elem = objElem[i]
      if (elem) {
        const val = elem.value
        if (val.length === 0) {
          this.displayError(elem, 'Required !')
        } else { this.displaySucess(elem) }
      }
    }
  }

  removeState () {
    this.form.classList.remove('invalid')
  }

  displayError (elem, message) {
    const smallElem = elem.parentElement.querySelector('small')
    if (smallElem && smallElem.innerHTML === '') { smallElem.innerHTML = message }

    elem.classList.add('is-invalid')
    elem.classList.remove('is-valid')
    this.form.classList.add('invalid')
    //
    if (this.firstElemValidate === '') { this.firstElemValidate = elem }
  }

  displaySucess (elem) {
    elem.classList.add('is-valid')
    elem.classList.remove('is-invalid')
    const smallElem = elem.parentElement.querySelector('small')
    if (smallElem) { smallElem.innerHTML = '' }
  }

  scrollIntoError () {
    const elem = this.firstElemValidate
    if (elem) {
      elem.scrollIntoView(true)
      window.scrollBy(0, -500)
    }
  }

  formValidate () {
    return !this.form.classList.contains('invalid')
  }
}

export default Validate
