import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const Container = styled.div`
  position: relative;
  border: solid .02rem #DDD;
  border-radius: 4px;
  padding: .8rem;
  margin-bottom: 1rem;

  &:hover > * {
    display: block;
  }

  & > *:first-child {
    max-width: 87%;
    display: inline-block;
    margin-bottom: .3rem;
    cursor: pointer;

    &:hover {
      opacity: .7;
    }
  }
`;

const Actions = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: .8rem;
  display: none;
  background: #FFF;

  & > *:not(span) {
    display: inline-flex;
    margin-left: .5rem;
    vertical-align: top;
    cursor: pointer;

    &:hover {
      opacity: .7;
    }
  }
`;

const Card = ({ title, description, onView, onEdit, onRemove }) => {
  const [confirm, setConfirm] = useState();

  return (
    <Container>
      <Typography variant="h5" component="h3" onClick={onView}>
        {title}
      </Typography>
      <Typography component="p">
        {description}
      </Typography>
      <Actions>
        {confirm ? (
          <>
            <Typography component="span">
              Do you really want to remove?
            </Typography>
            <DoneIcon onClick={onRemove} title="Confirm" />
            <CloseIcon onClick={() => setConfirm()} title="Cancel" />
          </>
        ) : (
          <>
            <VisibilityOutlinedIcon onClick={onView} title="Visualization" />
            <EditOutlinedIcon onClick={onEdit} title="Edit" />
            <DeleteOutlinedIcon onClick={() => setConfirm(true)} title="Remove" />
          </>
        )}
      </Actions>
    </Container>
  );
};

export default Card;
