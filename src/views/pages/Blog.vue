<template>
  <div class="blog">
    <!-- Page Title Starts -->
    <section
      class="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1"
    >
      <h1>my <span>blog</span></h1>
      <span class="title-bg">posts</span>
    </section>
    <!-- Page Title Ends -->
    <section
      class="main-content revealator-slideup revealator-once revealator-delay1"
    >
      <div class="container">
        <!-- Articles Starts -->
        <div class="row">
          <!-- Article Starts -->
          <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
            <article class="post-container">
              <div class="post-thumb">
                <router-link
                  :to="{ name: 'blog-post' }"
                  class="d-block position-relative overflow-hidden"
                >
                  <img
                    src="/frontend/img/blog/blog-post-1.jpg"
                    class="img-fluid"
                    alt="Blog Post"
                  />
                </router-link>
              </div>
              <div class="post-content">
                <div class="entry-header">
                  <h3>
                    <router-link :to="{ name: 'blog-post' }"
                      >How to Own Your Audience by Creating an Email
                      List</router-link
                    >
                  </h3>
                </div>
                <div class="entry-content open-sans-font">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore...
                  </p>
                </div>
              </div>
            </article>
          </div>
          <!-- Article Ends -->
          <!-- Article Starts -->
          <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
            <article class="post-container">
              <div class="post-thumb">
                <router-link
                  :to="{ name: 'blog-post' }"
                  class="d-block position-relative overflow-hidden"
                >
                  <img
                    src="/frontend/img/blog/blog-post-2.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </router-link>
              </div>
              <div class="post-content">
                <div class="entry-header">
                  <h3>
                    <router-link :to="{ name: 'blog-post' }"
                      >Top 10 Toolkits for Deep Learning in 2020</router-link
                    >
                  </h3>
                </div>
                <div class="entry-content open-sans-font">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore...
                  </p>
                </div>
              </div>
            </article>
          </div>
          <!-- Article Ends -->
          <!-- Article Starts -->
          <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
            <article class="post-container">
              <div class="post-thumb">
                <router-link
                  :to="{ name: 'blog-post' }"
                  class="d-block position-relative overflow-hidden"
                >
                  <img
                    src="/frontend/img/blog/blog-post-3.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </router-link>
              </div>
              <div class="post-content">
                <div class="entry-header">
                  <h3>
                    <router-link :to="{ name: 'blog-post' }"
                      >Everything You Need to Know About Web
                      Accessibility</router-link
                    >
                  </h3>
                </div>
                <div class="entry-content open-sans-font">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore...
                  </p>
                </div>
              </div>
            </article>
          </div>
          <!-- Article Ends -->
          <!-- Article Starts -->
          <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
            <article class="post-container">
              <div class="post-thumb">
                <router-link
                  :to="{ name: 'blog-post' }"
                  class="d-block position-relative overflow-hidden"
                >
                  <img
                    src="/frontend/img/blog/blog-post-4.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </router-link>
              </div>
              <div class="post-content">
                <div class="entry-header">
                  <h3>
                    <router-link :to="{ name: 'blog-post' }"
                      >How to Inject Humor & Comedy Into Your Brand</router-link
                    >
                  </h3>
                </div>
                <div class="entry-content open-sans-font">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore...
                  </p>
                </div>
              </div>
            </article>
          </div>
          <!-- Article Ends -->
          <!-- Article Starts -->
          <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
            <article class="post-container">
              <div class="post-thumb">
                <router-link
                  :to="{ name: 'blog-post' }"
                  class="d-block position-relative overflow-hidden"
                >
                  <img
                    src="/frontend/img/blog/blog-post-5.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </router-link>
              </div>
              <div class="post-content">
                <div class="entry-header">
                  <h3>
                    <router-link :to="{ name: 'blog-post' }"
                      >Women in Web Design: How To Achieve Success</router-link
                    >
                  </h3>
                </div>
                <div class="entry-content open-sans-font">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore...
                  </p>
                </div>
              </div>
            </article>
          </div>
          <!-- Article Ends -->
          <!-- Article Starts -->
          <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
            <article class="post-container">
              <div class="post-thumb">
                <router-link
                  :to="{ name: 'blog-post' }"
                  class="d-block position-relative overflow-hidden"
                >
                  <img
                    src="/frontend/img/blog/blog-post-6.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </router-link>
              </div>
              <div class="post-content">
                <div class="entry-header">
                  <h3>
                    <router-link :to="{ name: 'blog-post' }"
                      >Evergreen versus topical content: An
                      overview</router-link
                    >
                  </h3>
                </div>
                <div class="entry-content open-sans-font">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore...
                  </p>
                </div>
              </div>
            </article>
          </div>
          <!-- Article Ends -->
          <!-- Pagination Starts -->
          <div class="col-12 mt-4">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center mb-0">
                <li class="page-item">
                  <router-link class="page-link" href="#">1</router-link>
                </li>
                <li class="page-item active">
                  <router-link class="page-link" href="#">2</router-link>
                </li>
                <li class="page-item">
                  <router-link class="page-link" href="#">3</router-link>
                </li>
                <li class="page-item">
                  <router-link class="page-link" href="#">4</router-link>
                </li>
              </ul>
            </nav>
          </div>
          <!-- Pagination Ends -->
        </div>
        <!-- Articles Ends -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Blog",
};
</script>

<style>
</style>