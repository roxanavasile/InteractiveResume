import React, { PureComponent } from 'react';
import { oneOfType, string, number } from 'prop-types';
import './ContactForm.css';

const stringOrNumber = oneOfType([string, number]);

export default class Contacts extends PureComponent {
  static propTypes = {
    to: string.isRequired,
    className: string,
    titleMaxLength: stringOrNumber,
    titlePlaceholder: string,
    contentsRows: stringOrNumber,
    contentsMaxLength: stringOrNumber,
    contentsPlaceholder: string,
    buttonText: string,
  };

  static defaultProps = {
    className: '',
    titleMaxLength: 50,
    titlePlaceholder: 'Title...',
    contentsRows: 8,
    contentsMaxLength: 500,
    contentsPlaceholder: 'Contents...',
    buttonText: 'Send E-mail',
  };

  constructor(props) {
    super(props);

    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.props.to)) {
      throw new Error('Invalid email address');
    }
  }

  state = {
    title: '',
    contents: '',
  };

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  handleContents = (e) => {
    this.setState({ contents: e.target.value });
  };

  render() {
    const {
      to,
      className,
      titleMaxLength,
      titlePlaceholder,
      contentsRows,
      contentsMaxLength,
      contentsPlaceholder,
      buttonText,
    } = this.props;

    return (
      <div className="contact_form">

      <main className="pa4 black-80">
        <form className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Can't wait to hear from you!</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Title</label>
              <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email"
              name="email-address"
              id="email-address"
              value={this.state.title}
              onChange={this.handleTitle}
              maxLength={titleMaxLength}
              placeholder={titlePlaceholder}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Comments</label>
              <input
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="text"
              name="password"
              id="password"
              value={this.state.contents}
              onChange={this.handleContents}
              rows={contentsRows}
              maxLength={contentsMaxLength}
              placeholder={contentsPlaceholder}
              />
            </div>
          </fieldset>
          <div>
            <a
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" href={`mailto:${to}?subject=${this.state.title}&body=${this.state.contents.replace(/\n/g, '%0D%0A')}`}>
              {buttonText}
            </a>
          </div>

        </form>
      </main>
      </div>
    );
  }
}
