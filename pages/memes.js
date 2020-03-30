import React from 'react';
import fetch from 'node-fetch'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile'; 
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Navbar from '../components/Navbar';

class Memes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
    }
    componentDidMount() {
        var thing = this.props.posts.graphql.hashtag.edge_hashtag_to_media.edges;
        var posts = [];
        for(var i in thing) {
            posts.push(thing[i].node);
        }
        function compare(a, b) {
            const aVal = a.edge_liked_by.count;
            const bVal = b.edge_liked_by.count;
            if(aVal < bVal) return 1;
            if(bVal < aVal) return -1;

            return 0;
        }
        posts.sort(compare);
        console.log(posts);
        this.setState({posts: posts});
    }
    render() {
        return(<React.Fragment>
            <Navbar />
            <GridList cellHeight={450} cols={3}>
            {this.state.posts.map(post => (
                <GridListTile key={post.thumbnail_resources[2].src} onClick={() => window.open(`https://www.instagram.com/p/${post.shortcode}/?utm_source=ig_web_copy_link`)}>
                    <img src={post.thumbnail_resources[2].src} />
                    <GridListTileBar title={post.edge_media_to_caption.edges[0].node.text} subtitle={<span>{post.edge_liked_by.count} Likes</span>}></GridListTileBar>
                </GridListTile>
            ))}
            </GridList>
        </React.Fragment>);
    }
}

export async function getStaticProps() {
    const res = await fetch('https://www.instagram.com/explore/tags/sdcv19/?__a=1');
    const posts = await res.json();
    return {
        props: {
            posts
        }
    }
}

export default Memes;