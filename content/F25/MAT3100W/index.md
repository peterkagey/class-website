---
title: 'MAT 3100W: Introduction to Mathematical Proof'
layout: layouts/mat3100WF25.njk
---

<h1 style="margin:0;">MAT 3100W</h1>
<h4 style="margin:0;">Introduction to Mathematical Proof</h4>

## Assignments list
<ul>
{% for post in collections.all %}
  {% if post.data.blog == "MAT3100WF25" %}
    <li><a href="{{ post.url }}">{{ post.data.title }}</a> </li>
  {% endif %}
{% endfor %}
</ul>

## Other assignments
- [Proofs portfolio instructions](/F25/MAT3100W/proofs_portfolio/)
- [Final project instructions](/F25/MAT3100W/project/)
