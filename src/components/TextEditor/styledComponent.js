import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #1b1c22;
  width: 80%;
  padding: 2%;
`

export const Banner = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`

export const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 600;
  color: #f8fafc;
`

export const BannerImage = styled.img`
  width: 100%;
`

export const Editor = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 12px;
`

export const ButtonsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  padding: 0px;
  margin: 0px;
  list-style-type: none;
`

export const BoldButton = styled.button`
  margin: 8px;
  margin-inline: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.isBold ? '#faff00' : '#f1f5f9')};
`

export const ItalicButton = styled.button`
  margin: 8px;
  margin-inline: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.isItalic ? '#faff00' : '#f1f5f9')};
`

export const UnderlineButton = styled.button`
  margin: 8px;
  margin-inline: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.isUnderline ? '#faff00' : '#f1f5f9')};
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 1.5;
  color: #cbd5e1;
  border: none;
  border-top: 1px solid #334155;
  outline: none;
  background-color: transparent;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 12px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
`
