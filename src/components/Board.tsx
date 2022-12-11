import * as React from 'react';
import {
  Container,
  Grid, Image,
  Header,
  Segment,
} from 'semantic-ui-react';
import { ResponsiveContainer, footer } from "./Homepage"

interface HomepageHeadingProps {
  mobile: boolean;
}


/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

function MemberImage(img: string, name: string, func: string) {
    return (
        <Grid.Column className="thirdwidth">
            <Container className="center aligned">
                <Image circular src={img} size="large"/>
                <div>
                    {name}<br/>
                    {func}
                </div>
            </Container>
        </Grid.Column>
    );
}

export class Board extends React.Component<{}, { 
  committeeNo?: number,
  delegateNo?: number
}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ResponsiveContainer>
        <Segment style={{ padding: '3em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle" flex>
            <Grid.Row>
              <Grid.Column width={16}>
                <Header className="center aligned"
                    as="h1"
                    content="Board"
                    style={{
                        fontSize:'4em',
                        fontWeight: 'normal',
                    }}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row float>
              {MemberImage(
                    "blankPerson.jpg",
                    "Dylan Christensen",
                    "Board Member"
                )}
              {MemberImage(
                    "blankPerson.jpg",
                    "Julia Cope",
                    "Board Member"
                )}
                {MemberImage(
                    "blankPerson.jpg",
                    "Jan-Vincent Makowski",
                    "Board Member"
                )}
            </Grid.Row>
            <Grid.Row float>
                {MemberImage(
                    "blankPerson.jpg",
                    "Pierre Mathier",
                    "Board Member"
                )}
                {MemberImage(
                    "blankPerson.jpg",
                    "Marius Marthe",
                    "Former Board Member"
                )}
                {MemberImage(
                    "blankPerson.jpg",
                    "Jane Dewhurst",
                    "Faculty Correspondant"
                )}
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Container className="center aligned">
                  Temporary images from: second-renaissance.wikia.com
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        {footer}
      </ResponsiveContainer>
    );
  }
}



export class FormerBoard extends React.Component<{}, { 
  committeeNo?: number,
  delegateNo?: number
}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ResponsiveContainer>
        <Segment style={{ padding: '3em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle" flex>
            <Grid.Row>
              <Grid.Column width={16}>
                <Header className="center aligned"
                    as="h1"
                    content="Former Members"
                    style={{
                        fontSize:'4em',
                        fontWeight: 'normal',
                    }}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row float>
              {MemberImage(
                    "/blankPerson.jpg",
                    "Marius Marthe",
                    "Board Member"
                )}
              {MemberImage(
                    "/blankPerson.jpg",
                    "Julian Wandhoven",
                    "IT Consultant"
                )}
                {MemberImage(
                    "/blankPerson.jpg",
                    "",
                    ""
                )}
                
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Container className="center aligned">
                  Temporary images from: second-renaissance.wikia.com
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        {footer}
      </ResponsiveContainer>
    );
  }
}