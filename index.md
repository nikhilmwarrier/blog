---
layout: index
title: Niklogs
changeFreq: daily
pagination:
  data: collections.posts
  size: 5
  alias: posts
---
{% for post in posts reversed %}
  <div class="post" onclick="window.location.href = '.{{ post.url }}'">
  {% if post.data.cover-image-alt-text %}
  		<img src="{{ post.data.cover-image | url }}" alt="{{ post.data.cover-image-alt-text }}">
  {% else %}
    <img loading="lazy" src="{{ post.data.cover-image | url }}" alt="Post Preview Image">
  {% endif %}
  	<div class="content">	
  		<h2>{{ post.data.title }}</h2>
  		<p>
  			{{ post.data.snippet }} <br />
  			<a href=".{{ post.url }}">Read More</a>
  			<br />
  			<em class="post-date">{{ post.date | date: "%b %d, %Y" }}</em>
  		</p>
  	</div>
  </div>
{% endfor %}

<div class="pagination">
  {% if pagination.href.previous %}
    <a href="{{pagination.href.previous}}">Previous Page</a>
  {% endif %}
  {% if pagination.href.next %}
    <a href="{{pagination.href.next}}">Next Page</a>
  {% endif %}
</div>