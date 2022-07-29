package com.exam.service.imp;

import com.exam.model.HomeBus;
import com.exam.repository.HomeBusRepository;
import com.exam.service.HomeBusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeBusServiceImp implements HomeBusService {
    @Autowired
    private HomeBusRepository homeBusRepository;

    @Override
    public List<HomeBus> findAll() {
        return (List<HomeBus>) homeBusRepository.findAll();
    }
}
