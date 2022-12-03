import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import NavBar from './../NavBar/NavBar';
import Header from './../Header/Header';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const Home = () => {
    const { data } = useLoaderData();
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <div className='row container m-auto'>

                {data.map((item, index) => {
                    return (
                        <div className='col-md-4 col-lg-4 col-sm-1' key={index}>
                            <Card style={{ width: '18rem', margin: '20px auto' }} >
                                <img alt="Sample" src={item.logo} className="bg-dark" />
                                <CardBody>
                                    <CardTitle tag="h5">{item.name}</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        Do you want to practice {item.name}?
                                    </CardSubtitle>
                                    <CardText>
                                        Total question: {item.total}
                                    </CardText>
                                    <Link to={`/quiz/${item.id}`}><Button >
                                        Start Practice
                                    </Button>
                                    </Link>
                                </CardBody>
                            </Card>
                        </div>

                    )
                })}

            </div>

        </div>
    );
};

export default Home;