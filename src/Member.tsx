import * as React from 'react';
import * as firebase from 'firebase';
import { Label, Icon, Flag } from 'semantic-ui-react';

interface Props { 
  fref: firebase.database.Reference;
}

interface State {
  member: MemberData;
}

export enum Rank {
    Veto = 'Veto',
    Standard = 'Standard',
    NGO = 'NGO',
    Observer = 'Observer'
}

export type MemberID = string;

export interface MemberData {
  name: string;
  present: boolean;
  rank: Rank;
  voting: boolean;
}

export const MemberView = (props: { data: MemberData, fref: firebase.database.Reference }) => {
  const makeHandler = (field: string) => (e: React.FormEvent<HTMLInputElement>) =>
    props.fref.child(field).set(e.currentTarget.value);

  // TODO: Make the yes-no displays tick/checkmarks
  // TODO: Make the Rank display a dropdown for the Rank Enum

  return (
    <Label as="a" image size="large" >
      <Flag as="i" name={props.data.name.toLowerCase() as any} />
      {props.data.name}
      {<Label.Detail>Present</Label.Detail>}
      {props.data.present && <Label.Detail>Present</Label.Detail>}
      {props.data.voting && <Label.Detail>Voting</Label.Detail>}
      <Icon name="delete" onClick={() => props.fref.remove()} />
    </Label>
  );
};

const DEFAULT_MEMBER = {
  name: '',
  present: true,
  rank: Rank.Standard,
  voting: true,
};

export default class Member extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { 
      member: DEFAULT_MEMBER,
    };
  }

  componentDidMount() {
    this.props.fref.on('value', (member) => {
      if (member) {
        this.setState({ member: member.val() });
      }
    });
  }

  componentWillUnmount() {
    this.props.fref.off();
  }

  render() {
    return <MemberView data={this.state.member} fref={this.props.fref} />;
  }
}
