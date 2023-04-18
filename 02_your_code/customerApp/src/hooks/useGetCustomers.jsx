import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
export default function getCustumers() {

  const params = useParams();
  console.log(params);


  const [post, getPost] = useState([])
  const [custumer, getCustumer] = useState([])
  const [creationDate, getCreationDate] = useState([])
  const API = 'http://localhost:8010/api/v1/customerdata/'+ params.id;
  
  const fetchPost = () => {

    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        getPost(res)
        getCustumer(res.data)
      })
  }
  
  useEffect(() => {
    fetchPost()
  }, [])
  return  (custumer)
}