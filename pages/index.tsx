import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [hello, setHello] = useState('');
  const [posts, setPosts] = useState('');
  const [post, setPost] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [agify, setAgify] = useState('');

  const fetchHello = async () => {
    try {
      const response = await fetch('/api/hello');
      if (response.ok) {
        const data = await response.json();
        setHello(data);
      }
    } catch (err) {
      console.log('error fetch Hello');
      console.log(err);
    }
  };
  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      }
    } catch (err) {
      console.log('error fetch Posts');
      console.log(err);
    }
  };
  const fetchPost = async (id: string) => {
    try {
      const response = await fetch('/api/posts/' + id);
      if (response.ok) {
        const data = await response.json();
        setPost(data);
      } else {
        setPost('Not found');
        console.log('error fetch Post ' + id);
      }
    } catch (err) {
      setPost('Not found');
      console.log('error fetch Post ' + id);
      console.log(err);
    }
  };
  const fetchAge = async (name: string) => {
    try {
      const response = await fetch('/api/agify/?name=' + name);
      if (response.ok) {
        const data = await response.json();
        setAgify(data);
      } else {
        setAgify('Not found');
        console.log('error fetch agify for ' + name);
      }
    } catch (err) {
      setAgify('Not found');
      console.log('error fetch agify for ' + name);
      console.log(err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Hello</h1>
      <button onClick={() => fetchHello()}>Hello API</button>
      <p>Hello: {JSON.stringify(hello, null, 2)}</p>
      <button onClick={() => fetchPosts()}>Posts API</button>
      <p>Posts: {JSON.stringify(posts, null, 2)}</p>
      <div className={styles.buttons}>
        <input value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={() => fetchPost(id)}>Post API</button>
        <p>Post: {JSON.stringify(post, null, 2)}</p>
      </div>
      <div className={styles.buttons}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => fetchAge(name)}>Agify API</button>
        <p>Results: {JSON.stringify(agify, null, 2)}</p>
      </div>
    </div>
  );
};

export default Home;
