---
layout: base.njk
title: Art
subtitle: Visual Artist
---
<div class="gallery">
  <div class="gallery-grid">
    {%- for art in artwork %}
    <div class="gallery-item">
      <img src="/assets/art/{{ art.filename }}" alt="{{ art.title }}{% if art.year %} ({{ art.year }}){% endif %}">
      {%- if art.description %}
      <div class="gallery-caption">{{ art.description }}</div>
      {%- endif %}
    </div>
    {%- endfor %}
  </div>
</div>