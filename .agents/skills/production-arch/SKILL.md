---
name: production-arch
description: Production-scale vacation rental marketplace architecture and scaling strategy standards.
---

# Production Vacation Rental Marketplace Architecture

This skill defines the technical blueprint and distributed systems design for a production-scale marketplace (Airbnb-tier).

## Key Subsystems
1. **Edge & Traffic Layer**:
   - Anycast CDN (Cloudflare / Fastly) for static asset edge caching and DDoS mitigation.
   - API Gateway with JWT verification, rate limiting (Token Bucket), and TLS termination.

2. **Microservices Core**:
   - **Listing Service**: High-read metadata service with Redis Read-Through cache.
   - **Search & Geospatial Engine**: Elasticsearch / OpenSearch cluster with H3/S2 spatial indexing and geo-distance scoring.
   - **Reservation & Inventory Service**: Distributed locking (Redlock) to prevent double-booking race conditions during high contention.
   - **Dynamic Pricing Engine**: Real-time surge, seasonality, and occupancy calculations.
   - **Reviews & Ratings Engine**: Asynchronous processing pipeline for verified booking reviews.

3. **Data Layer**:
   - Distributed SQL: PostgreSQL with Citus sharding / CockroachDB for ACID transaction reliability.
   - Cache Clusters: Multi-region Redis for session storage, availability calendars, and rate limiting.
   - Event Bus: Apache Kafka for order state changes, notification webhooks, and analytics ingestion.
