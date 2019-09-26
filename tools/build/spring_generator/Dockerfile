FROM python:2.7-slim
WORKDIR /
COPY . /
RUN mkdir /project
RUN rm -rf /project/*.*
ENTRYPOINT [ "python","springGenerator.py"]
VOLUME /project