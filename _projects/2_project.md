---
layout: page
title: "AI-Based Computer Vision for Marine Production Systems"
description: Computer vision pipelines for marine production monitoring and automated feeding optimization.
img: assets/img/marine-thumbnail.jpg
importance: 2
category: applied ai
---

## Overview

Developed computer vision systems for improving productivity in marine fish production through automated, species-specific feeding optimization for olive flounder and stone flounder. The system distinguished fish condition into two categories for feeding-related monitoring and decision support, combining population-level and individual-level analysis.

## Approach

- **YOLO** for whole-population movement pattern analysis -- detecting group feeding behavior and activity levels
- **SAM (Segment Anything Model)** for individual-level fish size estimation and growth monitoring
- Applied to real production environments for species-specific feeding protocol optimization
- Patent filed for the automated feeding system methodology

## Screenshots

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/marine-yolo.png" title="YOLO fish detection" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/marine-sam.png" title="SAM size estimation" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/marine-environment.png" title="Production environment" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: YOLO detection output. Middle: SAM segmentation for size estimation. Right: Production environment setup.
</div>

## Stack

**Detection:** YOLO
**Segmentation:** SAM (Segment Anything Model)
**Processing:** Python, OpenCV
**Domain:** Olive flounder, stone flounder -- marine aquaculture

## Relevance

Demonstrates applied AI/ML engineering in a domain-specific production system -- the same pattern of building working systems for agricultural and biological applications, combining sensing, data processing, and decision support.

## Related Patent

Methods for Selecting Spores from Laver Farm Devices. Patent KR102034354B1, 2019.
[Google Patents](https://patents.google.com/patent/KR20190055413A/en)
