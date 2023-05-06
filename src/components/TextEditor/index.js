import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  ResponsiveContainer,
  Banner,
  Title,
  BannerImage,
  Editor,
  ButtonsContainer,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  TextArea,
} from './styledComponent'

class TextEditor extends Component {
  state = {
    textInput: '',
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline, textInput} = this.state
    return (
      <MainContainer>
        <ResponsiveContainer>
          <Banner>
            <Title>Text Editor</Title>
            <BannerImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </Banner>
          <Editor>
            <ButtonsContainer>
              <li>
                <BoldButton
                  type="button"
                  data-testid="bold"
                  isBold={isBold}
                  onClick={this.onClickBold}
                >
                  <VscBold size={25} />
                </BoldButton>
              </li>
              <li>
                <ItalicButton
                  type="button"
                  data-testid="italic"
                  isItalic={isItalic}
                  onClick={this.onClickItalic}
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </li>
              <li>
                <UnderlineButton
                  type="button"
                  data-testid="underline"
                  isUnderline={isUnderline}
                  onClick={this.onClickUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </li>
            </ButtonsContainer>
            <TextArea
              value={textInput}
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
              onChange={this.onChangeTextInput}
            />
          </Editor>
        </ResponsiveContainer>
      </MainContainer>
    )
  }
}
export default TextEditor
