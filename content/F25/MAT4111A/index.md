---
title: 'MAT 4111A: Putnam Preparation'
layout: layouts/mat4111AF25.njk
---

<h1 style="margin:0;">MAT 4111A</h1>
<h4 style="margin:0;">Putnam Preparation</h4>

## Problem solving techniques
<ul>
{% for post in collections.all %}
  {% if post.data.blog == "MAT4111AF25" %}
    <li><a href="{{ post.url }}">{{ post.data.title }}</a> </li>
  {% endif %}
{% endfor %}
</ul>
